'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Member } from '@/types';
import MemberCard from '@/components/MemberCard';

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const sido = searchParams.get('sido') || '';
  const sigungu = searchParams.get('sigungu') || '';
  const dong = searchParams.get('dong') || '';
  const address = searchParams.get('address') || '';

  useEffect(() => {
    if (!sido || !sigungu) {
      setError('주소 정보가 올바르지 않습니다.');
      setIsLoading(false);
      return;
    }

    const fetchMembers = async () => {
      try {
        const response = await fetch(
          `/api/members?sido=${encodeURIComponent(sido)}&sigungu=${encodeURIComponent(sigungu)}`
        );
        const data = await response.json();
        setMembers(data.members || []);
      } catch (err) {
        setError('의원 정보를 불러오는데 실패했습니다.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMembers();
  }, [sido, sigungu]);

  // 의원 유형별 그룹화
  const groupedMembers = members.reduce((acc, member) => {
    const type = member.type;
    if (!acc[type]) acc[type] = [];
    acc[type].push(member);
    return acc;
  }, {} as Record<string, Member[]>);

  const typeOrder = ['national', 'governor', 'mayor', 'provincial', 'municipal', 'superintendent'];
  const typeLabels: Record<string, string> = {
    national: '🏛️ 국회의원',
    governor: '🏢 시·도지사',
    mayor: '🏠 시·군·구청장',
    provincial: '📋 시·도의원',
    municipal: '📝 기초의원',
    superintendent: '🎓 교육감',
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-gradient-to-r from-slate-900 to-blue-900 text-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push('/')}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex-1">
              <h1 className="font-bold text-lg">우리동네 대표</h1>
              <p className="text-sm text-blue-200 truncate">{address}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* 주소 정보 */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-6 border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">검색 위치</p>
              <p className="font-semibold text-gray-900">{sido} {sigungu} {dong}</p>
            </div>
          </div>
        </div>

        {/* 로딩 */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-500">의원 정보를 불러오는 중...</p>
          </div>
        )}

        {/* 에러 */}
        {error && (
          <div className="text-center py-12">
            <p className="text-red-500 mb-4">{error}</p>
            <button
              onClick={() => router.push('/')}
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              다시 검색하기
            </button>
          </div>
        )}

        {/* 의원 목록 */}
        {!isLoading && !error && (
          <div className="space-y-6">
            {typeOrder.map((type) => {
              const typeMembers = groupedMembers[type];
              if (!typeMembers || typeMembers.length === 0) return null;

              return (
                <section key={type}>
                  <h2 className="text-lg font-bold text-gray-800 mb-3 px-1">
                    {typeLabels[type]}
                  </h2>
                  <div className="space-y-3">
                    {typeMembers.map((member) => (
                      <MemberCard key={member.id} member={member} />
                    ))}
                  </div>
                </section>
              );
            })}

            {members.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">해당 지역의 의원 정보를 찾을 수 없습니다.</p>
                <button
                  onClick={() => router.push('/')}
                  className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  다시 검색하기
                </button>
              </div>
            )}
          </div>
        )}

        {/* 면책 */}
        {!isLoading && members.length > 0 && (
          <div className="mt-8 text-center text-xs text-gray-400">
            <p>* 정보는 공공데이터를 기반으로 하며, 실제와 다를 수 있습니다.</p>
            <p className="mt-1">데이터 출처: 열린국회정보, 중앙선거관리위원회</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </main>
    }>
      <ResultContent />
    </Suspense>
  );
}
