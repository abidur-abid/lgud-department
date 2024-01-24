import Link from 'next/link';
import React from 'react';
import { LuHome } from "react-icons/lu";
import { LiaDiscourse } from "react-icons/lia";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudentFill } from "react-icons/pi";
import { LiaBlogSolid } from "react-icons/lia";
import { LuLogIn } from "react-icons/lu";


const Navbar = () => {
    return (
        <header>
            <div className="headerCustomContainer">
                <div className="headerCustomRow">
                    <div className="logo">lgud</div>
                    <nav className='laptopNav'>
                        <Link className='singleLink' href={'/'}><LuHome /> home</Link>
                        <Link className='singleLink' href={'/courses'}><LiaDiscourse /> courses</Link>
                        <Link className='singleLink' href={'/teachers'}><LiaChalkboardTeacherSolid /> teachers</Link>
                        <Link className='singleLink' href={'/students'}><PiStudentFill /> students</Link>
                        <Link className='singleLink' href={'/blogs'}><LiaBlogSolid /> blogs</Link>
                        <Link className='singleLink border-2 border-primaryColor rounded px-4 py-2' href={'/login'}><LuLogIn /> login</Link>
                        {/* <Link className='singleLink border-2 border-primaryColor rounded px-4 py-2' href={'/logout'}>logout</Link> */}
                        {/* <Link className='singleLink border-2 border-primaryColor rounded px-4 py-2' href={'/dashboard'}>dashboard</Link> */}

                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;