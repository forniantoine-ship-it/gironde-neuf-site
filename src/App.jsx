import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Router>
      <div style={styles.page}>
        <nav style={styles.nav}>
        <h2 style={{ color: "#ffffff", margin: 0, fontSize: "18px", fontWeight: "700" }}>
  Le Chasseur du Neuf
</h2>

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
                  <Link to="/aides/donation-familiale" style={styles.dropItem}>Donation Familiale</Link>
                </div>
              )}
            </div>

            <Link to="/guide-rdv" style={styles.link}>Guide RDV</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guide-rdv" element={<GuideRDV />} />
          <Route path="/contact" element={<Page title="Contact" />} />

          <Route path="/aides/ptz" element={<PTZ />} />
          <Route path="/aides/action-logement" element={<ActionLogement />} />
          <Route path="/aides/tva-reduite" element={<TVA />} />
          <Route path="/aides/brs" element={<BRS />} />
          <Route path="/aides/donation-familiale" element={<Donation />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  const goForm = () => {
    document.getElementById("formulaire").scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <>
      <section style={styles.hero}>
        <div style={styles.overlay}></div>

        <div style={styles.heroContent}>
          <p style={styles.badge}>GIRONDE • IMMOBILIER NEUF</p>

          <h1 style={styles.title}>
            Le chasseur du neuf en Gironde
          </h1>

          <p style={styles.subtitle}>
            Accédez à l’ensemble des logements neufs en Gironde au prix direct promoteur.
          </p>

          <button style={styles.mainBtn} onClick={goForm}>
            Lancez la chasse
          </button>

          <p style={styles.reassure}>
            Une seule demande. Un seul conseiller dédié.
          </p>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Comment fonctionne notre accompagnement ?</h2>

        <div style={styles.step}>1. Vous nous indiquez vos critères</div>
        <div style={styles.step}>2. Nous analysons le marché neuf</div>
        <div style={styles.step}>3. Vous recevez les meilleures opportunités</div>
      </section>

      <section id="formulaire" style={styles.formWrap}>
        <div style={styles.formBlock}>
          <h2 style={styles.h2}>Une seule demande suffit</h2>

          <p style={styles.smallText}>
            Votre conseiller dédié analysera votre projet et vous contactera personnellement.
          </p>

          <form action="https://formspree.io/f/xaqazyvg" method="POST">
            <input name="nom" placeholder="Nom" style={styles.input} />
            <input name="telephone" placeholder="Téléphone" style={styles.input} />
            <input name="email" placeholder="Email" style={styles.input} />
            <input name="budget" placeholder="Budget" style={styles.input} />

            <button type="submit" style={styles.submitBtn}>
              Recevoir ma sélection
            </button>
          </form>
        </div>
      </section>
   
    </>
  );
}
function PTZ() {
  return (
    <div style={styles.inner}>
      <h1>Le Prêt à Taux Zéro (PTZ)</h1>

      <p style={styles.textBlock}>
        Découvrez comment financer une partie de votre achat immobilier sans intérêts.
      </p>

      <img
  src="/ptz.png"
  alt="Guide PTZ immobilier neuf"
  style={{
    width: "100%",
    maxWidth: "1100px",
    display: "block",
    margin: "40px auto",
    borderRadius: "18px",
    boxShadow: "0 12px 28px rgba(0,0,0,0.12)"
  }}
/>

      <button
        style={styles.submitBtn}
        onClick={() => window.location.href='/#formulaire'}
      >
        Lancer la chasse
      </button>
    </div>
  );
}
function TVA() {
  return (
    <div style={styles.inner}>
      <h1>La TVA Réduite à 5,5 %</h1>

      <p style={styles.textBlock}>
        Dans certaines zones éligibles, l’achat d’un logement neuf peut bénéficier
        d’une TVA réduite à 5,5 % au lieu de 20 %.
      </p>

      <p style={styles.textBlock}>
        C’est l’un des dispositifs les plus puissants car le gain est immédiat :
        vous achetez moins cher dès le départ.
      </p>

      <h2 style={styles.h2Title}>Pourquoi c'est une opportunité ?</h2>

      <ul>
        <li>Prix d’achat plus bas</li>
        <li>Crédit moins important</li>
        <li>Mensualité réduite</li>
        <li>Accès facilité à la propriété</li>
      </ul>

      <h2 style={styles.h2Title}>Exemple chiffré</h2>

      <p style={styles.textBlock}>
        Bien neuf classique : 285 000 €
      </p>

      <p style={styles.textBlock}>
        Même bien avec TVA réduite : 250 000 €
      </p>

      <p style={styles.textBlock}>
        👉 Économie immédiate : 35 000 €
      </p>

      <p style={styles.textBlock}>
        👉 Gain mensuel possible : environ 175 €/mois
      </p>

      <button
  style={styles.submitBtn}
  onClick={() => window.location.href='/#formulaire'}
>
  Lancer la chasse
</button>
    </div>
  );
}
function BRS() {
  return (
    <div style={styles.inner}>
      <h1>Le Bail Réel Solidaire (BRS)</h1>

      <p style={styles.textBlock}>
        Le Bail Réel Solidaire permet d’acheter un logement neuf à prix réduit,
        car vous achetez le logement tandis que le terrain reste détenu par un organisme foncier.
      </p>

      <p style={styles.textBlock}>
        Cela permet de devenir propriétaire avec un budget bien plus accessible.
      </p>

      <h2 style={styles.h2Title}>Pourquoi c'est avantageux ?</h2>

      <ul>
        <li>Prix d’achat réduit</li>
        <li>Mensualité plus faible</li>
        <li>Accès aux secteurs recherchés</li>
        <li>Très fort levier pour primo-accédants</li>
      </ul>

      <h2 style={styles.h2Title}>Exemple chiffré</h2>

      <p style={styles.textBlock}>
        Prix classique : 300 000 €
      </p>

      <p style={styles.textBlock}>
        Prix BRS : 220 000 €
      </p>

      <p style={styles.textBlock}>
        👉 Économie à l’achat : 80 000 €
      </p>

      <p style={styles.textBlock}>
        👉 Gain mensuel possible : plus de 300 €/mois
      </p>

      <button
  style={styles.submitBtn}
  onClick={() => window.location.href='/#formulaire'}
>
  Lancer la chasse
</button>
    </div>
  );
}
function Donation() {
  return (
    <div style={styles.inner}>
      <h1 style={{ lineHeight: "1.25", textAlign: "center" }}>
  La Donation Familiale 
</h1>

      <p style={styles.textBlock}>
        Les parents ou grands-parents peuvent aider un enfant ou petit-enfant
        à acheter sa résidence principale grâce à une donation d’argent.
      </p>

      <p style={styles.textBlock}>
        C’est un excellent levier pour constituer un apport personnel et obtenir
        un meilleur financement bancaire.
      </p>

      <h2 style={styles.h2Title}>Pourquoi c'est statégique ?</h2>

      <ul>
        <li>Augmente l’apport personnel</li>
        <li>Permet d’emprunter plus facilement</li>
        <li>Réduit les mensualités</li>
        <li>Anticipe la transmission patrimoniale</li>
      </ul>

      <h2 style={styles.h2Title}>Exemple concret</h2>

      <p style={styles.textBlock}>
        Donation familiale : 100 000 €
      </p>

      <p style={styles.textBlock}>
        Achat neuf : 300 000 €
      </p>

      <p style={styles.textBlock}>
        Crédit bancaire restant : 200 000 €
      </p>

      <p style={styles.textBlock}>
        👉 Dossier renforcé et mensualités fortement réduites.
      </p>

      <button
  style={styles.submitBtn}
  onClick={() => window.location.href='/#formulaire'}
>
  Lancer la chasse
</button>
    </div>
  );
}
function ActionLogement() {
  return (
    <div style={styles.inner}>
      <h1>Le Prêt Action Logement</h1>

      <p>
        Le Prêt Action Logement est réservé aux salariés d’entreprises privées éligibles.
      </p>

      <p style={styles.textBlock}>
        Il permet de compléter votre financement avec un taux avantageux,
        souvent inférieur au crédit bancaire classique.
      </p>

      <h2 style={styles.h2Title}>Pourquoi c'est avantageux ?</h2>

      <ul>
        <li>Taux réduit</li>
        <li>Complément du PTZ possible</li>
        <li>Mensualité allégée</li>
        <li>Dossier bancaire renforcé</li>
      </ul>

      <h2 style={styles.h2Title}>Exemple concret</h2>

      <p style={styles.textBlock}>
        Achat neuf : 250 000 €
      </p>

      <p style={styles.textBlock}>
        Prêt Action Logement : 30 000 €
      </p>

      <p style={styles.textBlock}>
        Crédit bancaire restant : 220 000 €
      </p>

      <p style={styles.textBlock}>
        👉 Gain mensuel possible + coût total du crédit réduit.
      </p>

      <button
  style={styles.submitBtn}
  onClick={() => window.location.href='/#formulaire'}
>
  Lancer la chasse 
</button>
    </div>
  );
}
function GuideRDV() {
  return (
    <div style={styles.inner}>
      <h1>Guide RDV</h1>

      <p style={styles.textBlock}>
        Découvrez comment votre conseiller vous accompagne de la demande jusqu’à la sélection finale.
      </p>

      <img
        src="/guide-rdv.png"
        alt="Guide rendez-vous immobilier neuf"
        style={{
          width: "100%",
          maxWidth: "900px",
          borderRadius: "18px",
          marginTop: "30px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.12)"
        }}
      />
    </div>
  );
}
function Page({ title }) {
  return (
    <div style={styles.inner}>
      <h1>{title}</h1>
      <p>Contenu premium en cours d’intégration.</p>
    </div>
  );
}

