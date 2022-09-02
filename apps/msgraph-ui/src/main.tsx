import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { Providers } from "@microsoft/mgt-element";
import { Msal2Provider } from "@microsoft/mgt-msal2-provider";
import App from "./app/app";

Providers.globalProvider = new Msal2Provider({
    clientId: "40fc7fce-fe4b-450e-a89b-ddf4555b263b",
});

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
