import React, { Component } from "react";
import { Col, Container, Image, Jumbotron, Row } from "react-bootstrap";
import styled from "styled-components";


const Styles = styled.div`
    .jumbo {
        background-color: #F7F7FF;
    }


    .photo {
        height: 171px;
        width: 180px;
    }

`;

class home extends Component{
    state = {};
    render() {
        return (
            <>
            <Styles>
            <Jumbotron className="jumbo" fluid>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col>
                            <Image className="photo" src="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg" roundedCircle/>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            </Styles>
            </>
        )
    }
}

export default home;