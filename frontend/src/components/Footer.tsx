const Footer = () => {
  return (
    <footer className="relative bg-[#041826] text-white overflow-hidden">

      {/* Top Gradient Line */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300"></div>

      <div className="section-container py-14">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

          {/* Left Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-4 mb-5">
              <img
                src="/images/iit_delhi_logo.png"
                alt="IIT Delhi Logo"
                className="h-16 w-16 object-contain drop-shadow-lg"
              />

              <div>
                <h3 className="text-2xl font-bold tracking-tight leading-tight">
                  LSO Summer School 2026
                </h3>

                <p className="text-sm text-gray-300 mt-1">
                  Large-Scale Optimization Summer School
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Learn advanced methods for solving large-scale real-world optimization problems.
            </p>
          </div>

          {/* Center Section */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white/5 border border-white/10 rounded-2xl px-8 py-5 backdrop-blur-md shadow-lg">

              <div className="flex flex-col gap-3 text-sm text-gray-200">
                <span className="flex items-center gap-2 justify-center">
                  📅 <span>June 1–6, 2026</span>
                </span>

                <span className="flex items-center gap-2 justify-center">
                  📍 <span>IIT Delhi, New Delhi, India</span>
                </span>


              </div>
            </div>
          </div>

          {/* Right Section - ANRF Logo */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="bg-white rounded-2xl p-4 shadow-2xl hover:scale-105 transition-transform duration-300">
              <img
                src="/images/ANRF_logo_bg.png"
                alt="ANRF Logo"
                className="h-24 object-contain"
              />
            </div>


          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 mt-12 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">

            <p className="text-center sm:text-left">
              © 2026 LSO Summer School. All rights reserved.
            </p>

            <p className="flex flex-wrap items-center justify-center sm:justify-end gap-1.5 text-center sm:text-right">
              <span>Developed by</span>

              <a
                href="https://www.linkedin.com/in/civiliitd/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                Department of Civil and Environmental Engineering, IIT Delhi
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>
    </footer>
  );
};

export default Footer;