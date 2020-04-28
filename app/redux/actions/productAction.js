import { FETCH_PRODUCTS } from './types';
import { allProducts } from '../../fakebackend/Products';
export const fetchProducts = () => dispatch => {
    allProducts().then( (products) => {
        dispatch({
            type: FETCH_PRODUCTS,
            payload: products
        })
    });
}
export const getBanner = () => dispatch => {
    allProducts().then( (products) => {
        return products[0];
    });
}