import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact';


function App() {
  return (
    <div className='page-wrapper'>
      <Header />
      <main className="main-content">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
