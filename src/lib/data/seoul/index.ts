// 서울시 의원 데이터 통합 export
export { seoulAssembly, findAssemblyMember, findAssemblyMembersByGu } from './assembly';
export { seoulCouncil, findCouncilMembersByGu, getProportionalMembers } from './council';
export { seoulMayors, findMayor } from './mayors';
export { seoulGovernor, seoulSuperintendent, seoulLeaders } from './governor';

import { Member } from '@/types';
import { seoulAssembly, findAssemblyMembersByGu } from './assembly';
import { seoulCouncil, findCouncilMembersByGu } from './council';
import { seoulMayors, findMayor } from './mayors';
import { seoulGovernor, seoulSuperintendent } from './governor';

// 서울 25개 구 목록
export const seoulDistricts = [
  '종로구', '중구', '용산구', '성동구', '광진구',
  '동대문구', '중랑구', '성북구', '강북구', '도봉구',
  '노원구', '은평구', '서대문구', '마포구', '양천구',
  '강서구', '구로구', '금천구', '영등포구', '동작구',
  '관악구', '서초구', '강남구', '송파구', '강동구',
];

// 국회의원 선거구 매핑 (행정구역 → 선거구)
// 갑/을/병 구분이 필요한 구의 경우 해당 구의 모든 의원을 반환
export const constituencyMapping: Record<string, string[]> = {
  '종로구': ['서울 종로구'],
  '중구': ['서울 중구·성동구갑', '서울 중구·성동구을'],
  '용산구': ['서울 용산구'],
  '성동구': ['서울 중구·성동구갑', '서울 중구·성동구을'],
  '광진구': ['서울 광진구갑', '서울 광진구을'],
  '동대문구': ['서울 동대문구갑', '서울 동대문구을'],
  '중랑구': ['서울 중랑구갑', '서울 중랑구을'],
  '성북구': ['서울 성북구갑', '서울 성북구을'],
  '강북구': ['서울 강북구갑', '서울 강북구을'],
  '도봉구': ['서울 도봉구갑', '서울 도봉구을'],
  '노원구': ['서울 노원구갑', '서울 노원구을'],
  '은평구': ['서울 은평구갑', '서울 은평구을'],
  '서대문구': ['서울 서대문구갑', '서울 서대문구을'],
  '마포구': ['서울 마포구갑', '서울 마포구을'],
  '양천구': ['서울 양천구갑', '서울 양천구을'],
  '강서구': ['서울 강서구갑', '서울 강서구을', '서울 강서구병'],
  '구로구': ['서울 구로구갑', '서울 구로구을'],
  '금천구': ['서울 금천구'],
  '영등포구': ['서울 영등포구갑', '서울 영등포구을'],
  '동작구': ['서울 동작구갑', '서울 동작구을'],
  '관악구': ['서울 관악구갑', '서울 관악구을'],
  '서초구': ['서울 서초구갑', '서울 서초구을'],
  '강남구': ['서울 강남구갑', '서울 강남구을', '서울 강남구병'],
  '송파구': ['서울 송파구갑', '서울 송파구을', '서울 송파구병'],
  '강동구': ['서울 강동구갑', '서울 강동구을'],
};

// 구 이름으로 해당 구의 모든 대표자들 조회
export function getMembersByGu(guName: string): Member[] {
  const result: Member[] = [];
  
  // 1. 서울시장 + 교육감 (모든 구 공통)
  result.push(seoulGovernor, seoulSuperintendent);
  
  // 2. 구청장
  const mayor = findMayor(guName);
  if (mayor) result.push(mayor);
  
  // 3. 국회의원 (해당 구)
  const assemblyMembers = findAssemblyMembersByGu(guName);
  result.push(...assemblyMembers);
  
  // 4. 서울시의원 (해당 구)
  const councilMembers = findCouncilMembersByGu(guName);
  result.push(...councilMembers);
  
  return result;
}

// 전체 데이터 개수
export function getDataStats() {
  return {
    assembly: seoulAssembly.length,
    council: seoulCouncil.length,
    mayors: seoulMayors.length,
    total: seoulAssembly.length + seoulCouncil.length + seoulMayors.length + 2, // +2 for governor, superintendent
  };
}
