import { CircleMinus } from "lucide-react";
import { CirclePlus } from "lucide-react";

export default function ThermostatSection() {
    return (
        <section className="text-center">
            <div className="card mx-auto w-25 d-flex flex-column align-items-center">
                <h3 className="card-title h5">Termostato</h3>
                <div>
                    <p className="display-2 border px-3">{20 + '\u00B0C'}</p>
                </div>
                <div className="btn btn-primary">
                    <button className="btn text-bg-primary btn-sm"><CirclePlus size={20} /></button>
                    <button className="btn text-bg-primary btn-sm"><CircleMinus size={20} /></button>
                    <button className="btn btn-danger rounded rounded-5 btn-sm fw-bold">Reset</button>
                </div>
            </div>
        </section>
    )
}