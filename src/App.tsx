import { createRoot } from "react-dom/client";
import AppRoutes from "./pages/AppRoutes/AppRoutes";
import React from "react";
import "./index.css";

function render() {
  const root = createRoot(document.getElementById("page-content"));
  root.render(<AppRoutes />);
}
render();
