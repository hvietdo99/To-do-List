function addTask(data) {
    return {
        type: 'add_task',
        payload: data
    }
}

function removeTask(data) {
    return {
        type: 'remove_task',
        payload: data
    }
}

function updateTask(data) {
    return {
        type: 'update_task',
        payload: data
    }
}

function addRemoveList(data) {
    return {
        type: 'add_remove_list',
        payload: data
    }
}

function deleteRemoveList(data) {
    return {
        type: 'delete_remove_list',
        payload: data
    }
}

function removeTaskBulk(data) {
    return {
        type: 'remove_task_bulk',
        payload: data
    }
}

export { addTask, removeTask, updateTask, addRemoveList, deleteRemoveList, removeTaskBulk }