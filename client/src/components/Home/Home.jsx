import style from './Home.module.css'
import ClientComments from '../ClientComments/ClientComments'
import { NavLink } from 'react-router-dom'
import { SimpleSlider } from '../Swiper/Swiper'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/action";
import loader from "../../assets/loaderGif.gif"
import { Chatbot } from "../Chatbot/Chatbot";

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const auth = useSelector((state) => state.authData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());

    Promise.all([dispatch(getAllProducts())])
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading data:", error);
        setLoading(false);
      });
  }, [dispatch]);

  // react-chatbot-kit
  const [chatbotVisible, setChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (chatbotVisible) {
        setChatbotVisible(false);
      }
    };

    if (chatbotVisible) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [chatbotVisible]);


  return (
    <>
      {
        loading === true
          ?
          <div className={style.prodsContLoader}>
            <img src={loader} alt="Loader"></img>
          </div>
          :
          <>
            <div className={style.parent}>
              <div className={style.div1}>
                <h1> GreenLand <hr /></h1>
                <div> Discover Our Eco-Friendly Collection Offering a Diverse Range of Products, Accessories, and Sustainable Alternatives for Every Need and Occasion.
                  Join the Movement Toward Sustainability with Our Diverse Selection of Eco-Friendly Products, Curated for Eco Warriors Like You.
                  From Zero-Waste Essentials to Biodegradable Delights, Our Eco-Conscious Lineup is Designed to Uplift Your Lifestyle and the Planet.
                </div>
                {!auth && <NavLink to="/login" className={style.buttonLink}>LOG IN</NavLink>}
              </div>
              <div className={style.div2}>
                <SimpleSlider />
              </div>
            </div>
            <ClientComments />
          </>
      }
      {/* chatbot */}
      <div className={style.chatContainer}>
        {/* <div className={style.fade_chat}>
          {chatbotVisible && <Chatbot />}
        </div> */}
        <div className={chatbotVisible ? style.fade_chat : style.fadeOut_chat}>
          {chatbotVisible && <Chatbot />}
        </div>
        <div>
          <ion-icon
            name="chatbox-ellipses-outline"
            onClick={toggleChatbot}
          />
        </div>
      </div>

    </>
  )
}
