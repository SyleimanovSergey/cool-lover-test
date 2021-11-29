import React, { ChangeEvent, useEffect, useState } from 'react';
import Users from 'pages/Users';
import { useProfileAction } from '../hooks/useActions';

const App: React.FC = () => {
	window.scroll(100, 0);
	return (
		<main>
			<Users />
		</main>
	);
};

export default App;
