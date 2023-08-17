import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import an array of image paths
import imagePaths from "./imagePaths";
import styles from "./LandingPage.module.css";

// Background images
import imagenBg_1 from "./image/img_1.png";
import imagenBg_2 from "./image/img_2.jpg";

// Import other components
import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/footer/Footer";
import ClientComments from "../components/ClientComments/ClientComments";


function LandingPage() {
    return (
        <div>
            {/*We render the NavBar component */}
            <NavBar />
            <div className={styles.carousel}>
                <div>
                    <div className={styles.carousel_content}>
                        <span>discover</span>
                        <h1>greenLand</h1>
                        <hr />
                        <p>
                            Discover Our Eco-Friendly Collection Offering a Diverse Range of Products, Accessories, and Sustainable Alternatives for Every Need and Occasion. <br /> Join the Movement Toward Sustainability with Our Diverse Selection of Eco-Friendly Products, Curated for Eco Warriors Like You. <br /> From Zero-Waste Essentials to Biodegradable Delights, Our Eco-Conscious Lineup is Designed to Uplift Your Lifestyle and the Planet.
                        </p>
                        <a href="#" className={styles.slider_btn}>login</a>
                    </div>
                </div>

                {/*We create the slide with swiper*/}
                <Swiper
                    effect="slide"
                    speed={1200}
                    spaceBetween={2}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className={styles.mySwiper}
                >
                    {imagePaths.map((imagePath, index) => (
                        <SwiperSlide className={styles.swiper} key={index}>
                            <div className={styles.overlay}></div>
                            <img src={imagePath} alt={`slides_image_${index}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/*Background images */}
                <img src={imagenBg_1} alt="bg image" className={styles.imagenBg_1} />
                <img src={imagenBg_2} alt="bg image" className={styles.imagenBg_2} />
            </div>

            <div>
                {/*We render the comments component */}
                <ClientComments />
            </div>
            {/*We render the Footer component */}
            <Footer />
        </div>
    )
}

export default LandingPage;


/*
   -- Crafted with code by programador5781 --
  -- Your journey into tech starts here! --
*/
