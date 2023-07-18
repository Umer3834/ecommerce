import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import Reducer from "../reducers/productreducer"
const Appcontax = createContext()
const inialtialstate = {
    isloading: false,
    iserror: false,
    products: [],
    featureproducts: []
}
const Appprovider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, inialtialstate)
    // console.log(state);
    const getproduct = async () => {
        dispatch({ type: "setloading" })

        try {
            const res = await axios.get("https://api.pujakaitem.com/api/products")
            const Products = await res.data
            dispatch({ type: "myapidayta", payload: Products })
            // console.log(res.data, "umer");
        } catch (error) {
            dispatch({ type: "apierror" })

        }

    }
    useEffect(() => {

        getproduct()
    }, [])

    return (
        <Appcontax.Provider value={{ ...state }}>
            {children}
        </Appcontax.Provider>

    )
}
export { Appprovider, Appcontax }
