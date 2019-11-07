import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default its just going to be Null.
export const { Consumer, Provider } = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to Layout.jsx, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.jsx#L35
const injectContext = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore =>
					this.setState({
						store: Object.assign(this.state.store, uppdatedStore)
					})
			});
		}
		componentDidMount() {
			fetch("https://assets.breatheco.de/apis/fake/contact/agenda/agenda_diego")
				.then(response => response.json())
				.then(data => {
					console.log(data);
					let { store } = this.state;
					this.setState({ store: { ...store, agenda: data } });
				});
		}
		render() {
			return (
				<Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Provider>
			);
		}
	}
	return StoreWrapper;
};

export default injectContext;
