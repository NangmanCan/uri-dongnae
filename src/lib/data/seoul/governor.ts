// 서울특별시장 + 서울시교육감 데이터
import { Member, Party } from '@/types';

const parties: Record<string, Party> = {
  ppp: { name: '국민의힘', color: '#E61E2B' },
  independent: { name: '무소속', color: '#808080' },
};

// 서울특별시장 (오세훈, 36대)
export const seoulGovernor: Member = {
  id: 'governor-seoul',
  name: '오세훈',
  type: 'governor',
  typeLabel: '서울특별시장',
  party: parties.ppp,
  district: '서울특별시',
  birth: '1961년 3월 4일',
  career: [
    '제33·35·36대 서울특별시장',
    '전 국회의원 (서울 강남구, 15·16대)',
    '전 서울시 홍보기획관',
  ],
  pledges: [
    'GTX 조기 완공',
    '청년 일자리 50만개 창출',
    '서울 재건축·재개발 규제 완화',
    '돈 걱정 없는 아이 양육',
    '똑똑한 디지털 서울 구현',
  ],
  contact: {
    phone: '02-2133-5000',
    website: 'https://www.seoul.go.kr',
  },
};

// 서울시교육감 (조희연, 4선)
export const seoulSuperintendent: Member = {
  id: 'superintendent-seoul',
  name: '조희연',
  type: 'superintendent',
  typeLabel: '서울시교육감',
  party: parties.independent,
  district: '서울특별시',
  birth: '1956년 4월 8일',
  career: [
    '제5·6대 서울특별시교육감 (4선)',
    '전 서울대학교 교육학과 교수',
    '전 참여연대 사회복지위원장',
  ],
  pledges: [
    '혁신학교 확대',
    '학생 인권 보장 강화',
    '무상급식 및 친환경 급식',
    '고교학점제 대비',
    '교육 불평등 해소',
  ],
  contact: {
    phone: '02-1396',
    website: 'https://www.sen.go.kr',
  },
};

// 서울시 광역 지도자 목록
export const seoulLeaders: Member[] = [seoulGovernor, seoulSuperintendent];
