import React, { useState } from 'react';
import styles from './header.module.css';

function Header(args) {
  
  return (
    <>
        <section id={styles.header}>
            <div id={styles.headerContainer}>

                <ul id={styles.headerList}>
                    <li> <a href="" id={styles.headerLinks}>Home</a> </li>
                    <li> <a href="" id={styles.headerLinks}>Experience</a> </li>
                    <li> <a href="" id={styles.headerLinks}>Projects</a> </li>
                    <li> <a href="" id={styles.headerLinks}>Tech Stack</a> </li>
                </ul>
            </div>
           
            <div id={styles.introduction}>
                <h1>Michael Balogun.</h1>
                <h3>Aspiring Full-Stack Engineer</h3>
                <p>
                    Undergraduate Software Engineer at <span style={{ color: "#A41E35" }}>Temple University </span>
                    studying Information Science and Technology, passionate about bridging 
                    the gap between people and technology through thoughtful, 
                    user-centered solutions.
                </p>
                <button>Contact Me</button>
                <button>My Work &#8594;</button>
            </div>
        </section>
    </>
  );
}

export default Header;