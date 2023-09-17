import React from 'react'
import Experties from './components/Experties/experties'
import Header from './components/Header/header'
import Hero from './components/Hero/hero'
import People from './components/People/people'
import Portfolio from './components/Portfolio/portfolio'
import Works from './components/Work/works'
import css from './styles/App.module.scss'

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Experties />
      <Works />
      <Portfolio />
      <People />
    </div>
  );
};

export default App;
