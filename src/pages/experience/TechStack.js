import React from 'react';
import { CgCPlusPlus } from 'react-icons/cg';
import Grid from '@mui/material/Grid';

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from 'react-icons/di';
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from 'react-icons/si';
import styles from './TechStack.module.css';


const Techstack = () => {
    return (
      <Grid container justifyContent="center" sx={{ paddingBottom: '50px' }}>
        <Grid item xs={3} md={2} className={styles.techIcons}><CgCPlusPlus /></Grid>
        <Grid item xs={3} md={2} className={styles.techIcons}><DiJavascript1 /></Grid>
        <Grid item xs={3} md={2} className={styles.techIcons}><DiNodejs /></Grid>
        <Grid item xs={3} md={2} className={styles.techIcons}><DiReact /></Grid>
        <Grid item xs={3} md={2} className={styles.techIcons}><SiSolidity /></Grid>
        <Grid item xs={3} md={2} className={styles.techIcons}><DiMongodb /></Grid>
        <Grid item xs={3} md={2} className={styles.techIcons}><SiNextdotjs /></Grid>
        <Grid item xs={3} md={2} className={styles.techIcons}><DiGit /></Grid>
        <Grid item xs={3} md={2} className={styles.techIcons}><SiRedis /></Grid>
        <Grid item xs={3} md={2} className={styles.techIcons}><SiPostgresql /></Grid>
        <Grid item xs={3} md={2} className={styles.techIcons}><DiPython /></Grid>
        <Grid item xs={3} md={2} className={styles.techIcons}><DiJava /></Grid>
        <Grid item xs={3} md={2} className={styles.techIcons}><SiFirebase /></Grid>
      </Grid>
    );
  };
  

export default Techstack;
