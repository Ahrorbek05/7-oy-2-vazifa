import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSearchParams } from 'react-router-dom';

function Home() { 
  const [cars, setCars] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(21);
  const [searchParams, setSearchParams] = useSearchParams();
  const itemsPerPage = 21;

  useEffect(() => {
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || itemsPerPage;

    fetch(`http://localhost:3000/machines?page=${page}&limit=${limit}`)
      .then(resp => resp.json())
      .then(data => {
        setCars(data.results);
        setPageCount(Math.ceil(data.total / limit));
      })
      .catch(err => {
        console.log(err);
      });

    setSearchParams({ page: page, limit: limit });
  }, [searchParams, currentPage, limit]);

  useEffect(() => {
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || itemsPerPage;
    setCurrentPage(page - 1);
    setLimit(limit);
  }, [searchParams, currentPage, limit]);

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1;
    setCurrentPage(data.selected);
    setSearchParams({ page: selectedPage, limit: limit });
  };

  return (
    <div className='main justify-center'>
      <div className='container max-w-[1200px] flex gap-4 flex-wrap mt-5 justify-center'>
        {cars.map((car, index) => (
          <div key={index} className='card w-[341px] p-5 border shadow-lg mb-1 bg-slate-100'>
            <img src={car.image} alt={car.title} className='w-full h-auto' />
            <h2 className='text-[25px] text-center mt-3 text-[goldenrod]'>{car.title}</h2>
            <h3 className='text-lg text-center mt-1 text-[goldenrod]'>{car.start_production}</h3>
            <p className='text-center mt-1 text-[goldenrod]'>{car.class}</p>
          </div>
        ))}
      </div>
      <div className='mt-8 mb-8'>
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

export default Home;
