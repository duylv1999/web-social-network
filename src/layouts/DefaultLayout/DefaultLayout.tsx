import React, { ReactNode } from 'react';
import Sidebar from '../components/Sidebar';

type Props = {
	children?: ReactNode;
};

const DefaultLayout: React.FC<Props> = ({ children }) => {
	return (
		<div className="flex h-screen w-full">
			<div className="w-~2/5 border-r border-[#dbdbdb] h-full fixed">
				<Sidebar />
			</div>
			<div className="w-~3/5 ml-wSidebar">{children}</div>
		</div>
	);
};

export default DefaultLayout;
