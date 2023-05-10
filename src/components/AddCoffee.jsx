import Swal from "sweetalert2";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    // send coffee data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      });
  };

  return (
    <>
      <Link to="/">
        <div className=" m-10 flex items-center gap-1">
          <FaArrowLeft />
          <p
            className="text-2xl font-semibold shadow-lg"
            style={{ fontFamily: "Rancho" }}
          >
            {" "}
            Back to Home
          </p>
        </div>
      </Link>

      <div className="bg-[#F4F3F0] p-24 md:mx-20 md:mb-20 shadow-lg">
        <h2
          style={{ fontFamily: "Rancho" }}
          className="text-5xl font-extrabold text-center"
        >
          Add a Coffee
        </h2>
        <p className="text-center m-5">
          Start your day off right with a freshly brewed cup of coffee, made
          just the way you like it. Discover our range of premium blends and
          savor the rich, bold flavors that will awaken your senses and energize
          your day.
        </p>
        <form onSubmit={handleAddCoffee}>
          {/* form row -1 */}
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="text-xl font-semibold">Coffee Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Coffee Name"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control  md:w-1/2">
              <label className="label">
                <span className="text-xl font-semibold">
                  Available Quantity
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  placeholder="Enter Available Quantity"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          {/* form row -2 */}
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="text-xl font-semibold">Supplier</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="supplier"
                  placeholder="Enter Coffee Supplier"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control  md:w-1/2">
              <label className="label">
                <span className="text-xl font-semibold">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="taste"
                  placeholder="Enter Coffee Taste"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          {/* form row -3 */}
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="text-xl font-semibold">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="Enter Coffee Category"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control  md:w-1/2">
              <label className="label">
                <span className="text-xl font-semibold">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  placeholder="Enter Coffee Details"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          {/* form row -4 */}
          <div>
            <div className="form-control w-full mb-8">
              <label className="label">
                <span className="text-xl font-semibold">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter Photo URL"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          <input
            style={{ fontFamily: "Rancho" }}
            className=" w-full p-2 rounded-md bg-[#D2B48C] text-2xl border-black"
            type="submit"
            value="Add Coffee"
            required
          />
        </form>
      </div>
    </>
  );
};

export default AddCoffee;
