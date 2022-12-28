import { FC, useEffect } from "react";
import { Outlet } from "react-router";
import { useAppSelector } from "../../hooks/useAppSelector";
import { TRootState } from "../../store";
import { useAppDispatch } from "../../hooks/useAddDispatch";
import { getCurrentUserHandler } from "../../actions/auth.action";
import { Button, Result, Typography } from "antd";
import { Link } from "react-router-dom";

const ProtectedRoute: FC = () => {
	const dispatch = useAppDispatch();
	const { currentUser } = useAppSelector((state: TRootState) => state.users);

	useEffect(() => {
		dispatch(getCurrentUserHandler());
	}, [dispatch]);

	return currentUser ? (
		<Outlet />
	) : (
		<Result
			status="403"
			title="You are not allowed here"
			subTitle="You don't have essential rights"
			extra={
				<>
					<Button type="primary">
						<Link to="/">Login Again</Link>
					</Button>
					<Typography.Paragraph className="!m-0">or</Typography.Paragraph>
					<Button type="link">
						<a href="https://shriproperty.com">Back to client website</a>
					</Button>
				</>
			}
		/>
	);
};

export default ProtectedRoute;
