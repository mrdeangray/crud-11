import { Route, Routes } from "react-router-dom";
import "./App.css";
import ReadPatients from "./components/ReadPatients";
import CreatePatient from "./components/CreatePatient";
import UpdatePatient from "./components/UpdatePatient";
import DeletePatient from "./components/DeletePatient";
import PatientProvider from "./components/context/PatientProvider";

function App() {
  return (
    <div className="App">
      <PatientProvider>
        <Routes>
          <Route exact path="/" element={<ReadPatients />} />
          <Route exact path="/create" element={<CreatePatient />} />
          <Route exact path="/update/:id" element={<UpdatePatient />} />
          <Route exact path="/delete/:id" element={<DeletePatient />} />
        </Routes>
      </PatientProvider>
    </div>
  );
}

export default App;
