import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';

function App() {

  //constante feita para armazenar todos os funcionarios
  const [employees, setEmployees] = useState([]);

  const newEmployeeAdded = (newEmployee) => {
    console.log(employees)
    setEmployees([...employees, newEmployee]);
    // aqui, passamos todos os employees ja armazenados para dentro do setEmployees, seguido do novo employee 
    // recebido pelo 'Form'

  }

  return (
    <div className="App">
      <Banner/>
      <Form employeeCreated={newEmployee => newEmployeeAdded(newEmployee)}/>
    </div>
  );
}

export default App;
