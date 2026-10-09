import { useTempContext } from "../../contexts/TempContext"

export default function TempBadge({ position }) {
    const { actualTemp } = useTempContext()
    return (
        <>
            <span className={`badge ${position} ${actualTemp.bgColor}`}>{actualTemp.label}</span>
        </>
    )
}