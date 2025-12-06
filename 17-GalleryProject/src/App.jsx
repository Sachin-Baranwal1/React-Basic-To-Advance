import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Components/Card";
import Pagination from "./Components/Pagination";
const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setPage] = useState(1);
 const [postPerPage, setpostPerPage] = useState(8)

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = data.slice(firstPostIndex, lastPostIndex);
  const Getdata = async () => {
    const result = await axios.get(
      `https://picsum.photos/v2/list?page=${currentPage}`
    );
    setData(result.data);
  };
  useEffect(() => {
    Getdata();
  }, [currentPage]);

  return (
    <div className="h-full pt-5 bg-slate-950 mb-2">
      <Card Totaldata={currentPost} />
      <div className="pagination bg-slate-950 flex justify-center items-center gap-5 p-4">
        <Pagination
          totalpost={data.length}
          postPerPage={postPerPage}
          setPage={setPage} 
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default App;
