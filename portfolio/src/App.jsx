import Header from "./components/Header/header";
import css from "./styles/app.module.scss";

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
    </div>
  );
};

export default App;
