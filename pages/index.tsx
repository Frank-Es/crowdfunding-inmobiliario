import Head from 'next/head';
import InteractiveMap from '@/components/InteractiveMap';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inversiones con Alma</title>
        <meta name="description" content="Invierte desde 1000€ en 
proyectos con propósito" />
      </Head>

      <main className="min-h-screen bg-blue-50 text-gray-800 font-sans">
        <header className="p-6 shadow-md bg-white">
          <div className="max-w-7xl mx-auto flex justify-between 
items-center">
            <h1 className="text-2xl font-bold text-blue-900">Inversiones 
con Alma</h1>
            <nav className="space-x-6 text-sm text-blue-800 font-medium">
              <a href="#">Países</a>
              <a href="#">Proyectos</a>
              <a href="#">Inversores</a>
              <a href="#">Desarrolladores</a>
              <a href="#">Inmobiliaria</a>
              <a href="#">Préstamos</a>
            </nav>
          </div>
        </header>

        <section className="text-center py-24 px-6 bg-gradient-to-br 
from-blue-100 to-white">
          <h2 className="text-4xl font-semibold text-blue-900 
mb-4">Invierte desde 1000€</h2>
          <p className="text-lg text-blue-800 max-w-xl mx-auto">
            Oportunidades seguras, con impacto y confianza. Comienza hoy a 
construir tu futuro.
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white 
rounded-xl hover:bg-blue-700 transition">
            Comenzar ahora
          </button>
        </section>

        {/* Mapa interactivo */}
        <section className="my-12 px-4 md:px-20">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Explora nuestros proyectos en el mundo
          </h2>
          <InteractiveMap />
        </section>
      </main>
    </>
  );
}



