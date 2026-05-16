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
import { Link } from "react-router-dom";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import "./index.scss";
import { useEffect, useState } from "react";
import { getChannelsAPI, publishArticleAPI } from "@/apis/article";

const Publish = () => {
  /**
   * 频道列表
   */
  const [channelList, setChannelList] = useState([]);
  useEffect(() => {
    const fetchChannels = async () => {
      const res = await getChannelsAPI();
      setChannelList(res.data.channels);
    };
    fetchChannels();
  }, []);

  /**
   * 提交表单
   */
  const onFinish = async (formData) => {
    // 1. 按照接口要求，处理数据
    const { title, content, channel_id } = formData;
    const requireData = {
      title: title,
      content: content,
      cover: { type: 0, images: [] },
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
   */
  const [showUpload, setShowUpload] = useState(false);
  const onTypeSelect = (e) => {
    if (e.target.value === 0) {
      setShowUpload(false);
    } else {
      setShowUpload(true);
    }
  };

  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb
            items={[
              { title: <Link to={"/"}>Home</Link> },
              { title: "Publish Article" },
            ]}
          />
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 0 }}
          onFinish={onFinish}
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
