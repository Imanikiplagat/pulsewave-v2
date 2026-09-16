import { BrowserRouter, Routes, Route } from "react-router-dom";
import HashScroll from "@/components/HashSroll";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/Pages/Home";
import About from "@/Pages/About";
import Portfolio from "@/Pages/Portfolio";
import Contact from "@/Pages/Contact";
import Erp from "@/Pages/modules/ERP";
import NotFound from "@/Pages/pageNotfound";
import Revenuemgt from "@/Pages/modules/Revenuemgt"
import Solutions from "./Pages/SolutionsPage";
import RealEstate from "./Pages/modules/Real-estate";
import { RealEstateDetailPage } from "./components/Real-Estate/Estatedetail";

export default function App() {
  return (    
    <BrowserRouter>
     <HashScroll />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />         
        </Route>
        <Route path="solutions" element={<Solutions />} />  
         <Route path="solutions/erp" element={<Erp />} />
         <Route path="solutions/revenue-management" element={<Revenuemgt />} />
         <Route path="solutions/real-estate" element={<RealEstate />} />
         <Route path="/real-estate" element={<RealEstate />} />

<Route
  path="/real-estate/property-management"
  element={<RealEstateDetailPage type="property-management" />}
/>

<Route
  path="/real-estate/building-approvals"
  element={<RealEstateDetailPage type="building-approvals" />}
/>

<Route
  path="/real-estate/gis-mapping"
  element={<RealEstateDetailPage type="gis-mapping" />}
/>

<Route
  path="/real-estate/survey-request"
  element={<RealEstateDetailPage type="survey-request" />}
/>

<Route
  path="/real-estate/development-applications"
  element={<RealEstateDetailPage type="development-applications" />}
/>
         
         
         <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}