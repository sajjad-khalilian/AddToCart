import axios from "axios"


const BASE_URL = "https://fakestoreapi.com"

const get_products = async () => {
    const response = await axios.get(`${BASE_URL}/products`)
    return response.data
}
export { get_products }