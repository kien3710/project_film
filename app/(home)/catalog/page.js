import BreadCrumbs from "@/components/ui/breadcrumbs";
import React from "react";

const Catalog = () => {
  return (
    <div className="container mx-auto">
      <div className="catalog py-[50px] my-[50px] ">
        <BreadCrumbs />
        <div className="title text-white text-[20px]">Catalog</div>
        <div class="grid grid-cols-4 gap-10 product">
          <div className="text-white catalog_item bg-red-500 h-[250px] rounded-[25px] flex">
            <span className="bg-[#13171f] inline ">Animals</span>
            <p>322</p>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Catalog;
