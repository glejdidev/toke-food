


export type Product = {
id: string;
name: string;
slug: string;
description: string;
price: number;
image: string;
stock: number;
 isAvailable: boolean;
};

function calculateTotal(price: number, quantity: number): number{
    return price * quantity;
}

function checkStock(
    stock: number,
    quantity:number
): boolean {
    return stock >= quantity;
}

console.log(checkStock(5,8));