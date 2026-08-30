import { HeroSection } from '../components/HeroSection';
import { SensoryDelight } from '../components/SensoryDelight';
import { OurFlavors } from '../components/OurFlavors';
import { TumuJourney } from '../components/TumuJourney';
import { TumuMoments } from '../components/TumuMoments';
import { FindTumu } from '../components/FindTumu';
import { Franchise } from '../components/Franchise';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SensoryDelight />
      <OurFlavors />
      <TumuJourney />
      <TumuMoments />
      <FindTumu />
      <Franchise />
    </>
  );
}
