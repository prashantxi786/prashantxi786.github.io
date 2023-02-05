import {Box,Button,Grid, GridItem, Heading,Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import styles from "../Css-modules/Project.module.css"
import {BsFillCameraVideoFill,BsFillEyeFill,BsGithub} from "react-icons/bs"

export const Projects = () => {
  
    const { colorMode} = useColorMode()
    const darkcolor={
       color:"#6d28d9"
    }
    const lightcolor={
        color:"#DF4401"
    }
    const mainbox={
      backgroundColor:"#dff4ff",
     
    }
    const truebox={
      
      backgroundColor:"#050402"
    }
    const proArray=[
      {proname:"TechoMania",
        prodesc:"TechoMania is a camera, electronics, and film equipment online retailer. This project is clone of Adorama.com. I lead the team of 4 people and my responsibility was to create all the functionality and UI of Landing Page.",
        techStack:"React, Redux, Firebase, Node, JSON, Render, Vercel, ChakraUI",
        gif:"https://i.postimg.cc/FzmBzdRT/2023-02-05.png",
        video:"https://drive.google.com/file/d/1hIk6UO947E8EXRcivx5BD_Z88pDRaGcW/view",
        src:"https://github.com/prashantxi786/voiceless-lunchroom-7858",
        link:"https://techomania.vercel.app/"
      },
      {proname:"Ajio Fashion",
        prodesc:"Ajio Fashion is my individual project which I created in 4 days. This shopping site offers wide fashion Clothing and home decor. I created landing page, products page, individual product page and cart page with all the functionalities working.",
        techStack:"HTML, CSS, JavaScript,React, Node, Render, ChakraUI",
        gif:"https://miro.medium.com/max/1076/1*6mXXnDTSx3K6bSQme6QxIA.gif",
        video:"https://drive.google.com/file/d/1nNRJUNBrhKdK1KGz9n4iHZ16djNOUgyF/view",
        src:"https://github.com/prashantxi786/hunky-nation-4628/tree/master/ajio.com",
        link:"https://euphonious-fudge-cf20f9.netlify.app/"
      },
      {proname:"Lync Club",
        prodesc:"Lync Club(Bewakoof.com) is the fashion e-commerce startup that stands out from the rest. It offers a trendy collection of apparel based on dazzling and upbeat designs that resonate with the millennials.",
        techStack:"HTML, CSS, JavaScript, Node, ChakraUI",
        gif:"https://images.bewakoof.com/uploads/grid/app/29-11-2022-DOTW-Msite-banner-Homepage-Men-1669623535.gif",
        video:"",
        src:"https://github.com/prashantxi786/equal-slip-6381",
        link:"https://lambent-narwhal-8bd70e.netlify.app/"
      },
      {proname:"KindMeal.my",
        prodesc:"Lync Club(Bewakoof.com) is the fashion e-commerce startup that stands out from the rest. It offers a trendy collection of apparel based on dazzling and upbeat designs that resonate with the millennials.",
        techStack:"HTML, CSS, JavaScript, Node, ChakraUI",
        gif:"https://camo.githubusercontent.com/869638a63dc065fb27efeac72ecc2ba175bbbbcb794fea40edd3ed457f98c7b8/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f312a756e377a355a786c4e57477457326b7377476f554d772e706e67",
        video:"",
        src:"https://github.com/prashantxi786/holy-whip-3101",
        link:"https://majestic-licorice-2fdd75.netlify.app/"
      },
      {proname:"Youtube Clone",
        prodesc:"Here is a clone of Youtube which I built as an assignment. Youtube is a online video streaming platform where you can watch any video. It has basic functionalities like fetching data from server, sorting data.",
        gif:"https://www.videoamigo.com/blog/wp-content/uploads/2019/11/youtube-redesign.gif",
        video:"",
        src:"https://github.com/masai-course/prashant_singh_fw21_0484/tree/master/unit-3/sprint-3/day-1/Youtube",
        link:"https://clever-choux-09ce25.netlify.app/"
      },
      {proname:"Lync Club",
        prodesc:"Lync Club(Bewakoof.com) is the fashion e-commerce startup that stands out from the rest. It offers a trendy collection of apparel based on dazzling and upbeat designs that resonate with the millennials.",
        techStack:"HTML, CSS, JavaScript, Node, ChakraUI",
        gif:"https://images.bewakoof.com/uploads/grid/app/29-11-2022-DOTW-Msite-banner-Homepage-Men-1669623535.gif",
        video:"",
        src:"https://github.com/prashantxi786/equal-slip-6381",
        link:"https://lambent-narwhal-8bd70e.netlify.app/"
      }
      
    ]
  return (


    <Box id="projects" style={colorMode === 'light'?mainbox:truebox} paddingBottom="60px">
       <Box mt="1rem" className={styles.intro} data-aos="fade-up-right" data-aos-duration="3000" paddingTop="1px">
        <Box >
        <Heading mt="1rem" mb="2rem"> <em style={colorMode==="dark"?darkcolor:lightcolor}>Project</em> <em>Section</em> </Heading>
        </Box>
       
       {/* mid-section */}
       
       <Grid className={styles.mid_sec} templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} gap="20px"
       
       >
        {proArray.map((pro)=>
        <GridItem key={pro.proname} className={styles.child}>
        <img style={{height:"50%",width:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}} src={pro.gif} alt="expedia" />
         <h2 className={styles.proName} style={colorMode==="dark"?darkcolor:lightcolor} >{pro.proname}</h2>

         <Text className={styles.proPara}>{pro.prodesc}</Text>
         
         <Text style={{fontSize:"14px",color: "rgb(96, 97, 97)"}}><span className={styles.techStack} style={colorMode==="dark"?darkcolor:lightcolor}>Tech Stack:-</span>{pro.techStack}</Text>
         
        
        <Box style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"70px",fontSize:"20px",marginTop:"15px"}}>
          <Button  _hover={{ fontSize: '20px',bg:"#e53e3e"}}
   > <a href={pro.video}><BsFillCameraVideoFill /></a> </Button>
          <Button _hover={{ fontSize: '20px',bg:"#e53e3e"}}><a href={pro.link}><BsFillEyeFill /></a></Button>
          <Button _hover={{ fontSize: '20px',bg:"#e53e3e"}}><a href={pro.src}><BsGithub /></a></Button>
        </Box>

      </GridItem> 
        )}
       
       </Grid>
         
       
    </Box>
    </Box>
  )
}
{/* <GridItem className={styles.child}>
          <img style={{height:"50%",width:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}} src="https://cdn.dribbble.com/users/4400366/screenshots/15917760/media/21dd5982b34f1e95353b3a8089862f83.png?compress=1&resize=400x300" alt="expedia" />
           <h2 className={styles.proName} style={colorMode==="dark"?darkcolor:lightcolor} >TechoMania</h2>

           <Text className={styles.proPara}>Expedia is one of the biggest online travel websites out there. It can be used to search for and book all sorts of travel, including hotels, airfare, rental cars, cruises, activities, attractions and vacation packages.</Text>

           <Text style={{fontSize:"14px",color: "rgb(96, 97, 97)"}}><span className={styles.techStack} style={colorMode==="dark"?darkcolor:lightcolor}>Tech Stack:-</span>HTML,CSS and JavaScript</Text>
          
          <Box style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"70px",fontSize:"20px",marginTop:"15px"}}>
            <Button  _hover={{ fontSize: '20px',bg:"#e53e3e"}}
     > <a href="https://drive.google.com/file/d/1hIk6UO947E8EXRcivx5BD_Z88pDRaGcW/view"><BsFillCameraVideoFill /></a> </Button>
            <Button _hover={{ fontSize: '20px',bg:"#e53e3e"}}><a href='https://techomania.vercel.app/'><BsFillEyeFill /></a></Button>
            <Button _hover={{ fontSize: '20px',bg:"#e53e3e"}}><a href='https://github.com/prashantxi786/voiceless-lunchroom-7858'><BsGithub /></a></Button>
          </Box>

        </GridItem>  */}
