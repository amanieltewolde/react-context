export default function ButtonMinus() {
    return (
        <>
            <button onClick={handleTempTurnDown} className="btn text-bg-primary btn-sm"><CircleMinus size={20} /></button>
        </>
    )
}