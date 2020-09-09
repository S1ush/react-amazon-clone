import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div type="text" className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
        {/* logo */}
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionlineone">hello guest</span>
          <span className="header__optionlinesecond">Sign in</span>
        </div>

        <div className="header__option">
          <span className="header__optionlineone">returns</span>
          <span className="header__optionlinesecond">& Order</span>
        </div>

        <div className="header__option">
          <span className="header__optionlineone">your</span>
          <span className="header__optionlinesecond">Prime</span>
        </div>

        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionlinesecond header__basketIcon">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
