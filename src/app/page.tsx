import AddressSearch from '@/components/AddressSearch';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🏛️ 우리동네 대표
          </h1>
          <p className="text-lg text-blue-200 max-w-md mx-auto">
            주소를 입력하면 해당 지역의 <br className="md:hidden" />
            국회의원, 지자체장, 지방의원 정보를 알려드려요
          </p>
        </div>

        {/* 검색 박스 */}
        <AddressSearch />

        {/* 정보 안내 */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            { icon: '🏛️', title: '국회의원', desc: '국회 활동, 법안 발의' },
            { icon: '🏢', title: '시·도지사', desc: '광역자치단체장' },
            { icon: '🏠', title: '시·군·구청장', desc: '기초자치단체장' },
            { icon: '📋', title: '시·도의원', desc: '광역의회 의원' },
            { icon: '📝', title: '기초의원', desc: '기초의회 의원' },
            { icon: '🎓', title: '교육감', desc: '교육자치 수장' },
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur rounded-xl p-4 text-center border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="font-semibold text-white text-sm">{item.title}</h3>
              <p className="text-xs text-blue-200 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 제공 정보 */}
        <div className="mt-12 text-center">
          <p className="text-sm text-blue-300/70">
            기본정보 · 당적 · 공약 · 재산 · 전과 정보 제공
          </p>
        </div>

        {/* 푸터 */}
        <footer className="mt-16 text-center text-blue-300/50 text-sm">
          <p>© 2024 우리동네 대표 | 시민을 위한 정치 정보 서비스</p>
        </footer>
      </div>
    </main>
  );
}
