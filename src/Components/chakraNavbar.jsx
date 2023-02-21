import {
    Image,
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useColorMode,
    useDisclosure,Link
  } from '@chakra-ui/react';
import AOS from 'aos';
import { HashLink  } from 'react-router-hash-link';
import React from 'react'
import 'aos/dist/aos.css';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import styles from "../Css-modules/navbar.module.css"
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
import { useContext } from 'react';
import { contextapi } from '../Contextapi';
  export default function ChakraNavbar() {
    const {change,logout}=useContext(contextapi)
    const handleToggle=()=>{
      toggleColorMode()
      logout()
    }
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    React.useEffect(() => {
      AOS.init();
    }, [])
    return (
      <Box style={colorMode==="dark"?{bgColor:"#1e262b"}:{bgColor:"#f2fffe"}} zIndex="5" pos="fixed" width="100%" top="0" boxShadow= "0px 1px 5px 1px gray" fontSize={"20px"}>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}
          bgColor={colorMode==="light"?"#F2FFFE":"#1E262B"}
          >
           
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
            >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex  flex={{ base: 1 }} justify={{ base: 'left', md: 'space-between', }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              <Link href="/"><Image className={styles.logo} height={{base:"30px",md:"35px",lg:"35px"}} width={{base:"",md:"",lg:"50px"}} src={colorMode==="light"? "https://i.postimg.cc/Sx5vkgzr/PS-logo-2.png":"https://i.postimg.cc/rsQfbjk5/PS-logo1.png"}/></Link>
            </Text>
  
            <Flex mr="20px" display={{ base: 'none', md: 'flex' }} justifyContent="flex-end" >
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Button onClick={handleToggle}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.900', 'orange.200');
    const linkHoverColor = useColorModeValue('blue.300', 'red.400');
  
    return (
      <Stack  display="flex" alignItems="right" direction={'row'} spacing={10}>
        {NAV_ITEMS.map((navItem) => (
          <Box  className={styles.navbutton}  key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <HashLink
                  activeClass="active"
                  to={navItem.href}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  p={2}
                  fontSize={{base:"sm",md:"md",lg:'md'}}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </HashLink>
              </PopoverTrigger>
  
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  
  
  const NAV_ITEMS = [
    {
      label: 'Home',
      href:"/#"
      
    },
    {
      label: 'About me',
      href:"/#about"
      
    },
    {
      label: 'Skills',
      href:"/#skills"
    },
    {
      label: 'My Projects',
      href: '/#projects',
    },
    {
      label: 'Contact',
      href: '/#contact',
    }
  ];