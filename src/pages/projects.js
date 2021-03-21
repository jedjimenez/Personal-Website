import React from 'react';
import styled from "styled-components";
import Button from 'react-bootstrap/Button';

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

    @media only screen and (max-width: 768px) {
     margin: 2.2rem 2rem;
     padding-top: 400px;
     padding-right: 40px;
     padding-left: 40px;
     padding-bottom: 50px;

     h1{
        font-size: 1.45rem; margin-top: 0.5rem; margin-bottom: 0.5rem;
    }


    }

    h1{
        text-align: center;
        margin-top: -300px;
        margin-bottom: 100px;
        
    }
`;

const StyledButton = styled(Button)`
    background: #4692DF;
    color: #fff;
    width: 200px ;
    margin: 1.5em;
    padding: 0.25em 1em;
    border: none;
    border-radius: 5px;    
    margin-left: 500px;


    @media only screen and (max-width: 768px) {
        padding-right: 40px;
        padding-left: 40px;
        margin-left: 40px;
        
        
   
       }
`;

const projects = () => {

    function hover(e) {
        e.target.style.background = '#BDD5EA';
      }

      function reset(e) {
        e.target.style.background = '#4692DF';
      }

    return (
        <Section>   
            <Container>
            <h1>Projects</h1>
            <StyledButton size="lg" onMouseOver={hover} onMouseOut={reset} href="https://github.com/jedjimenez/jedjimenez.github.io" target="_blank">Personal Website</StyledButton>
            <StyledButton size="lg" onMouseOver={hover} onMouseOut={reset} href="https://github.com/jedjimenez/cougar-reporter" target="_blank">Cougar Reporter</StyledButton>
            <StyledButton size="lg" onMouseOver={hover} onMouseOut={reset} href="https://github.com/jedjimenez/dog-project" target="_blank">Dog Project</StyledButton>
            </Container>
        </Section>
    )
}

export default projects
