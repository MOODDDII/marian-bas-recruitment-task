export const Header = ({meta}) => {
  return (
    <header className="header">
      <h1>Dashboard sales</h1>
      <div className="header-data">
        <p>Source: <span>{meta.source}</span></p>
        <p>Generated: <span>{meta.generatedAt}</span></p>
        <p>Currency: <span>{meta.currency}</span></p>
      </div>
    </header>
  );
}