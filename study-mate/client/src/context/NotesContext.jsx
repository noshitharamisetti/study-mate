import { createContext, useContext, useState } from "react";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Stacks & Queues",
      subject: "Data Structures",
      description: "Clear explanation of stack and queue operations.",
      user: "Student A",
    },
    {
      id: 2,
      title: "Normalization",
      subject: "DBMS",
      description: "1NF, 2NF, 3NF explained with examples.",
      user: "Student B",
    },
  ]);

  const addNote = (note) => {
    setNotes([note, ...notes]);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);
