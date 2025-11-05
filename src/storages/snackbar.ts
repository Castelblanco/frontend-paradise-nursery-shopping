import { create } from 'zustand';

type TSnackbarStore = {
    message: string;
    setMessage: (message: string) => void;
    setVoidMessage: () => void;
};

export const useSnackbar = create<TSnackbarStore>((set) => ({
    message: '',
    setMessage(message) {
        set({ message });
    },
    setVoidMessage() {
        set({ message: '' });
    },
}));
