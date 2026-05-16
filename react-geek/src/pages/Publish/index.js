import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Input,
  Upload,
  Space,
  Select,
  message,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link, useSearchParams } from "react-router-dom";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import "./index.scss";
import { useEffect, useState } from "react";
import { getArticleDetailAPI, publishArticleAPI } from "@/apis/article";
import { useChannel } from "@/hooks/useChannel";

const Publish = () => {
  /**
   * 频道列表
   */
  const { channelList } = useChannel();

  /**
   * 提交表单
   */
  const onFinish = async (formData) => {
    // 0. 验证图片数量是否正确
    if (fileList.length !== imageType) {
      return message.warning("Please upload the correct number of images");
    }
    // 1. 按照接口要求，处理数据
    const { title, content, channel_id } = formData;
    const requireData = {
      title: title,
      content: content,
      cover: {
        type: imageType,
        images: fileList.map((ele) => ele.response.data.url),
      },
      channel_id: channel_id,
    };
    // 2. 调用发布接口
    await publishArticleAPI(requireData);
    // 3. 提示
    message.success("Article published successfully!");
  };

  /**
   * 上传图片
   */
  const [fileList, setFileList] = useState([]);
  const onUploadImg = (info) => {
    setFileList(info.fileList);
  };

  /**
   * 选择封面类型
   *   1. 控制上传组件的显示和隐藏
   *   2. 限制上传图片的数量
   */
  const [imageType, setImageType] = useState(0);
  const [showUpload, setShowUpload] = useState(false);
  const [maxCount, setMaxCount] = useState(0);
  const onTypeSelect = (e) => {
    setImageType(e.target.value);
    if (e.target.value === 0) {
      setShowUpload(false);
      setMaxCount(0);
    } else {
      setShowUpload(true);
      setMaxCount(e.target.value === 1 ? 1 : 3);
    }
  };

  /**
   * 编辑时回显数据
   */
  // 1. 获取路由上的 ID
  const [searchParams] = useSearchParams();
  const articleId = searchParams.get("id");
  const [form] = Form.useForm();
  // 2. 根据 ID 获取文章详情数据
  useEffect(() => {
    const fetchArticleDetail = async () => {
      const res = await getArticleDetailAPI(articleId);
      // 3. 将数据回显到表单中 -> setFieldsValue
      form.setFieldsValue(res.data);
    };
    if (articleId) fetchArticleDetail();
  }, [articleId]);

  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb
            items={[
              { title: <Link to={"/"}>Home</Link> },
              { title: articleId ? "Edit Article" : "Publish Article" },
            ]}
          />
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 0 }}
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              { required: true, message: "Please enter the article title" },
            ]}
          >
            <Input
              placeholder="Please enter the article title"
              style={{ width: 400 }}
            />
          </Form.Item>
          <Form.Item
            label="Channel"
            name="channel_id"
            rules={[
              { required: true, message: "Please select the article channel" },
            ]}
          >
            <Select
              placeholder="Please select the article channel"
              style={{ width: 400 }}
            >
              {channelList.map((ele) => (
                // value 会被收集起来 -> 提交时使用
                <Select.Option key={ele.id} value={ele.id}>
                  {ele.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Cover">
            <Form.Item name="type">
              <Radio.Group onChange={onTypeSelect}>
                <Radio value={1}>Single Image</Radio>
                <Radio value={3}>Three Images</Radio>
                <Radio value={0}>No Image</Radio>
              </Radio.Group>
            </Form.Item>
            {/* 
              listType 决定上传组件的显示样式
              showUploadList 显示已上传的文件列表, 默认为 true
              action 上传的地址
              name 上传文件的字段名, 后端决定
              onChange 文件状态改变时的回调函数
             */}
            {showUpload && (
              <Upload
                listType="picture-card"
                showUploadList
                action={"http://geek.itheima.net/v1_0/upload"}
                name="image"
                onChange={onUploadImg}
                maxCount={maxCount}
              >
                <div style={{ marginTop: 8 }}>
                  <PlusOutlined />
                </div>
              </Upload>
            )}
          </Form.Item>
          <Form.Item
            label="Content"
            name="content"
            rules={[
              { required: true, message: "Please enter the article content" },
            ]}
          >
            {/* 富文本编辑器 */}
            <ReactQuill
              theme="snow"
              className="publish-quill"
              placeholder="Please enter the article content"
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                Publish Article
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Publish;
