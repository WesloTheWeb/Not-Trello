import React, { useContext } from 'react';
import { ModalContext } from '../../Contexts/ModalContext';
import { useForm } from "react-hook-form";
import classes from './CreateTicketModal.module.css';

const { modalContainer, modalCTAContainer, closeButton, fieldLabel } = classes;

const CreateTicketModal = (props) => {

    const { isModal } = useContext(ModalContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        handleClose();
    }

    const handleClose = () => {
        return isModal(false);
    }

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form className={modalContainer} onSubmit={handleSubmit(onSubmit)}>
            <h2>Create a new ticket</h2>
            {/* register your input into the hook by invoking the "register" function */}
            <div className={fieldLabel}>
                <label>Title</label>
                <input placeholder="Title" {...register("title")} />
            </div>
            <div className={fieldLabel}>
                <label>Description</label>
                <textarea type="text" size="50" placeholder="Description" {...register("description", { required: true })} />
            </div>
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            <div className={modalCTAContainer}>
                <button type="submit">Submit</button>
                <button className={closeButton} onClick={handleClose}>Close</button>
            </div>
        </form>
    );
};

export default CreateTicketModal;