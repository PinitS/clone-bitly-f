import React from 'react'
import NavBarTester from './components/layouts/NavBarTester'
import TheModal from './components/layouts/TheModal'
import TestSwal2 from './TestSwal2'
import TestToastify from './TestToastify'
import { useDispatch } from 'react-redux';
import Abc from './Abc'

export default function TesterAll() {
  console.log('process.env :>> ', process.env);
  return (
    <div>
      <NavBarTester />
      <div className="container">
        <TestToastify />
        <TestSwal2 />
        {/* สำหรับ Modal คือต้องเอา 2 อันนี้ไป */}
        <TheModal />
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>
        {/* สำหรับ Modal คือต้องเอา 2 อันนี้ไป */}
        {/* แล้ว props components size center เข้าไป กับ*/}
        {/* components คือส่วนของ modalBody*/}
        {/* ตอนแรกทำเป็น redux ไว้แล้วแต่กลัวใช้งานยากเกินไป */}
      </div>
    </div>
  )
}
