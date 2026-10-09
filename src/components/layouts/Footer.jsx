import { useTempContext } from "../../contexts/TempContext"
import TempBadge from "../common/TempBadge"

export default function Footer() {
    const { temp } = useTempContext()
    return (
        <footer className="text-bg-success text-center">
            <div className="container  position-relative">

                <h2>Footer</h2>
                <p>Termostato: {temp + '\u00B0C'}</p><TempBadge
                    position='position-absolute end-0 bottom-0' />
            </div>
        </footer>
    )
}