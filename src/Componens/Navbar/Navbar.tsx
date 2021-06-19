import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';


type propsNavbarType = {
    //friendsData:Array<FriendType>
}

export const Navbar = (props:propsNavbarType) => {
    return (
        <nav className={s.sidebar}> {/*Sidebar*/}
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            {/*<div className={s.item}>*/}
            {/*    <NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink>*/}
            {/*</div>*/}
            {/*<div className={s.blockFriends} >*/}
            {/*    */}
            {/*   <BlockFriends*/}
            {/*       // friendsData={props.friendsData}*/}
            {/*   />*/}
            {/*</div>*/}
        </nav>




    );
}
