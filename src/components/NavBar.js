import React from 'react';
import { Flex, Text, Box, Image, Spacer, Avatar, Menu, Button, ButtonGroup, MenuList, MenuItem, MenuButton, useToast, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons'
import axios from 'axios';
import { useSelector } from 'react-redux';
import img10 from "../images/aim4u_logo.jpg"
const Navbar = ({ isAdmin }) => {
  const toast = useToast();
  const { userId } = useSelector((state) => { return state.user });
  const { isAuthenticated } = useSelector((state) => { return state.user });
  const linkStyles = {
    p: ['2', '2', '2', '3'],
    mx: ['0', '0', '3', '3'],
    fontSize: ['xl', 'xl', '2xl', '2xl'],
    color: 'white',
    _hover: {
      color: 'white',
      textDecoration: 'underline',
    },
  };
  return (
    <Flex
      // py={['2', '2', '2', '4']}
      // px={['4', '4', '6', '8']}
      w="100%"
      direction={['column', 'column', 'row', 'row']}
      overflowX="auto"
      whiteSpace="nowrap"
      flexWrap="wrap"
      backgroundColor='white'
    >
      <Image src={img10} w={'7rem'} />
      <Heading alignSelf={'center'}>Gyan</Heading>
      <Spacer />

      <Flex
        align={['center', 'center', 'center', 'center']}
        direction={['column', 'column', 'row', 'row']}

      >
        <Box {...linkStyles}>
          <Link to="/" className="nav-link"><Text color={'#007BFF'} _hover={{ opacity: "50%" }}>Home</Text></Link>
        </Box>
        <Box {...linkStyles}>
          <Link to="/about" className="nav-link"><Text color={'#007BFF'} _hover={{ opacity: "50%" }}>About</Text></Link>
        </Box>
        <Box {...linkStyles}>
          <Link to="/internship" className="nav-link"><Text color={'#007BFF'} _hover={{ opacity: "50%" }}>Internships</Text></Link>
        </Box>
        <Box {...linkStyles}>
          <Link to="/search" className="nav-link"><Text color={'#007BFF'} _hover={{ opacity: "50%" }}>Search</Text></Link>
        </Box>
        {/* <Box {...linkStyles}>
          <Link to="/blog" className="nav-link">Blog</Link>
        </Box> */}

      </Flex>

      <Spacer />
      {isAuthenticated &&
        <Flex direction={['column', 'column', 'row', 'row']} align={['center', 'center', 'center', 'center']}>
          <Flex direction={'row'} p={['2', '2', '2', '3']} my={['3', '3', 'auto', 'auto']} fontSize={['xl', 'xl', '2xl', '2xl']} color='#007BFF'>
            <Avatar bg='teal.500' mb='2' ml='8' mr='3' />
            <Menu>
              <MenuButton as={Button} color={'black'} marginTop={'4%'} fontSize={['md', 'md', 'lg', 'lg']} backgroundColor={'transparent'} rightIcon={<ChevronDownIcon />} border={'1px'} _hover={{ bg: 'transparent', color: 'black' }}>
                Profile
              </MenuButton>

              <MenuList color={'black'} >
                {!isAdmin && <Link to='/profile'><MenuItem>Update Profile</MenuItem></Link>}
                {isAdmin && <Link to='/admin'><MenuItem>Admin Interface</MenuItem></Link>}
                {!isAdmin && <Link to={'/applied'}><MenuItem>My Applications</MenuItem></Link>}
                <Link to={'/changePassword'}><MenuItem>Change Password</MenuItem></Link>
                {/* {!isAdmin && <MenuItem onClick={async () => {
                  try {
                    const accessToken = window.sessionStorage.getItem('accessToken');
                    const formData = new FormData();
                    formData.append('user', userId);
                    const { data } = await axios.post(`https://gyanbackend.aim4u.co.in/view-user-resume/`,
                      formData,
                      {
                        headers: {
                          'Content-Type': 'multipart/form-data',
                          'Authorization': `Bearer ${accessToken}`,
                        }
                      });
                    toast({
                      title: 'Resume Fetched Successfully',
                      description: 'Download will start soon',
                      status: 'success',
                      duration: 5000,
                      isClosable: true,
                    });
                    window.open(data.user_resume, '_blank', 'noopener noreferrer');
                  } catch (error) {
                    toast({
                      title: 'Failed to get resume',
                      description: 'Something went wrong',
                      status: 'error',
                      duration: 5000,
                      isClosable: true,
                    });
                    console.log(error);
                  }
                }}>
                  My Resume
                </MenuItem>
                } */}
                <MenuItem
                  onClick={() => {
                    window.sessionStorage.removeItem('accessToken');
                    window.location.href = '/login';
                  }}>
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      }
      {!isAuthenticated &&
        <Box bg="white" pl={0} alignSelf={'center'}>
          <Flex as="nav">
            <ButtonGroup pr="2vw" pt="0.5vw" spacing={4} alignSelf={'center'}>
              <Link to="/login">
                <Button
                  size={{ base: "sm", md: "md", lg: "lg" }}
                  bg={'#007BFF'}
                  textColor={'white'}
                >
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  size={{ base: "sm", md: "md", lg: "lg" }}
                  borderColor={'#007BFF'}
                  variant={'outline'}
                  textColor={'black'}
                >
                  Register
                </Button>
              </Link>
            </ButtonGroup>
          </Flex>
        </Box>}
    </Flex >
  );
};

export default Navbar;
