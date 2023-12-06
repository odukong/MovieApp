import {BrowserRouter,Route,Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './pages/Home.jsx';
import Movies from "./pages/Movies.jsx";
import MovieDetail from './pages/MovieDetail.jsx';
import TV from "./pages/TV"
import Celebirity from "./pages/Celebirity";
import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/Login.jsx";
import React from "react";

const App=()=> {
  return (
    <div className="app__container">
          <BrowserRouter>
            <Header/>
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route path="/movie" element={<Movies/>}></Route>
              <Route path="/movie/:title" element={<MovieDetail/>}></Route>
              <Route path="/tv" element={<TV/>}></Route>
              <Route path="/person" element={<Celebirity/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="*" element={<NotFound/>}></Route>
            </Routes> 
          </BrowserRouter>
    </div>
  );
}

export default App;
