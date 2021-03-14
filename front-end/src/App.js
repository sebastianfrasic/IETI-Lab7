import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Typography from '@material-ui/core/Typography';
import { Tasks } from './components/Tasks';
import Swal from 'sweetalert2'
import { AddTask } from './components/AddTask';

function App() {

  const [tasks, setTasks] = useState([]);

  /*
    const task = {
      fechaInicio: dia + "T" + hora + ":" + minuto.toString() + ":00",
      fechaFin: finalDate,
      articulo: articulo
    }*/



  useEffect(() => {
    Axios.get("https://ieti-lab7-frasica.azurewebsites.net/api/list-tasks?code=vGZmSjQkEVsAuw1snzPr1GAQiHaiKI73YS4svpsCiusvrhTFJO6aag==")
      .then(response => {
        let result = response.data.response;
        setTasks(result);
      }).catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error loading tasks. Be sure you are on Firefox and have the CorsE extension'
        })
      });
  }, []);



  return (
    <div>

      <section>
        <br></br>
        <Typography variant="h2" style={{ textAlign: "center" }}>Tasks:</Typography>
        <br></br>
        <div>
          <Tasks list={tasks}></Tasks>
        </div>
      </section>

      <section>
        <br></br>
        <Typography variant="h2" style={{ textAlign: "center" }}>Add task:</Typography>
        <AddTask></AddTask>
      </section>

    </div>
  );
}

export default App;
