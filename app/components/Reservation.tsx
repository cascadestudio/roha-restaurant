export default function Reservation() {
  return (
    <section id="reservation" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-[#4A2511] mb-8 text-center">Réservation</h2>
        <p className="text-xl text-gray-600 mb-8 text-center">
          Pour réserver une table, veuillez nous contacter par téléphone ou utiliser notre système de réservation en ligne.
        </p>
        <div className="flex justify-center">
          <button className="bg-[#4A2511] text-white font-bold py-2 px-4 rounded-full hover:bg-[#623319] transition duration-300">
            Réserver en ligne
          </button>
        </div>
      </div>
    </section>
  )
}

