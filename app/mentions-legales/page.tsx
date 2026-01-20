"use client";

import { X } from "lucide-react";
import Link from "next/link";

export default function MentionsLegales() {
  return (
    <div className="bg-[#FDF6E9] text-[#4A2511] min-h-screen p-5 font-sans leading-relaxed relative">
      {/* Back button */}
      <Link
        href="/"
        className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#F5ECD7] transition-colors duration-300"
      >
        <X className="h-6 w-6" />
        <span className="sr-only">Retour à l'accueil</span>
      </Link>

      <div className="max-w-4xl mx-auto pt-16">
        <h1 className="text-3xl font-bold mt-4 mb-8">Mentions Légales</h1>

        <h2 className="text-2xl font-bold mt-6">1. Éditeur du site</h2>
        <p>
          <strong>Nom de l'entreprise :</strong> ROHA
        </p>
        <p>
          <strong>Forme juridique :</strong> Société à responsabilité limitée
          (SARL)
        </p>
        <p>
          <strong>Siège social :</strong> 5 Rue Pierre Dupré, 13008 Marseille,
          France
        </p>
        <p>
          <strong>SIRET :</strong> 935 266 239 00018
        </p>
        <p>
          <strong>Directeur de la publication :</strong> Frehiwot Zeleke Gurumu
        </p>
        <p>
          <strong>Contact :</strong>{" "}
          <a
            href="mailto:roharestaurant@yahoo.com"
            className="text-[#4A2511] underline hover:text-black"
          >
            roharestaurant@yahoo.com
          </a>
        </p>
        <p>
          <strong>Téléphone :</strong>{" "}
          <a
            href="tel:+33956385840"
            className="text-[#4A2511] underline hover:text-black"
          >
            09 56 38 58 40
          </a>
        </p>

        <h2 className="text-2xl font-bold mt-6">2. Hébergeur du site</h2>
        <p>
          <strong>Nom :</strong> Vercel Inc.
        </p>
        <p>
          <strong>Adresse :</strong> 440 North Barranca Avenue, Suite 4133,
          Covina, CA 91723, États-Unis
        </p>
        <p>
          <strong>Site web :</strong>{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4A2511] underline hover:text-black"
          >
            https://vercel.com
          </a>
        </p>

        <h2 className="text-2xl font-bold mt-6">3. Propriété intellectuelle</h2>
        <p>
          Le contenu du site ROHA, incluant, de manière non limitative, les
          graphismes, images, textes, vidéos, animations, sons, logos, gifs et
          icônes ainsi que leur mise en forme sont la propriété exclusive de la
          société ROHA, à l'exception des marques, logos ou contenus appartenant
          à d'autres sociétés partenaires ou auteurs.
        </p>

        <h2 className="text-2xl font-bold mt-6">
          4. Protection des données personnelles
        </h2>
        <p>Le site ROHA ne collecte pas de données personnelles.</p>

        <h2 className="text-2xl font-bold mt-6">5. Cookies</h2>
        <p>Le site ROHA n'utilise pas de cookies.</p>

        <h2 className="text-2xl font-bold mt-6">6. Droit applicable</h2>
        <p className="mb-12">
          Les présentes mentions légales sont régies par le droit français. En
          cas de litige, et après l'échec de toute tentative de recherche d'une
          solution amiable, les tribunaux français seront seuls compétents pour
          connaître de ce litige.
        </p>
      </div>
    </div>
  );
}
