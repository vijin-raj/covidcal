import { Box, Stack } from '@mui/material';
import React from 'react'
import { imagefour, imageone, imagethree, imagetwo } from '../../images';

const CardItem = ({ label, value, total, image }) => (
  <div className='cards-bg'>
    <Box className="padding-card-box">
      <h5 className='card-h5'>{label}</h5>
      <div className='image-div'>
      <img src={image} alt='img' className='image-card'/>
      </div>
      <h5 className='card-h5'>
        {value}{total && <span> / {total}</span>}
      </h5>
    </Box>
  </div>
);

const CommonCard = ({ val }) => {
  const data = val?.[0] || {}
  const { noOfCases, active, cured, deaths } = data

  return (
    <Stack direction="row" spacing={4}>
      <CardItem label="Total Cases" value={noOfCases} image={imageone}  />
      <CardItem label="Active Cases" value={active} total={noOfCases} image={imagetwo} />
      <CardItem label="Recovered" value={cured} total={noOfCases} image={imagethree}/>
      <CardItem label="Death" value={deaths} total={noOfCases}  image={imagefour}/>
    </Stack>
  );
};

export default CommonCard;
