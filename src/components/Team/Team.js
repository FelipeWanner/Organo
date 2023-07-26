import Employee from "../Employee/Employee";
import "./Team.css";

const Team = (props) => {
  
  return (
    //essa eh a maneira de se fazer uma condicional em react. Outro caso seria fazer um operador ternario
    //o react ira avaliar se a primeira parte eh false ou true, caso true, ele continua lendo a parte da direita,
    //caso false, ele para e nao le o restante do codigo depois de "&&"
    (props.employees.length > 0) && <section className="team" style={{ backgroundColor: props.secondaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.teamName}</h3>
      <div className="team-employee">
        {props.employees.map((employee) => (
          <Employee
            name={employee.name}
            position={employee.position}
            image={employee.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
