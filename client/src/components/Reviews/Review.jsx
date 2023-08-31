
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import styled from './Review.module.css';

import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import styles from "./Review.module.css";

const { VITE_SERVER_URL } = import.meta.env;
import { alertConfirm, alertAcept } from "../SweetAlert/SweetAlert";
import { useSelector } from "react-redux";

const Reviews = () => {
  const auth = useSelector((state) => state.authData);
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const token = JSON.parse(localStorage.getItem("profile"))?.token;
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const fetchReviews = useCallback(async () => {
    try {
      const response = await axios.get(
        `${VITE_SERVER_URL}/reviews/product/${id}`
      );
      setReviews(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews, id]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmitReview = async () => {
    try {
      if (message.length > 200) {
        setErrorMessage("Review text cannot exceed 200 characters");
        return;
      }

      await axios.post(
        `${VITE_SERVER_URL}/reviews/`,
        {
          productId: id,
          rating,
          message,
          userId: auth?.id,
        },
        config
      );
        // La reseña se envió correctamente
        setSuccessMessage("Review submitted successfully");
        setRating(0);
        setMessage("");
        fetchReviews(); // Actualiza la lista de reseñas

    } catch (error) {
      console.error(error);
      alertAcept("error", "Error creating review" ,error.response?.data?.error|| error.message );
      setErrorMessage("Error submitting review");
    }
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      const confirmed = await alertConfirm(
        "warning",
        "Delete product!",
        "Are you sure you want to delete the review?"
      );
      if (confirmed) {
        const response = await axios.delete(
          `http://localhost:3001/reviews/${reviewId}`,
          config
        );
        if (response.status === 200) {
          // La reseña se eliminó correctamente
          setSuccessMessage("Review deleted successfully");
          fetchReviews(); // Actualiza la lista de reseñas
        }
      }
    } catch (error) {
      console.error(error);
      alertAcept("error", "Error deleting review" ,error.response?.data?.error|| error.message );
      setErrorMessage("Error deleting review");
    }
  };

  return (
    <div className={styles.reviewsContainer}>
      <h2 className={styles.reviewsContainerH2}>Reviews</h2>
      <Link to={`/reviews/${id}`} className={styles.linkReviews}>
        Read {reviews.length} Reviews
      </Link>

      {/* Renderiza las estrellas y las reseñas individualmente */}
      {reviews.map((review) => (
        <div className={styles.reviewItem} key={review.id}>
          {/* Renderiza la información de la reseña */}
          {/* Renderiza el componente DeleteReview */}
          <button className={styles.buttonDelete} onClick={handleDeleteReview}>
            Delete Review
          </button>
        </div>
      ))}

      {/* Muestra las estrellas */}

      <div className={styled.starIcons}>
        {/*<h3>Leave a Review</h3>*/}
        {successMessage && <p className={styled.successMessage}>{successMessage}</p>}
        {errorMessage && <p className={styled.errorMessage}>{errorMessage}</p>}

      <div className={styles.starIcons}>
        <h3>Leave a Review</h3>
        {successMessage && (
          <p className={styles.successMessage}>{successMessage}</p>
        )}
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

        <div>
          {[1, 2, 3, 4, 5].map((value) => (
            <span key={value} onClick={() => handleRatingChange(value)}>
              {value <= rating ? (
                <BsStarFill className={styles.starIconsSvgFilled} />
              ) : value - 0.5 === rating ? (
                <BsStarHalf className={styles.starIconsSvgHalf} />
              ) : (
                <BsStar className={styles.starIconsSvgEmpty} />
              )}
            </span>
          ))}
        </div>
      </div>
      {/* Muestra el formulario para escribir la reseña */}
      <textarea
        className={styles.reviewFormTextarea}
        value={message}
        onChange={handleMessageChange}
        placeholder="Write your review..."
      />
      <button
        className={styles.reviewFormButton}
        onClick={handleSubmitReview}
        disabled={message.length > 200}
      >
        Submit Review
      </button>
    </div>
  );
};

export default Reviews;
