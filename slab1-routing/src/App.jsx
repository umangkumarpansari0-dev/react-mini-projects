import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout and Home Components (from src/components)
import NewHeader from './components/Header'; 
import NewFooter from './components/Footer'; 
import NewHeroSection from './components/HeroSection'; 

// Content Pages (from src/pages)
import FeaturePage from './pages/FeaturePage';
import TeamPage from './pages/TeamPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SinglePostPage from './pages/SinglePostPage'; 
// Assuming 'Source' uses a generic page or placeholder
const SourcePage = () => (
  <div className="py-20 text-center min-h-[70vh] bg-white">
    <h1 className="text-4xl font-bold text-indigo-600">Source Code Access</h1>
    <p className="mt-3 text-lg text-gray-600">You can find the project source code on our GitHub.</p>
  </div>
);


function App() {

  return (

    <BrowserRouter>

      

      {/* Header appears on ALL pages */}

      <NewHeader />



      <main className="min-h-screen">

        <Routes>

          

          {/* Home Page */}

          <Route path="/" element={<NewHeroSection />} /> 



          {/* Core Content Pages */}

          <Route path="/feature" element={<FeaturePage />} />

          <Route path="/team" element={<TeamPage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/contact" element={<ContactPage />} />

          <Route path="/source" element={<SourcePage />} />

          

          {/* Blog Routes: Must define both list and individual post */}

          <Route path="/blog" element={<BlogPage />} />

          <Route path="/blog/:postId" element={<SinglePostPage />} />

          

          {/* 404 Fallback Route */}

          <Route path="*" element={

            <div className="py-20 text-center min-h-[70vh] bg-white">

              <h1 className="text-6xl font-extrabold text-red-500">404</h1>

              <p className="mt-4 text-2xl text-gray-700">Page Not Found</p>

            </div>

          } />

        </Routes>

      </main>



      {/* Footer appears on ALL pages */}

      <NewFooter />

    </BrowserRouter>

  );

}



export default App;