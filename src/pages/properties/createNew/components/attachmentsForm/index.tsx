import { Button, Form, Modal, Typography, message } from "antd";
import Upload, { RcFile, UploadFile } from "antd/lib/upload";
import { PlusOutlined } from "@ant-design/icons";
import { FC, useState } from "react";
import { useAppDispatch } from "../../../../../hooks/useAddDispatch";
import { useAppSelector } from "../../../../../hooks/useAppSelector";
import { TRootState } from "../../../../../store";
import { createPropertyHandler } from "../../../../../actions/properties.action";
import { useNavigate } from "react-router";

interface AttachmentsFormProps {
	setCurrentTab: (tab: number) => void;
}

const AttachmentsForm: FC<AttachmentsFormProps> = ({ setCurrentTab }) => {
	const [previewOpen, setPreviewOpen] = useState(false);
	const [previewImage, setPreviewImage] = useState("");
	const [previewTitle, setPreviewTitle] = useState("");
	const [imageFileList, setImageFileList] = useState<UploadFile[]>([]);
	const [videoFileList, setVideoFileList] = useState<UploadFile[]>([]);
	const [documentFileList, setDocumentFileList] = useState<UploadFile[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const handleCancel = () => setPreviewOpen(false);

	const newProperty = useAppSelector((state: TRootState) => state.properties.newProperty);

	const getBase64 = (file: RcFile): Promise<string> =>
		new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result as string);
			reader.onerror = (error) => reject(error);
		});

	const handlePreview = async (file: UploadFile) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj as RcFile);
		}

		setPreviewImage(file.url || (file.preview as string));
		setPreviewOpen(true);
		setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1));
	};

	const handleChangeHandler = (
		setState: (newFileList: UploadFile[]) => void,
		newFileList: UploadFile[],
	) => {
		setState(newFileList);
	};

	const onRemoveHandler = (
		state: UploadFile[],
		setState: (newFileList: UploadFile[]) => void,
		file: UploadFile,
	) => {
		const index = state.indexOf(file);
		const newFileList = state.slice();
		newFileList.splice(index, 1);
		setState(newFileList);
	};

	const beforeUploadHandler = (
		state: UploadFile[],
		setState: (newFileList: UploadFile[]) => void,
		file: UploadFile,
	) => {
		setState([...state, file]);

		return false;
	};

	const onSubmitHandler = async () => {
		try {
			setIsLoading(true);

			const formData = new FormData();
			imageFileList.forEach((file) => {
				formData.append("images", file.originFileObj as RcFile);
			});
			videoFileList.forEach((file) => {
				formData.append("videos", file.originFileObj as RcFile);
			});
			documentFileList.forEach((file) => {
				formData.append("documents", file.originFileObj as RcFile);
			});

			// append new property to form data
			for (const field in newProperty) {
				formData.append(field, newProperty[field]);
			}

			await dispatch(createPropertyHandler(formData));
			message.success("Property created successfully");
			navigate("/properties");
		} finally {
			setIsLoading(false);
		}
	};

	const onPreviousHandler = () => {
		setCurrentTab(4);
	};

	const uploadButton = (
		<div>
			<PlusOutlined />
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	);
	return (
		<Form id="5" className="hidden" onFinish={onSubmitHandler}>
			<Typography.Title level={2}>Images</Typography.Title>

			<Upload
				listType="picture-card"
				fileList={imageFileList}
				onPreview={handlePreview}
				onChange={({ fileList }) => handleChangeHandler(setImageFileList, fileList)}
				multiple
				accept="image/*"
				showUploadList
				onRemove={(file: UploadFile) =>
					onRemoveHandler(imageFileList, setImageFileList, file)
				}
				beforeUpload={(file: UploadFile) =>
					beforeUploadHandler(imageFileList, setImageFileList, file)
				}
			>
				{imageFileList.length >= 15 ? null : uploadButton}
			</Upload>

			<Typography.Title level={2}>Videos</Typography.Title>

			<Upload
				listType="picture-card"
				fileList={videoFileList}
				onChange={({ fileList }) => handleChangeHandler(setVideoFileList, fileList)}
				multiple
				accept="video/*"
				showUploadList
				onRemove={(file: UploadFile) =>
					onRemoveHandler(imageFileList, setVideoFileList, file)
				}
				beforeUpload={(file: UploadFile) =>
					beforeUploadHandler(videoFileList, setVideoFileList, file)
				}
			>
				{videoFileList.length >= 3 ? null : uploadButton}
			</Upload>

			<Typography.Title level={2}>Documents</Typography.Title>

			<Upload
				listType="picture-card"
				fileList={documentFileList}
				onPreview={handlePreview}
				onChange={({ fileList }) => handleChangeHandler(setDocumentFileList, fileList)}
				multiple
				accept="application/pdf"
				showUploadList
				onRemove={(file: UploadFile) =>
					onRemoveHandler(documentFileList, setDocumentFileList, file)
				}
				beforeUpload={(file: UploadFile) =>
					beforeUploadHandler(documentFileList, setDocumentFileList, file)
				}
			>
				{documentFileList.length >= 5 ? null : uploadButton}
			</Upload>

			<Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
				<img alt="attachment" style={{ width: "100%" }} src={previewImage} />
			</Modal>

			<div className="flex justify-between">
				<Button type="primary" htmlType="button" onClick={onPreviousHandler}>
					&larr; Previous
				</Button>
				<Button type="primary" htmlType="submit" loading={isLoading}>
					Submit &rarr;
				</Button>
			</div>
		</Form>
	);
};

export default AttachmentsForm;
