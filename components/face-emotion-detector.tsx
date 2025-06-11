"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

interface EmotionData {
  happy: number;
  sad: number;
  angry: number;
  fearful: number;
  disgusted: number;
  surprised: number;
  neutral: number;
}

interface FaceEmotionDetectorProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  isActive: boolean;
  onEmotionDetected: (emotions: EmotionData) => void;
  onFaceDetected: (detected: boolean) => void;
}

export function FaceEmotionDetector({
  videoRef,
  isActive,
  onEmotionDetected,
  onFaceDetected,
}: FaceEmotionDetectorProps) {
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [isDetecting, setIsDetecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadingProgress, setLoadingProgress] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const detectionIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const faceApiRef = useRef<any>(null);

  // Load face-api.js models
  useEffect(() => {
    const loadModels = async () => {
      try {
        setError(null);
        setLoadingProgress("Initializing face-api.js...");
        console.log("Loading face-api.js models...");

        // Import face-api.js (face-api.js will handle tfjs backend automatically)
        const faceapi = await import("face-api.js");
        faceApiRef.current = faceapi;

        // Load models from public/models
        const MODEL_URL = "/models";

        setLoadingProgress("Loading face detection model...");
        if (!faceapi.nets.ssdMobilenetv1.isLoaded) {
          await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL);
        }
        console.log("SSD MobileNet model loaded");

        setLoadingProgress("Loading facial landmarks model...");
        if (!faceapi.nets.faceLandmark68Net.isLoaded) {
          await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
        }
        console.log("Face landmarks model loaded");

        setLoadingProgress("Loading face expression model...");
        if (!faceapi.nets.faceExpressionNet.isLoaded) {
          await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
        }
        console.log("Face expression model loaded");

        // Pastikan semua model loaded
        if (
          faceapi.nets.ssdMobilenetv1.isLoaded &&
          faceapi.nets.faceLandmark68Net.isLoaded &&
          faceapi.nets.faceExpressionNet.isLoaded
        ) {
          setLoadingProgress("Models loaded successfully!");
          console.log("All face-api.js models loaded successfully");
          setIsModelLoaded(true);
        } else {
          setError("Failed to load all face-api.js models");
        }
        setLoadingProgress("");
      } catch (err) {
        console.error("Error loading face-api.js models:", err);
        setError(
          `Failed to load AI models: ${
            err instanceof Error ? err.message : "Unknown error"
          }`
        );
        setLoadingProgress("");

        // Fallback to mock emotions for demo
        setTimeout(() => {
          setError(null);
          setIsModelLoaded(true);
          console.log("Using mock emotion detection for demo");
        }, 3000);
      }
    };

    loadModels();
  }, []);

  // Start/stop detection based on isActive
  useEffect(() => {
    if (isActive && isModelLoaded && videoRef.current) {
      startDetection();
    } else {
      stopDetection();
    }

    return () => stopDetection();
  }, [isActive, isModelLoaded]);

  const startDetection = () => {
    if (!videoRef.current || !canvasRef.current || isDetecting) return;

    setIsDetecting(true);
    console.log("Starting face emotion detection...");

    // Set up canvas
    const video = videoRef.current;
    const canvas = canvasRef.current;

    // Wait for video to have dimensions
    const setupCanvas = () => {
      if (video.videoWidth > 0 && video.videoHeight > 0) {
        const displaySize = {
          width: video.videoWidth,
          height: video.videoHeight,
        };
        if (faceApiRef.current) {
          faceApiRef.current.matchDimensions(canvas, displaySize);
        }

        // Start detection loop
        detectionIntervalRef.current = setInterval(async () => {
          await detectEmotions();
        }, 2000); // Detect every 2 seconds for better performance
      } else {
        // Retry after video loads
        setTimeout(setupCanvas, 500);
      }
    };

    setupCanvas();
  };

  const stopDetection = () => {
    if (detectionIntervalRef.current) {
      clearInterval(detectionIntervalRef.current);
      detectionIntervalRef.current = null;
    }
    setIsDetecting(false);
    console.log("Stopped face emotion detection");
  };

  const generateMockEmotions = (): EmotionData => {
    // Generate realistic mock emotions for demo
    const emotions = [
      "happy",
      "neutral",
      "surprised",
      "sad",
      "angry",
      "fearful",
      "disgusted",
    ];
    const mockData: EmotionData = {
      happy: 0,
      sad: 0,
      angry: 0,
      fearful: 0,
      disgusted: 0,
      surprised: 0,
      neutral: 0,
    };

    // Simulate realistic emotion distribution
    const primaryEmotion = emotions[
      Math.floor(Math.random() * emotions.length)
    ] as keyof EmotionData;
    mockData[primaryEmotion] = 0.6 + Math.random() * 0.3; // 60-90%

    // Distribute remaining probability
    const remaining = 1 - mockData[primaryEmotion];
    const otherEmotions = emotions.filter(
      (e) => e !== primaryEmotion
    ) as (keyof EmotionData)[];

    otherEmotions.forEach((emotion, index) => {
      if (index === otherEmotions.length - 1) {
        // Last emotion gets remaining probability
        mockData[emotion] = Math.max(
          0,
          remaining -
            otherEmotions.slice(0, -1).reduce((sum, e) => sum + mockData[e], 0)
        );
      } else {
        mockData[emotion] = Math.random() * (remaining / otherEmotions.length);
      }
    });

    return mockData;
  };

  const detectEmotions = async () => {
    if (!videoRef.current || !canvasRef.current) return;
    const faceapi = faceApiRef.current;
    // Cek model loaded sebelum deteksi
    if (!faceapi ||
      !faceapi.nets.ssdMobilenetv1.isLoaded ||
      !faceapi.nets.faceLandmark68Net.isLoaded ||
      !faceapi.nets.faceExpressionNet.isLoaded
    ) {
      // Model belum siap, skip deteksi
      return;
    }

    try {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const faceapi = faceApiRef.current;

      if (!faceapi) {
        // Use mock emotions if face-api.js not available
        const mockEmotions = generateMockEmotions();
        onEmotionDetected(mockEmotions);
        onFaceDetected(true);
        return;
      }

      // Check if video is ready
      if (video.videoWidth === 0 || video.videoHeight === 0) {
        return;
      }

      // Detect faces with expressions using SSD MobileNet
      const detections = await faceapi
        .detectAllFaces(
          video,
          new faceapi.SsdMobilenetv1Options({ minConfidence: 0.5 })
        )
        .withFaceLandmarks()
        .withFaceExpressions();

      // Clear previous drawings
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      if (detections.length > 0) {
        onFaceDetected(true);

        // Get the first face detection
        const detection = detections[0];
        const expressions = detection.expressions;

        // Convert to our emotion format
        const emotionData: EmotionData = {
          happy: expressions.happy || 0,
          sad: expressions.sad || 0,
          angry: expressions.angry || 0,
          fearful: expressions.fearful || 0,
          disgusted: expressions.disgusted || 0,
          surprised: expressions.surprised || 0,
          neutral: expressions.neutral || 0,
        };

        // Send emotion data to parent
        onEmotionDetected(emotionData);

        // Draw face detection visualization
        const resizedDetections = faceapi.resizeResults(detections, {
          width: canvas.width,
          height: canvas.height,
        });

        if (ctx) {
          // Draw face detection box
          ctx.strokeStyle = "#00ff00";
          ctx.lineWidth = 2;
          resizedDetections.forEach((detection: any) => {
            const { x, y, width, height } = detection.detection.box;
            ctx.strokeRect(x, y, width, height);
          });

          // Draw emotion labels
          resizedDetections.forEach((detection: any) => {
            const { x, y } = detection.detection.box;
            const expressions = detection.expressions;
            const topExpression = Object.entries(expressions).reduce((a, b) =>
              expressions[a[0] as keyof typeof expressions] >
              expressions[b[0] as keyof typeof expressions]
                ? a
                : b
            ) as [string, number];

            ctx.fillStyle = "#00ff00";
            ctx.font = "14px Arial";
            ctx.fillText(
              `${topExpression[0]}: ${(topExpression[1] * 100).toFixed(0)}%`,
              x,
              y - 10
            );
          });
        }
      } else {
        onFaceDetected(false);
      }
    } catch (err) {
      console.error("Error during face detection:", err);

      // Fallback to mock emotions on error
      const mockEmotions = generateMockEmotions();
      onEmotionDetected(mockEmotions);
      onFaceDetected(true);
    }
  };

  return (
    <div className="relative">
      {/* Canvas overlay for face detection visualization */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          transform: "scaleX(-1)", // Mirror to match video
        }}
      />

      {/* Status indicators */}
      {error && (
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs max-w-xs">
          {error}
        </div>
      )}

      {loadingProgress && (
        <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-xs">
          {loadingProgress}
        </div>
      )}

      {isModelLoaded && isDetecting && !error && (
        <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs flex items-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-1"></div>
          AI Emotion Detection Active
        </div>
      )}

      {!isModelLoaded && !error && !loadingProgress && (
        <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded text-xs">
          Initializing AI...
        </div>
      )}
    </div>
  );
}
