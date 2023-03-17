export default function Field({ onChange, label, value, error }) {
  return (
    <div className="Field">
      <div className="Field__Label">{label}</div>
      <input className="Field__Input" value={value} onChange={onChange}/>
      <div className="Field__HelperMessage">{error}</div>
    </div>
  );
}
