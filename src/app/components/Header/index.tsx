import React from "react";
import "../../../style/_header.scss";
import { BsBasket3 } from "react-icons/bs";
import logo from "../../../assets/logo.png";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="flex align-center jutify-between">
            <div className="header_left flex align-center jutify-between">
              <img src={logo} alt="logo img" className="logo" />
              <ul className="flex align-center jutify-between">
                <li>
                  <a href="#" className="active">
                    Главная
                  </a>
                </li>
                <li>
                  <a href="#">О нас</a>
                </li>
                <li>
                  <a href="#">Новости</a>
                </li>
                <li>
                  <a href="#">Тренинги</a>
                </li>
                <li>
                  <a href="#">Мероприятия</a>
                </li>
                <li>
                  <a href="#">Опросы</a>
                </li>
                <li>
                  <a href="#">Контакты</a>
                </li>
              </ul>
            </div>
            <div className="header_right flex align-center jutify-center">
              <ul className="flex align-center jutify-between">
                <li>
                  <a href="#uz">uz</a>
                </li>
                <li>
                  <a href="#ru" className="active">
                    ru
                  </a>
                </li>
                <li>
                  <a href="#en">en</a>
                </li>
              </ul>
              <button className="btn r-12 bg-purple">РЕГИСТРАЦИЯ</button>
              <div className="basket">
                <BsBasket3 className="basket-icon" />
                <span className="basket-quantity">0</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
