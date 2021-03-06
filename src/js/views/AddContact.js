import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Form } from "../component/form";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		//will mount -> set configuration in form to add contact
		actions.setAddForm();
	}, []);
	return (
		<div className="container my-4">
			<h1 className="text-center">Add Contact</h1>
			<Form />
			<button
				type="button"
				className="btn btn-primary btn-lg btn-block my-2"
				onClick={() => actions.addNewContact()}
				disabled={store.loading}>
				{store.loading && <i className="fas fa-spinner fa-spin" />} Save Contact
			</button>
			<Link to="/"> or back to contacts </Link>
		</div>
	);
};
