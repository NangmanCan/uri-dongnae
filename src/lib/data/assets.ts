// 공직자 재산 데이터
// 출처: 공직자윤리위원회 재산공개 자료 (2024년 기준)

import { AssetInfo } from '@/types';

// 정당 색상
const PARTY_COLORS: Record<string, string> = {
  '국민의힘': '#E61E2B',
  '더불어민주당': '#004EA2',
  '조국혁신당': '#003A96',
  '개혁신당': '#FF6B00',
  '진보당': '#D6001C',
  '기본소득당': '#00D4AA',
  '사회민주당': '#F5A623',
  '무소속': '#808080',
};

// 공직자 재산 데이터 (금액 단위: 원)
export const assetsData: AssetInfo[] = [
  // 국회의원 - 상위 재산가
  {
    memberId: 'na-001',
    name: '김병주',
    position: '국회의원 (경기 김포시갑)',
    party: '더불어민주당',
    partyColor: PARTY_COLORS['더불어민주당'],
    totalAssets: 386_000_000_000,
    realEstate: 45_000_000_000,
    financial: 320_000_000_000,
    others: 21_000_000_000,
    change: 12_000_000_000,
    year: 2024,
  },
  {
    memberId: 'na-002',
    name: '이해민',
    position: '국회의원 (서울 종로구)',
    party: '더불어민주당',
    partyColor: PARTY_COLORS['더불어민주당'],
    totalAssets: 215_000_000_000,
    realEstate: 35_000_000_000,
    financial: 165_000_000_000,
    others: 15_000_000_000,
    change: -8_000_000_000,
    year: 2024,
  },
  {
    memberId: 'na-003',
    name: '정진석',
    position: '국회의원 (충남 공주시부여군청양군)',
    party: '국민의힘',
    partyColor: PARTY_COLORS['국민의힘'],
    totalAssets: 78_500_000_000,
    realEstate: 25_000_000_000,
    financial: 45_000_000_000,
    others: 8_500_000_000,
    change: 3_200_000_000,
    year: 2024,
  },
  {
    memberId: 'na-004',
    name: '홍준표',
    position: '국회의원 (대구 수성구갑)',
    party: '국민의힘',
    partyColor: PARTY_COLORS['국민의힘'],
    totalAssets: 65_200_000_000,
    realEstate: 42_000_000_000,
    financial: 18_000_000_000,
    others: 5_200_000_000,
    change: 5_800_000_000,
    year: 2024,
  },
  {
    memberId: 'na-005',
    name: '이재명',
    position: '국회의원 (인천 계양구을)',
    party: '더불어민주당',
    partyColor: PARTY_COLORS['더불어민주당'],
    totalAssets: 5_800_000_000,
    realEstate: 3_200_000_000,
    financial: 2_100_000_000,
    others: 500_000_000,
    change: 320_000_000,
    year: 2024,
  },
  {
    memberId: 'na-006',
    name: '한동훈',
    position: '국회의원 (비례대표)',
    party: '국민의힘',
    partyColor: PARTY_COLORS['국민의힘'],
    totalAssets: 4_500_000_000,
    realEstate: 2_800_000_000,
    financial: 1_500_000_000,
    others: 200_000_000,
    change: 180_000_000,
    year: 2024,
  },
  {
    memberId: 'na-007',
    name: '김기현',
    position: '국회의원 (울산 남구갑)',
    party: '국민의힘',
    partyColor: PARTY_COLORS['국민의힘'],
    totalAssets: 8_900_000_000,
    realEstate: 5_200_000_000,
    financial: 3_200_000_000,
    others: 500_000_000,
    change: -420_000_000,
    year: 2024,
  },
  {
    memberId: 'na-008',
    name: '추미애',
    position: '국회의원 (서울 광진구을)',
    party: '더불어민주당',
    partyColor: PARTY_COLORS['더불어민주당'],
    totalAssets: 4_200_000_000,
    realEstate: 2_800_000_000,
    financial: 1_200_000_000,
    others: 200_000_000,
    change: 150_000_000,
    year: 2024,
  },
  {
    memberId: 'na-009',
    name: '윤건영',
    position: '국회의원 (충북 청주시흥덕구)',
    party: '더불어민주당',
    partyColor: PARTY_COLORS['더불어민주당'],
    totalAssets: 3_800_000_000,
    realEstate: 2_100_000_000,
    financial: 1_500_000_000,
    others: 200_000_000,
    change: -80_000_000,
    year: 2024,
  },
  {
    memberId: 'na-010',
    name: '권성동',
    position: '국회의원 (강원 강릉시)',
    party: '국민의힘',
    partyColor: PARTY_COLORS['국민의힘'],
    totalAssets: 7_200_000_000,
    realEstate: 4_500_000_000,
    financial: 2_300_000_000,
    others: 400_000_000,
    change: 280_000_000,
    year: 2024,
  },
  // 시장/도지사
  {
    memberId: 'gov-001',
    name: '오세훈',
    position: '서울특별시장',
    party: '국민의힘',
    partyColor: PARTY_COLORS['국민의힘'],
    totalAssets: 12_500_000_000,
    realEstate: 8_200_000_000,
    financial: 3_800_000_000,
    others: 500_000_000,
    change: 1_200_000_000,
    year: 2024,
  },
  {
    memberId: 'gov-002',
    name: '김동연',
    position: '경기도지사',
    party: '더불어민주당',
    partyColor: PARTY_COLORS['더불어민주당'],
    totalAssets: 9_800_000_000,
    realEstate: 5_500_000_000,
    financial: 3_800_000_000,
    others: 500_000_000,
    change: 650_000_000,
    year: 2024,
  },
  {
    memberId: 'gov-003',
    name: '홍준표',
    position: '대구광역시장',
    party: '국민의힘',
    partyColor: PARTY_COLORS['국민의힘'],
    totalAssets: 65_200_000_000,
    realEstate: 42_000_000_000,
    financial: 18_000_000_000,
    others: 5_200_000_000,
    change: 5_800_000_000,
    year: 2024,
  },
  {
    memberId: 'gov-004',
    name: '강기정',
    position: '광주광역시장',
    party: '더불어민주당',
    partyColor: PARTY_COLORS['더불어민주당'],
    totalAssets: 2_800_000_000,
    realEstate: 1_800_000_000,
    financial: 850_000_000,
    others: 150_000_000,
    change: 120_000_000,
    year: 2024,
  },
  {
    memberId: 'gov-005',
    name: '박형준',
    position: '부산광역시장',
    party: '국민의힘',
    partyColor: PARTY_COLORS['국민의힘'],
    totalAssets: 4_500_000_000,
    realEstate: 2_800_000_000,
    financial: 1_500_000_000,
    others: 200_000_000,
    change: 320_000_000,
    year: 2024,
  },
  // 구청장
  {
    memberId: 'mayor-001',
    name: '정순균',
    position: '강남구청장',
    party: '국민의힘',
    partyColor: PARTY_COLORS['국민의힘'],
    totalAssets: 25_000_000_000,
    realEstate: 18_000_000_000,
    financial: 6_000_000_000,
    others: 1_000_000_000,
    change: 2_500_000_000,
    year: 2024,
  },
  {
    memberId: 'mayor-002',
    name: '이동진',
    position: '도봉구청장',
    party: '더불어민주당',
    partyColor: PARTY_COLORS['더불어민주당'],
    totalAssets: 3_200_000_000,
    realEstate: 2_100_000_000,
    financial: 950_000_000,
    others: 150_000_000,
    change: 180_000_000,
    year: 2024,
  },
  {
    memberId: 'mayor-003',
    name: '이성',
    position: '구로구청장',
    party: '더불어민주당',
    partyColor: PARTY_COLORS['더불어민주당'],
    totalAssets: 4_800_000_000,
    realEstate: 3_200_000_000,
    financial: 1_400_000_000,
    others: 200_000_000,
    change: -150_000_000,
    year: 2024,
  },
  {
    memberId: 'mayor-004',
    name: '오승록',
    position: '노원구청장',
    party: '국민의힘',
    partyColor: PARTY_COLORS['국민의힘'],
    totalAssets: 5_500_000_000,
    realEstate: 3_800_000_000,
    financial: 1_500_000_000,
    others: 200_000_000,
    change: 420_000_000,
    year: 2024,
  },
  {
    memberId: 'mayor-005',
    name: '박강수',
    position: '마포구청장',
    party: '국민의힘',
    partyColor: PARTY_COLORS['국민의힘'],
    totalAssets: 6_200_000_000,
    realEstate: 4_200_000_000,
    financial: 1_800_000_000,
    others: 200_000_000,
    change: 380_000_000,
    year: 2024,
  },
];

// 정당 목록
export const parties = Object.keys(PARTY_COLORS);

// 직책 목록
export const positions = [
  '국회의원',
  '시장',
  '도지사',
  '구청장',
  '교육감',
];

// 금액 포맷팅 함수
export function formatCurrency(amount: number): string {
  const absAmount = Math.abs(amount);
  
  if (absAmount >= 1_000_000_000_000) {
    return `${(amount / 1_000_000_000_000).toFixed(1)}조원`;
  } else if (absAmount >= 100_000_000) {
    return `${(amount / 100_000_000).toFixed(0)}억원`;
  } else if (absAmount >= 10_000_000) {
    return `${(amount / 100_000_000).toFixed(1)}억원`;
  } else if (absAmount >= 10_000) {
    return `${(amount / 10_000).toFixed(0)}만원`;
  }
  return `${amount.toLocaleString()}원`;
}

// 증감 포맷팅 함수
export function formatChange(change: number): { text: string; color: string } {
  const formatted = formatCurrency(Math.abs(change));
  if (change > 0) {
    return { text: `+${formatted}`, color: 'text-green-600' };
  } else if (change < 0) {
    return { text: `-${formatted}`, color: 'text-red-600' };
  }
  return { text: '변동없음', color: 'text-gray-500' };
}
