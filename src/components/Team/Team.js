import Employee from "../Employee/Employee";
import "./Team.css";

const Team = (props) => {
  return (
    <section className="team" style={{ backgroundColor: props.secondaryColor }}>
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
