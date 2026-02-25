import { Member, Party } from '@/types';

// 정당 정보
export const parties: Record<string, Party> = {
  democratic: { name: '더불어민주당', color: '#004EA2' },
  ppp: { name: '국민의힘', color: '#E61E2B' },
  reform: { name: '조국혁신당', color: '#004B97' },
  justice: { name: '정의당', color: '#FFCC00' },
  independent: { name: '무소속', color: '#808080' },
};

// 서울시 기준 선거구 → 의원 매핑 (샘플)
export const districtToConstituency: Record<string, string> = {
  // 시도 + 구 → 국회의원 선거구
  '서울특별시-종로구': '서울 종로구',
  '서울특별시-중구': '서울 중구성동구갑',
  '서울특별시-성동구': '서울 중구성동구갑',
  '서울특별시-용산구': '서울 용산구',
  '서울특별시-광진구': '서울 광진구',
  '서울특별시-동대문구': '서울 동대문구갑',
  '서울특별시-중랑구': '서울 중랑구갑',
  '서울특별시-성북구': '서울 성북구갑',
  '서울특별시-강북구': '서울 강북구갑',
  '서울특별시-도봉구': '서울 도봉구갑',
  '서울특별시-노원구': '서울 노원구갑',
  '서울특별시-은평구': '서울 은평구갑',
  '서울특별시-서대문구': '서울 서대문구갑',
  '서울특별시-마포구': '서울 마포구갑',
  '서울특별시-양천구': '서울 양천구갑',
  '서울특별시-강서구': '서울 강서구갑',
  '서울특별시-구로구': '서울 구로구갑',
  '서울특별시-금천구': '서울 금천구',
  '서울특별시-영등포구': '서울 영등포구갑',
  '서울특별시-동작구': '서울 동작구갑',
  '서울특별시-관악구': '서울 관악구갑',
  '서울특별시-서초구': '서울 서초구갑',
  '서울특별시-강남구': '서울 강남구갑',
  '서울특별시-송파구': '서울 송파구갑',
  '서울특별시-강동구': '서울 강동구갑',
};

// 목업 의원 데이터
export const mockMembers: Record<string, Member[]> = {
  '서울특별시-강남구': [
    {
      id: 'nat-1',
      name: '전현희',
      type: 'national',
      typeLabel: '국회의원',
      party: parties.democratic,
      district: '서울 강남구갑',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
      birth: '1965년 7월 15일',
      career: ['제21대 국회의원', '전 국민권익위원회 위원장'],
      pledges: ['청년 주거 지원 확대', '소상공인 세금 감면', '디지털 혁신 가속화'],
      assets: '15억 2천만원',
      criminalRecord: '없음',
      contact: { phone: '02-784-1234', email: 'example@assembly.go.kr' }
    },
    {
      id: 'gov-1',
      name: '오세훈',
      type: 'governor',
      typeLabel: '서울특별시장',
      party: parties.ppp,
      district: '서울특별시',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop',
      birth: '1961년 3월 4일',
      career: ['제33·35·36대 서울특별시장', '전 국회의원'],
      pledges: ['GTX 조기 완공', '청년 일자리 50만개 창출', '서울 재건축 규제 완화'],
      assets: '28억 5천만원',
      criminalRecord: '없음'
    },
    {
      id: 'mayor-1',
      name: '조성명',
      type: 'mayor',
      typeLabel: '강남구청장',
      party: parties.ppp,
      district: '강남구',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
      birth: '1962년 5월 20일',
      career: ['제10대 강남구청장', '전 서울시의원'],
      pledges: ['스마트시티 구축', '노후 아파트 리모델링 지원', '문화시설 확충'],
      assets: '12억 8천만원',
      criminalRecord: '없음'
    },
    {
      id: 'prov-1',
      name: '김형재',
      type: 'provincial',
      typeLabel: '서울시의원',
      party: parties.ppp,
      district: '강남구 제1선거구',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      birth: '1970년 11월 3일',
      career: ['제11대 서울시의회 의원', '전 강남구의원'],
      pledges: ['대중교통 개선', '녹지공간 확대'],
      assets: '8억 3천만원',
      criminalRecord: '없음'
    },
    {
      id: 'muni-1',
      name: '이혜원',
      type: 'municipal',
      typeLabel: '강남구의원',
      party: parties.democratic,
      district: '강남구 가선거구',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
      birth: '1975년 8월 12일',
      career: ['제9대 강남구의회 의원'],
      pledges: ['어린이집 확충', '노인복지 강화'],
      assets: '5억 1천만원',
      criminalRecord: '없음'
    },
    {
      id: 'super-1',
      name: '조희연',
      type: 'superintendent',
      typeLabel: '서울시교육감',
      party: parties.independent,
      district: '서울특별시',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop',
      birth: '1956년 4월 8일',
      career: ['제5·6대 서울특별시교육감', '전 서울대 교수'],
      pledges: ['혁신학교 확대', '학생 인권 보장', '무상급식 확대'],
      assets: '9억 7천만원',
      criminalRecord: '없음'
    },
  ],
  '서울특별시-종로구': [
    {
      id: 'nat-2',
      name: '곽상언',
      type: 'national',
      typeLabel: '국회의원',
      party: parties.democratic,
      district: '서울 종로구',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
      birth: '1971년 2월 28일',
      career: ['제22대 국회의원', '변호사'],
      pledges: ['역사문화 보존', '주거환경 개선', '소상공인 지원'],
      assets: '22억 4천만원',
      criminalRecord: '없음'
    },
    {
      id: 'gov-2',
      name: '오세훈',
      type: 'governor',
      typeLabel: '서울특별시장',
      party: parties.ppp,
      district: '서울특별시',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop',
      birth: '1961년 3월 4일',
      career: ['제33·35·36대 서울특별시장'],
      pledges: ['GTX 조기 완공', '청년 일자리 창출'],
      assets: '28억 5천만원',
      criminalRecord: '없음'
    },
    {
      id: 'mayor-2',
      name: '정문헌',
      type: 'mayor',
      typeLabel: '종로구청장',
      party: parties.ppp,
      district: '종로구',
      birth: '1959년 9월 1일',
      career: ['제8대 종로구청장', '전 국회의원'],
      pledges: ['전통시장 현대화', '주거복지 확대'],
      assets: '18억 2천만원',
      criminalRecord: '없음'
    },
    {
      id: 'super-2',
      name: '조희연',
      type: 'superintendent',
      typeLabel: '서울시교육감',
      party: parties.independent,
      district: '서울특별시',
      birth: '1956년 4월 8일',
      career: ['제5·6대 서울특별시교육감'],
      pledges: ['혁신학교 확대', '무상급식 확대'],
      assets: '9억 7천만원',
      criminalRecord: '없음'
    },
  ],
};

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
