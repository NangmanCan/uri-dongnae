/**
 * 서울시 단체장 및 교육감 데이터 (27명)
 * - 서울시장: 1명
 * - 25개 구청장: 25명
 * - 교육감: 1명
 */

import { Member, Party } from '@/types';

// 정당 정보
const parties: Record<string, Party> = {
  democratic: { name: '더불어민주당', color: '#004EA2' },
  ppp: { name: '국민의힘', color: '#E61E2B' },
  independent: { name: '무소속', color: '#808080' },
};

// 서울시장
export const seoulMayor: Member = {
  id: 'gov-seoul',
  name: '오세훈',
  type: 'governor',
  typeLabel: '서울특별시장',
  party: parties.ppp,
  district: '서울특별시',
  birth: '1961년 3월 4일',
  career: ['제33·35·36대 서울특별시장', '전 제17대 국회의원'],
  pledges: ['GTX 조기 완공', '청년 일자리 50만개 창출', '서울 재건축 규제 완화'],
};

// 서울시 교육감
export const seoulSuperintendent: Member = {
  id: 'super-seoul',
  name: '조희연',
  type: 'superintendent',
  typeLabel: '서울시교육감',
  party: parties.independent,
  district: '서울특별시',
  birth: '1956년 4월 8일',
  career: ['제5·6대 서울특별시교육감', '전 서울대학교 교수'],
  pledges: ['혁신학교 확대', '학생 인권 보장', '무상급식 확대'],
};

