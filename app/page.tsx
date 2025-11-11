import HeroSection from "@/components/HeroSection";
import SceneSection from "@/components/SceneSection";
import FeatureCards from "@/components/FeatureCards";
import ClosingSection from "@/components/ClosingSection";
import Footer from "@/components/Footer";
import scenesData from "@/data/scenes.json";

export default function Home() {
  const { scenes } = scenesData;

  return (
    <main className="min-h-screen">
      <HeroSection />
      
      <div id="scenes">
        {scenes.map((scene, index) => (
          <SceneSection
            key={scene.id}
            scene={scene}
            isReversed={index % 2 === 1}
          />
        ))}
      </div>

      <FeatureCards />
      <ClosingSection />
      <Footer />
    </main>
  );
}
