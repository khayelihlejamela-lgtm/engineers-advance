export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 font-montserrat">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-200 fixed top-0 left-0 h-full py-6 px-4 z-30">
        <div className="mb-10">
          <h1 className="text-xl font-bold tracking-wide">Engineers Advance</h1>
        </div>

        <nav className="flex flex-col gap-4 text-gray-700">
          <a href="/dashboard" className="hover:text-blue-600">Overview</a>
          <a href="/dashboard/documents" className="hover:text-blue-600">Documents</a>
          <a href="/dashboard/checklist" className="hover:text-blue-600">Checklist</a>
          <a href="/dashboard/learninghub" className="hover:text-blue-600">Learning Hub</a>
          <a href="/dashboard/support" className="hover:text-blue-600">Support</a>
        </nav>
      </aside>

      {/* MAIN WRAPPER */}
      <div className="ml-64 min-h-screen flex flex-col relative z-40">

        {/* TOP BAR */}
        <header className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center sticky top-0 z-40">
          <h2 className="text-lg font-semibold">Dashboard</h2>
          <div className="flex items-center gap-3">
            <span className="text-gray-600">Khaya</span>
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
              K
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
