import { Link } from "react-router-dom";
import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  DatePicker,
  Select,
  Popconfirm,
  Table,
  Tag,
  Space,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import img404 from "@/assets/error.png";
import { useChannel } from "@/hooks/useChannel";

const Article = () => {
  /**
   * 获取 channelList 数据
   */
  const { channelList } = useChannel();

  const status = {
    1: <Tag color="warning">Pending Review</Tag>,
    2: <Tag color="success">Review Approved</Tag>,
  };

  const columns = [
    {
      title: "Cover",
      dataIndex: "cover",
      width: 120,
      render: (cover) => {
        return (
          <img src={cover.images[0] || img404} width={80} height={60} alt="" />
        );
      },
    },
    {
      title: "Title",
      dataIndex: "title",
      width: 220,
    },
    {
      title: "Status",
      dataIndex: "status",
      // data - 后端返回的状态status 根据它做条件渲染
      // data === 1 => 待审核
      // data === 2 => 审核通过
      render: (data) => status[data],
    },
    {
      title: "Publish Time",
      dataIndex: "pubdate",
    },
    {
      title: "Read Count",
      dataIndex: "read_count",
    },
    {
      title: "Comment Count",
      dataIndex: "comment_count",
    },
    {
      title: "Like Count",
      dataIndex: "like_count",
    },
    {
      title: "Actions",
      render: (data) => {
        return (
          <Space size="middle">
            <Button
              type="primary"
              shape="circle"
              icon={<EditOutlined />}
              // onClick={() => navigate(`/publish?id=${data.id}`)}
            />
            <Popconfirm
              title="Delete Article"
              description="Are you sure you want to delete the current article?"
              // onConfirm={() => onConfirm(data)}
              okText="Yes"
              cancelText="No"
            >
              <Button
                type="primary"
                danger
                shape="circle"
                icon={<DeleteOutlined />}
              />
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  return (
    <div>
      <Card
        title={
          <Breadcrumb
            items={[
              { title: <Link to={"/"}>Home</Link> },
              { title: "Article List" },
            ]}
          />
        }
        style={{ marginBottom: 20 }}
      >
        <Form initialValues={{ status: "" }}>
          <Form.Item label="Status" name="status">
            <Radio.Group>
              <Radio value={""}>All</Radio>
              <Radio value={1}>Pending Review</Radio>
              <Radio value={2}>Review Approved</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="Channel" name="channel_id">
            <Select placeholder="Select article channel" style={{ width: 200 }}>
              {channelList.map((item) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="Date" name="date">
            <DatePicker.RangePicker />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 40 }}>
              Filter
            </Button>
          </Form.Item>
        </Form>
      </Card>
      {/* 表格区域 */}
      <Card title={`Got 1 result based on the filter conditions:`}>
        <Table
          rowKey="id"
          columns={columns}
          // dataSource={list}
          pagination={{
            total: 1,
            // pageSize: reqData.per_page,
            // onChange: onPageChange,
          }}
        />
      </Card>
    </div>
  );
};

export default Article;
