export default function Navbar() {
  return (
    <header>
      <div className="nav-container">
        <div className="nav-left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/EXL_Service_logo.png/1200px-EXL_Service_logo.png?20220309211637"
            alt="EXL Logo"
            className="exl-logo"
          />
          <span className="brand-text">ChronoChain.AI</span>
        </div>

        <nav className="nav-links">
          <a href="/">Overview</a>
          <a href="/ingestion">Data</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/forecasting">Forecasting</a>
          <a href="/agentic-ai">Agentic AI</a>
          <a href="/decisions">Decisions</a>
          <a href="/alerts">Alerts</a>
          <a href="/explainability">Explainability</a>
          <a href="/api-contracts">APIs</a>
          <a href="/adoption">Adoption</a>
        </nav>
      </div>
    </header>
  );
}
