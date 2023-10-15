import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'


const data = [
    {
        name: "قميص قطن ",
        description: "",
        image: "https://plus.unsplash.com/premium_photo-1694467832488-9bc48ff8d112?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        love: false,
        price: 30,
        vendorname: "محمد أحمد",
        logo: 'https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: "قميص قطن ",
        description: "",
        image: "https://images.unsplash.com/photo-1696233820406-982dec3540cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        love: true,
        price: 30,
        vendorname: "محمد أحمد",
        logo: 'https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: "قميص قطن ",
        description: "",
        image: "https://images.unsplash.com/photo-1682686581427-7c80ab60e3f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        love: false,
        price: 30,
        vendorname: "محمد أحمد",
        logo: 'https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: "قميص قطن ",
        description: "",
        image: "https://images.unsplash.com/photo-1696418001896-272e1bb8bf23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        love: false,
        price: 30,
        vendorname: "محمد أحمد",
        logo: 'https://images.unsplash.com/photo-1588731234159-8b9963143fca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: "قميص قطن ",
        description: "",
        image: "https://images.unsplash.com/photo-1682687981674-0927add86f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        love: true,
        price: 30,
        vendorname: "محمد أحمد",
        logo: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
]



export default function Content() {
    return (
        <div className={styles.main}>
            {data.map((item) => {
                return (
                    <div className={styles.card}>
                        <img className={styles.img} src={item.image} />
                        <div style={{
                            display: "flex",
                            borderRadius: 50 * 2,
                            backgroundColor: "#F9A21B",
                            justifyContent: "center",
                            alignItems: "center",
                            width: 59,
                            height: 59,
                        }}>
                            <Image style={{ width: 25, height: 25 }} src={require('@/image/icons/buy.png')} />
                        </div>
                        <div style={{ display: "flex", width: "100%", justifyContent: "space-around", alignItems: "center" }}>
                            <div className={styles.txt}> (40) (3/5) </div>
                            <div className={styles.txt}>{item.vendorname}</div>
                            <img className={styles.logo} src={item.logo} />
                        </div>
                        <div className={styles.txt}>{item.name}  </div>
                        <div style={{ width: "100%", display: "flex", justifyContent: "center", margin: 10 }}>
                            <Image style={{ width: 115, height: 'auto' }} src={require('@/image/icons/stars.png')} />
                        </div>
                        <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
                            <Image style={{ width: 25, height: 'auto' }} src={item.love == true ? require('@/image/icons/Heart.png') : require('@/image/icons/Heartoutline.png')} />
                            <div className={styles.txt}>{item.price} ريال</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
