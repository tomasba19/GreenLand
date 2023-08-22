import style from './Home.module.css'
import ClientComments from '../ClientComments/ClientComments'
import { NavLink } from 'react-router-dom'
import {SimpleSlider} from '../Swiper/Swiper'

export const Home = () => {
  return (
    <>
      <div className={style.parent}>
          <div className={style.div1}>
              <h1> GreenLand <hr/></h1>
              <div> Discover Our Eco-Friendly Collection Offering a Diverse Range of Products, Accessories, and Sustainable Alternatives for Every Need and Occasion.
                    Join the Movement Toward Sustainability with Our Diverse Selection of Eco-Friendly Products, Curated for Eco Warriors Like You. 
                    From Zero-Waste Essentials to Biodegradable Delights, Our Eco-Conscious Lineup is Designed to Uplift Your Lifestyle and the Planet.
              </div>
              <NavLink to="/login" className={style.buttonLink}>LOG IN</NavLink>
          </div>
          <div className={style.div2}> 
              <SimpleSlider/>
          </div>
      </div>
      <ClientComments/>
    </>
  )
}
