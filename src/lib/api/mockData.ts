/**
 * 서울시 의원 데이터 통합 모듈
 * 실제 데이터 기반 (제22대 국회, 제8대 지방선거)
 */

import { Member, Party } from '@/types';
import { seoulAssemblyMembers, getAssemblyMembersByGu, parties as assemblyParties } from './assembly';
import { seoulMayor, seoulSuperintendent, seoulDistrictMayors, getDistrictMayor } from '../data/seoul-leaders';
import { seoulCouncilMembers, getCouncilMembersByGu } from '../data/seoul-council';
import { guToConstituencies, getConstituencyByDong } from '../data/district-mapping';

// 정당 정보 내보내기
export const parties: Record<string, Party> = assemblyParties;

// 서울시 기준 선거구 → 의원 매핑
// 동 레벨 매핑은 district-mapping.ts 사용
export const districtToConstituency: Record<string, string> = {};

// 25개 구 모두에 대해 기본 매핑 생성
Object.entries(guToConstituencies).forEach(([gu, constituencies]) => {
  districtToConstituency[`서울특별시-${gu}`] = constituencies[0];
});

/**
 * 구 이름으로 해당 구의 모든 의원 정보 조회
 * @param sido 시도 (예: '서울특별시')
 * @param sigungu 시군구 (예: '강남구')
 * @param dong 읍면동 (선택, 예: '삼성동')
 */
export function getMembersByDistrict(sido: string, sigungu: string, dong?: string): Member[] {
  // 서울만 지원
  if (!sido.includes('서울')) {
    return defaultMembers;
  }

  const guName = sigungu.replace('구', '') + '구';
  const members: Member[] = [];

  // 1. 국회의원 (해당 구의 모든 국회의원)
  const assemblyMembers = getAssemblyMembersByGu(guName);
  
  // 동 이름으로 정확한 선거구 찾기 (분구인 경우)
  if (dong && assemblyMembers.length > 1) {
    const exactConstituency = getConstituencyByDong(guName, dong);
    if (exactConstituency) {
      const exactMember = assemblyMembers.find(m => m.district === exactConstituency);
      if (exactMember) {
        members.push(exactMember);
      }
    } else {
      // 매칭 안되면 모든 국회의원 추가
      members.push(...assemblyMembers);
    }
  } else {
    members.push(...assemblyMembers);
  }

  // 2. 서울시장 (모든 구에 공통)
  members.push(seoulMayor);

  // 3. 구청장
  const mayor = getDistrictMayor(guName);
  if (mayor) {
    members.push(mayor);
  }

  // 4. 서울시의원 (해당 구)
  const councilMembers = getCouncilMembersByGu(guName);
  members.push(...councilMembers);

  // 5. 서울시교육감 (모든 구에 공통)
  members.push(seoulSuperintendent);

  return members;
}

// 캐시용 목업 의원 데이터 (레거시 호환)
export const mockMembers: Record<string, Member[]> = {};

// 25개 구 모두에 대해 데이터 생성
const seoulDistricts = [
  '종로구', '중구', '용산구', '성동구', '광진구',
  '동대문구', '중랑구', '성북구', '강북구', '도봉구',
  '노원구', '은평구', '서대문구', '마포구', '양천구',
  '강서구', '구로구', '금천구', '영등포구', '동작구',
  '관악구', '서초구', '강남구', '송파구', '강동구'
];

seoulDistricts.forEach(gu => {
  const key = `서울특별시-${gu}`;
  mockMembers[key] = getMembersByDistrict('서울특별시', gu);
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
    pledges: ['현재 서울시만 지원합니다. 다른 지역은 준비 중입니다.'],
  },
];

/**
 * 행정구역 키로 의원 목록 조회 (레거시 호환)
 */
export function getMembersByKey(key: string): Member[] {
  return mockMembers[key] || defaultMembers;
}

/**
 * 모든 국회의원 조회
 */
export function getAllAssemblyMembers(): Member[] {
  return seoulAssemblyMembers;
}

/**
 * 모든 구청장 조회
 */
export function getAllDistrictMayors(): Member[] {
  return seoulDistrictMayors;
}

/**
 * 모든 서울시의원 조회
 */
export function getAllCouncilMembers(): Member[] {
  return seoulCouncilMembers;
}
