export interface MiniBossData {
    EnemyType: number;
    EncounteredModifiers: number[];
}

export interface CachePreviousRun {
    Location: number;
    Layer: number;
}

export interface UpgradeCoolDown {
    Type: number;
    TotalElapsedGameTime: number;
    Duration: number;
}

export interface LocationSeed {
    Location: number;
    Seed: number;
}

export interface CurrentRoomCoordinates {
    y: number;
    x: number;
}

export interface Thought {
    ThoughtType: number;
    ThoughtGroup: number;
    Modifier: number;
    StartingModifier: number;
    Duration: number;
    Quantity: number;
    Stacking: number;
    StackModifier: number;
    TotalCountDisplay: number;
    ReduceOverTime: boolean;
    CoolDowns: number[];
    TimeStarted: number[];
    FollowerID: number;
    TrackThought: boolean;
}

export interface LastPosition {
    z: number;
    y: number;
    x: number;
}

export interface SavedFollowerTaskDestination {
    z: number;
    y: number;
    x: number;
}

export interface Inventory {
    type: number;
    quantity: number;
    QuantityReserved: number;
    UnreservedQuantity: number;
}

export interface ReactionsAndTime {
    StructureID: number;
    TimeReacted: number;
    IDType: number;
}

export interface TaskMemory {
    Task: number;
    Time: number;
}

export interface Relationship {
    ID: number;
    Relationship: number;
    CurrentRelationshipState: number;
}

export interface Follower {
    ID: number;
    Name: string;
    CursedState: number;
    WorkerBeenGivenOrders: boolean;
    follower_pitch: number;
    follower_vibrato: number;
    SermonCountAfterlife: number;
    SermonCountFood: number;
    SermonCountLawAndOrder: number;
    SermonCountPossession: number;
    SermonCountWorkAndWorship: number;
    TraitsSet: boolean;
    SkinCharacter: number;
    SkinVariation: number;
    SkinColour: number;
    SkinName: string;
    Outfit: number;
    Necklace: number;
    IsFakeBrain: boolean;
    DayJoined: number;
    Age: number;
    LifeExpectancy: number;
    SacrificialType: number;
    LeavingCult: boolean;
    DiedOfIllness: boolean;
    DiedOfOldAge: boolean;
    DiedOfStarvation: boolean;
    DiedFromTwitchChat: boolean;
    DiedInPrison: boolean;
    StartingCursedState: number;
    Faction: number;
    FollowerRole: number;
    WorkerPriority: number;
    CurrentOverrideTaskType: number;
    CurrentOverrideStructureType: number;
    OverrideDayIndex: number;
    OverrideTaskCompleted: boolean;
    Thoughts: Thought[];
    Adoration: number;
    FollowerLevel: number;
    XPLevel: number;
    HomeLocation: number;
    Location: number;
    LastPosition: LastPosition;
    SavedFollowerTaskType: number;
    SavedFollowerTaskLocation: number;
    SavedFollowerTaskDestination: SavedFollowerTaskDestination;
    DwellingID: number;
    PreviousDwellingID: number;
    DwellingLevel: number;
    DwellingSlot: number;
    RandomSeed: number;
    MissionaryTimestamp: number;
    MissionaryDuration: number;
    MissionaryIndex: number;
    MissionaryType: number;
    MissionaryChance: number;
    MissionaryFinished: boolean;
    MissionarySuccessful: boolean;
    MissionaryRewards?: any;
    Inventory: Inventory[];
    DaysSleptOutside: number;
    HadFuneral: boolean;
    Traits: number[];
    OldAge: boolean;
    MarriedToLeader: boolean;
    FirstTimeSpeakingToPlayer: boolean;
    ComplainingAboutNoHouse: boolean;
    ComplainingNeedBetterHouse: boolean;
    TaxEnforcer: boolean;
    FaithEnforcer: boolean;
    ViewerID?: any;
    PrayProgress: number;
    DevotionGiven: number;
    IsStarving: boolean;
    BathroomFillRate: number;
    DissentDuration: number;
    DissentGold: number;
    GivenDissentWarning: boolean;
    ReactionsAndTime: ReactionsAndTime[];
    TaskMemory: TaskMemory[];
    InteractionCoolDownFasting: number;
    InteractionCoolDownEnergizing: number;
    InteractionCoolDownMotivational: number;
    InteractionCoolDemandDevotion: number;
    FastingUntil: number;
    GuaranteedGoodInteractionsUntil: number;
    IncreasedDevotionOutputUntil: number;
    BrainwashedUntil: number;
    MotivatedUntil: number;
    LastBlessing: number;
    LastSermon: number;
    LastVomit: number;
    LastReeducate: number;
    LastHeal: number;
    PaidTithes: boolean;
    ReceivedBlessing: boolean;
    ReeducatedAction: boolean;
    KissedAction: boolean;
    Inspired: boolean;
    PetDog: boolean;
    Intimidated: boolean;
    Bribed: boolean;
    WakeUpDay: number;
    MissionaryExhaustion: number;
    TaxCollected: number;
    TaxedToday: boolean;
    FaithedToday: boolean;
    CursedStateVariant: number;
    Relationships: Relationship[];
    CachedLumber: number;
    CachedLumberjackStationID: number;
    MemberDuration: number;
    SacrificialValue: number;
    MaxHP: number;
    HP: number;
    Happiness: number;
    Faith: number;
    FearLove: number;
    Satiation: number;
    Starvation: number;
    Bathroom: number;
    TargetBathroom: number;
    Social: number;
    Vomit: number;
    Rest: number;
    Illness: number;
    Exhaustion: number;
    Dissent: number;
    Reeducation: number;
    CurrentPlayerQuest?: any;
    WorkThroughNight: boolean;
}

export interface Thought2 {
    ThoughtType: number;
    ThoughtGroup: number;
    Modifier: number;
    StartingModifier: number;
    Duration: number;
    Quantity: number;
    Stacking: any;
    StackModifier: number;
    TotalCountDisplay: number;
    ReduceOverTime: boolean;
    CoolDowns: number[];
    TimeStarted: number[];
    FollowerID: number;
    TrackThought: boolean;
}

export interface LastPosition2 {
    z: number;
    y: number;
    x: number;
}

export interface SavedFollowerTaskDestination2 {
    z: number;
    y: number;
    x: number;
}

export interface Inventory2 {
    type: number;
    quantity: number;
    QuantityReserved: number;
    UnreservedQuantity: number;
}

export interface ReactionsAndTime2 {
    StructureID: number;
    TimeReacted: number;
    IDType: number;
}

export interface TaskMemory2 {
    Task: number;
    Time: number;
}

export interface Relationship2 {
    ID: number;
    Relationship: number;
    CurrentRelationshipState: number;
}

