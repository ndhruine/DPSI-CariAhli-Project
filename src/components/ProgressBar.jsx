// src/components/ProgressBar.jsx
export default function ProgressBar({ label, value }) {
  const progressValue = Math.max(0, Math.min(100, value)); // Clamp value between 0 and 100

  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-md font-medium text-gray-700">{label}</span>
        <span className="text-md font-semibold text-purple-700">{`${progressValue}%`}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-purple-600 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${progressValue}%` }}
        ></div>
      </div>
    </div>
  );
}