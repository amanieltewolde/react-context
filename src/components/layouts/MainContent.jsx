import ThermostatSection from "../common/ThermostatSection";

export default function MainContent() {
    return (
        <main className="flex-grow-1 min-vh-100">
            <h2 className="text-center">Main Content</h2>
            <ThermostatSection />
        </main>
    )
}