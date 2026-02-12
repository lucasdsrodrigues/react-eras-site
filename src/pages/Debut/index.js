import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Debut.css';

import imgTimMcGraw from '../../imagens/tim-mcgraw.webp'; 
import imgTeardrops from '../../imagens/teardrops.jpg';
import imgOurSong from '../../imagens/our-song.jpg';
import imgPictureToBurn from '../../imagens/picture-to-burn.jpg';
import imgShouldveSaidNo from '../../imagens/shouldve-said-no.webp';

import shoot1 from '../../imagens/shoot1.webp';
import shoot2 from '../../imagens/shoot2.webp';
import shoot3 from '../../imagens/shoot3.webp';
import shoot4 from '../../imagens/shoot4.webp';
import shoot5 from '../../imagens/shoot5.webp';
import shoot6 from '../../imagens/shoot6.webp';
import shoot7 from '../../imagens/shoot7.webp';
import shoot8 from '../../imagens/shoot8.webp';
import shoot9 from '../../imagens/shoot9.webp';
import shoot10 from '../../imagens/shoot10.webp';
import shoot11 from '../../imagens/shoot11.webp';
import shoot12 from '../../imagens/shoot12.webp';
import shoot13 from '../../imagens/shoot13.webp';
import shoot14 from '../../imagens/shoot14.webp';
import shoot15 from '../../imagens/shoot15.webp';
import shoot16 from '../../imagens/shoot16.webp';
import shoot17 from '../../imagens/shoot17.webp';
import shoot18 from '../../imagens/shoot18.webp';
import shoot19 from '../../imagens/shoot19.webp';
import shoot20 from '../../imagens/shoot20.webp';

