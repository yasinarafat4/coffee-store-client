import React from "react";
import { FaEye, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;
  return (
    <div>
      <div
        style={{ backgroundColor: "#F5F4F1" }}
        className="card card-side bg-base-100 shadow-lg mb-4 w-full h-full"
      >
        <figure>
          <img className="" src={photo} alt="Movie" />
        </figure>
        <div className="flex justify-between items-center w-full pr-4">
          <div>
            <p>
              <span className="font-semibold">Name:</span> {name}
            </p>
            <p>
              <span className="font-semibold">Supplier:</span> {supplier}
            </p>
            <p>
              <span className="font-semibold">Category:</span> {category}
            </p>
          </div>
          <div>
            <p
              style={{ backgroundColor: "#D2B48C" }}
              className="p-2 text-white rounded mb-2"
            >
              <FaEye />
            </p>
            <p
              style={{ backgroundColor: "#3C393B" }}
              className="p-2 text-white rounded mb-2"
            >
              <FaEdit />
            </p>
            <p
              style={{ backgroundColor: " #EA4744" }}
              className="p-2 text-white rounded"
            >
              <MdDelete />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
