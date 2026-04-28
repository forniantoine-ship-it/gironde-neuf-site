import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Router>
      <div style={styles.page}>
        {/* MENU */}
        <nav style={styles.nav}>
          <div style={styles.logo}>Le Chasseur du Neuf</div>

          <div style={styles.links}>
            <Link to="/" style={styles.link}>Accueil</Link>

            <div style={styles.dropdown}>
  <div
    style={styles.link}
    onClick={() => setOpenMenu(!openMenu)}
  >
    Dispositifs d’aide ▾
  </div>

  {openMenu && (
    <div style={styles.dropdownMenu}>
      <Link to="/aides/ptz" style={styles.dropItem}>PTZ</Link>
      <Link to="/aides/action-logement" style={styles.dropItem}>Action Logement</Link>
      <Link to="/aides/tva-reduite" style={styles.dropItem}>TVA Réduite</Link>
      <Link to="/aides/brs" style={styles.dropItem}>BRS</Link>
      <Link to="/aides/prix-maitrises" style={styles.dropItem}>Prix Maîtrisés</Link>
    </div>
  )}
</div>

            <Link to="/guides/vefa" style={styles.link}>Guide VEFA</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guides/vefa" element={<Vefa />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/aides/ptz" element={<PTZ />} />
          <Route path="/aides/action-logement" element={<ActionLogement />} />
          <Route path="/aides/tva-reduite" element={<TVA />} />
          <Route path="/aides/brs" element={<BRS />} />
          <Route path="/aides/prix-maitrises" element={<PrixMaitrises />} />
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

      <section style={styles.section}>
        <div style={styles.grid}>
          <div style={styles.card}>Prix direct promoteur garanti</div>
          <div style={styles.card}>Un seul conseiller dédié</div>
          <div style={styles.card}>Aucun démarchage multiple</div>
          <div style={styles.card}>Accès à tout le marché neuf</div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Comment fonctionne notre accompagnement ?</h2>

        <div style={styles.step}>1. Vous nous indiquez vos critères</div>
        <div style={styles.step}>2. Nous analysons l’ensemble du marché neuf</div>
        <div style={styles.step}>3. Vous recevez une sélection ciblée</div>
      </section>

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

function Contact() {
  return (
    <div style={styles.inner}>
      <h1>Contact</h1>
      <p>Une seule demande. Un seul conseiller dédié.</p>
    </div>
  );
}

function PTZ() {
  return (
    <div style={styles.inner}>
      <h1>Prêt à Taux Zéro (PTZ)</h1>
      <p>Le PTZ est un prêt sans intérêt destiné aux primo-accédants.</p>
      <button style={styles.cta}>Vérifier mon éligibilité</button>
    </div>
  );
}

function ActionLogement() {
  return (
    <div style={styles.inner}>
      <h1>Prêt Action Logement</h1>
      <p>Un prêt réservé aux salariés du privé pour compléter votre financement.</p>
      <button style={styles.cta}>Étudier mon dossier</button>
    </div>
  );
}

function TVA() {
  return (
    <div style={styles.inner}>
      <h1>TVA Réduite</h1>
      <p>Certaines zones permettent d’acheter en TVA à 5,5 %.</p>
      <button style={styles.cta}>Voir si j’y ai droit</button>
    </div>
  );
}

function BRS() {
  return (
    <div style={styles.inner}>
      <h1>Bail Réel Solidaire (BRS)</h1>
      <p>Achetez un logement neuf à prix réduit grâce au BRS.</p>
      <button style={styles.cta}>Étudier mon éligibilité</button>
    </div>
  );
}

function PrixMaitrises() {
  return (
    <div style={styles.inner}>
      <h1>Prix Maîtrisés</h1>
      <p>Des logements neufs à tarifs encadrés selon certaines communes.</p>
      <button style={styles.cta}>Voir les opportunités</button>
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
    zIndex: 1000
  },

  logo: {
    fontSize: "22px",
    fontWeight: "bold"
  },

  links: {
    display: "flex",
    gap: "24px",
    alignItems: "center"
  },

  link: {
    color: "white",
    textDecoration: "none",
    cursor: "pointer"
  },

  dropdown: {
    position: "relative"
  },

  dropdownMenu: {
    position: "absolute",
    top: "28px",
    left: 0,
    background: "white",
    minWidth: "220px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
    borderRadius: "10px",
    padding: "10px"
  },

  dropItem: {
    display: "block",
    padding: "10px",
    color: "#111",
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
  },

  cta: {
    marginTop: "25px",
    background: "#17a36b",
    color: "white",
    border: "none",
    padding: "16px 28px",
    borderRadius: "10px",
    fontSize: "18px",
    cursor: "pointer"
  }
};