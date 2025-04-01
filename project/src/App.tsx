import { Github, Mail, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-slate-900/95 w-full fixed z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-14 px-4">
            <div className="flex items-center space-x-8">
              <span className="text-lg font-medium text-white">M</span>
              <div className="flex space-x-6">
                <a href="#home" className="text-sm text-slate-300 hover:text-white transition-colors">Home</a>
                <a href="#projects" className="text-sm text-slate-300 hover:text-white transition-colors">Projects</a>
                <a href="#about" className="text-sm text-slate-300 hover:text-white transition-colors">About</a>
                <a href="#contact" className="text-sm text-slate-300 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/myrusearthwalker" target="_blank" rel="noopener noreferrer" 
                className="text-slate-300 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" 
        className="h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="relative z-1 max-w-3xl mx-auto text-center px-4">
          <h1 className="text-4xl font-light text-white sm:text-5xl">
            Myrus
          </h1>
          <p className="mt-4 text-slate-200">
            Chasing infinites, both ways
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-medium text-slate-900 mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="group rounded-lg overflow-hidden border border-slate-200">
              <img src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80" 
                alt="Project 1" 
                className="w-full aspect-video object-cover" />
              <div className="p-4">
                <h3 className="text-lg text-slate-900">Coming soon!</h3>
                <p className="mt-1 text-sm text-slate-600">Password Manager</p>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group rounded-lg overflow-hidden border border-slate-200">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                alt="Project 2" 
                className="w-full aspect-video object-cover" />
              <div className="p-4">
                <h3 className="text-lg text-slate-900">Coming Soon!</h3>
                <p className="mt-1 text-sm text-slate-600">Network scanner</p>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group rounded-lg overflow-hidden border border-slate-200">
              <img src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=800&q=80" 
                alt="Project 3" 
                className="w-full aspect-video object-cover" />
              <div className="p-4">
                <h3 className="text-lg text-slate-900">Coming soon!</h3>
                <p className="mt-1 text-sm text-slate-600">Data scraper</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-medium text-slate-900 mb-4">About</h2>
          <p className="text-slate-600">
            IT professional in Denver.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-medium text-slate-900 mb-8">Contact</h2>
          <div className="space-y-4">
            <a href="mailto:myrusearthwalker@gmail.com" 
              className="flex items-center text-slate-600 hover:text-slate-900 transition-colors">
              <Mail className="h-5 w-5 mr-3" />
              myrusearthwalker@gmail.com
            </a>
            <div className="flex items-center text-slate-600">
              <MapPin className="h-5 w-5 mr-3" />
              Denver, CO
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm text-slate-400 text-center">© 2025 Myrus Earthwalker</p>
        </div>
      </footer>
    </div>
  );
}

export default App;