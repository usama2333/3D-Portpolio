import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn , textVariant} from '../utils/motion';

const About = () => {
  return (
   <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>
      Introduction
    </p>
    <h1 className={styles.sectionHeadText}>
      Overview
    </h1>

    </motion.div>
   </>
  )
}

export default About
