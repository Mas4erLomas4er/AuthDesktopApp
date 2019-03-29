const setToLocalStorage = ( item, name ) => {
	let stringifyItem = JSON.stringify( item );
	console.log( stringifyItem );
	localStorage.setItem( name, stringifyItem );
};
const getFromLocalStorage = ( name ) => {
	let item = localStorage.getItem( name );
	return JSON.parse( item );
};

window.onload = () => {
	const switcher = () => {
		let switcherBtns = document.querySelectorAll( "a.form-title" );
		switcherBtns.forEach( elem => {
			elem.addEventListener( "click", function ( event ) {
				let target = event.target;
				if ( !( target.classList.contains( "active" ) ) ) {
					document.querySelectorAll( "a.form-title" ).forEach( elem => {
						elem.classList.toggle( "active" );
					} );
					document.querySelectorAll( "form" ).forEach( elem => {
						elem.classList.toggle( "showed" );
					} );
				}

			} )
		} );
	};

	let users = getFromLocalStorage( "users" ) || [];

	class User {
		constructor ( username, email, password ) {
			this.username = username;
			this.email = email;
			this.password = password;
		}
	}

	const signUp = () => {
		let form = document.querySelector( "form.sign-up" );
		let name = form.login.value;
		let password = form.password.value;
		let email = form.email.value;
		let user = new User( name, email, password );
		users.push( user );
		setToLocalStorage( users, "users" );
	};

	const findElemInArrayOfObjects = ( array, value ) => array.forEach( ( elem, index ) => {
		console.log(elem.username===value);
		return elem.email === value || elem.username === value ? index : undefined;
	} );

	const signIn = () => {
		let form = document.querySelector( "form.sign-in" );
		console.log( users );
		console.log( findElemInArrayOfObjects( users, form.login.value ) );
		return false;
	};


	console.log( users );
	document.querySelector( "form.sign-up" ).onsubmit = signUp;
	document.querySelector( "form.sign-in" ).onsubmit = signIn;

	switcher();

};



