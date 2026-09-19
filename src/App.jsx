import "./App.css";
import { ProjectCard } from "@/components/project-card";

function StatusBadge({ isOpenToWork }) {
  return (
    <span
      className={
        isOpenToWork
          ? "inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700"
          : "inline-flex items-center rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700"
      }
    >
      {isOpenToWork ? "Open to work" : "Busy learning"}
    </span>
  );
}

function InfoCard({ title, children }) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <div className="mt-4 text-sm leading-6 text-gray-700">{children}</div>
    </section>
  );
}

function App() {
  const projects = [
    {
      title: "Portfolio refresh",
      status: "Live",
      description:
        "Updated the project landing page to bring a cleaner brand story and better conversion flow.",
      href: "https://example.com/portfolio",
      buttonText: "View project",
    },
    {
      title: "Course planner",
      status: "Beta",
      description:
        "Built a lightweight dashboard to track weekly lessons, goals, and progress across the program.",
      href: "https://example.com/course-planner",
      buttonText: "View project",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-6 md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
            <StatusBadge isOpenToWork={true} />

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Y Bunhong
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-700">
              I am building a strong foundation in modern web development and
              want to turn design skills into practical product work.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                React
              </span>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                UI design
              </span>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                Products
              </span>
            </div>
          </section>

          <aside className="space-y-6">
            <InfoCard title="Course goal">
              <p>
                Learn how to structure components clearly, build responsive
                layouts, and ship polished interfaces with strong visual
                hierarchy.
              </p>
            </InfoCard>

            <InfoCard title="Next priorities">
              <ul className="space-y-2">
                <li>• Master responsive design patterns</li>
                <li>• Practice reusable component thinking</li>
                <li>• Improve accessibility and polish</li>
              </ul>
            </InfoCard>
          </aside>
        </div>

        <section className="mt-6">
          <div className="mb-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Featured work
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                status={project.status}
                description={project.description}
                href={project.href}
                buttonText={project.buttonText}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
