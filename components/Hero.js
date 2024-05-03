import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center mt-12 relative">
      {/* Image avec texte superposé */}
      <div className="w-full md:w-1/2 p-6 relative">
        <Image
          src={
            "https://cdn2.unrealengine.com/tfs-warp-gameplay-16x9-textless-1920x1080-336d364327b4.jpg"
          }
          alt="Image destiny 2"
          width={900}
          height={700}
          className="rounded-lg"
        />
        {/* Texte superposé */}
        <div className="absolute bottom-6 bg-black bg-opacity-50 text-white py-2 px-4  flex items-center justify-center">
          <p className="text-lg">Destiny 2 : La forme final</p>
        </div>
      </div>
      {/* Contenu en dessous de l'image */}
      <div className="w-full md:w-1/2 p-6">
        <h1 className="text-5xl font-bold mb-8 md:mb-12">
          Actualité des tryharders
        </h1>
        <p className="text-xl mb-6">
          Les dernières nouvelles du monde du gaming font vibrer la communauté
          avec une série d'annonces excitantes. Des titres très attendus comme
          "Elden Ring" et "Horizon Forbidden West" ont dévoilé de nouvelles
          bandes-annonces captivantes, laissant les fans en émoi. En parallèle,
          les développeurs indépendants continuent d'étonner avec des jeux
          innovants.
        </p>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 md:justify-end">
          <Link
            href="#announcement"
            className="btn btn-base btn-primary text-base-100"
          >
            Voir les dernières actus
          </Link>
          <a
            href="https://www.bungie.net/7/fr/Destiny/NewLight"
            target="_blank"
          >
            <button className="btn btn-base btn-primary text-base-100">
              Destiny 2
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
