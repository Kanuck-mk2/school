const TailwindExample = () => {
  return (
    <div className="p-10">
      {/* Headers */}
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-4">
        Tailwind CSS Cheat Sheet
      </h1>
      <h2 className="text-4xl font-semibold text-left text-blue-500 mb-6">
        Headers
      </h2>

      {/* Button */}
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Primary Button
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700">
          Success Button
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700">
          Danger Button
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-2">Card Title 1</h3>
          <p className="text-gray-600">
            This is a simple card with Tailwind CSS.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-2">Card Title 2</h3>
          <p className="text-gray-600">
            This card has a deeper shadow for more emphasis.
          </p>
        </div>
        <div className="bg-blue-500 text-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-2">Card Title 3</h3>
          <p>This card has a colored background and text.</p>
        </div>
      </div>

      {/* Forms */}
      <h2 className="text-3xl font-semibold text-left text-blue-500 mt-10">
        Forms
      </h2>
      <form className="bg-gray-100 p-6 rounded-lg shadow-lg mt-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {/* Alerts */}
      <div className="mt-10 space-y-4">
        <div
          className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
          role="alert"
        >
          <p className="font-bold">Success!</p>
          <p>Everything went according to plan.</p>
        </div>
        <div
          className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4"
          role="alert"
        >
          <p className="font-bold">Warning!</p>
          <p>Something might need your attention.</p>
        </div>
        <div
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
          role="alert"
        >
          <p className="font-bold">Error!</p>
          <p>Something went wrong.</p>
        </div>
      </div>

      {/* Grid Layout */}
      <h2 className="text-3xl font-semibold text-left text-blue-500 mt-10">
        Grid Layout
      </h2>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-gray-200 p-4 text-center rounded">Grid Item 1</div>
        <div className="bg-gray-300 p-4 text-center rounded">Grid Item 2</div>
        <div className="bg-gray-400 p-4 text-center rounded">Grid Item 3</div>
        <div className="bg-gray-500 p-4 text-center rounded">Grid Item 4</div>
      </div>

      {/* Flexbox */}
      <h2 className="text-3xl font-semibold text-left text-blue-500 mt-10">
        Flexbox Layout
      </h2>
      <div className="flex justify-between mt-6">
        <div className="bg-red-200 p-4 text-center rounded">Flex Item 1</div>
        <div className="bg-red-300 p-4 text-center rounded">Flex Item 2</div>
        <div className="bg-red-400 p-4 text-center rounded">Flex Item 3</div>
      </div>

      {/* Typography */}
      <h2 className="text-3xl font-semibold text-left text-blue-500 mt-10">
        Typography
      </h2>
      <p className="text-lg font-light text-gray-700 mt-4">
        This is a paragraph with light font weight.
      </p>
      <p className="text-xl font-semibold text-gray-800">
        This is a paragraph with semibold font weight.
      </p>
      <p className="text-2xl font-bold text-gray-900">
        This is a paragraph with bold font weight.
      </p>

      {/* List Styles */}
      <h2 className="text-3xl font-semibold text-left text-blue-500 mt-10">
        List Styles
      </h2>
      <ul className="list-disc list-inside mt-4 space-y-2">
        <li className="text-gray-700">Item 1</li>
        <li className="text-gray-700">Item 2</li>
        <li className="text-gray-700">Item 3</li>
      </ul>

      {/* Divider */}
      <div className="border-t border-gray-300 my-10"></div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-10">
        <p>Tailwind CSS Cheat Sheet</p>
      </footer>
    </div>
  );
};

export default TailwindExample;
