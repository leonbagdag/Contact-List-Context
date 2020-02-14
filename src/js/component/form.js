import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Form = () => {
	const { store, actions } = useContext(Context);
	return (
		<form>
			<div className="form-group">
				<label>Full Name</label>
				<input
					type="text"
					className="form-control"
					name="full_name"
					placeholder="Full Name"
					value={store.formInput.full_name || ""}
					onChange={() => actions.handleChange(event)}
				/>
			</div>
			<div className="form-group">
				<label>Email Address</label>
				<input
					type="email"
					className="form-control"
					name="email"
					placeholder="Email Address"
					value={store.formInput.email || ""}
					onChange={() => actions.handleChange(event)}
				/>
			</div>
			<div className="form-group">
				<label>Phone</label>
				<input
					type="text"
					className="form-control"
					name="phone"
					placeholder="Phone"
					value={store.formInput.phone || ""}
					onChange={() => actions.handleChange(event)}
				/>
			</div>
			<div className="form-group">
				<label>Address</label>
				<input
					type="text"
					className="form-control"
					name="address"
					placeholder="Address"
					value={store.formInput.address || ""}
					onChange={() => actions.handleChange(event)}
				/>
			</div>
		</form>
	);
};
