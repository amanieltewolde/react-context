import { CircleMinus } from "lucide-react";
import { useContext } from "react";
import TempContext from "../../../contexts/TempContext";

export default function ButtonMinus() {
    const { handleTempTurnDown } = useContext(TempContext)
    return (
        <>
            <button onClick={handleTempTurnDown} className="btn text-bg-primary btn-sm"><CircleMinus size={20} /></button>
        </>
    )
}