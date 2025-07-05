import React from "react";

export default function LandingPage({ onNavigate }) {
  return (
    <>
      {/* ----------  STYLES  ---------- */}
      <style>{`
        /* 1. CSS tokens */
        :root{
          --purple:#4B0082;
          --orange:#FF6F00;
          --teal:#009688;
          --white:#FFFFFF;
          --gutter:60px;          /* left & right page margin on desktop */
          --font:"Inter","Helvetica",sans-serif;
        }

        /* 2. Global reset */
        *{margin:0;padding:0;box-sizing:border-box;}
        html,body,#root{height:100%;width:100%;background:var(--white);font-family:var(--font);}

        /* 3. Header (bar at the very top) */
        .nav{
          height:76px;
          border-bottom:4px solid var(--purple);
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:0 var(--gutter);
        }
        .nav img.logo{height:32px;width:auto;}
        .nav-menu{display:flex;gap:48px;font:600 16px/1 var(--font);text-transform:uppercase;}
        .nav-menu {color:var(--purple);text-decoration:none;letter-spacing:.4px;}
        .nav-menu 
        .active{color:var(--orange);}
        /* Auth pill (Log In / Daftar) */
        .auth-pill{display:flex;height:40px;width:220px;border-radius:9999px;overflow:hidden;border:2px solid var(--purple);}
        .auth-pill button{
          flex:1;border:none;cursor:pointer;font:600 14px/1 var(--font);text-transform:uppercase;
        }
        .auth-pill .login{background:var(--purple);color:var(--orange);}
        .auth-pill .register{background:var(--white);color:var(--purple);border-left:2px solid var(--purple);}

        /* 4. Hero section */
        .hero{
          display:grid;
          grid-template-columns:minmax(480px,46%) 1fr; /* two-column layout */
          gap:40px;
          padding:100px var(--gutter) 0 var(--gutter);
          min-height:680px;
          /* the entire illustration, zig-zag and both characters, is baked into a single PNG */
          background:url("/images/landing_bg.png") top right/contain no-repeat;
        }

        /* 4A. Left column text */
        .tagline{font:700 18px/1 var(--font);color:var(--orange);margin-bottom:18px;}
        .headline{font:800 36px/1.25 var(--font);color:var(--purple);text-transform:uppercase;max-width:520px;margin-bottom:18px;}
        .bodycopy{font:400 18px/1.6 var(--font);color:var(--purple);max-width:520px;margin-bottom:28px;}

        /* CTA pill under copy */
        .cta{display:flex;width:260px;height:48px;border-radius:9999px;overflow:hidden;}
        .cta button{
          flex:1;border:none;cursor:pointer;font:700 15px/1 var(--font);text-transform:uppercase;
        }
        .cta .login-btn{background:var(--purple);color:var(--orange);}
        .cta .signup-btn{background:var(--white);color:var(--purple);border:2px solid var(--purple);}

        /* 5. RESPONSIVE BREAKPOINTS */
        @media(max-width:1279px){
          .headline{font-size:32px;}
        }
        @media(max-width:959px){
          .hero{grid-template-columns:1fr;background-position:top 120px right -60px;padding:80px 32px 0 32px;text-align:center;}
          .cta{margin:0 auto;}
          .nav{padding:0 32px;}
        }
        @media(max-width:599px){
          .headline{font-size:26px;}
          .bodycopy{font-size:16px;}
          .nav-menu{gap:24px;}
          .nav img.logo{height:28px;}
          .nav-menu a{font-size:14px;}
        }
      `}</style>

      {/* ----------  MARKUP  ---------- */}
      <header className="nav">
        <img className="logo" src="/images/logo.png" alt="Carilah logo" />

        <nav className="nav-menu">
          <button 
            onClick={() => onNavigate && onNavigate('beranda')} 
            className="active"
            style={{background: 'none', color: '#FF6F00', border: 'none', cursor: 'pointer', font: 'inherit', color: 'inherit', textTransform: 'inherit', letterSpacing: 'inherit'}}
          >
            Beranda
          </button>
          <button 
          className="a"
            onClick={() => onNavigate && onNavigate('tentang')}
            style={{background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', color: 'inherit', textTransform: 'inherit', letterSpacing: 'inherit'}}
          >
            Tentang Kami
          </button>
        </nav>

        <div className="auth-pill">
          <button className="login" onClick={() => onNavigate && onNavigate('login')}>Log In</button>
          <button className="register" onClick={() => onNavigate && onNavigate('register')}>Daftar</button>
        </div>
      </header>

      <section className="hero">
        {/* LEFT COLUMN */}
        <div>
          <div className="tagline">PILIHAN TERBAIK</div>
          <h1 className="headline">BUKAN SEKADAR DATA, TAPI POTENSI NYATA</h1>
          <p className="bodycopy">
            Dibuat khusus untuk menghubungkan dunia akademik dengan dunia kerja.
            Jelajahi proposal mahasiswa siap kerja, dan temukan kandidat terbaik Anda.
          </p>

          <div className="cta auth-pill">
            <button className="login" onClick={() => onNavigate && onNavigate('login')}>LOG IN</button>
            <button className="signup" onClick={() => onNavigate && onNavigate('register')}>DAFTAR</button>
          </div>
        </div>

        {/* RIGHT COLUMN left intentionally empty –
            the artwork lives in landing_bg.png */}
        <div />
      </section>
    </>
  );
} 