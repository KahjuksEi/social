import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder={"login"} name={"login"} component={"input"} />
      <Field placeholder={"password"} name={"password"} component={"input"} />
      <Field type="checkbox" name={"rememberMe"} component={"input"} />
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
