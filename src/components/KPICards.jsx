export const KpiCards = ({ orders }) => {
  const totalRevenue = orders.reduce(
    (sum, o) => sum + o.quantity * o.unitPrice,
    0
  );

  const totalOrders = orders.length;

  const avgDelivery =
    orders.reduce((sum, o) => sum + o.deliveryDays, 0) / orders.length;

  return (
    <section className="kpis">
      <div className="card">
        <h3>Revenue:</h3>
        <p className="kpi-value">€ {totalRevenue.toFixed(2)}</p>
      </div>

      <div className="card">
        <h3>Orders:</h3>
        <p className="kpi-value">{totalOrders}</p>
      </div>

      <div className="card">
        <h3>Avg Delivery:</h3>
        <p className="kpi-value">{avgDelivery.toFixed(1)} days</p>
      </div>
    </section>
  );
};
