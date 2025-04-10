import React, { useState } from "react";
import styles from './experience.module.css';
import { Badge, Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const Experience = () => {
    return (
        <>
            <section id={styles.experience}>
                <div id={styles.experienceCard}>
                    <div id={styles.experienceHeader}>
                        <h1>Sightly</h1>
                        <p id={styles.experienceDate}>Jul 2023 - Aug 2023</p>
                    </div>

                    <h3 id={styles.experienceRole}>Software Engineering Shadow Intern</h3>
                    <h5 id={styles.experienceResponsibilities}>Responsibilities: </h5>
                   
                    <ul>
                        <li id={styles.listItem}>
                            Collaborated with software engineers to gain exposure 
                            to unit testing with the PyTest framework,  contributing to 
                            the creation and deployment of comprehensive unit tests, 
                            ensuring reliability and functionality.
                        </li>
                        
                        <li id={styles.listItem}>
                            Gained practical experience with Git and CLI tools to enhance 
                            productivity and workflow efficiency, while also learning the importance 
                            of version control and collaboration.
                        </li>
                        
                        <li id={styles.listItem}>
                            Participated in daily stand-up meetings, where I acquired hand-on exposure 
                            to the Kanban methodology and agile project management, ultimately improving
                            my communication skills.
                        </li>
                    </ul>
                    
                </div>

                <div id={styles.experienceCard}>
                    <div id={styles.experienceHeader}>
                        <h1>Company Name</h1>
                        <p id={styles.experienceDate}>Jan 2025 - Jan 2025</p>
                    </div>

                    <h3 id={styles.experienceRole}>Role Position</h3>
                    <h5 id={styles.experienceResponsibilities}>Responsibilities: </h5>
                   
                    <ul>
                        <li id={styles.listItem}> 
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. 
                            In scelerisque odio velit, 
                            at ultrices est pharetra a.
                        </li>
                        
                        <li id={styles.listItem}>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. 
                            In scelerisque odio velit, 
                            at ultrices est pharetra a.
                        </li>
                        
                        <li id={styles.listItem}>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. 
                            In scelerisque odio velit, 
                            at ultrices est pharetra a.
                        </li>
                    </ul>
                    
                </div>

                

    

        
                
                
            </section>
        </>
    );
};

export default Experience;
