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
		{ label: <Link to="/properties">Properties</Link>, key: "/properties" },
		{ label: <Link to="/properties/create">Add Property</Link>, key: "/properties/create" },
		{ label: <Link to="/contacts">Contacts</Link>, key: "/contacts" },
		{ label: <Link to="/users">Users</Link>, key: "/users" },
		{ label: <Link to="/fields">Edit Fields</Link>, key: "/fields" },
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
