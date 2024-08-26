/* eslint-disable react/no-unescaped-entities */
import Section from "../components/section";
import { NavLink } from 'react-router-dom';



const Nav = ()=>{
    return(
        <nav className="bg-[#fff] border-b-2 transition duration-500 ease-in-out w-screen  py-5 z-50  fixed top-0">
        <Section sectionClassName="flex items-center justify-between lg:flex-row">
            <NavLink to="/" className="text-[#012641] text-3xl tracking-wider flex items-center font-K2D font-bold">Test Herca</NavLink>
            <div className='xs:hidden sm:hidden lg:block space-x-2 text-[#1f2839] font-K2D'>
                <NavLink to="/penjualan" className={({isActive}) => isActive ? 'px-4 py-2 text-lg font-bold underline underline-offset-8 decoration-2' : "px-4 py-2 text-lg font-medium"}>Penjualan</NavLink>
                <NavLink to="/payment" className={({isActive}) => isActive ? 'px-4 py-2 text-lg font-bold underline underline-offset-8 decoration-2' : "px-4 py-2 text-lg font-medium"}>Pembayaran</NavLink>
                <NavLink to="/komisi" className={({isActive}) => isActive ? 'px-4 py-2 text-lg font-bold underline underline-offset-8 decoration-2' : "px-4 py-2 text-lg font-medium"}>Komisi</NavLink>
                <NavLink to="/marketing" className={({isActive}) => isActive ? 'px-4 py-2 text-lg font-bold underline underline-offset-8 decoration-2' : "px-4 py-2 text-lg font-medium"}>Marketing</NavLink>
                <NavLink to="/logout" className="border rounded-md border-[#1f2839] decoration-2 px-4 py-2 text-lg font-medium">Logout</NavLink>
            </div>
        </Section>
        </nav>
    )
}
export default Nav