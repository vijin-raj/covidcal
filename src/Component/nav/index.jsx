import React from 'react'
import { Box,  Grid2, } from '@mui/material'
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import ShowChartSharpIcon from '@mui/icons-material/ShowChartSharp';
import MainCom from '../main';

const SideSection = () => {
    return (
        <>
            <Grid2 container spacing={2}>
                <Grid2 size={2}>
                    <div className='div-nav'>

                        <Box paddingTop={10} className="box-one">
                            <Box>
                                <span className='reporticon-span-1 bg-span-report'>
                                    <ShowChartSharpIcon fontSize="medium" className='color-report-nav' />
                                    <h4 className='nav-h4-padding color-report-nav'>Reports</h4>
                                </span>
                                <span className='reporticon-span-1 '>
                                    <SettingsSharpIcon fontSize="medium" />
                                    <h4 className='nav-h4-padding'>Settings</h4>
                                </span>
                            </Box>
                        </Box>
                    </div>
                </Grid2>
                <Grid2 size={8}>
                    <MainCom />
                </Grid2>
            </Grid2>
        </>
    )
}

export default SideSection