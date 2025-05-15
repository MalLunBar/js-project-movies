import { BrowserRouter, Routes, Route } from "react-router"
import Movies from "./pages/Movies"
import Details from "./pages/Details"

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies movieList="popular" />} />
          <Route path="/movies/:movieId" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
