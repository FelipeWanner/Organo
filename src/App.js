import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Form from "./components/Form/Form";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";

function App() {
  const teams = [
    {
      name: "programacao",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      name: "front end",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "datascience",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "ux & design",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      name: "mobile",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "inovacao e gestao",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];

  //constante feita para armazenar todos os funcionarios
  const [employees, setEmployees] = useState([]);

  const newEmployeeAdded = (newEmployee) => {
    console.log(employees);
    setEmployees([...employees, newEmployee]);
    // aqui, passamos todos os employees ja armazenados para dentro do setEmployees, seguido do novo employee
    // recebido pelo 'Form'
  };

  return (
    <div className="App">
      <Banner />
      <Form
        teamName={teams.map((team) => team.name)}
        employeeCreated={(newEmployee) => newEmployeeAdded(newEmployee)}
      />
      {teams.map((team) => {
        return (
          <Team
            key={team.name}
            teamName={team.name}
            primaryColor={team.primaryColor}
            secondaryColor={team.secondaryColor}
            employees={employees.filter(employee => employee.team === team.name)}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
