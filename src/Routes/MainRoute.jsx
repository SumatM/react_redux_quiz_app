import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Quiz } from "../pages/Quiz";
import { Result } from "../pages/Result";
import { Dashboard } from "../pages/Dashboard";

export default function MainRoute() {

  return (
    <Routes>
       <Route path='/' element={<Home/>}></Route>
      <Route path='/quiz' element={<Quiz/>}></Route>
      <Route path='/results' element={<Result/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>

    </Routes>
  );
}
