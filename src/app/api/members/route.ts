import { NextRequest, NextResponse } from 'next/server';
import { mockMembers, defaultMembers } from '@/lib/api/mockData';

// 행정구역 기반 의원 정보 조회
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const sido = searchParams.get('sido');
  const sigungu = searchParams.get('sigungu');

  if (!sido || !sigungu) {
    return NextResponse.json(
      { error: '시도와 시군구 정보가 필요합니다.' },
      { status: 400 }
    );
  }

  // 목업 데이터에서 조회
  const key = `${sido}-${sigungu}`;
  const members = mockMembers[key];

  if (members) {
    return NextResponse.json({ members });
  }

  // 매핑 없으면 기본 데이터 반환
  return NextResponse.json({ 
    members: defaultMembers,
    message: '해당 지역의 상세 정보가 아직 준비되지 않았습니다.'
  });
}
