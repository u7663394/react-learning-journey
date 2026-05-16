import { Link, useNavigate } from "react-router-dom";
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
  message,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import img404 from "@/assets/error.png";
import { useChannel } from "@/hooks/useChannel";
import { useEffect, useState } from "react";
import { deleteArticleAPI, getArticleListAPI } from "@/apis/article";

const Article = () => {
  /**
   * 筛选功能
   */
  // 1. 准备完整的请求参数
  const [reqData, setReqData] = useState({
    status: "",
    channel_id: "",
    begin_pubdate: "",
    end_pubdate: "",
    page: 1,
    per_page: 10,
  });
  // 2. 获取当前表单数据 -> onFinish
  const onFinish = (formValues) => {
    // 3. 表单数据放入请求参数中
    setReqData({
      ...reqData,
      channel_id: formValues.channel_id,
      status: formValues.status,
      begin_pubdate: formValues.date
        ? formValues.date[0].format("YYYY-MM-DD")
        : "",
      end_pubdate: formValues.date
        ? formValues.date[1].format("YYYY-MM-DD")
        : "",
    });
    // 4. 重新调用接口函数 -> useEffect, 依赖 reqData
  };

  /**
   * 获取 channelList 数据
   */
  const { channelList } = useChannel();

  /**
   * 获取文章列表数据
   */
  const [count, setCount] = useState(0);
  const [articleList, setArticleList] = useState([]);
  useEffect(() => {
    const fetchArticleList = async () => {
      const res = await getArticleListAPI(reqData);
      setArticleList(res.data.results);
      setCount(res.data.total_count);
    };
    fetchArticleList();
  }, [reqData]);

  /**
   * 适配文章状态: 枚举渲染
   */
  const status = {
    1: <Tag color="warning">Pending Review</Tag>,
    2: <Tag color="success">Review Approved</Tag>,
  };

  /**
   * 表格列数据
   */
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
              onClick={() => navigate(`/publish?id=${data.id}`)}
            />
            <Popconfirm
              title="Delete Article"
              description="Are you sure you want to delete the current article?"
              onConfirm={() => onConfirm(data)}
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

  /**
   * 删除文章
   *   1. 调用删除接口
   *   2. 提示删除成功
   *   3. 重新获取文章列表数据 -> useEffect, 依赖 reqData
   */
  const onConfirm = async (data) => {
    const res = await deleteArticleAPI(data.id);
    message.success(res.message);
    setReqData({ ...reqData });
  };

  /**
   * 分页功能
   */
  const onPageChange = (page, pageSize) => {
    setReqData({ ...reqData, page, per_page: pageSize });
  };

  /**
   * 编辑跳转
   */
  const navigate = useNavigate();

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
        <Form onFinish={onFinish} initialValues={{ status: "" }}>
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
      <Card title={`Got ${count} results based on the filter conditions:`}>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={articleList}
          pagination={{
            total: count,
            pageSize: reqData.per_page,
            onChange: onPageChange,
            pageSizeOptions: ["5", "10", "15", "20"],
          }}
        />
      </Card>
    </div>
  );
};

export default Article;
