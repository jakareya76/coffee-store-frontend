const AddCoffeForm = () => {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2">
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="p-2 m-2 border outline-none"
      />
      <input
        type="text"
        name="available"
        placeholder="Available Quantity"
        className="p-2 m-2 border outline-none"
      />
      <input
        type="text"
        name="supplier"
        placeholder="Enter coffee supplier"
        className="p-2 m-2 border outline-none"
      />
      <input
        type="text"
        name="taste"
        placeholder="Enter coffee taste"
        className="p-2 m-2 border outline-none"
      />
      <input
        type="text"
        name="category"
        placeholder="Enter coffee category"
        className="p-2 m-2 border outline-none"
      />
      <input
        type="text"
        name="details"
        placeholder="Enter coffee details"
        className="p-2 m-2 border outline-none"
      />
      <input
        type="text"
        name="name"
        placeholder="photo"
        className="col-span-2 p-2 m-2 border outline-none"
      />
      <input
        type="submit"
        value="Add Coffee"
        className="col-span-2 py-3 mx-2 text-white bg-blue-500 cursor-pointer "
      />
    </form>
  );
};

export default AddCoffeForm;
