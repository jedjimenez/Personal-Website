import React from 'react';
import styled from "styled-components";
import ig from '../images/ig.png';
import linkedin from '../images/linkedin.png';
import mail from '../images/mail.png';
import Button from 'react-bootstrap/Button';
import resume from '../JedJimenez_Resume.pdf';


const Section = styled.section`
  height: 94vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #BDD5EA;

  }
`;

const StyledButton = styled(Button)`
    background: Transparent;
    color: #fff;
    width: 200px ;
    margin: 1.5em;
    padding: 0.25em 1em;
    border: none;
    border-radius: 5px;    
    margin-left: 500px;
    margin-bottom: 80px;


    @media only screen and (max-width: 768px) {
        padding-right: 40px;
        padding-left: 40px;
        margin-left: 120px;
        
   
       }
`;

const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media only screen and (max-width: 768px) {
     padding-right: 40px;
     padding-left: 40px;


    }

    h1{
        text-align: center;
        margin-top: -50px;
        margin-bottom: 100px;
        
        
    }

    .img1 {
        height: 100px;
        width: 100px;
        margin-left: 550px;
        margin-bottom: 80px;
        
        @media only screen and (max-width: 768px) {
            padding-right: 40px;
            padding-left: 40px;
            margin-left: 105px;
            height: auto;
            width: 200px;
       
        }
    }

`;

const contact = () => {

    function hover(e) {
        e.target.style.background = '#4692DF';
      }

      function reset(e) {
        e.target.style.background = '#BDD5EA';
      }

    return (
        <Section>
            <Container>
            <StyledButton size="lg" onMouseOver={hover} onMouseOut={reset} href={resume} target="_blank">Résumé</StyledButton>
                <a href="https://instagram.com/jolliuwubee" rel="noopener noreferrer" target="_blank">
                    <img className='img1' src={ig} alt='car'/>
                </a>
                <a href="https://www.linkedin.com/in/jmsj/" rel="noopener noreferrer" target="_blank">
                    <img className='img1' src={linkedin} alt='social media'/>
                </a>
                <a href="mailto:jedmj97@gmail.com" rel="noopener noreferrer" target="_blank">
                    <img className='img1' src={mail} alt='mail'/>
                </a>
            </Container>
        </Section>
    )
}

export default contact;
