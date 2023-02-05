import React from 'react'

import GitHubCalendar from 'react-github-calendar'
import {Box,Text,Heading,Image, Flex,Button,Wrap,Icon,Link,Center,useColorMode, color} from "@chakra-ui/react"
import { useMediaQuery } from '@chakra-ui/react'

import GithubStats from './GithubStats'


const Githubcalender = () => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
    const { colorMode} = useColorMode()
    const darkcolor={
       color:"#6d28d9"
    }
    const lightcolor={
        color:"#e53e3e"
    }
  return (
    <div data-aos="fade-up-right" data-aos-duration="3000">
      {isLargerThan800? <Box marginTop="20px">
        <Text fontSize={{base:"18px",md:"23px",lg:"28px"}} fontWeight="Bold">GITHUB CONTRIBUTION <span style={colorMode=="dark"?darkcolor:lightcolor}>CALENDER</span> </Text>
        <Box marginTop="20px">
        <Center><GitHubCalendar username="prashantxi786" blockSize={16} blockMargin={6}/></Center>
        </Box>
        <GithubStats />
        </Box>: <Box  width="90%" margin="auto" marginTop="20px">
        <Text fontSize={{base:"18px",md:"23px",lg:"28px"}} fontWeight="Bold">GITHUB CONTRIBUTION <span style={colorMode=="dark"?darkcolor:lightcolor}>CALENDER</span> </Text>
        <Box marginTop="20px">
        <Center><GitHubCalendar username="piyushkhurana8744" blockSize={10} blockMargin={6}/></Center>
        </Box>
        <GithubStats />
        </Box>}
        
        
    </div>
  )
}
export default Githubcalender
