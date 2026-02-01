import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import dental from "@/assets/dental.png";
import diamond from "@/assets/diamond.jpg";
import interception from "@/assets/interception.jpg";
import modeling from "@/assets/modeling.jpg";
import wedding from "@/assets/wedding.jpg";
import qualitytravel from "@/assets/qualitytravel.png";
import savaniFarms from "@/assets/Savani Farms (2).jpg";
import thrmMarketing from "@/assets/Client Proposal THRM Marketing Agency (1).jpg";

const products = [
  { title: "Precision Smile Orthodontics", link: "#", thumbnail: dental },
  { title: "Diamond Tech", link: "#", thumbnail: diamond },
  { title: "Savani Farms", link: "#", thumbnail: savaniFarms },
  { title: "Core Modeling India", link: "#", thumbnail: modeling },
  { title: "Wedding RSVP", link: "#", thumbnail: wedding },
  { title: "Quality Travel World", link: "#", thumbnail: qualitytravel },
  { title: "Interception", link: "#", thumbnail: interception },
  { title: "THRM Digital Marketing Agency", link: "#", thumbnail: thrmMarketing },
];

export function HeroParallaxDemo() {
  return (
    <div className="w-full">
      <HeroParallax products={products} />
    </div>
  );
}
