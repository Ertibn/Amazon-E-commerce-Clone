import React from "react";
import classes from './Header.module.css'

import { CiLocationOn } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";


const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          {/* logo section */}
          <div className={classes.logo_container}>
            <a href="#">
              <img 
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo" 
              />
            </a>
         

          {/* deliver section */}
          <div className={classes.delivery}>
           <span>
             <CiLocationOn size={20} />
            </span>
           
           
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
          </div>

          {/* search section */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size="25" />
          </div>

          {/* other section - language, sign in, returns, cart */}
          <div className={classes.order_container}>
            <a href="" className={classes.language}>
              <img 
                src="https://www.shutterstock.com/image-vector/united-states-flag-vector-graphics-600w-2382611959.jpg" 
                alt="US flag" 
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>

            <a href="">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </a>

            <a href="">
              <p>returns</p>
              <span>& Orders</span>
            </a>

            <a href="" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
        <LowerHeader />
    </>
  );
};

export default Header;