import {Routes, Route} from "react-router-dom";



import Counter from "./components/Home/Counter/Counter";
import Autorization from "./components/Authorization/Autorization";
import Student from "./components/Student/Student";
import Sotr from "./components/Sotr/Sotr";
import Teacher from "./components/Teacher/Teacher"

import Header from "../src/components/Home/Header/Header";
import Footer from "../src/components/Home/Footer/Footer";
import Question from "./components/Question/Question";
import AutoStudent from "./components/AutoStudent/AutoStudent";
import Who from "./components/Who/Who";
import AutoOther from "./components/AutoOther/AutoOther";
import SpisokSotr from "./components/SpisokSotr/SpisokSotr";
import Chat from "./components/Chat/Chat";


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
              <Route path="/noAccount" element={<Who />}/>
              <Route path="/autoRegS" element={<AutoStudent />}/>
              <Route path="/autoRegP" element={<AutoOther />}/>
              <Route path="/spisokSotr" element={<SpisokSotr />}/>
              <Route path="/chat" element={<Chat />}/>
            </Routes>

            

      <Footer />
    </div>
  );
}

export default App;
