import {position} from "../../helpers/styles";
import {moreOpen, moreClose} from "../../assets/assets";
import {firstNavCategories} from "../../helpers/arrays";
import {NavLink} from "react-router-dom";
import {useState} from "react";

export const MoreCategories = () => {
    const [toggle, setToggle] = useState<boolean>(false)

    return (
        <div
            className={`${position.flexCenter} flex-col gap-1 mb-[-4px] cursor-pointer`}
            onClick={() => setToggle(!toggle)}
        >
            <div className={`${position.flexCenter} gap-1 relative`}>
                <p>More</p>
                <img
                    src={toggle ? moreOpen : moreClose}
                    alt="More"
                    className="w-[10px] h-[10px]"
                />
            </div>
            <button className={`${position.flexCenter} flex-col`}>
                <div className={`flex flex-col ${toggle ? 'opacity-0 invisible' : 'opacity-100 visible'} transition-all duration-500 absolute top-20 mt-3 bg-white p-2 rounded-xl`}>
                    {firstNavCategories.slice(4).map((category, index) => {
                        const categoryURL = `/category/${category.toLowerCase()}`;

                        return (
                            <NavLink
                                className="p-1 cursor-pointer transition-all hover:text-[#6D6D6D]"
                                style={({isActive}) => isActive ? { color: `#4CD964` } : {}}
                                key={index}
                                to={categoryURL}
                            >
                                {category}
                            </NavLink>
                        )
                    })}
                </div>
            </button>
        </div>
    )
}