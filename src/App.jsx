import {Routes, Route} from "react-router-dom";

import Counter from "./components/Home/Counter/Counter";
import Autorization from "./components/Authorization/Autorization";

import Header from "../src/components/Home/Header/Header";
import Footer from "../src/components/Home/Footer/Footer";

// СТИЛИ
const wrapper = {

}

// ПРИЛОЖЕНИЕ
const App = () =>
{
  return (
    <div style={wrapper}>
      <Header />

            <Routes>
              <Route path="/" element={<Counter />}/>
              <Route path="/autorization" element={<Autorization />}/>
            </Routes>

      <Footer />
    </div>
  );
}

export default App;
