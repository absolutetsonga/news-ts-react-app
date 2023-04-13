import {getTime} from "../../../helpers/getTime";
import {useHomeNewsData} from "../../../hooks/useHomeNewsData";

export const PopularNews = () => {
    const {homeNewsData} = useHomeNewsData();

    return (
        <div className="flex flex-col p-6 bg-[#FF3B30] opacity-90 text-white w-full md:w-1/2 rounded-2xl gap-6 min-h-min">
            <h1 className="font-bold text-[31px] leading-[120%]">Popular this week</h1>
            <div className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-1 gap-6">
                {homeNewsData[0].slice(3, 10).map((el, index) => {
                    return (
                        <div className="flex flex-col-reverse md:flex-row md:w-full gap-4" key={index}>
                            <a target="_blank" href={el.url} className="flex items-end min-w-[144px] h-full">
                                <img src={el.urlToImage} alt="" className="rounded-xl w-full h-[170px] md:h-[104px] md:w-[144px] object-cover"/>
                            </a>
                            <div className="flex flex-col gap-1">
                                <p>{getTime(el.publishedAt)}</p>
                                <a target="_blank" href={el.url}><p className="font-bold">{el.title}</p></a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}