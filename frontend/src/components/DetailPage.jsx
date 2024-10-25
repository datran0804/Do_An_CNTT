import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailPage() {
  const { id } = useParams(); // Lấy id từ URL
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch dữ liệu từ API dựa trên ID
    fetch(`http://localhost:5000/api/info/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          setDetails(data); // Lưu dữ liệu vào state
        } else {
          setError(`Could not find item with id: ${id}`);
        }
      })
      .catch((error) => setError("Failed to load data"));
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!details) {
    return <div>Loading...</div>;
  }

  // Điều chỉnh đường dẫn hình ảnh (nếu cần)
  const imgSrc = details.img.startsWith("http") 
    ? details.img 
    : `/details/images/${details.img}`;

  return (
    <div className="w-full h-full">
      <h1>{details.title}</h1>
      <img 
        src={details.img} 
        alt={details.title} 
        style={{ width: "300px", height: "400px", objectFit: "cover" }} 
      /> {/* Hiển thị hình ảnh */}
      <p>{details.description}</p>
      <p>Volume: {details.vol}</p>
      <p>Chapter: {details.ch}</p>
      <p>{details.details}</p>
    </div>
  );
}

export default DetailPage;
