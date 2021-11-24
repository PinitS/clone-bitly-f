import React, { useEffect, useState } from 'react'
// @ts-ignore
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import InfiniteScroll from "react-infinite-scroll-component";
import NavBarTester from '../../components/layouts/NavBarTester';

const style = {
  border: "1px solid red",
  margin: 6,
  padding: 8
};
export default function DataExportTester() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);
  const limitPerPage = 30;

  useEffect(() => {
    fetch(`http://jsonplaceholder.typicode.com/posts?_start=1&_limit=30`)
      .then(response => response.json())
      .then(res => {
        setMaxPage(10);
        setData([...data, ...res]);
      });
    console.log('data :>> ', data);
  }, []);

  function fetchMoreData(currentPage: number, limitPerPage: number) {
    console.log('fetchMoreData :>> ');
    setCurrentPage(currentPage + 1);
    fetch(`http://jsonplaceholder.typicode.com/posts?_start=${currentPage}&_limit=${limitPerPage}`)
      .then(response => response.json())
      .then(res => {
        console.log('res :>> ', res);
        setData([...data, ...res]);
        console.log('data :>> ', data);
      });
  }

  const nextPage = () => {
    console.log('tigger :>> ');
    if (currentPage < maxPage) {
      console.log('if page :>> ');
      fetchMoreData(currentPage, limitPerPage)
    } else {
      console.log('else page :>> ');
      setHasMore(false);
    }
  }

  return (
    <div>
      <NavBarTester />
      <div className="container">
        <h1>DataExportTester</h1>
        <ReactHTMLTableToExcel
          className="btn btn-info"
          table="emp-table"
          filename="tablexls"
          sheet="tablexls"
          buttonText="Export Excel"
        />
        <InfiniteScroll
          dataLength={data.length}
          next={nextPage}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <table className="table table-bordered" id='emp-table'>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">userId</th>
                <th scope="col">id</th>
                <th scope="col">title</th>
                <th scope="col">body</th>
              </tr>
            </thead>
            <tbody>
              {data && data.length > 0 && data.map((item: any, index: number) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.userId}</td>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </InfiniteScroll>
      </div>

    </div>
  )
}
