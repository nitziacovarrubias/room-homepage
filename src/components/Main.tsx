import Slider from '../components/Slider'
import Section from './Section'
import Button from './Button'
import mb1 from '../assets/images/mobile-image-hero-1.jpg'
import mb2 from '../assets/images/mobile-image-hero-2.jpg'
import mb3 from '../assets/images/mobile-image-hero-3.jpg'
import dkp1 from '../assets/images/desktop-image-hero-1.jpg'
import dkp2 from '../assets/images/desktop-image-hero-2.jpg'
import dkp3 from '../assets/images/desktop-image-hero-3.jpg'
import arrow from '../assets/images/icon-arrow.svg'

const IMAGES = {
  mobile: [mb1, mb2, mb3],
  desktop: [dkp1, dkp2, dkp3]
};

export default function Main() {
  const pClass = 'text-[var(--grey-500)] mb-6';
  
  return (
    <main>
      <Slider images={IMAGES}/>
      <Section className="py-16 px-8">
        <h1 className='font-bold text-4xl mb-4'>Discover innovative ways to decorate</h1>
        <p className={pClass}>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with out collection and make your property a reflection of you and what you love.</p>
        <Button text="shop now">
          <img src={arrow} alt="Go" />
        </Button>
      </Section>
    </main>
  );
}