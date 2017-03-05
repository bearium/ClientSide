/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes, Component } from 'react';
import s from './Header.scss';
import Navigation from '../Navigation';
import PurpleBar from '../PurpleBar';
import {Link} from 'react-router';
// import logoUrl from './logo-small.png';

export default class Header extends Component {
  render() {
    let user = this.props.user;
    console.log(user);
    return (
      <div className={s.root}>
        <div className={s.container}>
          <PurpleBar />
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>IMMM</h1>
            <p className={s.bannerDesc}>Just a Resume Management System</p>
          </div>
          <div className={s.navBar}>
            <Navigation className={s.nav} user={user}/>
            <Link className={s.brand} to="/">

              <span className={s.brandTxt}>IMMM</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

// <img src={logoUrl} width="44" height="44" alt="PvPCraft" />