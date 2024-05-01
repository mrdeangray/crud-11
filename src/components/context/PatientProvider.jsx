import React, { createContext, useEffect, useState } from "react";

export const PatientContext = createContext(null);

const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const savedPatients =
      JSON.parse(localStorage.getItem("crud-11-patients")) || [];
    setPatients(savedPatients);
  }, []);

  return (
    <PatientContext.Provider value={{ patients, setPatients }}>
      {children}
    </PatientContext.Provider>
  );
};

export default PatientProvider;
