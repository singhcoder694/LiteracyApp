import React from 'react'
import styled from 'styled-components';
import TotalMarks from '../Components/dashboard/TotalMarks';
import RocketSpline from '../Components/dashboard/RocketSpline';

export default function Dashboard() {
  return (
    <Container>
        <TotalMarks />
        <RocketSpline />
    </Container>
  )
}

const Container = styled.div`
    

`;
