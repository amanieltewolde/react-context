import { useContext } from "react"
import TempContext from "../../contexts/TempContext"

export default function Footer() {
    const { temp } = useContext(TempContext)
    return (
        <footer className="text-bg-success text-center">
            <h2>Footer</h2>
            <p>Termostato: <span className={`badge ${temp < 24 ? 'text-bg-info' : 'text-bg-danger'}`}>{temp + '\u00B0C'}</span></p>
        </footer>
    )
}