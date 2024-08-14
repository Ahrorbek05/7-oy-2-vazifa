import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './components/Loader/Loading';
import Test from './components/Test/Test';
import ReactPaginate from 'react-paginate';
import Card from './components/Card1/card';

function App() {
  const [machines, setMachines] = useState([]);
  const [apiPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const itemsPage = 20;

  useEffect(() => {
    fetchData();
  }, [apiPage]);

  async function fetchData() {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/machines?page=${apiPage + 1}&limit=${itemsPage}`);
      const data = await response.json();
      setMachines(data.items);
      setPageCount(data.totalPages);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  }

  function handlePageClick(data) {
    setCurrentPage(data.selected);
  }

  return (
    <div>
      <h1>Cars Information</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Test machines={machines} />
          <Card machines={machines}/>
        </>
      )}
      <div className="page-content">
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={pageCount}
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
    </div>
  );
}

export default App;