const styles = {
  page: { fontFamily: "Arial, sans-serif", background: "#f4f1ea" },

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
  fontSize: "18px",
  fontWeight: "700",
  color: "#ffffff",
  letterSpacing: "0.5px"
},

  links: { display: "flex", gap: "24px", alignItems: "center" },

  link: { color: "white", textDecoration: "none", cursor: "pointer" },

  dropdown: { position: "relative" },

  dropdownMenu: {
    position: "absolute",
    top: "30px",
    left: 0,
    background: "white",
    minWidth: "230px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
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
    color: "white",
    maxWidth: "900px",
    padding: "30px"
  },

  badge: { letterSpacing: "3px", marginBottom: "20px" },

  title: {
  fontSize: "58px",
  fontWeight: "700",
  color: "#ffffff",
  textAlign: "center",
  lineHeight: "1.1",
  marginBottom: "22px",
  textShadow: "0 4px 18px rgba(0,0,0,0.45)"
},
 
h2Title: {
  fontSize: "34px",
  fontWeight: "700",
  marginTop: "55px",
  marginBottom: "28px",
  textAlign: "center",
  color: "#111"
},

textBlock: {
  fontSize: "18px",
  lineHeight: "1.8",
  marginBottom: "22px",
  color: "#666",
  textAlign: "center"
},

