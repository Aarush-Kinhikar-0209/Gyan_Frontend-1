import React, { useState } from 'react';
import {
  HStack,
  Box,
  Text,
  Button,
  Input,
  Checkbox,
  Image,
  Flex,
  useToast,
  Heading
} from '@chakra-ui/react';
import image1 from '../images/course2.png';
import logo from '../images/google_logo.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../Actions/userActions';
import axios from 'axios';
import NavBar from '../components/NavBar';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const toast = useToast();
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:8000/login/', {
        email,
        password,
      });
      toast({
        title: 'Login Successful!',
        description: 'Welcome to Gyam AIM4u.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      const id = data.id;
      const isAdmin = data.isadmin;
      const payload = { email: email, id: id, isAdmin: isAdmin };
      console.log(payload);
      const accessToken = data.token.access;
      window.sessionStorage.setItem('accessToken', accessToken);
      dispatch(loginSuccess(payload));
      setTimeout(2000);
      navigate('/');
    } catch (error) {
      toast({
        title: 'Authentication failed.',
        description:
          'Please check your credentials and try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      console.log(error);
    }
  };

  return (
    <div>
      {isAuthenticated && <NavBar name={'Login'} />}
      <HStack spacing='80px' paddingTop='50' ml='100'>
        <Box w='700px' h='450px' paddingTop='60px'>
          <Image
            src={image1}
            alt=''
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '20px',
            }}
          />
        </Box>

        <Box w='550px' h='550px' padding={'20px'} backgroundColor={'#E4FFFF'} borderRadius={'25px'}>
          <Heading pt={8} textAlign={'left'}><Heading as="span" size={{ base: "base", md: "md", lg: "xl" }} color="#2F327D">Welcome to </Heading><Heading as="span" size={{ base: "base", md: "md", lg: "xl" }} color="#00CBB8">Gyan@Aim4u</Heading></Heading>
          <HStack spacing='4px'>
            <Heading color={'#F48C06'} size={{ base: "base", md: "sm", lg: "sm" }}>Lets get you started</Heading>
            {/* <Link to='/login'>
              <Box w='110px' h='40px' borderRadius='25px' marginRight='10px'>
                <Button
                  w='110px'
                  h='40px'
                  borderRadius='25px'
                  bg='rgba(45, 240, 228, 0.7)'
                  _hover={{
                    bg: 'rgba(45, 240, 228, 1)',
                    cursor: 'pointer',
                  }}
                  _active={{
                    bg: 'rgba(45, 240, 228, 1)',
                  }}
                  fontSize='15px'
                  border='none'
                >
                  Login
                </Button>
              </Box>
            </Link>
            <Link to='/register'>
              <Box w='110px' h='40px' borderRadius='25px'>
                <Button
                  w='110px'
                  h='40px'
                  borderRadius='25px'
                  bg='rgba(45, 240, 228, 0.7)'
                  _hover={{
                    bg: 'rgba(45, 240, 228, 1)',
                    cursor: 'pointer',
                  }}
                  _active={{
                    bg: 'rgba(45, 240, 228, 1)',
                  }}
                  fontSize='15px'
                  border='none'
                >
                  Register
                </Button>
              </Box>
            </Link> */}
          </HStack>

          <br />
          {/* <Text ml='30px' style={{ fontWeight: 'lighter' }} mb='0px'>
            Let's get you started
          </Text> */}
          <Text ml='30px' fontSize='14px' style={{ fontWeight: 'bold' }}>
            Email Address
          </Text>
          <Input
            placeholder='Enter your Email Address'
            pl='20px'
            borderRadius='25px'
            ml='20px'
            h='40px'
            w='430px'
            backgroundColor={'white'}
            borderColor='rgba(45, 240, 228, 0.4)'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></Input>
          <br></br>
          <Text ml='30px' fontSize='14px' style={{ fontWeight: 'bold' }}>
            Password
          </Text>
          <Input
            placeholder='Enter your Password'
            pl='20px'
            pr='20'
            borderRadius='25px'
            type='password'
            ml='20px'
            h='40px'
            w='430px'
            backgroundColor={'white'}
            borderColor='rgba(45, 240, 228, 0.4)'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></Input>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Flex>
              <Box height='20px'>
                <Checkbox fontSize='15px' ml='25px'>
                  <input
                    type='checkbox'
                    style={{ marginRight: '5px', display: 'none' }}
                  />
                  <span style={{ cursor: 'pointer', fontSize: '12px' }}>Remember me</span>
                </Checkbox>
              </Box>
            </Flex>
          </div>
          <br />
          <br />
          <Button
            marginLeft='25px'
            w='450px'
            h='40px'
            borderRadius='25px'
            bg='#007BFF'
            color='white'
            _hover={{
              bg: 'rgba(45, 240, 228, 1)',
              cursor: 'pointer',
            }}
            _active={{
              bg: 'rgba(45, 240, 228, 1)',
            }}
            fontSize='15px'
            border='none'
            type='submit'
            onClick={handleSubmit}
          >
            Login
          </Button>
          <Text textAlign={'center'} mt='2%' fontSize='18px' fontWeight='bold'>
            or
          </Text>

          <button type="button" class="login-with-google-btn" >
            Sign in with Google
          </button>
          <Text textAlign={'center'} mt='2%' fontSize='14px' fontWeight='bold'>
            Don't have an Account? <Link to='/register'><span style={{ color: '#007BFF' }}>Register</span></Link>
          </Text>
        </Box>
      </HStack>
    </div>
  );
};

export default Login;
