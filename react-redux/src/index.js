import { createRoot } from "react-dom/client";
import store from "./store";
import App from "./App";
import { Provider } from "react-redux";

const root = createRoot(document.querySelector("#root"));

root.render(
  // 通过 Provider 注入 store
  <Provider store={store}>
    <App />
  </Provider>,
);
