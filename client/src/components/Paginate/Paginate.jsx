import styled from "./Paginate.module.css";
import { useDispatch } from "react-redux";
import { paginatePrev, paginateNext } from "../../redux/action"


export const Pagination = ({ numPage, cantPage }) => {
    const dispatch = useDispatch();

    console.log("numero pagina", numPage);
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
                    {/* numPage <= 1 ? ( */}
                    <h3>{numPage - 1}</h3>
                    <h3>{numPage}</h3>
                    <h3>{numPage + 1}</h3>
                    <h3>{numPage + 2}</h3>
                    <h3>{numPage + 3}</h3>
                    {/* <h3>{numPage}</h3>
                    <h3>of</h3>
                    <h3>{cantPage} </h3> */}
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