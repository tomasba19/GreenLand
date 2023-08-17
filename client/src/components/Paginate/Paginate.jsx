import styled from "./Paginate.module.css";
import { useDispatch } from "react-redux";
import { paginatePrev, paginateNext } from "../../redux/action"


export const Pagination = ({ numPage, cantPage }) => {
    const dispatch = useDispatch();

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
                <div className={styled.page}>

                    <div className={styled.page}>
                        {numPage <= 2 ? (<h3></h3>) : (<h3>{numPage - 2}</h3>)}
                        {numPage === 1 ? (<h3></h3>) : (<h3>{numPage - 1}</h3>)}
                        <h2>{numPage}</h2>
                        {(numPage + 1) > cantPage ? (<h3></h3>) : (<h3>{numPage + 1}</h3>)}
                        {(numPage + 2) > cantPage ? (<h3></h3>) : (<h3>{numPage + 2}</h3>)}
                    </div>

                </div>

                {
                    numPage >= cantPage ? (
                        <div className={styled.next}>
                            <div></div>
                            <div></div>
                        </div>
                    ) : (
                        <div className={styled.next}>
                            <button className={styled.buttons} onClick={() => dispatch(paginateNext())}>
                                {/* <img src={PokemonGoArrowRight} alt='' /> */}NEXT
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}