import React from "react";

const FruitSelector = ({
                           className,
                           title,
                           disabledWhenZero,
                           onClickDown,
                           buttonDownText,
                           inputType,
                           inputValue,
                           onClickUp,
                           buttonUpText
                       }) => {
    return (

        <div
            className="fruit-selector-container"

        >
            <header className="fruit-title">
                <h2>{title}</h2>
            </header>

            <div className="fruit-counters">
                <button
                    disabled={disabledWhenZero}
                    onClick={onClickDown}
                >
                    {buttonDownText}
                </button>
                <input type={inputType} value={inputValue}/>
                <button
                    onClick={onClickUp}
                >
                    {buttonUpText}
                </button>

            </div>


        </div>

    )
}
export default FruitSelector