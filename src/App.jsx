import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const slides = [
    { image: '/sity/china.png', title: 'China', subtitle: 'Explore the Great Wall' },
    { image: '/sity/dubai.jpg', title: 'Dubai', subtitle: 'Luxury and Skyscrapers' },
    { image: '/sity/japan.jpg', title: 'Japan', subtitle: 'Tradition meets technology' },
    { image: '/sity/orol.png', title: 'Orol', subtitle: 'The disappearing sea' },
    { image: '/sity/tailand.jpg', title: 'Thailand', subtitle: 'Land of Smiles' },
    { image: '/sity/turkiya.jpg', title: 'Turkey', subtitle: 'Where East meets West' },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // 5 soniyada avtomatik o‘zgaradi

    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[index];

  return (
    <div className="hero" style={{ backgroundImage: `url(${currentSlide.image})` }}>
      {/* Overlay yozuv */}
      <div className="overlay">
        <h1>{currentSlide.title}</h1>
        <p>{currentSlide.subtitle}</p>
      </div>

      {/* Tugmalar */}
      <button className="nav-button left" onClick={prevSlide}>❮</button>
      <button className="nav-button right" onClick={nextSlide}>❯</button>

      {/* Indicatorlar */}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>

    </div>
  );
}

export default App;
