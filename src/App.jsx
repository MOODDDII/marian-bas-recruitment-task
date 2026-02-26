import data from "../data/data.json";
import { Header } from "./components/Header";
import { KpiCards } from "./components/KPICards";
import { RevenueChart } from "./components/RevenueChart";
import { CountryChart } from "./components/CountryChart";
import { DeviceChart } from "./components/DeviceChart";

export const App = () => {
  const { meta, orders } = data;

  return (
    <div className="layout">
      <Header meta={meta} />
      <KpiCards orders={orders} />
      <RevenueChart orders={orders} />
      <CountryChart orders={orders} />
      <DeviceChart orders={orders} />
    </div>
  );
};
