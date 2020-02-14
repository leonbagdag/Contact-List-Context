import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Form } from "../component/form";

export const EditContact = props => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		//will mount -> set configuration in form to Edit Contact
		actions.setEditForm(props.match.params.ID);
	}, []);
	return (
		<div className="container my-4">
			<h1 className="text-center">Edit Contact</h1>
			<Form />
			<button
				role="button"
				className="btn btn-primary btn-lg btn-block my-2"
				onClick={() => actions.updateContact(props.match.params.ID)}
				disabled={store.loading}>
				{store.loading && <i className="fas fa-spinner fa-spin" />} Save Contact
			</button>
			<Link to="/"> or back to contacts </Link>
		</div>
	);
};
EditContact.propTypes = {
	match: PropTypes.object
};
