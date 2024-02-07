import React from "react";
import "tailwindcss/tailwind.css";

function Footer() {
  return (
    <footer className="text-gray-200 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold">Todo List App</p>
          <p className="text-xs">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="text-sm hover:text-gray-300">About</a>
          <a href="#" className="text-sm hover:text-gray-300">Contact</a>
          <a href="#" className="text-sm hover:text-gray-300">Terms</a>
          <a href="#" className="text-sm hover:text-gray-300">Privacy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
