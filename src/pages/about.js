import React, {Component} from 'react';
import {motion} from 'framer-motion'


const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

class about extends Component{
    state = {};
    render() {
        return (
            <motion.p
            variants={fadeLeft}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1 }}
          >
            Journey to the unknown
          </motion.p>

          
        )
    }
}


export default about;
