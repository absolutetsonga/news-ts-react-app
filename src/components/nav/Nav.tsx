import {fonts} from "../../helpers/styles";
import logo from "../../assets/logo.svg"
import {MainCategories} from "./MainCategories";
import {MoreCategories} from "./MoreCategories";
import {BurgerMenu} from "./BurgerMenu";
import {Media} from "./Media";
import {NavLink} from "react-router-dom";

export const Nav = () => {
    return (
        <nav className="flex w-full justify-between">
            <div className="w-full">
                <ul className={`flex justify-between items-center ${fonts.navLinks}`}>
                    <NavLink to="/" className="flex justify-center items-center p-3 rounded-xl">
                        <img src={logo} alt="Logo" className="min-w-[160px] md:min-w-[200px]"/>
                    </NavLink>
                    <div className="gap-10 md:flex hidden">
                        <MainCategories/>
                        <MoreCategories/>
                    </div>
                    <Media/>
                    <BurgerMenu/>
                </ul>
            </div>
        </nav>
    )
}