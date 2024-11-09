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
      <h1 className="text-4xl font-bold mb-8 text-center">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menuItems.map((item, index) => (
          <div key={index} className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title">
                {item.title}{" "}
                <span className="text-sm text-gray-500">- {item.price}</span>
              </h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
