import React from "react";
import { PageRoutes } from "./components";
import ScrollTop from "./components/sections/ScrollTop";


function App() {
  return (
    <div className="bg-dark w-full overflow-hidden">
      <PageRoutes />
      <ScrollTop />
    </div>
  );
}

export default App;
