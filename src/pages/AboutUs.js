import React from 'react';
import NavBar from '../components/NavBar';
import { Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';
import sir from '../images/sir.png';
import PrevInterns from '../components/PrevInterns';
import Footer from '../components/Footer';
import about from '../images/about.png';
import { useSelector } from 'react-redux';
const AboutUs = () => {
  const { isAdmin } = useSelector((state) => { return state.user });
  return (
    <div>
      <NavBar isAdmin={isAdmin} />
      <Heading mx="10" fontSize="6xl">
        About Us
      </Heading>
      <Flex
        mt={['10', '10', '24']}
        overflowX={'auto'}
        direction={['column', 'column', 'row']}
      >
        <Text
          mx="auto"
          maxW={['100%', '100%', '33%']}
          width={['100%', '100%', '33%']}
          as="u"
          fontSize={['3xl', '3xl', '4xl']}
          color="#02A4FF"
          textAlign={['center', 'center', 'left']}
          mb={['4', '4', '0']} // Add margin-bottom for spacing between Text and Image
        >
          We believe in fostering the next generation of talent. Our internship program is more than just an opportunity—it's a gateway to hands-on experience, mentorship, and a vibrant community that values innovation, growth, and diversity.
        </Text>
        <Image
          src={about}
          alt="picture"
          mx="auto"
          minW={['100%', '100%', '400px']} // Set minimum width for small screens
          maxW={['100%', '100%', '55%']} // Set maximum width for larger screens
          mb={['4', '4', '0']} // Add margin-bottom for spacing between Text and Image
          order={['2', '2', '1']} // Change order for small and medium screens
        />
      </Flex>

      <div>
        <Box bgColor="#BFDEFF" mt="10">
          <Heading p="12" fontSize="3xl">
            Our Master Trainer
          </Heading>
          <Center>
            <Image
              src={sir}
              alt=""
              bgColor="white"
              borderRadius="16"
              p="28"
              mb="10"
              mx='auto'
              w='70%'
            />
          </Center>
        </Box>
      </div>
      {/* <PrevInterns /> */}
      <Footer />
    </div>
  );
};

export default AboutUs;
