# Redux Atatus

Redux middleware for [Atatus](https://github.com/atatus/atatus-js) error logging

#### Why add Atatus via Redux middleware?

Because Redux contains the state of your whole application and is aware of the last action dispatched before each error. This is useful information we want the error log to contain so we've added this to the params object in Atatus.

### Setting up

#### 1. Add dependencies

``` bash
npm install redux-atatus-middleware --save
```

#### 2. Import dependency

``` js
import atatusMiddleware from 'redux-atatus-middleware';
```

#### 3. Configure & add middleware

``` js
const errorMiddleware = atatusMiddleware();

export const store = createStore(
    rootReducer,
    applyMiddleware(
        errorMiddleware
    )
);

export default store;
```
