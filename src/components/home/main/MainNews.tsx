import {useHomeNewsData} from "../../../hooks/useHomeNewsData";
import {useState} from "react";
import {getTime} from "../../../helpers/getTime";

export const MainNews = () => {
    const {homeNewsData, firstHomeNewsData} = useHomeNewsData();

    const [news, setNews] = useState({title: '', image: '', published: '', link: ''});

    return (
        <div className="flex flex-col-reverse sm:flex-row md:flex-col md:w-1/2 gap-4 md:gap-12">
            <div className="flex flex-col">
                {firstHomeNewsData.map((el, index) => {
                    return (
                        <div key={index} className="flex flex-col gap-4 overflow-hidden">
                            <p className="text-lg">{getTime(el.publishedAt)}</p>
                            <a target="_blank" href={news.link ? news.link : el.url}><h2 className="text-[34px] md:text-[42px] leading-[120%] font-bold">{news.title ? `${news.title}...` : `${el.title?.substring(0, 100)}...`}</h2></a>
                            <a target="_blank" href={el.url} className="w-full">
                                <img
                                    src={news.image ? news.image : el.urlToImage}
                                    alt="image"
                                    className={`w-full h-[400px] object-cover rounded-xl`}
                                />
                            </a>
                        </div>
                    )
                })}
            </div>
            <div className="w-full flex justify-center md:justify-stretch items-center flex-col xs:flex-row sm:flex-col md:flex-row gap-2 font-bold">
                {
                    homeNewsData[0].slice(1, 3).map((el, index) => {
                        const handle = () => {
                            setNews({
                                ...news,
                                title: el.title.substring(0, 100),
                                image: el.urlToImage,
                                published: el.publishedAt,
                                link: el.url
                            })
                        }

                        return (
                            <div
                                key={index}
                                className={`${news.image === el.urlToImage ? 'bg-[#4CD964] text-white' : ''} max-w-[280px] h-[200px] rounded-lg xs:w-1/2 sm:w-full md:w-1/2 flex flex-col p-4 active:bg-[#4CD964] transition-all gap-2`}
                                onClick={handle}
                            >
                                <img src={el.urlToImage} alt={`${el.title}. Photo`} className="rounded-xl max-h-[80px] max-w-[120px] flex-auto object-cover overflow-hidden"/>
                                <p>{el.title.substring(0, 80)}...</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}