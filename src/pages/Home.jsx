import React from "react";
import { SectionHeader } from "../component/SectionHeader";
import Categories from "../component/Categories";
import Products from "../component/Products";




export default function Home() {
 

  return (
    <div>
      <SectionHeader
        title="Browse The Range"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <h1>Home</h1>
      <Categories />
      <Products />
    </div>
  );
}