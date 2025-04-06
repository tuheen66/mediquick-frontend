"use client";

import { useState } from "react";

const HealthToolsSection = () => {
  // BMI Calculator State
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState<string | null>(null);

  // Water Intake State
  const [userWeight, setUserWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("moderate");
  const [waterResult, setWaterResult] = useState<{
    ml: number;
    glasses: number;
  } | null>(null);

  // Medicine Reminder State
  const [medName, setMedName] = useState("");
  const [dosage, setDosage] = useState("");
  const [frequency, setFrequency] = useState("daily");
  interface Reminder {
    id: number;
    name: string;
    dosage: string;
    frequency: string;
    createdAt: string;
  }

  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [nextReminder, setNextReminder] = useState<string | null>(null);

  // Calculate BMI
  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = parseFloat(height) / 100;
      const bmi = (
        parseFloat(weight) /
        (heightInMeters * heightInMeters)
      ).toFixed(1);
      setBmiResult(bmi);
    }
  };

  // Calculate Water Intake
  const calculateWater = () => {
    if (userWeight) {
      let multiplier = 30; // ml per kg (baseline)
      if (activityLevel === "high") multiplier = 35;
      if (activityLevel === "low") multiplier = 25;

      const waterMl = parseFloat(userWeight) * multiplier;
      const glasses = Math.round(waterMl / 240);
      setWaterResult({ ml: waterMl, glasses });
    }
  };

  // Add Medicine Reminder
  const addReminder = () => {
    if (medName && dosage) {
      const newReminder = {
        id: Date.now(),
        name: medName,
        dosage,
        frequency,
        createdAt: new Date().toISOString(),
      };

      setReminders([...reminders, newReminder]);
      calculateNextReminder([...reminders, newReminder]);
      setMedName("");
      setDosage("");
    }
  };

  // Calculate next reminder time
  interface Reminder {
    id: number;
    name: string;
    dosage: string;
    frequency: string;
    createdAt: string;
  }

  const calculateNextReminder = (currentReminders: Reminder[]): void => {
    if (currentReminders.length > 0) {
      const now = new Date();
      const nextTime = new Date(now);

      // Simple logic - adjust based on frequency
      switch (currentReminders[0].frequency) {
        case "daily":
          nextTime.setHours(nextTime.getHours() + 24);
          break;
        case "twice":
          nextTime.setHours(nextTime.getHours() + 12);
          break;
        case "weekly":
          nextTime.setDate(nextTime.getDate() + 7);
          break;
        default:
          nextTime.setHours(nextTime.getHours() + 24);
      }

      setNextReminder(nextTime.toLocaleString());
    }
  };

  // Remove reminder
  const removeReminder = (id: number) => {
    const updatedReminders = reminders.filter((r) => r.id !== id);
    setReminders(updatedReminders);
    calculateNextReminder(updatedReminders);
  };

  // Reset calculations
  interface ResetCalculationParams {
    type: "bmi" | "water";
  }

  const resetCalculation = (type: ResetCalculationParams["type"]): void => {
    if (type === "bmi") {
      setBmiResult(null);
      setHeight("");
      setWeight("");
    } else if (type === "water") {
      setWaterResult(null);
      setUserWeight("");
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="w-[90%] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Health Calculators & Tools
          </h2>
          <p className="text-gray-600">
            Quick health insights for a better you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* BMI Calculator */}
          <div className="flex flex-col h-full">
            {" "}
            {/* Outer container with full height */}
            <div className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow flex-grow">
              {" "}
              {/* Added flex-grow here */}
              <div className="p-6 h-full flex flex-col">
                {" "}
                {/* Added flex-col and h-full */}
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    BMI Calculator
                  </h3>
                </div>
                {!bmiResult ? (
                  <div className="flex-grow flex flex-col">
                    {" "}
                    {/* Added flex container for form */}
                    <p className="text-gray-600 mb-4">
                      Check your Body Mass Index
                    </p>
                    <div className="space-y-4 flex-grow flex flex-col justify-between">
                      {" "}
                      {/* Adjusted spacing */}
                      <div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Height (cm)
                          </label>
                          <input
                            type="number"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="170"
                          />
                        </div>
                        <div className="mt-4">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Weight (kg)
                          </label>
                          <input
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="65"
                          />
                        </div>
                      </div>
                      <button
                        onClick={calculateBMI}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 transition-colors"
                      >
                        Calculate BMI
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex-grow flex flex-col justify-center text-center py-4">
                    {" "}
                    {/* Centered result */}
                    <div className="text-4xl font-bold text-gray-800 mb-2">
                      {bmiResult}
                    </div>
                    <div
                      className={`text-lg font-medium mb-4 ${
                        parseFloat(bmiResult) < 18.5
                          ? "text-yellow-500"
                          : parseFloat(bmiResult) >= 18.5 &&
                            parseFloat(bmiResult) < 25
                          ? "text-green-500"
                          : parseFloat(bmiResult) >= 25 &&
                            parseFloat(bmiResult) < 30
                          ? "text-orange-500"
                          : "text-red-500"
                      }`}
                    >
                      {parseFloat(bmiResult) < 18.5
                        ? "Underweight"
                        : parseFloat(bmiResult) >= 18.5 &&
                          parseFloat(bmiResult) < 25
                        ? "Normal weight"
                        : parseFloat(bmiResult) >= 25 &&
                          parseFloat(bmiResult) < 30
                        ? "Overweight"
                        : "Obese"}
                    </div>
                    <button
                      onClick={() => resetCalculation("bmi")}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Calculate Again
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Water Intake Calculator */}
          <div className="flex flex-col h-full"> {/* Outer container with full height */}
  <div className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow flex-grow"> {/* Added flex-grow */}
    <div className="p-6 h-full flex flex-col"> {/* Added flex-col and h-full */}
      <div className="flex items-center mb-4">
        <div className="bg-teal-100 p-3 rounded-full mr-4">
          <svg
            className="w-6 h-6 text-teal-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800">
          Water Intake Calculator
        </h3>
      </div>

      {!waterResult ? (
        <div className="flex-grow flex flex-col"> {/* Added flex container for form */}
          <p className="text-gray-600 mb-4">
            How much water should you drink?
          </p>
          <div className="space-y-4 flex-grow flex flex-col justify-between"> {/* Adjusted spacing */}
            <div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Weight (kg)
                </label>
                <input
                  type="number"
                  value={userWeight}
                  onChange={(e) => setUserWeight(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="65"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Activity Level
                </label>
                <select
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="low">Low (mostly sitting)</option>
                  <option value="moderate">
                    Moderate (some exercise)
                  </option>
                  <option value="high">High (intense exercise)</option>
                </select>
              </div>
            </div>
            <button
              onClick={calculateWater}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 transition-colors"
            >
              Calculate
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-grow flex flex-col justify-center text-center py-4"> {/* Centered result */}
          <div className="text-4xl font-bold text-gray-800 mb-2">
            {waterResult.glasses}
          </div>
          <div className="text-lg font-medium text-teal-600 mb-2">
            glasses per day
          </div>
          <div className="text-gray-600 mb-4">
            (~{waterResult.ml.toFixed(0)} ml)
          </div>
          <button
            onClick={() => resetCalculation("water")}
            className="text-teal-600 hover:text-teal-800 text-sm font-medium"
          >
            Calculate Again
          </button>
        </div>
      )}
    </div>
  </div>
</div>

          {/* Medicine Reminder - Now Functional */}
          <div className="bg-white  shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Medicine Reminder
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Medicine Name
                  </label>
                  <input
                    type="text"
                    value={medName}
                    onChange={(e) => setMedName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300  focus:ring-purple-500 focus:border-purple-500"
                    placeholder="e.g., Paracetamol"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dosage
                  </label>
                  <input
                    type="text"
                    value={dosage}
                    onChange={(e) => setDosage(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="e.g., 500mg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Frequency
                  </label>
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="daily">Once daily</option>
                    <option value="twice">Twice daily</option>
                    <option value="weekly">Once weekly</option>
                  </select>
                </div>

                <button
                  onClick={addReminder}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4  transition-colors"
                >
                  Add Reminder
                </button>
              </div>

              {reminders.length > 0 && (
                <div className="mt-6 border-t pt-4">
                  <h4 className="font-medium text-gray-800 mb-2">
                    Your Reminders
                  </h4>
                  <ul className="space-y-2">
                    {reminders.map((reminder) => (
                      <li
                        key={reminder.id}
                        className="flex justify-between items-center bg-gray-50 p-2 "
                      >
                        <div>
                          <span className="font-medium">{reminder.name}</span> -{" "}
                          {reminder.dosage} ({reminder.frequency})
                        </div>
                        <button
                          onClick={() => removeReminder(reminder.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </li>
                    ))}
                  </ul>

                  {nextReminder && (
                    <div className="mt-3 text-sm text-gray-600">
                      Next reminder at: {nextReminder}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthToolsSection;
