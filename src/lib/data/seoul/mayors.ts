// 서울시 25개 구청장 데이터 (2022년 지방선거 당선)
import { Member, Party } from '@/types';

const parties: Record<string, Party> = {
  democratic: { name: '더불어민주당', color: '#004EA2' },
  ppp: { name: '국민의힘', color: '#E61E2B' },
};

export const seoulMayors: Member[] = [
  { id: 'mayor-종로', name: '정문헌', type: 'mayor', typeLabel: '구청장', party: parties.ppp, district: '종로구', career: ['제8대 종로구청장', '전 국회의원'] },
  { id: 'mayor-중구', name: '김길성', type: 'mayor', typeLabel: '구청장', party: parties.ppp, district: '중구', career: ['제10대 중구청장'] },
  { id: 'mayor-용산', name: '박희영', type: 'mayor', typeLabel: '구청장', party: parties.ppp, district: '용산구', career: ['제8대 용산구청장'] },
  { id: 'mayor-성동', name: '정원오', type: 'mayor', typeLabel: '구청장', party: parties.democratic, district: '성동구', career: ['제8대 성동구청장'] },
  { id: 'mayor-광진', name: '김경호', type: 'mayor', typeLabel: '구청장', party: parties.ppp, district: '광진구', career: ['제8대 광진구청장'] },
  { id: 'mayor-동대문', name: '이필형', type: 'mayor', typeLabel: '구청장', party: parties.ppp, district: '동대문구', career: ['제8대 동대문구청장'] },
  { id: 'mayor-중랑', name: '류경기', type: 'mayor', typeLabel: '구청장', party: parties.democratic, district: '중랑구', career: ['제8대 중랑구청장'] },
  { id: 'mayor-성북', name: '이승로', type: 'mayor', typeLabel: '구청장', party: parties.democratic, district: '성북구', career: ['제7-8대 성북구청장', '재선'] },
  { id: 'mayor-강북', name: '이순희', type: 'mayor', typeLabel: '구청장', party: parties.democratic, district: '강북구', career: ['제8대 강북구청장'] },
  { id: 'mayor-도봉', name: '오언석', type: 'mayor', typeLabel: '구청장', party: parties.ppp, district: '도봉구', career: ['제8대 도봉구청장'] },
  { id: 'mayor-노원', name: '오승록', type: 'mayor', typeLabel: '구청장', party: parties.democratic, district: '노원구', career: ['제7-8대 노원구청장', '재선'] },
  { id: 'mayor-은평', name: '김미경', type: 'mayor', typeLabel: '구청장', party: parties.democratic, district: '은평구', career: ['제7-8대 은평구청장', '재선'] },
  { id: 'mayor-서대문', name: '이성헌', type: 'mayor', typeLabel: '구청장', party: parties.ppp, district: '서대문구', career: ['제8대 서대문구청장'] },
  { id: 'mayor-마포', name: '박강수', type: 'mayor', typeLabel: '구청장', party: parties.ppp, district: '마포구', career: ['제8대 마포구청장'] },
  { id: 'mayor-양천', name: '이기재', type: 'mayor', typeLabel: '구청장', party: parties.ppp, district: '양천구', career: ['제8대 양천구청장'] },
  { id: 'mayor-강서', name: '김태우', type: 'mayor', typeLabel: '구청장', party: parties.ppp, district: '강서구', career: ['제8대 강서구청장'] },
  { id: 'mayor-구로', name: '문헌일', type: 'mayor', typeLabel: '구청장', party: parties.ppp, district: '구로구', career: ['제8대 구로구청장'] },
  { id: 'mayor-금천', name: '유성훈', type: 'mayor', typeLabel: '구청장', party: parties.democratic, district: '금천구', career: ['제7-8대 금천구청장', '재선'] },
  { id: 'mayor-영등포', name: '최호권', type: 'mayor', typeLabel: '구청장', party: parties.ppp, district: '영등포구', career: ['제8대 영등포구청장'] },
  { id: 'mayor-동작', name: '박일하', type: 'mayor', typeLabel: '구청장', party: parties.ppp, district: '동작구', career: ['제8대 동작구청장'] },
  { id: 'mayor-관악', name: '박준희', type: 'mayor', typeLabel: '구청장', party: parties.democratic, district: '관악구', career: ['제7-8대 관악구청장', '재선'] },
  { id: 'mayor-서초', name: '전성수', type: 'mayor', typeLabel: '구청장', party: parties.ppp, district: '서초구', career: ['제8대 서초구청장'] },
  { id: 'mayor-강남', name: '조성명', type: 'mayor', typeLabel: '구청장', party: parties.ppp, district: '강남구', career: ['제10대 강남구청장'] },
  { id: 'mayor-송파', name: '서강석', type: 'mayor', typeLabel: '구청장', party: parties.ppp, district: '송파구', career: ['제8대 송파구청장'] },
  { id: 'mayor-강동', name: '이수희', type: 'mayor', typeLabel: '구청장', party: parties.ppp, district: '강동구', career: ['제8대 강동구청장'] },
];

// 구 이름으로 구청장 찾기
export function findMayor(guName: string): Member | undefined {
  const searchTerm = guName.replace('구', '');
  return seoulMayors.find(m => m.district.includes(searchTerm));
}
