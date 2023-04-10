import {useEffect} from "react";
import axios from "axios";

export const Home = () => {
    const controller = new AbortController();

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines/sources?category=general&apiKey=a1f8e69bc47b4edf86edcbb1e8734c96`)
            .then(data => console.log(data.data.sources))
            .catch(error => console.log(error.message))

        return () => controller.abort();
    }, []);

    return (
        <div className="min-w-full h-[920px] pt-40 bg-[#919191] text-white">
            Home
        </div>
    )
}