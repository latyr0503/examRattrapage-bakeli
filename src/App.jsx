import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Chat from "./components/Chat";
import women from "./assets/women.svg";
import men from "./assets/men.svg";

function App() {
  const msgs = [
    {
      photo: women,
      name: "fatou Ndiaye",
      date: new Date().toLocaleString(),
      msg: "Lorem ipsum dolor sit amet consectetur adipiscing elit sem, id nostra volutpat quis eget curabitur elementum proin fusce, magnis fames urna sociosqu est mattis condimentum. Egestas fusce aliquam praesent erat vulputate sagittis bibendum ornare himenaeos, est lacinia congue lacus commodo sem nisi inceptos senectus, odio dis fringilla quisque primis augue porta nibh. Fermentum tempor placerat arcu ut, morbi nostra netus",
    },
    {
      photo: men,
      name: "abdoulaye latyr",
      date: new Date().toLocaleString(),
      msg: "Lorem ipsum dolor sit amet consectetur adipiscing elit primis cum, nisi cubilia mattis facilisi purus turpis molestie nullam donec imperdiet, mollis vivamus odio libero ullamcorper convallis sodales leo. A dapibus libero vulputate ante dictumst, aliquet est scelerisque ac, suscipit ridiculus at sapien. ",
    },
    {
      photo: women,
      name: "fatou Ndiaye",
      date: new Date().toLocaleString(),
      msg: "Lorem ipsum dolor sit amet consectetur adipiscing elit sem, id nostra volutpat quis eget curabitur elementum proin fusce, magnis fames urna sociosqu est mattis condimentum. Egestas fusce aliquam praesent erat vulputate sagittis bibendum ornare himenaeos, est lacinia congue lacus commodo sem nisi inceptos senectus, odio dis fringilla quisque primis augue porta nibh. Fermentum tempor placerat arcu ut, morbi nostra netus",
    },
  ];

  const [messages, setMessages] = useState(msgs);
  const [editingMessage, setEditingMessage] = useState(null);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("messages"));
    if (storedMessages) {
      setMessages(storedMessages);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const addMessage = (msg) => {
    const newMessage = {
      photo: men,
      name: "A. Latyr",
      date: new Date().toLocaleString(),
      msg: msg,
    };
    setMessages([...messages, newMessage]);
  };

  const updateMessage = (index, msg) => {
    const updatedMessages = [...messages];
    updatedMessages[index] = {
      ...updatedMessages[index],
      msg: msg,
      date: new Date().toLocaleString(),
    };
    setMessages(updatedMessages);
    setEditingMessage(null);
  };

  const supMessage = (index) => {
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);
    setMessages(updatedMessages);
  };

  const handleEdit = (index) => {
    setEditingMessage(index);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-gradient-to-r from-purple-300 to-blue-200 p-10">
      {messages.map((message, index) => (
        <Chat
          key={index}
          index={index}
          photo={message.photo}
          name={message.name}
          date={message.date}
          msg={message.msg}
          onEdit={handleEdit}
          isEditing={editingMessage === index}
          updateMessage={updateMessage}
          supMessage={supMessage}
        />
      ))}
      <Form addMessage={addMessage} />
    </div>
  );
}

export default App;
