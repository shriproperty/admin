import React, { useState, useEffect } from "react";
import { DesktopOutlined, FileOutlined, MenuOutlined } from "@ant-design/icons";
import { useLocation } from "react-router";
import { Layout, Menu, MenuProps } from "antd";
import { Link } from "react-router-dom";
import { ItemType } from "antd/lib/menu/hooks/useItems";

const { Header, Content, Sider } = Layout;

const menuItems: ItemType[] = [
	{
		label: <Link to="/fields/category">Category</Link>,
		key: "/fields/category",
		icon: <DesktopOutlined />,
	},
	{
		label: <Link to="/fields/possession">Possession</Link>,
		key: "/fields/possession",
		icon: <DesktopOutlined />,
	},
	{
		label: <Link to="fields/property-type">Property Type</Link>,
		key: "fields/property-type",
		icon: <MenuOutlined />,
	},
	{
		label: <Link to="fields/construction-status">Construction Status</Link>,
		key: "fields/construction-status",
		icon: <MenuOutlined />,
	},
	{
		label: <Link to="fields/furnishing-status">Furnishing Status</Link>,
		key: "fields/furnishing-status",
		icon: <FileOutlined />,
	},
	{ label: <Link to="fields/unit">Unit</Link>, key: "fields/unit", icon: <FileOutlined /> },
	{
		label: <Link to="fields/facilities">Facilities</Link>,
		key: "fields/facilities",
		icon: <MenuOutlined />,
	},
];
const Fields: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false);
	const location = useLocation();
	const [selectedItem, setSelectedItem] = useState(location.pathname);

	useEffect(() => {
		setSelectedItem(location.pathname);
	}, [location.pathname]);

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
				<Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={menuItems} />
			</Sider>
		</Layout>
	);
};

export default Fields;
