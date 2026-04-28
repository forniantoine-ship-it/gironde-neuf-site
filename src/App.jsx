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
      <h1>Le Prêt à Taux Zéro (PTZ)</h1>

      <p>
        Le Prêt à Taux Zéro est un prêt aidé par l’État, sans intérêts à payer.
        Il vient compléter un crédit immobilier classique et permet de financer
        une partie de votre achat à coût réduit.
      </p>

      <p>
        C’est l’un des meilleurs leviers pour acheter dans le neuf, car il permet
        de baisser le coût total du crédit tout en conservant une mensualité maîtrisée.
      </p>

      <h2>Pourquoi c’est avantageux ?</h2>

      <ul>
        <li>Aucun intérêt sur la part financée en PTZ</li>
        <li>Mensualité globale réduite</li>
        <li>Meilleure capacité d’achat</li>
        <li>Achat possible plus tôt avec moins d’apport</li>
      </ul>

      <h2>Exemple chiffré</h2>

      <p><strong>Pour un appartement neuf à 250 000 €</strong></p>

      <p>
        <strong>Sans PTZ :</strong><br />
        Crédit bancaire : 250 000 €<br />
        Durée : 25 ans<br />
        Taux : 3,5 %<br />
        Mensualité : environ 1 252 €/mois
      </p>

      <p>
        <strong>Avec PTZ de 100 000 € + prêt classique de 150 000 € :</strong>
      </p>

      <p>
        <strong>Prêt bancaire classique :</strong><br />
        Montant : 150 000 €<br />
        Durée : 25 ans<br />
        Taux : 3,5 %<br />
        Mensualité : environ 751 €/mois
      </p>

      <p>
        <strong>PTZ :</strong><br />
        Montant : 100 000 €<br />
        Taux : 0 %<br />
        Remboursement lissé sur 25 ans<br />
        Mensualité : environ 333 €/mois
      </p>

      <p>
        <strong>Mensualité totale avec PTZ :</strong><br />
        751 € + 333 € = <strong>1 084 €/mois</strong>
      </p>

      <h2>Résultat concret</h2>

      <p>
        Sans PTZ : 1 252 €/mois<br />
        Avec PTZ : 1 084 €/mois<br />
        <strong>Gain mensuel : environ 168 €/mois</strong><br />
        <strong>Économie totale sur 25 ans : plus de 50 000 € d’intérêts évités</strong>
      </p>

      <h2>Ce que cela change</h2>

      <p>
        Le PTZ permet souvent de passer d’un projet trop juste à un achat réalisable
        immédiatement, tout en gardant une mensualité confortable.
      </p>

      <button style={styles.cta}>
        Vérifier mon éligibilité PTZ
      </button>
    </div>
  );
}

function ActionLogement() {
  return (
    <div style={styles.inner}>
      <h1>Le Prêt Action Logement</h1>

      <p>
        Le Prêt Action Logement est un prêt réservé aux salariés d’entreprises
        du secteur privé éligibles.
      </p>

      <p>
        Il permet de financer une partie de l’achat de votre résidence principale
        avec un taux très avantageux, souvent bien inférieur à celui d’un crédit immobilier classique.
      </p>

      <p>
        C’est une excellente solution pour réduire la mensualité globale et améliorer
        la faisabilité du projet.
      </p>

      <h2>Pourquoi c’est intéressant ?</h2>

      <ul>
        <li>Taux réduit sur une partie du financement</li>
        <li>Peut compléter le PTZ</li>
        <li>Diminue le coût total du crédit</li>
        <li>Permet de conserver plus d’épargne</li>
      </ul>

      <h2>Exemple chiffré</h2>

      <p><strong>Pour un appartement neuf à 250 000 €</strong></p>

      <p>
        <strong>Sans Prêt Action Logement :</strong><br />
        Crédit bancaire : 250 000 €<br />
        Durée : 25 ans<br />
        Taux : 3,5 %<br />
        Mensualité : environ 1 252 €/mois
      </p>

      <p>
        <strong>Avec Prêt Action Logement de 30 000 € + prêt classique de 220 000 € :</strong>
      </p>

      <p>
        <strong>Prêt bancaire classique :</strong><br />
        Montant : 220 000 €<br />
        Durée : 25 ans<br />
        Taux : 3,5 %<br />
        Mensualité : environ 1 102 €/mois
      </p>

      <p>
        <strong>Prêt Action Logement :</strong><br />
        Montant : 30 000 €<br />
        Taux préférentiel estimé : 1 %<br />
        Durée : 25 ans<br />
        Mensualité : environ 113 €/mois
      </p>

      <p>
        <strong>Mensualité totale avec Action Logement :</strong><br />
        1 102 € + 113 € = <strong>1 215 €/mois</strong>
      </p>

      <h2>Résultat concret</h2>

      <p>
        Sans aide : 1 252 €/mois<br />
        Avec Prêt Action Logement : 1 215 €/mois<br />
        <strong>Gain mensuel : environ 37 €/mois</strong><br />
        <strong>Économie totale sur la durée : plusieurs milliers d’euros d’intérêts évités</strong>
      </p>

      <h2>Ce que cela change</h2>

      <p>
        Le Prêt Action Logement est souvent un excellent complément pour renforcer
        un dossier, réduire le coût du crédit et acheter plus sereinement.
      </p>

      <button style={styles.cta}>
        Vérifier mon éligibilité Action Logement
      </button>
    </div>
  );
}

