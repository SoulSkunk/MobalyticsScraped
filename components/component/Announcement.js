import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Image from "next/image";

export default async function Announcement({ data }) {
  const { title, excerpt, featured_media } = data;

  const response = await fetch(
    `https://mobalytics.gg/wp-json/wp/v2/media/${featured_media}`
  );
  const announcementsImgData = await response.json();

  return (
    <div>
      <CardContainer className="inter-var">
        <CardBody className="bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-secondary dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-[470px] h-[500px] flex flex-col justify-between  items-center ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white line-clamp-1"
          >
            {title.rendered}
          </CardItem>
          <CardItem
            as="div"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-4"
            dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
          />
          <CardItem translateZ="100" className="w-full h-full max-h-64  mt-4">
            <Image
              src={announcementsImgData.source_url}
              fill
              className="object-cover object-center rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}
