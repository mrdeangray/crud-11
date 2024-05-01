import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PatientContext } from "./context/PatientProvider";
import styled from "styled-components";

const Msg = styled.p`
  font-size: 30px;
  color: blue;
`;
const Input = styled.input`
  border: 1px solid blue;
  border-radius: 10px;
`;
const UpdatePatient = () => {
  const { id } = useParams();
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const { patients, setPatients } = useContext(PatientContext);
  const [isUpdating, setIsUpdating] = useState(false);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const foundPatient = patients.find((patient) => patient.id === id);
    console.log(foundPatient);
    setPatient(foundPatient);
    setInputValue(foundPatient.name);
  }, [id, patients]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newPatients = patients.map((elem) => {
      if (elem.id === id) {
        elem.name = inputValue;
      }
      return elem;
    });
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
      <h6>Update: {patient?.name}</h6>
      <form onSubmit={handleSubmit}>
        <Input value={inputValue} onChange={handleChange} autoFocus />
      </form>

      {patients?.map((patient) => {
        return <span key={patient.id}>{patient.name}, </span>;
      })}
      {isUpdating && <Msg>Updating...</Msg>}
    </div>
  );
};

export default UpdatePatient;
