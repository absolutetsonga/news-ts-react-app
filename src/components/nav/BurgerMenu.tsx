import {useState} from "react";
import burgerMenu from "../../assets/burger-menu.svg"
import closeMenu from "../../assets/close-menu.png"
import {firstNavCategories} from "../../helpers/arrays";
import {NavLink} from "react-router-dom";

export const BurgerMenu = () => {
    const [toggle, setToggle] = useState<boolean>();

    return (
        <div className="relative text-lg">
            <button onClick={() => setToggle(!toggle)} className="md:hidden block">
                <img src={toggle ? burgerMenu : closeMenu} alt="Burger Menu" className="w-[45px] h-[45px]"/>
            </button>
            <div className={`md:hidden block flex flex-col ${toggle ? 'opacity-0' : 'opacity-100'} transition-all duration-500 absolute mt-3 bg-white p-2 rounded-xl -right-0 top-20`}>
                {firstNavCategories.map((category, index) => {
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
        </div>

    )
}