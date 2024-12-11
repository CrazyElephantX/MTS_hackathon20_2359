import { create } from "zustand";
import { default_targets } from "./default";

export interface AppState {
  count_clicks: number;
  targets: Array<Target>;
  click: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  count_clicks: 0,
  targets: default_targets,
  click: () =>
    set(
      (state): Pick<AppState, "count_clicks"> => ({
        count_clicks: state.count_clicks + 1,
      }),
    ),
}));
