import { useState } from "react";
import { Redirect } from "react-router-dom";
import { CartEndStyles } from "./style";

export const CartEnd = () => {
  const [userInput, setUserInput] = useState({ hours: "", days: 0 });
  const receivingHours = ["8:00", "10:00", "14:00", "16:00", "19:00"];
  const eatingDays = [1, 2, 3, 4, 5, 6, 7];

  const calculator = () => {
    return 15 * infoMeal * 2 * parseInt(userInput.days);
  };
  let info = JSON.parse(localStorage.getItem("@Info"));
  console.log(info);
  if (!localStorage.getItem("@Token")) {
    return <Redirect to="/login" />;
  }

  if (!localStorage.getItem("@InfoDay")) {
    return <Redirect to="/configuration" />;
  }

  const infoDay = JSON.parse(localStorage.getItem("@InfoDay"));
  const infoMeal = JSON.parse(localStorage.getItem("@InfoMeal"));
  console.log(infoMeal);
  return (
    <CartEndStyles>
      <body>
        <header>
          <button>ir para lista</button>
        </header>
        <div className="container">
          <h1>Finalizar</h1>
          <p>{`Dia de recebimento:${infoDay}`}</p>
          <p>
            Horário de recebimento:
            <select
              className="Select"
              onChange={(event) =>
                setUserInput({ ...userInput, hours: event.target.value })
              }
            >
              {receivingHours.map((e, i) => (
                <option key={i} value="hours">
                  {e}
                </option>
              ))}
            </select>
          </p>
          <p>{`Pessoas por refeição:${infoMeal}`}</p>
          <p>
            Refeições para quantos dias?
            <select
              className="Select"
              onChange={(event) =>
                setUserInput({
                  ...userInput,
                  days: parseInt(event.target.value),
                })
              }
            >
              {eatingDays.map((e, i) => (
                <option key={i}>{e}</option>
              ))}
            </select>
          </p>
          <div className="lunchPrices">
            <p>Preço de cada refeição:</p>
            <p>R$ 15,00</p>
            <input placeholder="Digite o código de convite"></input>
          </div>

          <h3>Total: R$ {calculator()},00</h3>

          {/* <h4>Desconto: </h4> */}
          <div className="containerButton">
            <button>PAGAR</button>
          </div>
        </div>
      </body>
    </CartEndStyles>
  );
};
