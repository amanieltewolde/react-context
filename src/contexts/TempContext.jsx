import { useContext, createContext, useState } from "react";

// creazione context
const TempContext = createContext()

// creazione component provider
export default function TempContextProvider({ children }) {
    const [temp, setTemp] = useState(20)


    function handleTempTurnDown() {
        setTemp(actual => (actual > 16 ? actual - 1 : actual))
    }

    function handleTempTurnUp() {
        setTemp(actual => (actual < 28 ? actual + 1 : actual))
    }

    function handleStandardTemp() {
        setTemp(20)
    }

    let actualTemp = {
    };

    const coldTemp = temp < 20;
    const hotTemp = temp > 24;
    const comfortTemp = temp >= 20 && temp <= 24;

    if (coldTemp) {
        actualTemp =
        {
            label: 'freddo',
            bgColor: 'bg-info',
        }
    } else if (hotTemp) {
        actualTemp =
        {
            label: 'caldo',
            bgColor: 'bg-danger',
        }
    } else if (comfortTemp) {
        actualTemp =
        {
            label: 'comfort',
            bgColor: 'bg-success',
        }

    }

    return (
        <>
            <TempContext value={{
                temp,
                handleTempTurnUp,
                handleTempTurnDown,
                handleStandardTemp,
                actualTemp,
            }}>
                {children}
            </TempContext>
        </>
    )
}


// creazione custom hook

// eslint-disable-next-line
export function useTempContext() {

    const context = useContext(TempContext)

    return context
}









// export del context(da evitare in seguito)
// export default TempContext