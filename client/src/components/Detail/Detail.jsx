import React from "react";
import styled from './Detail.module.css'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getIdProduct } from '../../redux/action'
import { BsCart2 } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'


export const Detail = () => {

    const { id } = useParams(); //recibimos el params id
    const dispatch = useDispatch();
    const productDetail = useSelector(state => state.productDetail)

    useEffect(() => {
        dispatch(getIdProduct(id));
    }, [dispatch, id])

    console.log("son todos los productos detail ====>> ", productDetail);

    return (
        <div className={styled.containner}>

            <div className={styled.detail}>

                <div className={styled.containerImage}>
                    <div className={styled.divImage}>
                        <img src={productDetail.image} alt={productDetail.name}></img>
                    </div>
                </div>

                <div className={styled.containerDetail}>

                    <div className={styled.divname}>
                        <p>{productDetail.name}</p>
                    </div>

                    <div className={styled.divcategoria}>
                        <p>{productDetail.category?.name}</p>
                    </div>

                    <div className={styled.divprice}>
                        {/* <p1 className={styled.title}>price: </p1> */}
                        <p>${productDetail.price}</p>
                    </div>

                    <div className={styled.divStock}>
                        <p className={styled.titles}>stock: </p>
                        <p>{productDetail.stock}</p>
                    </div>

                    <div className={styled.divdescription}>
                        <p className={styled.descriptiontitle}>Description:</p>
                        <p className={styled.descriptionContent}> {productDetail.description}</p>
                    </div>



                    <div className={styled.addBuy}>
                        <div className={styled.continerInputAmount}>
                            <h4>Quantity</h4>
                            <input className={styled.inputQuantity}
                                type="Number"
                                placeholder="0"
                                min="0"
                                max={productDetail.stock}
                            ></input>
                            <label>maximium purchase {productDetail.stock}</label>
                        </div>
                        <div className={styled.continerbuttonBuy}>
                            <button className={styled.buttonBuy} >Buy Now</button>
                        </div>
                        <div className={styled.continerbutton2}>
                            <button className={styled.button2}><BsCart2 /> Add To Cart</button>
                            <button className={styled.button2}><AiOutlineHeart />  Whislist</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
