import React from 'react'
import {Box,Text,Heading,Image, Flex,Button,Wrap,Icon,Link,Center,useColorMode} from "@chakra-ui/react"
import { useMediaQuery } from '@chakra-ui/react'
 const Aboutme = () => {
    const { colorMode} = useColorMode()
    const darkcolor={
       color:"#6d28d9"
    }
    const lightcolor={
        color:"#e53e3e"
    }
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  return (
    <div id="about" data-aos="fade-up-right" data-aos-duration="3000">
      {isLargerThan800?<Box style={{marginTop:"30px",paddingBottom:"70px"}} >
      <Text fontSize={"30px"} fontWeight="bold">All <span style={colorMode=="dark"?darkcolor:lightcolor}>About</span> Me</Text>
      <Flex width="90%" margin="auto" marginTop="20px">
        <Box width="50%">
            <Image src="https://media.tenor.com/NOYF3f82b_gAAAAC/programmer.gif" width="80%"></Image>
        </Box>
        <Box width="40%" margin="auto" fontSize="18px" fontWeight={"500"}>
          <Text>
          Hello! My name is Prashant Singh. I'm a growth-oriented Full-Stack Web Developer with strong adaptive,administrative & communication skills, good attention to detail & the ability to write efficient code.
          </Text>
          <hr style={{marginTop:"20px"}}/>
          <Text marginTop="10px">I'm open to Job opportunities. If you think my skills are relevant to your job requirements then do <Link color="red" href="/#contact">contact</Link> me.</Text>
        </Box>
      </Flex>
      </Box> :
       <Box width="90%" margin="auto" marginTop="20px" paddingBottom={"70px"}>
       <Text fontSize={"30px"} fontWeight="600">All <span style={colorMode=="dark"?darkcolor:lightcolor}>About</span> Me</Text>
       <Box  fontSize="16px" fontWeight={"400"} marginTop="20px">
      <Text>
      Hello! My name is Prashant Singh. I'm a growth-oriented Full-Stack Web Developer with strong adaptive,administrative & communication skills, good attention to detail & the ability to write efficient code.      </Text>
      <hr style={{marginTop:"20px"}}/>
      <Text marginTop="10px">I'm open to Job opportunities. If you think my skills are relevant to your job requirements then do <Link color="red" href="/#contact">contact</Link> me.</Text>
    </Box>
    <Box  marginTop="60px">
        <Image src="https://media.tenor.com/NOYF3f82b_gAAAAC/programmer.gif" width="100%"></Image>
    </Box>
    </Box>}
       
       
    </div>
  )
}

export default Aboutme
