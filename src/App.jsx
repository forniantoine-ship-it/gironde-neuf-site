export default function App() {

  const goForm = () => {
    document.getElementById("formulaire").scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div style={styles.page}>

      <div style={styles.hero}>
        <div style={styles.overlay}></div>

        <div style={styles.heroContent}>
          <p style={styles.badge}>GIRONDE • IMMOBILIER NEUF</p>

          <h1 style={styles.title}>
            Le chasseur du neuf en Gironde
          </h1>

          <p style={styles.subtitle}>
            Nous trouvons les meilleures opportunités au prix direct promoteur,
            sans frais supplémentaires.
          </p>

          <button style={styles.mainBtn} onClick={goForm}>
            Lancer ma recherche
          </button>
        </div>
      </div>

      <div style={styles.container}>

        <div style={styles.cards}>
          <div style={styles.card}>Prix direct promoteur garanti</div>
          <div style={styles.card}>Aucun frais supplémentaire</div>
          <div style={styles.card}>Un seul conseiller dédié</div>
          <div style={styles.card}>Aucun démarchage multiple</div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.h2}>Comment fonctionne notre accompagnement ?</h2>

          <div style={styles.step}>1. Vous nous indiquez vos critères</div>
          <div style={styles.step}>2. Nous analysons l'ensemble du marché neuf</div>
          <div style={styles.step}>3. Vous recevez une sélection ciblée</div>
        </div>

        <div id="formulaire" style={styles.formBlock}>
          <h2 style={styles.h2}>Démarrer ma recherche</h2>

          <p style={styles.smallText}>
            Remplissez votre demande. Un conseiller dédié vous contactera.
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
            Vos coordonnées restent confidentielles.
          </p>
        </div>

      </div>
    </div>
  );
}

const styles = {

  page: {
    margin: 0,
    padding: 0,
    fontFamily: "Arial, sans-serif",
    background: "#f4f1ea"
  },

  hero: {
    position: "relative",
   backgroundImage:
"url('/bordeaux-premium.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "620px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.22)"
  },

  heroContent: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    color: "white",
    maxWidth: "900px",
    padding: "30px"
  },

  badge: {
  letterSpacing: "2px",
  fontSize: "14px",
  marginBottom: "20px",
},

  title: {
  fontSize: "62px",
  marginBottom: "20px",
  lineHeight: "1.1",
  color: "white"
},

  subtitle: {
    fontSize: "24px",
    lineHeight: "1.5",
    marginBottom: "35px"
  },

  mainBtn: {
    background: "#17a36b",
    color: "white",
    border: "none",
    padding: "18px 34px",
    borderRadius: "12px",
    fontSize: "18px",
    cursor: "pointer",
    fontWeight: "bold"
  },

  container: {
    maxWidth: "1100px",
    margin: "auto",
    padding: "50px 25px"
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "18px",
    marginTop: "-80px",
    position: "relative",
    zIndex: 5
  },

  card: {
    background: "white",
    padding: "22px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    textAlign: "center",
    fontWeight: "bold"
  },

  section: {
    marginTop: "70px",
    textAlign: "center"
  },

  h2: {
    fontSize: "38px",
    marginBottom: "25px",
    color: "#111"
  },

  step: {
    background: "white",
    padding: "18px",
    marginBottom: "14px",
    borderRadius: "14px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
  },

  formBlock: {
    marginTop: "70px",
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
  },

  smallText: {
    color: "#666",
    marginBottom: "25px",
    textAlign: "center"
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
  }
};