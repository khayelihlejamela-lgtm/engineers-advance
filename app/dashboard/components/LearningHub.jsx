// components/dashboard/LearningHub.jsx
const courses = [
  {
    id: 1,
    title: "UK Manufacturing Workplace Readiness",
    category: "UK workplace readiness",
    duration: "2 hours",
    level: "Introductory",
  },
  {
    id: 2,
    title: "cGMP Essentials for Manufacturing Technicians",
    category: "Safety & compliance",
    duration: "3 hours",
    level: "Intermediate",
  },
];

export default function LearningHub() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Learning hub
        </h2>
        <button className="text-xs text-blue-600 hover:underline">
          Browse all modules
        </button>
      </div>

      <div className="space-y-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border border-gray-100 rounded-lg p-4 flex items-center justify-between"
          >
            <div>
              <p className="text-sm font-medium text-gray-900">
                {course.title}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {course.category} • {course.duration} • {course.level}
              </p>
            </div>
            <button className="text-xs px-3 py-1.5 rounded-md border border-blue-600 text-blue-600 font-medium hover:bg-blue-50">
              Start learning
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}