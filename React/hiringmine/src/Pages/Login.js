const Login = () => {
  const loginHandler = () => {
    localStorage.setItem("login", "true");
  };

  return (
    <>
      <input placeholder="email" type="text" />
      <input placeholder="password" type="text" />
      <button onClick={loginHandler}>Login</button>
    </>
  );
};

export default Login