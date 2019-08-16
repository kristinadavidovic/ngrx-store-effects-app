import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

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
