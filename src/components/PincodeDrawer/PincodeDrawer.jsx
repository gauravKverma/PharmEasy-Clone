import React, {useRef} from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Box
  } from '@chakra-ui/react'
  import styles from "./pdrawer.module.css"
  import {FcHome,FcShipped,FcTodoList} from "react-icons/fc"

  const data=[
    {
      icon:<FcHome style={{width:"40px", height:"40px"}}/>,
      para:"Login to View Addresses",
      color:"#37857e",
      bg:"white",
      weight:"700",
      border:"#f5f5f5"
    },
    {
      icon:<FcShipped style={{width:"40px", height:"40px"}}/>,
      para:"Serving more than 1,000 towns and cities in India.",
      color:"black",
      bg:"#eff4fe",
      border:"#eff4fe"
    },
    {
      icon:<FcTodoList style={{width:"40px", height:"40px"}}/>,
      para:"Over 30,00,000 orders safely delivered",
      color:"black",
      bg:"#cef8fd",
      border:"#cef8fd"
    },
  ]

const PincodeDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  return (
    <div>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen} variant="ghost" bg="white"
      height="50px" borderTopEndRadius="none" borderBottomEndRadius="none" _hover="none">
        Select Pincode
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
          <DrawerCloseButton marginRight="436px" style={{backgroundColor:"white",padding:"30px",
        border:"none", color:"#767676",marginTop:"20px",borderRadius:"0px"}} />
          <DrawerHeader className={styles.heading}>Choose your <br/> Location</DrawerHeader>

          <DrawerBody>
            <InputGroup>
              <Input height="50px" borderColor="#767676" placeholder='Enter PIN Code' borderRadius="8px"
              _hover="none"/>
              <InputRightElement height="50px" width="140px">
                <Button bg="#37857e" size="md" height="50px" width="140px" borderLeftRadius="none"
                color="white" fontSize="14px" fontWeight="800">
                  Check
                </Button>
              </InputRightElement>
            </InputGroup>
            <Stack gap="20px" style={{marginTop:"20px"}}>
              {data.map((el,i) => (
                <Box key={i} border="1px solid" borderColor={el.border} borderRadius="10px" style={{padding:"30px"}} bg={el.bg}>
                  <Stack direction="horizontal" gap="30px" alignItems="center">
                    <Box>
                      {el.icon}
                    </Box>
                    <Box color={el.color} fontWeight={el.weight} fontSize="14px">
                      {el.para}
                    </Box>
                  </Stack>
                </Box>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default PincodeDrawer