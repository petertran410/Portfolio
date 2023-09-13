import Experties from "./components/Experties/experties";
import Header from "./components/Header/header";
import Hero from "./components/Header/hero/hero";
import css from "./styles/app.module.scss";

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Experties />
    </div>
  );
};

export default App;
