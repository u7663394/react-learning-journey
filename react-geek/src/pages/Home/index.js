import BarChart from "./components/BarChart";
import "./index.scss";

const articleMetrics = [
  { label: "Total Reads", value: "128K", trend: "+18.2% this week" },
  { label: "Published", value: "436", trend: "+24 new articles" },
  { label: "Approval Rate", value: "96%", trend: "+4.1% quality lift" },
  { label: "Avg. Read Time", value: "4m", trend: "+32s per reader" },
];

const channelData = [
  { label: "Tech", value: 92 },
  { label: "React", value: 86 },
  { label: "Design", value: 74 },
  { label: "Backend", value: 68 },
  { label: "AI", value: 82 },
  { label: "Product", value: 77 },
];

const trendData = [
  { label: "Mon", value: 48 },
  { label: "Tue", value: 61 },
  { label: "Wed", value: 57 },
  { label: "Thu", value: 74 },
  { label: "Fri", value: 88 },
  { label: "Sat", value: 69 },
  { label: "Sun", value: 94 },
];

const Home = () => {
  return (
    <div className="home-page">
      <header className="home-hero">
        <div>
          <span className="home-hero__label">Content Dashboard</span>
          <h1>Article Operations Overview</h1>
          <p>
            Track article, channel and publishing quality from one focused
            workspace.
          </p>
        </div>
        <span className="home-hero__status">Demo Static Data</span>
      </header>

      <section className="metric-grid" aria-label="Article performance metrics">
        {articleMetrics.map((item) => (
          <div className="metric-card" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <em>{item.trend}</em>
          </div>
        ))}
      </section>

      <div className="chart-grid">
        <BarChart
          title="Channel Engagement"
          eyebrow="Read Completion"
          description="Completion rate by editorial category."
          data={channelData}
          unit="%"
          seriesName="Completion"
          palette={{
            start: "#1677ff",
            end: "#38bdf8",
            soft: "rgba(22, 119, 255, 0.18)",
          }}
        />
        <BarChart
          title="Weekly Read Growth"
          eyebrow="Traffic Trend"
          description="Daily article reads compared with the weekly baseline."
          type="line"
          data={trendData}
          unit="K"
          seriesName="Reads"
          palette={{
            start: "#14b8a6",
            end: "#5eead4",
            soft: "rgba(20, 184, 166, 0.16)",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
