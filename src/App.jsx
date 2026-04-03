import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 px-6 py-4">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <span className="text-purple-400 text-xl">
          MyBrand
        </span>

        {/* Desktop Links — md pe dikhte hain */}
        <div className="hidden md:flex gap-6">
          <a className="text-slate-300">Home</a>
          <a className="text-slate-300">About</a>
          <a className="text-slate-300">Contact</a>
        </div>

        {/* Hamburger — sirf mobile pe */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-2">
          <a className="text-slate-300 py-2">Home</a>
          <a className="text-slate-300 py-2">About</a>
          <a className="text-slate-300 py-2">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default App