import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from "react-redux";
import ErrorBoundary from './components/ErrorBoundary'
import { UserProvider } from './context/userContext';
import { ProfileProvider } from './context/profileContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserProvider>
        <ProfileProvider>
            <ErrorBoundary>
                <Provider store={store}>
                    <App />
                </Provider>
            </ErrorBoundary>
        </ProfileProvider>
    </UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();