import Counter from "@/components/counter/Counter";

function page() {
  return (
    <div className="bg-[url('/Images/mountain.jpg')] h-screen w-screen bg-no-repeat bg-cover flex justify-center items-center">
      <Counter />
    </div>
  );
}

export default page;