export interface FollowersDead {
    ID: number;
    Name: string;
    CursedState: number;
    WorkerBeenGivenOrders: boolean;
    follower_pitch: number;
    follower_vibrato: number;
    SermonCountAfterlife: number;
    SermonCountFood: number;
    SermonCountLawAndOrder: number;
    SermonCountPossession: number;
    SermonCountWorkAndWorship: number;
    TraitsSet: boolean;
    SkinCharacter: number;
    SkinVariation: number;
    SkinColour: number;
    SkinName: string;
    Outfit: number;
    Necklace: number;
    IsFakeBrain: boolean;
    DayJoined: number;
    Age: number;
    LifeExpectancy: number;
    SacrificialType: number;
    LeavingCult: boolean;
    DiedOfIllness: boolean;
    DiedOfOldAge: boolean;
    DiedOfStarvation: boolean;
    DiedFromTwitchChat: boolean;
    DiedInPrison: boolean;
    StartingCursedState: number;
    Faction: number;
    FollowerRole: number;
    WorkerPriority: number;
    CurrentOverrideTaskType: number;
    CurrentOverrideStructureType: number;
    OverrideDayIndex: number;
    OverrideTaskCompleted: boolean;
    Thoughts: Thought2[];
    Adoration: number;
    FollowerLevel: number;
    XPLevel: number;
    HomeLocation: number;
    Location: number;
    LastPosition: LastPosition2;
    SavedFollowerTaskType: number;
    SavedFollowerTaskLocation: number;
    SavedFollowerTaskDestination: SavedFollowerTaskDestination2;
    DwellingID: number;
    PreviousDwellingID: number;
    DwellingLevel: number;
    DwellingSlot: number;
    RandomSeed: number;
    MissionaryTimestamp: number;
    MissionaryDuration: number;
    MissionaryIndex: number;
    MissionaryType: number;
    MissionaryChance: number;
    MissionaryFinished: boolean;
    MissionarySuccessful: boolean;
    MissionaryRewards?: any;
    Inventory: Inventory2[];
    DaysSleptOutside: number;
    HadFuneral: boolean;
    Traits: number[];
    OldAge: boolean;
    MarriedToLeader: boolean;
    FirstTimeSpeakingToPlayer: boolean;
    ComplainingAboutNoHouse: boolean;
    ComplainingNeedBetterHouse: boolean;
    TaxEnforcer: boolean;
    FaithEnforcer: boolean;
    ViewerID?: any;
    PrayProgress: number;
    DevotionGiven: number;
    IsStarving: boolean;
    BathroomFillRate: number;
    DissentDuration: number;
    DissentGold: number;
    GivenDissentWarning: boolean;
    ReactionsAndTime: ReactionsAndTime2[];
    TaskMemory: TaskMemory2[];
    InteractionCoolDownFasting: number;
    InteractionCoolDownEnergizing: number;
    InteractionCoolDownMotivational: number;
    InteractionCoolDemandDevotion: number;
    FastingUntil: number;
    GuaranteedGoodInteractionsUntil: number;
    IncreasedDevotionOutputUntil: number;
    BrainwashedUntil: number;
    MotivatedUntil: number;
    LastBlessing: number;
    LastSermon: number;
    LastVomit: number;
    LastReeducate: number;
    LastHeal: number;
    PaidTithes: boolean;
    ReceivedBlessing: boolean;
    ReeducatedAction: boolean;
    KissedAction: boolean;
    Inspired: boolean;
    PetDog: boolean;
    Intimidated: boolean;
    Bribed: boolean;
    WakeUpDay: number;
    MissionaryExhaustion: number;
    TaxCollected: number;
    TaxedToday: boolean;
    FaithedToday: boolean;
    CursedStateVariant: number;
    Relationships: Relationship2[];
    CachedLumber: number;
    CachedLumberjackStationID: number;
    MemberDuration: number;
    SacrificialValue: number;
    MaxHP: number;
    HP: number;
    Happiness: number;
    Faith: number;
    FearLove: number;
    Satiation: number;
    Starvation: number;
    Bathroom: number;
    TargetBathroom: number;
    Social: number;
    Vomit: number;
    Rest: number;
    Illness: number;
    Exhaustion: number;
    Dissent: number;
    Reeducation: number;
    CurrentPlayerQuest?: any;
    WorkThroughNight: boolean;
}

export interface LootCountToDropRange {
    y: number;
    x: number;
}

export interface CropLootCountToDropRange {
    y: number;
    x: number;
}

export interface Bounds {
    y: number;
    x: number;
}

export interface Inventory3 {
    type: number;
    quantity: number;
    QuantityReserved: number;
    UnreservedQuantity: number;
}

export interface Position {
    z: number;
    y: number;
    x: number;
}

export interface Offset {
    z: number;
    y: number;
    x: number;
}

export interface GridTilePosition {
    y: number;
    x: number;
}

export interface PlacementRegionPosition {
    y: number;
    x: number;
}

export interface BaseStructure {
    Type: number;
    VariantIndex: number;
    PrefabPath: string;
    RemoveOnDie: boolean;
    ProgressTarget: number;
    WorkIsRequiredForProgress: boolean;
    IsUpgrade: boolean;
    IsUpgradeDestroyPrevious: boolean;
    IgnoreGrid: boolean;
    IsBuildingProject: boolean;
    IsCollapsed: boolean;
    UpgradeFromType: number;
    RequiresType: number;
    TILE_WIDTH: number;
    TILE_HEIGHT: number;
    CanBeMoved: boolean;
    CanBeRecycled: boolean;
    IsObstruction: boolean;
    DoesNotOccupyGrid: boolean;
    isDeletable: boolean;
    LootCountToDropRange: LootCountToDropRange;
    CropLootCountToDropRange: CropLootCountToDropRange;
    MultipleLootToDrop?: any;
    MultipleLootToDropChance?: any;
    LootToDrop: number;
    LootCountToDrop: number;
    ID: number;
    Location: number;
    DontLoadMe: boolean;
    Destroyed: boolean;
    GridX: number;
    GridY: number;
    Bounds: Bounds;
    Inventory: Inventory3[];
    Progress: number;
    PowerRequirement: number;
    Position: Position;
    Offset: Offset;
    OffsetMax: number;
    Repaired: boolean;
    GridTilePosition: GridTilePosition;
    PlacementRegionPosition: PlacementRegionPosition;
    Age: number;
    Exhausted: boolean;
    UpgradeLevel: number;
    pathData: any[];
    Direction: number;
    v_i?: any;
    SoulCount: number;
    Level: number;
    ToBuildType: number;
    CurrentPhase: number;
    Purchased: boolean;
    FollowerID: number;
    MultipleFollowerIDs: any[];
    Claimed: boolean;
    BedpanCount: number;
    HasFood: boolean;
    FollowerImprisonedTimestamp: number;
    FollowerImprisonedFaith: number;
    GivenGift: boolean;
    Dir: number;
    BodyWrapped: boolean;
    Prioritised: boolean;
    PrioritisedAsBuildingObstruction: boolean;
    WeedsAndRubblePlaced: boolean;
    Rotten: boolean;
    Burned: boolean;
    Eaten: boolean;
    GatheringEndPhase: number;
    DayPreviouslyUsed: number;
    IsSapling: boolean;
    GrowthStage: number;
    CanRegrow: boolean;
    BenefitedFromFertilizer: boolean;
    RemainingHarvests: number;
    Animation: string;
    StartingScale: number;
    Picked: boolean;
    Watered: boolean;
    WateredCount: number;
    HasBird: boolean;
    TotalPoops: number;
    SignPostItem: number;
    GivenHealth: boolean;
    WeedType: number;
    LastPrayTime: number;
    Fuel: number;
    MaxFuel: number;
    FullyFueled: boolean;
    FuelDepletionDayTimestamp: number;
    onlyDepleteWhenFullyFueled: boolean;
    QueuedResources: any[];
    QueuedMeals: any[];
    CurrentCookingMeal?: any;
    WeaponUpgradePointProgress: number;
    WeaponUpgradePointDuration: number;
    CurrentUnlockingWeaponType: number;
    CurrentUnlockingUpgradeType: number;
    IsDeletable: boolean;
    IsGatheringActive: boolean;
    IsFull: boolean;
    WeaponUpgradingInProgress: boolean;
    WeaponUpgradingCompleted: boolean;
}

export interface LootCountToDropRange2 {
    y: number;
    x: number;
}

export interface CropLootCountToDropRange2 {
    y: number;
    x: number;
}

