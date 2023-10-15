'use client';
import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'


const data = [
    { name: 'الملابس' },
    { name: 'اكسسوارات' },
    { name: 'أثاث' },
    { name: 'ألعاب' },
    { name: 'الأجهزة الالكترونية' },
    { name: 'العطور' },
    { name: 'أخرى' },
]

export default function Head() {
    return (
        <header className={styles.main}>
            <ul className={styles.ul}>
                {data.map((item) => {
                    return (
                        <li className={styles.li}><a className={styles.txt} href="#">{item.name}</a></li>
                    )
                })}
            </ul>
        </header>
    )
}
