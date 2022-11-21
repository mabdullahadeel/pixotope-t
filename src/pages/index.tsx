import {
  Box,
  Container,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { ThemeToggler } from "../components/ThemeToggler";
import { ShowSettings } from "../modules/show-settings";

export default function Home() {
  return (
    <Box w="100%" h="100%">
      <Box w="100%" as="nav" p={2}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="3xl">PixoClient</Text>
          <ThemeToggler />
        </Flex>
      </Box>
      <Container h="100%" maxW="container.lg">
        <Flex h="100%" justifyContent="center" alignItems="center">
          <Tabs variant="soft-rounded" colorScheme="orange" gap={1} isLazy>
            <TabList>
              <Tab>Show Setting</Tab>
              <Tab>Cameras</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <ShowSettings />
              </TabPanel>
              <TabPanel>
                <p>Camera Settings Coming Soon</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Container>
    </Box>
  );
}