export interface Bounds2 {
    y: number;
    x: number;
}

export interface Position2 {
    z: number;
    y: number;
    x: number;
}

export interface Offset2 {
    z: number;
    y: number;
    x: number;
}

export interface GridTilePosition2 {
    y: number;
    x: number;
}

export interface PlacementRegionPosition2 {
    y: number;
    x: number;
}

export interface HubShoreStructure {
    Type: number;
    VariantIndex: number;
    PrefabPath: string;
    RemoveOnDie: boolean;
    ProgressTarget: number;
    WorkIsRequiredForProgress: boolean;
    IsUpgrade: boolean;
    IsUpgradeDestroyPrevious: boolean;
    IgnoreGrid: boolean;
    IsBuildingProject: boolean;
    IsCollapsed: boolean;
    UpgradeFromType: number;
    RequiresType: number;
    TILE_WIDTH: number;
    TILE_HEIGHT: number;
    CanBeMoved: boolean;
    CanBeRecycled: boolean;
    IsObstruction: boolean;
    DoesNotOccupyGrid: boolean;
    isDeletable: boolean;
    LootCountToDropRange: LootCountToDropRange2;
    CropLootCountToDropRange: CropLootCountToDropRange2;
    MultipleLootToDrop?: any;
    MultipleLootToDropChance?: any;
    LootToDrop: number;
    LootCountToDrop: number;
    ID: number;
    Location: number;
    DontLoadMe: boolean;
    Destroyed: boolean;
    GridX: number;
    GridY: number;
    Bounds: Bounds2;
    Inventory: any[];
    Progress: number;
    PowerRequirement: number;
    Position: Position2;
    Offset: Offset2;
    OffsetMax: number;
    Repaired: boolean;
    GridTilePosition: GridTilePosition2;
    PlacementRegionPosition: PlacementRegionPosition2;
    Age: number;
    Exhausted: boolean;
    UpgradeLevel: number;
    pathData: any[];
    Direction: number;
    v_i?: any;
    SoulCount: number;
    Level: number;
    ToBuildType: number;
    CurrentPhase: number;
    Purchased: boolean;
    FollowerID: number;
    MultipleFollowerIDs: any[];
    Claimed: boolean;
    BedpanCount: number;
    HasFood: boolean;
    FollowerImprisonedTimestamp: number;
    FollowerImprisonedFaith: number;
    GivenGift: boolean;
    Dir: number;
    BodyWrapped: boolean;
    Prioritised: boolean;
    PrioritisedAsBuildingObstruction: boolean;
    WeedsAndRubblePlaced: boolean;
    Rotten: boolean;
    Burned: boolean;
    Eaten: boolean;
    GatheringEndPhase: number;
    DayPreviouslyUsed: number;
    IsSapling: boolean;
    GrowthStage: number;
    CanRegrow: boolean;
    BenefitedFromFertilizer: boolean;
    RemainingHarvests: number;
    Animation: string;
    StartingScale: number;
    Picked: boolean;
    Watered: boolean;
    WateredCount: number;
    HasBird: boolean;
    TotalPoops: number;
    SignPostItem: number;
    GivenHealth: boolean;
    WeedType: number;
    LastPrayTime: number;
    Fuel: number;
    MaxFuel: number;
    FullyFueled: boolean;
    FuelDepletionDayTimestamp: number;
    onlyDepleteWhenFullyFueled: boolean;
    QueuedResources: any[];
    QueuedMeals: any[];
    CurrentCookingMeal?: any;
    WeaponUpgradePointProgress: number;
    WeaponUpgradePointDuration: number;
    CurrentUnlockingWeaponType: number;
    CurrentUnlockingUpgradeType: number;
    IsDeletable: boolean;
    IsGatheringActive: boolean;
    IsFull: boolean;
    WeaponUpgradingInProgress: boolean;
    WeaponUpgradingCompleted: boolean;
}

export interface LootCountToDropRange3 {
    y: number;
    x: number;
}

export interface CropLootCountToDropRange3 {
    y: number;
    x: number;
}

export interface Bounds3 {
    y: number;
    x: number;
}

export interface Position3 {
    z: number;
    y: number;
    x: number;
}

export interface Offset3 {
    z: number;
    y: number;
    x: number;
}

export interface GridTilePosition3 {
    y: number;
    x: number;
}

export interface PlacementRegionPosition3 {
    y: number;
    x: number;
}

export interface Hub1RatauOutsideStructures {
    Type: number;
    VariantIndex: number;
    PrefabPath: string;
    RemoveOnDie: boolean;
    ProgressTarget: number;
    WorkIsRequiredForProgress: boolean;
    IsUpgrade: boolean;
    IsUpgradeDestroyPrevious: boolean;
    IgnoreGrid: boolean;
    IsBuildingProject: boolean;
    IsCollapsed: boolean;
    UpgradeFromType: number;
    RequiresType: number;
    TILE_WIDTH: number;
    TILE_HEIGHT: number;
    CanBeMoved: boolean;
    CanBeRecycled: boolean;
    IsObstruction: boolean;
    DoesNotOccupyGrid: boolean;
    isDeletable: boolean;
    LootCountToDropRange: LootCountToDropRange3;
    CropLootCountToDropRange: CropLootCountToDropRange3;
    MultipleLootToDrop: number[];
    MultipleLootToDropChance: number[];
    LootToDrop: number;
    LootCountToDrop: number;
    ID: number;
    Location: number;
    DontLoadMe: boolean;
    Destroyed: boolean;
    GridX: number;
    GridY: number;
    Bounds: Bounds3;
    Inventory: any[];
    Progress: number;
    PowerRequirement: number;
    Position: Position3;
    Offset: Offset3;
    OffsetMax: number;
    Repaired: boolean;
    GridTilePosition: GridTilePosition3;
    PlacementRegionPosition: PlacementRegionPosition3;
    Age: number;
    Exhausted: boolean;
    UpgradeLevel: number;
    pathData: any[];
    Direction: number;
    v_i?: any;
    SoulCount: number;
    Level: number;
    ToBuildType: number;
    CurrentPhase: number;
    Purchased: boolean;
    FollowerID: number;
    MultipleFollowerIDs: any[];
    Claimed: boolean;
    BedpanCount: number;
    HasFood: boolean;
    FollowerImprisonedTimestamp: number;
    FollowerImprisonedFaith: number;
    GivenGift: boolean;
    Dir: number;
    BodyWrapped: boolean;
    Prioritised: boolean;
    PrioritisedAsBuildingObstruction: boolean;
    WeedsAndRubblePlaced: boolean;
    Rotten: boolean;
    Burned: boolean;
    Eaten: boolean;
    GatheringEndPhase: number;
    DayPreviouslyUsed: number;
    IsSapling: boolean;
    GrowthStage: number;
    CanRegrow: boolean;
    BenefitedFromFertilizer: boolean;
    RemainingHarvests: number;
    Animation: string;
    StartingScale: number;
    Picked: boolean;
    Watered: boolean;
    WateredCount: number;
    HasBird: boolean;
    TotalPoops: number;
    SignPostItem: number;
    GivenHealth: boolean;
    WeedType: number;
    LastPrayTime: number;
    Fuel: number;
    MaxFuel: number;
    FullyFueled: boolean;
    FuelDepletionDayTimestamp: number;
    onlyDepleteWhenFullyFueled: boolean;
    QueuedResources: any[];
    QueuedMeals: any[];
    CurrentCookingMeal?: any;
    WeaponUpgradePointProgress: number;
    WeaponUpgradePointDuration: number;
    CurrentUnlockingWeaponType: number;
    CurrentUnlockingUpgradeType: number;
    IsDeletable: boolean;
    IsGatheringActive: boolean;
    IsFull: boolean;
    WeaponUpgradingInProgress: boolean;
    WeaponUpgradingCompleted: boolean;
}

