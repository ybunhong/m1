import "./App.css";

function StatusBadge({ isOpenToWork }) {
  return (
    <span
      className={
        isOpenToWork ? "status-badge status-open" : "status-badge status-busy"
      }
    >
      {isOpenToWork ? "Open to work" : "Busy learning"}
    </span>
  );
}

function App() {
  const name = "Y Bunhong";
  const goal =
    "I want to build practical web apps and learn React so I can launch my career in software development.";

  const gitHubRepo = "https://github.com/ybunhong/m1";
  return (
    <main className="profile-page">
      <section className="profile-card">
        <h1>{name}</h1>
        <p className="goal-text">Goal: {goal}</p>
        <p className="github">Public: {gitHubRepo}</p>
        <StatusBadge isOpenToWork={true} />
      </section>
    </main>
  );
}

export default App;
