import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/global";
import RoutesApp from "./routes";

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <RoutesApp />
        </BrowserRouter>
    );
}