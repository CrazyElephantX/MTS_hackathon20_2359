import { create } from "zustand";

export interface AppState {
  count_clicks: number;
  click: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  count_clicks: 0,
  click: () =>
    set(
      (state): Pick<AppState, "count_clicks"> => ({
        count_clicks: state.count_clicks + 1,
      }),
    ),
}));
