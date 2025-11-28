const Home = () => {
  const documents = [
    {
      id: 1,
      title: 'Needfinding',
      pdfUrl: '/docs/1.pdf',
      imageUrl: '/docs/1.png',
      pages: 26,
      date: '2025.09.22',
    },
    {
      id: 2,
      title: 'Point of View & Experience Prototypes',
      pdfUrl: '/docs/2.pdf',
      imageUrl: '/docs/2.png',
      pages: 23,
      date: '2025.09.29',
    },
    {
      id: 3,
      title: 'Concept Video',
      pdfUrl: '/docs/3.pdf',
      imageUrl: '/docs/3.png',
      pages: 13,
      date: '2025.10.19',
    },
    {
      id: 4,
      title: 'Low-Fidelity Prototype & Test',
      pdfUrl: '/docs/4.pdf',
      imageUrl: '/docs/4.png',
      pages: 27,
      date: '2025.10.22',
    },
    {
      id: 5,
      title: 'Medium-fi Prototype',
      pdfUrl: '/docs/5.pdf',
      imageUrl: '/docs/5.png',
      pages: 35,
      date: '2025.11.16',
    },
    {
      id: 6,
      title: 'Group Heuristic Evaluation',
      pdfUrl: '/docs/6.pdf',
      imageUrl: '/docs/6.png',
      pages: 0,
      date: '2025.nn.nn',
    },
    {
      id: 7,
      title: 'Hi-fidelity Prototype',
      pdfUrl: '/docs/7.pdf',
      imageUrl: '/docs/7.png',
      pages: 0,
      date: '2025.nn.nn',
    },
    {
      id: 8,
      title: 'Poster & Pitch Slide',
      pdfUrl: '/docs/8.pdf',
      imageUrl: '/docs/8.png',
      pages: 0,
      date: '2025.nn.nn',
    },
  ]

  const teamMembers = [
    {
      id: 1,
      name: 'Kyurin Kim',
      role: 'Project Manager & Website Developer',
      photo: '/docs/team1.png',
    },
    {
      id: 2,
      name: 'Yeonwoo Kim',
      role: 'Project Manager & Prototype Developer',
      photo: '/docs/team2.png',
    },
    {
      id: 3,
      name: 'Eunsom Kim',
      role: 'Project Manager & Video Making',
      photo: '/docs/team3.png',
    },
    {
      id: 4,
      name: 'Yoonsu Woo',
      role: 'Project Manager & Prototype Developer',
      photo: '/docs/team4.png',
    },
    {
      id: 5,
      name: 'Ran Yuk',
      role: 'Project Manager & Prototype Developer',
      photo: '/docs/team5.png',
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-black text-gray-900 leading-none">
                Questrip
                <br />
                <span className="text-3xl lg:text-4xl italic">from trip to game</span>
              </h1>
              <button className="px-7 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-900 transition-colors text-base">
                Try Prototype
              </button>
            </div>

            {/* Right - Floating Circles */}
            <div className="relative h-[600px] hidden lg:block">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-full blur-3xl opacity-60"></div>
              
              {/* Floating Circle Images */}
              <div className="absolute top-20 left-10 w-40 h-40 rounded-full border-4 border-gray-200 shadow-xl overflow-hidden animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1614729939124-032d000b6b4a?w=400&h=400&fit=crop" 
                  alt="Design 1"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute top-10 right-20 w-48 h-48 rounded-full border-4 border-pink-300 shadow-xl overflow-hidden animate-float" style={{ animationDelay: '0.5s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop" 
                  alt="Design 2"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute top-64 left-24 w-44 h-44 rounded-full border-4 border-purple-300 shadow-xl overflow-hidden animate-float" style={{ animationDelay: '1s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=400&fit=crop" 
                  alt="Design 3"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-32 right-10 w-52 h-52 rounded-full border-4 border-green-200 shadow-xl overflow-hidden animate-float" style={{ animationDelay: '1.5s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=400&fit=crop" 
                  alt="Design 4"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-20 left-32 w-44 h-44 rounded-full border-4 border-yellow-300 shadow-xl overflow-hidden animate-float" style={{ animationDelay: '2s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=400&fit=crop" 
                  alt="Design 5"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="documentation" className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-black text-gray-900 mb-3">
              Documentation
            </h1>
            <p className="text-lg text-gray-600">
              View and download project-related documents
            </p>
          </div>

          {/* Document Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                {/* Image Section */}
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={doc.imageUrl}
                    alt={doc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content Section */}
                <div className="p-5">
                  {/* Title */}
                  <h3 className="text-sm font-bold text-gray-900 mb-3 leading-snug min-h-[2.5rem]">
                    {doc.title}
                  </h3>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between mb-3 text-xs text-gray-500">
                    <span>{doc.pages} pages</span>
                    <span>{doc.date}</span>
                  </div>

                  {/* Download Button */}
                  <a
                    href={doc.pdfUrl}
                    download
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors text-sm"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prototypes Section */}
      <section id="prototypes" className="min-h-screen bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-black text-gray-900 mb-3">
              Prototypes
            </h1>
            <p className="text-lg text-gray-600">
              Explore our Mid-Fi and Hi-Fi prototypes
            </p>
          </div>

          {/* Mid-Fi Prototype */}
          <div className="mb-10">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center mb-5">
                <div className="text-3xl mr-3">📝</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    Mid-Fidelity Prototype
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Mid-stage prototype featuring initial design concepts and user flows.
                  </p>
                </div>
              </div>

              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden mb-5">
                <iframe
                  style={{ border: 'none' }}
                  width="100%"
                  height="100%"
                  src="https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_MIDFI_URL"
                  allowFullScreen
                  title="Mid-Fi Prototype"
                ></iframe>
              </div>

              <a
                href="https://www.figma.com/YOUR_MIDFI_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2.5 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors text-sm"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                Open in Figma
              </a>
            </div>
          </div>

          {/* Hi-Fi Prototype */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center mb-5">
                <div className="text-3xl mr-3">🎨</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    High-Fidelity Prototype
                  </h2>
                  <p className="text-gray-600 text-sm">
                    High-quality prototype with finalized design and interactions.
                  </p>
                </div>
              </div>

              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden mb-5">
                <iframe
                  style={{ border: 'none' }}
                  width="100%"
                  height="100%"
                  src="https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_HIFI_URL"
                  allowFullScreen
                  title="Hi-Fi Prototype"
                ></iframe>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
                <div className="p-3 bg-white rounded-xl border border-gray-200">
                  <div className="font-bold text-gray-900 text-sm mb-1">✨ Interactive</div>
                  <p className="text-xs text-gray-600">Full interaction implemented</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-gray-200">
                  <div className="font-bold text-gray-900 text-sm mb-1">🎨 Polished</div>
                  <p className="text-xs text-gray-600">Refined visual design</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-gray-200">
                  <div className="font-bold text-gray-900 text-sm mb-1">📱 Responsive</div>
                  <p className="text-xs text-gray-600">Responsive layout support</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <a
                  href="/prototypes/hifi-prototype.zip"
                  download
                  className="inline-flex items-center px-6 py-2.5 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
                  </svg>
                  Download ZIP
                </a>
                <a
                  href="https://www.figma.com/YOUR_HIFI_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-2.5 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  Open in Figma
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-black text-gray-900 mb-3">
              Videos
            </h1>
            <p className="text-lg text-gray-600">
              Watch our concept video and Hi-Fi prototype demo
            </p>
          </div>

          {/* Concept Video */}
          <div className="mb-10">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center mb-5">
                <div className="text-3xl mr-3">🎥</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    Concept Video
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Introducing the core ideas and vision of our project.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                <span className="px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
                  ⏱️ 3:45
                </span>
                <span className="px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
                  🎬 1080p HD
                </span>
                <span className="px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
                  📅 2024.04.01
                </span>
              </div>

              <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden mb-5">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="Concept Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <a
                href="/videos/concept-video.mp4"
                download
                className="inline-flex items-center px-6 py-2.5 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors text-sm"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
                </svg>
                Download Video (MP4)
              </a>
            </div>
          </div>

          {/* Hi-Fi Demo Video */}
          <div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center mb-5">
                <div className="text-3xl mr-3">▶️</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    Hi-Fi Prototype Demo
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Demonstration of key features and interactions of the final prototype.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                <span className="px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
                  ⏱️ 5:20
                </span>
                <span className="px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
                  🎬 4K Ultra HD
                </span>
                <span className="px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
                  📅 2024.05.15
                </span>
              </div>

              <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden mb-5">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/YOUR_DEMO_VIDEO_ID"
                  title="Hi-Fi Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
                <div className="flex items-start p-3 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-lg flex items-center justify-center mr-2.5 text-xs font-bold">
                    1
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">User Onboarding</div>
                    <div className="text-xs text-gray-600">Intuitive first experience</div>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-lg flex items-center justify-center mr-2.5 text-xs font-bold">
                    2
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Core Features Demo</div>
                    <div className="text-xs text-gray-600">Key functionality showcase</div>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-lg flex items-center justify-center mr-2.5 text-xs font-bold">
                    3
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Interactions</div>
                    <div className="text-xs text-gray-600">User engagement flow</div>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-lg flex items-center justify-center mr-2.5 text-xs font-bold">
                    4
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Final Results</div>
                    <div className="text-xs text-gray-600">Complete experience</div>
                  </div>
                </div>
              </div>

              <a
                href="/videos/hifi-demo.mp4"
                download
                className="inline-flex items-center px-6 py-2.5 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors text-sm"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
                </svg>
                Download Video (MP4)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="min-h-screen bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-black text-gray-900 mb-3">
              Our Team
            </h1>
            <p className="text-lg text-gray-600">
              Meet our talented team members working together on this project
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="flex flex-wrap justify-center gap-6 mb-16 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-5 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium text-gray-500">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="bg-gray-50 rounded-2xl p-10 text-center border border-gray-200">
            <h2 className="text-3xl font-black text-gray-900 mb-3">
              Contact Us
            </h2>
            <p className="text-base text-gray-600 mb-8 max-w-2xl mx-auto">
              Have questions about our project? Feel free to reach out anytime.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              <div className="p-4">
                <div className="text-2xl mb-2">📧</div>
                <div className="font-bold text-gray-900 text-sm mb-1">Email</div>
                <div className="text-xs text-gray-600">team@hciproject.com</div>
              </div>
              <div className="p-4">
                <div className="text-2xl mb-2">💻</div>
                <div className="font-bold text-gray-900 text-sm mb-1">GitHub</div>
                <div className="text-xs text-gray-600">@hci-project-team</div>
              </div>
              <div className="p-4">
                <div className="text-2xl mb-2">💼</div>
                <div className="font-bold text-gray-900 text-sm mb-1">LinkedIn</div>
                <div className="text-xs text-gray-600">HCI Project Team</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="mailto:team@hciproject.com"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors text-sm"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </a>
              <a
                href="https://github.com/your-team"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors text-sm"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                Visit GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
