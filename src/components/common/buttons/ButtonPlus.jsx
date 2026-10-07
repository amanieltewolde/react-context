import { CirclePlus } from "lucide-react";
import { useContext } from "react";
import TempContext from "../../../contexts/TempContext";

export default function ButtonPlus() {
    const { handleTempTurnUp } = useContext(TempContext)
    return (
        <>
            <button onClick={handleTempTurnUp} className="btn text-bg-primary btn-sm"><CirclePlus size={20} /></button>
        </>
    )
}