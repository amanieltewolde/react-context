import { CirclePlus } from "lucide-react";
import { useTempContext } from "../../../contexts/TempContext";

export default function ButtonPlus() {
    const { handleTempTurnUp, temp } = useTempContext()
    return (
        <>
            <button onClick={handleTempTurnUp} className={`btn text-bg-primary  ${temp >= 28 ? 'disabled' : ''}`}><CirclePlus size={20} /></button>
        </>
    )
}