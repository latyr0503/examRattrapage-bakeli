import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { FaSave } from "react-icons/fa";

export default function Chat({
  index,
  photo,
  name,
  date,
  msg,
  onEdit,
  isEditing,
  updateMessage,
  supMessage,
}) {
  const [editMsg, setEditMsg] = useState(msg);

  const handleModifier = () => {
    updateMessage(index, editMsg);
  };

  return (
    <div className="w-3/4 md:w-full sm:w-full mb-5 bg-white p-7 rounded-xl">
      <div className="flex items-start sm:flex-col justify-start gap-5">
        <img src={photo} className="w-12" alt="user-photo" />
        {isEditing ? (
          <div className="w-full flex items-center gap-4">
            <input
              type="text"
              value={editMsg}
              onChange={(e) => setEditMsg(e.target.value)}
              class="w-full mx-4 focus:outline-0 transition-all border-2  focus:border-2 sm:text-sm p-4 rounded-xl focus:border-purple-500"
            />
            
            <button
              onClick={handleModifier}
              className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white p-2 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bouncep-2"
            >
              <FaSave />
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between">
              <div>
                <p>{name}</p>
                <p className="text-slate-400">{date}</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => onEdit(index)}
                  className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white p-2 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bouncep-2"
                >
                  <HiMiniPencilSquare />
                </button>
                <button
                  onClick={() => supMessage(index)}
                  className="bg-red-500 text-white p-2 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bouncep-2"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
            <p className="sm:text-sm">{msg}</p>
          </div>
        )}
      </div>
    </div>
  );
}
