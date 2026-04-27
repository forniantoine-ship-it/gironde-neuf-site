import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div style={styles.page}>

        {/* MENU HAUT */}
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

/* HOME */
function Home() {
  const goForm = () => {
    document.getElementById("formulaire").scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.overlay}></div>

        <div style={styles.heroContent}>
          <p style={styles.badge}>GIRONDE • IMMOBILIER NEUF</p>

          <h1 style={styles.title}>
            Le chasseur du neuf en Gironde
          </h1>

          <p style={styles.subtitle}>
            Accédez à l’ensemble des logements neufs en Gironde au prix direct promoteur, sans frais supplémentaires.
          </p>

          <button style={styles.mainBtn} onClick={goForm}>
            Lancez la chasse
          </button>

          <p style={styles.reassure}>
            Une seule demande. Un seul conseiller dédié. Lui seul vous contactera.
          </p>
        </div>
      </section>

      {/* AVANTAGES */}
      <section style={styles.section}>
        <div style={styles.grid}>
          <div style={styles.card}>Prix direct promoteur garanti</div>
          <div style={styles.card}>Un seul conseiller dédié</div>
          <div style={styles.card}>Aucun démarchage multiple</div>
          <div style={styles.card}>Accès à tout le marché neuf</div>
        </div>
      </section>

      {/* ACCOMPAGNEMENT */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Comment fonctionne notre accompagnement ?</h2>

        <div style={styles.step}>1. Vous nous indiquez vos critères</div>
        <div style={styles.step}>2. Nous analysons l’ensemble du marché neuf</div>
        <div style={styles.step}>3. Vous recevez une sélection ciblée</div>
      </section>

      {/* FORMULAIRE */}
      <section id="formulaire" style={styles.formWrap}>
        <div style={styles.formBlock}>
          <h2 style={styles.h2}>Une seule demande suffit</h2>

          <p style={styles.smallText}>
            Votre conseiller dédié analysera votre projet et vous contactera personnellement.
          </p>

          <form action="https://formspree.io/f/xaqazyvg" method="POST">

            <input name="zone" placeholder="Zone recherchée" style={styles.input} />
            <input name="budget" placeholder="Budget global" style={styles.input} />
            <input name="apport" placeholder="Apport disponible" style={styles.input} />
            <input name="nom" placeholder="Nom" style={styles.input} />
            <input name="telephone" placeholder="Téléphone" style={styles.input} />
            <input name="email" type="email" placeholder="Email" style={styles.input} />

            <button type="submit" style={styles.submitBtn}>
              Recevoir ma sélection
            </button>

          </form>

          <p style={styles.footerText}>
            Vos coordonnées ne sont pas diffusées à plusieurs commerciaux.
          </p>
        </div>
      </section>

    </div>
  );
}

/* AUTRES PAGES */

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
      <p>Découvrez les opportunités dans le neuf à Bordeaux et sa métropole.</p>
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
    background: "#f4f1ea",
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
    fontSize: "22px",
    fontWeight: "bold"
  },

  links: {
    display: "flex",
    gap: "24px"
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
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.35)"
  },

  heroContent: {
    position: "relative",
    zIndex: 2,
    maxWidth: "950px",
    padding: "30px",
    color: "white"
  },

  badge: {
    letterSpacing: "3px",
    fontSize: "14px",
    marginBottom: "20px"
  },

  title: {
    fontSize: "68px",
    lineHeight: "1.1",
    marginBottom: "24px",
    color: "white",
    fontWeight: "bold"
  },

  subtitle: {
    fontSize: "28px",
    lineHeight: "1.5",
    marginBottom: "30px"
  },

  mainBtn: {
    background: "#17a36b",
    color: "white",
    border: "none",
    padding: "18px 40px",
    borderRadius: "12px",
    fontSize: "22px",
    fontWeight: "bold",
    cursor: "pointer"
  },

  reassure: {
    marginTop: "18px",
    fontSize: "16px"
  },

  section: {
    maxWidth: "1100px",
    margin: "auto",
    padding: "70px 25px"
  },

  h2: {
    fontSize: "42px",
    marginBottom: "30px",
    textAlign: "center"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: "20px"
  },

  card: {
    background: "white",
    padding: "28px",
    borderRadius: "14px",
    textAlign: "center",
    fontWeight: "bold",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
  },

  step: {
    background: "white",
    padding: "20px",
    borderRadius: "14px",
    marginBottom: "14px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
  },

  formWrap: {
    maxWidth: "1100px",
    margin: "auto",
    padding: "0 25px 80px"
  },

  formBlock: {
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
  },

  smallText: {
    textAlign: "center",
    color: "#666",
    marginBottom: "25px"
  },

  input: {
    display: "block",
    width: "100%",
    padding: "16px",
    marginBottom: "14px",
    borderRadius: "12px",
    border: "1px solid #ccc",
    fontSize: "16px",
    boxSizing: "border-box"
  },

  submitBtn: {
    width: "100%",
    background: "#17a36b",
    color: "white",
    border: "none",
    padding: "18px",
    borderRadius: "12px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer"
  },

  footerText: {
    textAlign: "center",
    marginTop: "18px",
    color: "#666",
    fontSize: "14px"
  },

  inner: {
    maxWidth: "900px",
    margin: "auto",
    padding: "80px 25px",
    fontSize: "22px",
    lineHeight: "1.7"
  }
};