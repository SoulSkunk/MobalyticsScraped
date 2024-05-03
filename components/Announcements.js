import Link from "next/link";
import Announcement from "@/components/component/Announcement";

export default async function Announcements() {
  // Récupérez les données des annonces
  const response = await fetch(
    "https://mobalytics.gg/wp-json/wp/v2/posts?per_page=6&_fields=id,slug,title,featured_media,date,excerpt"
  );
  const announcementsData = await response.json();

  // Récupérez les données des médias en utilisant l'ID des médias de chaque annonce
  const announcementsWithMediaData = await Promise.all(
    announcementsData.map(async (announcement) => {
      const mediaResponse = await fetch(
        `https://mobalytics.gg/wp-json/wp/v2/media/${announcement.featured_media}`
      );
      const mediaData = await mediaResponse.json();
      return { ...announcement, mediaData };
    })
  );

  return (
    <>
      <div>
        {/* Colonne */}
        <div className="mt-10">
          <h1 className="text-5xl font-bold mb-8 md:mb-12">
            Les dernières actus
          </h1>
          <p className="text-xl mb-6">
            Les dernières annonces, les mises à jour les plus récentes, et les
            tendances les plus brûlantes.
            <br /> Restez à l'affût des nouveautés, des analyses approfondies et
            des avis éclairés sur les jeux <br /> les plus populaires et les
            événements les plus en vogue.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Ajout de la classe grid */}
          {/* Ligne 3 par 3 */}
          {announcementsWithMediaData.map((announcement, i) => (
            <Link key={i} href={`AnnouncementDyna/${announcement.slug}`}>
              <Announcement data={announcement} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
