import React from "react";
import { ReactComponent as Searchicon } from '../asset/search-icon.svg'
import { ReactComponent as Urbanlogo } from '../asset/urbanlogo.svg'
import { ReactComponent as Account } from '../asset/account.svg'
import { ReactComponent as Cartlogo } from '../asset/cart-logo.svg'
import '../style/section/announcementbar.css'
import '../style/section/header.css'
import pulover from '../asset/pullover-img.png'
import floralmaxi from '../asset/floral-mexi-img.png'

function Announcementbar() {
    const opendrawer = () => { document.body.classList.add('overlay_h'); document.getElementById('on_cart').classList.add('cart_block'); }
    const openmenu = () => {
        document.body.classList.add('menuovelay'); document.getElementById('menudrawer').classList.add('menu_block');
        document.getElementsByClassName('menu_close_button')[0].style.display = 'block';
        document.getElementsByClassName('mobile-menu')[0].style.display = 'none';
        document.getElementsByClassName('navbar-mobile')[0].addEventListener('click', function (e) { e.stopPropagation(); })
    }
    const removemenu = () => {
        document.body.classList.remove('menuovelay'); document.getElementById('menudrawer').classList.remove('menu_block');
        document.getElementsByClassName('menu_close_button')[0].style.display = 'none';
        document.getElementsByClassName('mobile-menu')[0].style.display = 'block';
        document.getElementsByClassName('apehead')[0].style.position = 'static';
    }
    window.onresize = function (e) {
        if (document.body.clientWidth < 990) {
            document.getElementById('menudrawer').style.visibility = 'visible';
            if (document.getElementById('menudrawer').classList.contains('menu_block')) {
                document.getElementsByClassName('apehead')[0].style.position = 'fixed';
                document.getElementsByClassName('menu_close_button')[0].style.display = 'block';
                document.body.classList.add('menuovelay');
            }
            else {
                document.getElementsByClassName('mobile-menu')[0].style.display = 'block';
                document.body.classList.remove('menuovelay');
            }
        }
        else {
            document.body.classList.remove('menuovelay');
            document.getElementsByClassName('apehead')[0].style.position = 'static';
            document.getElementById('menudrawer').style.visibility = 'hidden';
            document.getElementsByClassName('menu_close_button')[0].style.display = 'none';
            document.getElementsByClassName('mobile-menu')[0].style.display = 'none';
        }

    }
    return (
        <>
            <div className="apehead page-width">
                <div className="announcementbar-main">
                    <div className="searchbar">
                        <label className="search-icon" htmlFor="search">
                            <Searchicon />
                        </label>
                        <div className="search-input"><a href="#this" style={{ color: '#969696' }}>Search</a> </div>
                    </div>
                    <div className="mobile-menu" onClick={openmenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="icon icon-hamburger" fill="none" viewBox="0 0 18 16">
                            <path d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z" fill="currentColor">
                            </path>
                        </svg>
                    </div>
                    <button type="button" className="menu_close_button" aria-label="drawer-close" onClick={removemenu}>
                        <svg aria-hidden="true" focusable="false" fill="none" width="14" className="icon icon-close" viewBox="0 0 16 16">
                            <path d="m1 1 14 14M1 15 15 1" stroke="currentColor" strokeWidth="1.5"></path>
                        </svg>
                    </button>
                    <div className="logo">
                        <Urbanlogo />
                    </div>
                    <div className="nav-icons">
                        <a href="/account">
                            <div className="customer-account">
                                <Account />
                            </div>
                        </a>
                        <div className="cart" onClick={opendrawer}>
                            <Cartlogo />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function Header() {
    const removemenu = () => {
        document.body.classList.remove('menuovelay'); document.getElementById('menudrawer').classList.remove('menu_block');
        document.getElementsByClassName('menu_close_button')[0].style.display = 'none';
        document.getElementsByClassName('mobile-menu')[0].style.display = 'block';
    }
    return (
        <>
            <Announcementbar />
            <div className="header-main">
                <div className="navbar page-width">
                    <ul className="nav-inline navmenu">
                        <li className="navitem">
                            <a id="#dynamic-name" href="#this" className="navname">
                                <span>Men</span>
                            </a>
                        </li>
                        <li className="navitem">
                            <a id="#dynamic-name1" href="#this" className="navname">
                                <span>Women</span>
                            </a>
                        </li>
                        <li className="navitem withsubnav">
                            <a id="#dynamic-name2" href="#this" className="navname">
                                <span>Accesseories</span> ▼
                            </a>
                            <div className="submenu">
                                <ul className="submenu-items">
                                    <li className="submenu-nav">
                                        <a id="#dynamic-subname" href="#this" className="subnavname">
                                            <span>Jeans</span>
                                        </a>
                                    </li>
                                    <li className="submenu-nav">
                                        <a id="#dynamic-subname1" href="#this" className="subnavname">
                                            <span>Hoodies</span>
                                        </a>
                                    </li>
                                    <li className="submenu-nav">
                                        <a id="#dynamic-subname2" href="#this" className="subnavname">
                                            <span>T-shirt</span>
                                        </a>
                                    </li>
                                    <li className="submenu-nav">
                                        <a id="#dynamic-subname3" href="#this" className="subnavname">
                                            <span>Jackets</span>
                                        </a>
                                    </li>
                                    <li className="submenu-nav">
                                        <a id="#dynamic-subname4" href="#this" className="subnavname">
                                            <span>Jumpers</span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="nav-images">
                                    <div className="submenu-head-img">
                                        <h2>Bestseller</h2>
                                        <div className="nav-img-items">
                                            <div className="nav-fetureimage">
                                                <div className="nav-content">
                                                    <img src={pulover} alt="Pullover" loading="eager"></img>
                                                </div>
                                                <p className="p-heading">Pullover</p>
                                            </div>
                                            <div className="nav-fetureimage">
                                                <div className="nav-content">
                                                    <img src={floralmaxi} alt="Floral Maxi" loading="eager"></img>
                                                </div>
                                                <p className="p-heading">Floral Maxi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="navitem">
                            <a id="#dynamic-name3" href="#this" className="navname">
                                <span>Footwear</span>
                            </a>
                        </li>
                        <li className="navitem">
                            <a id="#dynamic-name4" href="#this" className="navname">
                                <span>Newin</span>
                            </a>
                        </li>
                        <li className="navitem">
                            <a id="#dynamic-name5" href="#this" className="navname">
                                <span>Contact</span>
                            </a>
                        </li>
                        <li className="navitem">
                            <a id="#dynamic-name6" href="#this" className="navname">
                                <span>Support</span>
                            </a>
                        </li>
                    </ul>
                </div>






                <div id="menudrawer" className="header-mobile">
                    <div className="menu-drawerouter" onClick={removemenu}>
                        <div className="navbar-mobile">
                            <ul className="nav-inline navmenu">
                                <li className="navitem">
                                    <a id="#dynamic-name" href="#this" className="navname">
                                        <span>Men</span>
                                    </a>
                                </li>
                                <li className="navitem">
                                    <a id="#dynamic-name1" href="#this" className="navname">
                                        <span>Women</span>
                                    </a>
                                </li>
                                <li className="navitem withsubnav">
                                    <a id="#dynamic-name2" href="#this" className="navname">
                                        <span>Accesseories</span> ▼
                                    </a>
                                    <div className="submenu">
                                        <ul className="submenu-items">
                                            <li className="submenu-nav">
                                                <a id="#dynamic-subname" href="#blank" className="subnavname">
                                                    <span>Jeans</span>
                                                </a>
                                            </li>
                                            <li className="submenu-nav">
                                                <a id="#dynamic-subname1" href="#blank" className="subnavname">
                                                    <span>Hoodies</span>
                                                </a>
                                            </li>
                                            <li className="submenu-nav">
                                                <a id="#dynamic-subname2" href="#blank" className="subnavname">
                                                    <span>T-shirt</span>
                                                </a>
                                            </li>
                                            <li className="submenu-nav">
                                                <a id="#dynamic-subname3" href="#blank" className="subnavname">
                                                    <span>Jackets</span>
                                                </a>
                                            </li>
                                            <li className="submenu-nav">
                                                <a id="#dynamic-subname4" href="#blank" className="subnavname">
                                                    <span>Jumpers</span>
                                                </a>
                                            </li>
                                        </ul>
                                        {/* <div className="nav-images">
                                            <div className="submenu-head-img">
                                                <h2>Bestseller</h2>
                                                <div className="nav-img-items">
                                                    <div className="nav-fetureimage">
                                                        <div className="nav-content">
                                                            <img src={pulover} alt="Pullover" loading="eager"></img>
                                                        </div>
                                                        <p className="p-heading">Pullover</p>
                                                    </div>
                                                    <div className="nav-fetureimage">
                                                        <div className="nav-content">
                                                            <img src={floralmaxi} alt="Floral Maxi" loading="eager"></img>
                                                        </div>
                                                        <p className="p-heading">Floral Maxi</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </li>
                                <li className="navitem">
                                    <a id="#dynamic-name3" href="#this" className="navname">
                                        <span>Footwear</span>
                                    </a>
                                </li>
                                <li className="navitem">
                                    <a id="#dynamic-name4" href="#this" className="navname">
                                        <span>Newin</span>
                                    </a>
                                </li>
                                <li className="navitem">
                                    <a id="#dynamic-name5" href="#this" className="navname">
                                        <span>Contact</span>
                                    </a>
                                </li>
                                <li className="navitem">
                                    <a id="#dynamic-name6" href="#this" className="navname">
                                        <span>Support</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}