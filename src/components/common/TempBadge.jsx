import { useContext } from "react"
import TempContext from "../../contexts/TempContext"

export default function TempBadge({ position }) {
    const { actualTemp } = useContext(TempContext)
    return (
        <>
            <span className={`badge ${position} ${actualTemp.bgColor}`}>{actualTemp.label}</span>
        </>
    )
}