import "./Employee.css";

const Employee = ({name, position, image}) => {
    return (
        <div className="card-employee">
            <div className="card-header">
                <img src={image} alt=""/>
            </div>
            <div className="card-footer">
                <h4>{name} </h4>
                <h5>{position}</h5>
            </div>
        </div>
    );
}

export default Employee;