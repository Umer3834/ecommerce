const Productreducer = (state, action) => {
    switch (action.type) {
        case "setloading": return { ...state, isloading: true }
        case "myapidayta":
            const featuredata = action.payload.filter((ele) => {
                return ele.featured === true
            })
            return {
                ...state,
                isloading: false,
                products: action.payload,
                featureproducts: featuredata
            }
        case "apierror": return { ...state, isloading: false, iserror: true }

        default:
            return state
    }
}
export default Productreducer