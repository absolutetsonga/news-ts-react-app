import {useHomeNewsData} from "../../../hooks/useHomeNewsData";
import {MainNews} from "./MainNews";
import {PopularNews} from "./PopularNews";

export const Home = () => {
    const { firstHomeNewsData } = useHomeNewsData();

    if (firstHomeNewsData[0].description) {
        return (
            <div className="flex flex-col md:flex-row min-w-full pt-40 bg-[#F2F2F2] text-black gap-[60px]">
                <MainNews/>
                <PopularNews/>
            </div>
        )
    }

    return (<div>loading...</div>)
}