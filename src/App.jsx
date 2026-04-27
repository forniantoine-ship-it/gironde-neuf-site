import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div style={styles.page}>

        {/* MENU */}
        <nav style={styles.nav}>
          <div style={styles.logo}>Le Chasseur du Neuf</div>

          <div style={styles.links}>
            <Link to="/" style={styles.link}>Accueil</Link>
            <Link to="/guides/vefa" style={styles.link}>Guide VEFA</Link>
            <Link to="/villes/bordeaux" style={styles.link}>Bordeaux</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guides/vefa" element={<Vefa />} />
          <Route path="/villes/bordeaux" element={<Bordeaux />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </Router>
  );
}

/* HOME PAGE PREMIUM */
function Home() {
  return (
    <div>

      <section style={styles.hero}>
        <div style={styles.overlay}></div>

        <div style={styles.heroContent}>
          <p style={styles.badge}>GIRONDE • IMMOBILIER NEUF</p>

          <h1 style={styles.title}>
            Le chasseur du neuf en Gironde
          </h1>

          <p style={styles.subtitle}>
            Accédez à tous les logements neufs en Gironde au prix promoteur.
          </p>

          <button style={styles.mainBtn}>
            Lancez la chasse
          </button>

          <p style={styles.reassure}>
            Une seule demande • Un seul conseiller • Aucun démarchage multiple
          </p>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Pourquoi passer par nous ?</h2>

        <div style={styles.grid}>
          <div style={styles.card}>Prix direct promoteur</div>
          <div style={styles.card}>Gain de temps total</div>
          <div style={styles.card}>Un conseiller unique</div>
          <div style={styles.card}>Sans démarchage multiple</div>
        </div>
      </section>

    </div>
  );
}

/* PAGES INTERNES */

function Vefa() {
  return (
    <div style={styles.inner}>
      <h1>Guide VEFA</h1>
      <p>Tout comprendre sur l’achat sur plan, les garanties et les étapes.</p>
    </div>
  );
}

function Bordeaux() {
  return (
    <div style={styles.inner}>
      <h1>Appartement neuf Bordeaux</h1>
      <p>Découvrez les meilleures opportunités à Bordeaux et métropole.</p>
    </div>
  );
}

function Contact() {
  return (
    <div style={styles.inner}>
      <h1>Contact</h1>
      <p>Une seule demande. Un seul conseiller dédié.</p>
    </div>
  );
}

/* STYLES */

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    background: "#f8f6f1",
    color: "#111"
  },

  nav: {
    background: "#111",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 40px",
    position: "sticky",
    top: 0,
    zIndex: 100
  },

  logo: {
    fontWeight: "bold",
    fontSize: "22px"
  },

  links: {
    display: "flex",
    gap: "25px"
  },

  link: {
    color: "white",
    textDecoration: "none"
  },

  hero: {
    position: "relative",
    minHeight: "88vh",
    backgroundImage: "url('/photo.bx.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.45)"
  },

  heroContent: {
    position: "relative",
    zIndex: 2,
    color: "white",
    maxWidth: "950px",
    padding: "30px"
  },

  badge: {
    letterSpacing: "3px",
    fontSize: "14px",
    marginBottom: "20px"
  },

  title: {
    fontSize: "68px",
    lineHeight: "1.1",
    marginBottom: "25px",
    fontWeight: "bold"
  },

  subtitle: {
    fontSize: "28px",
    lineHeight: "1.5",
    marginBottom: "35px"
  },

  mainBtn: {
    background: "#17a36b",
    color: "white",
    border: "none",
    padding: "18px 42px",
    fontSize: "22px",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "bold"
  },

  reassure: {
    marginTop: "20px",
    fontSize: "17px"
  },

  section: {
    maxWidth: "1200px",
    margin: "auto",
    padding: "70px 25px"
  },

  h2: {
    fontSize: "42px",
    textAlign: "center",
    marginBottom: "40px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: "20px"
  },

  card: {
    background: "white",
    padding: "35px",
    borderRadius: "14px",
    textAlign: "center",
    fontSize: "22px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
  },

  inner: {
    maxWidth: "900px",
    margin: "auto",
    padding: "80px 25px",
    lineHeight: "1.7",
    fontSize: "22px"
  }
};