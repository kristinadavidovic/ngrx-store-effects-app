import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromPizzas from './pizzas.reducer';

export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
}

// Tole je za register reducers
export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer,
};

// Selectors
// .forFeature('string') = createFeatureSelector('string')
export const getProductsState = createFeatureSelector<ProductsState>(
  'products'
);

// Pizzas state
export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductsState) => state.pizzas
);

export const getAllPizzas = createSelector(
  getPizzaState,
  fromPizzas.getPizzas
);

export const getAllPizzasLoaded = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoaded
);

export const getAllPizzasLoading = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoading
);
