import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    Box,
  } from "@chakra-ui/react";
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from "react-icons/io5";
  
  import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
  import {
    SiMongodb,
    SiExpress,
    SiPostman,
    SiHtml5,
    SiCss3,
    SiRedux,
  } from "react-icons/si";
  import { DiJavascript1 } from "react-icons/di";
  
  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={"row"} align={"center"}>
        <Flex
          w={8}
          h={8}
          align={"center"}
          justify={"center"}
          rounded={"full"}
          bg={iconBg}
        >
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function Skills() {
    return (
      <Container maxW={"5xl"} py={12} id="Skills">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              My Skills
            </Text>
            <Heading>I persist the Following Skills</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Mentioned below are the skillsets which I possess in terms of Tech
              and Communication and Behavior.
            </Text>
            <Flex gap={10}>
              <Box>
                <Stack
                  spacing={4}
                  divider={
                    <StackDivider
                      borderColor={useColorModeValue("gray.100", "gray.700")}
                    />
                  }
                >
                  <Feature
                    icon={<Icon as={SiHtml5} color={"yellow.500"} w={5} h={5} />}
                    iconBg={useColorModeValue("yellow.100", "yellow.900")}
                    text={"HTML 5"}
                  />
                  <Feature
                    icon={<Icon as={SiCss3} color={"green.500"} w={5} h={5} />}
                    iconBg={useColorModeValue("green.100", "green.900")}
                    text={"CSS 3"}
                  />
                  <Feature
                    icon={
                      <Icon as={DiJavascript1} color={"purple.500"} w={5} h={5} />
                    }
                    iconBg={useColorModeValue("purple.100", "purple.900")}
                    text={"JavaScript"}
                  />
                  <Feature
                    icon={<Icon as={FaReact} color={"green.500"} w={5} h={5} />}
                    iconBg={useColorModeValue("green.100", "green.900")}
                    text={"React Js"}
                  />
                  <Feature
                    icon={<Icon as={SiRedux} color={"yellow.500"} w={5} h={5} />}
                    iconBg={useColorModeValue("yellow.100", "yellow.900")}
                    text={"Redux"}
                  />
                </Stack>
              </Box>
              <Box>
                <Stack
                  spacing={4}
                  divider={
                    <StackDivider
                      borderColor={useColorModeValue("gray.100", "gray.700")}
                    />
                  }
                >
                  <Feature
                    icon={<Icon as={FaNodeJs} color={"yellow.500"} w={5} h={5} />}
                    iconBg={useColorModeValue("yellow.100", "yellow.900")}
                    text={"Node Js"}
                  />
                  <Feature
                    icon={<Icon as={SiExpress} color={"green.500"} w={5} h={5} />}
                    iconBg={useColorModeValue("green.100", "green.900")}
                    text={"Express Js"}
                  />
                  <Feature
                    icon={
                      <Icon as={SiMongodb} color={"purple.500"} w={5} h={5} />
                    }
                    iconBg={useColorModeValue("purple.100", "purple.900")}
                    text={"Mongo Db"}
                  />
                  <Feature
                    icon={<Icon as={FaGithub} color={"green.500"} w={5} h={5} />}
                    iconBg={useColorModeValue("green.100", "green.900")}
                    text={"Git & Github"}
                  />
                  <Feature
                    icon={
                      <Icon as={SiPostman} color={"yellow.500"} w={5} h={5} />
                    }
                    iconBg={useColorModeValue("yellow.100", "yellow.900")}
                    text={"Postman"}
                  />
                </Stack>
              </Box>
            </Flex>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                "https://camo.githubusercontent.com/8bf6f6d78abc81fcf9c49f10649423e73ea44bc248e83aaae8759d401c829a84/68747470733a2f2f70687973696373677572756b756c2e66696c65732e776f726470726573732e636f6d2f323031392f30322f6368617261637465722d312e676966"
              }
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }