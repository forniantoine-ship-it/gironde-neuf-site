import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div style={styles.page}>

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

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Le chasseur du neuf en Gironde</h1>
      <p style={styles.text}>
        Accédez à l’ensemble des logements neufs en Gironde au prix direct promoteur.
      </p>
    </div>
  );
}

function Vefa() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Guide VEFA</h1>
      <p style={styles.text}>
        Tout comprendre sur l’achat sur plan, les garanties et les étapes.
      </p>
    </div>
  );
}

function Bordeaux() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Appartement neuf Bordeaux</h1>
      <p style={styles.text}>
        Découvrez les opportunités dans le neuf à Bordeaux et sa métropole.
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact</h1>
      <p style={styles.text}>
        Une seule demande. Un seul conseiller dédié.
      </p>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    background: "#f4f1ea",
    minHeight: "100vh"
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    background: "#111",
    color: "white"
  },

  logo: {
    fontSize: "22px",
    fontWeight: "bold"
  },

  links: {
    display: "flex",
    gap: "25px"
  },

  link: {
    color: "white",
    textDecoration: "none"
  },

  container: {
    maxWidth: "1000px",
    margin: "auto",
    padding: "70px 25px"
  },

  title: {
    fontSize: "52px",
    marginBottom: "20px"
  },

  text: {
    fontSize: "22px",
    lineHeight: "1.6"
  }
};