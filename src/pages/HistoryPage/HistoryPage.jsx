import React from "react";
import MainLayout from "../MainLayout/MainLayout";
import { HistoryProvider, useHistoryContext } from "../../providers/HistoryProvider";

const HistoryPage = () => {

    const history = useHistoryContext();
    console.log(history);

    return (
        <MainLayout>
            <h1>Contenido</h1>
        </MainLayout>
    );
}

export default HistoryPage;