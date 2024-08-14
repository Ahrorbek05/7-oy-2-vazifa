import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './components/Loader/Loading';
import Test from './components/Test/Test';
import ReactPaginate from 'react-paginate';
import data from './assets/data/data.json';

function App() {
  const [machines, setMachines] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 20;

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  function fetchData() {
    const startIndex = currentPage * itemsPerPage;
    const selectedMachines = data.slice(startIndex, startIndex + itemsPerPage);
    setMachines(selectedMachines);
  };

  function handlePageClick(data) {
    setCurrentPage(data.selected);
  };

  return (
    <div>
      <h1>Cars Information</h1>
      <Test machines={machines} />
      <div className="page-content">
      </div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={Math.ceil(data.length / itemsPerPage)}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName='pagination justify-content-center'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        activeClassName='active'
      />
    </div>
  );
}

export default App;
