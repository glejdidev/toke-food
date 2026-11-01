import type { Product } from "../types/product";

export const products: Product[] = [
    {
        id: "1",
        name: "Trahana me kefir",
        slug: "trahana-me-kefir",
        description: "Trahana me kefir",
        price: 600,
        image: "/images/products/dhi.jpg",
        stock: 1,
        isAvailable: true,
    },
    {
        id: "2",
        name: "Trahana me Perime",
        slug: "trahana-me-perime",
        description: "Trahana me perime",
        price: 700,
        image: "/images/products/perime.jpg",
        stock: 25,
        isAvailable: true,
    },
    {
        id: "3",
        name: "Trahana me Kefir dhie",
        slug: "trahana-me-Kefir-dhie",
        description: "Trahana me kefir dhie",
        price: 800,
        image: "/images/products/kefir.jpg",
        stock: 25,
        isAvailable: true,
    },
];