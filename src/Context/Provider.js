import { useReducer } from "react";
import Context from "./Context";
import reducer from '../Reducer/Reducer';
import { initState } from '../Reducer/Constants';

function Provider({children}) {
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <Context.Provider
            value={{state, dispatch}}
        >
            {children}
        </Context.Provider>
    )
}

export default Provider;