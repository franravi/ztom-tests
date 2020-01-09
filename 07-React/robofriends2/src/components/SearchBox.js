import	React	from	'react';

//	We tie the search box to the callback searchChange.  This callback will be tied to the
//  onChange event.
//
const	SearchBox	=	({ searchChange })	=>	{
	return	(
		<div className="pa2">
			<input
				className='pa3 ba b--green bg-lightest-blue'
				type='search'
				placeholder='search robots'
				onChange={searchChange}
				/>
		</div>
	);
}

export	default	SearchBox