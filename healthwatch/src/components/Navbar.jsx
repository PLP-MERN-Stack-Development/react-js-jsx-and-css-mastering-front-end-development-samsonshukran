function Navbar() {
  return (
    <nav className="bg-primary text-white px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">HealthWatch 🩺</h1>
      <ul className="flex gap-6">
        <li className="hover:text-accent cursor-pointer">Home</li>
        <li className="hover:text-accent cursor-pointer">About</li>
      </ul>
    </nav>
  );
}

export default Navbar;