export interface LootCountToDropRange4 {
    y: number;
    x: number;
}

export interface CropLootCountToDropRange4 {
    y: number;
    x: number;
}

export interface Bounds4 {
    y: number;
    x: number;
}

export interface Position4 {
    z: number;
    y: number;
    x: number;
}

export interface Offset4 {
    z: number;
    y: number;
    x: number;
}

export interface GridTilePosition4 {
    y: number;
    x: number;
}

export interface PlacementRegionPosition4 {
    y: number;
    x: number;
}

export interface Hub1SozoStructures {
    Type: number;
    VariantIndex: number;
    PrefabPath?: any;
    RemoveOnDie: boolean;
    ProgressTarget: number;
    WorkIsRequiredForProgress: boolean;
    IsUpgrade: boolean;
    IsUpgradeDestroyPrevious: boolean;
    IgnoreGrid: boolean;
    IsBuildingProject: boolean;
    IsCollapsed: boolean;
    UpgradeFromType: number;
    RequiresType: number;
    TILE_WIDTH: number;
    TILE_HEIGHT: number;
    CanBeMoved: boolean;
    CanBeRecycled: boolean;
    IsObstruction: boolean;
    DoesNotOccupyGrid: boolean;
    isDeletable: boolean;
    LootCountToDropRange: LootCountToDropRange4;
    CropLootCountToDropRange: CropLootCountToDropRange4;
    MultipleLootToDrop?: any;
    MultipleLootToDropChance?: any;
    LootToDrop: number;
    LootCountToDrop: number;
    ID: number;
    Location: number;
    DontLoadMe: boolean;
    Destroyed: boolean;
    GridX: number;
    GridY: number;
    Bounds: Bounds4;
    Inventory: any[];
    Progress: number;
    PowerRequirement: number;
    Position: Position4;
    Offset: Offset4;
    OffsetMax: number;
    Repaired: boolean;
    GridTilePosition: GridTilePosition4;
    PlacementRegionPosition: PlacementRegionPosition4;
    Age: number;
    Exhausted: boolean;
    UpgradeLevel: number;
    pathData: any[];
    Direction: number;
    v_i?: any;
    SoulCount: number;
    Level: number;
    ToBuildType: number;
    CurrentPhase: number;
    Purchased: boolean;
    FollowerID: number;
    MultipleFollowerIDs: any[];
    Claimed: boolean;
    BedpanCount: number;
    HasFood: boolean;
    FollowerImprisonedTimestamp: number;
    FollowerImprisonedFaith: number;
    GivenGift: boolean;
    Dir: number;
    BodyWrapped: boolean;
    Prioritised: boolean;
    PrioritisedAsBuildingObstruction: boolean;
    WeedsAndRubblePlaced: boolean;
    Rotten: boolean;
    Burned: boolean;
    Eaten: boolean;
    GatheringEndPhase: number;
    DayPreviouslyUsed: number;
    IsSapling: boolean;
    GrowthStage: number;
    CanRegrow: boolean;
    BenefitedFromFertilizer: boolean;
    RemainingHarvests: number;
    Animation: string;
    StartingScale: number;
    Picked: boolean;
    Watered: boolean;
    WateredCount: number;
    HasBird: boolean;
    TotalPoops: number;
    SignPostItem: number;
    GivenHealth: boolean;
    WeedType: number;
    LastPrayTime: number;
    Fuel: number;
    MaxFuel: number;
    FullyFueled: boolean;
    FuelDepletionDayTimestamp: number;
    onlyDepleteWhenFullyFueled: boolean;
    QueuedResources: any[];
    QueuedMeals: any[];
    CurrentCookingMeal?: any;
    WeaponUpgradePointProgress: number;
    WeaponUpgradePointDuration: number;
    CurrentUnlockingWeaponType: number;
    CurrentUnlockingUpgradeType: number;
    IsDeletable: boolean;
    IsGatheringActive: boolean;
    IsFull: boolean;
    WeaponUpgradingInProgress: boolean;
    WeaponUpgradingCompleted: boolean;
}

export interface CompletedObjectivesHistory {
    $type: string;
    LocKey: string;
    TargetFollowerName: string;
    GroupId: string;
    Index: number;
    UniqueGroupID: string;
    MealType?: number;
    Ritual?: number;
    TargetFollowerName_1: string;
    TargetFollowerName_2: string;
    CursedState?: number;
    Target?: number;
    Count?: number;
    ItemType?: number;
    TargetLocation?: number;
    CustomTerm: string;
    CustomQuestType?: number;
}

export interface FailedObjectivesHistory {
    $type: string;
    ItemType: number;
    TargetLocation: number;
    LocKey: string;
    Target: number;
    Count: number;
    CustomTerm: string;
    GroupId: string;
    Index: number;
    UniqueGroupID: string;
    CustomQuestType?: number;
    TargetFollowerName: string;
    MealType?: number;
    RoomsRequired?: number;
    RoomsCompleted?: number;
}

export interface CompletedQuestsHistory {
    QuestIndex: number;
    QuestTimestamp: number;
    QuestCooldownDuration: number;
    IsStory: boolean;
}

export interface Item {
    type: number;
    quantity: number;
    QuantityReserved: number;
    UnreservedQuantity: number;
}

export interface Shop {
    shopKeeperName: string;
    lastDayUsed: number;
    location: number;
    itemsForSale: any[];
}

export interface MidasDonation {
    Day: number;
    InvestmentAmount: number;
}

export interface ItemsToTrade {
    itemForTrade: number;
    SellPrice: number;
    BuyPrice: number;
    BuyOffsetPercent: number;
    BuyOffset: number;
    SellOffset: number;
    LastDayChecked: number;
    BuyPriceActual: number;
    SellPriceActual: number;
}

export interface Trader {
    location: number;
    itemsToTrade: ItemsToTrade[];
    traderName: string;
    itemsForSale: number[];
    blackList: any[];
}

export interface ShrineTimerInfo {
    TypeOfShrine: number;
    useTime: number;
}

export interface ItemSelectorCategory {
    Key: string;
    TrackedItems: number[];
    MostRecentItem: number;
}

export interface EnemiesKilled {
    EnemyType: number;
    AmountKilled: number;
}

export interface Doctrine {
    _alerts: any[];
    _singleAlerts: any[];
    Total: number;
}

export interface FollowerInteractions {
    _alerts: any[];
    _singleAlerts: number[];
    Total: number;
}

export interface Rituals {
    _alerts: any[];
    _singleAlerts: number[];
    Total: number;
}

export interface Structures {
    _alerts: any[];
    _singleAlerts: number[];
    Total: number;
}

export interface CharacterSkinAlerts {
    _alerts: string[];
    _singleAlerts: string[];
    Total: number;
}

export interface Inventory4 {
    _alerts: number[];
    _singleAlerts: number[];
    Total: number;
}

export interface Weapons {
    _alerts: number[];
    _singleAlerts: number[];
    Total: number;
}

export interface Curses {
    _alerts: any[];
    _singleAlerts: any[];
    Total: number;
}

export interface TarotCardAlerts {
    _alerts: any[];
    _singleAlerts: number[];
    Total: number;
}

export interface Upgrades {
    _alerts: any[];
    _singleAlerts: any[];
    Total: number;
}

export interface Locations {
    _alerts: any[];
    _singleAlerts: any[];
    Total: number;
}

