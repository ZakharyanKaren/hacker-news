import { useEffect, useState } from "react";
import "./App.css";
import { HomePage } from "./pages/homePage/HomePage";
import { SingleNewsPage } from "./pages/singleNewsPage/SingleNewsPage";
import { Routes, Route } from "react-router-dom";
import { News } from "./features/news/News";

export const App = () => {
  // const [isFetching, setIsFetching] = useState(true);

  // useEffect(() => {
  //   let newsRequestInterval = setInterval(() => {
  //     newsRequest();
  //   }, 60000);

  //   if (isFetching) {
  //     setIsFetching(false);
  //     newsRequest();
  //   }
  //   return () => clearInterval(newsRequestInterval);
  // }, [isFetching]);

  return (
    <Routes>
      <Route
        path='/'
        element={<News />}
      />
      <Route path='/news/:id' element={<SingleNewsPage />} />
    </Routes>
  );
};
