import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className=" text-gray-400 py-8 mt-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <p className="text-sm font-semibold">
            &copy; {new Date().getFullYear()} Koleksi Pokemon. All rights
            reserved.
          </p>
          <p className="mt-1 text-sm">Made with ❤️ by Genta</p>
        </div>
        <div className="mb-4">
          <p className="text-sm">
            API Source:{" "}
            <a
              href="https://pokeapi.co/"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://pokeapi.co/
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
