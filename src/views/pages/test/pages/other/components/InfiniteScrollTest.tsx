import React, { useState, useEffect } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";

export default function InfiniteScrollTest() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [state, setState] = useState<any>([]);
  const [maxPage, setMaxPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const limitPerPage = 30;
  const style = {
    border: "1px solid red",
    margin: 6,
    padding: 8
  };

  useEffect(() => {
    console.log('state :>> ', state);
    fetchMoreData(currentPage, limitPerPage);
  }, []);

  function fetchMoreData(currentPage: number, limitPerPage: number) {
    setCurrentPage(currentPage + 1);
    fetch(`http://jsonplaceholder.typicode.com/posts?_start=${currentPage}&_limit=${limitPerPage}`)
      .then(response => response.json())
      .then(data => {
        setMaxPage(20);
        setState([...state, ...data]);
      });
  }
  const nextPage = () => {
    console.log('tigger :>> ');
    if (currentPage < maxPage) {
      console.log('call page :>> ');
      fetchMoreData(currentPage, limitPerPage)
    } else {
      setHasMore(false);
    }
  }

  return (
    <div>
      <h1>InfiniteScroll</h1><button onClick={() => console.log('object :>> ')}>TEST</button>
      {/* https://www.npmjs.com/package/react-infinite-scroll-component */}
      <InfiniteScroll
        dataLength={state.length}
        next={nextPage}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {state && state.length > 0 && state.map((item: any, index: number) => (
          <div style={style} key={index}>
            div - #{index}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  )
}
