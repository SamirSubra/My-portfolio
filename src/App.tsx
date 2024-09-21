import {BrowserRouter, Route, Routes} from "react-router-dom"
import Main from "./pages/Main.tsx";
import Header from "./layouts/Header.tsx";
import Footer from "./layouts/Footer.tsx";
function App() {

  return (
    <BrowserRouter>
      <div id="app">
        <Header/>
        <Routes>
          <Route path="/*" element={<Main/>} />
        </Routes>
          <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
