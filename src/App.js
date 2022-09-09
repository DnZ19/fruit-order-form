import React from 'react';
import './App.css';
import FruitSelector from "./components/FruitSelector";
import Button from "./components/Button";
import {useForm} from "react-hook-form";


function App() {

    const [banaanAmount, setBanaanAmount] = React.useState(0);
    const [aardbeiAmount, setAardbeiAmount] = React.useState(0);
    const [appelAmount, setAppelAmount] = React.useState(0);
    const [kiwiAmount, setKiwiAmount] = React.useState(0);

    function resetFruitAmount() {
        setBanaanAmount(0)
        setAardbeiAmount(0)
        setAppelAmount(0)
        setKiwiAmount(0)

    }

    const { register, handleSubmit, formState: {errors}, reset } = useForm();


    const orderInfo = {

        banaanAmount,
        appelAmount,
        aardbeiAmount,
        kiwiAmount

        // bananas: {banaanAmount},
        // apples: {appelAmount},
        // strawberries: {aardbeiAmount},
        // kiwis: {kiwiAmount}

    }

    function onFormSubmit( data ) {
        console.log( data, orderInfo );
        reset();
        resetFruitAmount();
    }

    return (
        <>

            <div id="outer-container">

                <div id="inner-container">

                    <h1>Fruitmand bezorgservice</h1>

                    <section className="fruit">


                        <FruitSelector
                            title="🍌 Bananen"
                            disabledWhenZero={banaanAmount === 0}
                            onClickDown={() => setBanaanAmount (banaanAmount-1)}
                            buttonDownText="-"
                            inputType="number"
                            inputValue={banaanAmount}
                            onClickUp={() => setBanaanAmount (banaanAmount+1)}
                            buttonUpText="+"

                        />

                        <FruitSelector
                            title="🍏 Appels"
                            disabledWhenZero={appelAmount === 0}
                            onClickDown={() => setAppelAmount (appelAmount-1)}
                            buttonDownText="-"
                            inputType="number"
                            inputValue={appelAmount}
                            onClickUp={() => setAppelAmount (appelAmount+1)}
                            buttonUpText="+"

                        />

                        <FruitSelector
                            title="🍏 Aardbei"
                            disabledWhenZero={aardbeiAmount === 0}
                            onClickDown={() => setAardbeiAmount (aardbeiAmount-1)}
                            buttonDownText="-"
                            inputType="number"
                            inputValue={aardbeiAmount}
                            onClickUp={() => setAardbeiAmount (aardbeiAmount+1)}
                            buttonUpText="+"

                        />

                        <FruitSelector
                            title="🥝 Kiwi's"
                            disabledWhenZero={kiwiAmount === 0}
                            onClickDown={() => setKiwiAmount (kiwiAmount-1)}
                            buttonDownText="-"
                            inputType="number"
                            inputValue={kiwiAmount}
                            onClickUp={() => setKiwiAmount (kiwiAmount+1)}
                            buttonUpText="+"

                        />

                        {/*<button type="button" onClick={resetFruitAmount}> Reset </button>*/}
                        <Button
                            type="button"
                            onClick={resetFruitAmount}
                            buttonText="Reset"

                        />


                    </section>

                    <form
                        onSubmit={handleSubmit(handleSubmit(onFormSubmit))}
                    >
                        <div className="form-container">

                            <label>Voornaam</label>
                            <input
                                type="text"
                                {...register(
                                    "firstName", {
                                        required: true,
                                        minLength: {
                                            value: 3,
                                            message: "Name is shorter then 3 characters"
                                        }
                                    }
                                )}
                            />

                            <label>Achternaam</label>
                            <input
                                type="text"
                                {...register(
                                    "lastName", {
                                        required: true,
                                        minLength: {
                                            value: 3,
                                            message: "Name is shorter then 3 characters"
                                        }
                                    }
                                )}
                            />

                            <label>Leeftijd</label>
                            <input
                                type="number"
                                {...register(
                                    "age", {
                                        required: true,
                                        min: {
                                            value: 18,
                                            message: "You need to be older then 18"
                                        }
                                    }
                                )}
                            />

                            <label>Postcode</label>
                            <input
                                type="text"
                                {...register(
                                    "postalCode", {
                                        required: true,
                                        minLength: {
                                            value: 6,
                                            message: "Please type in a correct postal code"
                                        }
                                    }
                                )}
                            />


                            Bezorgfrequentie
                            <select name="bezorgfrequentie">

                                <option value="iedere week">Iedere week</option>
                                <option value="iedere week">Om de week</option>
                                <option value="iedere week">Iedere maand</option>

                            </select>
                            <div>
                                <input type="radio"/> Overdag
                                <input type="radio"/> 's Avonds

                            </div>



                            <textarea
                                name="opmerkingen"
                                id="message"
                                cols="50"
                                rows="10"
                                {...register("message", {
                                    maxLength: {
                                            value: 50,
                                            message: "You have to much text"
                                        }
                                })}
                                placeholder="Laat een bericht van mx. 50 tekens achter"
                            ></textarea>

                            <input
                                id="checkbox"
                                type="checkbox"
                                {...register("checkbox", {
                                    required:   {
                                        value: true,
                                        message: "You need to agree"
                                    }
                                })}
                            /> Ik ga akkoord met de voorwaarden

                            {errors.name && <p>{errors.name.message}</p>}
                            {errors.age && <p>{errors.age.message}</p>}
                            {errors.message && <p>{errors.message.message}</p>}
                            {errors.checkbox && <p>{errors.checkbox.message}</p>}

                            <Button
                                type="Submit"
                                buttonText="Send"
                            />

                        </div>

                    </form>


                </div>
            </div>
        </>
    );
}

export default App;