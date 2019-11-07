const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contact: [],
			contacts: [
				{
					id: 1,
					full_name: "Diego Rojas",
					email: "dsrt1991@gmail.com",
					phone: "12345678",
					address: "calle 12345"
				}
			]
		},

		actions: {
			addContact: (name, address, phone, email) => {
				console.log(
					JSON.stringify({
						agenda_slug: "agenda_diego",
						full_name: name,
						email: email,
						phone: phone,
						address: address
					})
				);
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "post",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						agenda_slug: "agenda_diego",
						full_name: name,
						email: email,
						phone: phone,
						address: address
					})
				})
					.then(response => console.log(response.json()))
					.then(() => {
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/agenda_diego")
							.then(response => response.json())
							.then(data => {
								console.log(data);
								setStore({ agenda: data });
							});
					});
			},
			editContact: (name, address, phone, email, id, history) => {
				console.log("$$$$", name, address, phone, email, id);
				let store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "put",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						agenda_slug: "agenda_diego",
						full_name: name,
						email: email,
						phone: phone,
						address: address
					})
				})
					.then(response => console.log(response.json()))
					.then(() => {
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/agenda_diego")
							.then(response => response.json())
							.then(data => {
								console.log(data);
								setStore({ agenda: data });
							});
					})
					.then(() => history.push("/"));
			},
			deleteContact: id => {
				console.log(id);
				const store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "delete",
					headers: { "Content-Type": "aplication/json" }
				}).then(() => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/agenda_diego")
						.then(response => response.json())
						.then(data => {
							setStore({ agenda: data });
						});
				});
			}
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
