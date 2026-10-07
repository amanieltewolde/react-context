import { CircleMinus } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { useState } from "react";
import ButtonPlus from "./buttons/ButtonPlus";
import ButtonMinus from "./buttons/ButtonMinus";
import ButtonReset from "./buttons/ButtonReset";

export default function ThermostatSection() {

    const [temp, setTemp] = useState(20)


    function handleTempTurnDown() {
        setTemp(actual => (actual > 16 ? actual - 1 : actual))
    }

    function handleTempTurnUp() {
        setTemp(actual => (actual < 28 ? actual + 1 : actual))
    }

    function handleStandardTemp() {
        setTemp(20)
    }

    return (
        <section className="text-center">
            <div className="card mx-auto w-25 d-flex align-items-center">
                <h3 className="card-title h5">Termostato</h3>
                <div className="w-100">
                    <p className="display-2 border px-3">{temp + '\u00B0C'}</p>
                </div>
                <div className="btn btn-primary mb-3">
                    <ButtonPlus />
                    <ButtonMinus />
                    <ButtonReset />
                </div>
            </div>
        </section>
    )
}