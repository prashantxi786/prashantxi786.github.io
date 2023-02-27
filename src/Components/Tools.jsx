import React, { useState } from 'react'
import {Box,Text,Image, Flex,Center,useColorMode,Grid,GridItem} from "@chakra-ui/react"
const Myskills = () => {
  const { colorMode} = useColorMode()
  const skillsarr=[
   {id:1,
     image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
     name:"Git",
     category:""
   },
   {id:2,
    image:"https://i.postimg.cc/MZNnj4nk/png-transparent-visual-studio-code-hd-logo-thumbnail-removebg-preview.png",
    name:"Visual Studio Code",
    category:""
  },
  {id:3,
    image:"https://i.postimg.cc/tT9hwchv/34-340439-atom-editor-logo-black-atom-logo-png-removebg-preview.png",
    name:"Atom",
    category:""
  },
  {id:4,
    image:"https://i.postimg.cc/jdSMLDn3/logo-removebg-preview.png",
    name:"Thunderclient",
    category:""
  },
  {id:5,
    image:"https://i.postimg.cc/Gp40YMBN/7658037-removebg-preview.png",
    name:"Swagger",
    category:""
  },
   {id:6,
     image:"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png",
   name:"Postman",
   category:""
 },
 ]
  const [skillarr,setSkillarr]=useState(skillsarr)
    const darkcolor={
       color:"#6d28d9"
    }
    const lightcolor={
        color:"#e53e3e"
    }
    const mainbox={
      backgroundColor:"#dff4ff",
      padding:"20px",
      paddingBottom:"80px"
    }
    const truebox={
      padding:"20px",
      paddingBottom:"80px",
      backgroundColor:"#050402"
    }
    const buttondark={
      backgroundColor:"#6d28d9",
      color:"white"
    }
    const buttonlight={
      backgroundColor:"#e53e3e",
      color:"white"
    }
    const griddark={
      boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
      padding:"10px",
      backgroundColor:"#1a202c",
    }
    const gridlight={
      boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
      padding:"10px",
    }
    
  return (
    <div  id="skills" data-aos="fade-up-right" data-aos-duration="3000">
      <Box style={colorMode === 'light'?mainbox:truebox}>
        <Text fontSize={"30px"} fontWeight="bold"><span style={colorMode==="dark"?darkcolor:lightcolor}>Tools</span> </Text>
        <Center>
        <Flex gap="20px" marginTop="20px">
        </Flex>
        </Center>
        
      <Grid templateColumns={{base:"repeat(3,1fr)",md:"repeat(5,1fr)",lg:"repeat(8,1fr)"}} width="90%" margin="auto" gap="20px" marginTop="30px">
        {skillarr.map(el=><GridItem borderRadius={"45%"} style={colorMode==="dark"?griddark:gridlight}  _hover={{transform:"scale(1.1)",transition:"0.5s"}}  textAlign="center" >
          <Center   ><Image  src={el.image} height={{base:"50px",lg:"70px"}} ></Image></Center>
          <Text fontWeight={{base:"400",lg:"bold"}} marginTop="15px" fontSize={{base:"13px",lg:"17px"}}>{el.name}</Text>
        </GridItem>)}

      </Grid>
      </Box>
      
    </div>
  )
}

export default Myskills
