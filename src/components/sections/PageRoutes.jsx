import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  HomePage,
  ServicePage,
  OurStory,
  ProductPage,
  ProjectPage,
  WebDevelopment,
  PortfolioPage
} from "../index";

const PageRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </div>
  );
};

export default PageRoutes;
