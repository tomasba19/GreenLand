import style from './Landing.module.css'
import { Carousel } from '../Carousel/Carousel'
import ClientComments from '../ClientComments/ClientComments'

export const Landing = () => {
  return (
    <>
      <div className={style.parent}>
          <div className={style.div1}>
              <h1> EcoMarket <hr/></h1>
              <div> Discover Our Eco-Friendly Collection Offering a Diverse Range of Products, Accessories, and Sustainable Alternatives for Every Need and Occasion.
                    Join the Movement Toward Sustainability with Our Diverse Selection of Eco-Friendly Products, Curated for Eco Warriors Like You. 
                    From Zero-Waste Essentials to Biodegradable Delights, Our Eco-Conscious Lineup is Designed to Uplift Your Lifestyle and the Planet.
              </div>
              <button>LOGIN</button>
          </div>
          <div className={style.div2}> 
              <Carousel/>
          </div>
      </div>
      <ClientComments/>
    </>
  )
}
