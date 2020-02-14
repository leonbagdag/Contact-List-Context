const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			formInput: {},
			loading: false,
			contactToDelete: {}
		},
		actions: {
			setContactToDelete: contact => {
				setStore({
					contactToDelete: {
						full_name: contact.full_name,
						id: contact.id
					}
				});
			},

			deleteContact: () => {
				const store = getStore();
				setStore({ loading: true });
				fetch(`https://assets.breatheco.de/apis/fake/contact/${store.contactToDelete.id}`, {
					//LAL_Agenda_stgo
					method: "DELETE",
					mode: "cors",
					headers: { "Content-Type": "application/json" }
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.status);
						}
						return response.json();
					})
					.then(data => {
						//eslint-disable-next-line
						console.log("Success:", JSON.stringify(data));
						getActions().getAllContacts();
					})
					.catch(error => {
						//eslint-disable-next-line
						console.log(error);
						setStore({ loading: false });
					});
			},

			getAllContacts: () => {
				const store = getStore();
				setStore({ loading: true });
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/LAL_Agenda_stgo", {
					//LAL_Agenda_stgo
					headers: { "Content-Type": "application/json" },
					mode: "cors"
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.status);
						}
						return response.json();
					})
					.then(data => {
						store.contacts = data;
						setStore({ contacts: store.contacts, loading: false });
					})
					.catch(error => {
						//eslint-disable-next-line
						console.log(error);
						setStore({ loading: false });
					});
			},

			setEditForm: element_ID => {
				const store = getStore();
				store.contacts.forEach(item => {
					if (item.id === element_ID) {
						store.formInput = Object.assign(store.formInput, {
							full_name: item.full_name,
							email: item.email,
							agenda_slug: "LAL_Agenda_stgo",
							address: item.address,
							phone: item.phone
						});
					}
				});
				setStore({ formInput: store.formInput });
			},

			setAddForm: () => {
				setStore({
					formInput: {
						full_name: "",
						email: "",
						agenda_slug: "LAL_Agenda_stgo",
						address: "",
						phone: ""
					}
				});
			},

			handleChange: event => {
				const store = getStore();
				store.formInput[event.target.name] = event.target.value;
				setStore({ formInput: store.formInput });
			},

			updateContact: contactID => {
				const store = getStore();
				setStore({ loading: true });
				fetch(`https://assets.breatheco.de/apis/fake/contact/${contactID}`, {
					//LAL_Agenda_stgo
					method: "PUT",
					body: JSON.stringify(store.formInput),
					mode: "cors",
					headers: { "Content-Type": "application/json" }
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.status);
						}
						return response.json();
					})
					.then(data => {
						//eslint-disable-next-line
						console.log("Success:", JSON.stringify(data));
						setStore({ loading: false });
					})
					.catch(error => {
						//eslint-disable-next-line
						console.log(error);
						setStore({ loading: false });
					});
			},

			addNewContact: () => {
				const store = getStore();
				setStore({ loading: true });
				fetch(`https://assets.breatheco.de/apis/fake/contact/`, {
					//LAL_Agenda_stgo
					method: "POST",
					body: JSON.stringify(store.formInput),
					mode: "cors",
					headers: { "Content-Type": "application/json" }
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.status);
						}
						return response.json();
					})
					.then(data => {
						//eslint-disable-next-line
						console.log("Success:", JSON.stringify(data));
						setStore({
							loading: false,
							formInput: {
								full_name: "",
								email: "",
								agenda_slug: "LAL_Agenda_stgo",
								address: "",
								phone: ""
							}
						});
					})
					.catch(error => {
						//eslint-disable-next-line
						console.log(error);
						setStore({ loading: false });
					});
			}
		}
	};
};

export default getState;
