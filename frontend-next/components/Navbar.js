import Link from "next/link";
import React from "react";
import { useTranslation } from 'react-i18next'

function Navbar(props){
  if(props.props.locale=="th"){
    return (
      <div className="bg-amber-300 text-white border-4 rounded-md border-amber-500 border-soild p-2 shadow ">
        <div className="font-black text-lg">
          <ul className="flex flex-row">
            <ul className="font-black text-xl mx-10">My Website</ul>
            <li className="mx-5">
              <Link href="/">หน้าหลัก</Link>
            </li>
            <li className="mx-5">
              <Link href="/article">บทความ</Link>
            </li>
            <li className="mx-5">
              <Link href="/serve">บริการ</Link>
            </li>
            <li className="mx-5">
              <Link href="/customer">ลูกค้า</Link>
            </li>
            <li className="mx-5">
              <Link href="/en">english</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }else if(props.props.locale=="en"){
    return(
      <div className="bg-amber-300 text-white border-4 rounded-md border-amber-500 border-soild p-2 shadow ">
        <div className="font-black text-lg">
          <ul className="flex flex-row">
            <ul className="font-black text-xl mx-10">My Website</ul>
            <li className="mx-5">
              <Link href="/">Home</Link>
            </li>
            <li className="mx-5">
              <Link href="/article">Article</Link>
            </li>
            <li className="mx-5">
              <Link href="/serve">Serve</Link>
            </li>
            <li className="mx-5">
              <Link href="/customer">Customer</Link>
            </li>
            <li className="mx-5">
              <Link href="/th">ไทย</Link>
            </li>
          </ul>
        </div>
      </div>
    )

  }
};
export default Navbar;