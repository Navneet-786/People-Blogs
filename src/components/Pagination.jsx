import React, { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";

const Pagination = () => {
  const { page, totalPages } = useContext(AppContext);
  return <div>{`page ${page} of ${totalPages}`}</div>;
};

export default Pagination;