// 25개 구청장
export const seoulDistrictMayors: Member[] = [
  {
    id: 'mayor-jongno',
    name: '정문헌',
    type: 'mayor',
    typeLabel: '종로구청장',
    party: parties.ppp,
    district: '종로구',
    career: ['제8대 종로구청장', '전 제17·18·19대 국회의원'],
  },
  {
    id: 'mayor-jung',
    name: '김길성',
    type: 'mayor',
    typeLabel: '중구청장',
    party: parties.ppp,
    district: '중구',
    career: ['제8대 중구청장', '전 서울시의원'],
  },
  {
    id: 'mayor-yongsan',
    name: '박희영',
    type: 'mayor',
    typeLabel: '용산구청장',
    party: parties.ppp,
    district: '용산구',
    career: ['제8대 용산구청장', '전 용산구의원'],
  },
  {
    id: 'mayor-seongdong',
    name: '정원오',
    type: 'mayor',
    typeLabel: '성동구청장',
    party: parties.democratic,
    district: '성동구',
    career: ['제6·7·8대 성동구청장'],
  },
  {
    id: 'mayor-gwangjin',
    name: '김경호',
    type: 'mayor',
    typeLabel: '광진구청장',
    party: parties.democratic,
    district: '광진구',
    career: ['제8대 광진구청장', '전 서울시의원'],
  },
  {
    id: 'mayor-dongdaemun',
    name: '이필형',
    type: 'mayor',
    typeLabel: '동대문구청장',
    party: parties.democratic,
    district: '동대문구',
    career: ['제7·8대 동대문구청장'],
  },
  {
    id: 'mayor-jungnang',
    name: '류경기',
    type: 'mayor',
    typeLabel: '중랑구청장',
    party: parties.democratic,
    district: '중랑구',
    career: ['제7·8대 중랑구청장'],
  },
  {
    id: 'mayor-seongbuk',
    name: '이승로',
    type: 'mayor',
    typeLabel: '성북구청장',
    party: parties.democratic,
    district: '성북구',
    career: ['제7·8대 성북구청장'],
  },
  {
    id: 'mayor-gangbuk',
    name: '이순희',
    type: 'mayor',
    typeLabel: '강북구청장',
    party: parties.democratic,
    district: '강북구',
    career: ['제8대 강북구청장'],
  },
  {
    id: 'mayor-dobong',
    name: '오언석',
    type: 'mayor',
    typeLabel: '도봉구청장',
    party: parties.democratic,
    district: '도봉구',
    career: ['제7·8대 도봉구청장'],
  },
  {
    id: 'mayor-nowon',
    name: '오승록',
    type: 'mayor',
    typeLabel: '노원구청장',
    party: parties.ppp,
    district: '노원구',
    career: ['제7·8대 노원구청장'],
  },
  {
    id: 'mayor-eunpyeong',
    name: '김미경',
    type: 'mayor',
    typeLabel: '은평구청장',
    party: parties.democratic,
    district: '은평구',
    career: ['제7·8대 은평구청장'],
  },
  {
    id: 'mayor-seodaemun',
    name: '이성헌',
    type: 'mayor',
    typeLabel: '서대문구청장',
    party: parties.ppp,
    district: '서대문구',
    career: ['제8대 서대문구청장', '전 서울시의원'],
  },
  {
    id: 'mayor-mapo',
    name: '박강수',
    type: 'mayor',
    typeLabel: '마포구청장',
    party: parties.ppp,
    district: '마포구',
    career: ['제8대 마포구청장', '전 마포구의원'],
  },
  {
    id: 'mayor-yangcheon',
    name: '이기재',
    type: 'mayor',
    typeLabel: '양천구청장',
    party: parties.democratic,
    district: '양천구',
    career: ['제8대 양천구청장', '전 서울시의원'],
  },
  {
    id: 'mayor-gangseo',
    name: '김태우',
    type: 'mayor',
    typeLabel: '강서구청장',
    party: parties.ppp,
    district: '강서구',
    career: ['제8대 강서구청장'],
  },
  {
    id: 'mayor-guro',
    name: '문헌일',
    type: 'mayor',
    typeLabel: '구로구청장',
    party: parties.democratic,
    district: '구로구',
    career: ['제8대 구로구청장'],
  },
  {
    id: 'mayor-geumcheon',
    name: '유성훈',
    type: 'mayor',
    typeLabel: '금천구청장',
    party: parties.democratic,
    district: '금천구',
    career: ['제6·7·8대 금천구청장'],
  },
  {
    id: 'mayor-yeongdeungpo',
    name: '최호권',
    type: 'mayor',
    typeLabel: '영등포구청장',
    party: parties.ppp,
    district: '영등포구',
    career: ['제8대 영등포구청장', '전 서울시의원'],
  },
  {
    id: 'mayor-dongjak',
    name: '박일하',
    type: 'mayor',
    typeLabel: '동작구청장',
    party: parties.democratic,
    district: '동작구',
    career: ['제8대 동작구청장', '전 서울시의원'],
  },
  {
    id: 'mayor-gwanak',
    name: '박준희',
    type: 'mayor',
    typeLabel: '관악구청장',
    party: parties.democratic,
    district: '관악구',
    career: ['제7·8대 관악구청장'],
  },
  {
    id: 'mayor-seocho',
    name: '전성수',
    type: 'mayor',
    typeLabel: '서초구청장',
    party: parties.ppp,
    district: '서초구',
    career: ['제8대 서초구청장', '변호사'],
  },
  {
    id: 'mayor-gangnam',
    name: '조성명',
    type: 'mayor',
    typeLabel: '강남구청장',
    party: parties.ppp,
    district: '강남구',
    career: ['제10대 강남구청장', '전 서울시의원'],
  },
  {
    id: 'mayor-songpa',
    name: '서강석',
    type: 'mayor',
    typeLabel: '송파구청장',
    party: parties.ppp,
    district: '송파구',
    career: ['제8대 송파구청장'],
  },
  {
    id: 'mayor-gangdong',
    name: '이정훈',
    type: 'mayor',
    typeLabel: '강동구청장',
    party: parties.democratic,
    district: '강동구',
    career: ['제7·8대 강동구청장'],
  },
];

/**
 * 구청장을 구 이름으로 찾기
 */
export function getDistrictMayor(guName: string): Member | undefined {
  const normalized = guName.replace('구', '');
  return seoulDistrictMayors.find(m => m.district.includes(normalized));
}

/**
 * 모든 단체장 목록 (시장 + 구청장)
 */
export function getAllLeaders(): Member[] {
  return [seoulMayor, ...seoulDistrictMayors];
}
