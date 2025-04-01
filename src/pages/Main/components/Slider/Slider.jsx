import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { useEffect, useState } from 'react'

const slides = [
  {
    image: 'https://example.com/image1.jpg',
    title: 'PRINTED SILK SHIRTS',
    link: '#',
  },
  {
    image: 'https://example.com/image2.jpg',
    title: 'MEDUSA BIGGIE 2024',
    link: '#',
  },
  {
    image: 'https://example.com/image3.jpg',
    title: 'VERSACE WATCHES FALL-WINTER 2024',
    link: '#',
  },
]

export default function Slider() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div className="relative flex items-center justify-center">
        <button
          className="absolute left-2 z-10"
          onClick={prevSlide}
        >
          <ChevronLeft className="text-black w-6 h-6" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="relative w-full"
          >
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white/80 p-2 rounded-lg">
              <a
                href={slides[current].link}
                className="text-lg font-bold"
              >
                {slides[current].title}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          className="absolute right-2 z-10"
          onClick={nextSlide}
        >
          <ChevronRight className="text-black w-6 h-6" />
        </button>
      </div>
    </div>
  )
}
