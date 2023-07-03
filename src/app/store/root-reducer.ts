import { BookStoreEffects } from './bookstore.effects';
import { BookStore, bookStoreReducer } from './bookstore.reducer';

export interface myStoreState {
  bookStore: BookStore;
}

export const rootReducer = {
  bookStore: bookStoreReducer,
};

export const rootEffects = [BookStoreEffects];
