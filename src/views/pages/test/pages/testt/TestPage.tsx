import React, { useState, useEffect } from 'react'
import SS from './SS';

export default function TestPage() {
  const [state, setState] = useState<number>(0);
  const [state2, setState2] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  // useEffect(() => {
  //   console.log('state :>> ', state);
  //   // checkfori();
  // }, [state]);

  useEffect(() => {
    fetch(`http://jsonplaceholder.typicode.com/posts?_start=${currentPage}&_limit=100`)
      .then(response => response.json())
      .then(data =>
        setState2([...state2, ...data])
      );
  }, [currentPage])

  function testBtn(pagecurrent: number) {
    setCurrentPage(pagecurrent + 1);
  }

  return (
    <div>
      <h1>hrgfdget</h1>
      <button onClick={() => testBtn(currentPage)}>hujk</button>
      <p>{state}</p>
      <SS
        fn={testBtn}
        paramfn={currentPage}
      />
      {state > 10 && <p>sssss</p>}
      {/* {JSON.stringify(state2)} */}
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
          {state2 && state2.length > 0 && state2.map((item: any, index: number) => (
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
    </div>
  )
}
