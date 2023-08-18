import React from "react";
// Importa más imágenes de usuarios si es necesario
import styles from "./ClientComments.module.css"; // Importa tus estilos CSS

const clientCommentsData = [
  {
    userImage: "https://i.postimg.cc/rFSWXrgb/woman-3359228-640.jpg",
    name: "Nathalie Keller",
    title: "CEO of EM",
    comment:
      "An incredible organic products store where I found everything I needed to lead a more sustainable lifestyle. The wide range of eco-friendly.",
  },
  {
    userImage: "https://i.postimg.cc/1XRxm6wH/accepting-5019743-640.jpg",
    name: "Jhon Doe",
    title: "CEO of EM",
    comment:
      "A fantastic eco-friendly marketplace offering a wide range of sustainable products that perfectly align with my values",
  },
  {
    userImage: "https://i.postimg.cc/WpgQ4GN7/pexels-vinicius-wiesehofer-1130626.jpg",
    name: "Ruth Cohen",
    title: "CEO of EM",
    comment:
      "I was amazed by the diverse selection of environmentally-conscious goods available on this ethical online store",
  },
  {
    userImage: "https://i.postimg.cc/gjjdCrh7/blue-eyes-3447716-640.jpg",
    name: "Nicole Batievsky",
    title: "CEO of EM",
    comment:
      "Discovering this green e-commerce platform has revolutionized the way I shop for eco-friendly items. Highly recommended!",
  },
  {
    userImage: "https://i.postimg.cc/X78NrSjx/pexels-hannah-nelson-1456951.jpg",
    name: "Doron Kavilion",
    title: "CEO of EM",
    comment:
      "I'm thrilled to have stumbled upon this eco marketplace. It's become my go-to source for conscious consumer choices.",
  },
  {
    userImage: "https://i.postimg.cc/G2yGRh1X/pexels-jeffrey-reed-769772.jpg",
    name: "Israel Shamailov",
    title: "CEO of EM",
    comment:
      "This online shop is a treasure trove of eco-conscious finds. It's my one-stop destination for all things green and ethical.",
  },
  {
    userImage: "https://i.postimg.cc/WpgQ4GN7/pexels-vinicius-wiesehofer-1130626.jpg",
    name: "Ruth Cohen",
    title: "CEO of EM",
    comment:
      "I was amazed by the diverse selection of environmentally-conscious goods available on this ethical online store",
  },
  {
    userImage: "https://i.postimg.cc/gjjdCrh7/blue-eyes-3447716-640.jpg",
    name: "Nicole Batievsky",
    title: "CEO of EM",
    comment:
      "Discovering this green e-commerce platform has revolutionized the way I shop for eco-friendly items. Highly recommended!",
  },
  {
    userImage: "https://i.postimg.cc/X78NrSjx/pexels-hannah-nelson-1456951.jpg",
    name: "Doron Kavilion",
    title: "CEO of EM",
    comment:
      "I'm thrilled to have stumbled upon this eco marketplace. It's become my go-to source for conscious consumer choices.",
  },
  {
    userImage: "https://i.postimg.cc/G2yGRh1X/pexels-jeffrey-reed-769772.jpg",
    name: "Israel Shamailov",
    title: "CEO of EM",
    comment:
      "This online shop is a treasure trove of eco-conscious finds. It's my one-stop destination for all things green and ethical.",
  },
  // Agrega más datos de testimonios aquí
];

function ClientComments  () {
  return (
    <div className={styles.testimonials_container}>
      <div className={styles.testimonials_grid}>
        {clientCommentsData.map((testimonial, index) => (
          <div
            key={index}
            className={styles.testimonial_box}
          >
            
            <div className={styles.avatar}>
              <img src={testimonial.userImage} alt="Avatar" />
              <div className={styles.avatar_details}>
                <div className={styles.avatar_name}>{testimonial.name}</div>
                <div className={styles.avatar_title}>{testimonial.title}</div>
                <div className={styles.avatar_comments}>{testimonial.comment}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientComments;


/*
-- Crafted with code by programador5781 --
  -- Your journey into tech starts here! --
  */