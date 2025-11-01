import type { Product } from 'models/products';
import { create } from 'zustand';

type TShoppingStore = {
    products: Product[];
    setAddProduct: (product: Product) => void;
    setRemoveProduct: (id: string) => void;
};

export const useShoppingProducts = create<TShoppingStore>((set, get) => ({
    products: [],
    setAddProduct(product) {
        const { products } = get();
        products.push(product);
        set({ products });
    },
    setRemoveProduct(id: string) {
        const { products } = get();

        const index = products.findIndex((product) => product.id === id);
        if (index === -1) return;
        products.splice(index, 1);
        set({ products });
    },
}));
