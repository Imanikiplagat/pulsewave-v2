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
         <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}