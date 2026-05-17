// components/dashboard/SupportSection.jsx
const supportLinks = [
  { id: 1, label: "Contact support", description: "Get help with your account or applications." },
  { id: 2, label: "Book a career consultation", description: "Schedule a 1:1 session to review your CV and goals." },
  { id: 3, label: "FAQs", description: "Find quick answers to common questions." },
  { id: 4, label: "Community guidelines", description: "Understand how we keep Engineers Advance safe and fair." },
];

export default function SupportSection() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Support & guidance
      </h2>
      <ul className="space-y-3">
        {supportLinks.map((item) => (
          <li
            key={item.id}
            className="border border-gray-100 rounded-lg px-3 py-2 hover:border-blue-200 transition"
          >
            <button className="text-left w-full">
              <p className="text-sm font-medium text-blue-700">
                {item.label}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {item.description}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}