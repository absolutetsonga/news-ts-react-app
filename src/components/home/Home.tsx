import {useHomeNewsData} from "../../hooks/useHomeNewsData";
import {useDateTime} from "../../hooks/useDateTime";
import {useState} from "react";

export const Home = () => {
    const { homeNewsData, firstHomeNewsData} = useHomeNewsData();
    const [ getTime ] = useDateTime();

    const [news, setNews] = useState({title: '', image: '', published: '', link: ''});

    if (firstHomeNewsData[0].description) {
        return (
            <div className="flex flex-col md:flex-row min-w-full pt-40 bg-[#F2F2F2] text-black gap-[60px]">
                <div className="flex flex-col-reverse sm:flex-row md:flex-col md:w-1/2 gap-12">
                    <div className="flex flex-col">
                        {firstHomeNewsData.map((el, index) => {
                            return (
                                <div key={index} className="flex flex-col gap-4 overflow-hidden">
                                    <p className="text-lg">{getTime(news.published ? news.published : el.publishedAt )}</p>
                                    <a target="_blank" href={news.link ? news.link : el.url}><h2 className="text-[34px] md:text-[42px] leading-[120%] font-bold">{news.title ? news.title : el.title }</h2></a>
                                    <a target="_blank" href={el.url}>
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
                    <div className="w-full flex items-center flex-col xs:flex-row sm:flex-col md:flex-row gap-2 font-bold">
                        {
                            homeNewsData[0].slice(0, 2).map((el, index) => {
                                const handle = () =>
                                    setNews({...news, title: el.title, image: el.urlToImage, published: el.publishedAt, link: el.url})

                                return (
                                    <div
                                        key={index}
                                        className={`${news.image === el.urlToImage ? 'bg-[#4CD964] text-white rounded-lg' : ''} xs:w-1/2 sm:w-full md:w-1/2 flex flex-col p-4 active:bg-[#4CD964] transition-all gap-4`}
                                        onClick={handle}
                                    >
                                        <img src={el.urlToImage} alt={`${el.title}. Photo`} className="rounded-xl max-h-[80px] max-w-[120px] flex-auto object-cover overflow-hidden"/>
                                        <p>{el.title}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="flex flex-col p-6 bg-[#FF3B30] opacity-90 text-white w-full md:w-1/2 rounded-2xl gap-6 min-h-min">
                    <h1 className="font-bold text-[31px] leading-[120%]">Popular this week</h1>
                    <div className="flex flex-col gap-4">
                        {homeNewsData[0].slice(2, 10).map((el, index) => {
                            return (
                                <div className="flex gap-4" key={index}>
                                    <a target="_blank" href={el.url} className="flex items-center min-w-[144px] h-full">
                                        <img src={el.urlToImage} alt="" className="rounded-xl w-[144px] h-[84px]"/>
                                    </a>
                                    <div>
                                        <p>{getTime(el.publishedAt)}</p>
                                        <a target="_blank" href={el.url}><p className="font-bold">{el.title}</p></a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }

    return (<div>loading...</div>)
}