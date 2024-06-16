import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './BLL/state.js';
import App from './UI/App';
import reportWebVitals from './reportWebVitals';

const startOld = () => {
const root = ReactDOM.createRoot(document.getElementById('root'));
let render = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} store={store} />
        </React.StrictMode>
    );
}
render(store.getState())
store.subscribe(() => {
    let state = store.getState();
    render(state)
})
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default startOld;
