import Slider from "react-slick";
import "./slick.css"; 
import "./slick-theme.css";
import imagen1 from '../../assets/imagen_1.jpg'
import { Product } from "../Product/Product";
export const Carousel = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
      };

    return (
        <Slider {...settings}>
             <div>
                <Product
                    key         = { 12 }
                    id          = { 12 }
                    name        = { 'ejemplo' }
                    categoryId  = { 2 }
                    description = { "ele pipi" }
                    price       = { 22 }
                    image       = { imagen1 }
                />     
            </div>

            <div>
                <Product
                    key         = { 13 }
                    id          = { 13 }
                    name        = { 'ejemplo' }
                    categoryId  = { 2 }
                    description = { "ele pipi" }
                    price       = { 22 }
                    image       = { imagen1 }
                />     
            </div>

            <div>
                <Product
                    key         = { 14 }
                    id          = { 14 }
                    name        = { 'ejemplo' }
                    categoryId  = { 2 }
                    description = { "ele pipi" }
                    price       = { 22 }
                    image       = { imagen1 }
                />     
            </div>

            <div>
                <Product
                    key         = { 14 }
                    id          = { 14 }
                    name        = { 'ejemplo' }
                    categoryId  = { 2 }
                    description = { "ele pipi" }
                    price       = { 22 }
                    image       = { imagen1 }
                />     
            </div>
            <div>
                <Product
                    key         = { 14 }
                    id          = { 14 }
                    name        = { 'ejemplo' }
                    categoryId  = { 2 }
                    description = { "ele pipi" }
                    price       = { 22 }
                    image       = { imagen1 }
                />     
            </div>
            <div>
                <Product
                    key         = { 14 }
                    id          = { 14 }
                    name        = { 'ejemplo' }
                    categoryId  = { 2 }
                    description = { "ele pipi" }
                    price       = { 22 }
                    image       = { imagen1 }
                />     
            </div>

            <div>
                <Product
                    key         = { 14 }
                    id          = { 14 }
                    name        = { 'ejemplo' }
                    categoryId  = { 2 }
                    description = { "ele pipi" }
                    price       = { 22 }
                    image       = { imagen1 }
                />     
            </div>

            <div>
                <Product
                    key         = { 14 }
                    id          = { 14 }
                    name        = { 'ejemplo' }
                    categoryId  = { 2 }
                    description = { "ele pipi" }
                    price       = { 22 }
                    image       = { imagen1 }
                />     
            </div>

            <div>
                <Product
                    key         = { 14 }
                    id          = { 14 }
                    name        = { 'ejemplo' }
                    categoryId  = { 2 }
                    description = { "ele pipi" }
                    price       = { 22 }
                    image       = { imagen1 }
                />     
            </div>
                  
        </Slider>
      );
}
