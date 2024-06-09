import Image from "next/image";

interface IconWithStatProps {
  className?: string;
  imagePath: string;
  detail: string;
  plusDetail?: string;
}

const IconWithStat: React.FC<IconWithStatProps> = ({
  imagePath,
  detail,
  plusDetail,
  className,
}) => {
  return (
    <div className="flex flex-row items-center">
      <Image
        src={`${imagePath}`}
        width={18}
        height={18}
        className="mr-2"
        alt=""
      />
      <p className={className}>{detail}</p>
      <p className="text-secondaryColor text-sm ml-1">{plusDetail}</p>
    </div>
  );
};

export default IconWithStat;
