import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppProvider } from "./context/AppContext.tsx"; // Changed from .ts to .tsx
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <Toaster richColors position="top-right" />
      <App />
    </AppProvider>
  </StrictMode>
);
