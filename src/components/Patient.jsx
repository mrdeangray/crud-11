import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DIV = styled.div`
  border: 1px solid blue;
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border-radius: 2px;
`;

const Patient = ({ patient }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    getScore();
  });

  const getScore = async () => {
    try {
      const { data } = await axios(
        `https://api.github.com/users/${patient.name}`
      );
      setScore(data.public_repos);
    } catch (error) {}
  };

  return (
    <DIV>
      <span>{patient.name}</span>
      <span>Score: {score}</span>
      <Link to={`/update/${patient.id}`}>Update</Link>
      <Link to={`/delete/${patient.id}`}>Delete</Link>
    </DIV>
  );
};

export default Patient;
