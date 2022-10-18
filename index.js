const rust = import("./pkg");

const numberWithCommas = (x) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const isObject = (object) => {
  return object != null && typeof object === "object";
};

const isDeepEqual = (object1, object2) => {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) return false;

  for (var key of objKeys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    const isObjects = isObject(value1) && isObject(value2);

    if (
      (isObjects && !isDeepEqual(value1, value2)) ||
      (!isObjects && value1 !== value2)
    ) {
      return false;
    }
  }
  return true;
};

const randomInt = (rightBound) => Math.floor(Math.random() * rightBound);

const randomString = (size) => {
  const alphaChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let generatedString = "";

  for (let i = 0; i < size; i++)
    generatedString += alphaChars[randomInt(alphaChars.length)];

  return generatedString;
};

const createRandomObj = (fieldCount, allowNested) => {
  let generatedObj = {};

  for (let i = 0; i < fieldCount; i++) {
    let generatedObjField;

    switch (randomInt(allowNested ? 5 : 4)) {
      case 0:
        generatedObjField = randomInt(1000);
        break;

      case 1:
        generatedObjField = Math.random();
        break;

      case 2:
        generatedObjField = Math.random() < 0.5 ? true : false;
        break;

      case 3:
        generatedObjField = randomString(randomInt(4) + 4);
        break;

      case 4:
        generatedObjField = createRandomObj(randomInt(100), false);
        break;
    }
    generatedObj[randomString(8)] = generatedObjField;
  }
  return generatedObj;
};

rust
  .then(async (m) => {
    const cachedObject = [];
    const resultObject = [];

    console.log("Generating random objects...");
    for (let i = 0; i < 100; i++)
      cachedObject.push(createRandomObj(12500, true));

    console.log("Running Benchmark...");
    console.time("benchmark");
    for (const obj of cachedObject) resultObject.push(m.decode(m.encode(obj)));
    console.timeEnd("benchmark");

    let correct = 0;
    let keyCount = 0;
    let nestedObject = 0;
    for (const [index, obj] of cachedObject.entries()) {
      if (isDeepEqual(obj, resultObject[index])) correct++;

      keyCount += Object.keys(obj).length;
      nestedObject += Object.values(obj).filter((obj) => {
        const isObj = isObject(obj);
        if (isObj) keyCount += Object.keys(obj).length;
        return isObj;
      }).length;
    }

    console.log(
      `Accuracy: ${
        (correct / cachedObject.length) * 100
      }%\nObject count: ${numberWithCommas(
        cachedObject.length
      )}\nObject key count: ${numberWithCommas(
        keyCount
      )}\nNested objects: ${numberWithCommas(nestedObject)}`
    );
  })
  .catch(console.error);
