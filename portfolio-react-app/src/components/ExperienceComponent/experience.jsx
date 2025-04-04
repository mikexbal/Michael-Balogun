import React, { useState } from "react";
import styles from './experience.module.css';
import { Badge, Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const Experience = () => {
    const [popoverOpen1, setPopoverOpen1] = useState(false);
    const [popoverOpen2, setPopoverOpen2] = useState(false);


    const togglePopover1 = () => {
        setPopoverOpen1(!popoverOpen1);
    };

    const togglePopover2 = () => {
        setPopoverOpen2(!popoverOpen2);
    };

    return (
        <>
            <section id={styles.experienceContainer}>
                <div id={styles.leftContainer}>
                    <div id={styles.experienceCard}>
                        <div id={styles.experienceHeader}>
                            <h1>Sightly</h1>

                            <Badge id={styles.experienceBadge} color="black">
                                Internship
                            </Badge>
                        </div>
                        <div id={styles.experienceBody}>
                            <p>Software Engineering Shadow Intern</p>
                            <p>Jul 2023 - Aug 2023</p>
                        </div>
                        <Button id="Popover1" type="button" className={styles.experienceButton} onClick={togglePopover1}>
                                Details
                            </Button>
                            <Popover
                                flip
                                placement="right"
                                target="Popover1"
                                isOpen={popoverOpen1}
                                toggle={togglePopover1}
                            >
                                <PopoverHeader>
                                    Responsibilities
                                </PopoverHeader>
                                <PopoverBody>
                                    <ul>
                                        <li>Collaborated with software engineers to gain exposure to unit testing with the PyTest framework,  contributing to the creation and deployment of comprehensive unit tests, ensuring reliability and functionality.</li>
                                        <li>Gained practical experience with Git and CLI tools to enhance productivity and workflow efficiency, while also learning the importance of version control and collaboration.</li>
                                        <li>Participated in daily stand-up meetings, where I acquired hand-on exposure to the Kanban methodology and agile project management, ultimately improving my communication skills.</li>
                                    </ul>
                                </PopoverBody>
                            </Popover>
                        
                    </div>


                </div>

                <div id={styles.rigthContainer}>
                    <div id={styles.experienceCard}>
                        <div id={styles.experienceHeader}>
                            <h1>Temple University</h1>
                            <h3>National Society of Black Engineers</h3>
                            <Badge color="black" pill>
                                Internship
                            </Badge>
                        </div>
                        <div id={styles.experienceBody}>
                            <h1>Position</h1>
                            <h1>Date</h1>
                            <Button id="Popover2" type="button" onClick={togglePopover2}>
                                Details
                            </Button>
                            <Popover
                                flip
                                placement="left"
                                target="Popover2"
                                isOpen={popoverOpen2}
                                toggle={togglePopover2}
                            >
                                <PopoverHeader>
                                    Responsibilities
                                </PopoverHeader>
                                <PopoverBody>
                                    <ul>
                                        <li>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</li>
                                        <li>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</li>
                                        <li>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</li>
                                    </ul>
                                    
                                </PopoverBody>
                            </Popover>
                        </div>
                    </div>


                </div>
                
            </section>
        </>
    );
};

export default Experience;
