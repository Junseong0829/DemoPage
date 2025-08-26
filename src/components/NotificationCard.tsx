import React from 'react';
import { Link } from "@tanstack/react-router";

interface NotificationItem {
  id: number;
  number: string;
  title: string;
  description: string;
  thumbnail: string;
  timeAgo: string;
}

const NotificationCard: React.FC = () => {
  const notifications: NotificationItem[] = [
    {
      id: 1,
      number: "29",
      title: "내가 본 헌터 신상 입고!",
      description: "(광고) 29CM에서만 ~50% 할인해요.",
      thumbnail: "/hunter-shoe.jpg",
      timeAgo: "1m ago"
    },
    {
      id: 2,
      number: "29",
      title: "내가 본 인에이 단독할인 시작!",
      description: "(광고) 29CM에서만 ~40% 할인해요.",
      thumbnail: "/inae-lingerie.jpg",
      timeAgo: "1m ago"
    },
    {
      id: 3,
      number: "29",
      title: "내가 본 드파운드 단독신상 입고!",
      description: "(광고) 송효진님 품절되기 전에 확인하세요.",
      thumbnail: "/depound-hair.jpg",
      timeAgo: "1m ago"
    },
    {
      id: 4,
      number: "29",
      title: "내가 본 마리떼 프랑소와 저버 단독신상 입고!",
      description: "(광고) 지금 ~30% 할인 중이예요.",
      thumbnail: "/marithe-tshirt.jpg",
      timeAgo: "1m ago"
    }
  ];

  return (
    <div className="min-h-screen bg-white p-4 pt-8">
      {/* iPhone 홈 인디케이터 시뮬레이션 */}
      <div className="max-w-md mx-auto">
        {/* 상단 상태바와 뒤로가기 */}
        <div className="flex justify-between items-center mb-6 px-2">
          <Link 
            to="/"
            className="text-blue-500 hover:text-blue-600 transition-colors"
          >
            ← 뒤로
          </Link>
          <span className="text-sm font-semibold text-gray-900">알림</span>
          <div className="flex items-center space-x-1">
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          </div>
        </div>
        
        {/* 알림 카드들 */}
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div 
              key={notification.id}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 relative"
            >
              <div className="flex items-start space-x-3">
                {/* 왼쪽 숫자 박스 */}
                <div className="bg-black text-white w-8 h-8 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">{notification.number}</span>
                </div>
                
                {/* 메인 콘텐츠 */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-sm leading-tight mb-1">
                    {notification.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {notification.description}
                  </p>
                  <p className="text-gray-400 text-xs mt-2">
                    *수신거부 : MY &gt; 설정
                  </p>
                </div>
                
                {/* 오른쪽 섹션 */}
                <div className="flex flex-col items-end space-y-2 flex-shrink-0">
                  <span className="text-gray-500 text-xs">
                    {notification.timeAgo}
                  </span>
                  <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden">
                    {/* 썸네일 이미지 플레이스홀더 */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                      <span className="text-gray-600 text-xs font-medium">IMG</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 하단 iPhone 홈 인디케이터 */}
        <div className="flex justify-center mt-8">
          <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
