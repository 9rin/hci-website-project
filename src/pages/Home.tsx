const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
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

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              프로젝트 구성
            </h2>
            <p className="text-xl text-gray-600">
              다양한 자료와 결과물을 확인하실 수 있습니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '문서',
                description: '프로젝트 관련 문서 및 보고서',
                link: '/documentation',
                icon: '📄'
              },
              {
                title: '프로토타입',
                description: 'Mid-Fi 및 Hi-Fi 프로토타입',
                link: '/prototypes',
                icon: '🎨'
              },
              {
                title: '비디오',
                description: '컨셉 비디오와 데모 영상',
                link: '/videos',
                icon: '🎥'
              },
              {
                title: '팀',
                description: '프로젝트 팀원 소개',
                link: '/team',
                icon: '👥'
              },
              {
                title: '아이디어',
                description: '혁신적인 UX/UI 솔루션',
                link: '/',
                icon: '💡'
              }
            ].map((feature, index) => (
              <a
                key={index}
                href={feature.link}
                className="group bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center text-gray-400 group-hover:text-gray-900 transition-colors">
                  <span className="text-sm font-medium">자세히 보기</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
