'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { assetsData, parties, positionCategories as importedPositionCategories, formatCurrency, formatChange } from '@/lib/data/assets';
import { AssetInfo } from '@/types';

type SortKey = 'totalAssets' | 'realEstate' | 'financial' | 'change';

export default function AssetsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedParty, setSelectedParty] = useState<string>('전체');
  const [selectedPosition, setSelectedPosition] = useState<string>('전체');
  const [sortBy, setSortBy] = useState<SortKey>('totalAssets');
  const [showTop, setShowTop] = useState<number>(20);

  // 직책 카테고리 (assets.ts에서 import)
  const positionCategories = useMemo(() => {
    return importedPositionCategories.map(cat => cat.label);
  }, []);

  // 필터링 및 정렬
  const filteredAssets = useMemo(() => {
    let result = [...assetsData];

    // 검색 필터
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        asset => 
          asset.name.toLowerCase().includes(query) ||
          asset.position.toLowerCase().includes(query) ||
          asset.party.toLowerCase().includes(query)
      );
    }

    // 정당 필터
    if (selectedParty !== '전체') {
      result = result.filter(asset => asset.party === selectedParty);
    }

    // 직책 필터
    if (selectedPosition !== '전체') {
      result = result.filter(asset => {
        const pos = asset.position.toLowerCase();
        
        switch (selectedPosition) {
          case '대통령':
            return pos.includes('대통령') && !pos.includes('실') && !pos.includes('비서');
          case '행정부':
            return pos.includes('장관') || pos.includes('차관') || pos.includes('국무총리');
          case '대통령실':
            return pos.includes('대통령실') || pos.includes('비서실') || pos.includes('수석') || 
                   (pos.includes('비서') && pos.includes('대통령'));
          case '입법부':
            return pos.includes('국회의원') || pos.includes('국회의장') || pos.includes('국회부의장');
          case '사법부':
            return pos.includes('대법') || pos.includes('법관');
          case '헌법기관':
            return pos.includes('헌법') || pos.includes('감사원') || pos.includes('국정원') || 
                   pos.includes('검찰총장') || pos.includes('경찰청장');
          case '지방정부':
            return pos.includes('시장') || pos.includes('도지사') || pos.includes('구청장') || pos.includes('교육감');
          default:
            return true;
        }
      });
    }

    // 정렬
    result.sort((a, b) => {
      if (sortBy === 'change') {
        return Math.abs(b.change) - Math.abs(a.change);
      }
      return b[sortBy] - a[sortBy];
    });

    return result.slice(0, showTop);
  }, [searchQuery, selectedParty, selectedPosition, sortBy, showTop]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-gradient-to-r from-slate-900 to-blue-900 text-white sticky top-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🏛️</span>
              <span className="font-bold text-lg">우리동네 대표</span>
            </Link>
            <nav className="flex gap-1">
              <Link 
                href="/"
                className="px-3 py-1.5 rounded-full text-sm text-blue-200 hover:bg-white/10 transition-colors"
              >
                검색
              </Link>
              <Link 
                href="/assets"
                className="px-3 py-1.5 rounded-full text-sm bg-white/20 text-white"
              >
                💰 재산
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* 페이지 타이틀 */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">공직자 재산 공개</h1>
          <p className="text-gray-500 text-sm mt-1">
            공직자윤리위원회 재산공개 자료 기반 (2025~2026년)
          </p>
        </div>

        {/* 검색 & 필터 */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-6 border border-gray-100">
          {/* 검색 */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="이름, 직책, 정당으로 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-10 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg 
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* 필터 옵션 */}
          <div className="flex flex-wrap gap-3">
            {/* 정당 필터 */}
            <select
              value={selectedParty}
              onChange={(e) => setSelectedParty(e.target.value)}
              className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="전체">전체 정당</option>
              {parties.map(party => (
                <option key={party} value={party}>{party}</option>
              ))}
            </select>

            {/* 직책 필터 */}
            <select
              value={selectedPosition}
              onChange={(e) => setSelectedPosition(e.target.value)}
              className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {positionCategories.map(pos => (
                <option key={pos} value={pos}>{pos}</option>
              ))}
            </select>

            {/* 정렬 */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortKey)}
              className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="totalAssets">총 재산순</option>
              <option value="realEstate">부동산순</option>
              <option value="financial">금융자산순</option>
              <option value="change">증감폭순</option>
            </select>

            {/* 표시 개수 */}
            <select
              value={showTop}
              onChange={(e) => setShowTop(Number(e.target.value))}
              className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={10}>상위 10명</option>
              <option value={20}>상위 20명</option>
              <option value={50}>상위 50명</option>
              <option value={100}>전체</option>
            </select>
          </div>
        </div>

        {/* 결과 카운트 */}
        <div className="mb-4 text-sm text-gray-500">
          총 {filteredAssets.length}명
        </div>

        {/* 재산 카드 목록 */}
        <div className="grid gap-4 md:grid-cols-2">
          {filteredAssets.map((asset, index) => (
            <AssetCard key={asset.memberId} asset={asset} rank={index + 1} />
          ))}
        </div>

        {filteredAssets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">검색 결과가 없습니다.</p>
          </div>
        )}

        {/* 면책 조항 */}
        <div className="mt-8 text-center text-xs text-gray-400">
          <p>* 본 자료는 공직자윤리위원회 공개 자료를 기반으로 하며, 실제와 다를 수 있습니다.</p>
          <p className="mt-1">데이터 기준: 2025년 정기공개 + 2026년 1월 수시공개 (관보 제2026-1호)</p>
        </div>
      </div>
    </main>
  );
}

