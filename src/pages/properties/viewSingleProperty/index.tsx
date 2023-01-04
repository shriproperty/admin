import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { IProperty } from "../../../slices/properties.slice";
import { useAppDispatch } from "../../../hooks/useAddDispatch";
import { getSinglePropertyHandler } from "../../../actions/properties.action";
import FullPageLoader from "../../../components/fullPageLoader";
import { Image, Typography } from "antd";

const ViewSingleProperty: FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { uid } = useParams<{ uid: string }>();
	const [property, setProperty] = useState<IProperty | null>(null);
	const [loading, setLoading] = useState(false);
	const [imageVisible, setImageVisible] = useState(false);

	useEffect(() => {
		if (uid) {
			setLoading(true);

			dispatch(getSinglePropertyHandler(uid))
				.then((res) => setProperty(res.record))
				.catch((err) => navigate("/properties"))
				.finally(() => setLoading(false));
		}
	}, [uid]);

	return (
		<main className="px-20 py-12">
			{property && !loading ? (
				<section className="flex">
					<div>
						<Image
							preview={{ visible: false }}
							className="!w-[58rem]"
							src={property.images[0].url}
							onClick={() => setImageVisible(true)}
						/>
						<div className="hidden">
							<Image.PreviewGroup
								preview={{
									visible: imageVisible,
									onVisibleChange: (vis) => setImageVisible(vis),
								}}
							>
								{property.images.map((img, i) => (
									<Image key={i} src={img.url} />
								))}
							</Image.PreviewGroup>
						</div>
					</div>

					<div>
						<div className="flex">
							<div>
								<div className="flex items-center justify-center">
									<img
										src="/images/icons/size.png"
										alt="size"
										className="w-14 h-14"
									/>
									<Typography.Paragraph className="!text-3xl !text-gray-500 !mb-0 !ml-2">
										Size
									</Typography.Paragraph>
								</div>
								<div>
									<Typography.Paragraph className="!text-3xl">
										{property.basic_details.size}{" "}
										{property.basic_details.unit.title}
									</Typography.Paragraph>
								</div>
							</div>
						</div>
					</div>
				</section>
			) : (
				<FullPageLoader />
			)}
		</main>
	);
};

export default ViewSingleProperty;
