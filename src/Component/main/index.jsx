import { Download } from '@mui/icons-material'
import { Box, Container, Divider, Grid2, MenuItem, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CommonCard from '../card'
import PieChart from '../chart/piechart'
import { useDispatch, useSelector } from 'react-redux'
import { covidCaseList } from '../../redux/service'
import LineChart from '../chart/linechart'
import CovidMap from '../chart/map'
import { data } from '../global'


const MainCom = () => {
    const {listData} = useSelector((state) => {
        return {
           listData: state.cases.covidCaseListRes.data
        }
     })
 

    const [selectedState, setSelectedState] = useState("Kerala");
    const dispatch = useDispatch()
    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedState(selectedValue); 
    };

      const filterdData = listData?.data?.filter((arr) => arr.state === selectedState)

     useEffect(() => {
        dispatch(covidCaseList()).unwrap()
       }, [])

    return (
        <div className='main'>
            <Box className="Box-main-one">
                <h2 className='h2-main'>Reports</h2>
                
            </Box>
            <Divider sx={{ mb: 3, mt: 3, color: "#ECECEC" }}></Divider>

            <Box className="select-field-one">
            <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={selectedState} 
                    onChange={handleChange} 
                    displayEmpty
                    renderValue={selectedState !== "" ? undefined : () => "Select State"} 
                >
                    {data?.map((item) => (
                        <MenuItem key={item.value} value={item.state}>
                            {item.state} 
                        </MenuItem>
                    ))}
                </Select>
            </Box>

            <Box mt={3}>
                <CommonCard val={filterdData}/>
            </Box>

  
            <Grid2 container mt={4}>
                <Grid2 size={12}>
                    <PieChart val={filterdData}/>
                </Grid2>
                <Grid2 size={12} sx={{display: "flex"}}>
                    <LineChart val={filterdData} valnew={listData?.data} selectedState={selectedState}/>
                </Grid2>
            </Grid2>
        
       
                <CovidMap  data={filterdData}/>
               
          
        </div>
    )
}

export default MainCom