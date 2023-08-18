import Slider from "react-slick";
import "./slick.css"; 
import "./slick-theme.css";
import imagen1 from '../../assets/imagen_1.jpg'
import imagen2 from '../../assets/imagen_2.jpg'
import imagen3 from '../../assets/imagen_3.jpg'
import imagen4 from '../../assets/imagen_4.jpg'
import imagen5 from '../../assets/imagen_5.jpg'
import imagen6 from '../../assets/imagen_6.jpg'
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
                    image       = { imagen2 }
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
                    image       = { imagen3 }
                />     
            </div>

            <div>
                <Product
                    key         = { 14 }
                    id          = { 14 }
                    name        = { 'ejemplo' }
                    categoryId  = { 2 }
                    description = { "ele ejempito" }
                    price       = { 22 }
                    image       = { imagen4 }
                />     
            </div>
            <div>
                <Product
                    key         = { 14 }
                    id          = { 14 }
                    name        = { 'ejemplo' }
                    categoryId  = { 2 }
                    description = { "ele un ejempito" }
                    price       = { 22 }
                    image       = { imagen5 }
                />     
            </div>
            <div>
                <Product
                    key         = { 14 }
                    id          = { 14 }
                    name        = { 'ejemplo' }
                    categoryId  = { 2 }
                    description = { "ele ejempito" }
                    price       = { 22 }
                    image       = { imagen6 }
                />     
            </div>

            <div>
                <Product
                    key         = { 14 }
                    id          = { 14 }
                    name        = { 'ejemplo' }
                    categoryId  = { 2 }
                    description = { "ele ejempito" }
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
                    image       = { imagen2 }
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
                    image       = { imagen3 }
                />     
            </div>
                  
        </Slider>
      );
}
