import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Users from "../pages/Users";
import User from "../components/User";
import { UserProvider } from "../context/UserContext";

function AppRouter() {
  return (
    <>
      <Router>
        <MainLayout>
          <UserProvider>
            <Routes>
              <Route index element={<Home />} />

              <Route path="/users" element={<Users />}>
                <Route path=":userId" element={<User />} />
              </Route>
            </Routes>
          </UserProvider>
        </MainLayout>
      </Router>
    </>
  );
}

export default AppRouter;
