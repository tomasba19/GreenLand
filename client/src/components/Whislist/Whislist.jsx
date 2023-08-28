import React, { useEffect, useState } from "react";
import styled from "./Whislist.module.css"
import { Product } from "../Product/Product"
import { useNavigate } from "react-router-dom";

export const WhisList = () => {
    const navigate = useNavigate()
    const [cantWhisList, setCantWhisList] = useState(true);
    const [whisList, setwhisList] = useState(JSON.parse(localStorage.getItem('whislist')) || []);


    useEffect(() => {
        setwhisList(JSON.parse(localStorage.getItem('whislist')) || [])
        const cant = whisList.length
        console.log(cant);
        if (cant > 0) {
            setCantWhisList(true)
        }
        else {
            setCantWhisList(false)
        }
    }, [whisList])
    return (
        <main className={styled.containeWhislist}>
            {
                cantWhisList === true ?
                    <section className={styled.prodsGrid}>
                        {whisList.map((product) =>
                            product.active === true && (
                                <Product
                                    key={product.id}
                                    active={product.active}
                                    id={product.id}
                                    name={product.name}
                                    rating={product.rating}
                                    description={product.description}
                                    price={product.price}
                                    image={product.image}
                                />
                            )
                        )}
                    </section>
                    : <div className={styled.noFavsCont}>
                        <h2>You didn't add any favorites to your list!</h2>
                    </div>
            }
        </main >
    )
}