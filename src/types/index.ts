// 의원 유형
export type MemberType = 
  | 'national'      // 국회의원
  | 'governor'      // 시도지사
  | 'mayor'         // 시군구청장
  | 'provincial'    // 시도의원
  | 'municipal'     // 기초의원
  | 'superintendent'; // 교육감

// 정당 정보
export interface Party {
  name: string;
  color: string;
}

// 의원 정보
export interface Member {
  id: string;
  name: string;
  type: MemberType;
  typeLabel: string;
  party: Party;
  district: string;       // 선거구
  photo?: string;
  // 상세 정보
  birth?: string;
  career?: string[];
  pledges?: string[];     // 공약
  assets?: string;        // 재산
  criminalRecord?: string; // 전과
  contact?: {
    phone?: string;
    email?: string;
    website?: string;
  };
}

// 행정구역 정보
export interface District {
  sido: string;           // 시도
  sigungu: string;        // 시군구
  dong: string;           // 읍면동
  code: string;           // 행정구역코드
}

// 검색 결과
export interface SearchResult {
  address: string;
  district: District;
}
