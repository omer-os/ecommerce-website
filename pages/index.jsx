import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Layout } from "../components/Files";
import Head from "next/head";
import Script from "next/script";
import {motion} from "framer-motion";

export default function Index({ data }) {
  const [Products, setProducts] = useState([]);
  const [ShoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    setProducts(data.data);
  }, []);

  return (
    <div>
      
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></Script>
      <Script
        src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
        data-api-key="YzllOTYyMzctNWNhMS00NmI0LTk2OGMtOTA2NzA5NmU2MDViNjM3ODY2NDA5MDU3ODIwMTc3"
        id="snipcart"
      ></Script>
      <Layout
        ShoppingCart={ShoppingCart}
        Products={Products}
        setProducts={setProducts}
      >
        <motion.div layout className="grid auto-rows-[470px] gap-8 md:px-12 px-4 justify-center lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
          {Products.map((product, index) => {
            return (
              <motion.div
              layout
                key={product.id}
                className="product shadow-[0_0_15px] shadow-gray-300 p-3 rounded flex gap-1 flex-col justify-between bg-white border border-gray-300"
              >
                <div className="product-image w-full h-3/6">
                  <img
                    className="object-contain w-full h-full"
                    loading="lazy"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div className="product-info">
                  <div className="product-title text-xl font-bold">
                    <h3 className="line-clamp-2">{product.title}</h3>
                  </div>
                  <div className="product-description my-3 text-sm text-gray-400">
                    <div className="flex text-blue-400 gap-4">
                      <div className="product-price">
                        Price: {product.price}${" "}
                      </div>
                      <div className="product-stock">
                        In Stock: {product.inStock}
                      </div>
                    </div>
                    <p className="product-description line-clamp-3">
                      {product.description}
                    </p>
                  </div>
                </div>
                <div className="product-buttons mt-2 justify-between  flex">
                  <button
                    className="btn snipcart-add-item btn-primary  bg-blue-600 flex-1 text-white active:scale-95  min-w-[95.25px] p-2"
                    onClick={() => {
                      setShoppingCart([...ShoppingCart, product]);
                    }}
                    data-item-id={product.id}
                    data-item-name={product.title}
                    data-item-price={product.price}
                    data-item-weight={product.price}
                    data-item-url="https://ecommerce-website-indol.vercel.app/api/products"
                    data-item-description={product.description}
                    data-item-image={product.image}
                  >
                    Add to cart
                  </button>
                  <Link href={`product/${product.id}`}>
                    <a className="btn btn-secondary text-blue-600 flex-1 min-w-[95.25px] p-2  active:bg-blue-600/20 active:scale-95 text-center">
                      View
                    </a>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://ecommerce-website-indol.vercel.app/api/products"
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
