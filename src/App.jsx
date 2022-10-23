import {Routes, Route} from "react-router-dom";

import Counter from "./components/Home/Counter/Counter";
import Autorization from "./components/Authorization/Autorization";
import Student from "./components/Student/Student";
import Sotr from "./components/Sotr/Sotr";
import Teacher from "./components/Teacher/Teacher"

import Header from "../src/components/Home/Header/Header";
import Footer from "../src/components/Home/Footer/Footer";
import Question from "./components/Question/Question";


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
              <Route path="/student" element={<Student />}/>
              <Route path="/sotr" element={<Sotr />}/>
              <Route path="/teacher" element={<Teacher />}/>
              <Route path="/what" element={<Question />}/>
            </Routes>

      <Footer />
    </div>
  );
}

export default App;
