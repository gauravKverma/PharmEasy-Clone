import { Box, Grid, Image } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

const Beauty = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = () => {
            const axios = require("axios");
    
            const options = {
                method: 'GET',
                url: 'https://sephora.p.rapidapi.com/products/list',
                params: {categoryId: 'cat150006', pageSize: '20', currentPage: '1', sortBy: 'price:0'},
                headers: {
                  'X-RapidAPI-Key': 'd935b50fe5mshc98928912178808p1694f7jsnfb5b01e16451',
                  'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
                }
              };
            axios.request(options).then(function (response) {
                console.log(response.data.products);
                setData(response.data.products);
            }).catch(function (error) {
                console.error(error);
            });
        }
        getData();
    },[])
  return (
    <div>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
            {data.map((item,i) => (
                <Box key={i} height="400px" width="200px" padding="10px" border="1px solid">
                    <Image src={item.heroImage}/>
                </Box>
            ))}
        </Grid>
    </div>
  )
}

export default Beauty