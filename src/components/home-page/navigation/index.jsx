import React, { useEffect, useState } from 'react'
import './navigation.css'
import ButtonCommon from '../../button-common'
import Menu from '../../../icons/menu'
import Close from '../../../icons/close'

const Navigation = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const listNavigation = [
    {
      name: 'Home',
      path: '#'
    },
    {
      name: 'About us',
      path: '#about'
    },
    {
      name: 'Contact',
      path: '#contact'
    }
  ]

  const onClickItem = (path) => {
    setIsOpenMenu(false);
    window.location.href = path;
  }

  return (
    <div className='navigation__container__wrapper'>
      <div className={`navigation__container ${isScrolled ? "scrolled" : ""}`}>
        <div
          className="navigation__container__left__mobile"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          {isOpenMenu ? <Close /> : <Menu />}
        </div>

        {isOpenMenu && (
          <div
            className={`navigation__mobile__menu ${
              isOpenMenu ? "menu-open" : "menu-close"
            }`}
          >
            {listNavigation.map((item, index) => (
              <div
                key={index}
                className="navigation__mobile__menu__item"
                onClick={() => onClickItem(item.path)}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}

        {isOpenMenu && (
          <div
            className="navigation__overlay"
            onClick={() => setIsOpenMenu(false)}
          />
        )}

        <div className="navigation__container__left">
          {listNavigation.map((item, index) => {
            return (
              <div
                key={index}
                className="navigation__container__left__item"
                onClick={() => onClickItem(item.path)}
              >
                <a href={item.path}>{item.name}</a>
              </div>
            );
          })}
        </div>
        <div className="navigation__container__logo" onClick={() => window.location.href = '/'}>
          <img src="./images/logo.png" alt="logo" />
        </div>
        <div className="navigation__container__right">
          <ButtonCommon />
        </div>
      </div>
    </div>
  );
}

export default Navigation