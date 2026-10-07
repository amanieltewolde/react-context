import { useContext } from "react"
import TempContext from "../../../contexts/TempContext"

export default function ButtonReset() {
    const { handleStandardTemp } = useContext(TempContext)
    return (
        <>
            <button onClick={handleStandardTemp} className="btn btn-danger btn-sm fw-bold">Reset</button>
        </>
    )
}