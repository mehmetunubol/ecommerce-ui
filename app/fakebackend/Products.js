import { getProducts } from '../data';

export const allProducts = () => {
    const validToken = "asdasdasdasd";
    const books = getProducts();

    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve(books), 3000);
    });
    return promise;
}