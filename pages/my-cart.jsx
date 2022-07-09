import React from "react";
import { Layout } from "../components/Files";

export default function My_cart() {
  return (
    <div>
      <Layout>
        <div
          className="card-layout mx-auto 
            w-4/5
            p-5
            rounded-lg
            border border-gray-300
            h-full
            gap-5
            "
        >
          <div className="left-img cursor-zoom-in active:scale-95 transition-all h-full">
            <img
              className="object-cover w-full h-full"
              loading="lazy"
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="product"
            />
          </div>

          <div className="right flex flex-col">
            <div className="title">
              <h3 className="text-2xl font-bold">Product Title</h3>
              <div className="desc text-gray-500 text-lg mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat et minus iusto totam, perspiciatis, aut hic quae tempora
                repudiandae illo minima deserunt quod possimus saepe assumenda
                ipsa maxime? Ducimus, adipisci.
              </div>

              <div className="price flex gap-2 capitalize mt-3">
                <p className="text-blue-500">price: $100</p>
                <p className="text-blue-500">category: jewelery</p>
              </div>
            </div>

            <div className="buttons flex justify-between mt-5"></div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
