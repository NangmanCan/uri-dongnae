import { Member, Party } from '@/types';
import { 
  getMembersByGu, 
  seoulDistricts, 
  constituencyMapping,
  getDataStats,
} from '@/lib/data/seoul';

// 정당 정보
export const parties: Record<string, Party> = {
  democratic: { name: '더불어민주당', color: '#004EA2' },
  ppp: { name: '국민의힘', color: '#E61E2B' },
  reform: { name: '조국혁신당', color: '#004B97' },
  justice: { name: '정의당', color: '#FFCC00' },
  independent: { name: '무소속', color: '#808080' },
};

// 서울시 기준 선거구 → 의원 매핑
export const districtToConstituency: Record<string, string[]> = {};

// 서울 25개 구에 대해 매핑 생성
seoulDistricts.forEach(gu => {
  const key = `서울특별시-${gu}`;
  districtToConstituency[key] = constituencyMapping[gu] || [];
});

// 의원 데이터 조회 (실제 데이터 사용)
export function getMembersByDistrict(sido: string, sigungu: string): Member[] {
  // 서울특별시인 경우 실제 데이터 사용
  if (sido === '서울특별시') {
    return getMembersByGu(sigungu);
  }
  
  // 다른 지역은 기본 데이터 반환
  return defaultMembers;
}

// mockMembers는 getMembersByDistrict 함수로 대체
// 하위 호환성을 위해 유지
export const mockMembers: Record<string, Member[]> = {};

// 서울 25개 구에 대해 데이터 미리 로드
seoulDistricts.forEach(gu => {
  const key = `서울특별시-${gu}`;
  mockMembers[key] = getMembersByGu(gu);
});

// 기본 목업 데이터 (매핑 안되는 경우)
export const defaultMembers: Member[] = [
  {
    id: 'default-gov',
    name: '(정보 없음)',
    type: 'governor',
    typeLabel: '시도지사',
    party: parties.independent,
    district: '-',
    pledges: ['데이터 준비 중입니다.'],
  },
];

// 데이터 통계
export const dataStats = getDataStats();
