import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './Pagination.css';
const Pagination = () => {
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(10);
    const [pageCount, setPageCount] = useState(0);

    const getData = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
        const data = res.data;
        console.log(data);
        const sliceData = data.slice(offset, offset + perPage);
        const postData = sliceData.map(elem => <div key={elem.id} className="page">
            <img src={elem.thumbnailUrl} alt="photo" />
            <span>{elem.title}</span>
        </div>)
        setData(postData)
        setPageCount(Math.ceil(data.length / perPage))
    }

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1);
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        getData()
    }, [offset])

    return (
        <div>
            {data}
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
        </div>
    );
};

export default Pagination;