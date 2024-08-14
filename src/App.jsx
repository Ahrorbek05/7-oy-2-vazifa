import React, { useEffect, useState } from 'react';
import './App.css';
import Loading from './components/Loader/Loading';
import Test from './components/Test/Test';
import ReactPaginate from 'react-paginate';

function App() {
  const [machines, setMachines] = useState([]);
  const [apiPage, setApiPage] = useState(0);
  const itemsPage = 20;
  const pageCount = 5;

  useEffect(() => {
    fetch(`http://localhost:3000/machines?page=${apiPage + 1}&limit=${itemsPage}`)
      .then(response => response.json())
      .then(data => Array.isArray(data) ? setMachines(data) : console.error('Xatolik!', data))
      .catch(error => console.log('Qandaydir xatolik:', error));
  }, [apiPage]);

  function handlePageClick(data) {
    setApiPage(data.selected);
  }

  return (
    <div>
      <h1>Cars information</h1>
      <Test machines={machines} />
      <Loading />
      <div className="page-content">
      </div>
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
  );
}

export default App;
