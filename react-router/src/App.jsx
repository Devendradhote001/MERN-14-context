import React from "react";
import { Route, Router, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import AppRouter from "./router/AppRouter";
import Navigation from "./router/Navigation";

const App = () => {
  return (
    <div className="h-screen w-full">
      <Navigation />
      <AppRouter />
    </div>
  );
};

export default App;
