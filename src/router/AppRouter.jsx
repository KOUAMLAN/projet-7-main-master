import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Accommodation from "../pages/Accommodation";
import Error from "../pages/Error";
import Header from "../components/Header";

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/accommodation/:id" element={<Accommodation />} />
        {/* Route 404 pour toutes les routes non trouvées */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
