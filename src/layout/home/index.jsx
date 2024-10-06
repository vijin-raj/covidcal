import React from 'react'
import {Container, useTheme } from '@mui/material'
import SideSection from '../../Component/nav'


const Dashboard = () => {

    
    const theme = useTheme()


    return (
        <>
            <Container maxWidth={theme.breakpoints.values.xl} style={{ padding: "0px", backgroundColor: "#F9F9F9" }}>
                <SideSection/>
            </Container>
        </>
    )
}

export default Dashboard