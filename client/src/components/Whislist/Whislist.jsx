import React from "react";
import styled from "./Whislist.module.css"
import { Product } from "../Product/Product"

export const WhisList = () => {
 const whisList = JSON.parse(localStorage.getItem("whislist"));
 console.log(whisList);

    return (
        <main className={styled.containeWhislist}>
            <section className={styled.prodsGrid}>
                {whisList.map((product) =>
                        product.active === true && (
                            <Product
                                key={product.id}
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
        </main >
    )
}