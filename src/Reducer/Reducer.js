import { saveData } from "./Constants";

function reducer(state, action) {
    switch(action.type) {
        case 'add_task':
            const addedState = {
                ...state,
                tasks: [action.payload, ...state.tasks]
            }
            saveData(addedState);
            return addedState;
        case 'remove_task':
            const newState_1 = {
                ...state,
                tasks: state.tasks.filter((task, index) => 
                    task.id !== action.payload
            )}
            saveData(newState_1);
            return newState_1;
        case 'update_task':
            const indexToUpdate = state.tasks.findIndex(task => task.id === action.payload.id);
            state.tasks[indexToUpdate] = action.payload;
            saveData(state);
            return state;
        case 'add_remove_list':
            state.removeList.push(action.payload);
            saveData(state);
            return state;
        case 'delete_remove_list':
            const index = state.removeList.indexOf(action.payload);
            state.removeList.splice(index, 1);
            saveData(state);
            return state;
        case 'remove_task_bulk':
            const newState_2 = {
                ...state,
                tasks: state.tasks.filter((task) => 
                    task.id !== action.payload
            )}
            saveData(newState_2);
            return newState_2;
        default:
            throw new Error("Invalid action!");
    }
}

export default reducer;