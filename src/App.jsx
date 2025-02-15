import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Trending from "./components/Trending"
import Popular from "./components/Popular"
import Movies from "./components/Movies"
import TvShows from "./components/TvShows"
import People from "./components/People"
import MovieDetails from "./components/templates/MovieDetails"
import Tvdetails from "./components/templates/Tvdetails"
import PersonDetails from "./components/templates/personDetails"
import Trailer from "./components/templates/Trailer"
import NotFound from "./components/templates/NotFound"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"

function App() {
// #1F1E24
  return (
    <>
      <div className="w-[100%] h-screen bg-[#1F1E24]">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/trending" element={<Trending/>}/>
          <Route path="/popular" element={<Popular/>}/>
          <Route path="/movie" element={<Movies/>}/>
          <Route path="/movie/details/:id" element={<MovieDetails/>}>
            <Route path="/movie/details/:id/trailer" element={<Trailer/>}/>
          </Route>
          <Route path="/tvshows" element={<TvShows/>}/>
          <Route path="/tv/details/:id" element={<Tvdetails/>}>
            <Route path="/tv/details/:id/trailer" element={<Trailer/>}/>
          </Route>
          <Route path="/person" element={<People/>}/>
          <Route path="/person/details/:id" element={<PersonDetails/>}>
          </Route>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
