import React from 'react'
import {TiArrowSortedDown} from "react-icons/ti"
import {BiSearchAlt2} from "react-icons/bi"
import styles from "./navbar.module.css"
import { Link, useNavigate } from 'react-router-dom'
import {BsCartCheckFill} from "react-icons/bs";
import {CgSmileMouthOpen} from "react-icons/cg"
import {AiOutlinePercentage} from "react-icons/ai"
import PincodeDrawer from '../PincodeDrawer/PincodeDrawer'
import Login from '../Login/Login'

const Navbar = () => {
    const navigate = useNavigate();
    const GoToHomePage = () => {
        navigate("/")
    }
  return (
    <div style={{backgroundColor:"#37857e",position:"sticky", top:"0px",zIndex:"1"}}>
        <div className={styles.navbar}>
            <div className={styles.imageDiv}>
                <img style={{cursor:"pointer"}} onClick={GoToHomePage} src="https://i.postimg.cc/rmXnhdV7/Screenshot-2022-07-20-at-1-48-13-AM.png" alt="" 
                />
            </div>
            <div className={styles.inputDiv}>
                <PincodeDrawer/>
                <TiArrowSortedDown className={styles.downArrowIcon}/>
                <input className={styles.inputSection} type="text" placeholder='Search Medicines/Healthcare Products' />
                <button className={styles.searchIcon}><BiSearchAlt2/></button>
            </div>
        </div>
        <div className={styles.linksDiv}>
            <div className={styles.links1}>
                <Link to="/order-medicine-order" className={styles.mainLink}>Order Medicines</Link>
                <a href='#health-care' className={styles.mainLink}>Healthcare Products</a>
                <a href='#lab-tests' className={styles.mainLink}>Lab Tests</a>
                <a href='#rtpcr' className={styles.mainLink}>RTPCR</a>
            </div>
            <div className={styles.links2}>
                <div className={styles.links2Icons}>
                    <AiOutlinePercentage style={{fontSize:"18px",
                    marginRight:"10px"}}/>
                    <a href='#offers'>Offers</a>
                </div>
                <div className={styles.links2Icons}>
                    <CgSmileMouthOpen style={{fontSize:"18px",
                    marginRight:"10px"}}/>
                    {/* <a href='#login-signup'>Login / SignUp</a> */}
                    <Login/>
                </div>
                <div className={styles.links2Icons}>
                    <BsCartCheckFill style={{fontSize:"18px",
                    marginRight:"10px"}}/>
                    <a href='#cart'>Cart</a>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar