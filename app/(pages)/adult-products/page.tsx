import React from "react";
import Page from "../_components_products/Page";

const bannerImage = {
  src: "/images/products/adults/banner.png",
  alt: "Adult Products Banner",
};

const productNames = [
  "B12",
  "Joint Care",
  "Sleep Aid",
  "Stress Relief",
  "Libido",
  "Cholesterol",
  "Prebiotic",
  "Hair, Skin & Nail Booster",
  "Adult Multivitamins",
  "Sore Throat Relief",
];

const gummies = productNames.map((name, i) => ({
  src: `/images/products/adults/a${i + 1}.png`,
  alt: name,
}));

// Placeholder taglines, to be filled in later
const taglines = [
  "For Healthy Cells",
  "For Terminating Inflammation",
  "For Maintaining Natural &Enjoyable Sleep",
  "For Calming & Rejuvinating Effects",
  "For Boosting Passion & Energy ",
  "For Maintaining Healthy Cholesterol Levels",
  "For Healthy Bowel Movement",
  "For Healthy Hair, Skin & Nails ",
  "For Maintaining Essential Nutrients",
  "For Quick Recovery",
];

const page = () => {
  return (
    <Page bannerImage={bannerImage} gummies={gummies} taglines={taglines} />
  );
};

export default page;
