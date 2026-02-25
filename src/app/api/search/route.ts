import { NextRequest, NextResponse } from 'next/server';

// 카카오 주소 API 호출 (API 키 없으면 목업 응답)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json({ error: '검색어를 입력해주세요.' }, { status: 400 });
  }

  const kakaoApiKey = process.env.KAKAO_REST_API_KEY;

  // 카카오 API 키가 있으면 실제 API 호출
  if (kakaoApiKey) {
    try {
      const response = await fetch(
        `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(query)}`,
        {
          headers: {
            Authorization: `KakaoAK ${kakaoApiKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Kakao API error');
      }

      const data = await response.json();
      
      // 시도명 정규화 (카카오 API는 "서울" 반환, 우리는 "서울특별시" 사용)
      const normalizeSido = (sido: string): string => {
        const mapping: Record<string, string> = {
          '서울': '서울특별시',
          '부산': '부산광역시',
          '대구': '대구광역시',
          '인천': '인천광역시',
          '광주': '광주광역시',
          '대전': '대전광역시',
          '울산': '울산광역시',
          '세종': '세종특별자치시',
          '경기': '경기도',
          '강원': '강원특별자치도',
          '충북': '충청북도',
          '충남': '충청남도',
          '전북': '전북특별자치도',
          '전남': '전라남도',
          '경북': '경상북도',
          '경남': '경상남도',
          '제주': '제주특별자치도',
        };
        return mapping[sido] || sido;
      };

      // 주소 데이터 파싱
      const results = data.documents.map((doc: Record<string, unknown>) => {
        const address = doc.address as Record<string, string> | null;
        return {
          address: doc.address_name as string,
          district: {
            sido: normalizeSido(address?.region_1depth_name || ''),
            sigungu: address?.region_2depth_name || '',
            dong: address?.region_3depth_name || '',
            code: address?.b_code || '',
          },
        };
      });

      return NextResponse.json({ results });
    } catch (error) {
      console.error('Kakao API error:', error);
      // 실패시 목업 데이터로 폴백
    }
  }

  // 목업 데이터 응답
  const mockResults = [
    {
      address: '서울특별시 강남구 역삼동',
      district: { sido: '서울특별시', sigungu: '강남구', dong: '역삼동', code: '1168010100' },
    },
    {
      address: '서울특별시 강남구 삼성동',
      district: { sido: '서울특별시', sigungu: '강남구', dong: '삼성동', code: '1168010200' },
    },
    {
      address: '서울특별시 종로구 청운효자동',
      district: { sido: '서울특별시', sigungu: '종로구', dong: '청운효자동', code: '1111010100' },
    },
  ].filter(r => 
    r.address.includes(query) || 
    query.includes('강남') || 
    query.includes('종로') ||
    query.includes('서울')
  );

  // 쿼리에 따라 목업 결과 조정
  if (query.includes('강남') || query.includes('역삼')) {
    return NextResponse.json({
      results: [{
        address: '서울특별시 강남구 역삼동',
        district: { sido: '서울특별시', sigungu: '강남구', dong: '역삼동', code: '1168010100' },
      }]
    });
  }
  
  if (query.includes('종로')) {
    return NextResponse.json({
      results: [{
        address: '서울특별시 종로구 청운효자동',
        district: { sido: '서울특별시', sigungu: '종로구', dong: '청운효자동', code: '1111010100' },
      }]
    });
  }

  return NextResponse.json({ results: mockResults.length > 0 ? mockResults : [{
    address: '서울특별시 강남구 역삼동',
    district: { sido: '서울특별시', sigungu: '강남구', dong: '역삼동', code: '1168010100' },
  }] });
}
