import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export const RevenueChart = ({ orders }) => {
  const revenueByDate = {};

  orders.forEach((order) => {
    const date = order.timestamp.split("T")[0];
    const revenue = order.quantity * order.unitPrice;

    revenueByDate[date] = (revenueByDate[date] || 0) + revenue;
  });

  const chartData = Object.keys(revenueByDate)
    .map((date) => ({
      date,
      revenue: revenueByDate[date],
    }))
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="main-chart">
      <h3>Revenue over time</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#2563EB"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
