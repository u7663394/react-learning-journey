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
import { getChannelsAPI } from "@/apis/article";

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
              <Radio.Group>
                <Radio value={1}>Single Image</Radio>
                <Radio value={3}>Three Images</Radio>
                <Radio value={0}>No Image</Radio>
              </Radio.Group>
            </Form.Item>
            {/* 
              listType: 决定选择文件框的外观样式
              showUploadList: 控制显示上传列表
            */}
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
