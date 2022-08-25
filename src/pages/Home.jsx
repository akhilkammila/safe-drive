import { Box, Button, Heading, ScaleFade, SlideFade, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Layout from "../Components/Layout";
import car from '../images/drivingdistracted.png';

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <ScaleFade in={loaded}>
      <Layout>
      <Box
        d="flex"
        w="100%"
        h="85vh"
        px="10rem"
        pt="12rem"
        backgroundImage="url('ThreeDotss.svg')"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        {/* text */}
        {/* textShadow="1px 1px 5px gray" */}
        {/* textShadow="1px 1px 3px gray" */}
      
        <Box w="50%">
          <SlideFade in={true} delay={0.5}>
            <Heading size="3xl">
              Welcome to <span style={{ color: "#069191" }}>safedrive</span>
            </Heading>
          </SlideFade>
          <SlideFade in={true} delay={0.7}>
            <Text
              fontSize="2xl"
              mt={3}
              ml={2}
              mb={5}
            >
              The next generation telematics device.
              {/* <br /> Grow your non-profit faster than ever! */}
            </Text>
          </SlideFade>

          <SlideFade in={true} delay={0.9}>
            <Text fontSize="xl" ml={2}>
              We calculate your <strong>driving safety</strong> using Video-AI-detected <strong>driver distractedness</strong>.
            </Text>
            <Button
              mt={10}
              fontWeight="bolder"
              size="lg"
              ml={2}
              variant="ghost"
              colorScheme="teal"
              bgColor="#00808011"

              as={RouterLink}
              to="/login"
            >
              Get Started
            </Button>
          </SlideFade>
        </Box>

        {/* image */}
        <Box>
          <SlideFade in={true} delay={1}>
            <Image w="500px" src={car} mt={0} />
          </SlideFade>
        </Box>
      </Box>
      </Layout>
    </ScaleFade>
  );
};
export default Home;
