import "./form-input.styles.scss";

const FormInput = ({ label, ...other }) => {
  return (
    <div className="group">
      {label === "Сообщение" ? (
        <>
          <label className="form__input__label">{label}</label>
          <textarea className="textarea" {...other}/>
        </>
      ) : (
        <>
          <label className="form__input__label">{label}</label>
          <input className="form__input" {...other} />
        </>
      )}
    </div>
  );
};
export default FormInput;
