import "./App.css";
import { PageWrapper } from "./components/page/PageWrapper";
import React from "react";
import { HomePage } from "./pages/HomePage";

function App() {
    return (
        <PageWrapper>
            <HomePage/>
        </PageWrapper>
    );
}

export default App;
