export default function App() {
  return (
    <div style={{
      fontFamily:"Arial",
      maxWidth:"1000px",
      margin:"auto",
      padding:"40px",
      lineHeight:"1.6"
    }}>

      <h1 style={{fontSize:"48px"}}>
        🏡 Toute l’offre de logements neufs en Gironde, en un seul endroit
      </h1>

      <p style={{fontSize:"24px", color:"#555"}}>
        Recevez gratuitement une sélection personnalisée selon votre budget.
      </p>

      <button style={{
        background:"#111",
        color:"white",
        padding:"18px 28px",
        border:"none",
        borderRadius:"12px",
        fontSize:"20px",
        marginTop:"20px"
      }}>
        Voir toute l’offre disponible
      </button>

      <hr style={{margin:"50px 0"}} />

      <h2>Pourquoi passer par nous ?</h2>

      <ul>
        <li>✅ Prix direct promoteur</li>
        <li>✅ Aucun frais supplémentaire</li>
        <li>✅ Un seul conseiller dédié</li>
        <li>✅ Aucun démarchage multiple</li>
      </ul>

      <hr style={{margin:"50px 0"}} />

      <h2>Comment ça fonctionne ?</h2>

      <p>1️⃣ Vous remplissez votre demande</p>
      <p>2️⃣ Un conseiller unique vous contacte</p>
      <p>3️⃣ Vous recevez une large sélection adaptée</p>

      <hr style={{margin:"50px 0"}} />

      <h2>Recevez votre sélection gratuite</h2>

      <form>
        <input placeholder="Secteur recherché en Gironde" style={champ} />
        <input placeholder="Budget global" style={champ} />
        <input placeholder="Apport disponible" style={champ} />
        <input placeholder="Nom" style={champ} />
        <input placeholder="Téléphone" style={champ} />
        <input placeholder="Email" style={champ} />

        <button style={{
          background:"green",
          color:"white",
          padding:"16px 25px",
          border:"none",
          borderRadius:"12px",
          fontSize:"18px",
          marginTop:"20px"
        }}>
          Recevoir ma sélection gratuite
        </button>
      </form>

      <p style={{marginTop:"20px", color:"#666"}}>
        🔒 Vos coordonnées restent confidentielles.
      </p>

    </div>
  );
}

const champ = {
  display:"block",
  width:"100%",
  padding:"14px",
  marginTop:"15px",
  border:"1px solid #ccc",
  borderRadius:"10px",
  fontSize:"16px"
};