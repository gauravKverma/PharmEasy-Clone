import { Box, Grid, Heading, Image, Select, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import styles from "./beauty.module.css"

const Beauty = () => {
    const [data, setData] = useState([]);
    const [sort, setSort] = useState("");
    const [loading, setLoading] = useState(false);


    const handleSorting = (e) => {
        setSort(e.target.value);
    }

    useEffect(() => {
        const getData = () => {
            setLoading(true);
            const axios = require("axios");
    
            const options = {
                method: 'GET',
                url: 'https://sephora.p.rapidapi.com/products/list',
                params: {categoryId: 'cat150006', pageSize: '20', currentPage: '1', sortBy: `${sort}`},
                headers: {
                  'X-RapidAPI-Key': 'd935b50fe5mshc98928912178808p1694f7jsnfb5b01e16451',
                  'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
                }
              };
            axios.request(options).then(function (response) {
                // console.log(response.data.products);
                setData(response.data.products);
                setLoading(false);
            }).catch(function (error) {
                console.error(error);
            });
        }
        getData();
    },[sort])
  return (
    <div className={styles.container}>
        <Stack direction="horizontal" gap="30px">
            <Stack width="25%" textAlign="left">
                <Heading fontSize="26px" fontWeight="600" marginBottom="40px">Filter</Heading>
            </Stack>
            <Stack width="75%">
                <Stack direction="horizontal" marginBottom="40px" 
                justify="space-between" align="center">
                    <Heading fontSize="26px" fontWeight="600">Beauty</Heading>
                    <Stack direction="horizontal" gap="40px" align="center">
                        <Text fontSize="14px" width="60px">Sort By:</Text>
                        <Select width="248px" height="39px" onChange={handleSorting}>
                            <option value="">Popularity</option>
                            <option value="price:0">Price Low to High</option>
                            <option value="price:1">Price High to Low</option>
                        </Select>
                    </Stack>
                </Stack>
                {loading ? 
                <Box width="100%" style={{display:"flex", justifyContent:"center"}}>
                    <Image width="150px" src="https://media0.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif?cid=ecf05e47536zmw7vnywwf4ll75fj0otdkp05q4dzjop9597f&rid=giphy.gif&ct=g"/>
                </Box>
                :
                <Grid templateColumns='repeat(3, 1fr)' gap={4}>
                    {data.map((item,i) => (
                        <Box key={i} height="340px" width="230px" padding="10px" border="1px solid #e1e1e1"
                        borderRadius="7px" position="relative">
                            <Image src={item.heroImage} height="200px"/>
                            <Heading marginTop="20px" fontSize="16px" fontWeight="700">
                                {item.displayName}
                            </Heading>
                            <Heading fontSize="17px" fontWeight="600"
                            position="absolute" bottom="20px">
                                {item.currentSku.salePrice==="" ? item.currentSku.listPrice
                                : item.currentSku.salePrice }
                            </Heading>
                        </Box>
                    ))}
                </Grid>
                }
            </Stack>
        </Stack>
    </div>
  )
}

export default Beauty