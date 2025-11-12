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
    </div>
  );
}
