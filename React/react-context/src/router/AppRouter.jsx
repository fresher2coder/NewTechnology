import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Users from "../pages/Users";
import User from "../components/User";
import { UserProvider } from "../context/UserContext";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import { SecuredPage } from "../context/SecuredContext";

function AppRouter() {
  return (
    <>
      <Router>
        <SecuredPage>
          <MainLayout>
            <UserProvider>
              <Routes>
                <Route index element={<Home />} />
                <Route path="/users" element={<Users />}>
                  <Route path=":userId" element={<User />} />
                </Route>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </UserProvider>
          </MainLayout>
        </SecuredPage>
      </Router>
    </>
  );
}

export default AppRouter;
