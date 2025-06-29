import React from "react";

export default function SkillPilotLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center py-10">
          <h1 className="text-4xl font-bold mb-2">SkillPilot</h1>
          <p className="text-lg text-gray-600">
            Your AI Career Co-Pilot for Working Professionals in the U.S.
          </p>
          <a
            href="#waitlist"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
          >
            Join the Waitlist
          </a>
        </header>

        <section className="my-16">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Upload your resume</li>
            <li>Get AI-powered job matches (H-1B/OPT friendly)</li>
            <li>See your skill gaps and recommended courses</li>
          </ul>
        </section>

        <section className="my-16">
          <h2 className="text-2xl font-semibold mb-4">Why SkillPilot?</h2>
          <p>
            Built with the unique needs of visa-holding professionals in mind,
            SkillPilot gives you tailored job suggestions and learning paths
            based on your current resume.
          </p>
        </section>

        <section className="my-16">
          <h2 className="text-2xl font-semibold mb-4">Preview (Blurred)</h2>
          <div className="bg-gray-100 p-6 rounded-lg border border-dashed text-center">
            🔒 Premium Feature — Blurred Job Match Preview
          </div>
        </section>

        <section id="waitlist" className="my-16">
          <h2 className="text-2xl font-semibold mb-4">Join the Waitlist</h2>
          <iframe
            src="https://tally.so/r/mOPglA"
            width="100%"
            height="300"
            frameBorder="0"
            title="SkillPilot Waitlist"
          ></iframe>
        </section>

        <footer className="text-center text-sm text-gray-500 mt-20">
          SkillPilot™ — Built for working professionals, by working professionals.
        </footer>
      </div>
    </div>
  );
}