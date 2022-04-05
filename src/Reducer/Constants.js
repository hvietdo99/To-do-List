const defaultData = {
    tasks: [],
    removeList: []
};

const dataSaved = JSON.parse(localStorage.getItem('task')) ?? defaultData;
const initState = dataSaved;

const saveData = (task) => {
    const json = JSON.stringify(task);
    localStorage.setItem('task', json);
}

export { initState, saveData }