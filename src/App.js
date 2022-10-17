import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Layout from "./components/layout";
import Login from "./components/login";
import BrandAdd from "./pages/brand/brandAdd";


function App(history) {
  return (
    <BrowserRouter>
      <Routes history={history}>
        <Route path="/" element={<Layout hideHeaderPaths={["/login","/"]} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/brand-add" element={<BrandAdd />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;