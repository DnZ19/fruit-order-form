import React from "react";

const Button = ({type, onClick, buttonText }) => {
    return (

        <>
            <button
                className="mainButton"
                type={type}
                onClick={onClick}
            >
                {buttonText}

            </button>


        </>

    )
}

export default Button