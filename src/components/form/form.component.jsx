import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./form.styles.scss";

const Form = () => {
  return (
    <div className="form__wrapper">
      <form>
        <FormInput
          label="Email"
          type="email"
          placeholder="asasa@mail.com"
          required
        />
        <FormInput
          label="Subject"
          type="text"
          placeholder="Just saying hi"
          required
        />
        <FormInput
          label="Message"
          type="text"
          placeholder="Let's talk about..."
          required
        />
        <Button>Send message</Button>
      </form>
    </div>
  );
};
export default Form;
