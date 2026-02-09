import React from 'react';
import { Link } from 'react-router-dom';
import './Debut.css';

const Debut = () => {
  const tracklist = [
    { num: "01", title: "Tim McGraw", note: "The one that started it all." },
    { num: "02", title: "Picture To Burn", note: "Burn, burn, burn, baby, burn." },
    { num: "03", title: "Teardrops On My Guitar", note: "He's the reason for the teardrops..." },
    { num: "04", title: "A Place In This World", note: "Just a girl trying to find her way." },
    { num: "05", title: "Cold As You", note: "The best track 5 start." }
  ];

  return (
    <div className="debut-world">
      {/* Elementos Flutuantes de Identidade */}
      <div className="floating-elements">
        <div className="butterfly b1">🦋</div>
        <div className="butterfly b2">🦋</div>
        <div className="flower f1">🌸</div>
        <div className="sparkle s1">✨</div>
      </div>

      <nav className="debut-nav">
        <Link to="/" className="nav-tag">← THE ERAS HUB</Link>
        <div className="era-indicator">TAYLOR SWIFT • 2006</div>
        <Link to="/fearless" className="nav-tag">FEARLESS →</Link>
      </nav>

      <div className="main-content-wrapper">
        <aside className="side-element left">
          <div className="pinned-note aesthetic">
            <div className="tape"></div>
            <h3>Aesthetic</h3>
            <p>Bohemian curls, sundresses, and vintage turquoise jewelry.</p>
            <div className="color-swatch">
              <div className="swatch c1"></div>
              <div className="swatch c2"></div>
              <div className="swatch c3"></div>
            </div>
          </div>
          
          {/* Polaroid Extra fora do caderno */}
          <div className="polaroid-float">
            <img src="https://i.pinimg.com/564x/02/0f/5e/020f5e71780562e8312066804595213c.jpg" alt="Taylor" />
            <p>2006 Vibes</p>
          </div>
        </aside>

        <section className="notebook-container">
          <div className="spiral"></div>
          <div className="notebook-page">
            <header className="page-header">
              <p className="handwritten-top">My First Diary Entries</p>
              <h1 className="main-title">Taylor Swift</h1>
              <div className="butterfly-seal">🦋</div>
            </header>
            
            <div className="track-section">
              <h3 className="section-header">The Tracklist</h3>
              <div className="tracks-list">
                {tracklist.map((item, index) => (
                  <div key={index} className="track-row">
                    <span className="t-index">{item.num}</span>
                    <div className="t-content">
                      <h4>{item.title}</h4>
                      <p>{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <aside className="side-element right">
          <div className="pinned-note stats">
            <div className="tape"></div>
            <h3>Era Stats</h3>
            <ul className="stats-list">
              <li><strong>Copies:</strong> 5M+ sold</li>
              <li><strong>Billboard:</strong> 275 weeks</li>
              <li><strong>Youngest:</strong> #1 Country Songwriter</li>
            </ul>
          </div>
          
          <div className="sticker-graphic">
            Authentic Country Music 🎸
          </div>
        </aside>
      </div>

      <section className="videography-section">
        <h2 className="section-label">Music Videos</h2>
        <div className="video-strip">
          <div className="video-card">
            <div className="vid-preview p1"></div>
            <p>Our Song</p>
          </div>
          <div className="video-card">
            <div className="vid-preview p2"></div>
            <p>Teardrops on My Guitar</p>
          </div>
        </div>
      </section>

      <footer className="debut-footer">
        <div className="lyric-scrap">
          "Our song is a slamming screen door..."
        </div>
        <div className="final-signature">Taylor Swift</div>
      </footer>
    </div>
  );
};

export default Debut;