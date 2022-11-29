import React from "react";

export const HomePage = ({ updateNews }: any) => {
  return <div onClick={() => updateNews()}>HOME</div>;
};
