import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailPage() {
  const { id } = useParams(); // Lấy id từ URL
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/updates.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Log dữ liệu đã fetch
        const selectedItem = data.find((item) => item.id === parseInt(id));
        console.log("Selected Item:", selectedItem); // Log item đã chọn
        if (selectedItem) {
          setDetails(selectedItem);
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

  console.log("Details:", details); // Log chi tiết của item
  console.log("Image Source:", details.img); // Log đường dẫn hình ảnh

  return (
    <div className="w-full h-full">
      <img src={details.im} alt="" />
      <h1>{details.title}</h1>
      <img src={details.img} /> {/* Hiển thị hình ảnh */}
      <p>{details.description}</p>
      <p>Volume: {details.vol}</p>
      <p>Chapter: {details.ch}</p>
      <p>{details.details}</p>
    </div>
  );
}

export default DetailPage;
