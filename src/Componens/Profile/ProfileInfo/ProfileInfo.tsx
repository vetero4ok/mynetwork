import React from 'react';
import s from './ProfileInfo.module.css';
import {UserProfileType} from '../../../Redux/profilePageReducer';
import {Preloader} from '../../Common/Preloader/Preloader';
import youtube from '../../../assets/logos/youtube.png'
import vk from '../../../assets/logos/vk.svg'
import twitter from '../../../assets/logos/twiter.png'
import mainLink from '../../../assets/logos/metalink.png'
import instagram from '../../../assets/logos/instagram.png'
import website from '../../../assets/logos/website.png'
import facebook from '../../../assets/logos/Facebook.svg'
import github from '../../../assets/logos/github.png'
import {ProfileStatusWithHooks} from './ProfileStatus/ProfileStatusWithHooks';


type profileInfoPropsType = {
    profile: UserProfileType | null
    profileStatus:string
    setStatusProfileTC:(title: string) => void
}

export const ProfileInfo = (props: profileInfoPropsType) => {
    if (!props.profile && props.profile === null) {
        return <Preloader/>
    }
    return (
        <div className={s.myInfo}>
            <div>
                <img src={props.profile.photos.large} alt={'avatar'}/>
            </div>
            {/*Description*/}
            <div>
                <div className={s.statusWrap}>
                    <div><h2>{props.profile.fullName}</h2></div>
                    <div className={s.status}>
                         {/*Class Component*/}

                        {/*<ProfileStatus*/}
                        {/*    profileStatus={props.profileStatus}*/}
                        {/*    setStatusProfileTC = {props.setStatusProfileTC}*/}
                        {/*/>*/}

                        {/*on Hooks*/}
                        <ProfileStatusWithHooks
                            profileStatus={props.profileStatus}
                            setStatusProfileTC = {props.setStatusProfileTC}
                        />

                    </div>
                </div>
                <div>
                    <h3>Contacts:</h3>
                    <div>
                        <img src={facebook} alt={'Facebook '} className={s.logos}/>
                        {props.profile.contacts.facebook}</div>
                    <div>
                        <img src={vk} alt={'VK '} className={s.logos}/>
                        {props.profile.contacts.vk}</div>
                    <div>
                        <img src={github} alt={'github '} className={s.logos}/>
                        {props.profile.contacts.github}</div>
                    <div>
                        <img src={twitter} alt={'twitter '} className={s.logos}/>
                        {props.profile.contacts.twitter}</div>
                    <div>
                        <img src={instagram} alt={'instagram '} className={s.logos}/>
                        {props.profile.contacts.instagram}</div>
                    <div>
                        <img src={mainLink} alt={'mainLink '} className={s.logos}/>
                        {props.profile.contacts.mainLink}</div>
                    <div>
                        <img src={website} alt={'website '} className={s.logos}/>
                        {props.profile.contacts.website}</div>
                    <div>
                        <img src={youtube} alt={'youtube '} className={s.logos}/>
                        {props.profile.contacts.youtube}</div>
                </div>

            </div>


        </div>

    );
}
