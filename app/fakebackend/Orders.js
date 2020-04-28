import { getProducts } from '../data';

export const getAllOrders = (user) => {
    const orders = [
        {   
            id: "1",
            address: "Order address",
            status: "Shipping",
            totalPrice: "60.99",
            detail: [
                {
                    "id":"2",
                    "title":"ES6 & Beyound",
                    "cost":35.99
                },
                {
                    "id":"1",
                    "title":"Beginning Android Programming",
                    "cost":25
                }
            ],
        },
        {   
            id: "2",
            address: "Order address 2",
            status: "Delivered",
            totalPrice: "2",
            detail: [
                {
                    "id":"2",
                    "title":"test ürünü",
                    "cost":1
                },
                {
                    "id":"1",
                    "title":"test ürünü",
                    "cost":1
                }
            ],
        }
    ]

    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve(orders), 3000);
    });
    return promise;
}