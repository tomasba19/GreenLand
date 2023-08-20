import styled from "./Paginate.module.css";
import { useDispatch, useSelector } from "react-redux";
import { paginatePrev, paginateNext, paginateNumPage } from "../../redux/action"
import { useEffect } from "react";


export const Pagination = ({ numPage, cantPage }) => {
    const dispatch = useDispatch();
    console.log("numpage==> ", numPage);

    const onclickNumPage = (event) => {
        const value = event.target.innerText
        console.log("Antes de dispatch==> ", value);
        const num = dispatch(paginateNumPage(value))
        console.log("Despues de dispatch num==> ",num);
    }
    console.log("Despues de dispatch==> ",numPage);
    
    

    return (
        <div className={styled.container}>
            <div className={styled.paginate}>
                {
                    numPage <= 1 ? (
                        <div className={styled.prev}>
                            <div></div>
                            <div></div>
                        </div>
                    ) : (
                        <div className={styled.prev}>
                            <button className={styled.buttons}
                                onClick={() => dispatch(paginatePrev())}>
                                PREV
                            </button>
                        </div>
                    )
                }
                {/* <div className={styled.page}> */}

                <div className={styled.pageNum}>
                    {numPage <= 2 ? (<h5></h5>) : (<h5 onClick={onclickNumPage}>{numPage - 2}</h5>)}
                    {numPage === 1 ? (<h5></h5>) : (<h5 onClick={onclickNumPage}>{numPage - 1}</h5>)}
                    <h2>{numPage}</h2>
                    {(numPage + 1) > cantPage ? (<h5></h5>) : (<h5 onClick={onclickNumPage}>{numPage + 1}</h5>)}
                    {(numPage + 2) > cantPage ? (<h5></h5>) : (<h5 onClick={onclickNumPage}>{numPage + 2}</h5>)}
                </div>

                {/* </div> */}

                {
                    numPage >= cantPage ? (
                        <div className={styled.next}>
                            <div></div>
                            <div></div>
                        </div>
                    ) : (
                        <div className={styled.next}>
                            <button className={styled.buttons} onClick={() => dispatch(paginateNext())}>
                                NEXT
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}