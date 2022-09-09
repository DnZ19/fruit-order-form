import React from "react";
import {useForm} from "react-hook-form";

const Import = () => {
    return (
        <label>
            labelText
        </label>

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


)
}
export default Import