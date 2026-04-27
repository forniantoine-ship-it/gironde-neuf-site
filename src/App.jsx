export default function App() {
  return (
    <div style={styles.page}>
      <div style={styles.hero}>
        <p style={styles.badge}>GIRONDE • IMMOBILIER NEUF</p>

        <h1 style={styles.title}>
          🏡 Le chasseur du neuf en Gironde
        </h1>

        <p style={styles.subtitle}>
          Nous trouvons les meilleures opportunités au prix direct promoteur,
          sans frais supplémentaires.
        </p>

        <div style={styles.heroButtons}>
          <button style={styles.mainBtn}>
            🎯 Lancer ma recherche
          </button>

          <div style={styles.infoBox}>
            Service offert • Sans engagement
          </div>
        </div>
      </div>

      <div style={styles.cards}>
        <div style={styles.card}>💰 Prix direct promoteur garanti</div>
        <div style={styles.card}>✅ Aucun frais supplémentaire</div>
        <div style={styles.card}>🤝 Un seul conseiller dédié</div>
        <div style={styles.card}>🔕 Aucun démarchage multiple</div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>Comment fonctionne votre chasseur ?</h2>

        <div style={styles.steps}>
          <div style={styles.step}>1️⃣ Vous donnez vos critères</div>
          <div style={styles.step}>2️⃣ Nous analysons tout le marché</div>
          <div style={styles.step}>3️⃣ Vous recevez une sélection ciblée</div>
        </div>
      </div>

      <div style={styles.formBlock}>
        <h2 style={styles.h2}>🎯 Donnez des munitions à votre chasseur</h2>

        <p style={styles.smallText}>
          Plus vous êtes précis, plus la sélection sera pertinente.
        </p>

        <form
          action="https://formspree.io/f/xaqazyvg"
          method="POST"
        >
          <input name="zone" placeholder="Zone recherchée" style={styles.input} />
          <input name="budget" placeholder="Budget global" style={styles.input} />
          <input name="apport" placeholder="Apport disponible" style={styles.input} />
          <input name="nom" placeholder="Nom" style={styles.input} />
          <input name="telephone" placeholder="Téléphone" style={styles.input} />
          <input name="email" type="email" placeholder="Email" style={styles.input} />

          <button type="submit" style={styles.submitBtn}>
            🏹 Lancer la chasse
          </button>
        </form>

        <p style={styles.footerText}>
          🔒 Vos coordonnées restent confidentielles.
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "1100px",
    margin: "auto",
    padding: "30px",
    background: "#ffffff",
    color: "#111",
  },

  hero: {
    background: "linear-gradient(135deg,#0f172a,#065f46)",
    color: "white",
    padding: "60px 40px",
    borderRadius: "24px",
    textAlign: "center",
  },

  badge: {
    fontSize: "13px",
    letterSpacing: "2px",
    opacity: 0.8,
  },

  title: {
    fontSize: "56px",
    marginTop: "10px",
    marginBottom: "20px",
  },

  subtitle: {
    fontSize: "24px",
    maxWidth: "800px",
    margin: "auto",
    lineHeight: "1.5",
  },

  heroButtons: {
    marginTop: "30px",
  },

  mainBtn: {
    background: "white",
    color: "#111",
    padding: "16px 30px",
    border: "none",
    borderRadius: "14px",
    fontSize: "18px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  infoBox: {
    marginTop: "15px",
    fontSize: "16px",
    opacity: 0.9,
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "18px",
    marginTop: "30px",
  },

  card: {
    background: "#f8f8f8",
    padding: "20px",
    borderRadius: "16px",
    fontWeight: "bold",
    textAlign: "center",
  },

  section: {
    marginTop: "60px",
    textAlign: "center",
  },

  h2: {
    fontSize: "38px",
    marginBottom: "25px",
  },

  steps: {
    display: "grid",
    gap: "14px",
  },

  step: {
    background: "#f8f8f8",
    padding: "18px",
    borderRadius: "14px",
    fontSize: "20px",
  },

  formBlock: {
    marginTop: "70px",
    background: "#f9fafb",
    padding: "40px",
    borderRadius: "24px",
  },

  smallText: {
    textAlign: "center",
    color: "#666",
    marginBottom: "25px",
  },

  input: {
    display: "block",
    width: "100%",
    padding: "15px",
    marginBottom: "14px",
    borderRadius: "12px",
    border: "1px solid #ccc",
    fontSize: "16px",
    boxSizing: "border-box",
  },

  submitBtn: {
    width: "100%",
    background: "#065f46",
    color: "white",
    padding: "18px",
    border: "none",
    borderRadius: "14px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  footerText: {
    marginTop: "15px",
    textAlign: "center",
    color: "#666",
    fontSize: "14px",
  },
};

