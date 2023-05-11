import { useState, useEffect } from "react";
import { FaEye, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  // const { _id, name, quantity, supplier, taste, category, details, photo } =
  //   coffee;

  const [coffeeList, setCoffeeList] = useState([]);

  useEffect(() => {
    setCoffeeList([coffee]);
  }, [coffee]);

  // Delete operation
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remainingCoffee = coffeeList.filter((c) => c._id !== _id);
              setCoffeeList(remainingCoffee);
            }
          });
      }
    });
  };
  return (
    <div>
      {coffeeList.map((coffee) => (
        <div
          style={{ backgroundColor: "#F5F4F1" }}
          className="card card-side bg-base-100 shadow-lg mb-4 w-full h-full"
          key={coffee._id}
        >
          <figure>
            <img className="" src={coffee.photo} alt="Movie" />
          </figure>
          <div className="flex justify-between items-center w-full pr-4">
            <div>
              <p className="mb-2">
                <span className="font-semibold">Name:</span> {coffee.name}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Supplier:</span>{" "}
                {coffee.supplier}
              </p>
              <p>
                <span className="font-semibold">Category:</span>{" "}
                {coffee.category}
              </p>
            </div>
            <div>
              <p
                style={{ backgroundColor: "#D2B48C" }}
                className="p-2 text-white rounded mb-2 cursor-pointer"
              >
                <FaEye />
              </p>
              <Link to={`/updateCoffee/${coffee._id}`}>
                <p
                  style={{ backgroundColor: "#3C393B" }}
                  className="p-2 text-white rounded mb-2"
                >
                  <FaEdit />
                </p>
              </Link>
              <p
                onClick={() => handleDelete(coffee._id)}
                style={{ backgroundColor: " #EA4744" }}
                className="p-2 text-white rounded cursor-pointer"
              >
                <MdDelete />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoffeeCard;
