import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "../pages/dashboard/DashboardPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/panel-control" />} />
        <Route path="/panel-control" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}