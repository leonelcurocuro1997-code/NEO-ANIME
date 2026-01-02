import { useState, useEffect } from 'react'
import '../styles/carousel.css'

const images = [
  '/imagenes/1.jpg',
  '/imagenes/2.jpg',
  '/imagenes/3.jpg',
  '/imagenes/4.jpg',
  '/imagenes/5.jpg'
]

export default function Home() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <h1 style={{ color: 'red', marginBottom: '20px' }}>
        HOME FUNCIONANDO
      </h1>

      <div className="carousel">
        <img src={images[index]} alt="banner" />

        <div className="dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={i === index ? 'dot active' : 'dot'}
            ></span>
          ))}
        </div>
      </div>
    </div>
  )
}

