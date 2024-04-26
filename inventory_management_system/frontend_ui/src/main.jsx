// scroll bar
import "simplebar/src/index";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import store from "./store";
import { Provider } from "react-redux";
//
import App from "./App";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
// ----------------------------------------------------------------------
const options = {
  timeout: 4000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
  offset: "30px",
};

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </AlertProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to enable client cache, register instead.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
