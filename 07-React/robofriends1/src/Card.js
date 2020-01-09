import React from 'react'

//	Clean param handling option 2:
//	Instead of using props as argument and then referring to its contents as in the next
//	commented code line, we will directly set the variables we will use (this replaces
//	clean param handling option 1).
//
//const Card = (props) => {
//
const Card = ({ name, email, id }) => {

	//	Clean param handling option 1:
	//	We will break the values from properties into individual variables, to make it easier
	//	for us to use, instead of props.id for example.
	//	Replaced by clean param handling option 2.
	//
	//const { name, email, id }	=	props;

	//	IMPORTANT:  We need to return every pseudo-html chunk, wrapped in a single element
	//	(for example, a single "<div>" ).
	//
	return	(
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card