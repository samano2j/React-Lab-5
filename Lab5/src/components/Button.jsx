export default function Button({ label, onClick }){
    return (
      <button onClick={onClick} className="Button">
        <div className="Button__Label">{label}</div>
      </button>
    );
}
