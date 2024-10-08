"use client";
import React, { useEffect, useState } from "react";
import {
  Modal,
  Slide,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  styled,
} from "@mui/material";
import { BsWhatsapp } from "react-icons/bs";
import { useParams } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import styles from "./vehiculo.module.css";
import Button from "@/components/Button/Button";

const StyledFormControl = styled(FormControl)({
  "& label": {
    color: "#3b3b3b",
    fontSize: "12px",
    fontWeight: "600",
  },
  "& label.Mui-focused": {
    color: "#0b0b0b",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#0b0b0b",
    },
    "&:hover fieldset": {
      borderColor: "#a7a7a7",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#0b0b0b",
    },
  },
});

export default function Page() {
  const { getVehiculoById, car, catalogue } = useAppContext();
  const { vehiculo } = useParams(); /* obtiene el ID del vehículo */
  const [open, setOpen] = useState(false);
  const [financeOption, setFinanceOption] = useState("");
  /* const [financingData, setFinancingData] = useState(""); */
  const [installments, setInstallments] = useState([]);
  const [installmentOption, setInstallmentOption] = useState("");
  const [installmentValue, setInstallmentValue] = useState("");
  const [tnaValue, setTnaValue] = useState("");

  /* Para igualar las claves de la DB con el select de cuotas */
  const installmentMapping = {
    24: "value_twelve_installments",
    36: "value_twenty_installments",
    48: "value_thirty_installments",
    60: "value_forty_installments",
  };
  const tnaMapping = {
    24: "APR_twelve_installments",
    36: "APR_twenty_installments",
    48: "APR_thirty_installments",
    60: "APR_forty_installments",
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function handleChange(e) {
    const choosed = e.target.value;
    setFinanceOption(choosed);
    setInstallments(car?.financings?.[choosed]?.installments || []);
    setInstallmentOption(""); // Resetear select de cuotas y valores
    setInstallmentValue("");
    setTnaValue("");
  }

  function handleInstallmentsChange(e) {
    const choosed = e.target.value;
    setInstallmentOption(choosed);
    /* se obtienen las keys correspondientes */
    const installmentKey = installmentMapping[choosed];
    const tnaKey = tnaMapping[choosed];
    /* se obtiene el valor para setearlo */
    const value =
      car?.financings?.[financeOption]?.installments_value?.[
        installmentKey
      ] || "";
    const tna = car?.financings?.[financeOption]?.APR?.[tnaKey] || "";
    setInstallmentValue(value);
    setTnaValue(tna);
  }

  useEffect(() => {
    getVehiculoById(vehiculo);
  }, [vehiculo]);
  console.log(car)
  /* useEffect(() => {
    const fetchFinancing = async () => {
      const data = await getFinancing();
      console.log(data);
      setFinancingData(data);
    };
    fetchFinancing();
  }, []); */
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(value);
  };
  const getNextWeekDate = () => {
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    return nextWeek.toLocaleDateString("es-AR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const nextWeekDate = getNextWeekDate();
  return (
    <div className={styles.container}>
      {car ? (
        <>
          <Modal open={open} onClose={handleClose}>
            <Slide direction="up" in={open} mountOnEnter unmountOnExit>
              <div className={styles.modal_container}>
                <h3>Simulador de Financiamiento</h3>
                <div className={styles.form_container}>
                  <StyledFormControl fullWidth={true} size="small">
                    <InputLabel id="demo-multiple-name-label">
                      ANTICIPO
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      value={financeOption}
                      onChange={handleChange}
                      input={<OutlinedInput label="ANTICIPO" />}
                    >
                      <MenuItem value={"first_financing"}>
                        {car?.financings?.first_financing?.down_payment ||
                          "Cargando..."}
                      </MenuItem>
                      {/* <MenuItem value={"second_financing"}>
                        {car?.financings?.second_financing
                          ?.down_payment || "Cargando..."}
                      </MenuItem>
                      <MenuItem value={"uva_first_financing"}>
                        {car?.financings?.uva_first_financing
                          ?.down_payment || "Cargando..."}
                      </MenuItem>
                      <MenuItem value={"uva_second_financing"}>
                        {car?.financings?.uva_second_financing
                          ?.down_payment || "Cargando..."}
                      </MenuItem> */} 
                    </Select>
                  </StyledFormControl>
                  <div>
                    <ul className={styles.list}>
                      <li>
                        <span>ANTICIPO:</span>
                        <p>
                          $
                          {financeOption === "first_financing"
                            ? car?.financings?.first_financing
                                ?.down_payment
                            : financeOption === "second_financing"
                            ? car?.financings?.second_financing
                                ?.down_payment
                            : financeOption === "uva_first_financing"
                            ? car?.financings?.uva_first_financing
                                ?.down_payment
                            : financeOption === "uva_second_financing"
                            ? car?.financings?.uva_second_financing
                                ?.down_payment
                            : ""}
                        </p>
                      </li>
                      <li>
                        <span>SALDO A FINANCIAR:</span>
                        <p>
                          $
                          {financeOption === "first_financing"
                            ? car?.financings?.first_financing
                                ?.financing_amount
                            : financeOption === "second_financing"
                            ? car?.financings?.second_financing
                                ?.financing_amount
                            : financeOption === "uva_first_financing"
                            ? car?.financings?.uva_first_financing
                                ?.financing_amount
                            : financeOption === "uva_second_financing"
                            ? car?.financings?.uva_second_financing
                                ?.financing_amount
                            : ""}
                        </p>
                      </li>
                      <li>
                        <span>CUOTAS:</span>
                        <StyledFormControl
                          fullWidth={true}
                          size="small"
                          style={{ width: "90px" }}
                        >
                          <InputLabel id="demo-multiple-name-label">
                            CUOTAS
                          </InputLabel>
                          <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            value={installmentOption}
                            onChange={handleInstallmentsChange}
                            input={<OutlinedInput label="CUOTAS" />}
                          >
                            {installments.map((installment, i) => (
                              <MenuItem key={i} value={installment}>
                                {installment}
                              </MenuItem>
                            ))}
                          </Select>
                        </StyledFormControl>
                      </li>
                      <li>
                        <span>VALOR DE CUOTA:</span>
                        <p>${installmentValue}</p>
                      </li>
                      <li>
                        <span>TNA:</span>
                        <p>{tnaValue}%</p>
                      </li>
                    </ul>
                  </div>
                  <Button
                    text={"Contactar asesor"}
                    href={
                      "https://api.whatsapp.com/send?phone=5491123231563&text=Buen%20día,%20me%20comunico%20desde%20la%20página%20de%20Leandro%20Aguilar%20-%20Fiat%20Giama"
                    }
                    target={"_blank"}
                    icon={<BsWhatsapp size={14} />}
                  />
                </div>
                <p>*Sujeto a actualizaciones por inflación.</p>
              </div>
            </Slide>
          </Modal>
          <div className={styles.vehicle_detail}>
            <img src={car.img} alt={car.title} className={styles.photo} />
            <div className={styles.info_container}>
              <h2 className={styles.title}>{car.title.toUpperCase()}</h2>
              <div className={styles.texts_container}>
                <p>{car.first_description}</p>
                <p>{car.second_description}</p>
              </div>
              <div className={styles.price_container}>
                <p className={styles.offer}>
                  {formatCurrency(car.price + 2000000)}
                </p>
                <p className={styles.offer_price}>
                  {formatCurrency(car.price)}
                </p>
                <p className={styles.offer_note}>
                  *Precio especial hasta {nextWeekDate}. Contactá ahora a
                  nuestro asesor.
                </p>
              </div>
              <div className={styles.button_container}>
                <Button text={"cotizar"} onClick={handleOpen} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <h5>
          ¡Lo sentimos! Ha ocurrido un error. Por favor, espera un segundo.
        </h5>
      )}
    </div>
  );
}
