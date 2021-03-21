import React, {Component} from 'react';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Car from '../images/car.jpg'



const Section = styled.section`
  height: 94vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #BDD5EA;

  @media only screen and (max-width: 768px){
    height: 160vh;
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

    color: #131313;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-top: 100px;
  
  h1 {
    font-family: Karla;
    margin-top: -400px; //use margin to move text around
    margin-left: -250px;
    font-size: 3rem;
  }

  p {
    font-family: Karla;
    color: #fff;
    margin-left: -250px;
    font-size: 1.25em;
  }

  img {
    float: left;
    max-width: 400px;
    max-height: 800px;
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 60px;
    right: 450px;
    
  }
   
    @media only screen and (max-width: 768px) {
     margin: 2.2rem 2rem;
     padding-right: -1px;
     padding-left: 260px;
     padding-top: 0px;
     padding-bottom: 400px;
     


     h1 {
      font-size: 1.45rem; margin-top: 0.5rem; margin-bottom: 0.5rem;
     }
     
     p {
      font-size: 1rem; text-align: left;
     }

     img {
       max-width: 200px;
       max-height: 400px;
       bottom: -500px;
       right: 110px;
     }

     .iframecontainer {width: 100%; float: none;}
    }
`;


class about extends Component{
    state = {};
    render() {
        return (
          <Section>
            <Container>
                <Fade left>
                  <h1>about me</h1>
                </Fade>
                  <Zoom cascade>
                    <div>
                      <p>hello, world! my name is jed. i'm an aspiring software developer based in southern california. i graduated <br/>from california state university,san marcos in may 2020.</p>
                      <p>my passion for software development started when i had an opportunity to take a programming class <br/>back in high school. my first programming languages were C and Java. as a gamer and someone 
                      who is <br/>always on the computer, it fueled my interest in computer science. i have also built my own pc which i'm <br/>proud of and i'm always fascinated how each computer components communicate with each other.</p>
                      <p>my other hobby besides playing video games is working on my car. i have a 10th generation <br/>Honda Civic Si that is on full bolt-on. i learned to be mechanically inclined by modifying my car. 
                      <br/>i get to save a lot of money by fixing my own car, but it's still an expensive hobby nonetheless. </p>
                      <p>if you are into gaming and or cars, hit me up! ｡◕ ‿ ◕｡</p>
                      <Fade top>
                        <img src={Car} alt='vroom'/>
                      </Fade>
                    </div> 
                  </Zoom>
            </Container>
            </Section>
        )
    }
}


export default about;
