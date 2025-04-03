import React from "react";
import styles from './footer.module.css';
import { FaGithub, FaGreaterThan, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <section id={styles.footerSection}>
            <div class="container">
                <footer class="py-3 my-4">
                    <div id={styles.footerContact}>
                        <h1 id={styles.footerLeft}>Interested and want to stay in touch?</h1>
                        <h1 id={styles.footerRight}>mxbalogun@gmail.com</h1>
                    </div>
                    

                    <ul class="nav justify-content-center border-bottom pb-3 mb-3 " id={styles.footerIcons}>
                        <li class="nav-item"><a href="#" class="nav-link px-2" style={{color: "#0077B5"}}><FaLinkedin size={50}/></a></li>
                        <li class="nav-item"><a href="#" id={styles.footerIcons} class="nav-link px-2" style={{color: "#24292E"}}><FaGithub size={50}/></a></li>
                    </ul>
                    <p class="text-center" id={styles.footerRights}>© 2025 Michael Balogun. All Rights Reserved.</p>
                </footer>
            </div>
            
        </section>
    )
}

export default Footer;