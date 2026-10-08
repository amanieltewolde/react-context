import { CirclePlus } from "lucide-react";
import { useContext } from "react";
import TempContext from "../../../contexts/TempContext";

export default function ButtonPlus() {
    const { handleTempTurnUp, temp } = useContext(TempContext)
    return (
        <>
            <button onClick={handleTempTurnUp} className={`btn text-bg-primary  ${temp >= 28 ? 'disabled' : ''}`}><CirclePlus size={20} /></button>
        </>
    )
}