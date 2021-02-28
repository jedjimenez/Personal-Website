import React, { Component } from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import styled from "styled-components";
import {motion} from 'framer-motion';
import { Frame, Stack, Page } from "framer";

const Styles = styled.div`
    .jumbo {
        background-color: #F7F7FF;
    }


    .photo {
        height: 171px;
        width: 180px;
        color: black;
    }

`;

const Image = styled(motion.img)`
    max-width: 250px;
    max-height: 250px;
    
`;

const fadeLeft = {
    hidden: { opacity: 0, x: -400, y: 40},
    visible: { opacity: 1, x: -300, y: 40 }
    
  };



class home extends Component{
    state = {};
    render() {
        return (
            <>
            <Styles>
            <Frame background="#F7F7FF" width={1920} height={500}>
            <Container>
            <Row><Col><br/></Col></Row>
            <Row><Col><br/></Col></Row>
            <Row>
                <motion.h1
                    variants={fadeLeft} 
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 1 }}
                    >Welcome to my website! 
                </motion.h1>
            </Row>
                </Container>
            </Frame>
            </Styles>
            </>
        )
    }
}




export default home;

