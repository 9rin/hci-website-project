const Team = () => {
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
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-20">
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
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              {/* Photo Section */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Name & Role */}
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-gray-500 mb-3">
                  {member.role}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl p-12 text-center border border-gray-200">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            프로젝트에 대한 문의사항이 있으시면 언제든지 연락주세요.
          </p>

          {/* Contact Methods */}
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

          {/* Action Buttons */}
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
    </div>
  )
}

export default Team
