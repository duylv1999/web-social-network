import React from 'react';
import { LogoIns } from '~/components/Icons';
import { GrHomeRounded } from 'react-icons/gr';
import { BsSearch } from 'react-icons/bs';

interface MenuInterface {
	title: string;
	icon: React.ReactElement;
	active: boolean;
}

const menu: MenuInterface[] = [
	{ title: 'Trang chủ', icon: <GrHomeRounded className="text-2xl" />, active: true },
	{ title: 'Tìm kiếm', icon: <BsSearch className="text-2xl" />, active: false },
	{ title: 'Tìm kiếm', icon: <BsSearch className="text-2xl" />, active: false },
	{ title: 'Tìm kiếm', icon: <BsSearch className="text-2xl" />, active: false },
	{ title: 'Tìm kiếm', icon: <BsSearch className="text-2xl" />, active: false },
	{ title: 'Tìm kiếm', icon: <BsSearch className="text-2xl" />, active: false },
	{ title: 'Tìm kiếm', icon: <BsSearch className="text-2xl" />, active: false },
	{ title: 'Tìm kiếm', icon: <BsSearch className="text-2xl" />, active: false }
];

const Sidebar = () => {
	return (
		<div className="pl-3 pr-3 pt-2 pb-5 cursor-pointer">
			<div className="pl-3 pr-3 pt-6 pb-4 mb-5">
				<LogoIns />
			</div>

			<ul>
				{menu.map((ele) => (
					<li className={'flex items-center pl-3 pr-3 pt-3 pb-3 h-14 group'}>
						<div className={`group-hover:scale-110 ele.active ? 'fill-black' : ''`}>{ele.icon}</div>
						<span className={`ml-4 ${ele.active ? 'font-bold' : ''}`}>{ele.title}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
