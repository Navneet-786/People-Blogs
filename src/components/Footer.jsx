import React, { useContext } from "react";
import Pagination from "./Pagination";
import { AppContext } from "../context/AppContextProvider";
const Footer = () => {
  const { setPage, page, totalPages, handlePageChange } =
    useContext(AppContext);
  const goPrevPage = () => {
    // setPage(page - 1);
    handlePageChange(page - 1);
  };
  const goNextPage = () => {
    // setPage(page + 1);
    handlePageChange(page + 1);
  };
  return (
    <div className="bg-slate-800 text-white fixed bottom-0 py-1 w-full border-2 border-white flex justify-center z-[900]">
      <div className="flex  w-1/2 justify-between items-center capitalize">
        {page > 1 && page < totalPages ? (
          <div className=" flex gap-2 w-fit">
            <button
              className=" px-5 py-2 bg-slate-400 rounded"
              onClick={goPrevPage}
            >
              prev
            </button>
            <button
              className=" px-5 py-2 bg-red-500 rounded"
              onClick={goNextPage}
            >
              Next
            </button>
          </div>
        ) : page == 1 ? (
          <div className=" flex gap-2 w-fit">
            {/* <button className=" px-5 py-2 bg-slate-400 rounded">prev</button> */}
            <button
              className=" px-5 py-2 bg-red-500 rounded"
              onClick={goNextPage}
            >
              Next
            </button>
          </div>
        ) : (
          <div className=" flex gap-2 w-fit">
            <button
              className=" px-5 py-2 bg-slate-400 rounded "
              onClick={goPrevPage}
            >
              prev
            </button>
            {/* <button className=" px-5 py-2 bg-red-500 rounded">Next</button> */}
          </div>
        )}
        <div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Footer;
