import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PatientContext } from "./context/PatientProvider";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

const Input = styled.input`
  border: 1px solid blue;
  border-radius: 10px;
`;
const Msg = styled.p`
  font-size: 30px;
  color: blue;
`;

const CreatePatient = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const { patients, setPatients } = useContext(PatientContext);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newPatient = {};
    newPatient.id = uuid();
    newPatient.score = 0;
    newPatient.name = inputValue;
    const newPatients = [...patients, newPatient];
    setPatients(newPatients);
    setInputValue("");
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
      <h6>CreatePatient</h6>
      <form onSubmit={handleSubmit}>
        <Input value={inputValue} onChange={handleChange} autoFocus />
      </form>
      {patients.map((patient) => {
        return <span key={patient.id}>{patient.name}, </span>;
      })}
      {isUpdating && <Msg>Creating...</Msg>}
    </div>
  );
};

export default CreatePatient;
