import { createFileRoute } from "@tanstack/react-router";
import React from 'react';

const SermoDemo: React.FC = () => {
  // 부드러운 스크롤 함수
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              {/* Sermo 로고 이미지 */}
              <img 
                src="/sermo.png" 
                alt="Sermo Logo" 
                className="w-25 h-25"
              />
            </div>
            
          </div>
          <nav className="hidden md:flex space-x-8 text-xl">
            <button 
              onClick={() => scrollToSection('home')} 
              className="hover:text-purple-400 transition-colors cursor-pointer"
            >
              HOME
            </button>
            <button 
              onClick={() => scrollToSection('practice')} 
              className="hover:text-purple-400 transition-colors cursor-pointer"
            >
              PRACTICE
            </button>
            <button 
              onClick={() => scrollToSection('quest')} 
              className="hover:text-purple-400 transition-colors cursor-pointer"
            >
              QUEST
            </button>
            <button 
              onClick={() => scrollToSection('chat')} 
              className="hover:text-purple-400 transition-colors cursor-pointer"
            >
              CHAT
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Speak English.
          </span>
          <br />
          <span className="text-white">Get Fluent.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          <span className="text-pink-400 font-bold">Sermo</span> is your AI English conversation partner. <br />
          Practice real conversations 
          like you're chatting on KakaoTalk, <br />But in English :)
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105">
            Start Learning
          </button>
          <button onClick={() => window.open('https://github.com/sermones', '_blank')} className="border-2 border-white/30 hover:border-white/50 text-white font-bold py-4 px-8 rounded-full text-lg transition-all">
            Watch Github
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-xl font-bold mb-4">HOME</h3>
            <p className="text-gray-300">Customize your <span className="text-purple-400 font-semibold">AI English conversation partner</span> and practice daily conversations</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="text-xl font-bold mb-4">PRACTICE</h3>
            <p className="text-gray-300">Word/sentence quizzes, wrong answer notes, and your personal <span className="text-blue-400 font-semibold">vocabulary & phrase collections</span></p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-xl font-bold mb-4">QUEST</h3>
            <p className="text-gray-300">Complete various missions to earn <span className="text-green-400 font-semibold">medals</span> and track your learning progress</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-xl font-bold mb-4">CHAT</h3>
            <p className="text-gray-300">Natural daily conversations with your customized AI, <span className="text-orange-400 font-semibold">bookmark difficult words</span> for learning</p>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section id="home" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Customize Your <span className="text-purple-400">AI Partner</span> and Start Conversing</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Create your own AI English conversation partner and practice natural English conversations.
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">AI Partner Customization</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                  <span>Set name, gender, and personality</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                  <span>Fine-tune personality with additional descriptions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
                  <span>Upload photos or generate AI images</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-pink-400 rounded-full"></div>
                  <span>Natural English daily conversations</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 text-center">
              <video 
                className="w-full h-64 sm:h-72 md:h-80 object-contain rounded-lg mb-4"
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src="/home-demo.mp4" type="video/mp4" />
                <source src="/home-demo.webm" type="video/webm" />
                <div className="text-6xl mb-4">🤖</div>
              </video>
              <p className="text-gray-300">AI Partner Customization</p>
            </div>
          </div>
        </div>
      </section>

      <section id="practice" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Improve Your Skills Through Systematic Learning</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Take quizzes, review wrong answers, and create your own learning materials.
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 text-center">
              <video 
                className="w-full h-64 sm:h-72 md:h-80 object-contain rounded-lg mb-4"
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src="/practice-demo.mp4" type="video/mp4" />
                <source src="/practice-demo.webm" type="video/webm" />
                <div className="text-6xl mb-4">📚</div>
              </video>
              <p className="text-gray-300">Learning Tools Preview</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Various Learning Tools</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                  <span>Random word quizzes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-cyan-400 rounded-full"></div>
                  <span>Random sentence quizzes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-indigo-400 rounded-full"></div>
                  <span>Review wrong answers in notes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
                  <span>Your vocabulary and phrase collections</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="quest" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Complete Missions and Track Your Progress</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Solve various challenges to earn medals and track your learning journey.
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Gamified Learning System</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                  <span>Various missions and challenges</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-emerald-400 rounded-full"></div>
                  <span>Earn medals by completing missions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-teal-400 rounded-full"></div>
                  <span>Total study time and questions solved</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                  <span>Visualize achievements with medal count</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-6 text-center">
              <video 
                className="w-full h-64 sm:h-72 md:h-80 object-contain rounded-lg mb-4"
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src="/quest-demo.mp4" type="video/mp4" />
                <source src="/quest-demo.webm" type="video/webm" />
                <div className="text-6xl mb-4">🏅</div>
              </video>
              <p className="text-gray-300">Progress & Mission Status</p>
            </div>
          </div>
        </div>
      </section>

      <section id="chat" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Improve Your Skills Through Natural Conversations</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have daily conversations with your customized AI and bookmark difficult words for learning.
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl p-6 text-center">
              <video 
                className="w-full h-64 sm:h-72 md:h-80 object-contain rounded-lg mb-4"
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src="/chat-demo.mp4" type="video/mp4" />
                <source src="/chat-demo.webm" type="video/webm" />
                <div className="text-6xl mb-4">💬</div>
              </video>
              <p className="text-gray-300">Conversation Interface</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Conversations Like Real People</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-400 rounded-full"></div>
                  <span>Natural conversations with customized AI</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-400 rounded-full"></div>
                  <span>Understands user input and responds appropriately</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-pink-400 rounded-full"></div>
                  <span>Bookmark difficult words for learning</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
                  <span>Improve English conversation skills through daily chats</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Speaking?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are already improving their English with Sermo.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-12 rounded-full text-xl transition-all transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 text-center">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="relative">
            {/* Sermo 로고 이미지 */}
            <img 
              src="/sermo.png" 
              alt="Sermo Logo" 
              className="w-8 h-8 object-contain"
            />
          </div>
          <span className="text-xl font-bold text-purple-400">Sermo</span>
        </div>
        <p className="text-gray-400 mb-4">Speak English. Get Fluent.</p>
        <p className="text-gray-500 text-sm">© 2025 Sermo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: SermoDemo,
});
