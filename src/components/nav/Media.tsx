import {position} from "../../helpers/styles";
import {instagram, twitter, facebook, youtube } from "../../assets/assets"

export const Media = () => {
    return (
        <div className={`${position.flexCenter} gap-2 hidden xs:flex`}>
            <a href="https://www.instagram.com/" target="_blank" ><img src={instagram} alt="Our Instagram"  className="w-[40px] h-[40px] cursor-pointer"/></a>
            <a href="https://twitter.com/" target="_blank"><img src={twitter} alt="Our Twitter" className="w-[40px] h-[40px] cursor-pointer"/></a>
            <a href="https://facebook.com/" target="_blank"><img src={facebook} alt="Our Facebook" className="w-[40px] h-[40px] cursor-pointer"/></a>
            <a href="https://www.youtube.com/" target="_blank"><img src={youtube} alt="Our Youtube" className="w-[40px] h-[40px] cursor-pointer"/></a>
        </div>
    )
}