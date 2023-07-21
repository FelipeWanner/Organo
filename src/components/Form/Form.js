import "./Form.css";
import TextField from "../TextField/TextField"

const Form = () => {
    return(
        <section className="myForm">
            <form>
                <h2>Fill in the information to create the employee's card</h2>
                <TextField label="Name" placeholder="Enter Your Name"/>
                <TextField label="Position"placeholder="Enter Your Position"/>
                <TextField label="Image"placeholder="Provide the image URL"/>
            </form>
        </section>
    );
}

export default Form;