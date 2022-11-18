import { Switch, useColorMode } from "@chakra-ui/react";

export const ThemeToggler = ({ showLabel = false, ...rest }) => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      <Switch
        id="theme-toggler"
        size="lg"
        isChecked={colorMode === "dark"}
        value={colorMode}
        colorScheme="orange"
        mr={2}
        onChange={toggleColorMode}
        {...rest}
      />
    </>
  );
};
