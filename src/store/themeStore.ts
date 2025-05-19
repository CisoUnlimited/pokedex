import { create } from 'zustand';
import { modernTheme } from '../theme/theme';

type Theme = typeof modernTheme;

interface ThemeStore {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
    theme: modernTheme,
    setTheme: (theme) => set({ theme }),
}));