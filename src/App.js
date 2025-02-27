import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LoginPage from './pages/Login/LoginPage';

// ✅ Header ve Footer'ı yalnızca belirli sayfalarda göstermek için özel bir bileşen oluşturduk
const Layout = ({ children }) => {
  const location = useLocation(); // 📌 Mevcut sayfa konumunu al

  // 📌 Eğer "/LoginPage" içindeysek, Header ve Footer gösterme
  const showHeaderFooter = location.pathname !== "/LoginPage";

  return (
    <div className="app-container">
      {showHeaderFooter && <Header />}
      <main className="main-content">{children}</main>
      {showHeaderFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LoginPage" element={<LoginPage />} /> 
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