function TVA() {
  return (
    <div style={styles.inner}>
      <h1>La TVA Réduite à 5,5 %</h1>

      <p>
        Dans certaines zones éligibles, l’achat d’un logement neuf en résidence
        principale peut bénéficier d’une TVA réduite à 5,5 % au lieu de 20 %.
      </p>

      <p>
        Cette aide permet de payer le bien moins cher dès l’achat, ce qui réduit
        automatiquement le montant à financer et donc la mensualité du crédit.
      </p>

      <p>
        C’est l’un des dispositifs les plus puissants car le gain est immédiat.
      </p>

      <h2>Pourquoi c’est une opportunité ?</h2>

      <ul>
        <li>Prix d’achat plus bas</li>
        <li>Crédit moins important</li>
        <li>Mensualité réduite</li>
        <li>Accès facilité à la propriété</li>
      </ul>

      <h2>Exemple chiffré</h2>

      <p><strong>Pour un appartement neuf identique :</strong></p>

      <p>
        <strong>Sans TVA réduite :</strong><br />
        Prix d’achat : 285 000 €<br />
        Crédit sur 25 ans<br />
        Taux : 3,5 %<br />
        Mensualité : environ 1 427 €/mois
      </p>

      <p>
        <strong>Avec TVA réduite à 5,5 % :</strong><br />
        Prix d’achat : 250 000 €<br />
        Crédit sur 25 ans<br />
        Taux : 3,5 %<br />
        Mensualité : environ 1 252 €/mois
      </p>

      <h2>Résultat concret</h2>

      <p>
        Sans TVA réduite : 1 427 €/mois<br />
        Avec TVA réduite : 1 252 €/mois
      </p>

      <p>
        <strong> Gain mensuel : environ 175 €/mois</strong><br />
        <strong> Économie immédiate à l’achat : 35 000 €</strong><br />
        <strong> Économie totale avec les intérêts évités : encore davantage</strong>
      </p>

      <h2>Ce que cela change</h2>

      <p>
        Un logement jugé trop cher en TVA classique peut devenir finançable grâce
        à la TVA réduite.
      </p>

      <p>
         C’est souvent le levier qui permet d’acheter dans un secteur recherché
        avec une mensualité maîtrisée.
      </p>

      <button style={styles.cta}>
        Vérifier mon éligibilité TVA réduite
      </button>
    </div>
  );
}

function BRS() {
  return (
    <div style={styles.inner}>
      <h1>Le Bail Réel Solidaire (BRS)</h1>

      <p>
        Le Bail Réel Solidaire permet d’acheter un logement neuf à prix réduit,
        car vous achetez uniquement le logement, tandis que le terrain reste
        propriété d’un Organisme Foncier Solidaire.
      </p>

      <p>
        En contrepartie, l’acquéreur verse une redevance mensuelle modérée
        pour l’occupation du terrain.
      </p>

      <p>
        Ce dispositif permet souvent d’acheter dans des zones où le marché
        classique serait inaccessible.
      </p>

      <h2>Pourquoi c’est puissant ?</h2>

      <ul>
        <li>Prix d’achat fortement réduit</li>
        <li>Crédit immobilier moins élevé</li>
        <li>Mensualité globale plus accessible</li>
        <li>Permet d’acheter dans des secteurs recherchés</li>
      </ul>

      <h2>Exemple chiffré</h2>

      <p><strong>Pour un appartement neuf identique :</strong></p>

      <p>
        <strong>Achat classique :</strong><br />
        Prix : 300 000 €<br />
        Crédit sur 25 ans<br />
        Taux : 3,5 %<br />
        Mensualité : environ 1 502 €/mois
      </p>

      <p>
        <strong>Achat en Bail Réel Solidaire :</strong><br />
        Prix BRS : 220 000 €<br />
        Crédit sur 25 ans<br />
        Taux : 3,5 %<br />
        Mensualité : environ 1 101 €/mois
      </p>

      <p>
        <strong>Redevance foncière :</strong><br />
        Estimation : 90 €/mois
      </p>

      <p>
        <strong>Mensualité totale en BRS :</strong><br />
        1 101 € + 90 € = <strong>1 191 €/mois</strong>
      </p>

      <h2>Résultat concret</h2>

      <p>
        Achat classique : 1 502 €/mois<br />
        Achat en BRS : 1 191 €/mois
      </p>

      <p>
        <strong>Gain mensuel : environ 311 €/mois</strong><br />
        <strong>Économie à l’achat : 80 000 €</strong>
      </p>

      <h2>Ce que cela change</h2>

      <p>
        Le Bail Réel Solidaire permet souvent de devenir propriétaire d’un logement
        neuf plus grand ou mieux situé, tout en gardant une mensualité inférieure
        au marché classique.
      </p>

      <p>
        Même avec la redevance, le gain reste très significatif.
      </p>

      <button style={styles.cta}>
        Vérifier mon éligibilité BRS
      </button>
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