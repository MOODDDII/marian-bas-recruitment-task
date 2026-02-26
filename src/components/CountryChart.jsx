import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const CountryChart = ({ orders }) => {
  const countries = {};

  orders.forEach(order => {
    const country = order.country;
    const revenue = order.quantity * order.unitPrice;
  
    if (!countries[country]) {
      countries[country] = revenue;
    } else {
      countries[country] += revenue;
    }
  });

  const chartData = [];

  for (let country in countries) {
    chartData.push({
      country: country,
      revenue: countries[country],
    });
  }

  chartData.sort((a, b) => b.revenue - a.revenue);

  return (
    <div className="country-chart">
      <h3>Revenue by country:</h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <XAxis dataKey="country" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="revenue" fill="#16A34A" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