bulletBlock: {
  fontSize: "18px",
  lineHeight: "1.9",
  marginBottom: "12px",
  color: "#666",
  textAlign: "center",
  listStylePosition: "inside"
},

  subtitle: {
    fontSize: "28px",
    marginBottom: "30px"
  },

  mainBtn: {
    background: "#17a36b",
    color: "white",
    border: "none",
    padding: "18px 40px",
    borderRadius: "12px",
    fontSize: "22px",
    cursor: "pointer"
  },

  reassure: { marginTop: "18px" },

  section: {
    maxWidth: "1100px",
    margin: "auto",
    padding: "70px 25px"
  },

  h2: {
    fontSize: "42px",
    textAlign: "center",
    marginBottom: "25px"
  },

  step: {
    background: "white",
    padding: "22px",
    borderRadius: "14px",
    marginBottom: "14px"
  },

  formWrap: {
    maxWidth: "1000px",
    margin: "auto",
    padding: "0 25px 80px"
  },

  formBlock: {
    background: "white",
    padding: "40px",
    borderRadius: "20px"
  },

  smallText: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#666"
  },

  input: {
    width: "100%",
    padding: "16px",
    marginBottom: "14px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    boxSizing: "border-box"
  },

  submitBtn: {
    width: "100%",
    background: "#17a36b",
    color: "white",
    border: "none",
    padding: "18px",
    borderRadius: "10px",
    fontSize: "18px"
  },

  inner: {
    maxWidth: "900px",
    margin: "auto",
    padding: "80px 25px"
 },


};