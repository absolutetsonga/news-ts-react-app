import {useHomeNewsData} from "../../hooks/useHomeNewsData";
import {MainNews} from "./main/MainNews";
import {PopularNews} from "./main/PopularNews";
import {LatestNews} from "./latest/LatestNews";

export const Home = () => {
    const { firstHomeNewsData } = useHomeNewsData();

    if (firstHomeNewsData[0].description) {
        return (
            <div className="flex flex-col min-w-full pt-40 text-black">
                <div className="flex flex-col gap-[60px] bg-[#F2F2F2]">
                    <div className="flex flex-col md:flex-row min-w-full gap-[60px]">
                        <MainNews/>
                        <PopularNews/>
                    </div>
                    <LatestNews/>
                </div>
            </div>
        )
    }

    return (<div>loading...</div>)
}