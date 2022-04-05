import Context from "../Context/Context";
import { addTask, removeTask, updateTask, addRemoveList, deleteRemoveList, removeTaskBulk } from "../Reducer/Actions";
import { useContext } from "react";

function useDataContext() {
    const { state, dispatch } = useContext(Context);

    return { state, dispatch, addTask, removeTask, updateTask, addRemoveList, deleteRemoveList, removeTaskBulk };
}

export { useDataContext }