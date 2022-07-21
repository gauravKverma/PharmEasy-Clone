import React, {useRef} from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Image,
    Stack
  } from '@chakra-ui/react'

const Login = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  return (
    <div>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen} variant="ghost" color="white"
      _hover="none" fontWeight="400" width="110px">
        Login / SignUp
      </Button>
        <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton marginRight="436px" style={{backgroundColor:"#398880",padding:"30px",
        border:"none", color:"white",marginTop:"20px",borderRadius:"0px"}}/>
            <Image src="https://i.postimg.cc/x1dpN9GZ/Screenshot-2022-07-21-at-7-20-12-PM.png"/>
          <DrawerHeader fontSize="16px" fontWeight="700">Quick Login / Register</DrawerHeader>

          <DrawerBody>
            <Stack gap="10px">
                <Input borderRadius="8px" height="50px" borderColor="#767676" 
                _hover="none" placeholder='Enter your phone number'/>
                <Button height="50px" bg="#37857e" color="white" fontWeight="700"
                fontSize="15px">
                    Send OTP
                </Button>
                <p style={{fontSize:"13px"}}>By clicking continue, you agree with our 
                <span style={{color:"#37857e", fontWeight:"600"}}> Privacy Policy</span></p>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default Login