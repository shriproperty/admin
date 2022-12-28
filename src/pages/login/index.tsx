import { Button, Form, Input, Typography } from "antd";
import { FC, useEffect, useState } from "react";
import { ILoginPayload, getCurrentUserHandler, loginHandler } from "../../actions/auth.action";
import { useAppDispatch } from "../../hooks/useAddDispatch";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../hooks/useAppSelector";
import { TRootState } from "../../store";

const Login: FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [isLoginLoading, setIsLoginLoading] = useState(false);
	const { currentUser } = useAppSelector((state: TRootState) => state.users);

	useEffect(() => {
		if (currentUser) {
			navigate("/properties");
		}
	}, []);

	const onSubmitHandler = async (values: ILoginPayload) => {
		setIsLoginLoading(true);
		try {
			await dispatch(loginHandler(values));
			await dispatch(getCurrentUserHandler());
			navigate("/properties");
		} finally {
			setIsLoginLoading(false);
		}
	};

	return (
		<main className="px-16 py-10 flex flex-col font-poppins justify-center items-center h-screen w-screen no-select">
			<section className="flex flex-col justify-center items-center rounded-[10px] h-fit w-[80%] p-3 lg:p-8 shadow-lg box-shadow lg:min-h-[50vh]">
				<Typography.Title>Login to continue</Typography.Title>
				<div className="flex justify-center items-center">
					<div className="w-1/3">
						<img src="/images/login.svg" alt="login" className="h-[100%] w-[100%]" />
					</div>
					<div className="w-1/2 ml-10">
						<Form layout="vertical" size="large" onFinish={onSubmitHandler}>
							<Form.Item
								label="Email"
								name="email"
								rules={[
									{ required: true, message: "Email is required" },
									{ whitespace: true, message: "Email is required" },
								]}
							>
								<Input type="email" placeholder="info@shriproperty.com" />
							</Form.Item>

							<Form.Item
								label="Password"
								name="password"
								rules={[
									{ required: true, message: "Password is required" },
									{ whitespace: true, message: "Password is required" },
								]}
							>
								<Input.Password type="text" placeholder="password" />
							</Form.Item>

							<Button type="primary" htmlType="submit" loading={isLoginLoading}>
								Login
							</Button>
						</Form>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Login;
