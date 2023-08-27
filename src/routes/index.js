import { Routes, Route } from "react-router-dom";

import Transaction from "../pages/transaction/Transaction";

import Menu from "../pages/menu/Menu";
import Login from "../pages/login/Login";

function RoutesIndex() {
    return (
        <Routes>

            <Route path="/transaction" element={<Transaction />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default RoutesIndex