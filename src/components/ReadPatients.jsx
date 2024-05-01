import React, { useContext } from "react";
import { PatientContext } from "./context/PatientProvider";
import Patient from "./Patient";
import { Link } from "react-router-dom";

const ReadPatients = () => {
  const { patients} = useContext(PatientContext);
  return (
    <div>
      <h5>ReadPatients</h5>
      {patients.map((patient) => {
        return <Patient key={patient.id} patient={patient} />;
      })}
      <Link to={`/create`}>
        <button>Create Patient</button>
      </Link>
    </div>
  );
};

export default ReadPatients;
