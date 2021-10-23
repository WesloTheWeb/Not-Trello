import React, { useContext } from 'react';
import { ModalContext } from '../../Contexts/ModalContext';
import { useForm } from "react-hook-form";
import classes from './CreateTicketModal.module.css';

const { modalContainer, closeButton } = classes;


const CreateTicketModal = (props) => {

    const { isModal } = useContext(ModalContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const handleClose = () => {
        return isModal(false);
    }

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form className={modalContainer} onSubmit={handleSubmit(onSubmit)}>
            <h2>Create a new ticket</h2>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="test" {...register("example")} />

            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("exampleRequired", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            <div>
                <button type="submit">Submit</button>
                <button className={closeButton} onClick={handleClose}>Close</button>
            </div>
        </form>
    );
};

export default CreateTicketModal;