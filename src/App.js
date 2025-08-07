import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-900 p-6">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-2">El Método VAIO</h1>
          <p className="text-lg text-blue-600 font-semibold">Ventas Automáticas con IA y Orgánico</p>
          <p className="mt-4 text-xl font-medium">Convierte clics en clientes con anuncios, contenido y automatización estratégica.</p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">¿Qué aprenderás?</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Crear campañas en Meta y TikTok que convierten sin gastar de más.</li>
            <li>Diseñar contenido orgánico que atrae sin vender agresivamente.</li>
            <li>Usar IA para generar guiones, copys, automatizaciones y embudos.</li>
            <li>Fidelizar clientes y escalar sin complicaciones.</li>
          </ul>
        </section>

        <section className="mb-16 bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-4">Incluye:</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Guía paso a paso en 7 módulos (formato ebook descargable).</li>
            <li>Plantillas editables, guiones virales, dashboard ROI y más.</li>
            <li>Prompts de IA listos para usar.</li>
            <li>Ejemplos reales y estrategias comprobadas.</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">¿Para quién es este producto?</h2>
          <p>Para emprendedores, freelancers, creadores de contenido y personas que quieren empezar a vender online con claridad, sin depender del algoritmo, y con una metodología práctica.</p>
        </section>

        <section className="bg-blue-600 text-white p-8 rounded-2xl text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Empieza ahora mismo</h2>
          <p className="text-lg mb-6">Haz parte de quienes están automatizando sus ventas digitales. Llévate acceso inmediato y todos los bonus.</p>
          <a href="#" className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-100 transition">Adquirir ahora</a>
          <p className="text-sm mt-4 italic">Garantía de satisfacción por 7 días</p>
        </section>
      </div>
    </div>
  );
}
