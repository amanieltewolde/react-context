import { useTempContext } from "../../../contexts/TempContext"

export default function ButtonReset() {
    const { handleStandardTemp } = useTempContext()
    return (
        <>
            <button onClick={handleStandardTemp} className="btn btn-danger fw-bold">Reset</button>
        </>
    )
}