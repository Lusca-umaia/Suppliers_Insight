"use client"

import { useCallback } from 'react'
import Navbar from '@/components/Dashboard/landingPage/Navbar';
import Product from '@/components/Dashboard/landingPage/Product';
import Technologies from '@/components/Dashboard/landingPage/Technologies';
import Functionalities from '@/components/Dashboard/landingPage/Functionalities';
import Footer from '@/components/Dashboard/landingPage/Footer';

const navigation = [
  { name: 'Produto', href: 'product' },
  { name: 'Tecnologias', href: 'technologies' },
  { name: 'Funcionalidades', href: 'functionalities' }
]

export default function LandingPage() {

  const scrollToSection = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);

    if (element) {
      window.scroll({
        top: element.offsetTop,
        behavior: "smooth"
      })
    }
  }, [])

  return (
    <div>
      <Navbar navigation={navigation} scrollToSection={scrollToSection} />
      <Product />
      <Technologies />
      <Functionalities />
      <Footer navigation={navigation} scrollToSection={scrollToSection} />
    </div>
  )
}