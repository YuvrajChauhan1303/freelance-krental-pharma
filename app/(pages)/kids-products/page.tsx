import React from "react";
import Page from "../_components_products/Page";

const bannerImage = {
  src: "/images/products/kids/banner.png",
  alt: "Kids Products Banner",
};

const productNames = [
  "Appetite Booster",
  "Multi Vitamins",
  "Eye Care",
  "Sleep Aid",
  "Weight Balancer",
  "Ultra Omega Compete",
  "D3 + K2 Bone Health",
  "Immune Booster",
  "Height Booster",
  "Brain Developer",
];

const gummies = productNames.map((name, i) => ({
  src: `/images/products/kids/kids${i + 1}.png`,
  alt: name,
}));

const taglines = [
  "For Joyful Eating & Healty Well-being",
  "For Better Mental & Physical Well-Being",
  "For Healthy Vision",
  "For Maintaining Natural & Enjoyable Sleep",
  "For Supporting Healthy Weight",
  "For Healthy Brain Development",
  "For Stronger Bones & Better Well-being",
  "For Protection Against Various Infections",
  "For Maintaining Height Growth",
  "For Maintaining Cognitive Development",
];

const page = () => {
  return (
    <Page
      bannerImage={bannerImage}
      gummies={gummies}
      
      taglines={taglines}
    />
  );
};

export default page;
