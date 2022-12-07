import { lazy, Suspense, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const NewsPage = lazy(() => import("./pages/newsPage/NewsPage"));
const SingleNewsPage = lazy(
  () => import("./pages/singleNewsPage/SingleNewsPage")
);

export const App = () => {
  const newsPage = useMemo(() => <NewsPage />, []);
  const singleNewsPage = useMemo(() => <SingleNewsPage />, []);

  return (
    <Suspense fallback={<p>Loading page...</p>}>
      <Routes>
        <Route path='/' element={newsPage} />
        <Route path='/news/:id' element={singleNewsPage} />
      </Routes>
    </Suspense>
  );
};
