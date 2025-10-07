"use client";

export default function Assistant() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">My Chat App</h1>
        <p className="text-gray-600">Chat interface coming soon...</p>
        <div className="mt-8 p-4 border rounded-lg">
          <input 
            type="text" 
            placeholder="Type your message..." 
            className="w-full p-2 border rounded"
          />
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
