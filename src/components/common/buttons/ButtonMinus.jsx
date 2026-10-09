import { CircleMinus } from "lucide-react";
import { useTempContext } from "../../../contexts/TempContext";

export default function ButtonMinus() {
    const { handleTempTurnDown, temp } = useTempContext()
    return (
        <>
            <button onClick={handleTempTurnDown} className={`btn text-bg-primary ${temp <= 16 ? 'disabled' : ''}`}><CircleMinus size={20} /></button>
        </>
    )
}