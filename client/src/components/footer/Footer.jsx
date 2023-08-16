import React from "react";
import styled from "./Footer.module.css"
import { Link } from "react-router-dom";
import image from "../../assets/index"

export default function Footer() {

    return (
        <div className={styled.container}>
            <div className={styled.grupo1}>
                <img className={styled.logo_greenland} src={image.logo_greenland} alt="logo" />
            </div>
            <div className={styled.grupo2}>
                <div className={styled.left}>
                    <h3>© 2023  EcoMarketº</h3>
                </div>
                <div className={styled.center}>
                    <Link className={styled.links} to="/#">About</Link>
                    <Link className={styled.links} to="/#">Privacy Policy</Link>
                    <Link className={styled.links} to="/#">Licensing</Link>
                    <Link className={styled.links} to="/#">Contact</Link>
                </div>
                <div className={styled.right}>
                    <Link className={styled.icon_image} to="https://youtube.com/" target="_blank">
                        <img src={image.logo_youtube} />
                    </Link>
                    <Link className={styled.icon_image} to="https://www.instagram.com/" target="_blank">
                        <img src={image.logo_instagram} />
                    </Link>
                    <Link className={styled.icon_image} to="https://twitter.com/" target="_blank">
                        <img src={image.logo_twitter} />
                    </Link>
                    <Link className={styled.icon_image} to="https://www.facebook.com/" target="_blank">
                        <img src={image.logo_facebook} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

