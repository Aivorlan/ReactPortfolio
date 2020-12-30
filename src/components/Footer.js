import React from "react";
import "../styles/Footer.css"

function Footer() {
    return (
        <div className="footer">
            <a href="#"><i class="fa fa-chevron-circle-up fa-4x"></i></a>
            <footer className="footer mt-auto">
                    <div className="justify-content-center">
                        <div className="social">
                            <a href="https://github.com/Aivorlan">
                            <i class="fa fa-github fa-2x"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/quinton-bryant-485a121a7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B55Z8xaX7TRWukZVIgYaUrw%3D%3D"
                            ><i class="fa fa-linkedin fa-2x"></i>
                            </a>
                        </div>
                       
                    </div>
            </footer>
        </div>
    )
};

export default Footer;