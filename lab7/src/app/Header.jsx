import React from "react";

const states = {
    NONE: {}, 
    BLUE: { backgroundColor: 'blue', color: 'white' },
    GREEN: { backgroundColor: 'lightgreen', color: 'black' },
}

export default function Header() {
    const [firstState, setFirstState] = React.useState(states.NONE);
    const [secondState, setSecondState] = React.useState(states.NONE);

    const toggleFirst = () => {
        if (firstState === states.BLUE) {
            setFirstState(states.GREEN);
        } else {
            setFirstState(states.BLUE);
        }
    };

    const toggleSecond = () => {
        if (secondState === states.BLUE) {
            setSecondState(states.GREEN);
        } else {
            setSecondState(states.BLUE);
        }
    };

    return (<>
        <h2 style={firstState} onClick={toggleFirst}>Балахон Михайло Олексійович</h2>
        <p style={secondState} onClick={toggleSecond}>Народився 18 вересня 2004 року в місті Краматорськ</p>
        <p>Отримав повну загальну середню освіту в ЗОШ 26. Студент НТУУ "КПІ" 3 курсу</p>
    </>);
}
