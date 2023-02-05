import React from 'react'
import {Box,Text,Heading,Image, Flex,Button,Wrap,Icon,Link,Center,useColorMode, color} from "@chakra-ui/react"
import { useMediaQuery } from '@chakra-ui/react'
const GithubStats = () => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
    const { colorMode} = useColorMode()
    const darkcolor={
       color:"#6d28d9"
    }
    const lightcolor={
        color:"#e53e3e"
    }
  return (
    <div data-aos="fade-up-right">
      {isLargerThan800?<Box marginTop="20px">
        <Text fontSize={{base:"18px",md:"23px",lg:"28px"}} fontWeight="Bold">GITHUB <span style={colorMode=="dark"?darkcolor:lightcolor}> STATISTICS</span> </Text>
           <Text fontSize={"20px"}>My overall statistics and contribution</Text>
          <Center>
          <Flex gap="30px" marginTop="20px">
            {colorMode=="dark"?<Image src="https://github-stats-alpha.vercel.app/api?username=prashantxi786&cc=000&tc=fff&ic=fff&bg=fff"></Image>:<Image src="https://github-stats-alpha.vercel.app/api?username=prashantxi786"></Image>}
           {colorMode=="dark"?<Image src="https://github-readme-streak-stats.herokuapp.com?user=prashantxi786&theme=dark&hide_border=true"></Image>:<Image src="https://github-readme-streak-stats.herokuapp.com?user=prashantxi786&hide_border=false"></Image>}
            
            </Flex></Center> 
        </Box> :<Box  margin="auto" marginTop="30px">
        <Text fontSize={{base:"18px",md:"23px",lg:"28px"}} fontWeight="Bold">GITHUB <span style={colorMode=="dark"?darkcolor:lightcolor}> STATISTICS</span> </Text>
           <Text fontSize={"20px"}>My overall statistics and contribution</Text>
          <Center>
          <Box  marginTop="20px">
            {colorMode=="dark"?<Image width='400px' src="https://github-stats-alpha.vercel.app/api?username=piyushkhurana8744&cc=000&tc=fff&ic=fff&bg=fff"></Image>:<Image src="https://github-stats-alpha.vercel.app/api?username=piyushkhurana8744"></Image>}
           {colorMode=="dark"?<Image marginTop="20px" src="https://github-readme-streak-stats.herokuapp.com?user=piyushkhurana8744&theme=dark&hide_border=true"></Image>:<Image marginTop="20px" src="https://github-readme-streak-stats.herokuapp.com?user=piyushkhurana8744&hide_border=false"></Image>}
            
            </Box></Center> 
        </Box>}
       
        
    </div>
  )
}

export default GithubStats
