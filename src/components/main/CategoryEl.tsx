import {useParams} from "react-router-dom";

export const CategoryEl = () => {
    const {id} = useParams();

    return (
        <div className="mt-10">
            Hello World {id}
        </div>
    )
}