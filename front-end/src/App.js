import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Typography from '@material-ui/core/Typography';
import { Tasks } from './components/Tasks';

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    Axios.get("https://ieti-lab7-frasica.azurewebsites.net/api/list-tasks?code=vGZmSjQkEVsAuw1snzPr1GAQiHaiKI73YS4svpsCiusvrhTFJO6aag==")
      .then(response => {
        let result = response.data.response;
        setTasks(result);
      }).catch(error => {
        alert("Error al cargar los usuarios");
      });
  }, []);

  return (
    <div>
      <br />
      <Typography variant="h2" style={{ textAlign: "center" }}>Tasks:</Typography>
      <br></br>
      <div>
        <Tasks list={tasks}></Tasks>
      </div>
    </div>
  );
}

export default App;
