import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="flex flex-col bg-white shadow-lg shadow-blue-900/50 rounded-md p-8 mb-8 gap-2">
      <h3 className="text-xl mb-4 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="transition duration-200 hover:text-pink-600 cursor-pointer block mb-2">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
