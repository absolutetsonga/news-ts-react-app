import {HomeNewsType} from "../components/types/generalNewsType";
import {useEffect, useReducer} from "react";
import axios from "axios";

export const useHomeNewsData = () => {
    const controller = new AbortController();

    interface State {
        homeNewsData: HomeNewsType[]
        firstHomeNewsData: HomeNewsType
    }

    interface SetHomeNewsDataAction {
        type: 'setHomeNewsData';
        payload: HomeNewsType[];
    }

    interface SetFirstHomeNewsDataAction {
        type: 'setFirstHomeNewsData';
        payload: HomeNewsType;
    }

    type Action = SetHomeNewsDataAction | SetFirstHomeNewsDataAction;


    const reducer = (state: State, action: Action) => {
        switch (action.type) {
            case "setHomeNewsData":
                return { ...state, homeNewsData: action.payload }
            case "setFirstHomeNewsData":
                return { ...state, firstHomeNewsData: action.payload}
        }
    }

    const initialState = {
        homeNewsData: [],
        firstHomeNewsData: {} as HomeNewsType,
    };

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=a1f8e69bc47b4edf86edcbb1e8734c96`)
            .then(data => {
                dispatch({type: "setHomeNewsData", payload: data.data.articles})
                dispatch({type: "setFirstHomeNewsData", payload: data.data.articles[0]})
            })
            .catch(error => console.error(error.message))

        return () => controller.abort();
    }, []);

    return { homeNewsData: [state.homeNewsData], firstHomeNewsData: [state.firstHomeNewsData] }
}