import composez from "@/assets/composez.png";
import inserez from "@/assets/inserez.png";
import premierapp from "@/assets/premierapp.png";
import profitez from "@/assets/profitez.png";
import Image from "next/image";
import NumberOrder from "../common/number-order";
import DownloadApp from "../common/download-app";

export default function VousChoisissez() {
  const content = [
    {
      text: "Téléchargez l'application My Ooredoo",
      image: premierapp,
    },
    {
      text: "Composez votre numéro mobile",
      image: composez,
    },
    {
      text: "Insérez vos informations",
      image: inserez,
    },
    {
      text: "Profitez d'un volume internet doublé en récupérant votre SIM",
      image: profitez,
    },
  ];
  return (
    <div className=" bg-[#F7F7F7] py-12  ">
      <div className="wrapper space-y-12">
        <h2 className=" text-center">
          Sur N'YOOZ <br /> c'est vous qui choisissez!
        </h2>
        <div className=" flex flex-wrap gap-y-16 justify-between">
          {content.map((Element, index) => (
            <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-0 basis-full lg:basis-[23%]">
              <div className="justify-center lg:justify-start flex basis-full lg:basis-[48%]">
                <Image
                  className=" w-1/2 md:w-full object-contain  "
                  src={Element.image}
                  alt=""
                />
              </div>
              <div className=" space-y-5 basis-full items-center lg:items-start text-center lg:text-left lg:basis-[48%]">
                <NumberOrder number={index + 1} />
                <p className=" font-semibold">{Element.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
