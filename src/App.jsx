//anasayfa ve kontrol sayfasına gitmemizi ve gittiğimizde sayfada 
//ne göreceğimizi belirlemek için kullanırız.
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Checkout from "./pages/Checkout";
import Header from "./components.jsx/Header";

function App() {
  return (
    <BrowserRouter>
    {/**bütün sayfalarımda header görünsün diye buraya konumlandırıyoruz */}
    <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
