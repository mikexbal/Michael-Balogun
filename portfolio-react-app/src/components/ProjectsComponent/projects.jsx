import React from "react";
import styles from './projects.module.css';


const Projects = () => {
    return (
        <>
        <section id={styles.projectsSection}>

            <div id={styles.projectCard}>
                <h1 id ={styles.projectTitle}>Car Rental Database</h1>

                <p id={styles.projectDescription}>
                    Developed a car rental application in C# using the .NET Framework 
                    and Microsoft Access, implementing the MVC design pattern. 
                    The system supports adding, renting, returning, and searching cars, 
                    with user-friendly Windows Forms to streamline employee workflow. 
                    SQL queries were used for seamless integration with the Access database, 
                    ensuring efficient data management and transaction integrity.
                </p>


                <ul id={styles.projectTechnologies}>
                    <li id={styles.technologyItem}>
                        C#
                    </li>
                    
                    <li id={styles.technologyItem}>
                        .NET Framework
                    </li>
                    <li id={styles.technologyItem}>
                        Microsoft Access DB
                    </li>

                </ul>

            </div>

            <div id={styles.projectCard}>
                <h1 id ={styles.projectTitle}>Project 1</h1>

                <p id={styles.projectDescription}>
                    Developed a car rental application in C# using the .NET Framework 
                    and Microsoft Access, implementing the MVC design pattern. 
                    The system supports adding, renting, returning, and searching cars, 
                    with user-friendly Windows Forms to streamline employee workflow. 
                    SQL queries were used for seamless integration with the Access database, 
                    ensuring efficient data management and transaction integrity.
                </p>


                <ul id={styles.projectTechnologies}>
                    <li id={styles.technologyItem}>
                        C#
                    </li>
                    
                    <li id={styles.technologyItem}>
                        .NET Framework
                    </li>
                    <li id={styles.technologyItem}>
                        Microsoft Access DB
                    </li>

                </ul>

            </div>

            
            
            
            

        </section>

        </>
    )
}

export default Projects;