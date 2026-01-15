import React from "react";
import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-b from-[#050b1a] to-[#020617] text-gray-300">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-3">
            Privacy <span className="text-blue-500">Policy</span>
          </h1>
          <p className="text-gray-400">
            How Tamper EYE handles, protects, and respects your data.
          </p>
        </motion.div>

        {/* Neon Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="
            relative rounded-2xl p-8 space-y-10
            bg-[#0b1224]/80 backdrop-blur-xl
            border border-blue-500/20
            shadow-[0_0_40px_rgba(59,130,246,0.15)]
          "
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none 
            bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent" />

          {[
            {
              title: "1. Information We Collect",
              content:
                "We collect uploaded images or videos only for the purpose of deepfake and tampering detection. Personal identification data is not required unless voluntarily provided.",
            },
            {
              title: "2. How We Use Your Data",
              content: (
                <ul className="list-disc list-inside space-y-1">
                  <li>AI-based manipulation detection</li>
                  <li>Improving detection accuracy</li>
                  <li>System security and abuse prevention</li>
                </ul>
              ),
            },
            {
              title: "3. Data Storage & Retention",
              content:
                "Files are processed securely and retained only temporarily. Media is automatically deleted after analysis unless required for system diagnostics.",
            },
            {
              title: "4. Cookies & Sessions",
              content:
                "We use essential cookies for authentication and session handling. No invasive tracking or advertising cookies are used.",
            },
            {
              title: "5. Third-Party Services",
              content:
                "Trusted third-party services may assist with analytics or infrastructure. All comply with strict data protection standards.",
            },
            {
              title: "6. User Rights",
              content:
                "You may request data deletion or clarification regarding data handling at any time.",
            },
            {
              title: "7. Policy Updates",
              content:
                "This policy may be updated periodically. Continued use of the platform implies acceptance of changes.",
            },
            {
              title: "8. Contact",
              content: (
                <span>
                  Questions? Contact us at{" "}
                  <span className="text-blue-500 font-medium">
                    support@TamperEYE
                  </span>
                </span>
              ),
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <h2 className="text-xl font-semibold text-white mb-2">
                {section.title}
              </h2>
              <div className="text-gray-400 leading-relaxed">
                {section.content}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
