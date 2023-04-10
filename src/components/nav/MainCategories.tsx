import {firstNavCategories} from "../../helpers/arrays";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {useState} from "react";

export const MainCategories = () => {
    return (
        <div className="flex gap-10">
            {firstNavCategories.slice(0, 4).map((category, index) => {
                const categoryURL = `/category/${category.toLowerCase()}`;
                return (
                    <NavLink
                        className="flex items-center cursor-pointer transition-all hover:text-[#6D6D6D]"
                        style={({isActive}) => isActive ? {color: `#4CD964`} : {}}
                        key={index}
                        to={categoryURL}
                        // onClick={() => {
                        //     axios.get(`https://newsapi.org/v2/top-headlines/sources?category=${category.toLowerCase()}&apiKey=a1f8e69bc47b4edf86edcbb1e8734c96`)
                        //         .then(data => console.log(data.data.sources));
                        // }}
                    >
                        {category}
                    </NavLink>
                )
            })}
        </div>
    )
}