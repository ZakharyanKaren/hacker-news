import "./App.css";
import { SingleNewsPage } from "./pages/singleNewsPage/SingleNewsPage";
import { Routes, Route } from "react-router-dom";
import { NewsPage } from "./pages/newsPage/NewsPage";

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NewsPage />} />
      <Route path='/news/:id' element={<SingleNewsPage />} />
    </Routes>
  );
};
