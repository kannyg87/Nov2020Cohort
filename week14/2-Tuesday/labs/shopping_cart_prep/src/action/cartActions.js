export const addProduct = (product) => {
    return{
        type: "ADD_ PRODUCT",
        data: product
    }
  
}

export const deleteProduct = (product) => {
    return{
        type: "DELETE_ PRODUCT",
        data: product
    }
  
}
