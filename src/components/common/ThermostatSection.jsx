import ButtonPlus from "./buttons/ButtonPlus";
import ButtonMinus from "./buttons/ButtonMinus";
import ButtonReset from "./buttons/ButtonReset";
import { useContext } from "react";
import TempContext from "../../contexts/TempContext";
import TempBadge from "./TempBadge";

export default function ThermostatSection() {

    const { temp } = useContext(TempContext)

    return (
        <section className="text-center">
            <div className="card mx-auto w-25 d-flex align-items-center">
                <h3 className="card-title h5">Termostato</h3>
                <div className="w-100 position-relative">
                    <p className="display-2 border px-3">{temp + '\u00B0C'}</p>
                    <TempBadge
                        position='position-absolute end-0 top-0' />
                </div>
                <div className="btn-group mb-3">
                    <ButtonPlus />
                    <ButtonMinus />
                    <ButtonReset />
                </div>
            </div>
        </section>
    )
}