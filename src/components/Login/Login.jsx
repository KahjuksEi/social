import { Field, reduxForm } from "redux-form";
import { Input } from "../../components/common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder={"Email"}
        name={"email"}
        component={Input}
        validate={[required]}
      />
      <Field
        placeholder={"password"}
        type={"password"}
        name={"password"}
        component={Input}
        validate={[required]}
      />
      <Field type={"checkbox"} name={"rememberMe"} component={"input"} />
      Remember me
      <br />
      {props.error && (
        <div className={"formSummaryError"}>Error: {props.error}</div>
      )}
      <button>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

/*экспорт образовавшуюся с помощью хока коннект*/
export default connect(mapStateToProps, { login })(Login);
