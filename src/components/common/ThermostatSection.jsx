import { CircleMinus } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { useState } from "react";

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
                    <button onClick={handleTempTurnUp} className="btn text-bg-primary btn-sm"><CirclePlus size={20} /></button>
                    <button onClick={handleTempTurnDown} className="btn text-bg-primary btn-sm"><CircleMinus size={20} /></button>
                    <button onClick={handleStandardTemp} className="btn btn-danger rounded rounded-5 btn-sm fw-bold">Reset</button>
                </div>
            </div>
        </section>
    )
}