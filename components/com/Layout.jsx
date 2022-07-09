import React, { useEffect, useState } from "react";
import { NavBar } from "../Files";

export default function Layout({
  children,
  Products,
  setProducts,
  ShoppingCart,
}) {
  return (
    <div
      className="w-screen h-screen overflow-hidden"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto auto 1fr",
      }}
    >
      <NavBar
        ShoppingCart={ShoppingCart}
        Products={Products}
        setProducts={setProducts}
      />
      <div className="overflow-scroll z-30 bg-gray-200 z-30 py-5">
        {children}
      </div>

    </div>
  );
}
