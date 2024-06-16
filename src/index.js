import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {store} from './BLL/store.js';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { addPost } from './BLL/post.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
let render = (state) => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <App state={state} store={store} />
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    );
}
render(store.getState())
store.subscribe(() => {
    let state = store.getState();
    render(state)
})

reportWebVitals();
