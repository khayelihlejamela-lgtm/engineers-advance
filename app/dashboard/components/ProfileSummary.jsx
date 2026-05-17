// components/dashboard/ProfileSummary.jsx
export default function ProfileSummary() {
  const candidateName = "Kay"; // later: replace with real data
  const completion = 60;       // later: calculate from profile fields

  return (
    <section className="bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm text-gray-500">Candidate dashboard</p>
        <h1 className="text-2xl font-semibold text-gray-900 mt-1">
          Welcome back, {candidateName}.
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          Here’s your current progress and next steps.
        </p>
      </div>

      <div className="mt-4 md:mt-0 flex items-center gap-4">
        <div>
          <p className="text-sm font-medium text-gray-700">
            Profile completion
          </p>
          <div className="w-40 bg-gray-100 rounded-full h-2 mt-2">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: `${completion}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">{completion}% complete</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700">
          Complete your profile
        </button>
      </div>
    </section>
  );
}