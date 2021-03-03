import { Field, reduxForm } from "redux-form";
import { Input } from "../../components/common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder={"login"}
        name={"login"}
        component={Input}
        validate={[required]}
      />
      <Field
        placeholder={"password"}
        name={"password"}
        component={Input}
        validate={[required]}
      />
      <Field type="checkbox" name={"rememberMe"} component={Input} />
      <Field type="submit" value={"login"} name={"login"} component={"input"} />
    </form>
  );
};

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: "contact",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
