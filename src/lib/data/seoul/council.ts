// 서울시의원 데이터 (12대, 107명)
import { Member, Party } from '@/types';

const parties: Record<string, Party> = {
  democratic: { name: '더불어민주당', color: '#004EA2' },
  ppp: { name: '국민의힘', color: '#E61E2B' },
};

export const seoulCouncil: Member[] = [
  // 강남구 (6)
  { id: 'council-강남1', name: '이새날', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '강남구 제1선거구', contact: { phone: '02-2180-8841' } },
  { id: 'council-강남2', name: '김형재', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '강남구 제2선거구', contact: { phone: '02-2180-8621' } },
  { id: 'council-강남3', name: '김현기', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '강남구 제3선거구', contact: { phone: '02-2180-8696' } },
  { id: 'council-강남4', name: '유만희', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '강남구 제4선거구', contact: { phone: '02-2180-8441' } },
  { id: 'council-강남5', name: '김동욱', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '강남구 제5선거구', contact: { phone: '02-2180-8721' } },
  { id: 'council-강남6', name: '김길영', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '강남구 제6선거구', contact: { phone: '02-2180-8531' } },
  
  // 강동구 (5)
  { id: 'council-강동1', name: '김혜지', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '강동구 제1선거구', contact: { phone: '02-2180-8581' } },
  { id: 'council-강동2', name: '이종태', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '강동구 제2선거구', contact: { phone: '02-2180-8371' } },
  { id: 'council-강동3', name: '박춘선', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '강동구 제3선거구', contact: { phone: '02-2180-8351' } },
  { id: 'council-강동4', name: '장태용', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '강동구 제4선거구', contact: { phone: '02-2180-8636' } },
  { id: 'council-강동5', name: '김영철', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '강동구 제5선거구', contact: { phone: '02-2180-8366' } },
  
  // 강북구 (4)
  { id: 'council-강북1', name: '이종환', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '강북구 제1선거구', contact: { phone: '02-2180-8691' } },
  { id: 'council-강북2', name: '이상훈', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '강북구 제2선거구', contact: { phone: '02-2180-8711' } },
  { id: 'council-강북3', name: '이용균', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '강북구 제3선거구', contact: { phone: '02-2180-8661' } },
  { id: 'council-강북4', name: '박수빈', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '강북구 제4선거구', contact: { phone: '02-2180-8521' } },
  
  // 강서구 (5)
  { id: 'council-강서2', name: '강석주', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '강서구 제2선거구', contact: { phone: '02-2180-8576' } },
  { id: 'council-강서3', name: '최진혁', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '강서구 제3선거구', contact: { phone: '02-2180-8396' } },
  { id: 'council-강서4', name: '김춘곤', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '강서구 제4선거구', contact: { phone: '02-2180-8591' } },
  { id: 'council-강서5', name: '김경훈', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '강서구 제5선거구', contact: { phone: '02-2180-8466' } },
  { id: 'council-강서6', name: '경기문', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '강서구 제6선거구', contact: { phone: '02-2180-8571' } },
  
  // 관악구 (3)
  { id: 'council-관악1', name: '송도호', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '관악구 제1선거구', contact: { phone: '02-2180-8656' } },
  { id: 'council-관악2', name: '왕정순', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '관악구 제2선거구', contact: { phone: '02-2180-8766' } },
  { id: 'council-관악3', name: '임만균', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '관악구 제3선거구', contact: { phone: '02-2180-8726' } },
  
  // 광진구 (4)
  { id: 'council-광진1', name: '전병주', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '광진구 제1선거구', contact: { phone: '02-2180-8776' } },
  { id: 'council-광진2', name: '박성연', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '광진구 제2선거구', contact: { phone: '02-2180-8866' } },
  { id: 'council-광진3', name: '김영옥', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '광진구 제3선거구', contact: { phone: '02-2180-8130' } },
  { id: 'council-광진4', name: '김혜영', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '광진구 제4선거구', contact: { phone: '02-2180-8446' } },
  
  // 구로구 (4)
  { id: 'council-구로1', name: '서상열', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '구로구 제1선거구', contact: { phone: '02-2180-8326' } },
  { id: 'council-구로2', name: '김인제', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '구로구 제2선거구', contact: { phone: '02-2180-8536' } },
  { id: 'council-구로3', name: '서호연', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '구로구 제3선거구', contact: { phone: '02-2180-8731' } },
  { id: 'council-구로4', name: '박칠성', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '구로구 제4선거구', contact: { phone: '02-2180-8651' } },
  
  // 금천구 (2)
  { id: 'council-금천1', name: '김성준', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '금천구 제1선거구', contact: { phone: '02-2180-8671' } },
  { id: 'council-금천2', name: '최기찬', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '금천구 제2선거구', contact: { phone: '02-2180-8756' } },
  
  // 노원구 (5)
  { id: 'council-노원1', name: '신동원', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '노원구 제1선거구', contact: { phone: '02-2180-8451' } },
  { id: 'council-노원2', name: '오금란', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '노원구 제2선거구', contact: { phone: '02-2180-8431' } },
  { id: 'council-노원3', name: '봉양순', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '노원구 제3선거구', contact: { phone: '02-2180-8771' } },
  { id: 'council-노원5', name: '윤기섭', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '노원구 제5선거구', contact: { phone: '02-2180-8641' } },
  { id: 'council-노원6', name: '송재혁', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '노원구 제6선거구', contact: { phone: '02-2180-8761' } },
  
  // 도봉구 (4)
  { id: 'council-도봉1', name: '이경숙', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '도봉구 제1선거구', contact: { phone: '02-2180-8461' } },
  { id: 'council-도봉2', name: '홍국표', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '도봉구 제2선거구', contact: { phone: '02-2180-8806' } },
  { id: 'council-도봉3', name: '박석', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '도봉구 제3선거구', contact: { phone: '02-2180-8526' } },
  { id: 'council-도봉4', name: '이은림', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '도봉구 제4선거구', contact: { phone: '02-2180-8546' } },
  
  // 동대문구 (4)
  { id: 'council-동대문1', name: '이병윤', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '동대문구 제1선거구', contact: { phone: '02-2180-8551' } },
  { id: 'council-동대문2', name: '심미경', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '동대문구 제2선거구', contact: { phone: '02-2180-8716' } },
  { id: 'council-동대문3', name: '남궁역', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '동대문구 제3선거구', contact: { phone: '02-2180-8586' } },
  { id: 'council-동대문4', name: '신복자', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '동대문구 제4선거구', contact: { phone: '02-2180-8791' } },
  
  // 동작구 (4)
  { id: 'council-동작1', name: '이봉준', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '동작구 제1선거구', contact: { phone: '02-2180-8601' } },
  { id: 'council-동작2', name: '최민규', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '동작구 제2선거구', contact: { phone: '02-2180-8486' } },
  { id: 'council-동작3', name: '곽향기', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '동작구 제3선거구', contact: { phone: '02-2180-8331' } },
  { id: 'council-동작4', name: '이희원', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '동작구 제4선거구', contact: { phone: '02-2180-8336' } },
  
  // 마포구 (3)
  { id: 'council-마포1', name: '이민석', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '마포구 제1선거구', contact: { phone: '02-2180-8386' } },
  { id: 'council-마포2', name: '소영철', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '마포구 제2선거구', contact: { phone: '02-2180-8346' } },
  { id: 'council-마포4', name: '김기덕', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '마포구 제4선거구', contact: { phone: '02-2180-8481' } },
  
  // 서대문구 (4)
  { id: 'council-서대문1', name: '정지웅', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '서대문구 제1선거구', contact: { phone: '02-2180-8411' } },
  { id: 'council-서대문2', name: '문성호', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '서대문구 제2선거구', contact: { phone: '02-2180-8541' } },
  { id: 'council-서대문3', name: '이승미', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '서대문구 제3선거구', contact: { phone: '02-2180-8746' } },
  { id: 'council-서대문4', name: '김용일', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '서대문구 제4선거구', contact: { phone: '02-2180-8416' } },
  
  // 서초구 (4)
  { id: 'council-서초1', name: '박상혁', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '서초구 제1선거구', contact: { phone: '02-2180-8406' } },
  { id: 'council-서초2', name: '이숙자', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '서초구 제2선거구', contact: { phone: '02-2180-8701' } },
  { id: 'council-서초3', name: '고광민', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '서초구 제3선거구', contact: { phone: '02-2180-8391' } },
  { id: 'council-서초4', name: '최호정', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '서초구 제4선거구', contact: { phone: '02-2180-7605' } },
  
  // 성동구 (4)
  { id: 'council-성동1', name: '박중화', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '성동구 제1선거구', contact: { phone: '02-2180-8686' } },
  { id: 'council-성동2', name: '구미경', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '성동구 제2선거구', contact: { phone: '02-2180-8401' } },
  { id: 'council-성동3', name: '이민옥', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '성동구 제3선거구', contact: { phone: '02-2180-8781' } },
  { id: 'council-성동4', name: '황철규', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '성동구 제4선거구', contact: { phone: '02-2180-8631' } },
  
  // 성북구 (4)
  { id: 'council-성북1', name: '한신', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '성북구 제1선거구', contact: { phone: '02-2180-8831' } },
  { id: 'council-성북2', name: '김원중', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '성북구 제2선거구', contact: { phone: '02-2180-8646' } },
  { id: 'council-성북3', name: '강동길', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '성북구 제3선거구', contact: { phone: '02-2180-8376' } },
  { id: 'council-성북4', name: '김태수', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '성북구 제4선거구', contact: { phone: '02-2180-8426' } },
  
  // 송파구 (6)
  { id: 'council-송파1', name: '김규남', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '송파구 제1선거구', contact: { phone: '02-2180-8321' } },
  { id: 'council-송파2', name: '남창진', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '송파구 제2선거구', contact: { phone: '02-2180-8436' } },
  { id: 'council-송파3', name: '임춘대', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '송파구 제3선거구', contact: { phone: '02-2180-8471' } },
  { id: 'council-송파4', name: '이성배', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '송파구 제4선거구', contact: { phone: '02-2180-8501' } },
  { id: 'council-송파5', name: '유정인', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '송파구 제5선거구', contact: { phone: '02-2180-8736' } },
  { id: 'council-송파6', name: '김원태', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '송파구 제6선거구', contact: { phone: '02-2180-8846' } },
  
  // 양천구 (4)
  { id: 'council-양천1', name: '채수지', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '양천구 제1선거구', contact: { phone: '02-2180-8476' } },
  { id: 'council-양천2', name: '허훈', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '양천구 제2선거구', contact: { phone: '02-2180-8856' } },
  { id: 'council-양천3', name: '우형찬', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '양천구 제3선거구', contact: { phone: '02-2180-8826' } },
  { id: 'council-양천4', name: '이승복', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '양천구 제4선거구', contact: { phone: '02-2180-8596' } },
  
  // 영등포구 (4)
  { id: 'council-영등포1', name: '김재진', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '영등포구 제1선거구', contact: { phone: '02-2180-8606' } },
  { id: 'council-영등포2', name: '김종길', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '영등포구 제2선거구', contact: { phone: '02-2180-8356' } },
  { id: 'council-영등포3', name: '도문열', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '영등포구 제3선거구', contact: { phone: '02-2180-8681' } },
  { id: 'council-영등포4', name: '김지향', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '영등포구 제4선거구', contact: { phone: '02-2180-8341' } },
  
  // 용산구 (2)
  { id: 'council-용산1', name: '김용호', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '용산구 제1선거구', contact: { phone: '02-2180-8626' } },
  { id: 'council-용산2', name: '최유희', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '용산구 제2선거구', contact: { phone: '02-2180-8361' } },
  
  // 은평구 (4)
  { id: 'council-은평1', name: '성흠제', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '은평구 제1선거구', contact: { phone: '02-2180-8821' } },
  { id: 'council-은평2', name: '이병도', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '은평구 제2선거구', contact: { phone: '02-2180-8751' } },
  { id: 'council-은평3', name: '박유진', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '은평구 제3선거구', contact: { phone: '02-2180-8706' } },
  { id: 'council-은평4', name: '정준호', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '은평구 제4선거구', contact: { phone: '02-2180-8871' } },
  
  // 종로구 (2)
  { id: 'council-종로1', name: '윤종복', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '종로구 제1선거구', contact: { phone: '02-2180-8456' } },
  { id: 'council-종로2', name: '임종국', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '종로구 제2선거구', contact: { phone: '02-2180-8811' } },
  
  // 중구 (1)
  { id: 'council-중구1', name: '박영한', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '중구 제1선거구', contact: { phone: '02-2180-8851' } },
  
  // 중랑구 (4)
  { id: 'council-중랑1', name: '이영실', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '중랑구 제1선거구', contact: { phone: '02-2180-8741' } },
  { id: 'council-중랑2', name: '임규호', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '중랑구 제2선거구', contact: { phone: '02-2180-8836' } },
  { id: 'council-중랑3', name: '박승진', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '중랑구 제3선거구', contact: { phone: '02-2180-8666' } },
  { id: 'council-중랑4', name: '민병주', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '중랑구 제4선거구', contact: { phone: '02-2180-8381' } },
  
  // 비례대표 (11)
  { id: 'council-비례1', name: '황유정', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '비례대표', contact: { phone: '02-2180-8491' } },
  { id: 'council-비례2', name: '이상욱', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '비례대표', contact: { phone: '02-2180-8566' } },
  { id: 'council-비례3', name: '윤영희', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '비례대표', contact: { phone: '02-2180-8556' } },
  { id: 'council-비례4', name: '이종배', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '비례대표', contact: { phone: '02-2180-8496' } },
  { id: 'council-비례5', name: '이효원', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '비례대표', contact: { phone: '02-2180-8796' } },
  { id: 'council-비례6', name: '이효진', type: 'provincial', typeLabel: '서울시의원', party: parties.ppp, district: '비례대표' },
  { id: 'council-비례7', name: '이소라', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '비례대표', contact: { phone: '02-2180-8786' } },
  { id: 'council-비례8', name: '박강산', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '비례대표', contact: { phone: '02-2180-8676' } },
  { id: 'council-비례9', name: '아이수루', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '비례대표', contact: { phone: '02-2180-8511' } },
  { id: 'council-비례10', name: '이원형', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '비례대표', contact: { phone: '02-2180-8881' } },
  { id: 'council-비례11', name: '최재란', type: 'provincial', typeLabel: '서울시의원', party: parties.democratic, district: '비례대표', contact: { phone: '02-2180-8516' } },
];

// 구 이름으로 해당 구의 시의원들 찾기
export function findCouncilMembersByGu(guName: string): Member[] {
  const searchTerm = guName.replace('구', '');
  return seoulCouncil.filter(m => m.district.includes(searchTerm) && m.district !== '비례대표');
}

// 비례대표 시의원 목록
export function getProportionalMembers(): Member[] {
  return seoulCouncil.filter(m => m.district === '비례대표');
}
