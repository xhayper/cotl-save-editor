const isDark = useDark({
  storageKey: "theme",
});

export function useTheme() {
  const setDark = (value: boolean) => {
    isDark.value = value;
  };

  const toggleDark = useToggle(isDark);

  return { isDark, setDark, toggleDark };
}
