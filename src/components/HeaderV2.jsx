import { useEffect, useState } from "react";
import {
    FaBoxOpen,
    FaFacebookF,
    FaHome,
    FaInstagram,
    FaLongArrowAltLeft,
    FaMicroblog,
    FaPlus,
    FaSearch,
    FaCartPlus
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
    MdContactPhone,
    MdKeyboardArrowDown,
    MdLogin,
    MdLogout,
    MdOutlineCategory,
    MdShoppingBasket,
} from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import useAuth from "../Hooks/useAuth";
import { useSelector } from "react-redux";
import { accountSelector } from "../features/accountSlice/accountSelector";

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
    const [isScrollHeaderGone, setIsScrollHeaderGone] = useState(true);
    const auth = useAuth()
    const { user } = useSelector(accountSelector)
    const { avatar, name } = user || {}
    // const language = ["English", "Bangla"];
    // const nm = language?.find((lg, i) => i === selectLang);

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

    // useEffect(() => {
    //     window.document.onclick=
    //         setIsMenu(false)

    // }, [setIsMenu])
    const isHeader = () => {
        if (window.scrollY < 200) {
            setIsScrollHeaderGone(true);
        } else {
            setIsScrollHeaderGone(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', isHeader);
        return () => {
            window.removeEventListener('scroll', isHeader);
        }
    }, []);

    return (
        <div className={`w-[100%] xl:h-[140px] lg:h-[140px] min-[300px]:h-[120px] bg-[#fffce6] sticky mb-30 left-0 z-10 ${isScrollHeaderGone ? "top-0" : "-top-[100%]"}`}>
            <div className="xl:max-w-[1400px] lg:max-w-[100%] min-[300px]:max-w-[100%] mx-auto bg-[#fde102] pt-2">
                <div className="h-[60px] bg-[#fffce6] flex items-center justify-between xl:px-[100px] lg:px-[100px] min-[300px]:px-[20px]">
                    <Link to="/">
                        <div className="flex items-center justify-center gap-[2px]">
                            <div className="w-[50px] h-[50px]">
                                <img
                                    className="w-[100%] h-[100%]"
                                    src="https://i.ibb.co/02dGHrL/logo.png"
                                    alt=""
                                />
                            </div>
                            <h1 className="xl:text-[2rem] lg:text-[2rem] min-[300px]:text-[1.6rem] font-[600] text-[#111] tracking-tight">
                                Noipun
                            </h1>
                        </div>
                    </Link>
                    <div className="flex items-center gap-2">
                        {/* xl,lg */} {/* language */}
                        {/* <div className="w-[100px] h-[30px] items-center justify-center gap-1 relative z-10 xl:flex lg:flex min-[300px]:hidden">
                            <span
                                className="text-[1.1rem] text-[#111] tracking-[1px] font-[400] cursor-pointer"
                                onClick={() => setLgdroper(!lgdroper)}>
                                {nm}
                            </span>
                            <MdKeyboardArrowDown
                                className={`text-[1.1rem] text-[#111] mt-1 duration-[.4s] transition ${
                                    lgdroper
                                        ? "rotate-[180deg]"
                                        : "rotate-[0deg"
                                }`}
                            />
                            <ul
                                onChange={(e) => setSelectLang(e.target.value)}
                                className={`w-[100px] h-fit bg-[#fde102] absolute top-[35px] left-0 p-1 rounded-sm duration-[.3s] transition ${
                                    lgdroper
                                        ? "opacity-[1] translate-y-0"
                                        : "translate-y-full opacity-0"
                                }`}>
                                {language?.map((lg, i) => (
                                    <li
                                        key={i}
                                        value={i + 1}
                                        onClick={() => selectLang(i + 1)}
                                        className="py-1 px-1 text-[.900rem] text-[#111] font-[400] tracking-[.5px] hover:bg-[#fffce6] cursor-pointer rounded-sm">
                                        {lg}
                                    </li>
                                ))}
                            </ul>
                        </div> */}
                        <div className="flex items-center justify-center gap-2">
                            {/* Auth sm */}

                            <div className="xl:block lg:block min-[300px]:hidden bg-transparent rounded-full p-3">
                                <Link to={"/cart"}>
                                    <FaCartPlus className="text-[1.5rem] text-[#fde102] hover:text-[#e8d64f] duration-[.5s] transition-colors cursor-pointer" />
                                </Link>
                            </div>

                            <div className="xl:hidden lg:hidden min-[300px]:block">
                                <Link to={"/login"}>
                                    <MdLogin className="text-[1.3rem] text-[#d1cfcf] duration-[.5s] cursor-pointer" />
                                </Link>
                            </div>
                            {/* Auth lg ,xl */}
                            <div className="xl:block lg:block min-[300px]:hidden">
                                {auth ? (
                                    <>
                                        <div onClick={() => navigate('/account')} className="w-[40px] h-[40px] rounded-[50%] bg-[#6868687c] cursor-pointer active:bg-[#68686897] duration-[.5s] transition-colors flex items-center justify-center">
                                            <img
                                                className="w-[90%] h-[90%] rounded-[50%]"
                                                src={avatar}
                                                alt={name}
                                            />
                                        </div>
                                    </>
                                ) : (
                                    // <Link
                                    //     to={"/login"}
                                    //     //  relative z-[4] hover:before:content-[''] hover:before:top-[0] hover:before:left-0 hover:before:right-0 hover:before:bg-[#feffde] hover:before:rounded-sm hover:before:z-[-1] hover:before:shadow-[inset_-3px_-3px_7px_#ffffff_,_inset_3px_3px_5px_#ceced1]
                                    //     className="text-[.950rem] py-2 px-3 rounded-sm  bg-[#db38387c] text-[#ffffff] hover:text-[#ffffff] duration-[.4s] transition-colors tracking-[1px]">
                                    //     Login
                                    // </Link>
                                    <Link to={"/login"}>
                                        <MdLogin className="text-[1.3rem] text-[#171717] duration-[.5s] cursor-pointer" />
                                    </Link>
                                )}
                            </div>
                            <span className="text-[1rem] text-[#828282] mb-1">
                                |
                            </span>
                            <div className="flex items-center gap-2">
                                <FaFacebookF className="text-[1.2rem] text-[#606060] hover:text-[#727272] duration-[.5s] cursor-pointer" />
                                <FaInstagram className="text-[1.3rem] text-[#606060] hover:text-[#727272] duration-[.5s] cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:h-[72px] lg:h-[72px] min-[300px]:h-[50px] flex items-center justify-between xl:px-[80px] lg:px-[80px] min-[300px]:px-[20px]">
                    {/* xl,lg */} {/* link and product droper */}
                    <div className="h-full items-center  justify-center gap-8 xl:flex lg:flex min-[300px]:hidden">
                        <Link
                            to={'/'}
                            className="text-[.950rem] leading-[70px] h-full text-[#111] font-[500] tracking-[1px]">
                            Home
                        </Link>
                        <Link
                            to={'/contact'}
                            className="text-[.950rem] leading-[70px]  h-full text-[#111] font-[500] tracking-[1px]">
                            Contact
                        </Link>
                        <div className="text-[.950rem] h-full text-[#111] font-[500] tracking-[1px] flex items-center cursor-pointer group">
                            Our Products{" "}
                            <MdKeyboardArrowDown className="text-[1.1rem] h-full text-[#111] ml-1 mt-1 duration-[.4s] transition rotate-[180deg] group-hover:rotate-[0deg]" />
                            {/* product menu */}
                            <label className="fixed top-[140px] left-0 z-10 w-[100vw] h-fit hidden group-hover:block duration-[1s] transition bg-[#fffce6] border-t-[0.1px] border-t-[#fff] px-[50px]">
                                <div className="grid grid-cols-3 gap-3">
                                    <ul className="p-2">
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] hover:bg-[#fde102] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                            Bag
                                        </li>
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] hover:bg-[#fde102] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                            Painting
                                        </li>
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] hover:bg-[#fde102] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                            Mug
                                        </li>
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] hover:bg-[#fde102] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                            Shares
                                        </li>
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] hover:bg-[#fde102] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                            Panjabi
                                        </li>
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] hover:bg-[#fde102] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                            Wood Draft
                                        </li>
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] hover:bg-[#fde102] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                            Painted Plates
                                        </li>
                                    </ul>
                                    <ul className="p-2">
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] hover:bg-[#fde102] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                            Bag
                                        </li>
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] hover:bg-[#fde102] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                            Painting
                                        </li>
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] hover:bg-[#fde102] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                            Mug
                                        </li>
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] hover:bg-[#fde102] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                            Shares
                                        </li>
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] hover:bg-[#fde102] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                            Panjabi
                                        </li>
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] hover:bg-[#fde102] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                            Wood Draft
                                        </li>
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] hover:bg-[#fde102] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                            Painted Plates
                                        </li>
                                    </ul>
                                    <ul className="p-2">
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] hover:bg-[#fde102] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                            Bag
                                        </li>
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] hover:bg-[#fde102] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                            Painting
                                        </li>
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] hover:bg-[#fde102] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                            Mug
                                        </li>
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] hover:bg-[#fde102] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                            Shares
                                        </li>
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] hover:bg-[#fde102] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                            Panjabi
                                        </li>
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] hover:bg-[#fde102] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                            Wood Draft
                                        </li>
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] hover:bg-[#fde102] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                            Painted Plates
                                        </li>
                                    </ul>
                                </div>
                            </label>
                        </div>
                        {/* <Link className="text-[.950rem] h-full leading-[70px] text-[#111] font-[500] tracking-[1px]">
                            Blog
                        </Link> */}
                    </div>
                    <div className="flex items-center justify-center gap-[2px]">
                        {/* lg,xl */} {/* category droper */}
                        <div className="w-[150px] h-[50px] bg-[#fffce6] rounded-l-md relative xl:flex lg:flex min-[300px]:hidden items-center justify-center">
                            <div
                                onClick={() => setCateDroper(!cateDroper)}
                                className="flex items-center justify-center gap-[2px] text-[1.1rem] text-[#111] font-[500] tracking-wider cursor-pointer w-[100%] h-[100%]">
                                Category{" "}
                                <MdKeyboardArrowDown
                                    className={`text-[1.2rem] text-[#111] mt-1 duration-[.4s] transition ${cateDroper
                                        ? "rotate-[180deg]"
                                        : "rotate-[0deg"
                                        }`}
                                />{" "}
                            </div>
                            {/* category menu */}
                            <ul
                                className={`absolute top-[60px] left-0 bg-[#fde102] z-10 h-fit rounded-sm w-[230px] p-2 duration-[.3s] transition ${cateDroper
                                    ? "opacity-[1] translate-y-0"
                                    : "translate-y-full opacity-0"
                                    }`}>
                                <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-#fde102] hover:bg-[#fffce6] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                    flower cotone
                                </li>
                                <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-#fde102] hover:bg-[#fffce6] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                    embodery cotone
                                </li>
                                <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-#fde102] hover:bg-[#fffce6] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                    list cotone
                                </li>
                                <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-#fde102] hover:bg-[#fffce6] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                    print cotone
                                </li>
                                <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-#fde102] hover:bg-[#fffce6] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                    sky cotone
                                </li>
                                <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] hover:bg-[#fffce6] duration-[.3s] transition-colors cursor-pointer rounded-sm flex items-center justify-between relative group">
                                    eirthestic cotone{" "}
                                    <MdKeyboardArrowDown className="text-[1.2rem] rotate-[90deg] duration-[.5s] transition group-hover:-rotate-[90deg]" />
                                    {/* sub category menu */}
                                    <ul className="absolute -right-[135px] top-0 bg-[#fde102] rounded-sm p-1 hidden group-hover:block">
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] bg-[#fde102] hover:bg-[#fffce6] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                            flower cotone
                                        </li>
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] bg-[#fde102] hover:bg-[#fffce6] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                            embodery cotone
                                        </li>
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] bg-[#fde102] hover:bg-[#fffce6] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                            embodery cotone
                                        </li>
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] bg-[#fde102] hover:bg-[#fffce6] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                            list cotone
                                        </li>
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] bg-[#fde102] hover:bg-[#fffce6] duration-[.3s] transition-colors cursor-pointer rounded-sm">
                                            print cotone
                                        </li>
                                    </ul>
                                </li>
                                <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-#fde102] hover:bg-[#fffce6] cursor-pointer rounded-sm">
                                    sensitive cotone
                                </li>
                            </ul>
                        </div>
                        {/* xl,lg */}
                        {/* search  */}
                        <div className="items-center justify-center xl:flex lg:flex min-[300px]:hidden">
                            <div className="xl:w-[400px] lg:w-[400px] h-[50px] relative">
                                <input
                                    type="text"
                                    className="w-[100%] h-[100%] ps-2 text-[1.1rem] font-[400] text-black tracking-wide placeholder:text-gray-400 placeholder:text-[.950rem] placeholder:font-[500] placeholder:tracking-tight outline-none border focus:border-[#45accb] duration-[.3s] transition"
                                    placeholder="Search..."
                                    onChange={(e) =>
                                        handleSearching(e.target.value)
                                    }
                                />
                                {isVisableOnSearching && (
                                    <ul className="absolute top-[53px] w-[400px] h-fit bg-[#fde102] rounded-sm p-1">
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] bg-[#fde102] hover:bg-[#fffce6] duration-[.3s] transition-colors rounded-sm flex items-center justify-between">
                                            <span className="cursor-pointer">
                                                flower cotone
                                            </span>
                                            <span className="text-[.850rem] text-[#4670b9] hover:text-[#6490dd] duration-[.3s] transition-colors cursor-pointer">
                                                remove
                                            </span>
                                        </li>
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] bg-[#fde102] hover:bg-[#fffce6] duration-[.3s] transition-colors rounded-sm flex items-center justify-between">
                                            <span className="cursor-pointer">
                                                embodery cotone
                                            </span>
                                            <span className="text-[.850rem] text-[#4670b9] hover:text-[#6490dd] duration-[.3s] transition-colors cursor-pointer">
                                                remove
                                            </span>
                                        </li>
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] bg-[#fde102] hover:bg-[#fffce6] duration-[.3s] transition-colors rounded-sm flex items-center justify-between">
                                            <span className="cursor-pointer">
                                                embodery cotone
                                            </span>
                                            <span className="text-[.850rem] text-[#4670b9] hover:text-[#6490dd] duration-[.3s] transition-colors cursor-pointer">
                                                remove
                                            </span>
                                        </li>
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] bg-[#fde102] hover:bg-[#fffce6] duration-[.3s] transition-colors rounded-sm flex items-center justify-between">
                                            <span className="cursor-pointer">
                                                list cotone
                                            </span>
                                            <span className="text-[.850rem] text-[#4670b9] hover:text-[#6490dd] duration-[.3s] transition-colors cursor-pointer">
                                                remove
                                            </span>
                                        </li>
                                        <li className="py-2 px-2 text-[.950rem] text-[#111] font-[400] tracking-[.5px] bg-[#fde102] hover:bg-[#fffce6] duration-[.3s] transition-colors rounded-sm flex items-center justify-between">
                                            <span className="cursor-pointer">
                                                print cotone
                                            </span>
                                            <span className="text-[.850rem] text-[#4670b9] hover:text-[#6490dd] duration-[.3s] transition-colors cursor-pointer">
                                                remove
                                            </span>
                                        </li>
                                    </ul>
                                )}
                            </div>

                            <div className="bg-[#fffce6] h-[50px] w-[50px] flex items-center justify-center xl:rounded-r-md lg:rounded-r-md cursor-pointer active:scale-[.9] duration-[.5s] transition">
                                <FaSearch className="text-[1.2rem] text-[#111]" />
                            </div>
                        </div>
                        {/* sm */} {/* memu */}
                        <div className="xl:hidden lg:hidden min-[300px]:block">
                            <div
                                onClick={() => setIsMenu(true)}
                                className="bg-[#fde102] w-[40px] h-[40px] flex justify-center items-center rounded-md cursor-pointer active:scale-[.9] duration-[.5s] transition">
                                <TfiMenuAlt className="text-[2rem] text-[#111]" />
                            </div>
                            <div
                                className={`fixed top-0 left-0 bg-[#fffce6] w-[70vw] h-[100vh] p-2 rounded-r-md duration-[.5s] transition ${isMenu
                                    ? "translate-x-0"
                                    : "-translate-x-full"
                                    }`}>
                                <div className="flex justify-between ">
                                    {/* user Profile */}
                                    <div className="flex items-center gap-1">
                                        <div className="w-[45px] h-[45px] rounded-[50%] bg-[#fde102] cursor-pointer active:bg-[#68686897] duration-[.5s] transition-colors flex items-center justify-center">
                                            <img
                                                className="w-[90%] h-[90%] rounded-[50%]"
                                                src="https://i.ibb.co/XkKdSSh/developer-photo.png"
                                                alt=""
                                            />
                                        </div>
                                        {/* 10-12 letter only in user name show slice() */}
                                        <p className="text-[.900rem] text-[#111] tracking-wide flex flex-col">
                                            <span>User Name</span>
                                            <span className="text-[.800rem] text-[#ff3191]">
                                                +8801234323232
                                            </span>
                                        </p>
                                    </div>
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
                                            <Link to={'/'} className="w-[100%] h-[100%]">
                                                Home
                                            </Link>
                                        </li>
                                        <hr className="my-1 h-[.5px] bg-[#fde102]" />
                                        <li className="flex items-center gap-2 bg-[#fde102] duration-[.3s] transition-colors active:bg-[#fffce6] py-2 px-2 text-[1.2rem] text-[#ffffff] rounded-sm">
                                            <MdContactPhone className="text-[1.5rem]" />
                                            <Link className="w-[100%] h-[100%]">
                                                Contact
                                            </Link>
                                        </li>
                                        <hr className="my-1 h-[.5px] bg-[#fde102]" />
                                        <li className="flex items-center gap-2 bg-[#fde102] duration-[.3s] transition-colors active:bg-[#4f6e8793] py-2 px-2 text-[1.2rem] text-[#ffffff] rounded-sm">
                                            <FaMicroblog className="text-[1.5rem]" />
                                            <Link className="w-[100%] h-[100%]">
                                                Blog
                                            </Link>
                                        </li>
                                        <hr className="my-1 h-[.5px] bg-[#fff]" />
                                        <li>
                                            <label
                                                htmlFor="category"
                                                className="flex items-center justify-between gap-2 bg-[#fde102] duration-[.3s] transition-colors active:bg-[#4f6e8793] py-2 px-2 text-[1.2rem] text-[#ffffff] rounded-sm">
                                                <div className="flex items-center gap-1">
                                                    <MdOutlineCategory className="text-[1.5rem]" />
                                                    <label className="w-[100%] h-[100%]">
                                                        Category
                                                    </label>
                                                </div>
                                                <FaPlus className="text-[1.1rem]" />
                                            </label>
                                            <input
                                                className="hidden w-[100%] h-[100%] peer"
                                                type="checkbox"
                                                id="category"
                                            />
                                            <ul className="mt-1 hidden peer-checked:block peer-checked:duration-[.5s] peer-checked:transition">
                                                <li className="flex items-center justify-between gap-2 bg-[#fde102] duration-[.3s] transition-colors active:bg-[#303f4ccb] py-2 px-2 text-[1.2rem] text-[#ffffff] rounded-sm">
                                                    hunting schare paint
                                                </li>
                                                <hr className="my-1 h-[.5px] bg-[#fff]" />
                                                <li className="flex items-center justify-between gap-2 bg-[#fde102] duration-[.3s] transition-colors active:bg-[#303f4ccb] py-2 px-2 text-[1.2rem] text-[#ffffff] rounded-sm">
                                                    flower cotone
                                                </li>
                                                <hr className="my-1 h-[.5px] bg-[#fff]" />
                                                <li className="flex items-center justify-between gap-2 bg-[#fde102] duration-[.3s] transition-colors active:bg-[#303f4ccb] py-2 px-2 text-[1.2rem] text-[#ffffff] rounded-sm">
                                                    embodery cotone
                                                </li>
                                                <hr className="my-1 h-[.5px] bg-[#fff]" />
                                                <li className="flex items-center justify-between gap-2 bg-[#fde102] duration-[.3s] transition-colors active:bg-[#303f4ccb] py-2 px-2 text-[1.2rem] text-[#ffffff] rounded-sm">
                                                    list cotone
                                                </li>
                                                <hr className="my-1 h-[.5px] bg-[#fff]" />
                                                <li className="flex items-center justify-between gap-2 bg-[#fde102] duration-[.3s] transition-colors active:bg-[#303f4ccb] py-2 px-2 text-[1.2rem] text-[#ffffff] rounded-sm">
                                                    print cotone
                                                </li>
                                                <hr className="my-1 h-[.5px] bg-[#fff]" />
                                                <li className="flex items-center justify-between gap-2 bg-[#fde102] duration-[.3s] transition-colors active:bg-[#303f4ccb] py-2 px-2 text-[1.2rem] text-[#ffffff] rounded-sm">
                                                    sky cotone
                                                </li>
                                            </ul>
                                        </li>
                                        <hr className="my-1 h-[.5px] bg-[#fff]" />
                                        <li>
                                            <label
                                                htmlFor="Products"
                                                className="flex items-center justify-between gap-2 bg-[#fde102] duration-[.3s] transition-colors active:bg-[#4f6e8793] py-2 px-2 text-[1.2rem] text-[#ffffff] rounded-sm">
                                                <div className="flex items-center gap-1">
                                                    <FaBoxOpen className="text-[1.5rem]" />
                                                    <label className="w-[100%] h-[100%]">
                                                        Products
                                                    </label>
                                                </div>
                                                <FaPlus className="text-[1.1rem]" />
                                            </label>
                                            <input
                                                className="hidden w-[100%] h-[100%] peer"
                                                type="checkbox"
                                                id="Products"
                                            />
                                            <ul className="mt-1 hidden peer-checked:block peer-checked:duration-[.5s] peer-checked:transition">
                                                <li className="flex items-center justify-between gap-2 bg-[#fde102] duration-[.3s] transition-colors active:bg-[#303f4ccb] py-2 px-2 text-[1.2rem] text-[#ffffff] rounded-sm">
                                                    Bag
                                                </li>
                                                <hr className="my-1 h-[.5px] bg-[#fff]" />
                                                <li className="flex items-center justify-between gap-2 bg-[#fde102] duration-[.3s] transition-colors active:bg-[#303f4ccb] py-2 px-2 text-[1.2rem] text-[#ffffff] rounded-sm">
                                                    Painting
                                                </li>
                                                <hr className="my-1 h-[.5px] bg-[#fff]" />
                                                <li className="flex items-center justify-between gap-2 bg-[#fde102] duration-[.3s] transition-colors active:bg-[#303f4ccb] py-2 px-2 text-[1.2rem] text-[#ffffff] rounded-sm">
                                                    embodery cotone
                                                </li>
                                                <hr className="my-1 h-[.5px] bg-[#fff]" />
                                                <li className="flex items-center justify-between gap-2 bg-[#fde102] duration-[.3s] transition-colors active:bg-[#303f4ccb] py-2 px-2 text-[1.2rem] text-[#ffffff] rounded-sm">
                                                    list cotone
                                                </li>
                                                <hr className="my-1 h-[.5px] bg-[#fff]" />
                                                <li className="flex items-center justify-between gap-2 bg-[#fde102] duration-[.3s] transition-colors active:bg-[#303f4ccb] py-2 px-2 text-[1.2rem] text-[#ffffff] rounded-sm">
                                                    print cotone
                                                </li>
                                                <hr className="my-1 h-[.5px] bg-[#fff]" />
                                                <li className="flex items-center justify-between gap-2 bg-[#fde102] duration-[.3s] transition-colors active:bg-[#303f4ccb] py-2 px-2 text-[1.2rem] text-[#ffffff] rounded-sm">
                                                    sky cotone
                                                </li>
                                            </ul>
                                        </li>
                                        <hr className="my-1 h-[.5px] bg-[#fff]" />
                                        <li className="flex items-center gap-1 bg-[#fde102] duration-[.3s] transition-colors active:bg-[#4f6e8793] py-2 px-2 text-[1.2rem] text-[#ffffff] rounded-sm">
                                            <MdShoppingBasket className="text-[1.5rem]" />
                                            <Link
                                                to={'/cart'}
                                                className="w-[100%] h-[100%]">
                                                Cart
                                            </Link>
                                        </li>
                                        <hr className="my-1 h-[.5px] bg-[#fff]" />
                                        <li className="flex items-center gap-1 bg-[#fde102] duration-[.3s] transition-colors active:bg-[#4f6e8793] py-2 px-2 text-[1.2rem] text-[#ffffff] rounded-sm">
                                            <MdLogout className="text-[1.5rem]" />
                                            <span className="w-[100%] h-[100%]">
                                                Logout
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* sm */} {/* search  */}
                    <div className="xl:hidden lg:hidden min-[300px]:block relative">
                        <div
                            onClick={() => setIsSearchBar(!isSearchBar)}
                            className="bg-[#fde102] h-[40px] w-[40px] flex items-center justify-center rounded-md cursor-pointer active:scale-[.9] duration-[.5s] transition">
                            <FaSearch className="text-[1.2rem] text-[#111]" />
                        </div>
                        <div
                            className={`fixed left-0 top-[120px] w-[100%] h-[45px] z-10 duration-[.8s] transition ${isSearchBar
                                ? "translate-x-0"
                                : "-translate-x-full"
                                }`}>
                            <input
                                type="text"
                                className="w-[100%] h-[100%] ps-2 text-[1.4rem] font-[400] text-black tracking-wide placeholder:text-gray-400 placeholder:text-[.950rem] placeholder:font-[500] placeholder:tracking-tight outline-none border focus:border-[#45accb] duration-[.3s] transition"
                                placeholder="Search..."
                                value={searchValue}
                                onChange={(e) => {
                                    handleTrimSearching(e.target.value);
                                    setSearchValue(e.target.value);
                                }}
                            />
                        </div>
                        {isTrim && (
                            <div
                                className={`fixed top-0 left-0 w-[100%] h-[100vh] z-[100] bg-[#fde102] p-2`}>
                                <div className="w-[100%] h-[50px] z-10 duration-[.8s] transition rounded-md relative">
                                    <input
                                        type="text"
                                        className="w-[100%] h-[100%] ps-2 text-[1.4rem] font-[400] text-black tracking-wide placeholder:text-gray-400 placeholder:text-[1.2rem] placeholder:font-[500] placeholder:tracking-tight outline-none border focus:border-[#45accb] duration-[.3s] transition"
                                        placeholder="Search..."
                                        value={searchValue}
                                        autoFocus
                                        onChange={(e) => {
                                            handleSearchQuery(e.target.value);
                                            setSearchValue(e.target.value);
                                        }}
                                    />
                                    {/* Clear Searchbar */}
                                    <span onClick={() => setSearchQuerys("do")}>
                                        <IoMdClose className="text-[#000] text-[1.3rem] absolute right-2 top-4 cursor-pointer" />
                                    </span>
                                </div>
                                <ul className="mt-2 grid grid-cols-3 gap-2">
                                    <li className="text-[1rem] text-[#111] font-[500] tracking-wide bg-[#fffce6] p-3 rounded-3xl flex items-center justify-center">
                                        Mug
                                    </li>
                                    <li className="text-[1rem] text-[#111] font-[500] tracking-wide bg-[#fffce6] p-3 rounded-3xl flex items-center justify-center">
                                        Bug
                                    </li>
                                    <li className="text-[1rem] text-[#111] font-[500] tracking-wide bg-[#fffce6] p-3 rounded-3xl flex items-center justify-center">
                                        Jug
                                    </li>
                                </ul>
                                {/* back */}
                                <div
                                    onClick={() => setIsTrim(false)}
                                    className="absolute left-0 top-10 w-[50px] h-[40px] bg-[#263a49] z-[120] flex items-center justify-center rounded-r-md">
                                    <FaLongArrowAltLeft className="text-[#ffff] text-[2rem] animate-pulse" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Static_nav;