export interface Tutorial {
    _alerts: any[];
    _singleAlerts: number[];
    Total: number;
}

export interface Recipes {
    _alerts: number[];
    _singleAlerts: number[];
    Total: number;
}

export interface RunTarotCardAlerts {
    _alerts: any[];
    _singleAlerts: any[];
    Total: number;
}

export interface Alerts {
    Doctrine: Doctrine;
    FollowerInteractions: FollowerInteractions;
    Rituals: Rituals;
    Structures: Structures;
    CharacterSkinAlerts: CharacterSkinAlerts;
    Inventory: Inventory4;
    Weapons: Weapons;
    Curses: Curses;
    TarotCardAlerts: TarotCardAlerts;
    Upgrades: Upgrades;
    Locations: Locations;
    Tutorial: Tutorial;
    Recipes: Recipes;
    RunTarotCardAlerts: RunTarotCardAlerts;
}

export interface FollowerInfoSnapshot {
    Name: string;
    SkinCharacter: number;
    SkinVariation: number;
    SkinColour: number;
    SkinName: string;
    Outfit: number;
    Necklace: number;
    Illness: number;
    Rest: number;
    Brainwashed: boolean;
    Dissenter: boolean;
    CultFaith: number;
}

export interface FollowerInfoSnapshotA {
    Name: string;
    SkinCharacter: number;
    SkinVariation: number;
    SkinColour: number;
    SkinName: string;
    Outfit: number;
    Necklace: number;
    Illness: number;
    Rest: number;
    Brainwashed: boolean;
    Dissenter: boolean;
    CultFaith: number;
}

export interface FollowerInfoSnapshotB {
    Name: string;
    SkinCharacter: number;
    SkinVariation: number;
    SkinColour: number;
    SkinName: string;
    Outfit: number;
    Necklace: number;
    Illness: number;
    Rest: number;
    Brainwashed: boolean;
    Dissenter: boolean;
    CultFaith: number;
}

export interface NotificationHistory {
    $type: string;
    FaithDelta: number;
    followerInfoSnapshot: FollowerInfoSnapshot;
    LocKey: string;
    LocalisedParameters: any[];
    NonLocalisedParameters: any[];
    Animation?: number;
    followerInfoSnapshotA: FollowerInfoSnapshotA;
    followerInfoSnapshotB: FollowerInfoSnapshotB;
    FollowerAnimationA?: number;
    FollowerAnimationB?: number;
}

export interface Food {
    type: number;
    quantity: number;
    QuantityReserved: number;
    UnreservedQuantity: number;
}

