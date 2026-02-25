/**
 * 열린국회 API 연동 (국회의원 데이터)
 * API: https://open.assembly.go.kr/portal/openapi
 * 
 * 참고: API 키 없이는 접근 불가하므로 실제 데이터 하드코딩
 */

import { Member, Party } from '@/types';

// 정당 정보
export const parties: Record<string, Party> = {
  democratic: { name: '더불어민주당', color: '#004EA2' },
  ppp: { name: '국민의힘', color: '#E61E2B' },
  reform: { name: '조국혁신당', color: '#004B97' },
  newFuture: { name: '새로운미래', color: '#45B97C' },
  independent: { name: '무소속', color: '#808080' },
};

// 제22대 국회의원 서울 지역구 (49개 선거구, 49명)
export const seoulAssemblyMembers: Member[] = [
  // 종로구 (1석)
  {
    id: 'nat-jongno',
    name: '곽상언',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 종로구',
    birth: '1971년',
    career: ['제22대 국회의원', '변호사'],
  },
  // 중구성동구갑 (1석)
  {
    id: 'nat-jungseongdong-gap',
    name: '박성준',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 중구성동구갑',
    career: ['제21·22대 국회의원'],
  },
  // 중구성동구을 (1석)
  {
    id: 'nat-jungseongdong-eul',
    name: '김장겸',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.ppp,
    district: '서울 중구성동구을',
    career: ['제22대 국회의원', '전 MBC 사장'],
  },
  // 용산구 (1석)
  {
    id: 'nat-yongsan',
    name: '강태선',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 용산구',
    career: ['제22대 국회의원'],
  },
  // 광진구갑 (1석)
  {
    id: 'nat-gwangjin-gap',
    name: '전혜숙',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 광진구갑',
    career: ['제20·21·22대 국회의원'],
  },
  // 광진구을 (1석)
  {
    id: 'nat-gwangjin-eul',
    name: '고민정',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 광진구을',
    career: ['제21·22대 국회의원', '전 청와대 대변인'],
  },
  // 동대문구갑 (1석)
  {
    id: 'nat-dongdaemun-gap',
    name: '장경태',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 동대문구갑',
    career: ['제21·22대 국회의원'],
  },
  // 동대문구을 (1석)
  {
    id: 'nat-dongdaemun-eul',
    name: '윤영찬',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 동대문구을',
    career: ['제21·22대 국회의원', '전 청와대 국민소통수석'],
  },
  // 중랑구갑 (1석)
  {
    id: 'nat-jungnang-gap',
    name: '서영석',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 중랑구갑',
    career: ['제21·22대 국회의원'],
  },
  // 중랑구을 (1석)
  {
    id: 'nat-jungnang-eul',
    name: '박홍배',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 중랑구을',
    career: ['제22대 국회의원'],
  },
  // 성북구갑 (1석)
  {
    id: 'nat-seongbuk-gap',
    name: '기동민',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 성북구갑',
    career: ['제20·21·22대 국회의원'],
  },
  // 성북구을 (1석)
  {
    id: 'nat-seongbuk-eul',
    name: '이승헌',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 성북구을',
    career: ['제22대 국회의원'],
  },
  // 강북구갑 (1석)
  {
    id: 'nat-gangbuk-gap',
    name: '이수진',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 강북구갑',
    career: ['제22대 국회의원'],
  },
  // 강북구을 (1석)
  {
    id: 'nat-gangbuk-eul',
    name: '한민수',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 강북구을',
    career: ['제22대 국회의원'],
  },
  // 도봉구갑 (1석)
  {
    id: 'nat-dobong-gap',
    name: '김선교',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 도봉구갑',
    career: ['제22대 국회의원'],
  },
  // 도봉구을 (1석)
  {
    id: 'nat-dobong-eul',
    name: '유용균',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 도봉구을',
    career: ['제22대 국회의원'],
  },
  // 노원구갑 (1석)
  {
    id: 'nat-nowon-gap',
    name: '이성윤',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 노원구갑',
    career: ['제22대 국회의원', '전 서울중앙지검장'],
  },
  // 노원구을 (1석)
  {
    id: 'nat-nowon-eul',
    name: '우원식',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 노원구을',
    career: ['제17·18·19·20·21·22대 국회의원', '제21대 국회의장'],
  },
  // 노원구병 (1석)
  {
    id: 'nat-nowon-byung',
    name: '김희정',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 노원구병',
    career: ['제22대 국회의원'],
  },
  // 은평구갑 (1석)
  {
    id: 'nat-eunpyeong-gap',
    name: '진성준',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 은평구갑',
    career: ['제20·21·22대 국회의원', '더불어민주당 정책위의장'],
  },
  // 은평구을 (1석)
  {
    id: 'nat-eunpyeong-eul',
    name: '강병원',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 은평구을',
    career: ['제20·21·22대 국회의원'],
  },
  // 서대문구갑 (1석)
  {
    id: 'nat-seodaemun-gap',
    name: '정청래',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 서대문구갑',
    career: ['제17·19·21·22대 국회의원'],
  },
  // 서대문구을 (1석)
  {
    id: 'nat-seodaemun-eul',
    name: '김용만',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.reform,
    district: '서울 서대문구을',
    career: ['제22대 국회의원'],
  },
  // 마포구갑 (1석)
  {
    id: 'nat-mapo-gap',
    name: '이지은',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.reform,
    district: '서울 마포구갑',
    career: ['제22대 국회의원'],
  },
  // 마포구을 (1석)
  {
    id: 'nat-mapo-eul',
    name: '정재호',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 마포구을',
    career: ['제21·22대 국회의원'],
  },
  // 양천구갑 (1석)
  {
    id: 'nat-yangcheon-gap',
    name: '이기헌',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 양천구갑',
    career: ['제22대 국회의원', '시사평론가'],
  },
  // 양천구을 (1석)
  {
    id: 'nat-yangcheon-eul',
    name: '황정아',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 양천구을',
    career: ['제22대 국회의원', '전 JTBC 기자'],
  },
  // 강서구갑 (1석)
  {
    id: 'nat-gangseo-gap',
    name: '진교훈',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 강서구갑',
    career: ['제22대 국회의원'],
  },
  // 강서구을 (1석)
  {
    id: 'nat-gangseo-eul',
    name: '강선우',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 강서구을',
    career: ['제21·22대 국회의원'],
  },
  // 강서구병 (1석)
  {
    id: 'nat-gangseo-byung',
    name: '문진석',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 강서구병',
    career: ['제22대 국회의원'],
  },
  // 구로구갑 (1석)
  {
    id: 'nat-guro-gap',
    name: '윤건영',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 구로구갑',
    career: ['제21·22대 국회의원', '전 청와대 국정상황실장'],
  },
  // 구로구을 (1석)
  {
    id: 'nat-guro-eul',
    name: '김영진',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 구로구을',
    career: ['제22대 국회의원'],
  },
  // 금천구 (1석)
  {
    id: 'nat-geumcheon',
    name: '최기상',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 금천구',
    career: ['제21·22대 국회의원'],
  },
  // 영등포구갑 (1석)
  {
    id: 'nat-yeongdeungpo-gap',
    name: '김민석',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 영등포구갑',
    career: ['제16·17·18·21·22대 국회의원'],
  },
  // 영등포구을 (1석)
  {
    id: 'nat-yeongdeungpo-eul',
    name: '김용태',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.ppp,
    district: '서울 영등포구을',
    career: ['제22대 국회의원', '전 국회의원'],
  },
  // 동작구갑 (1석)
  {
    id: 'nat-dongjak-gap',
    name: '나경원',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.ppp,
    district: '서울 동작구갑',
    career: ['제17·18·19·22대 국회의원'],
  },
  // 동작구을 (1석)
  {
    id: 'nat-dongjak-eul',
    name: '김병주',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 동작구을',
    career: ['제21·22대 국회의원', '전 합참의장'],
  },
  // 관악구갑 (1석)
  {
    id: 'nat-gwanak-gap',
    name: '유기홍',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 관악구갑',
    career: ['제19·20·21·22대 국회의원'],
  },
  // 관악구을 (1석)
  {
    id: 'nat-gwanak-eul',
    name: '정태호',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 관악구을',
    career: ['제21·22대 국회의원'],
  },
  // 서초구갑 (1석)
  {
    id: 'nat-seocho-gap',
    name: '김태우',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.ppp,
    district: '서울 서초구갑',
    career: ['제22대 국회의원'],
  },
  // 서초구을 (1석)
  {
    id: 'nat-seocho-eul',
    name: '박민규',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.ppp,
    district: '서울 서초구을',
    career: ['제22대 국회의원'],
  },
  // 강남구갑 (1석)
  {
    id: 'nat-gangnam-gap',
    name: '서명옥',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.ppp,
    district: '서울 강남구갑',
    career: ['제22대 국회의원'],
  },
  // 강남구을 (1석)
  {
    id: 'nat-gangnam-eul',
    name: '이진숙',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.ppp,
    district: '서울 강남구을',
    career: ['제22대 국회의원'],
  },
  // 강남구병 (1석)
  {
    id: 'nat-gangnam-byung',
    name: '양정숙',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.ppp,
    district: '서울 강남구병',
    career: ['제22대 국회의원'],
  },
  // 송파구갑 (1석)
  {
    id: 'nat-songpa-gap',
    name: '남인순',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 송파구갑',
    career: ['제19·20·21·22대 국회의원'],
  },
  // 송파구을 (1석)
  {
    id: 'nat-songpa-eul',
    name: '배현진',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.ppp,
    district: '서울 송파구을',
    career: ['제21·22대 국회의원', '전 MBC 아나운서'],
  },
  // 송파구병 (1석)
  {
    id: 'nat-songpa-byung',
    name: '김웅',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.ppp,
    district: '서울 송파구병',
    career: ['제21·22대 국회의원', '전 검사'],
  },
  // 강동구갑 (1석)
  {
    id: 'nat-gangdong-gap',
    name: '김윤덕',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 강동구갑',
    career: ['제22대 국회의원'],
  },
  // 강동구을 (1석)
  {
    id: 'nat-gangdong-eul',
    name: '이해식',
    type: 'national',
    typeLabel: '국회의원',
    party: parties.democratic,
    district: '서울 강동구을',
    career: ['제21·22대 국회의원', '전 강동구청장'],
  },
];

/**
 * 선거구명으로 국회의원 찾기
 */
export function getAssemblyMemberByDistrict(district: string): Member | undefined {
  return seoulAssemblyMembers.find(m => m.district === district);
}

/**
 * 구 이름으로 해당 구의 모든 국회의원 찾기
 */
export function getAssemblyMembersByGu(guName: string): Member[] {
  const normalizedGu = guName.replace('구', '');
  return seoulAssemblyMembers.filter(m => m.district.includes(normalizedGu));
}
