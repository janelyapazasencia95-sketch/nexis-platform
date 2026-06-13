import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "../components/layout/AdminLayout";

import LoginPage from "../pages/auth/LoginPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import ProveedoresPage from "../pages/proveedores/ProveedoresPage";
import DetalleProveedorPage from "../pages/proveedores/DetalleProveedorPage";
import ComprasPage from "../pages/compras/ComprasPage";
import ControlCalidadPage from "../pages/calidad/ControlCalidadPage";
import InventarioPage from "../pages/inventario/InventarioPage";
import MapaPeruPage from "../pages/mapa/MapaPeruPage";
import PagosPage from "../pages/pagos/PagosPage";
import WhatsAppPage from "../pages/whatsapp/WhatsAppPage";
import ReportesPage from "../pages/reportes/ReportesPage";
import TrazabilidadLotePage from "../pages/trazabilidad/TrazabilidadLotePage";
import UsuariosPage from "../pages/usuarios/UsuariosPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<AdminLayout />}>
          <Route path="/" element={<Navigate to="/panel-control" />} />
          <Route path="/panel-control" element={<DashboardPage />} />
          <Route path="/proveedores" element={<ProveedoresPage />} />
          <Route path="/proveedores/:id" element={<DetalleProveedorPage />} />
          <Route path="/compras" element={<ComprasPage />} />
          <Route path="/control-calidad" element={<ControlCalidadPage />} />
          <Route path="/inventario" element={<InventarioPage />} />
          <Route path="/mapa-peru" element={<MapaPeruPage />} />
          <Route path="/pagos" element={<PagosPage />} />
          <Route path="/whatsapp" element={<WhatsAppPage />} />
          <Route path="/reportes" element={<ReportesPage />} />
          <Route path="/lotes/:id/trazabilidad" element={<TrazabilidadLotePage />} />
          <Route path="/usuarios" element={<UsuariosPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}