export interface SaveData {
    AllowSaving: boolean;
    PauseGameTime: boolean;
    GameOverEnabled: boolean;
    DisplayGameOverWarning: boolean;
    InGameOver: boolean;
    GameOver: boolean;
    DifficultyChosen: boolean;
    DifficultyReminded: boolean;
    playerDeaths: number;
    playerDeathsInARow: number;
    playerDeathsInARowFightingLeader: number;
    dungeonRun: number;
    dungeonRunDuration: number;
    dungeonVisitedRooms: number[];
    FollowersRecruitedInNodes: number[];
    FollowersRecruitedThisNode: number;
    TimeInGame: number;
    KillsInGame: number;
    dungeonRunXPOrbs: number;
    ChestRewardCount: number;
    BaseGoopDoorLocked: boolean;
    BaseGoopDoorLoc: string;
    STATS_FollowersStarvedToDeath: number;
    STATS_Murders: number;
    STATS_Sacrifices: number;
    PlayerKillsOnRun: number;
    PlayerStartingBlackSouls: number;
    GivenFollowerHearts: boolean;
    EnabledSpells: boolean;
    ForceDoctrineStones: boolean;
    DoctrineStoneTotalCount: number;
    BuildShrineEnabled: boolean;
    EnabledHealing: boolean;
    EnabledSword: boolean;
    BonesEnabled: boolean;
    XPEnabled: boolean;
    ShownDodgeTutorial: boolean;
    ShownInventoryTutorial: boolean;
    ShownDodgeTutorialCount: number;
    HadInitialDeathCatConversation: boolean;
    PlayerHasBeenGivenHearts: boolean;
    CurrentOnboardingPhase: number;
    firstRecruit: boolean;
    MissionariesCompleted: number;
    PlayerFleece: number;
    UnlockedFleeces: number[];
    Thoughts: any[];
    CanReadMinds: boolean;
    HappinessEnabled: boolean;
    TeachingsEnabled: boolean;
    SchedulingEnabled: boolean;
    PrayerEnabled: boolean;
    PrayerOrdered: boolean;
    HasBuiltCookingFire: boolean;
    HasBuiltFarmPlot: boolean;
    HasBuiltTemple1: boolean;
    HasBuiltTemple2: boolean;
    HasBuiltTemple3: boolean;
    HasBuiltTemple4: boolean;
    HasBuiltShrine1: boolean;
    HasBuiltShrine2: boolean;
    HasBuiltShrine3: boolean;
    HasBuiltShrine4: boolean;
    PerformedMushroomRitual: boolean;
    BuiltMushroomDecoration: boolean;
    HasBuiltSurveillance: boolean;
    TempleDevotionBoxCoinCount: number;
    CanBuildShrine: boolean;
    WokeUpEveryoneDay: number;
    DiedLastRun: boolean;
    LastRunResults: number;
    LastFollowerToStarveToDeath: number;
    LastFollowerToStartStarving: number;
    LastFollowerToStartDissenting: number;
    LastFollowerToReachOldAge: number;
    LastFollowerToBecomeIll: number;
    LastFollowerToBecomeIllFromSleepingNearIllFollower: number;
    LastFollowerToPassOut: number;
    LastFollowerPurchasedFromSpider: number;
    TimeSinceFaithHitEmpty: number;
    TimeSinceLastCrisisOfFaithQuest: number;
    JudgementAmount: number;
    HungerBarCount: number;
    IllnessBarCount: number;
    IllnessBarDynamicMax: number;
    StaticFaith: number;
    CultFaith: number;
    LastBrainwashed: number;
    LastHolidayDeclared: number;
    LastWorkThroughTheNight: number;
    LastConstruction: number;
    LastEnlightenment: number;
    LastFastDeclared: number;
    LastFeastDeclared: number;
    LastFishingDeclared: number;
    LastArcherShot: number;
    LastSimpleGuardianAttacked: number;
    LastSimpleGuardianRingProjectiles: number;
    LastDayTreesAtBase: number;
    PreviousSermonDayIndex: number;
    PreviousSermonCategory: number;
    ShrineLevel: number;
    GivenSermonQuest: boolean;
    GivenFaithOfFlockQuest: boolean;
    PrayedAtMassiveMonsterShrine: boolean;
    TwitchSecretKey?: any;
    ChannelID?: any;
    ChannelName?: any;
    TwitchTotemsCompleted: number;
    TwitchNextHHEvent: number;
    TwitchFollowerViewerIDs: any[];
    TwitchFollowerIDs: any[];
    OnboardingFinished: boolean;
    SaveUniqueID: string;
    enemiesEncountered: string[];
    Chain1: boolean;
    Chain2: boolean;
    Chain3: boolean;
    DoorRoomChainProgress: number;
    DoorRoomDoorsProgress: number;
    Dungeon1_Layer: number;
    Dungeon2_Layer: number;
    Dungeon3_Layer: number;
    Dungeon4_Layer: number;
    First_Dungeon_Resurrecting: boolean;
    MiniBossData: MiniBossData[];
    CachePreviousRun: CachePreviousRun[];
    DiscoveredLocations: number[];
    VisitedLocations: number[];
    NewLocationFaithReward: number[];
    DissentingFolllowerRooms: number[];
    OpenedDungeonDoors: any[];
    KeyPiecesFromLocation: any[];
    UsedFollowerDispensers: any[];
    UnlockedBossTempleDoor: number[];
    UnlockedDungeonDoor: number[];
    BossesCompleted: number[];
    BossesEncountered: number[];
    DoorRoomBossLocksDestroyed: any[];
    SignPostsRead: number[];
    ShrineDoor: boolean;
    BaseDoorEast: boolean;
    BaseDoorNorthEast: boolean;
    BaseDoorNorthWest: boolean;
    BossForest: boolean;
    ForestTempleDoor: boolean;
    CompletedQuestFollowerIDs: number[];
    CurrentCultLevel: number;
    MechanicsUnlocked: number[];
    UnlockedSermonsAndRituals: number[];
    UnlockedStructures: number[];
    HistoryOfStructures: number[];
    NewBuildings: boolean;
    RevealedTutorialTopics: number[];
    CurrentResearch: any[];
    CurrentUpgradeTreeTier: number;
    CurrentPlayerUpgradeTreeTier: number;
    MostRecentTreeUpgrade: number;
    MostRecentPlayerTreeUpgrade: number;
    UnlockedUpgrades: number[];
    DoctrineUnlockedUpgrades: number[];
    UpgradeCoolDowns: UpgradeCoolDown[];
    CultTraits: number[];
    WeaponUnlockedUpgrades: any[];
    CultName: string;
    DungeonBossFight: boolean;
    LocationSeeds: LocationSeed[];
    TempleStudyXP: number;
    UnlockededASermon: number;
    CurrentDayIndex: number;
    CurrentPhaseIndex: number;
    CurrentGameTime: number;
    LastUsedSermonRitualDayIndex: any[];
    ScheduledActivityIndexes: number[];
    OverrideScheduledActivity: number;
    InstantActivityIndexes: number[];
    PlayerEaten: boolean;
    ResurrectionType: number;
    FirstTimeResurrecting: boolean;
    FirstTimeFertilizing: boolean;
    FirstTimeChop: boolean;
    FirstTimeMine: boolean;
    currentCategory: number;
    TimeSinceLastComplaint: number;
    TimeSinceLastQuest: number;
    DessentingFollowerChoiceQuestionIndex: number;
    HaroConversationIndex: number;
    HaroConversationCompleted: boolean;
    RatauKilled: boolean;
    RatauReadLetter: boolean;
    CurrentFoxLocation: number;
    CurrentFoxEncounter: number;
    FoxIntroductions: number[];
    FoxCompleted: number[];
    PlimboStoryProgress: number;
    RatooFishingProgress: number;
    RatooFishing_FISH_CRAB: boolean;
    RatooFishing_FISH_LOBSTER: boolean;
    RatooFishing_FISH_OCTOPUS: boolean;
    RatooFishing_FISH_SQUID: boolean;
    PlayerHasFollowers: boolean;
    FishCaughtTotal: number;
    RatooGivenHeart: boolean;
    RatooMentionedWrongHeart: boolean;
    ShownInitialTempleDoorSeal: boolean;
    FirstFollowerSpawnInteraction: boolean;
    DecorationTypesBuilt: number[];
    WeaponSelectionPositions: number[];
    ShowCultFaith: boolean;
    ShowCultIllness: boolean;
    ShowCultHunger: boolean;
    ShowLoyaltyBars: boolean;
    IntroDoor1: boolean;
    FirstDoctrineStone: boolean;
    ShowHaroDoctrineStoneRoom: boolean;
    HaroIntroduceDoctrines: boolean;
    RatExplainDungeon: boolean;
    RatauToGiveCurseNextRun: boolean;
    SozoStoryProgress: number;
    MidasBankUnlocked: boolean;
    MidasBankIntro: boolean;
    MidasSacrificeIntro: boolean;
    MidasIntro: boolean;
    MidasDevotionIntro: boolean;
    MidasStatue: boolean;
    MidasDevotionCost: number;
    MidasDevotionLastUsed: number;
    MidasFollowerStatueCount: number;
    RatauShowShrineShop: boolean;
    DecorationRoomFirstConvo: boolean;
    FirstTarot: boolean;
    Tutorial_Night: boolean;
    Tutorial_ReturnToDungeon: boolean;
    FirstTimeInDungeon: boolean;
    AllowBuilding: boolean;
    CookedFirstFood: boolean;
    Dungeon1Story1: boolean;
    Dungeon1Story2: boolean;
    FirstFollowerRescue: boolean;
    FirstDungeon1RescueRoom: boolean;
    FirstDungeon2RescueRoom: boolean;
    FirstDungeon3RescueRoom: boolean;
    FirstDungeon4RescueRoom: boolean;
    SherpaFirstConvo: boolean;
    ResourceRoom1Revealed: boolean;
    EncounteredHealingRoom: boolean;
    MinimumRandomRoomsEncountered: boolean;
    MinimumRandomRoomsEncounteredAmount: number;
    ForneusLore: boolean;
    SozoBeforeDeath: boolean;
    SozoDead: boolean;
    FirstTimeWeaponMarketplace: boolean;
    FirstTimeSpiderMarketplace: boolean;
    FirstTimeSeedMarketplace: boolean;
    ShowFirstDoctrineStone: boolean;
    RatauGiftMediumCollected: boolean;
    CompletedLighthouseCrystalQuest: boolean;
    CameFromDeathCatFight: boolean;
    OldFollowerSpoken: boolean;
    CultLeader1_LastRun: number;
    CultLeader1_StoryPosition: number;
    CultLeader2_LastRun: number;
    CultLeader2_StoryPosition: number;
    CultLeader3_LastRun: number;
    CultLeader3_StoryPosition: number;
    CultLeader4_LastRun: number;
    CultLeader4_StoryPosition: number;
    DeathCatConversationLastRun: number;
    DeathCatStory: number;
    DeathCatDead: number;
    DeathCatWon: number;
    DeathCatBoss1: boolean;
    DeathCatBoss2: boolean;
    DeathCatBoss3: boolean;
    DeathCatBoss4: boolean;
    DeathCatRatauKilled: boolean;
    DungeonKeyRoomCompleted1: boolean;
    DungeonKeyRoomCompleted2: boolean;
    DungeonKeyRoomCompleted3: boolean;
    DungeonKeyRoomCompleted4: boolean;
    RatOutpostIntro: boolean;
    FirstMonsterHeart: boolean;
    Rat_Tutorial_Bell: boolean;
    Goat_First_Meeting: boolean;
    Goat_Guardian_Door_Open: boolean;
    Key_Shrine_1: boolean;
    Key_Shrine_2: boolean;
    Key_Shrine_3: boolean;
    InTutorial: boolean;
    UnlockBaseTeleporter: boolean;
    Tutorial_First_Indoctoring: boolean;
    Tutorial_Second_Enter_Base: boolean;
    Tutorial_Rooms_Completed: boolean;
    Tutorial_Enable_Store_Resources: boolean;
    Tutorial_Completed: boolean;
    Tutorial_Mission_Board: boolean;
    Create_Tutorial_Rooms: boolean;
    RatauExplainsFollowers: boolean;
    RatauExplainsDemo: boolean;
    RatauExplainsBiome0: boolean;
    RatauExplainsBiome1: boolean;
    RatauExplainsBiome0Boss: boolean;
    RatauExplainsTeleporter: boolean;
    SozoIntro: boolean;
    SozoDecorationQuestActive: boolean;
    SozoQuestComplete: boolean;
    CollectedMenticide: boolean;
    TarotIntro: boolean;
    HasTarotBuilding: boolean;
    ForestOfferingRoomCompleted: boolean;
    KnucklebonesIntroCompleted: boolean;
    KnucklebonesFirstGameRatauStart: boolean;
    ForestChallengeRoom1Completed: boolean;
    ForestRescueWorshipper: boolean;
    GetFirstFollower: boolean;
    BeatenFirstMiniBoss: boolean;
    RatauExplainBuilding: boolean;
    PromoteFollowerExplained: boolean;
    HasMadeFirstOffering: boolean;
    BirdConvo: boolean;
    UnlockedHubShore: boolean;
    GivenFollowerGift: boolean;
    FinalBossSlowWalk: boolean;
    HadNecklaceOnRun: number;
    ShownDungeon1FinalLeaderEncounter: boolean;
    ShownDungeon2FinalLeaderEncounter: boolean;
    ShownDungeon3FinalLeaderEncounter: boolean;
    ShownDungeon4FinalLeaderEncounter: boolean;
    HaroOnbardedHarderDungeon1: boolean;
    HaroOnbardedHarderDungeon2: boolean;
    HaroOnbardedHarderDungeon3: boolean;
    HaroOnbardedHarderDungeon4: boolean;
    RevealOfferingChest: boolean;
    OnboardedOfferingChest: boolean;
    OnboardedHomeless: boolean;
    OnboardedHomelessAtNight: boolean;
    OnboardedEndlessMode: boolean;
    OnboardedDeadFollower: boolean;
    OnboardedBuildingHouse: boolean;
    OnboardedMakingMoreFood: boolean;
    OnboardedCleaningBase: boolean;
    OnboardedOldFollower: boolean;
    OnboardedSickFollower: boolean;
    OnboardedStarvingFollower: boolean;
    OnboardedDissenter: boolean;
    OnboardedFaithOfFlock: boolean;
    OnboardedRaiseFaith: boolean;
    OnboardedResourceYard: boolean;
    OnboardedCrisisOfFaith: boolean;
    OnboardedSermon: boolean;
    OnboardedBuildFarm: boolean;
    OnboardedRefinery: boolean;
    OnboardedCultName: boolean;
    OnboardedZombie: boolean;
    OnboardedLoyalty: boolean;
    HasMetChefShop: boolean;
    CurrentOnboardingFollowerID: number;
    CurrentOnboardingFollowerType: number;
    CurrentOnboardingFollowerTerm: string;
    HasPerformedRitual: boolean;
    GivenLoyaltyQuestDay: number;
    LastDaySincePlayerUpgrade: number;
    MealsCooked: number;
    Dungeon1_1_Key: boolean;
    Dungeon1_2_Key: boolean;
    Dungeon1_3_Key: boolean;
    Dungeon1_4_Key: boolean;
    Dungeon2_1_Key: boolean;
    Dungeon2_2_Key: boolean;
    Dungeon2_3_Key: boolean;
    Dungeon2_4_Key: boolean;
    Dungeon3_1_Key: boolean;
    Dungeon3_2_Key: boolean;
    Dungeon3_3_Key: boolean;
    Dungeon3_4_Key: boolean;
    HadFirstTempleKey: boolean;
    CurrentKeyPieces: number;
    GivenFreeDungeonFollower: boolean;
    GivenFreeDungeonGold: boolean;
    FoxMeeting_0: boolean;
    GaveFollowerToFox: boolean;
    Ritual_0: boolean;
    Ritual_1: boolean;
    Lighthouse_FirstConvo: boolean;
    Lighthouse_LitFirstConvo: boolean;
    Lighthouse_FireOutAgain: boolean;
    Lighthouse_QuestGiven: boolean;
    Lighthouse_QuestComplete: boolean;
    LighthouseFuel: number;
    Lighthouse_Lit: boolean;
    ShoreFishFirstConvo: boolean;
    ShoreFishFished: boolean;
    ShoreTarotShotConvo1: boolean;
    ShoreTarotShotConvo2: boolean;
    ShoreFlowerShopConvo1: boolean;
    SozoFlowerShopConvo1: boolean;
    SozoTarotShopConvo1: boolean;
    RatauFoundSkin: boolean;
    MidasFoundSkin: boolean;
    SozoFoundDecoration: boolean;
    HorseTown_PaidRespectToHorse: boolean;
    HorseTown_JoinCult: boolean;
    HorseTown_OpenedChest: boolean;
    BlackSoulsEnabled: boolean;
    PlacedRubble: boolean;
    DefeatedExecutioner: boolean;
    WorldMapCurrentSelection: number;
    RedHeartsTemporarilyRemoved: number;
    ShownKnuckleboneTutorial: boolean;
    Knucklebones_Opponent_Ratau_Won: boolean;
    ShopKeeperChefState: number;
    ShopKeeperChefEnragedDay: number;
    Knucklebones_Opponent_0: boolean;
    Knucklebones_Opponent_0_FirstConvoRataus: boolean;
    Knucklebones_Opponent_0_Won: boolean;
    Knucklebones_Opponent_1: boolean;
    Knucklebones_Opponent_1_FirstConvoRataus: boolean;
    Knucklebones_Opponent_1_Won: boolean;
    Knucklebones_Opponent_2: boolean;
    Knucklebones_Opponent_2_FirstConvoRataus: boolean;
    Knucklebones_Opponent_2_Won: boolean;
    DungeonLayer1: boolean;
    DungeonLayer2: boolean;
    DungeonLayer3: boolean;
    DungeonLayer4: boolean;
    DungeonLayer5: boolean;
    BeatenDungeon1: boolean;
    BeatenDungeon2: boolean;
    BeatenDungeon3: boolean;
    BeatenDungeon4: boolean;
    BeatenDeathCat: boolean;
    CanFindTarotCards: boolean;
    LuckMultiplier: number;
    EnemyModifiersChanceMultiplier: number;
    EnemyHealthMultiplier: number;
    ProjectileMoveSpeedMultiplier: number;
    DodgeDistanceMultiplier: number;
    CurseFeverMultiplier: number;
    SpawnPoisonOnAttack: boolean;
    EnemiesInNextRoomHaveModifiers: boolean;
    CurrentRoomCoordinates: CurrentRoomCoordinates;
    ResurrectRitualCount: number;
    EncounteredGambleRoom: boolean;
    SwordLevel: number;
    DaggerLevel: number;
    AxeLevel: number;
    HammerLevel: number;
    GauntletLevel: number;
    FireballLevel: number;
    EnemyBlastLevel: number;
    MegaSlashLevel: number;
    ProjectileAOELevel: number;
    TentaclesLevel: number;
    VortexLevel: number;
    LastFollowerQuestGivenTime: number;
    DLC_Pre_Purchase: boolean;
    DLC_Cultist_Pack: boolean;
    DLC_Plush_Bonus: boolean;
    Twitch_Drop_1: boolean;
    Twitch_Drop_2: boolean;
    Twitch_Drop_3: boolean;
    DeathCatBeaten: boolean;
    HasEncounteredTarot: boolean;
    RecentRecipes: any[];
    RecipesDiscovered: number[];
    ChefShopDoublePrices: boolean;
    FollowerShopUses: number;
    sacrificesCompleted: number;
    FoundItems: number[];
    TakenBossDamage: boolean;
    PoopMealsCreated: number;
    PrayedAtCrownShrine: boolean;
    ShellsGifted_0: boolean;
    ShellsGifted_1: boolean;
    ShellsGifted_2: boolean;
    ShellsGifted_3: boolean;
    ShellsGifted_4: boolean;
    DateLastScreenshot: number;
    PlayerDamageDealtThisRun: number;
    PlayerDamageReceivedThisRun: number;
    Options_ScreenShake: boolean;
    PlayerIsASpirit: boolean;
    BridgeFixed: boolean;
    BuildingTome: boolean;
    BeenToDungeon: boolean;
    FollowerID: number;
    ObjectiveGroupID: number;
    Followers: Follower[];
    Followers_Recruit: any[];
    Followers_Dead: FollowersDead[];
    Followers_Dead_IDs: number[];
    StructureID: number;
    BaseStructures: BaseStructure[];
    HubStructures: any[];
    HubShoreStructures: HubShoreStructure[];
    Hub1_MainStructures: any[];
    Hub1_BerriesStructures: any[];
    Hub1_ForestStructures: any[];
    Hub1_RatauInsideStructures: any[];
    Hub1_RatauOutsideStructures: Hub1RatauOutsideStructures[];
    Hub1_SozoStructures: Hub1SozoStructures[];
    Hub1_SwampStructures: any[];
    Dungeon_Logs1Structures: any[];
    Dungeon_Logs2Structures: any[];
    Dungeon_Logs3Structures: any[];
    Dungeon_Food1Structures: any[];
    Dungeon_Food2Structures: any[];
    Dungeon_Food3Structures: any[];
    Dungeon_Stone1Structures: any[];
    Dungeon_Stone2Structures: any[];
    Dungeon_Stone3Structures: any[];
    Followers_Imprisoned_IDs: any[];
    Followers_Elderly_IDs: number[];
    Followers_OnMissionary_IDs: any[];
    Followers_Transitioning_IDs: any[];
    Followers_Demons_IDs: any[];
    Followers_Demons_Types: any[];
    RevealedStructures: number[];
    DayList: any[];
    CurrentDay?: any;
    TrackedObjectiveGroupIDs: any[];
    Objectives: any[];
    CompletedObjectives: any[];
    FailedObjectives: any[];
    DungeonObjectives: any[];
    StoryObjectives: any[];
    CompletedObjectivesHistory: CompletedObjectivesHistory[];
    FailedObjectivesHistory: FailedObjectivesHistory[];
    CompletedQuestsHistorys: CompletedQuestsHistory[];
    SimpleInventoryItem: number;
    items: Item[];
    IngredientsCapacityLevel: number;
    FoodCapacityLevel: number;
    LogCapacityLevel: number;
    StoneCapacityLevel: number;
    FollowerSkinsUnlocked: string[];
    FollowerSkinsBlacklist: string[];
    DLCSkins: string[];
    NewFollowerSkins: string[];
    StructureEffects: any[];
    KilledBosses: string[];
    WeaponPool: number[];
    CurrentWeapon: number;
    CurrentWeaponLevel: number;
    CurrentRunWeaponLevel: number;
    ForcedStartingWeapon: number;
    CurrentCurse: number;
    CurrentCurseLevel: number;
    CurrentRunCurseLevel: number;
    ForcedStartingCurse: number;
    CursePool: number[];
    PlayerRunTrinkets: any[];
    PlayerFoundTrinkets: number[];
    CrownAbilitiesUnlocked: any[];
    PlayerBluePrints: any[];
    FishCaught: number[];
    ActiveMissions: any[];
    AvailableMissions: any[];
    NewMissionDayTimestamp: number;
    LastGoldenMissionDay: number;
    MissionShrineUnlocked: boolean;
    ItemsForSale: any[];
    Shops: Shop[];
    LastDayUsedFollowerShop: number;
    FollowerForSale?: any;
    midasDonation: MidasDonation;
    LastDayUsedBank: number;
    Investment?: any;
    Traders: Trader[];
    ShrineTimerInfo: ShrineTimerInfo[];
    RedHeartShrineLevel: number;
    ShrineHeart: number;
    ShrineCurses: number;
    ShrineVoodo: number;
    ShrineAstrology: number;
    ItemSelectorCategories: ItemSelectorCategory[];
    itemsDungeon: any[];
    DUNGEON_TIME: number;
    PLAYER_RUN_DAMAGE_LEVEL: number;
    PLAYER_HEARTS_LEVEL: number;
    PLAYER_DAMAGE_LEVEL: number;
    PLAYER_HEALTH: number;
    PLAYER_TOTAL_HEALTH: number;
    PLAYER_BLUE_HEARTS: number;
    PLAYER_BLACK_HEARTS: number;
    PLAYER_SPIRIT_HEARTS: number;
    PLAYER_SPIRIT_TOTAL_HEARTS: number;
    PLAYER_SPECIAL_CHARGE: number;
    PLAYER_SPECIAL_AMMO: number;
    PLAYER_SPECIAL_CHARGE_TARGET: number;
    PLAYER_ARROW_AMMO: number;
    PLAYER_ARROW_TOTAL_AMMO: number;
    PLAYER_SPIRIT_AMMO: number;
    PLAYER_SPIRIT_TOTAL_AMMO: number;
    PLAYER_REDEAL_TOKEN: number;
    PLAYER_REDEAL_TOKEN_TOTAL: number;
    PLAYER_HEALTH_MODIFIED: number;
    PLAYER_STARTING_HEALTH_CACHED: number;
    Souls: number;
    BlackSouls: number;
    BlackSoulTarget: number;
    FollowerTokens: number;
    DiscipleXP: number;
    DiscipleLevel: number;
    DiscipleAbilityPoints: number;
    XP: number;
    Level: number;
    AbilityPoints: number;
    WeaponAbilityPoints: number;
    Doctrine_PlayerUpgrade_XP: number;
    Doctrine_PlayerUpgrade_Level: number;
    Doctrine_Special_XP: number;
    Doctrine_Special_Level: number;
    Doctrine_WorkWorship_XP: number;
    Doctrine_WorkWorship_Level: number;
    Doctrine_Possessions_XP: number;
    Doctrine_Possessions_Level: number;
    Doctrine_Food_XP: number;
    Doctrine_Food_Level: number;
    Doctrine_Afterlife_XP: number;
    Doctrine_Afterlife_Level: number;
    Doctrine_LawAndOrder_XP: number;
    Doctrine_LawAndOrder_Level: number;
    CompletedDoctrineStones: number;
    DoctrineCurrentCount: number;
    DoctrineTargetCount: number;
    FRUIT_LOW_MEALS_COOKED: number;
    VEGETABLE_LOW_MEALS_COOKED: number;
    VEGETABLE_MEDIUM_MEALS_COOKED: number;
    VEGETABLE_HIGH_MEALS_COOKED: number;
    FISH_LOW_MEALS_COOKED: number;
    FISH_MEDIUM_MEALS_COOKED: number;
    FISH_HIGH_MEALS_COOKED: number;
    MEAT_LOW_COOKED: number;
    MEAT_MEDIUM_COOKED: number;
    MEAT_HIGH_COOKED: number;
    MIXED_LOW_COOKED: number;
    MIXED_MEDIUM_COOKED: number;
    MIXED_HIGH_COOKED: number;
    POOP_MEALS_COOKED: number;
    GRASS_MEALS_COOKED: number;
    FOLLOWER_MEAT_MEALS_COOKED: number;
    DEADLY_MEALS_COOKED: number;
    EnemiesKilled: EnemiesKilled[];
    Alerts: Alerts;
    NotificationHistory: NotificationHistory[];
    PlayerDamageDealt: number;
    PlayerDamageReceived: number;
    Food: Food[];
    PLAYER_STARTING_HEALTH: number;
    CURRENT_WEAPON: number;
}
