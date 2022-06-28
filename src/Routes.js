import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./screens/mainPage";
import ListOrderPage from "./screens/listOrderPage";
import ListHistoricOrderPage from "./screens/listHistoricOrderPage";
import ListProductsPage from "./screens/listProductsPage";
import ListUsersPage from "./screens/listUsersPage";
import RemoveUsersPage from "./screens/removeUsersPage";
import ChatPage from "./screens/chatPage";
import NotificationSenderPage from "./screens/notificationSenderPage";
import LoginPage from "./screens/loginPage";

import { useAuth } from "./hooks/useAuth";

export default function MainRoutes() {
  const { signed } = useAuth();

  if (!signed) {
    return <LoginPage />;
  } else {
    return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/list/orders" element={<ListOrderPage />} />
        <Route
          path="/list/orders/historic"
          element={<ListHistoricOrderPage />}
        />
        <Route path="/list/products" element={<ListProductsPage />} />
        <Route path="/list/users" element={<ListUsersPage />} />
        <Route path="/remove/users" element={<RemoveUsersPage />} />
        <Route path="/order/chat" element={<ChatPage />} />
        <Route path="/notification/send" element={<NotificationSenderPage />} />
      </Routes>
    );
  }
}
