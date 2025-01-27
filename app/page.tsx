"use client";

import { useState } from "react";

export default function Home() {
  const [recipientName, setRecipientName] = useState<string>("");
  const [emailPurpose, setEmailPurpose] = useState<string>("Meeting Request");
  const [keyPoints, setKeyPoints] = useState<string>("");
  const [generatedEmail, setGeneratedEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/generate-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recipientName, emailPurpose, keyPoints }),
      });

      const data = await response.json();
      setGeneratedEmail(data.email);
    } catch (error) {
      console.error("Error generating email:", error);
      alert("Failed to generate email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Professional Email Generator
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="recipientName"
                className="block text-sm font-medium text-gray-700"
              >
                Recipient Name
              </label>
              <input
                type="text"
                id="recipientName"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 placeholder-gray-500"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                required
                placeholder="Enter recipient's name"
              />
            </div>
            <div>
              <label
                htmlFor="emailPurpose"
                className="block text-sm font-medium text-gray-700"
              >
                Email Purpose
              </label>
              <select
                id="emailPurpose"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
                value={emailPurpose}
                onChange={(e) => setEmailPurpose(e.target.value)}
              >
                <option value="Meeting Request">Meeting Request</option>
                <option value="Follow Up">Follow Up</option>
                <option value="Thank You">Thank You</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="keyPoints"
                className="block text-sm font-medium text-gray-700"
              >
                Key Points
              </label>
              <textarea
                id="keyPoints"
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 placeholder-gray-500"
                value={keyPoints}
                onChange={(e) => setKeyPoints(e.target.value)}
                required
                placeholder="Enter key points for your email"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Generating...
                  </div>
                ) : (
                  "Generate Email"
                )}
              </button>
            </div>
          </form>
        </div>

        {generatedEmail && (
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Generated Email:
            </h2>
            <div className="bg-white border border-gray-300 rounded-md p-4 overflow-x-auto text-sm text-gray-800 whitespace-pre-wrap">
              {generatedEmail}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}