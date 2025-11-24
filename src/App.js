import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Layout from "./routes/Layout";
import Login from "./routes/Login";
import DataBase from "./routes/DataBase";
import AddDataBase from "./routes/AddDataBase";
import Data from "./routes/Data";
import PopularProductData from "./routes/PopularProductData";
import FashionLineData from "./routes/FashionLineData";
import OurPatentData from "./routes/OurPatentData";
import ComparisonPage from "./routes/ComparisonPage";
import ColumnsA from "./components/columns/ColumnsA";
import ColumnsB from "./components/columns/ColumnsB";
import ColumnsC from "./components/columns/ColumnsC";
import ColumnsD from "./components/columns/ColumnsD";
import ColumnsE1 from "./components/columns/ColumnsE1";
import ColumnsE2 from "./components/columns/ColumnsE2";
import Description from "./components/columns/subcolumns/DescriptionMasterPage";
import IndividualTowel from "./components/columns/subcolumns/TowelDescription";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/comparison" element={<ComparisonPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/database" element={<DataBase />} />
        <Route path="/databaseadd" element={<AddDataBase />} />
        <Route path="/newaddition" element={<Data />} />
        <Route path="/popularproducts" element={<PopularProductData />} />
        <Route path="/fashionline" element={<FashionLineData />} />
        <Route path="/ourpatent" element={<OurPatentData />} />
        <Route path="/columnsA" element={<ColumnsA />} />
        <Route path="/columnsB" element={<ColumnsB />} />
        <Route path="/columnsC" element={<ColumnsC />} />
        <Route path="/columnsD" element={<ColumnsD />} />
        <Route path="/columnsE1" element={<ColumnsE1 />} />
        <Route path="/columnsE2" element={<ColumnsE2 />} />
        <Route path="/description" element={<Description />} />
        <Route path="/individualtoweldetail" element={<IndividualTowel />} />
      </Routes>
    </div>
  );
}

export default App;
