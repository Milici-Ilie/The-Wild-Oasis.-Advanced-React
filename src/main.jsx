import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui/ErrorFallback.jsx";

//🌋🌋[ERROR BOUNDARY]🌋🌋 we need to wrap our entire App inside of the <ErrorBoundary>... here ...</ErrorBoundary>
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
//🌋🌋[ERROR BOUNDARY]🌋🌋 check please the lesson 405 for more details
