import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdOutlineJoinInner } from "react-icons/md";
import bdFlag from '@/assets/bdFlag.png'
import { LuHome } from "react-icons/lu";
import { LiaDiscourse } from "react-icons/lia";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudentFill } from "react-icons/pi";
import { LiaBlogSolid } from "react-icons/lia";


const Footer = () => {
    return (
        <footer>
            <div className="footerCustomContainer">
                <p className='text-center capitalize font-semibold'>If you are passionate about tackling some of the most interesting problems
                    around, <br /> we would love to hear from you.</p>
                    <Link className='singleLink flex justify-center uppercase font-bold my-4 pb-5' href={'/login'}> <MdOutlineJoinInner /> join our team</Link>
                <div className='footerCustomRow border-t-2 border-gray-200 pt-5'>
                    <p className='uppercase font-semibold'>Copyright © 2024 LGUD</p>
                    <nav className='laptopNav'>
                        <Link className='singleLink' href={'/'}><LuHome /> home |</Link>
                        <Link className='singleLink' href={'/courses'}><LiaDiscourse /> courses |</Link>
                        <Link className='singleLink' href={'/teachers'}><LiaChalkboardTeacherSolid /> teachers |</Link>
                        <Link className='singleLink' href={'/students'}><PiStudentFill /> students |</Link>
                        <Link className='singleLink' href={'/blogs'}><LiaBlogSolid /> blogs |</Link>
                        <Image src={bdFlag} className='w-12 h-12'></Image>

                    </nav>
               </div>
            </div>
        </footer>
    );
};

export default Footer;