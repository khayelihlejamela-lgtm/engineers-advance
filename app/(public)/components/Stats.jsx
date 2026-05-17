export default function Stats() {
    return (
    <section className="pt-10 pb-10 bg-white">
      <h2 className="text-center text-3xl font-bold text-[var(--brand-primary)] mb-10">
          Did you know?
      </h2>

    <div className="max-w-4xl mx-auto px-6 space-y-1">

        {/* Row 1 */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between 
                        text-center md:text-left p-6 transition-all duration-300
                        hover:bg-blue-50 hover:shadow-sm border-b border-gray-200">
            <h3 className="text-2xl font-semibold text-[var(--brand-secondary)] md:w-1/3">76%</h3>
            <p className="text-gray-700 md:w-2/3 md:mt-0">
            of engineering employers struggle to recruit for key roles.
            </p>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between 
                        text-center md:text-left p-6  transition-all duration-300
                        hover:bg-blue-50 hover:shadow-sm border-b border-gray-200">
            <h3 className="text-2xl font-semibold text-[var(--brand-secondary)] md:w-1/3">1 Million</h3>
            <p className="text-gray-700 md:w-2/3 md:mt-0">
            additional engineers needed in the UK by 2030.
            </p>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between 
                        text-center md:text-left p-6 transition-all duration-300
                        hover:bg-blue-50 hover:shadow-sm">
            <h3 className="text-2xl font-semibold text-[var(--brand-secondary)] md:w-1/3">6.4 Million</h3>
            <p className="text-gray-700 md:w-2/3 md:mt-0">
            people already work in engineering. That's only 19.3% of the UK workforce.
            </p>
        </div>

    </div>
    </section>
    );
}