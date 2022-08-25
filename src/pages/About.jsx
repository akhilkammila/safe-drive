import { Box, Button, Heading, ScaleFade, SlideFade, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Layout from "../Components/Layout";
import car from '../images/drivingdistracted.png';

const About = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <ScaleFade in={loaded}>
      <Layout>
        

      </Layout>
    </ScaleFade>
  );
};
export default About;
