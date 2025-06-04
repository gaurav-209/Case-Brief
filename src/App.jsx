import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import DashboardPage from './page/DashboardPage';
import ClientsPage from './page/ClientsPage';
import CasesPage from './page/CasesPage';
import DocumentsPage from './page/DocumentsPage';
import TasksPage from './page/TasksPage';
import AppointmentsPage from './page/AppointmentsPage';
import InvoicesPage from './page/InvoicesPage';
import ReportsPage from './page/ReportsPage';
import LoginPage from './page/LoginPage'; 
import SettingsPage from './page/SettingsPage'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
          <Route path="/invoices" element={<InvoicesPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>

        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
