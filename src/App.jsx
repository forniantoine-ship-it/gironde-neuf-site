export default function App(){return (<div className='max-w-5xl mx-auto p-8 space-y-10 font-sans'>
<section className='space-y-4'>
<h1 className='text-5xl font-bold'>🏡 Le chasseur du neuf en Gironde</h1>
<p className='text-xl text-gray-600'>Nous trouvons les meilleures opportunités au prix direct promoteur, sans frais supplémentaires.</p>
<button className='px-6 py-4 rounded-2xl bg-black text-white text-lg'>🎯 Lancer ma recherche</button>
</section>
<section className='grid md:grid-cols-4 gap-4 text-center'>
<div className='p-4 rounded-2xl shadow'>Prix direct promoteur garanti</div>
<div className='p-4 rounded-2xl shadow'>Aucun frais supplémentaire</div>
<div className='p-4 rounded-2xl shadow'>Un seul chasseur dédié</div>
<div className='p-4 rounded-2xl shadow'>Aucun démarchage multiple</div>
</section>
<section className='space-y-4'>
<h2 className='text-3xl font-semibold'>Comment fonctionne votre chasseur ?</h2>
<div className='grid md:grid-cols-3 gap-4'>
<div className='p-4 rounded-2xl shadow'>1️⃣ Vous donnez vos critères</div>
<div className='p-4 rounded-2xl shadow'>2️⃣ Votre chasseur analyse le marché</div>
<div className='p-4 rounded-2xl shadow'>3️⃣ Vous recevez une sélection ciblée</div>
</div>
</section>
<section className='space-y-4'>
<h2 className='text-3xl font-semibold'>🎯 Donnez des munitions à votre chasseur</h2>
<input className='border p-3 rounded-xl w-full' placeholder='Zone recherchée en Gironde'/>
<input className='border p-3 rounded-xl w-full' placeholder='Budget global'/>
<input className='border p-3 rounded-xl w-full' placeholder='Apport disponible'/>
<input className='border p-3 rounded-xl w-full' placeholder='Nom'/>
<input className='border p-3 rounded-xl w-full' placeholder='Téléphone'/>
<input className='border p-3 rounded-xl w-full' placeholder='Email'/>
<button className='px-6 py-4 rounded-2xl bg-green-600 text-white text-lg w-full'>🏹 Lancer la chasse</button>
<p className='text-sm text-gray-500'>🔒 Vos coordonnées restent confidentielles. Service offert au prix direct promoteur.</p>
</section>
</div>)}
