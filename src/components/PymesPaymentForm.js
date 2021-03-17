import React from "react";
/*import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";*/
/* //Validacion YUP + react-hook-form  
const schema = yup.object().shape({
  ownerName: yup
    .string("Ingresa un nombre válido")
    .required("Este campo es obligatorio ")
    .matches(/^[A-Za-z ]*$/, "Ingresa un nombre válido")
    .min(5, "Ingresa un nombre válido")
    .max(70, "Nombre muy extenso"),
  cardNumber: yup
    .string("Ingresa un número válido")
    .required("Este campo es obligatorio")
    .matches(/^[0-9]*$/, "Ingresa solo números")
    .min(5, "Ingresa un número de tarjeta válido")
    .max(19, "Ingresa un número de tarjeta válido"),
  expirationDate: yup
    .string("Últimos 3 números en el dorso de la tarjeta")
    .required("Este campo es obligatorio")
    .matches(/^[0-9]*$/, "Ingresa solo números")
    .min(3, "Últimos 3 números en el dorso de la tarjeta")
    .max(4, "Últimos 3 números en el dorso de la tarjeta "),
});
const normalizeCardNumber = (value) => {
  return (
    value
      .replace(/\s/g, "")
      .match(/.{1,4}/g)
      ?.join(" ")
      .substr(0, 19) || ""
  );
};
const cardFormatNumber = (event) => {
  const { value } = event.target;
  event.target.value = normalizeCardNumber(value);
};
const onSubmit = (data) => console.log(JSON.stringify(data));*/

export default function PymesPaymentForm() {
  /*const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
*/

//Est no se muy bien donde tirarlo  
const publicApiKey = "e9cdb99fff374b5f91da4480c8dca741";
const urlSandbox = "https://developers.decidir.com/api/v2";
//const decidir = new Decidir(urlSandbox);
//decidir.setPublishableKey(publicApiKey);
// decidir.setTimeout(5000);


  return (
    <div className="payment-form__content">
      <form action="" method="post" id="formulario">
        <fieldset>
          <ul>
            <li>
              <label for="card_number">Numero de tarjeta:</label>
              <input
                type="text"
                data-decidir="card_number"
                placeholder="XXXXXXXXXXXXXXXX"
                value="4507990000004905"
              />
            </li>
            <li>
              <label for="security_code">Codigo de seguridad:</label>
              <input
                type="text"
                data-decidir="security_code"
                placeholder="XXX"
                value="123"
              />
            </li>
            <li>
              <label for="card_expiration_month">Mes de vencimiento:</label>
              <input
                type="text"
                data-decidir="card_expiration_month"
                placeholder="MM"
                value="12"
              />
            </li>
            <li>
              <label for="card_expiration_year">Año de vencimiento:</label>
              <input
                type="text"
                data-decidir="card_expiration_year"
                placeholder="AA"
                value="20"
              />
            </li>
            <li>
              <label for="card_holder_name">Nombre del titular:</label>
              <input
                type="text"
                data-decidir="card_holder_name"
                placeholder="TITULAR"
                value="TITULAR"
              />
            </li>
            <li>
              <label for="card_holder_doc_type">Tipo de documento:</label>
              <select data-decidir="card_holder_doc_type">
                <option value="dni">DNI</option>
              </select>
            </li>
            <li>
              <label for="card_holder_doc_type">Numero de documento:</label>
              <input
                type="text"
                data-decidir="card_holder_doc_number"
                placeholder="XXXXXXXXXX"
                value="27859328"
              />
            </li>
          </ul>
          <input type="submit" value="Generar Token" />
        </fieldset>
      </form>
    </div>
  );
}
