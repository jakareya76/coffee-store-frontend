import AddCoffeForm from "../components/AddCoffeForm";

const AddCoffee = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-full p-4 rounded-lg bg-[#F4F3F0] md:w-1/2">
        <h2 className="my-2 text-2xl font-semibold text-[#374151] font-mono  text-center">
          Add A Coffee
        </h2>
        <AddCoffeForm />
      </div>
    </div>
  );
};

export default AddCoffee;
