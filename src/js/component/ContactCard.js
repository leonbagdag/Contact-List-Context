import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContactCard = () => {
	const { store, actions } = useContext(Context);
	if (store.loading) {
		return (
			// return spinner while loading from API
			<div className="fa-3x text-center">
				<i className="fas fa-spinner fa-spin" />
			</div>
		);
	} else {
		return (
			<div className="list-group">
				{store.contacts.map(item => {
					return (
						<div key={item.id} className="list-group-item">
							<div className="row">
								<div className="col-md-3 my-2">
									<img
										className="mx-auto d-block"
										src="https://picsum.photos/150"
										alt="contact-pic"
										style={{ borderRadius: "150px" }}
									/>
								</div>
								<div className="col-md-6 my-2">
									<h4>{item.full_name}</h4>
									<div style={{ color: "grey", marginTop: "20px" }}>
										<p className="contact-data">
											<i className="fas fa-map-marker-alt" />
											{item.address}
										</p>
										<p className="contact-data">
											<i className="fas fa-phone" />
											{item.email}
										</p>
										<p className="contact-data">
											<i className="fas fa-envelope" />
											{item.phone}
										</p>
									</div>
								</div>
								<div className="col-md-3 text-center my-2">
									<span className="mr-5">
										<Link to={`/edit_contact/${item.id}`} style={{ color: "black" }}>
											<i className="fas fa-pencil-alt" />
										</Link>
									</span>
									<span>
										<i
											className="fas fa-trash-alt pointer"
											type="button"
											data-toggle="modal"
											data-target="#exampleModal"
											onClick={() => actions.setContactToDelete(item)}
										/>
									</span>
								</div>
							</div>
						</div>
					);
				})}
				<div
					className="modal fade"
					id="exampleModal"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">
									DELETE
								</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">¿Quieres eliminar a {store.contactToDelete.full_name}?</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-primary" data-dismiss="modal">
									Cancel
								</button>
								<button
									type="button"
									className="btn btn-danger"
									data-dismiss="modal"
									onClick={() => actions.deleteContact()}>
									Delete Contact
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};
