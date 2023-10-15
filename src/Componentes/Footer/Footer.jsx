import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'



function Footer() {
    return (
        <footer className={styles.main}>

            <ul className={styles.ul}>
                <li className={styles.li}><p style={{ fontWeight: '400', fontSize: 24 }}>تابعنا</p></li>
                <div style={{ display: "flex" }}>
                    <li className={styles.li}><Image style={{ width: 25, height: "auto" }} src={require('@/image/icons/twitter.png')} /></li>
                    <li className={styles.li}><Image style={{ width: 25, height: "auto" }} src={require('@/image/icons/instagram.png')} /></li>
                </div>
                <li className={styles.li}><a href='#' style={{ fontWeight: '400', fontSize: 24 }}>البنود و الخصوصية</a></li>
            </ul>


            <ul className={styles.ul}>
                <li className={styles.li}><p style={{ fontWeight: '400', fontSize: 24 }}>المستعمل</p></li>
                <li className={styles.li}><a href='#' style={{ fontWeight: '400', fontSize: 24 }}>المزادات الرائجة</a></li>
                <li className={styles.li}><a href='#' style={{ fontWeight: '400', fontSize: 24 }}>السوبر</a></li>
                <li className={styles.li}><a href='#' style={{ fontWeight: '400', fontSize: 24 }}>أحدث الاعلانات</a></li>
            </ul>

            <ul className={styles.ul}>
                <li className={styles.li}><p style={{ fontWeight: '400', fontSize: 24 }}>البازار</p></li>
                <li className={styles.li}><a href='#' style={{ fontWeight: '400', fontSize: 24 }}>العروض</a></li>
                <li className={styles.li}><a href='#' style={{ fontWeight: '400', fontSize: 24 }}>المضاف حديثا</a></li>
                <li className={styles.li}><a href='#' style={{ fontWeight: '400', fontSize: 24 }}>الأكثر مبيعاً</a></li>
            </ul>
            <ul className={styles.ul}>
                <li className={styles.li}><p style={{ fontWeight: '400', fontSize: 24 }}>المتجر</p></li>
                <li className={styles.li}><a href='#' style={{ fontWeight: '400', fontSize: 24 }}>العروض</a></li>
                <li className={styles.li}><a href='#' style={{ fontWeight: '400', fontSize: 24 }}>المضاف حديثا</a></li>
                <li className={styles.li}><a href='#' style={{ fontWeight: '400', fontSize: 24 }}>الأكثر مبيعاً</a></li>
            </ul>
            <ul className={styles.ul}>
                <li className={styles.li}><p style={{ fontWeight: '400', fontSize: 24 }}>الرئيسية</p></li>
                <li className={styles.li}><a href='#' style={{ fontWeight: '400', fontSize: 24 }}>من نحن</a></li>
                <li className={styles.li}><a href='#' style={{ fontWeight: '400', fontSize: 24 }}>تواصل معنا</a></li>
            </ul>



            <ul className={styles.ul}>
                <li className={styles.li}><Image style={{ width: 252, height: "auto" }} src={require('@/image/logo/logowithe.png')} /></li>
                <li className={styles.li}><a href='#' style={{ fontWeight: '400', fontSize: 24 }}>وابل الخير لخدمات الأعمال</a></li>
            </ul>

        </footer>
    )
}

export default Footer