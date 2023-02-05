import { Box,Flex,Text,Image ,useColorMode,IconButton,Heading,FormControl,Input,FormLabel, Link,Textarea,Button} from "@chakra-ui/react"
import React from 'react'
import styles from '../Css-modules/contact.module.css';
import sty from '../Css-modules/footer.module.css';
import { BsGithub, BsLinkedin, BsPerson, BsWhatsapp,BsInstagram  } from 'react-icons/bs';
import { MdEmail} from 'react-icons/md';

const Contact = () => {

  const { colorMode} = useColorMode()

  return (
    <Flex data-aos="fade-up-right" data-aos-duration="3000" id="contact" boxShadow= "0px 1px 5px 1px gray" flexDirection="column"mt={"10px"} gap={{base:"10",lg:""}}>
      <Heading mt="10">Let's get in touch...</Heading>
      <Flex justifyContent={"center"} align="center" flexDirection={{base:"column",lg:"row"}} gap="10" height="" >
            {/* Left box */}
            <Flex gap="5" flexDirection={"column"} justifyContent="center">

                    {/* Whatsapp */}
                    <Flex align="center">
                    <Link href="https://wa.me/+918700644828?text=I%27m%20interested%20in%20your%20profile">
                    <IconButton aria-label="email"
                        variant="ghost"size="lg"
                          fontSize="3xl"
                          icon={<BsWhatsapp/>}
                          
                          _hover={{
                            bg: 'blue.500',
                            color:"white"
                          }}
                          
                          isRound
                        />
                        </Link>
                        <Text>+918700644828</Text>
                    </Flex>
                      {/* Mail */}
                      <Flex align="center" >
                      <Link href="mailto:someone@example.com">
                      <IconButton aria-label="email"
                        variant="ghost"size="lg"
                          fontSize="3xl"
                          icon={<MdEmail />}
                          _hover={{
                            bg: 'blue.500',
                            color:"white"
                          }}
                          
                          isRound
                        /></Link>
                        <Link href="mailto:someone@example.com">prashantxi786@gmail.com</Link>
                      </Flex>

                      {/* github */}
                      <Flex align="center">
                      <Link href="https://github.com/prashantxi786">
                      <IconButton aria-label="email"
                        variant="ghost"size="lg"
                          fontSize="3xl"
                          icon={<BsGithub />}
                          _hover={{
                            bg: 'blue.500',
                            color:"white"
                          }}
                          
                          isRound
                        />
                      </Link>
                        <Link href="https://github.com/prashantxi786">prashantxi786</Link>
                      </Flex>

                      {/* Linkedin */}
                      <Flex align="center">
                      <Link href="https://www.linkedin.com/in/prashant-s-428990148/">
                      <IconButton aria-label="email"
                        variant="ghost"size="lg"
                          fontSize="3xl"
                          icon={<BsLinkedin />}
                          _hover={{
                            bg: 'blue.500',
                            color:"white"
                          }}
                          
                          isRound
                        /></Link>
                        <Link href="https://www.linkedin.com/in/prashant-s-428990148/">linkedin/prashantxi786</Link>
                      </Flex>

                      {/* Instagram */}
                      <Flex align="center">
                      <Link href="https://www.instagram.com/Prashant_blessed11/">
                      <IconButton aria-label="email"
                        variant="ghost"size="lg"
                          fontSize="3xl"
                          icon={<BsInstagram />}
                          _hover={{
                            bg: 'blue.500',
                            color:"white"
                          }}
                          
                          isRound
                        />
                        </Link>
                        <Link href="https://www.instagram.com/Prashant_blessed11/">Prashant_blessed11</Link>
                      </Flex>
                      
            </Flex>
            {/* RightBox */}
            <Flex align="center" width="" >
                  <FormControl isRequired>
                    <FormLabel>Email I'd</FormLabel>
                    <Input placeholder="Email"/>
                    <FormLabel>First name</FormLabel>
                    <Input placeholder='First name' />
                    <FormLabel>Message</FormLabel>
                    <Textarea type="textArea" placeholder='Enter your Message'/>
                    <Button style={colorMode==="light"?{color:"black"}:{color:"white"}} mt="5" className={styles.btn} type="submit">Send</Button>
                  </FormControl>
            </Flex> 
      </Flex>
      {/* Footer */}
      <Flex align={"center"} fontSize={{base:"12",lg:"17px"}} justify="center" className={colorMode==="light"? sty.lfooter:sty.rfooter} height={"50"}>
        Made with ❤️ by Prashant Singh © All rights reserved. 2023 
      </Flex>
      
    </Flex>
  )
}

export default Contact