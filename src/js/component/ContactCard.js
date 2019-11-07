import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";
import { link } from "react-router-dom";
import { consumer } from "../store/appContext.js";

class ContactCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// initialize your state
		};
	}

	render() {
		return (
			<consumer>
				{{ Store, actions }} =>{" "}
				{
					<li className="list-group-item">
						<div className="row w-100">
							<div className="col-12 col-sm-6 col-md-3 px-0">
								<img
									src={MikePhoto}
									alt="Mike Anamendolla"
									className="rounded-circle mx-auto d-block img-fluid"
								/>
							</div>

							<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
								<div className=" float-right">
									<link to={"edit/" + this.props.id + "/" + this.props.name}>
										<button className="btn">
											<i className="fas fa-pencil-alt mr-3" />
										</button>
									</link>

									<button
										className="btn"
										onClick={() => {
											actions.deleteContact(this.props.id);
										}}>
										<i className="fas fa-trash-alt" />
									</button>
								</div>
								<label className="name lead">{this.props.name}</label>
								<br />
								<i className="fas fa-map-marker-alt text-muted mr-3" />
								<span className="text-muted">{this.props.address}</span>
								<br />
								<span
									className="fa fa-phone fa-fw text-muted mr-3"
									data-toggle="tooltip"
									title=""
									data-original-title="(870) 288-4149"
								/>
								<span className="text-muted small">{this.props.phone}</span>
								<br />
								<span
									className="fa fa-envelope fa-fw text-muted mr-3"
									data-toggle="tooltip"
									data-original-title=""
									title=""
								/>
								<span className="text-muted small text-truncate">{this.props.email}</span>
							</div>
						</div>
					</li>
				}
				}
			</consumer>
		);
	}
}

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	name: PropTypes.string,
	address: PropTypes.string,
	phone: PropTypes.string,
	email: PropTypes.string,
	id: PropTypes.string,
	position: PropTypes.number
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
export default ContactCard;
