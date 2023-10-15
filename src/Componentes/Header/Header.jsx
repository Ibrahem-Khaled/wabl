'use client'
import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'


export function Searchbar() {
    return (
        <div style={{ width: "40%", backgroundColor: "#FFFFFF", display: "flex" }}>
            <div className={styles.searchico}>
                <Image style={{ width: 32, height: 'auto' }} src={require('../../image/icons/search.png')} alt="search" />
            </div>
            <input className={styles.inbut} placeholder='البحث باسم المنتج أو اسم التاجر' />
        </div>
    )
}


export default function Header() {
    return (
        <header className={styles.main}>
            <a href='#' className={styles.btn}><p style={{ fontWeight: "bold", fontSize: 20 }}>الدخول</p></a>
            <ul className={styles.ul}>
                <li className={styles.li}><a className={styles.icons} href="#"><Image style={{ width: 25, height: 'auto', }} src={require('../../image/icons/Notification.png')} alt="Notification" /></a></li>
                <li className={styles.li}><a href="#"><Image style={{ width: 25, height: 'auto', }} src={require('../../image/icons/messenger.png')} alt="messenger" /></a></li>
                <li className={styles.li}><a href="#"><Image style={{ width: 25, height: 'auto', }} src={require('../../image/icons/buy.png')} alt="buy" /></a></li>
            </ul>
            <Searchbar />
            <Image style={{ width: 252, height: 'auto' }} src={require('../../image/logo/wabllogo.png')} alt="logo" />

        </header>
    )
}
