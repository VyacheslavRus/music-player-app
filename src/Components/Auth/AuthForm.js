import { ErrorMessage, Field, Form, Formik } from "formik";
import { useLocation } from "react-router";
import { AuthFormStyled } from "./AuthFormStyled";
import schema from "./Validation/validator";

const registrationValues = {
  email: "",
  password: "",
  username: "",
};
const loginValues = {
  email: "",
  password: "",
};

const AuthForm = () => {
  const location = useLocation();

  return (
    <AuthFormStyled>
      <div className={"authFormContainer"}></div>
      <div className="navContainer">
        <h1 className="authTitle">
          {location.pathname === "/registration" ? "регистрация" : "вход"}
        </h1>
        <Formik
          initialValues={
            location.pathname === "/registration"
              ? registrationValues
              : loginValues
          }
          validationSchema={schema}
          // onSubmit={(values) => {
          //   location.pathname === "/registration"
          //     ?
          //     : ;
          // }}
        >
          <Form className="form">
            {location.pathname === "/registration" ? (
              <>
                <label>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Имя *"
                    className="input"
                  />
                  <ErrorMessage name="username" component="div" />
                </label>
                <label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Електронна почта *"
                    className="input"
                  />
                  <ErrorMessage name="email" component="div" />
                </label>
                <label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Пароль *"
                    className="input"
                  />
                  <ErrorMessage name="password" component="div" />
                </label>
                <button type="submit" className="buttons">
                  {location.pathname === "/registration"
                    ? "Регистрация"
                    : "Вход"}
                </button>
              </>
            ) : (
              <>
                <label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Електронна почта *"
                    className="input"
                  />
                  <ErrorMessage name="email" component="div" />
                </label>
                <label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Пароль *"
                    className="input"
                  />
                  <ErrorMessage name="password" component="div" />
                </label>
                <button type="submit" className="buttons">
                  {location.pathname === "/registration"
                    ? "Регистрация"
                    : "Вход"}
                </button>
              </>
            )}
          </Form>
        </Formik>
      </div>
    </AuthFormStyled>
  );
};

export default AuthForm;
