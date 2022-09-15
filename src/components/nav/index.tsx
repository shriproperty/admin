import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { useLocation } from "react-router";

function Nav() {
	const location = useLocation();
	const [selectedItem, setSelectedItem] = useState(location.pathname);

	useEffect(() => {
		setSelectedItem(location.pathname);
	}, [location.pathname]);

	const menuItems: ItemType[] = [
		{ label: <Link to="/contacts">Contacts</Link>, key: "/contacts" },
		{ label: <Link to="/users">Users</Link>, key: "/users" },
	];

	return (
		<Layout className="!bg-white">
			<Layout.Header className="!bg-white">
				<Menu
					selectedKeys={[selectedItem]}
					theme="light"
					mode="horizontal"
					items={menuItems}
				/>
			</Layout.Header>
		</Layout>
	);
}

export default Nav;
