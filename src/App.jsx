import "./App.css";
import Router from "./Router";
import { BrowserRouter} from 'react-router-dom';
import { useState, useEffect } from "react";

function App() {
  return (
    <BrowserRouter>
    <Router />
    </BrowserRouter>
  );
}

export default App;
