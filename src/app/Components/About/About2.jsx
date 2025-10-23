"use client"
import { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";
import Image from "next/image";

const About2 = () => {

        const [iframeSrc, setIframeSrc] = useState('about:blank');
        const [toggle, setToggle] = useState(false);
      
        const handelClick = () => {
          setIframeSrc("https://www.youtube.com/watch?v=GcDXopVBN-k");
          setToggle(!toggle);
        };
        const handelClose = () => {
          setIframeSrc('about:blank');
          setToggle(!toggle);
        };

    return (
<section className="about-us-section fix section-padding pt-0">
        <div className="about-wrapper style2">
            <div className="shape1 d-none d-xxl-block"><Image src="/assets/img/shape/aboutShape2_1.png" alt="img" width={225} height={401}   /></div>
            <div className="container">
                <div className="about-us section-padding">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 d-flex align-items-center justify-content-center justify-content-xl-start">
                            <div className="about-thumb mb-5 mb-lg-0">
                            <Image src="/assets/img/about/aboutThumb2_1.webp" alt="img" width={875} height={536}   />
                                
                                <div className="video-wrap">
                                    <a onClick={handelClick} 
                                        className="play-btn popup-video"><Image className="cir36" src="/assets/img/shape/player.svg" alt="img" width={152} height={152}   /></a>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6">
                            <div className="title-area">
                                <div className="sub-title text-start wow fadeInUp" data-wow-delay="0.5s">
                                <Image className="me-1" src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20}   />
                                    About US<Image className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20}   />
                                </div>

                                <h2 className="title text-start wow fadeInUp" data-wow-delay="0.7s">
                                    Italian and French Culinary Excellence
                                </h2>
                                <div className="text text-start wow fadeInUp" data-wow-delay="0.8s">  Every creation by Sensoira is a celebration of taste and artistry — crafted with precision, passion, 
                                and a deep respect for the harmony of flavors. Our chefs blend tradition and innovation, transforming 
                                every dish into an elegant experience.
                                </div>
                            </div>
                            <div className="fancy-box-wrapper">
                                <div className="fancy-box">
                                    <div className="item"><Image src="/assets/img/icon/aboutIcon1_1.svg" alt="img" width={36} height={36}   /></div>
                                    <div className="item">
                                        <h6>Exceptional Quality</h6>
                                        <p>Fresh, seasonal ingredients crafted with elegance and care.</p>
                                    </div>
                                </div>
                                <div className="fancy-box">
                                    <div className="item"><Image src="/assets/img/icon/aboutIcon1_2.svg" alt="img" width={36} height={36}   /></div>
                                    <div className="item">
                                        <h6>Expert Chef</h6>
                                        <p>Italian and French mastery creating timeless gourmet experiences</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="marquee-wrapper style-1 text-slider section-padding pt-0">
            <div className="marquee-inner to-left">
                <ul className="marqee-list d-flex">
                    <li className="marquee-item style1">

                            <span class="text-slider text-style">Taste</span>
                            <span class="text-slider text-style">Elegance</span>
                            <span class="text-slider text-style">Emotion</span>
                            <span class="text-slider text-style">Sensoira Experience</span>                  
                            <span class="text-slider text-style">Tradition</span>
                            <span class="text-slider text-style">Innovation</span>
                            <span class="text-slider text-style">Simplicity</span>
                            <span class="text-slider text-style">Passion</span>

                    </li>
                </ul>
            </div>
        </div>
        <VideoModal
            isTrue={toggle}
            iframeSrc={iframeSrc}
            handelClose={handelClose}        
        ></VideoModal> 

    </section>
    );
};

export default About2;