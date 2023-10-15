'use client'
import Footer from '@/Componentes/Footer/Footer'
import styles from './page.module.css'
import Header from '@/Componentes/Header/Header'
import Head from '@/Componentes/HeaderCategories/Head'
import Slides from '@/Componentes/slideShow/Slide'
import Categories from '@/Componentes/Categories/Categories'
import { LinearGradient } from 'react-text-gradients'
import Content from '@/Componentes/Content/Content'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Head />
      <Slides />
      <Categories />
      <div className={styles.divtxt}>
        <LinearGradient style={{ fontWeight: "600", fontSize: 36 }} gradient={['to left', '#183054, #96BCF5, #9AC0FA, #6486B7']}>
          أحـــدث المنتجات
        </LinearGradient>
      </div>
      <Content />
      <div className={styles.divtxt}>
        <LinearGradient style={{ fontWeight: "600", fontSize: 36 }} gradient={['to left', '#183054, #96BCF5, #9AC0FA, #6486B7']}>
          المنتجات الأكثر مبيعاً
        </LinearGradient>
      </div>
      <Content />
      <div className={styles.divtxt}>
        <LinearGradient style={{ fontWeight: "600", fontSize: 36 }} gradient={['to left', '#183054, #96BCF5, #9AC0FA, #6486B7']}>
          جميع المنتجات
        </LinearGradient>
      </div>
      <Content />
      <Footer />
    </main>
  )
}
