import React from 'react'
import { Link } from "react-router-dom";

export default function NavBarTester() {
  return (
    <div>
      {/* ไม่ใช้ href แต่จะใช้ Link ครอบ <a> อีกที ไม่งั้นแดง */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <Link to='/' className='link'>
            <i></i>
            <div className="navbar-brand">Navbar</div>
          </Link>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/redux' className='link'>
                  <div className="nav-link active" aria-current="page">Redux</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/validate' className='link'>
                  <div className="nav-link active" aria-current="page">Validate</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/export' className='link'>
                  <div className="nav-link active" aria-current="page">Export Excel</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/getParams/1' className='link'>
                  <div className="nav-link active" aria-current="page">GetParams</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/other' className='link'>
                  <div className="nav-link active" aria-current="page">Convert</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/pretest' className='link'>
                  <div className="nav-link active" aria-current="page">Pretest</div>
                </Link>
              </li>
            </ul>
            <form className="d-flex">
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