// 재산 카드 컴포넌트
function AssetCard({ asset, rank }: { asset: AssetInfo; rank: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const changeInfo = formatChange(asset.change);

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
      <div 
        className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start gap-4">
          {/* 순위 */}
          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {rank}
          </div>

          {/* 기본 정보 */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg font-bold text-gray-900">{asset.name}</h3>
              <span 
                className="px-2 py-0.5 text-xs font-medium rounded-full text-white"
                style={{ backgroundColor: asset.partyColor }}
              >
                {asset.party}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-0.5">{asset.position}</p>
            
            {/* 총 재산 */}
            <div className="mt-3">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900">
                  {formatCurrency(asset.totalAssets)}
                </span>
                <span className={`text-sm font-medium ${changeInfo.color}`}>
                  {changeInfo.text}
                </span>
              </div>
            </div>
          </div>

          {/* 확장 아이콘 */}
          <svg 
            className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* 상세 정보 */}
      {isExpanded && (
        <div className="px-4 pb-4 border-t border-gray-100 pt-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-blue-50 rounded-xl p-3 text-center">
              <p className="text-xs text-blue-600 font-medium mb-1">🏠 부동산</p>
              <p className="text-sm font-bold text-gray-900">{formatCurrency(asset.realEstate)}</p>
              <p className="text-xs text-gray-500 mt-1">
                {((asset.realEstate / asset.totalAssets) * 100).toFixed(1)}%
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-3 text-center">
              <p className="text-xs text-green-600 font-medium mb-1">💳 금융자산</p>
              <p className="text-sm font-bold text-gray-900">{formatCurrency(asset.financial)}</p>
              <p className="text-xs text-gray-500 mt-1">
                {((asset.financial / asset.totalAssets) * 100).toFixed(1)}%
              </p>
            </div>
            <div className="bg-purple-50 rounded-xl p-3 text-center">
              <p className="text-xs text-purple-600 font-medium mb-1">📦 기타자산</p>
              <p className="text-sm font-bold text-gray-900">{formatCurrency(asset.others)}</p>
              <p className="text-xs text-gray-500 mt-1">
                {((asset.others / asset.totalAssets) * 100).toFixed(1)}%
              </p>
            </div>
          </div>

          {/* 증감 상세 */}
          <div className="mt-3 bg-gray-50 rounded-xl p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">전년 대비 증감</span>
              <span className={`font-bold ${changeInfo.color}`}>
                {changeInfo.text}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
