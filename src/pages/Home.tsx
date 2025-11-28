const Home = () => {
  const documents = [
    {
      id: 1,
      title: 'Needfinding',
      pdfUrl: '/docs/1.pdf',
      imageUrl: '/docs/1.png',
      pages: 15,
      date: '2024.03.01',
    },
    {
      id: 2,
      title: 'Point of View & Experience Prototypes',
      pdfUrl: '/docs/2.pdf',
      imageUrl: '/docs/2.png',
      pages: 28,
      date: '2024.03.15',
    },
    {
      id: 3,
      title: 'Concept Video',
      pdfUrl: '/docs/3.pdf',
      imageUrl: '/docs/3.png',
      pages: 42,
      date: '2024.04.10',
    },
    {
      id: 4,
      title: 'Low-Fidelity Prototype & Test',
      pdfUrl: '/docs/4.pdf',
      imageUrl: '/docs/4.png',
      pages: 56,
      date: '2024.05.20',
    },
    {
      id: 5,
      title: 'Medium-fi Prototype',
      pdfUrl: '/docs/5.pdf',
      imageUrl: '/docs/5.png',
      pages: 32,
      date: '2024.05.05',
    },
    {
      id: 6,
      title: 'Group Heuristic Evaluation',
      pdfUrl: '/docs/6.pdf',
      imageUrl: '/docs/6.png',
      pages: 38,
      date: '2024.04.25',
    },
    {
      id: 7,
      title: 'Hi-fidelity Prototype',
      pdfUrl: '/docs/7.pdf',
      imageUrl: '/docs/7.png',
      pages: 24,
      date: '2024.03.20',
    },
    {
      id: 8,
      title: 'Poster & Pitch Slide',
      pdfUrl: '/docs/8.pdf',
      imageUrl: '/docs/8.png',
      pages: 18,
      date: '2024.05.30',
    },
  ]

  const teamMembers = [
    {
      id: 1,
      name: '김규린',
      role: 'Project Lead & UX Designer',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      description: '사용자 경험 디자인과 프로젝트 전반을 총괄합니다.',
    },
    {
      id: 2,
      name: '김연우',
      role: 'UI Designer',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      description: '인터페이스 디자인과 비주얼 디자인을 담당합니다.',
    },
    {
      id: 3,
      name: '김은솜',
      role: 'Frontend Developer',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      description: '프론트엔드 개발과 프로토타입 구현을 담당합니다.',
    },
    {
      id: 4,
      name: '우윤수',
      role: 'UX Researcher',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      description: '사용자 리서치와 데이터 분석을 수행합니다.',
    },
    {
      id: 5,
      name: '육란',
      role: 'Interaction Designer',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
      description: '인터랙션 디자인과 프로토타이핑을 담당합니다.',
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-7xl lg:text-8xl font-black text-gray-900 leading-none">
                Questrip
                <br />
                <span className="text-4xl lg:text-5xl italic">from trip to game</span>
              </h1>
              <button className="px-8 py-4 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-900 transition-colors text-lg">
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
      <section id="documentation" className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-6xl font-black text-gray-900 mb-4">
              Documentation
            </h1>
            <p className="text-xl text-gray-600">
              프로젝트 관련 문서를 확인하고 다운로드하실 수 있습니다
            </p>
          </div>

          {/* Document Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-base font-bold text-gray-900 mb-4 leading-snug min-h-[3rem]">
                    {doc.title}
                  </h3>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <span>{doc.pages} 페이지</span>
                    <span>{doc.date}</span>
                  </div>

                  {/* Download Button */}
                  <a
                    href={doc.pdfUrl}
                    download
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    PDF 다운로드
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prototypes Section */}
      <section id="prototypes" className="min-h-screen bg-white py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-6xl font-black text-gray-900 mb-4">
              Prototypes
            </h1>
            <p className="text-xl text-gray-600">
              프로젝트의 Mid-Fi 및 Hi-Fi 프로토타입을 확인하실 수 있습니다
            </p>
          </div>

          {/* Mid-Fi Prototype */}
          <div className="mb-12">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">📝</div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Mid-Fidelity Prototype
                  </h2>
                  <p className="text-gray-600">
                    초기 디자인 컨셉과 사용자 플로우를 담은 중간 단계 프로토타입입니다.
                  </p>
                </div>
              </div>

              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden mb-6">
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
                className="inline-flex items-center px-8 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                Figma에서 열기
              </a>
            </div>
          </div>

          {/* Hi-Fi Prototype */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">🎨</div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    High-Fidelity Prototype
                  </h2>
                  <p className="text-gray-600">
                    최종 디자인과 인터랙션이 구현된 고품질 프로토타입입니다.
                  </p>
                </div>
              </div>

              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden mb-6">
                <iframe
                  style={{ border: 'none' }}
                  width="100%"
                  height="100%"
                  src="https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_HIFI_URL"
                  allowFullScreen
                  title="Hi-Fi Prototype"
                ></iframe>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-white rounded-xl border border-gray-200">
                  <div className="font-bold text-gray-900 mb-1">✨ Interactive</div>
                  <p className="text-sm text-gray-600">완전한 인터랙션 구현</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-200">
                  <div className="font-bold text-gray-900 mb-1">🎨 Polished</div>
                  <p className="text-sm text-gray-600">세련된 비주얼 디자인</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-200">
                  <div className="font-bold text-gray-900 mb-1">📱 Responsive</div>
                  <p className="text-sm text-gray-600">반응형 레이아웃 지원</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="/prototypes/hifi-prototype.zip"
                  download
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
                  </svg>
                  ZIP 다운로드
                </a>
                <a
                  href="https://www.figma.com/YOUR_HIFI_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  Figma에서 열기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-6xl font-black text-gray-900 mb-4">
              Videos
            </h1>
            <p className="text-xl text-gray-600">
              프로젝트 컨셉 비디오와 Hi-Fi 프로토타입 데모 영상을 시청하실 수 있습니다
            </p>
          </div>

          {/* Concept Video */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">🎥</div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Concept Video
                  </h2>
                  <p className="text-gray-600">
                    프로젝트의 핵심 아이디어와 비전을 소개하는 컨셉 비디오입니다.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                  ⏱️ 3:45
                </span>
                <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                  🎬 1080p HD
                </span>
                <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                  📅 2024.04.01
                </span>
              </div>

              <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden mb-6">
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
                className="inline-flex items-center px-8 py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
                </svg>
                비디오 다운로드 (MP4)
              </a>
            </div>
          </div>

          {/* Hi-Fi Demo Video */}
          <div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">▶️</div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Hi-Fi Prototype Demo
                  </h2>
                  <p className="text-gray-600">
                    최종 프로토타입의 주요 기능과 인터랙션을 시연하는 데모 영상입니다.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                  ⏱️ 5:20
                </span>
                <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                  🎬 4K Ultra HD
                </span>
                <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                  📅 2024.05.15
                </span>
              </div>

              <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden mb-6">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start p-4 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center mr-3 text-sm font-bold">
                    1
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">사용자 온보딩</div>
                    <div className="text-sm text-gray-600">직관적인 첫 경험</div>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center mr-3 text-sm font-bold">
                    2
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">핵심 기능 데모</div>
                    <div className="text-sm text-gray-600">주요 기능 시연</div>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center mr-3 text-sm font-bold">
                    3
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">인터랙션</div>
                    <div className="text-sm text-gray-600">사용자 상호작용</div>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center mr-3 text-sm font-bold">
                    4
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">최종 결과</div>
                    <div className="text-sm text-gray-600">완성된 경험</div>
                  </div>
                </div>
              </div>

              <a
                href="/videos/hifi-demo.mp4"
                download
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
                </svg>
                비디오 다운로드 (MP4)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="min-h-screen bg-white py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-6xl font-black text-gray-900 mb-4">
              Our Team
            </h1>
            <p className="text-xl text-gray-600">
              다양한 전문성을 가진 팀원들이 함께 프로젝트를 진행하고 있습니다
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="flex flex-wrap justify-center gap-8 mb-20 max-w-5xl mx-auto">
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

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="bg-gray-50 rounded-2xl p-12 text-center border border-gray-200">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              프로젝트에 대한 문의사항이 있으시면 언제든지 연락주세요.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="p-6">
                <div className="text-3xl mb-3">📧</div>
                <div className="font-bold text-gray-900 mb-1">Email</div>
                <div className="text-sm text-gray-600">team@hciproject.com</div>
              </div>
              <div className="p-6">
                <div className="text-3xl mb-3">💻</div>
                <div className="font-bold text-gray-900 mb-1">GitHub</div>
                <div className="text-sm text-gray-600">@hci-project-team</div>
              </div>
              <div className="p-6">
                <div className="text-3xl mb-3">💼</div>
                <div className="font-bold text-gray-900 mb-1">LinkedIn</div>
                <div className="text-sm text-gray-600">HCI Project Team</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:team@hciproject.com"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                이메일 보내기
              </a>
              <a
                href="https://github.com/your-team"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub 방문
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
