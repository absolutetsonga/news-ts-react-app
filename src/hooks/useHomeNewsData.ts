import {HomeNewsType, LastNewsType} from "../components/types/types";
import {useEffect, useReducer, useMemo} from "react";
import axios from "axios";

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate() - 1;

const fromToDate = `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`
console.log(fromToDate);

export const useHomeNewsData = () => {
    const controller = new AbortController();

    interface State {
        homeNewsData: HomeNewsType[]
        firstHomeNewsData: HomeNewsType
        lastHomeNewsData: LastNewsType[]
    }

    interface SetHomeNewsDataAction {
        type: 'setHomeNewsData';
        payload: HomeNewsType[];
    }

    interface SetFirstHomeNewsDataAction {
        type: 'setFirstHomeNewsData';
        payload: HomeNewsType;
    }

    interface SetLastHomeNewsDataAction{
        type: 'setLastHomeNewsData',
        payload: LastNewsType[],
    }

    type Action = SetHomeNewsDataAction | SetFirstHomeNewsDataAction | SetLastHomeNewsDataAction;


    const reducer = (state: State, action: Action) => {
        switch (action.type) {
            case "setHomeNewsData":
                return { ...state, homeNewsData: action.payload }
            case "setFirstHomeNewsData":
                return { ...state, firstHomeNewsData: action.payload}
            case "setLastHomeNewsData":
                return { ...state, lastHomeNewsData: action.payload}
        }
    }

    const initialState = {
        homeNewsData: [],
        lastHomeNewsData: [],
        firstHomeNewsData: {} as HomeNewsType,
    };

    const [{firstHomeNewsData, homeNewsData, lastHomeNewsData}, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=a1f8e69bc47b4edf86edcbb1e8734c96`)
            .then(data => {
                dispatch({type: "setHomeNewsData", payload: data.data.articles})
                dispatch({type: "setFirstHomeNewsData", payload: data.data.articles[0]})
            })
            .catch(error => console.error(error.message))

        return () => controller.abort();
    }, []);

    useEffect(() => {
        axios.get(` https://newsapi.org/v2/everything?q=a&from=${fromToDate}&to=${fromToDate}&sortBy=popularity&apiKey=a1f8e69bc47b4edf86edcbb1e8734c96`)
            .then(data => dispatch({type: "setLastHomeNewsData", payload: data.data.articles}))
            .catch(error => console.error(error.message))

        return () => controller.abort();
    }, []);

    return { homeNewsData: [homeNewsData], firstHomeNewsData: [firstHomeNewsData], lastHomeNewsData: [lastHomeNewsData] }
}