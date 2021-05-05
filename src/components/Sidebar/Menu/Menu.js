// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';

type Props = {
  menu: {
    label: string,
    path: string
  }[]
};

const Menu = ({ menu }: Props) => (
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
      {menu.map((item) => {
        const internal = /^\/(?!\/)/.test(item)
        if (internal) {
          return (
            <li className={styles['menu__list-item']} key={item.path}>

              <Link
                to={item.path}
                className={styles['menu__list-item-link']}
                activeClassName={styles['menu__list-item-link--active']}
              >
                {item.label}
              </Link>
            </li>
          )
        } else {
          return (
            <li className={styles['menu__list-item']} key={item.path}>
              <a
                href={item.path}
                className={styles['menu__list-item-link']}
                activeclassname={styles['menu__list-item-link--active']}
              >
                {item.label}
              </a>
            </li>
          )
        }
      })}
    </ul>
  </nav>
);

export default Menu;
