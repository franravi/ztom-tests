import	React 	from	'react'
import 	Card 	from	'./Card'

const CardList	=	({ robots })	=>	{
	//	Version 1:  We set a variable with the contents of each card, and then return a
	//  pseudo html with the content.
	//
/*
	const cardArray	=	robots.map((user, i)	=>	{
		//	Notice the key={i}.  React needs to have a key to identify each element, in order
		//	to be able to identify if an item gets removed or added.  This will set it up.
		//
		return	(
			<Card
				key={i}
				id={robots[i].id}
				name={robots[i].name}
				email={robots[i].email}
				/>
			);
	});
	return	<div>{cardArray}</div>;
*/
	//	Version 2: We grab the map piece and stuck it inside the return part.
	return	(
		<div>
			{
				robots.map((user, i)	=>	{
					return	(
						<Card
							key={i}
							id={robots[i].id}
							name={robots[i].name}
							email={robots[i].email}
							/>
						);
				})
			}
		</div>
		);
}

export	default	CardList