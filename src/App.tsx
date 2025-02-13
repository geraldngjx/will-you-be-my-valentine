"use client";
import { useEffect, useState } from "react";
import image1 from "./assets/photo_1_2025-02-13_20-24-12.jpg";
import image2 from "./assets/photo_2_2025-02-13_20-24-12.jpg";
import image3 from "./assets/photo_3_2025-02-13_20-24-12.jpg";
import image4 from "./assets/photo_4_2025-02-13_20-24-12.jpg";
import image5 from "./assets/photo_5_2025-02-13_20-24-12.jpg";
import image6 from "./assets/photo_6_2025-02-13_20-24-12.jpg";
import image7 from "./assets/photo_7_2025-02-13_20-24-12.jpg";
import image8 from "./assets/photo_8_2025-02-13_20-24-12.jpg";
import image9 from "./assets/photo_9_2025-02-13_20-24-12.jpg";
import image10 from "./assets/photo_10_2025-02-13_20-24-12.jpg";
import image11 from "./assets/photo_11_2025-02-13_20-24-12.jpg";
import image12 from "./assets/photo_12_2025-02-13_20-24-12.jpg";
import image13 from "./assets/photo_13_2025-02-13_20-24-12.jpg";
import image14 from "./assets/photo_14_2025-02-13_20-24-12.jpg";
import image15 from "./assets/photo_15_2025-02-13_20-24-12.jpg";
import image16 from "./assets/photo_16_2025-02-13_20-24-12.jpg";
import image17 from "./assets/photo_17_2025-02-13_20-24-12.jpg";
import image18 from "./assets/photo_18_2025-02-13_20-24-12.jpg";
import image19 from "./assets/photo_19_2025-02-13_20-24-12.jpg";
import image20 from "./assets/photo_20_2025-02-13_20-24-12.jpg";
import image21 from "./assets/photo_21_2025-02-13_20-24-12.jpg";

const imageArray = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
];

export default function Page() {
  const [rejectCount, setRejectCount] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const yesButtonSize = rejectCount * 15 + 18;
  const [currentImage, setCurrentImage] = useState(imageArray[0]);

  useEffect(() => {
    if (accepted) {
      let index = 0;
      const interval = setInterval(() => {
        index = (index + 1) % imageArray.length;
        setCurrentImage(imageArray[index]);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [accepted]);

  const handleReject = () => {
    setRejectCount(rejectCount + 1);
  };

  const getRejectText = () => {
    const messages = [
      "No",
      "Are you sure, my love?",
      "But I adore you...",
      "What if I promise endless cuddles?",
      "I'll cook your favorite meal!",
      "You're breaking my heart here...",
      "I might just have to serenade you now.",
      "This is your last chance, beautiful.",
      "I’ll wait forever if I have to.",
      "Alright, but you’ll always have my heart.",
    ];

    return messages[Math.min(rejectCount, messages.length - 1)];
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-blue-100 text-gray-900">
      {accepted ? (
        <>
          <img
            src={currentImage}
            className="h-80 rounded-lg shadow-lg"
            alt={`Photo`}
          />
          <div className="my-4 text-2xl font-bold text-center">
            Happy Valentine’s Day, my love. ❤️
          </div>
        </>
      ) : (
        <>
          <img
            className="h-80 rounded-lg shadow-lg"
            src={image11}
            alt="Beautiful"
          />
          <h1 className="my-4 text-2xl font-semibold text-center">
            Will you be my Valentine’s? 🌹
          </h1>
          <div className="flex items-center gap-6">
            <button
              className="rounded bg-red-500 px-6 py-3 font-bold text-white shadow-lg transition-transform transform hover:scale-105"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setAccepted(true)}
            >
              Yes!
            </button>
            <button
              onClick={handleReject}
              className="rounded bg-gray-600 px-6 py-3 font-bold text-white shadow-lg transition-transform transform hover:scale-105"
            >
              {rejectCount === 0 ? "No" : getRejectText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
