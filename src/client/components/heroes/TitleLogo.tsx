import Image from "next/image";

const TitleLogo = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="mb-24">
        <Image
          src="/images/dota2_logo_color.png"
          className="object-cover w-full h-full"
          alt="logo"
          width={384}
          height={64}
        />
      </div>
    </div>
  );
};

export default TitleLogo;
