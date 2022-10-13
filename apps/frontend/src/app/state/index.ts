import { ActionReducerMap } from '@ngrx/store';
import { RouterState, routerReducer } from '@ngrx/router-store';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppState {
  router: RouterState.Minimal;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
};
