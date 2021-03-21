import React, { Component } from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Typical from 'react-typical';
import Grad from '../images/grad.jpg';

const Section = styled.section`
  height: 94vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F7F7FF;
`;

const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
    @media screen and (max-width: 768px) {
     padding-right: 30px;
     padding-left: 30px;
    }

  
  .intro {
    font-family: Karla; 
    text-align: center;
    }

    p {
        font-size: 20px;
        
    }

    .txt {
        color: #4692DF;
    }

    .pic {
        display: block;
        margin-left: auto;
        margin-right: auto;
        height: 55vmin;
        border-radius: 10%;
        margin-bottom: 40px;
        border: 0vh solid #F7F7FF;
    }
`;



class home extends Component{
    state = {};
    render() {
        return (
            <>
            <Section>
            <Container>  
            <Zoom >
            <div>
                <img src={Grad} alt='me' className='pic'/>
            </div>
            </Zoom>  
            <div className='intro'>
                <Fade big>
                    <h1><Typical loop={Infinity}
                    wrapper='b'
                    steps={
                        ['hello, i\'m jed marc jimenez based in southern california.', 1000]
                    }/>
                    </h1>
                    <p> 
                        and i {' '}
                        <Typical
                        className='txt'
                        loop={Infinity}
                        wrapper='b'
                        steps={
                            ['like to watch anime 💻', 1000, 'like to play video games 🎮', 1000, 'like cars 🚗', 1000, 'like to eat 🍣', 1000]
                        }
                        />
                    </p>
                </Fade>
            </div>
            </Container>
            </Section>
            </>
        )
    }
}




export default home;

