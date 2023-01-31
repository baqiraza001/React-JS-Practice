import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
} from '@mui/material';
import { Pagination } from '@mui/material';

const StyledCard = styled(Card)({
  width: '100%',
});

const StyledCardMedia = styled(CardMedia)({
  height: '250px',
  borderRadius: '0'
});

const StyledCardContent = styled(CardContent)({
  padding: '16px',
});

const StyledTypography = styled(Typography)({
  fontWeight: 'bold',
});

function DynamicList() {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    const res = await fetch(
      `https://api.unsplash.com/photos?page=${currentPage}&client_id=HcufiQhHl1ZP3qBPX_J2pfjETfXYqUU3ZCy-tZhuA2o`
    );
    const json = await res.json();
    setData(json);
    setTotalPages(parseInt(res.headers.get('x-total-count')));
    
    let timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  
    return () => clearTimeout(timer)
  };

  const handlePaginationChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box  sx={{margin: '10px'}}>
      {isLoading ? (
        <Box display="flex" justifyContent="center" mt={5}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={2}>
          {data.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
              <StyledCard>
                <StyledCardMedia
                  image={item.urls.thumb}
                  title={item.user.name}
                />
                <StyledCardContent>
                  <StyledTypography variant="h5">
                    {item.user.name}
                  </StyledTypography>
                </StyledCardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      )}
      {
        !isLoading && <Box textAlign="center" mt={2}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePaginationChange}
          />
        </Box>
      }
    </Box>
  );
}

export default DynamicList;
