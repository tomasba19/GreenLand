import React from "react";
import { BsSearch } from "react-icons/bs";
// import style from "./SearchBar.modules.css?inline";
// import "./SearchBar.modules.css?inline";


export const SearchBar = () => {
    return (
        <div > {/*elimino momentáneamente la className {style.searchBar} por problemas en la importación vite me lo está identificando como deprecated y no me toma los estilos css */}
            <input
                type="text"
                placeholder="Find your product..."
                style={
                    {
                        width: "275px",
                        outlineColor: "#007f3f"
                    }
                }
            >
            </input>
            <button
                style={
                    {
                        marginLeft: "5px",
                        alignItems: "center"
                    }
                }
            >
                <BsSearch
                    style={
                        {
                            color: "green"
                        }
                    }
                />
            </button>
        </div>
    );
}



