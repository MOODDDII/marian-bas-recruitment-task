import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export const DeviceChart = ({ orders }) => {
  const devices = {};

  orders.forEach((order) => {
    devices[order.device] = (devices[order.device] || 0) + 1;
  });

  const chartData = [];

  for (let device in devices) {
    chartData.push({
      name: device,
      value: devices[device],
    });
  }

  const COLORS = ["#2563EB", "#16A34A", "#F59E0B"];

  return (
    <section className="device-chart">
      <h3>Orders by device</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            innerRadius={50}
            outerRadius={90}
          >
            {chartData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="middle" align="right" layout="vertical" />
        </PieChart>
      </ResponsiveContainer>
    </section>
  );
};
