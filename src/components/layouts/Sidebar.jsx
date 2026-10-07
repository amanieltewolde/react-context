import ButtonReset from "../common/buttons/ButtonReset";

export default function Sidebar() {
    return (
        <aside className="z-1 position-absolute top-50 start-0 translate-middle-y border w-25 text-center">
            <div>
                <h2 className="h5">Sidebar</h2>
                <ButtonReset />
            </div>
        </aside>
    )
}