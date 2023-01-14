import Button from "../../components/button/button.component";
import google from "./icons8-google-48.png";

import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div>
        <h1>Witaj ponownie !</h1>
        <p>Zaloguj się za pomocą e-mail i hasła</p>
      </div>
      <form onSubmit={""}>
        <input
          type="e-mail"
          name="email"
          placeholder="Podaj adres e-mail"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Podaj hasło"
          required
        />
        <div>
          <Button type="submit">Zaloguj się</Button>
          <Button type="button" buttonType="google">
            <img src={google} alt="google icon" /> Kontynuuj z Google
          </Button>
        </div>
        <div>
          <span>
            Nie masz jeszcze konta ?<Link>Zarejestruj się</Link>
          </span>
        </div>
      </form>
    </>
  );
};

export default SignIn;
