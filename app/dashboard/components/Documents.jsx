// components/dashboard/Documents.jsx
const documents = [
  { id: 1, name: "Primary CV", type: "CV", updatedAt: "12 Mar 2026" },
  { id: 2, name: "Cover Letter – Manufacturing", type: "Cover letter", updatedAt: "05 Mar 2026" },
];

export default function Documents() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Document centre
        </h2>
        <button className="text-xs px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700">
          Upload document
        </button>
      </div>

      <ul className="space-y-3">
        {documents.map((doc) => (
          <li
            key={doc.id}
            className="flex items-center justify-between border border-gray-100 rounded-lg px-3 py-2"
          >
            <div>
              <p className="text-sm font-medium text-gray-900">
                {doc.name}
              </p>
              <p className="text-xs text-gray-500">
                {doc.type} • Updated {doc.updatedAt}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-xs text-blue-600 hover:underline">
                Download
              </button>
              <button className="text-xs text-gray-500 hover:underline">
                Replace
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}