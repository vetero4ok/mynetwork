import React from 'react';
import s from './Header.module.css';
import avaImg from '../../assets/images/myDefaultAva.jpg'
import {NavLink} from 'react-router-dom';
import {UserProfileType} from '../../Redux/profilePageReducer';
import logo_header from '../../assets/logos/logo_header.png'
import SuperButton from '../Common/Button/SuperButton';

type ProsHeaderType = {
    isAuth: boolean
    login: string
    profile: UserProfileType | null
    logoutTC: () => void
}

export const Header = (props: ProsHeaderType) => {
    // if (!props.profile && props.profile === null) {
    //     return <Preloader/>
    // }
    const onClickHandler = () => {
        props.logoutTC()
    }
    return (
        <header className={s.header}>
            <img src={logo_header} alt={'app logo'}/>
            <div className={s.mainTitle}>
                My social network
            </div>

            {props.isAuth
                ?
                <div className={s.loginBlock}>

                    <div>{props.login}</div>
                    <img src={props.profile?.photos.small !== null
                        ? props.profile?.photos.small
                        : avaImg }
                         alt={'user avatar'}
                    />
                    <NavLink to={'/login'}>
                        <SuperButton onClick={onClickHandler}>
                            Logout
                        </SuperButton>
                    </NavLink>
                </div>
                :
                <NavLink to={'/login'}>
                    <SuperButton>
                        Login
                    </SuperButton>
                </NavLink>}


        </header>
    );
}
