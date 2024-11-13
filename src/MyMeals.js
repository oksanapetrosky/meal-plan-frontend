import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";

export const MyMeals = ({ text, updatingInInput, deleteMeal }) => {
    return ( <div>
        <p>{text}</p>
        <CiEdit onClick={updatingInInput}></CiEdit>
        <MdOutlineDelete onClick={deleteMeal}></MdOutlineDelete>
    </div>)
}

