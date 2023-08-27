import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
// import style from "./SearchBar.modules.css?inline";
// import "./SearchBar.modules.css?inline";


export const SearchBar = ({ onSearch, searchTerm, setSearchTerm, clearSearchTerm }) => {
    const [errorMessage, setErrorMessage] = useState("");

    const handleSearch = () => {
        if (searchTerm.trim() !== "") {
            onSearch(searchTerm);
        } else {
            setSearchTerm("");
            setErrorMessage("Please enter a valid search term!");
        }
    };

    const handleClearSearch = () => {
        clearSearchTerm();
        setErrorMessage("");
    };

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        setErrorMessage("");
        onSearch(value);
    }




    return (
        <div > {/*elimino momentáneamente la className {style.searchBar} por problemas en la importación vite me lo está identificando como deprecated y no me toma los estilos css */}
            <input
                type="text"
                placeholder="Find your product..."
                value={searchTerm}
                onChange={handleInputChange}
                style={
                    {
                        width: "20vw",
                        outlineColor: "var(--verdePrincipal)",
                        border: "none",
                        borderRadius: "5px",
                        padding: "8px",
                        backgroundColor: "var(--superLightGreen)",
                        fontSize: "inherit", 
                        '::placeholder': {
                            color: '#8CB799',
                        },
                    }
                }
            >
            </input>
            <button
                onClick={handleSearch}
                style={
                    {
                        marginLeft: "5px",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "none",
                        borderRadius: "5px",
                        padding: "8px",
                    }
                }
            >
                <BsSearch
                    style={
                        {
                            color: "var(--verdePrincipal)"
                        }
                    }
                />
            </button>

            <div
                style={{
                    color: "#b71c1c",
                    marginTop: "5px"
                }}
            >
                {errorMessage}
            </div>
        </div>
    );
}



