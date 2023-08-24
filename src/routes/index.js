import { Routes, Route } from "react-router-dom";

import Transaction from "../pages/transaction/Transaction";

import Menu from "../pages/menu/Menu";

function RoutesIndex() {
    return (
        <Routes>

            <Route path="/transaction" element={<Transaction />} />
            <Route path="/menu" element={<Menu />} />

        </Routes>
    )
}

export default RoutesIndex