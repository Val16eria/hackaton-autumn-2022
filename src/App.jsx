import Header from "./components/Home/Header/Header";
import Counter from "./components/Home/Counter/Counter";
import Footer from "./components/Home/Footer/Footer";

// СТИЛИ
const wrapper = {

}

// ПРИЛОЖЕНИЕ
const App = () =>
{
  return (
    <div style={wrapper}>
      <Header />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
