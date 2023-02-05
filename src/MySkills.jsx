import React, { useState } from 'react'
import {Box,Text,Image, Flex,Button,Center,useColorMode,Grid,GridItem} from "@chakra-ui/react"
const Myskills = () => {
  const { colorMode} = useColorMode()
  const skillsarr=[
    {id:1,
     image:"https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png",
     name:"CSS",
     category:"Frontend"
   },
   {id:2,
     image:"https://amanvyas1.github.io/images/css1.png",
     name:"HTML",
     category:"Frontend"
   },
   {id:3,
     image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
     name:"Javascript",
     category:"Frontend"
   },
   {id:4,
     image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
     name:"React",
     category:"Frontend"
   },
   {id:5,
     image:"https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
     name:"Redux",
     category:"Frontend"
   },
   {id:6,
     image:"https://cdn.cdnlogo.com/logos/n/94/nodejs-icon.svg",
     name:"Node js",
     category:"Backend"
   },
   {id:7,
     image:"https://ghanishtkhurana.github.io/static/media/mongo.1fe3a1f5029aaa08fe32.png",
     name:"Mongo DB",
     category:"Backend"
   },
   {id:8,
     image:"https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png",
     name:"NextJS",
     category:"Frontend"
   },
   {id:9,
     image:"https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",
     name:"Express",
     category:"Backend"
   },
   {id:10,
     image:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png",
     name:"Mangoose",
     category:"Backend"
   },
   {id:11,
     image:"https://ghanishtkhurana.github.io/static/media/chakra.c0fe0e95c137c17f3896.png",
     name:"Chakra UI",
     category:"Frontend"
   },
   {id:12,
     image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Logo_material_design.svg/2560px-Logo_material_design.svg.png",
     name:"Material UI",
     category:"Frontend"
   },
   {id:13,
     image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
     name:"Git",
     category:"Backend"
   },
   {id:14,
     image:"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png",
   name:"Postman",
   category:"Backend"
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
    
    const handleFrontend=()=>{
      let arr=skillsarr.filter((el)=>el.category=="Frontend")
      setSkillarr(arr)
    }

    const handleBackend=()=>{
      let arr=skillsarr.filter((el)=>el.category=="Backend")
      setSkillarr(arr)
    }
  return (
    <div  id="skills" data-aos="fade-up-right" data-aos-duration="3000">
      <Box style={colorMode === 'light'?mainbox:truebox}>
        <Text fontSize={"30px"} fontWeight="bold">My <span style={colorMode==="dark"?darkcolor:lightcolor}>Skills</span> </Text>
        <Center>
        <Flex gap="20px" marginTop="20px">
        <Button style={colorMode=="dark"?buttondark:buttonlight} onClick={()=>setSkillarr(skillsarr)}>All</Button>
        <Button style={colorMode=="dark"?buttondark:buttonlight} onClick={handleFrontend}>Frontend</Button>
        <Button style={colorMode=="dark"?buttondark:buttonlight} onClick={handleBackend}>Backend</Button>
        </Flex>
        </Center>
        
      <Grid templateColumns={{base:"repeat(3,1fr)",md:"repeat(5,1fr)",lg:"repeat(8,1fr)"}} width="90%" margin="auto" gap="20px" marginTop="30px">
        {skillarr.map(el=><GridItem style={colorMode=="dark"?griddark:gridlight}  _hover={{transform:"scale(1.1)",transition:"0.5s"}}  textAlign="center" >
          <Center><Image src={el.image} height={{base:"50px",lg:"70px"}} ></Image></Center>
          <Text fontWeight={{base:"400",lg:"bold"}} marginTop="15px" fontSize={{base:"13px",lg:"17px"}}>{el.name}</Text>
        </GridItem>)}

      </Grid>
      </Box>
      
    </div>
  )
}

export default Myskills
