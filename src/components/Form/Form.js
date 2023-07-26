import "./Form.css";
import TextField from "../TextField/TextField";
import DropdownList from "../DropdownList/DropdownList";
import Button from "../Button/Button";
import { useState } from "react";

const Form = (props) => {
  //forma padrao de formar um hook 'useState. passamos entre chaves um valor, e depois a forma como esse valor
  // vai ser incrementado (setter), ou seja, [valor, setValor]. Depois chamamos a funcao 'useState' passando o valor
  // inicial de 'valor' para ele, nesse caso, uma string vazia
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("Programacao")

  //funcao criada para passar as informcoes do funcionario adicionado para o pai, app.js, via a funcao passada via
  //props 'employeeCreated'
  const formSubmiting = (event) => {
    event.preventDefault();
    props.employeeCreated({
        name: name,
        position: position,
        image: image,
        team: team,
    });

    //agora iremos limpar o form (depois de submeter os dados), atribuindo uma string vazia a suas variaveis
    setName("")
    setPosition("")
    setImage("")
    setTeam("")
  };

  return (
    <section className="myForm">
      <form onSubmit={formSubmiting}>
        <h2>Fill in the information to create the employee's card</h2>
        <TextField
          mandatory={true}
          label="Name"
          placeholder="Enter Your Name"
          text={name}
          whenChanged={(text) => setName(text)}
        />
        <TextField
          mandatory={true}
          label="Position"
          placeholder="Enter Your Position"
          text={position}
          whenChanged={(text) => setPosition(text)}
        />
        <TextField
          mandatory={false}
          label="Image"
          placeholder="Provide the image URL"
          text={image}
          whenChanged={(text) => setImage(text)}
        />
        <DropdownList 
            mandatory={true} 
            label="Team" 
            items={props.teamName} 
            text={team}
            whenChanged={(text) => setTeam(text)}
        />
        <Button>Create Card</Button>
      </form>
    </section>
  );
};

export default Form;
