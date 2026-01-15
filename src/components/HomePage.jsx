import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Upload,
  FileVideo,
  Zap,
  Target,
  Eye,
  Shield,
  BarChart3,
  Activity,
  ArrowRight,
  CheckCircle,
  Cpu,
  Brain,
  Sparkles,
} from "lucide-react";

import robotImg from "../assets/robot.png";
import Header from "./Header";

export function HomePage() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const robotRef = useRef(null);

  // useEffect(() => {
  //   // Check if token exists
  //   const token = localStorage.getItem("access_token");
  //   console.log("Checking login status, token:", token);
  //   // if (token) {
  //   //   // setIsLoggedIn(true);

  //   //   // Optional: decode token or call API to get user info
  //   //   const email = localStorage.getItem("email"); // if you stored email at login
  //   //   if (email) setUserEmail(email);
  //   // } else {
  //   //   setIsLoggedIn(false);
  //   // }
  // }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (robotRef.current) {
        const rect = robotRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 50;
        const y = (e.clientY - rect.top - rect.height / 2) / 50;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  return (
    <div className="bg-[#0a0e1a] min-h-screen text-white">
      {/* Hero Section with 3D Robot */}
      <section className="relative py-20 overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-transparent"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400">AI-Powered Detection</span>
              </div>

              <h1 className="text-5xl md:text-6xl text-white mb-6">
                Detect{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Deepfakes
                </span>{" "}
                Instantly
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Advanced AI technology that analyzes images and videos to
                identify manipulated content in real-time. Protect yourself from
                misinformation and digital fraud.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  to="/signup"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-500/50"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="flex items-center gap-8 text-sm flex-wrap">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-400">99.8% Accuracy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-400">Real-time Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-400">Secure & Private</span>
                </div>
              </div>
            </div>

            {/* Right - 3D Interactive Robot */}
            <div className="relative" ref={robotRef}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20"></div>

              <div
                className="relative transition-transform duration-300 ease-out"
                style={{
                  transform: `perspective(1000px) rotateY(${
                    mousePosition.x
                  }deg) rotateX(${-mousePosition.y}deg)`,
                }}
              >
                {/* Robot Container */}
                {/* Robot Image Container */}
                <div className="relative flex justify-center items-center">
                  {/* Glow behind robot */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-500 rounded-full blur-3xl opacity-30"></div>

                  {/* Robot PNG */}
                  <img
                    src={robotImg}
                    alt="AI Robot"
                    className="relative z-10 w-[250px] md:w-[280px] lg:w-[320px] select-none pointer-events-none drop-shadow-2xl"
                    style={{
                      transform: `perspective(1000px)
        rotateY(${mousePosition.x}deg)
        rotateX(${-mousePosition.y}deg)
        translateZ(70px)`,
                      transition: "transform 0.15s ease-out",
                    }}
                  />
                </div>

                {/* Floating Icons */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-lg flex items-center justify-center animate-bounce">
                  <Eye className="w-6 h-6 text-blue-400" />
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-lg flex items-center justify-center animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Analysis Dashboard */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Try Our Detection System</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Upload an image or video to see our AI-powered deepfake detection
              in action
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - Upload */}
            <div className="space-y-6">
              {/* File Upload */}
              <div className="bg-[#0f1629] border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Upload className="w-5 h-5 text-yellow-500" />
                  <h3 className="text-white">Upload File</h3>
                  <span className="px-2 py-0.5 bg-green-600 text-white rounded text-xs">
                    Live
                  </span>
                </div>

                <div className="border-2 border-dashed border-gray-700 rounded-lg p-12 text-center mb-6 hover:border-blue-500 transition-colors cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <FileVideo className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-white mb-2">Upload Your File</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Support for images (JPEG, PNG) and videos (MP4, MOV) up to
                    100MB
                  </p>
                  <label className="inline-block">
                    <input
                      type="file"
                      accept="image/*,video/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <span className="px-6 py-2 bg-purple-600 text-white rounded-lg cursor-pointer hover:bg-purple-700 inline-block">
                      Select Files
                    </span>
                  </label>
                </div>

                {/* Uploaded Files */}
                {uploadedFile && (
                  <div>
                    <h4 className="text-white mb-3">Uploaded Files</h4>
                    <div className="bg-[#1a1f35] border border-gray-700 rounded-lg p-4 flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <FileVideo className="w-5 h-5 text-blue-400" />
                        <div>
                          <p className="text-white text-sm">
                            {uploadedFile.name}
                          </p>
                          <p className="text-gray-500 text-xs">
                            {(uploadedFile.size / 1024).toFixed(2)} KB
                          </p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-yellow-600 text-white rounded text-xs">
                        ready
                      </span>
                    </div>

                    <button
                      onClick={handleAnalyze}
                      disabled={isAnalyzing}
                      className="w-full py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors disabled:bg-gray-600"
                    >
                      {isAnalyzing ? "Analyzing..." : "Start Analysis"}
                    </button>
                  </div>
                )}
              </div>

              {/* Analysis Types */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#0f1629] border border-gray-700 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
                  <Activity className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <p className="text-white text-sm">Fractal Analysis</p>
                </div>
                <div className="bg-[#0f1629] border border-gray-700 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
                  <Target className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                  <p className="text-white text-sm">Neural Network</p>
                </div>
                <div className="bg-[#0f1629] border border-gray-700 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
                  <BarChart3 className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <p className="text-white text-sm">Real-time Results</p>
                </div>
              </div>
            </div>

            {/* Right Column - Results */}
            <div className="space-y-6">
              {/* Deepfake Detection Results */}
              <div className="bg-[#0f1629] border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Target className="w-5 h-5 text-red-500" />
                  <h3 className="text-white">Deepfake Detection Results</h3>
                  <span className="px-2 py-0.5 bg-green-600 text-white rounded text-xs">
                    Natural
                  </span>
                </div>

                {/* Score Display */}
                <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-700/50 rounded-xl p-8 text-center mb-6">
                  <div className="text-6xl text-green-400 mb-2">2.9/10</div>
                  <h4 className="text-white mb-2">
                    Manipulation Confidence Score
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Based on AI analysis and pattern recognition
                  </p>
                </div>

                {/* Detection Metrics */}
                <div className="space-y-4 mb-6">
                  <h4 className="text-white">Detection Metrics</h4>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400 text-sm">
                        Manipulation Probability
                      </span>
                      <span className="px-2 py-0.5 bg-green-600 text-white rounded text-xs">
                        29.4%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: "29.4%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400 text-sm">
                        Texture Consistency
                      </span>
                      <span className="px-2 py-0.5 bg-green-600 text-white rounded text-xs">
                        90.2%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: "90.2%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400 text-sm">
                        Edge Artifacts
                      </span>
                      <span className="px-2 py-0.5 bg-green-600 text-white rounded text-xs">
                        11.7%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: "11.7%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400 text-sm">
                        Compression Anomalies
                      </span>
                      <span className="px-2 py-0.5 bg-green-600 text-white rounded text-xs">
                        22.5%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: "22.5%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-0 gap-4 mb-4">
                  <button>Export Report</button>
                </div>

                {/* Classification Cards */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-green-900/30 border border-green-700 rounded-lg p-3 text-center">
                    <div className="text-green-400 text-sm mb-1">
                      0-3: Natural
                    </div>
                    <div className="text-green-300 text-xs">
                      High confidence real
                    </div>
                  </div>
                  <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-3 text-center">
                    <div className="text-yellow-400 text-sm mb-1">
                      4-6: Suspicious
                    </div>
                    <div className="text-yellow-300 text-xs">
                      Further analysis needed
                    </div>
                  </div>
                  <div className="bg-red-900/30 border border-red-700 rounded-lg p-3 text-center">
                    <div className="text-red-400 text-sm mb-1">
                      7-10: Deepfake
                    </div>
                    <div className="text-red-300 text-xs">
                      High confidence synthetic
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Powered by Advanced AI</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Our technology combines cutting-edge neural networks with
              explainable AI to provide reliable deepfake detection.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0f1629] border border-gray-700 rounded-xl p-6 text-center hover:border-red-500 transition-colors">
              <Zap className="w-8 h-8 text-red-400 mx-auto mb-3" />
              <h4 className="text-white mb-2">Real-time</h4>
            </div>

            <div className="bg-[#0f1629] border border-gray-700 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
              <Target className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h4 className="text-white mb-2">High Accuracy</h4>
            </div>

            <div className="bg-[#0f1629] border border-gray-700 rounded-xl p-6 text-center hover:border-purple-500 transition-colors">
              <Eye className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h4 className="text-white mb-2">Explainable AI</h4>
              <p className="text-gray-400 text-sm">Visual heatmaps & reports</p>
            </div>

            <div className="bg-[#0f1629] border border-gray-700 rounded-xl p-6 text-center hover:border-green-500 transition-colors">
              <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h4 className="text-white mb-2">Secure</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Above Footer */}
      <section className="py-16 border-t border-gray-800 bg-gradient-to-br from-blue-900/10 to-purple-900/10">
        <h1 className="text-center text-white mb-8">
          The Threat of{" "}
          <span className="text-center text-blue-400 mb-8">
            <h2>AI-generated Deepfake</h2>
          </span>
        </h1>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-[#0f1629] border border-gray-800 rounded-xl p-6 h-full">
              <div className="text-2xl sm:text-3xl lg:text-4xl text-blue-400 mb-2">
                Content Propaganda
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                The rise of political deepfakes makes it easier to manipulate
                public opinion through false narratives.
              </p>
            </div>

            <div className="bg-[#0f1629] border border-gray-800 rounded-xl p-6 h-full">
              <div className="text-2xl sm:text-3xl lg:text-4xl text-purple-400 mb-2">
                Fake Profiles
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                Fake profiles on social platforms with AI-generated images &
                videos can lure people into deepfake scams.
              </p>
            </div>

            <div className="bg-[#0f1629] border border-gray-800 rounded-xl p-6 h-full">
              <div className="text-2xl sm:text-3xl lg:text-4xl text-green-400 mb-2">
                Real-Time Video Manipulation
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                Advanced scammers can hack live feeds and manipulate real-time
                videos.
              </p>
            </div>

            <div className="bg-[#0f1629] border border-gray-800 rounded-xl p-6 h-full">
              <div className="text-2xl sm:text-3xl lg:text-4xl text-yellow-400 mb-2">
                Misinformation
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                AI deepfakes can be used to spread misinformation and manipulate
                public opinion by creating realistic fake videos or audio.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
