import Header from './components/Header'
import Main from './components/Main'
import Section from './components/Section'
import aboutImgDark from './assets/images/image-about-dark.jpg'
import aboutImgLight from './assets/images/image-about-light.jpg'

function App() {
  const pClass = 'text-[var(--grey-500)] mb-6';

  return (
    <>
      <Header />
      <Main />
      <Section>
        <div>
          <img src={aboutImgDark} alt="Black Furniture" />
          <div className="py-16 px-8">
            <h3 className='uppercase font-bold tracking-[0.25rem] mb-4'>about our furniture</h3>
            <p className={pClass}>
              Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
            </p>
          </div>
        </div>
        <img src={aboutImgLight} alt="Light Furniture" />
      </Section>
    </>
  )
}

export default App
