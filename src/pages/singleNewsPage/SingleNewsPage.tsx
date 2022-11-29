import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { newsItemSelector } from "../../features/news/newsSlice";

export const SingleNewsPage = () => {
  const { id: singleNewsId } = useParams();
  
  const newsItemDataState = useSelector(newsItemSelector(singleNewsId));
  
  return (
  <div>
    {newsItemDataState ? 
      `NEWS ${newsItemDataState.name}`
       : "Loading..."}
  </div>
  );
};
