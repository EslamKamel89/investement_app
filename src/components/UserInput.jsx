import { useState } from 'react';
export function UserInput() {
    const [userInput, setUserInput] = useState({
        intialInvestment: 1000,
        annaulInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });
    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [inputIdentifier]: newValue,
            };
        });
    }
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="">Initial Investment</label>
                <input
                    type="number"
                    required
                    onChange={(event) => handleChange('intialInvestment', event.target.value)}
                    value={userInput.intialInvestment} />
            </p>
            <p>
                <label htmlFor="">Annual Investment</label>
                <input
                    type="number"
                    required
                    onChange={(event) => handleChange('annaulInvestment', event.target.value)}
                    value={userInput.annaulInvestment}
                />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label htmlFor="">Excpected Return</label>
                <input
                    type="number"
                    required
                    onChange={(event) => handleChange('expectedReturn', event.target.value)}
                    value={userInput.expectedReturn}
                />
            </p>
            <p>
                <label htmlFor="">Duration</label>
                <input
                    type="number"
                    required
                    onChange={(event) => handleChange('duration', event.target.value)}
                    value={userInput.duration}
                />
            </p>
        </div>

    </section>;
}