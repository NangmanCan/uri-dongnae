'use client';

import { useState } from 'react';
import { Member } from '@/types';

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
      {/* 카드 헤더 */}
      <div 
        className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-4">
          {/* 프로필 사진 */}
          <div className="relative flex-shrink-0">
            {member.photo ? (
              <img
                src={member.photo}
                alt={member.name}
                className="w-16 h-16 rounded-full object-cover border-2"
                style={{ borderColor: member.party.color }}
              />
            ) : (
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold"
                style={{ backgroundColor: member.party.color }}
              >
                {member.name[0]}
              </div>
            )}
            {/* 직책 배지 */}
            <span 
              className="absolute -bottom-1 -right-1 px-2 py-0.5 text-[10px] font-medium rounded-full text-white"
              style={{ backgroundColor: member.party.color }}
            >
              {member.typeLabel.slice(0, 3)}
            </span>
          </div>

          {/* 기본 정보 */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-gray-900 truncate">{member.name}</h3>
              <span 
                className="px-2 py-0.5 text-xs font-medium rounded-full text-white flex-shrink-0"
                style={{ backgroundColor: member.party.color }}
              >
                {member.party.name}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-0.5">{member.typeLabel}</p>
            <p className="text-sm text-gray-400 truncate">{member.district}</p>
          </div>

          {/* 확장 아이콘 */}
          <svg 
            className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* 상세 정보 (확장 시) */}
      {isExpanded && (
        <div className="px-4 pb-4 border-t border-gray-100 pt-4 space-y-4">
          {/* 기본 정보 */}
          {member.birth && (
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">기본 정보</h4>
              <p className="text-sm text-gray-700">생년월일: {member.birth}</p>
            </div>
          )}

          {/* 경력 */}
          {member.career && member.career.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">경력</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                {member.career.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-gray-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 공약 */}
          {member.pledges && member.pledges.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">📋 주요 공약</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                {member.pledges.map((pledge, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-500">✓</span>
                    <span>{pledge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 재산 & 전과 */}
          <div className="grid grid-cols-2 gap-4">
            {member.assets && (
              <div className="bg-gray-50 rounded-lg p-3">
                <h4 className="text-xs font-semibold text-gray-500 mb-1">💰 재산</h4>
                <p className="text-sm font-medium text-gray-900">{member.assets}</p>
              </div>
            )}
            {member.criminalRecord !== undefined && (
              <div className="bg-gray-50 rounded-lg p-3">
                <h4 className="text-xs font-semibold text-gray-500 mb-1">📜 전과</h4>
                <p className={`text-sm font-medium ${member.criminalRecord === '없음' ? 'text-green-600' : 'text-red-600'}`}>
                  {member.criminalRecord}
                </p>
              </div>
            )}
          </div>

          {/* 연락처 */}
          {member.contact && (
            <div className="flex flex-wrap gap-2 pt-2">
              {member.contact.phone && (
                <a 
                  href={`tel:${member.contact.phone}`}
                  className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors"
                >
                  📞 {member.contact.phone}
                </a>
              )}
              {member.contact.email && (
                <a 
                  href={`mailto:${member.contact.email}`}
                  className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  ✉️ 이메일
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
