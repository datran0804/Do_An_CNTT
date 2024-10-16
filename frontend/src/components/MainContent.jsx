import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MainContent() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch dữ liệu từ file JSON (đảm bảo file này nằm trong thư mục public)
    fetch("/updates.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Items List</h2>
      <div className="grid grid-cols-8 gap-4">
        {items.map((item) => (
          <Link
            to={`/details/ ${item.id}`}
            key={item.id}
            className="block bg-white shadow-md p-4"
          >
            {/* Bọc toàn bộ item bên trong Link */}
            <img src={item.img} alt={item.title} className="w-32 h-48 mb-2" />
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p>
              Volume: {item.vol} | Chapter: {item.ch}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MainContent;
