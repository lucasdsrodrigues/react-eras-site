import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Fearless.css';

const Fearless = () => {
  const [showTV, setShowTV] = useState(false);

  useEffect(() => {
    /* Glitter Dourado */
    const launchGoldGlitter = () => {
      const amount = 50;
      const colors = ['#d4af37', '#f8e58c', '#ffffff'];
      for (let i = 0; i < amount; i++) {
        setTimeout(() => {
          const confetti = document.createElement('div');
          confetti.className = 'f-glitter';
          confetti.style.left = Math.random() * 100 + 'vw';
          confetti.style.top = '-5vh';
          confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
          const size = Math.random() * 4 + 2 + 'px';
          confetti.style.width = size;
          confetti.style.height = size;
          document.body.appendChild(confetti);
          const animation = confetti.animate([
            { transform: 'translateY(0)', opacity: 0 },
            { opacity: 1, offset: 0.2 },
            { transform: `translateY(105vh) translateX(${Math.random() * 40 - 20}px)`, opacity: 0 }
          ], { duration: Math.random() * 3000 + 3000 });
          animation.onfinish = () => confetti.remove();
        }, i * 100);
      }
    };
    launchGoldGlitter();
  }, []);

  const musicVideos = [
    { titulo: "Love Story", thumb: "https://i.ytimg.com/vi/8xg3vE8Ie_E/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=8xg3vE8Ie_E" },
    { titulo: "You Belong With Me", thumb: "https://i.ytimg.com/vi/VuNIsY6JdUw/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=VuNIsY6JdUw" },
    { titulo: "White Horse", thumb: "https://i.ytimg.com/vi/GSp6W_YpI24/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=GSp6W_YpI24" }
  ];

  return (
    <div className="f-era-container">
      <nav className="f-nav">
        <Link to="/debut">← CAPÍTULO 01</Link>
        <span className="f-badge">THE FEARLESS ERA</span>
        <Link to="/speak-now">CAPÍTULO 03 →</Link>
      </nav>

      <section className="f-hero">
        <div className="f-hero-content">
          <div className="f-cover-wrapper">
            <img 
              src={showTV ? "https://upload.wikimedia.org/wikipedia/en/5/5b/Fearless_%28Taylor%27s_Version%29_%28official_album_cover%29.png" : "https://upload.wikimedia.org/wikipedia/pt/8/86/Taylor_Swift_-_Fearless.png"} 
              alt="Capa" 
              className="f-album-img"
            />
          </div>
          <div className="f-info">
            <h1 className="f-main-title">Fearless</h1>
            <p className="f-quote">"In a storm in my best dress, fearless."</p>
            <div className="f-specs">
              <div><span>LANÇAMENTO</span> 11 Nov, 2008</div>
              <div><span>SINGLES</span> 05 Oficiais</div>
              <div><span>GRAMMYS</span> 04 Vitórias</div>
            </div>
            <button className="f-tv-btn" onClick={() => setShowTV(!showTV)}>
              {showTV ? "VER VERSÃO ORIGINAL" : "VER TAYLOR'S VERSION"}
            </button>
          </div>
        </div>
      </section>

      <div className="f-stats-strip">
        <div><strong>#1</strong> na Billboard 200</div>
        <div><strong>11</strong> Semanas no Topo</div>
        <div><strong>7M+</strong> Cópias Vendidas</div>
      </div>

      <section className="f-videos-section">
        <h2 className="f-section-title">THE MUSIC VIDEOS</h2>
        <div className="f-video-grid">
          {musicVideos.map((v, i) => (
            <a key={i} href={v.url} target="_blank" rel="noreferrer" className="f-video-item">
              <div className="f-video-thumb" style={{backgroundImage: `url(${v.thumb})`}}>
                <div className="f-play">▶</div>
              </div>
              <h4>{v.titulo}</h4>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Fearless;