import "./DropdownList.css";

const DropdownList = (props) => {
  return (
    <div className="dropDown-list">
      <label>{props.label}</label>
      <select
        required={props.mandatory}
        onChange={(event) => props.whenChanged(event.target.value)}
        value={props.text}
      >
        {props.items.map((item) => (
          <option key={item}>{item}</option>
        ))}
        {/*O react obriga que cada item de uma lista possua uma 'key', e essa key pode ser qualquer coisa.
                Nesse caso, decidimos passar o proprio 'item' como key, ja que cada item eh um nome diferente */}
      </select>
    </div>
  );
};

export default DropdownList;
