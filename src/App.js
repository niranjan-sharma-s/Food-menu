import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  //Manual Approach to filtering items
  const filterItems = (category) => {
    return category === "all"
      ? setMenuItems(items)
      : setMenuItems(items.filter((item) => item.category === category));
  };
  return (
    <main>
      <section className="menu section ">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <div className="section-center">
          {menuItems.map((item) => {
            return <Menu key={item.id} {...item} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
