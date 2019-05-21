import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

const initialState = {
    test: '???'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const middleware = applyMiddleware(createLogger({ collapsed: true }));

const store = createStore(reducer, middleware);

export default store;
