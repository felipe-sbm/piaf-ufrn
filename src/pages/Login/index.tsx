import { ChangeEvent, useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth.signIn(email, password);
      if (isLogged) {
        navigate("/private");
      } else {
        alert("Tem algo de errado aqui bixo, tenta de novo... :/");
      }
    }
  };

  return (
    <div className="App">
      <div className="piaf-ufrn">
        <img
          src={process.env.PUBLIC_URL + "/piaf-escuro.svg"}
          alt="Logo da piaf-ufrn"
          className="logo"
        />
        <div className="outputs">
          <p>E-mail</p>
          <input
            type="text"
            value={email}
            onChange={handleEmailInput}
            placeholder="@gmail.com"
            className="form"
          />
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={handlePasswordInput}
            placeholder="****************"
            className="form"
          />
          <button onClick={handleLogin} className="button">
            <Link className="button" to="/private">
              Sign In
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
