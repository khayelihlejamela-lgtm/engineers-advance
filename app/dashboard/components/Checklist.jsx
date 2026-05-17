// components/dashboard/Checklist.jsx
const items = [
  { id: 1, label: "Upload your CV", completed: false },
  { id: 2, label: "Add work experience", completed: false },
  { id: 3, label: "Add education", completed: true },
  { id: 4, label: "Add key skills", completed: false },
  { id: 5, label: "Verify your email", completed: true },
  { id: 6, label: "Set career preferences", completed: false },
];

export default function Checklist() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Profile completion checklist
        </h2>
        <p className="text-xs text-gray-500">
          Complete these steps to unlock tailored opportunities.
        </p>
      </div>

      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between border border-gray-100 rounded-lg px-3 py-2"
          >
            <div className="flex items-center gap-3">
              <span
                className={`h-5 w-5 rounded-full border flex items-center justify-center text-xs ${
                  item.completed
                    ? "bg-green-100 border-green-500 text-green-600"
                    : "bg-gray-50 border-gray-300 text-gray-400"
                }`}
              >
                {item.completed ? "✓" : ""}
              </span>
              <span className="text-sm text-gray-800">{item.label}</span>
            </div>
            <button className="text-xs text-blue-600 hover:underline">
              Go to section
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}