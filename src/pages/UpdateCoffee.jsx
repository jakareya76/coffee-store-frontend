import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const navigate = useNavigate();

  const handleUpdateCoffee = async (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const available = form.available.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updateCoffee = {
      name,
      available,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    const res = await fetch(
      `https://coffee-store-server-puce-pi.vercel.app/update-coffee/${coffee._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateCoffee),
      }
    );

    const data = await res.json();

    if (data.modifiedCount > 0) {
      toast("successfully updated coffee");
      navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-full p-4 rounded-lg bg-[#F4F3F0] md:w-1/2">
        <h2 className="my-2 text-2xl font-semibold text-[#374151] font-mono  text-center">
          Update Coffee
        </h2>
        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-2 m-2 border outline-none"
              defaultValue={coffee.name}
            />
            <input
              type="text"
              name="available"
              placeholder="Available Quantity"
              className="w-full p-2 m-2 border outline-none"
              defaultValue={coffee.available}
            />
            <input
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
              className="w-full p-2 m-2 border outline-none"
              defaultValue={coffee.supplier}
            />
            <input
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
              className="w-full p-2 m-2 border outline-none"
              defaultValue={coffee.taste}
            />
            <input
              type="text"
              name="category"
              placeholder="Enter coffee category"
              className="w-full p-2 m-2 border outline-none"
              defaultValue={coffee.category}
            />
            <input
              type="text"
              name="details"
              placeholder="Enter coffee details"
              className="w-full p-2 m-2 border outline-none"
              defaultValue={coffee.details}
            />
            <input
              type="text"
              name="photo"
              placeholder="photo"
              className="w-full p-2 m-2 border outline-none md:col-span-2"
              defaultValue={coffee.photo}
            />
          </div>
          <input
            type="submit"
            value="Update Coffee"
            className="w-full py-3 mx-2 text-white bg-blue-500 rounded cursor-pointer "
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
