"use client";

import HeroDetails from "@/src/client/components/hero-details/HeroDetails";
import { useSearchParams } from "next/dist/client/components/navigation";

const HeroInfo = () => {
  const data = useSearchParams();

  return <HeroDetails data={data} />;
};

export default HeroInfo;
