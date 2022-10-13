import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
export const FEATURE_NAME = 'shared';

export interface SharedState {
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<SharedState> = {
  router: routerReducer,
};

const selectFeature = createFeatureSelector<SharedState>(FEATURE_NAME);

export const selectRouterBranch = createSelector(
  selectFeature,
  (f) => f.router,
);
