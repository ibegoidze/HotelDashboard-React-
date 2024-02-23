import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import GlobalStyles from "./src/styles/GlobalStyles";
import Dashboard from "./src/pages/Dashboard";
import Bookings from "./src/pages/Bookings";
import Cabins from "./src/pages/Cabins";
import Users from "./src/pages/Users";
import Settings from "./src/pages/Settings";
import Account from "./src/pages/Account";
import Login from "./src/pages/Login";
import PageNotFound from "./src/pages/PageNotFound";
import AppLayout from "./src/ui/AppLayout";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="Bookings" element={<Bookings />} />
            <Route path="Cabins" element={<Cabins />} />
            <Route path="Users" element={<Users />} />
            <Route path="Settings" element={<Settings />} />
            <Route path="Account" element={<Account />} />
          </Route>
          <Route path="Login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
