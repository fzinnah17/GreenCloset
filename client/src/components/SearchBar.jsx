import React, { useState } from "react";
import { products } from "../../../server/data/mockData.js";

const SearchBar = () => {
    const [searchText, setSearchText] = useState("");

    const relevantTags = [...new Set(products
        .map(item => item.tags)
        .flat()
        .filter(tag => tag.includes(searchText)))];

    const handleChange = (e) => {
        setSearchText(e.target.value);
        onSearch(e.target.value);  // Call the prop function to update state in ProductsPage
    }

    return (
        <div className="search-container">
            <form action="/search" method="get">
                <input
                    className="search"
                    id="searchleft"
                    type="search"
                    name="q"
                    placeholder="Search"
                    value={searchText}
                    onChange={handleChange}
                    autoComplete="off"
                />
                <label className="button searchbutton" htmlFor="searchleft">
                    <span className="mglass">&#9906;</span>
                    
                </label>

            </form>
            {searchText && (
                <div className="suggestions">
                    {relevantTags.map(tag => (
                        <div key={tag}>{tag}</div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
