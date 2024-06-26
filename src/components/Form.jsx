import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import men from "../assets/men.svg";

export const Form = ({ addMessage }) => {
  const [msg, setMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addMessage(msg);
    setMsg("");
  };

  return (
    <div className="flex items-center justify-between w-3/4 md:w-full sm:w-full bg-white p-7 rounded-xl">
      <img src={men} className="w-14 sm:w-10" alt="user" />
      <form onSubmit={handleSubmit} className="flex w-full items-center">
        <input
          class="w-full mx-4 focus:outline-0 transition-all border-2  focus:border-2 sm:text-sm p-4 rounded-xl focus:border-purple-500"
          placeholder="Ajouter un commentaire..."
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          required
        />

        <div>
          <button
            type="submit"
            className="bg-gradient-to-r sm:hidden md:hidden from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 sm:w-3/12 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
          >
            Envoyer
          </button>
          <button
            type="submit"
            className="bg-gradient-to-r lg:hidden from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold p-3 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
          >
            <IoSend />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
