import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/contactCard";

export const Contacts = props => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		//will mount -> get from api contacts
		actions.getAllContacts();
	}, []);
	return (
		<div className="container-fluid">
			<div className="container my-4 text-right">
				<Link to="/add_contact">
					<button type="button" className="btn btn-success">
						Add Contact
					</button>
				</Link>
			</div>
			<div className="container">
				<ContactCard />
			</div>
		</div>
	);
};
