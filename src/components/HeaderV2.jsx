import { useState } from "react";
import {
    FaBoxOpen,
    FaFacebookF,
    FaHome,
    FaInstagram,
    FaLongArrowAltLeft,
    FaMicroblog,
    FaPlus,
    FaSearch,
    FaCartPlus,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import {
    MdContactPhone,
    MdKeyboardArrowDown,
    MdLogin,
    MdLogout,
    MdOutlineCategory,
    MdShoppingBasket,
} from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdClose, IoMdLogOut } from "react-icons/io";
import useAuth from "../Hooks/useAuth";
import { useSelector } from "react-redux";
import { accountSelector } from "../features/accountSlice/accountSelector";
import { useLogoutMutation } from "../features/accountSlice/accountApi";

const Static_nav = () => {
    // const [selectLang, setSelectLang] = useState(1);
    // const [lgdroper, setLgdroper] = useState(false);
    const [cateDroper, setCateDroper] = useState(false);
    const [searchQuerys, setSearchQuerys] = useState("");
    const [isVisableOnSearching, setIsVisableOnSearching] = useState(false);
    const [isSearchBar, setIsSearchBar] = useState(false);
    const [isTrim, setIsTrim] = useState(false);
    const [isMenu, setIsMenu] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const auth = useAuth();
    const { user } = useSelector(accountSelector);
    const { avatar, name, email } = user || {};
    // const language = ["English", "Bangla"];
    // const nm = language?.find((lg, i) => i === selectLang);
    const [loggedOut, { isLoading: isLoggedOutSuccess }] = useLogoutMutation();
    const navigate = useNavigate();

    // lg xl searching
    const handleSearching = (value) => {
        setSearchQuerys(value);
        setIsVisableOnSearching(searchQuerys.trim() !== "");
    };

    // navigate to actual search bar for sm
    const handleTrimSearching = (value) => {
        setSearchQuerys(value);
        setIsTrim(searchQuerys.trim() !== "");
    };

    // searching product for sm
    const handleSearchQuery = (value) => {
        setSearchQuerys(value);
    };

    return (
        <div className="w-[100%] h-[140px] bg-[#fffce6] sticky mb-30 left-0 top-0 z-10">
            <div className="xl:max-w-[2000px] lg:max-w-[2000px] min-[360px]:max-w=[100%] h-[140px] mx-auto bg-[#fde102] pt-2">
                <div className="h-[60px] bg-[#fffce6] flex items-center justify-between xl:px-[100px] lg:px-[100px] min-[360px]:px-[20px]">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `flex items-center gap-2 font-medium  ${
                                isActive && "text-green-400"
                            } `
                        }>
                        <div className="flex items-center justify-center gap-[2px]">
                            <div className="w-[50px] h-[50px]">
                                <img
                                    className="w-[100%] h-[100%]"
                                    src="https://i.ibb.co/02dGHrL/logo.png"
                                    alt=""
                                />
                            </div>
                            <h1 className="xl:text-[2rem] lg:text-[2rem] min-[360px]:text-[1.6rem] font-[600] text-[#111] tracking-tight">
                                Noipun
                            </h1>
                        </div>
                    </NavLink>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center gap-2">
                            {/* Auth sm */}
                            <div className="xl:hidden lg:hidden min-[360px]:block">
                                {auth ? (
                                    <span
                                        onClick={() => loggedOut()}
                                        className={({ isActive }) =>
                                            `font-medium cursor-pointer  ${
                                                isActive && "text-green-400"
                                            } `
                                        }>
                                        <MdLogout className="text-[1.3rem] text-[#d1cfcf] duration-[.5s] cursor-pointer" />
                                    </span>
                                ) : (
                                    <NavLink
                                        to={"/login"}
                                        className={({ isActive }) =>
                                            `font-medium  ${
                                                isActive && "text-green-400"
                                            } `
                                        }>
                                        <MdLogin className="text-[1.3rem] text-[#d1cfcf] duration-[.5s] cursor-pointer" />
                                    </NavLink>
                                )}
                            </div>
                            {/* Auth lg ,xl */}
                            <div className="xl:block lg:block min-[360px]:hidden">
                                {auth ? (
                                    <>
                                        <div
                                            onClick={() => navigate("/account")}
                                            className="w-[40px] h-[40px] rounded-[50%] bg-[#6868687c] cursor-pointer active:bg-[#68686897] duration-[.5s] transition-colors flex items-center justify-center">
                                            <img
                                                className="w-[90%] h-[90%] rounded-[50%]"
                                                src={
                                                    avatar ||
                                                    "https://i.ibb.co/hV3TMVY/avatar-nobody.png"
                                                }
                                                alt={name}
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <NavLink
                                        to={"/login"}
                                        className={({ isActive }) =>
                                            `font-medium text-[.950rem] text-[#60a1e1] hover:text-[#288aed] duration-[.4s] tracking-[1px]  ${
                                                isActive && "text-green-400"
                                            } `
                                        }>
                                        Login
                                    </NavLink>
                                )}
                            </div>
                            <span className="text-[1rem] text-[#828282] mb-1">
                                |
                            </span>
                        </div>
                    </div>
                </div>
                <div className="h-[72px] flex items-center justify-between xl:px-[80px] lg:px-[80px] min-[360px]:px-[20px]">
                    {/* xl,lg */} {/* link and product droper */}
                    <div className="h-full items-center  justify-center gap-8 xl:flex lg:flex min-[360px]:hidden">
                        <NavLink
                            to={"/"}
                            className={({ isActive }) =>
                                `font-medium text-[.950rem] leading-[70px] h-full text-[#111] !font-[500] tracking-[1px]  ${
                                    isActive && "text-green-400"
                                } `
                            }>
                            Home
                        </NavLink>
                        <NavLink
                            to={"/product"}
                            className={({ isActive }) =>
                                ` text-[.950rem] leading-[70px] h-full text-[#111] font-[500] tracking-[1px] ${
                                    isActive && "text-green-400"
                                } `
                            }>
                            Products
                        </NavLink>
                        {/* <NavLink className="text-[.950rem] h-full leading-[70px] text-[#111] font-[500] tracking-[1px]">
                            Blog
                        </NavLink> */}
                    </div>
                    <div className="flex items-center justify-center gap-[2px]">
                        {/* lg,xl */} {/* category droper */}
                        {/* xl,lg */}
                        {/* search  */}
                        {/* sm */} {/* memu */}
                        <div className="xl:hidden lg:hidden min-[360px]:block">
                            <div
                                onClick={() => setIsMenu(true)}
                                className="bg-[#fde102] w-[40px] h-[40px] flex justify-center items-center rounded-md cursor-pointer active:scale-[.9] duration-[.5s] transition">
                                <TfiMenuAlt className="text-[2rem] text-[#111]" />
                            </div>
                            <div
                                className={`fixed top-0 left-0 bg-[#fffce6] w-[70vw] h-[100vh] p-2 rounded-r-md duration-[.5s] transition ${
                                    isMenu
                                        ? "translate-x-0"
                                        : "-translate-x-full"
                                }`}>
                                <div className="flex justify-between ">
                                    {/* user Profile */}
                                    {auth && (
                                        <div className="flex items-center gap-1">
                                            <NavLink to={"/account"}>
                                                <div className="w-[45px] h-[45px] rounded-[50%] bg-[#fde102] cursor-pointer active:bg-[#68686897] duration-[.5s] transition-colors flex items-center justify-center">
                                                    <img
                                                        className="w-[90%] h-[90%] rounded-[50%]"
                                                        src={avatar}
                                                        alt=""
                                                    />
                                                </div>
                                            </NavLink>
                                            {/* 10-12 letter only in user name show slice() */}
                                            <p className="text-[.900rem] text-[#111] tracking-wide flex flex-col">
                                                <span>{name}</span>
                                                <span className="text-[.800rem] text-[#ff3191]">
                                                    {email}
                                                </span>
                                            </p>
                                        </div>
                                    )}
                                    {/* close menu */}
                                    <div
                                        onClick={() => setIsMenu(false)}
                                        className="w-[30px] h-[30px] rounded-[50%] bg-[#fde102] flex items-center justify-center cursor-pointer active:scale-[.9] duration-[.5s] transition">
                                        <IoMdClose className="text-[1.5rem] text-[#ffffff]" />
                                    </div>
                                </div>
                                <hr className="my-4 h-[.5px] bg-[#fff]" />
                                {/* menu links */}
                                <div className="overflow-y-auto relative h-[100vh]">
                                    <ul className="absolute w-[100%]">
                                        <li className="flex items-center gap-2 bg-[#fde102] duration-[.3s] transition-colors active:bg-[#4f6e8793] py-2 px-2 text-[1.2rem] text-[#ffffff] rounded-sm">
                                            <FaHome className="text-[1.5rem]" />
                                            <NavLink
                                                to={"/"}
                                                className={({ isActive }) =>
                                                    `w-[100%] h-[100%] ${
                                                        isActive &&
                                                        "text-green-400"
                                                    } `
                                                }>
                                                Home
                                            </NavLink>
                                        </li>
                                        <hr className="my-1 h-[.5px] bg-[#fde102]" />
                                        <li className="flex items-center gap-2 bg-[#fde102] duration-[.3s] transition-colors active:bg-[#fffce6] py-2 px-2 text-[1.2rem] text-[#ffffff] rounded-sm">
                                            <MdContactPhone className="text-[1.5rem]" />
                                            <NavLink
                                                to={"/product"}
                                                className={({ isActive }) =>
                                                    `w-[100%] h-[100%]${
                                                        isActive &&
                                                        "text-green-400"
                                                    } `
                                                }>
                                                Products
                                            </NavLink>
                                        </li>
                                        <hr className="my-1 h-[.5px] bg-[#fff]" />
                                        {auth ? (
                                            <span onClick={() => loggedOut()}>
                                                <li className="flex items-center gap-1 bg-[#fde102] duration-[.3s] transition-colors active:bg-[#4f6e8793] py-2 px-2 text-[1.2rem] text-[#ffffff] rounded-sm">
                                                    <MdLogout className="text-[1.5rem]" />
                                                    <span className="w-[100%] h-[100%]">
                                                        Logout
                                                    </span>
                                                </li>
                                            </span>
                                        ) : (
                                            <NavLink to={"/login"}>
                                                <li className="flex items-center gap-1 bg-[#fde102] duration-[.3s] transition-colors active:bg-[#4f6e8793] py-2 px-2 text-[1.2rem] text-[#ffffff] rounded-sm">
                                                    <MdLogin className="text-[1.5rem]" />
                                                    <span className="w-[100%] h-[100%]">
                                                        Login
                                                    </span>
                                                </li>
                                            </NavLink>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* sm */} {/* search  */}
                </div>
            </div>
        </div>
    );
};

export default Static_nav;
