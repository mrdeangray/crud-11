import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PatientContext } from "./context/PatientProvider";
import styled from "styled-components";

const Msg = styled.p`
  font-size: 30px;
  color: blue;
`;

const DeletePatient = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { patients, setPatients } = useContext(PatientContext);
  const [isUpdating, setIsUpdating] = useState(false);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const foundPatient = patients.find((patient) => patient.id === id);
    setPatient(foundPatient);
  }, [id, patients]);

  const handleDelete = () => {
    const newPatients = patients.filter((pat) => pat.id !== id);
    setPatients(newPatients);
    localStorage.setItem("crud-11-patients", JSON.stringify(newPatients));

    setIsUpdating(true);
    setTimeout(() => {
      setIsUpdating(false);
      navigate(`/`);
    }, 2000);
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <div>
        <h6>Delete: {patient?.name}</h6>
      </div>

      <button onClick={handleDelete}>Delete: {patient?.name} </button>
      {patients?.map((patient) => {
        return <span key={patient.id}>{patient.name}, </span>;
      })}
      {isUpdating && <Msg>Deleting...</Msg>}
    </div>
  );
};

export default DeletePatient;
