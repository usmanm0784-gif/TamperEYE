import { Shield, Target, Users, Award, Zap, Eye } from "lucide-react";
import team_pic from '../assets/team_pic.jpg';
export function AboutPage() {
  const teamMembers = [
    {
      name: "Usman Yaisn",
      role: "CTO",
      image:
        team_pic,
    },
    {
      name: "Ghulam Muhaiddin",
      role: "Lead AI Engineer",
      image:
        team_pic,
    },
    {
      name: "Azeem Iqbal",
      role: "Head of Research",
      image:
        team_pic,
    },
  ];

  const stats = [
    { value: "High", label: "Detection Accuracy" },
    { value: "10k", label: "Images Analyzed" },
    { value: "5K+", label: "Active Users" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <div className="bg-[#0a0e1a]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-white mb-6">About Tamper EYE</h1>
            <p className="text-gray-300">
              We're on a mission to combat misinformation and protect digital
              authenticity through cutting-edge AI technology. Our advanced
              deepfake detection system helps individuals and organizations
              verify the authenticity of digital media.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-400 mb-2">{stat.value}</div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">Our Mission & Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We believe in creating a safer digital world through transparency
              and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0f1629] border border-gray-800 rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-white mb-3">Our Mission</h3>
              <p className="text-gray-400">
                To provide accessible, accurate deepfake detection technology
                that empowers users to verify digital content authenticity.
              </p>
            </div>

            <div className="bg-[#0f1629] border border-gray-800 rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-indigo-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-white mb-3">Trust & Security</h3>
              <p className="text-gray-400">
                We prioritize user privacy and data security, ensuring that all
                analysis is conducted with the highest standards of protection.
              </p>
            </div>

            <div className="bg-[#0f1629] border border-gray-800 rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-white mb-3">Innovation</h3>
              <p className="text-gray-400">
                Continuously advancing our AI models to stay ahead of evolving
                deepfake technology and provide the most accurate detection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white mb-6">Our Technology</h2>
              <p className="text-gray-400 mb-6">
                Tamper EYE uses state-of-the-art deep learning models trained on
                millions of images and videos to identify subtle manipulation
                patterns that human eyes might miss.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white mb-1">Real-time Analysis</h4>
                    <p className="text-gray-400">
                      Get instant results with our optimized neural networks
                      that process media in seconds.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-white mb-1">Multi-layer Detection</h4>
                    <p className="text-gray-400">
                      Our system analyzes multiple aspects including facial
                      features, lighting, and pixel patterns.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white mb-1">Continuous Learning</h4>
                    <p className="text-gray-400">
                      Our models are regularly updated to detect the latest
                      deepfake techniques and methods.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
              <h3 className="mb-6">How It Works</h3>
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center">
                    1
                  </span>
                  <div>
                    <h4 className="mb-2">Upload Media</h4>
                    <p className="text-blue-100">
                      Upload any image or video file to our secure platform.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center">
                    2
                  </span>
                  <div>
                    <h4 className="mb-2">AI Analysis</h4>
                    <p className="text-blue-100">
                      Our neural networks analyze thousands of data points for
                      manipulation signs.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center">
                    3
                  </span>
                  <div>
                    <h4 className="mb-2">Detailed Report</h4>
                    <p className="text-blue-100">
                      Receive a comprehensive analysis with confidence scores
                      and detailed findings.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 border-b border-gray-800">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#0f1629] border border-gray-800 rounded-xl shadow-lg overflow-hidden hover:border-blue-500 transition-colors w-full max-w-sm mx-auto"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h4 className="text-white mb-1">{member.name}</h4>
                <p className="text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Join Us in Fighting Misinformation
          </h2>
          <p className="text-blue-100 mb-8">
            Start using Tamper EYE today and be part of the solution for a more
            trustworthy digital world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Free
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AboutPage;
