import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { store } from "./Redux/Store";
import { Provider } from "react-redux/"
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from "./Theme";

// Call make Server
makeServer();

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
            <ChakraProvider theme={theme}>
              <App />
            </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>);
