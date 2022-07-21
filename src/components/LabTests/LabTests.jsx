import { Box, Heading, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import fullbody from "../../assets/fullbody.png"
import ppbs from "../../assets/ppbs.png"
import psp from "../../assets/psp.png"
import rbs from "../../assets/rbs.png"
import styles from "./labtests.module.css"

const data=[
    {
        off:"60% OFF",
        offBG:"#ef7779",
        offColor:"white",
        heading:"Comprehensive Full Body Check up with Vitamin D & B12",
        desc:"Measures Vitamin D & B12 levels and other essential parameters",
        oldPrice:"₹4199",
        newPrice:"₹1499",
        bg:"#f1fafe",
        image:fullbody
    },
    {
        off:"60% OFF",
        offBG:"#ef7779",
        offColor:"white",
        heading:"Post Prandial Blood Sugar (PPBS)",
        desc:"Measures your blood sugar levels after last meal",
        oldPrice:"₹500",
        newPrice:"₹199",
        bg:"#fdf7e8",
        image:rbs
    },
    {
        off:"71% OFF",
        offBG:"#ef7779",
        offColor:"white",
        heading:"Random Blood Sugar (RBS)",
        desc:"Testing of the blood sugar level at any time of the day",
        oldPrice:"₹350",
        newPrice:"₹99",
        bg:"#f1fafe",
        image:ppbs
    },
    {
        off:"PSP-D",
        offBG:"",
        offColor:"black",
        heading:"",
        desc:"To assess the renal function for early detection of any kidney disease",
        oldPrice:"",
        newPrice:"₹499",
        bg:"#fdf7e8",
        image:psp
    },
]

const LabTests = () => {
  return (
    <div>
        <Heading textAlign="left" width="95%" margin="auto" marginTop="50px"
        fontSize="30px">Frequently Booked Lab Tests</Heading>
        <Stack direction="horizontal" width="95%" margin="auto" justify="space-between" marginTop="20px">
            {data.map((el,i) => (
                <Box className={styles.testBox} key={i} width="322px" height="294px" bg={el.bg} 
                padding="15px" borderRadius="7px" position="relative">
                    <Stack textAlign="left" gap="10px">
                        <Heading fontSize="15px" bg={el.offBG} padding="5px"
                        color={el.offColor} borderRadius="5px" width="80px">{el.off}</Heading>
                        <Heading fontSize="18px">
                            {el.heading}
                        </Heading>
                        <p style={{color:"#6d757c", fontSize:"14px"}}>{el.desc}</p>
                        <Heading fontSize="18px" color="#6d757c" textDecoration="line-through"
                        position="absolute" bottom="60px">
                            {el.oldPrice}
                        </Heading>
                        <Stack direction="horizontal" justify="space-between">
                            <Heading fontSize="22px" position="absolute" bottom="20px">
                                {el.newPrice}
                            </Heading>
                            <Image width="96px" height="96px" src={el.image} marginLeft="211px" 
                            position="absolute" bottom="0px"/>
                        </Stack>
                    </Stack>
                </Box>
            ))}
        </Stack>
    </div>
  )
}

export default LabTests