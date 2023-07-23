import "./Form.css";
import TextField from "../TextField/TextField"
import DropdownList from "../DropdownList/DropdownList";
import Button from "../Button/Button";

const Form = () => {

    const teams = [
        'programacao',
        'front end',
        'datascience',
        'devops',
        'ux & design',
        'mobile',
        'inovacao e gestao',
    ]

    const formSubmiting = (event) => {
        console.log("oi")
        event.preventDefault();
    }

    return(
        <section className="myForm">
            <form onSubmit={formSubmiting}>
                <h2>Fill in the information to create the employee's card</h2>
                <TextField mandatory={true} label="Name" placeholder="Enter Your Name"/>
                <TextField mandatory={true} label="Position" placeholder="Enter Your Position"/>
                <TextField mandatory={false} label="Image" placeholder="Provide the image URL"/>
                <DropdownList mandatory={true} label="Team" items={teams}/>
                <Button>
                    Create Card
                </Button>
            </form>
        </section>
    );
}

export default Form;