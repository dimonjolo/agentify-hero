import { Hero } from './Hero';
import { Navbar } from './Navbar';
import { VideoBackground } from './VideoBackground';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#e7eaef] antialiased selection:bg-blue-100 selection:text-blue-900">
      <div className="relative mx-auto max-w-[1600px]">
        <Navbar />
        <VideoBackground />

        <main className="relative z-10">
          <div className="mx-auto flex min-h-screen max-w-[1600px] items-center px-0">
            <div className="w-full lg:w-[55%]">
              <Hero />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
