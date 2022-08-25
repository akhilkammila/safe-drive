import { AddIcon, CloseIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Fade,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  UnorderedList,
  ListItem,
  Flex,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import Layout from "../Components/Layout";
import { Loader } from "../Components/Loader";
import RepoView from "../Components/RepoView";
import { useAuth } from "../contexts/authContext";
import firebase from "../firebase";

import raspberrypi from '../images/raspberrypi.png';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Repos = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded)
    return (
      <Layout>
        <Box height="90vh" d="flex" alignItems="center" justifyContent="center">
          <Loader w="80%" h="10rem" rounded="full" />
        </Box>
      </Layout>
    );

  return (
    <Layout>
      <Fade in={loaded}>

        <Flex flexDirection="column" textAlign="center" justifyContent="center" p="5rem" h="10vh">
          <Heading as="h1" size='3xl' >
            need a <span style={{ color: "#069191" }}>safedrive</span> device?
          </Heading>

          <Text as="h1" fontSize='3xl' >
            its 100% free – there's nothing to lose!
          </Text>
        </Flex>

        <Flex>
          {/* Col 1 */}
          <Box  w="50%" height="85vh" p="5rem">

            <Image src={raspberrypi}/>

          </Box>

          {/* Col 2 */}
          <Box  w="50%" height="85vh" p="5rem">


            <Button
              mt={1}
              fontWeight="bolder"
              size="lg"
              ml={2}
              variant="ghost"
              colorScheme="teal"
              bgColor="#00808011"
            >
              <Link href="https://www.sparkfun.com/products/18713?src=raspberrypi" isExternal style={{textDecoration: "none"}} >
                Buy Here
              </Link>
            </Button>

            <Image src={raspberrypi}/>

          </Box>

        </Flex>

        {/* End of Heading Section */}

        {/* Section 1 */}
        <Box w="100%" height="100%" p="5rem" backgroundColor="white">
          <Heading>sec1</Heading>
        </Box>

        {/* Section 2 */}
        <Box w="100%" height="100%" p="5rem" backgroundColor="gray">
          <Heading>sec2</Heading>
        </Box>

        {/* Section 3 */}
        <Box w="100%" height="100%" p="5rem" backgroundColor="white">
          <Heading>sec3</Heading>
        </Box>


      </Fade>
    </Layout>
  );
};

export default Repos;
