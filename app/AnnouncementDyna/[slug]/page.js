import Image from "next/image";
import "@/styles/slugPage.css";

export default async function page({ params }) {
  const response = await fetch(
    `https://mobalytics.gg/wp-json/wp/v2/posts?slug=${params.slug}&_fields=id,title,content,date,author,featured_media`
  );
  const data = await response.json();

  const announcement = data[0];

  //image
  const mediaResponse = await fetch(
    `https://mobalytics.gg/wp-json/wp/v2/media/${announcement.featured_media}`
  );
  const mediaData = await mediaResponse.json();
  return (
    <>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 mt-12">
          {announcement.title.rendered}
        </h1>
        <div className="relative">
          <Image
            src={mediaData.source_url}
            layout="responsive"
            width={600}
            height={400}
            className="object-cover object-center rounded-xl"
            alt="thumbnail"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
        </div>
        <div
          className="mt-8 prose mt-8 prose flex flex-col gap-4 "
          dangerouslySetInnerHTML={{ __html: announcement.content.rendered }}
        />
      </div>
    </>
  );
}
