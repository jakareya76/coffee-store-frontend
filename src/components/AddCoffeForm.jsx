import { toast } from "react-toastify";

const AddCoffeForm = () => {
  const handleAddCoffee = async (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const available = form.available.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      available,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    const res = await fetch("http://localhost:5000/add-coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    });

    const data = await res.json();

    if (data.insertedId) {
      form.reset();
      toast("Coffee Added To Database");
    }
  };

  return (
    <form onSubmit={handleAddCoffee}>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-2 m-2 border outline-none"
        />
        <input
          type="text"
          name="available"
          placeholder="Available Quantity"
          className="w-full p-2 m-2 border outline-none"
        />
        <input
          type="text"
          name="supplier"
          placeholder="Enter coffee supplier"
          className="w-full p-2 m-2 border outline-none"
        />
        <input
          type="text"
          name="taste"
          placeholder="Enter coffee taste"
          className="w-full p-2 m-2 border outline-none"
        />
        <input
          type="text"
          name="category"
          placeholder="Enter coffee category"
          className="w-full p-2 m-2 border outline-none"
        />
        <input
          type="text"
          name="details"
          placeholder="Enter coffee details"
          className="w-full p-2 m-2 border outline-none"
        />
        <input
          type="text"
          name="photo"
          placeholder="photo"
          className="w-full p-2 m-2 border outline-none md:col-span-2"
        />
      </div>
      <input
        type="submit"
        value="Add Coffee"
        className="w-full py-3 mx-2 text-white bg-blue-600 rounded cursor-pointer "
      />
    </form>
  );
};

export default AddCoffeForm;
