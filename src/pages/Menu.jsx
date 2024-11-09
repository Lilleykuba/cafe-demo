import React, { useEffect, useState } from "react";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const importMenuItems = async () => {
      const menuModules = import.meta.glob("/src/content/menu/*.json");
      const items = [];

      for (const path in menuModules) {
        const module = await menuModules[path]();
        items.push(module.default);
      }

      setMenuItems(items);
    };

    importMenuItems();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Our Menu</h1>
      {menuItems.map((item, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-2xl">
            {item.title} - {item.price}
          </h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Menu;
