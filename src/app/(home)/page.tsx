import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Gradient Background */}
      <section className="relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20 animate-gradient"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 flex justify-center animate-float">
              <div className="relative w-28 h-28 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center glow">
                <span className="text-5xl">🎯</span>
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Welcome To ForgeNest
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Track your progress, build consistency, and achieve your goals with our 
              <span className="font-semibold text-foreground"> simple habit tracking system</span>
            </p>
            <div className="flex gap-4 justify-center flex-wrap mb-16">
              <Link 
                href="https://forgenest.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all hover:scale-105 glow-hover"
              >
                <span className="flex items-center gap-2">
                  Try Live App
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </Link>
              <Link 
                href="/docs/getting-started" 
                className="px-10 py-5 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-xl font-semibold hover:bg-purple-600/10 transition-all hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                href="/docs" 
                className="px-10 py-5 border-2 border-gray-300 dark:border-gray-700 text-foreground rounded-xl font-semibold hover:bg-muted transition-all hover:scale-105"
              >
                Documentation
              </Link>
            </div>
            
            {/* Hero Image with enhanced styling */}
            <div className="mt-12 rounded-3xl overflow-hidden shadow-2xl border-2 border-purple-200 dark:border-purple-800 glow transform hover:scale-[1.02] transition-transform duration-500">
              <Image 
                src="/hero-image.png" 
                alt="ForgeNest welcome screen showing habit tracking interface with dark theme"
                width={1200}
                height={675}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-24 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Everything You Need
            </h2>
            <p className="text-center text-muted-foreground text-xl max-w-2xl mx-auto">
              Simple, powerful features to help you build lasting habits and achieve your goals
            </p>
          </div>
          
          {/* Features Image with enhanced styling */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-200 dark:border-blue-800 gradient-border transform hover:scale-[1.02] transition-transform duration-500">
            <Image 
              src="/features-section.png" 
              alt="ForgeNest features including goal setting, streak challenges, and analytics dashboard"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-8 border-2 border-green-200 dark:border-green-800 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-green-900 dark:text-green-100">Goal Setting</h3>
              <p className="text-muted-foreground text-lg">
                Set meaningful goals and track your progress towards achieving them with smart milestone tracking.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-2xl p-8 border-2 border-orange-200 dark:border-orange-800 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🔥</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-orange-900 dark:text-orange-100">Streak Challenges</h3>
              <p className="text-muted-foreground text-lg">
                Challenge friends to habit streaks and compete to build lasting routines together.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl p-8 border-2 border-purple-200 dark:border-purple-800 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-purple-900 dark:text-purple-100">Analytics Dashboard</h3>
              <p className="text-muted-foreground text-lg">
                Get deep insights into your habit patterns with comprehensive analytics and trend analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Features Section */}
      <section className="container mx-auto px-4 py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Challenge Friends & Build Together
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Turn habit building into a social experience. Invite friends to streak challenges, compete for the longest streaks, and motivate each other to achieve your goals together.
            </p>
          </div>
          
          {/* Challenge Friends Image with enhanced styling */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl border-2 border-purple-300 dark:border-purple-700 glow transform hover:scale-[1.02] transition-transform duration-500">
            <Image 
              src="/challenge-friends.png" 
              alt="Social challenge feature showing meditation and self-love habit cards with streak tracking"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>

          {/* Social Features */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group bg-white/80 dark:bg-gray-900/80 rounded-2xl p-8 backdrop-blur-lg border-2 border-green-200 dark:border-green-800 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <span className="text-3xl">🤝</span>
              </div>
              <h4 className="font-bold text-xl mb-3">Sign up</h4>
              <p className="text-muted-foreground">
                Create an account and start tracking your habits.
              </p>
            </div>
            
            <div className="group bg-white/80 dark:bg-gray-900/80 rounded-2xl p-8 backdrop-blur-lg border-2 border-purple-200 dark:border-purple-800 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <span className="text-3xl">👥</span>
              </div>
              <h4 className="font-bold text-xl mb-3">Challenge Friends</h4>
              <p className="text-muted-foreground">
                Invite friends to join your habit journey and compete together.
              </p>
            </div>
            
            <div className="group bg-white/80 dark:bg-gray-900/80 rounded-2xl p-8 backdrop-blur-lg border-2 border-orange-200 dark:border-orange-800 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <span className="text-3xl">📊</span>
              </div>
              <h4 className="font-bold text-xl mb-3">Track Progress</h4>
              <p className="text-muted-foreground">
                See your streaks and completions at a glance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Share With Friends & Grow Together
          </h2>
          <p className="text-muted-foreground text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            The best habits are built together. Challenge your friends to streak competitions, share your progress, and celebrate victories as a community. When you grow together, you achieve more than you ever could alone.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-full border-2 border-yellow-300 dark:border-yellow-700 font-semibold text-lg">
              🏆 Compete in streak challenges
            </span>
            <span className="px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full border-2 border-blue-300 dark:border-blue-700 font-semibold text-lg">
              📊 Share progress updates
            </span>
            <span className="px-6 py-3 bg-gradient-to-r from-pink-100 to-red-100 dark:from-pink-900/30 dark:to-red-900/30 rounded-full border-2 border-pink-300 dark:border-pink-700 font-semibold text-lg">
              🎉 Celebrate achievements together
            </span>
          </div>
        </div>
      </section>


    </div>
  );
}
