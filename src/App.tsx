/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Products from './components/Products';
import Partners from './components/Partners';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Products />
        <Partners />
        <About />
      </main>
      <Footer />
    </div>
  );
}
