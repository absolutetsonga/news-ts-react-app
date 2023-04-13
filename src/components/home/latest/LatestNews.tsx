import {useHomeNewsData} from "../../../hooks/useHomeNewsData";
import {getTime} from "../../../helpers/getTime";

export const LatestNews = () => {
    const {lastHomeNewsData} = useHomeNewsData();
    console.log(lastHomeNewsData)

    return (
        <div className="flex flex-col gap-10">
            <div className="flex justify-between">
                <h1 className="font-bold text-[31px] leading-[120%]">Latest Hottest News</h1>
                <button className="bg-[#F36326] rounded-xl text-white px-6 py-4">View All</button>
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xxl:grid-cols-6 gap-4 justify-items-center">
                {lastHomeNewsData[0].slice(0, 8).map(el => {
                    return (
                        <div className="flex flex-col gap-4 max-w-[300px]">
                            <a href={el.url}><img src={el.urlToImage} alt={el.title} className="object-cover w-[300px] h-[300px]"/></a>
                            <div className="flex flex-col items-end gap-4">
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-full flex items-center justify-between text-[13px] leading-[110%] text-[#9A9AB0] font-bold">
                                        <p>{el.author}</p>
                                        <p>{getTime(el.publishedAt, true)}</p>
                                    </div>
                                    <a href={el.url}><h2 className="font-bold text-[24px] leading-[120%] hover:text-[#007AFF] transition-all"> {el.title} </h2></a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}