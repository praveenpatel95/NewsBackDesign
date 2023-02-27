import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css'
import {persistor, store} from "./stores/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {createTheme, ThemeProvider} from "@mui/material";


const theme = createTheme({
    typography: {
        h5: {
            fontSize: '18px',
            fontWeight: '500',
            lineHeight: '26px !important',
        },
        h4: {
            fontSize: '22px',
            fontWeight: '500',
            lineHeight: '26px !important',
        },
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <App/>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);


reportWebVitals();