const Debut = () => {
  const [easterEggAtivo, setEasterEggAtivo] = useState(false);
  const [galeriaAberta, setGaleriaAberta] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const glitter = document.createElement('div');
      glitter.className = 'glitter-particle';
      glitter.style.left = `${e.clientX + window.scrollX}px`;
      glitter.style.top = `${e.clientY + window.scrollY}px`;
      const size = Math.random() * 4 + 2 + 'px';
      glitter.style.width = size;
      glitter.style.height = size;
      document.documentElement.appendChild(glitter);
      setTimeout(() => { glitter.remove(); }, 800);
    };

    const launchSoftGlitter = () => {
      const amount = 70; 
      const colors = ['#50c878', '#d4af37', '#ffffff', '#a8e4a0'];

      for (let i = 0; i < amount; i++) {
        setTimeout(() => {
          const confetti = document.createElement('div');
          confetti.className = 'glitter-confetti';
          
          confetti.style.left = Math.random() * 100 + 'vw';
          confetti.style.top = '-5vh'; 
          confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
          
          const size = Math.random() * 5 + 2 + 'px';
          confetti.style.width = size;
          confetti.style.height = size;
          confetti.style.opacity = "0";

          document.body.appendChild(confetti);

          const animation = confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 0 },
            { opacity: 1, offset: 0.2 }, 
            { transform: `translateY(105vh) translateX(${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
          ], {
            duration: Math.random() * 3000 + 4000, 
            easing: 'ease-out'
          });

          animation.onfinish = () => confetti.remove();
        }, i * 60); 
      }
    };

    launchSoftGlitter();

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const musicVideos = [
    { 
      titulo: "Tim McGraw", 
      ano: "2006", 
      diretor: "Trey Fanjoy", 
      thumb: imgTimMcGraw,
      url: "https://www.youtube.com/watch?v=GkD20ajVxnY" 
    },
    { 
      titulo: "Teardrops On My Guitar", 
      ano: "2007", 
      diretor: "Trey Fanjoy", 
      thumb: imgTeardrops,
      url: "https://www.youtube.com/watch?v=xKCek6ndSA0" 
    },
    { 
      titulo: "Our Song", 
      ano: "2007", 
      diretor: "Trey Fanjoy", 
      thumb: imgOurSong,
      url: "https://www.youtube.com/watch?v=Jb2stN7kH28" 
    },
    { 
      titulo: "Picture To Burn", 
      ano: "2008", 
      diretor: "Trey Fanjoy", 
      thumb: imgPictureToBurn,
      url: "https://www.youtube.com/watch?v=yBCP26Ti6nY" 
    },
    { 
      titulo: "Should've Said No", 
      ano: "2008", 
      diretor: "ACM Awards", 
      thumb: imgShouldveSaidNo,
      url: "https://www.youtube.com/watch?v=mE9O9uY_kRk" 
    }
  ];

  const photoshootImages = [
    { src: shoot1, rot: "-2deg", text: "He said the way my blue eyes shined" },
    { src: shoot2, rot: "3deg", text: "When you think Tim McGraw" },
    { src: shoot3, rot: "-3deg", text: "I hope you think of me" },
    { src: shoot4, rot: "2deg", text: "I'm just a girl on a mission" },
    { src: shoot5, rot: "1deg", text: "Our song is a slamming screen door" },
    { src: shoot6, rot: "-4deg", text: "Drew looks at me" },
    { src: shoot7, rot: "3deg", text: "Burn, burn, burn, baby, burn" },
    { src: shoot8, rot: "-2deg", text: "Just a place in this world" },
    { src: shoot9, rot: "2deg", text: "Stay beautiful" },
    { src: shoot10, rot: "-3deg", text: "You're beautiful, every little piece" },
    { src: shoot11, rot: "1deg", text: "Take me back to the creek beds" },
    { src: shoot12, rot: "-2deg", text: "I was right there by your side" },
    { src: shoot13, rot: "4deg", text: "She's the star of a bad show" },
    { src: shoot14, rot: "-3deg", text: "Tied together with a smile" },
    { src: shoot15, rot: "2deg", text: "I should've said no" },
    { src: shoot16, rot: "-1deg", text: "The outside looking in" },
    { src: shoot17, rot: "3deg", text: "He's the reason for the teardrops" },
    { src: shoot18, rot: "-4deg", text: "I’m only up when you’re not here" },
    { src: shoot19, rot: "2deg", text: "Friday night beneath the stars" },
    { src: shoot20, rot: "-2deg", text: "It's the first time for everything" }
  ];

  const trilhasCompletas = [
    { no: "01", titulo: "Tim McGraw", tema: "Nostalgia", nota: "Escrita na aula de mAtEMática.", rot: "-2deg" },
    { no: "02", titulo: "Picture To Burn", tema: "Vingança", nota: "QUeimei as fotos.", rot: "3deg" },
    { no: "03", titulo: "Teardrops on My Guitar", tema: "Amor Não Correspondido", nota: "DrEw...", rot: "-1.5deg" },
    { no: "04", titulo: "A Place In This World", tema: "Identidade", nota: "A jOrnada começa.", rot: "2.5deg" },
    { no: "05", titulo: "Cold As You", tema: "Coração Partido", nota: "Letras mais afiadas.", rot: "-3deg" },
    { no: "06", titulo: "The Outside", tema: "Solidão", nota: "Escrita aos 12 anos.", rot: "2deg" },
    { no: "07", titulo: "Tied Together with a Smile", tema: "Pressão", nota: "Para uma amiga.", rot: "-2.5deg" },
    { no: "08", titulo: "Stay Beautiful", tema: "Admiração", nota: "Sobre o Cory.", rot: "1.5deg" },
    { no: "09", titulo: "Should've Said No", tema: "Infidelidade", nota: "O momEnTo da chuva.", rot: "-3.5deg" },
    { no: "10", titulo: "Mary's Song", tema: "Amor Eterno", nota: "HiStória real.", rot: "3deg" },
    { no: "11", titulo: "Our Song", tema: "Amor Jovem", nota: "MúsiCa do show de talentos.", rot: "-2deg" }
  ];

  return (
    <div className={`debut-ultra-archive ${easterEggAtivo ? 'show-secret' : ''}`}>
      <div className="grain-overlay"></div>

      {galeriaAberta && (
        <div className="photo-overlay" onClick={() => setGaleriaAberta(false)}>
          <div className="photo-content" onClick={e => e.stopPropagation()}>
            <button className="close-gallery-top" onClick={() => setGaleriaAberta(false)}>VOLTAR PARA O ÁLBUM ×</button>
            <h2 className="glitter-title" style={{ fontSize: '3.5rem', marginTop: '40px' }}>THE 2006 SESSIONS</h2>
            <div className="photo-masonry">
              {photoshootImages.map((img, index) => (
                <div key={index} className="polaroid-item" style={{ '--r': img.rot }}>
                  <img src={img.src} alt={img.text} />
                  <p className="handwritten-caption">{img.text}</p>
                </div>
              ))}
            </div>
            <footer className="gallery-footer">
              <p>End of 2006 Archives</p>
              <button className="close-gallery-bottom" onClick={() => setGaleriaAberta(false)}>FECHAR X</button>
            </footer>
          </div>
        </div>
      )}

      <nav className="binder-nav">
        <Link to="/" className="tab-link">ÍNDICE DE ERAS</Link>
        <div className="current-era-badge" onClick={() => setEasterEggAtivo(!easterEggAtivo)}>
          CAPÍTULO 01: A ERA {easterEggAtivo ? 'MÁGICA' : 'AUTOTITULADA'}
        </div>
        <Link to="/fearless" className="tab-link gold-tab">PRÓXIMO: FEARLESS →</Link>
      </nav>

      <section className="hero-archive">
        <div className="hero-layout">
          <div className="cover-box">
            <img src="https://upload.wikimedia.org/wikipedia/en/1/1f/Taylor_Swift_-_Taylor_Swift.png" alt="Debut" />
            <div className="label-sticker">7x PLATINA</div>
          </div>
          <div className="hero-info">
            <h1 className="debut-main-title">Taylor <br/> Swift</h1>
            <div className="specs-grid">
              <div className="spec-item"><span>LANÇAMENTO</span> 24 Out, 2006</div>
              <div className="spec-item"><span>GÊNERO</span> Country / Pop</div>
              <div className="spec-item"><span>PRODUTOR</span> Nathan Chapman</div>
              <div className="spec-item"><span>DURAÇÃO</span> 40:28</div>
            </div>
            <button className="photoshoot-btn" onClick={() => setGaleriaAberta(true)}>
              VER PHOTOSHOOT COMPLETO 📷
            </button>
          </div>
        </div>
      </section>

      <section className="memory-box-dark">
        <h2 className="glitter-title">A CAIXA DE MEMÓRIAS</h2>
        <div className="cards-wrapper">
          <div className="m-card">
            <div className="m-icon">🎸</div>
            <h3>Instrumental</h3>
            <p>Banjo, Violino e Violões definem o som desta era.</p>
          </div>
          <div className="m-card">
            <div className="m-icon">🦋</div>
            <h3>Mensagens Ocultas</h3>
            <p>As letras maiúsculas nos papéis abaixo formam uma palavra secreta...</p>
          </div>
          <div className="m-card">
            <div className="m-icon">👢</div>
            <h3>Moda</h3>
            <p>Vestidos de verão e botas de cowboy eram o uniforme de 2006.</p>
          </div>
        </div>
      </section>

      <section className="spotify-preview-section">
        <div className="spotify-container">
          <h2 className="glitter-title">OUÇA O ÁLBUM</h2>
          <iframe 
            style={{ borderRadius: '12px' }} 
            src="https://open.spotify.com/embed/album/5eyZZoQEFQWRHkV2xgAeBw?utm_source=generator"
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="Spotify Preview"
          ></iframe>
        </div>
      </section>

      <section className="film-vault">
        <h2 className="section-subtitle">O COFRE DE FILMES (CLIPES)</h2>
        <div className="video-scroll">
          {musicVideos.map((video, i) => (
            <div key={i} className="video-card-container">
              <a 
                href={video.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="video-card"
              >
                <div className="video-tape" style={{ backgroundImage: `url("${video.thumb}")` }}>
                  <div className="play-overlay">▶</div>
                </div>
                <h4>{video.titulo}</h4>
                <p>Direção: {video.diretor}</p>
                <span className="v-year">{video.ano}</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="lyricist-den">
        <h2 className="handwritten-heading">O Processo de Composição</h2>
        <div className="scraps-wall">
          {trilhasCompletas.map((t, index) => (
            <div 
              key={t.no} 
              className={`scrap-paper paper-${index % 4}`} 
              style={{ 
                '--r': t.rot, 
                '--delay': `${index * 0.2}s` 
              }}
            >
              <div className="paper-pin"></div>
              <span className="p-no">{t.no}</span>
              <h3>{t.titulo}</h3>
              <p className="p-theme">Tema: {t.tema}</p>
              <div className="p-scribble">Nota: {t.nota}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="debut-achievements">
        <div className="achievement-overlay">
          <h2 className="glitter-title">AWARDS & MILESTONES</h2>
          <div className="stats-container">
            <div className="stat-box">
              <span className="stat-number">275</span>
              <p>Semanas na Billboard 200</p>
            </div>
            <div className="stat-box">
              <span className="stat-number">7x</span>
              <p>Certificado de Platina pela RIAA</p>
            </div>
            <div className="stat-box">
              <span className="stat-number">#1</span>
              <p>Álbum Country mais vendido (2007-08)</p>
            </div>
          </div>
          <div className="awards-highlight">
            <h3 className="awards-subtitle">PRINCIPAIS RECONHECIMENTOS</h3>
            <div className="awards-grid">
              <div className="award-item">
                <span className="award-icon">🏆</span>
                <h4>GRAMMY AWARDS</h4>
                <p>Nomeada como Best New Artist (2008)</p>
              </div>
              <div className="award-item">
                <span className="award-icon">🏆</span>
                <h4>AMA</h4>
                <p>Favorite Country Female Artist</p>
              </div>
              <div className="award-item">
                <span className="award-icon">🏆</span>
                <h4>CMA AWARDS</h4>
                <p>Horizon Award (Revelação do Ano)</p>
              </div>
              <div className="award-item">
                <span className="award-icon">🏆</span>
                <h4>BMI AWARDS</h4>
                <p>Song of the Year ("Teardrops on My Guitar")</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="era-transition">
        <div className="f-streaming">
          <h3>PLATAFORMAS DIGITAIS</h3>
          <div className="f-btns">
            <a href="https://open.spotify.com/album/7S0u419796Y96vRt9v6865" target="_blank" rel="noreferrer">SPOTIFY</a>
            <a href="https://music.apple.com/br/album/taylor-swift-deluxe-edition/1440802681" target="_blank" rel="noreferrer">APPLE MUSIC</a>
          </div>
        </div>
        <div className="f-gold-path">
          <Link to="/fearless" className="gold-gate">ENTRE NA ERA FEARLESS →</Link>
        </div>
      </footer>
    </div>
  );
};

export default Debut;