import { useEffect, useState } from "react";
import "./App.css";
import { HomePage } from "./pages/homePage/HomePage";
import { NewsPage } from "./pages/newsPage/NewsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { newsRequest } from "./functions/functions";

export const App = () => {
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    let newsRequestInterval = setInterval(() => {
      newsRequest();
    }, 60000);

    if (isFetching) {
      setIsFetching(false);
      newsRequest();
    }
    return () => clearInterval(newsRequestInterval);
  }, [isFetching]);

  return (
    <Routes>
      <Route
        path='/homepage'
        index
        element={<HomePage updateNews={() => setIsFetching(true)} />}
      />
      <Route path='/news' element={<NewsPage />} />
    </Routes>
  );
};
