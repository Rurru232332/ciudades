import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CityPage from "./pages/CityPage/CityPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/search"
                    element={<CityPage/>}
                />
                <Route
                    path="/history"
                    element={<HistoryPage/>}
                />
            </Routes>
        </Router>
    )
}