import React from "react";
import { News } from "../../features/news/News";

export const HomePage = ({ updateNews }: any) => {
  return <div onClick={() => updateNews()}>
    <News />
  </div>;
};
