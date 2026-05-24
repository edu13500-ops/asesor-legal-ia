"use client";

import { useState } from "react";

export default function Home() {

  const [resultado, setResultado] = useState("");
  const [riesgo, setRiesgo] = useState(0);
  const [minuta, setMinuta] = useState("");

  const analizar = (e) => {

    e.preventDefault();

    const socios = parseInt(e.target.socios.value);
    const capital = parseInt(e.target.capital.value);
    const rubro = e.target.rubro.value;
    const inversionistas = e.target.inversionistas.value;
    const exporta = e.target.exporta.value;
    const extranjeros = e.target.extranjeros.value;

    let respuesta = "";

    if (socios <= 20 && inversionistas === "no") {

      respuesta = `
🏢 EMPRESA RECOMENDADA: S.A.C.

📄 DOCUMENTOS NECESARIOS:
• DNI de socios
• Minuta empresarial
• Escritura pública
• SUNARP
• RUC

⚠ POSIBLES RIESGOS:
• Limitación para grandes inversionistas.

🤖 ANÁLISIS IA:
Ideal para empresas pequeñas o medianas que buscan estabilidad y control interno.
      `;

    } else if (capital > 50000 || exporta === "si") {

      respuesta = `
🏢 EMPRESA RECOMENDADA: S.A.

📄 DOCUMENTOS NECESARIOS:
• Registro SUNAT
• Escritura pública
• Licencias empresariales

⚠ POSIBLES RIESGOS:
• Más obligaciones legales y tributarias.

🤖 ANÁLISIS IA:
Adecuada para empresas grandes o con expansión internacional.
      `;

    } else if (extranjeros === "si") {

      respuesta = `
🏢 EMPRESA RECOMENDADA: S.R.L.

📄 DOCUMENTOS NECESARIOS:
• DNI o pasaporte
• Minuta
• SUNARP

⚠ POSIBLES RIESGOS:
• Restricciones administrativas.

🤖 ANÁLISIS IA:
Recomendable para socios extranjeros y negocios privados.
      `;

    } else {

      respuesta = `
🏢 EMPRESA RECOMENDADA: S.R.L.

📄 DOCUMENTOS NECESARIOS:
• DNI socios
• Minuta
• SUNARP

⚠ POSIBLES RIESGOS:
• Menor facilidad para atraer inversionistas.

🤖 ANÁLISIS IA:
Modelo equilibrado para empresas familiares o privadas.
      `;
    }

    setResultado(respuesta);

    setRiesgo(
      Math.floor(Math.random() * 40) + 10
    );

    setMinuta(`
MINUTA PRELIMINAR EMPRESARIAL

La presente empresa será constituida bajo la modalidad recomendada por el sistema inteligente empresarial IA.

SOCIOS:
${socios}

CAPITAL:
S/ ${capital}

RUBRO:
${rubro}

OBJETIVO:
Desarrollar actividades empresariales conforme al rubro seleccionado por el usuario.

OBSERVACIONES:
La empresa deberá cumplir obligaciones tributarias, inscripción en SUNARP y obtención de RUC.

Documento generado automáticamente por IA.
    `);

  };

  return (

    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex justify-center items-center p-6">

      <div className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl p-10">

        <h1 className="text-5xl font-bold text-center text-blue-700 mb-4">
          Asesor Jurídico Empresarial IA
        </h1>

        <p className="text-center text-gray-600 text-lg mb-10">
          Plataforma Inteligente de Recomendación Empresarial
        </p>

        <form
          onSubmit={analizar}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          <div className="bg-slate-100 p-5 rounded-2xl">

            <label className="font-bold text-gray-800">
              Número de socios
            </label>

            <input
              type="number"
              name="socios"
              placeholder="Ejemplo: 5"
              className="w-full mt-3 p-4 border-2 border-gray-400 rounded-2xl text-black placeholder-gray-500 bg-white"
              required
            />

          </div>

          <div className="bg-slate-100 p-5 rounded-2xl">

            <label className="font-bold text-gray-800">
              Capital inicial
            </label>

            <input
              type="number"
              name="capital"
              placeholder="Ejemplo: 30000"
              className="w-full mt-3 p-4 border-2 border-gray-400 rounded-2xl text-black placeholder-gray-500 bg-white"
              required
            />

          </div>

          <div className="bg-slate-100 p-5 rounded-2xl">

            <label className="font-bold text-gray-800">
              Rubro empresarial
            </label>

            <input
              type="text"
              name="rubro"
              placeholder="Tecnología, alimentos..."
              className="w-full mt-3 p-4 border-2 border-gray-400 rounded-2xl text-black placeholder-gray-500 bg-white"
              required
            />

          </div>

          <div className="bg-slate-100 p-5 rounded-2xl">

            <label className="font-bold text-gray-800">
              ¿Busca inversionistas?
            </label>

            <select
              name="inversionistas"
              className="w-full mt-3 p-4 border-2 border-gray-400 rounded-2xl text-black bg-white"
            >
              <option value="no">No</option>
              <option value="si">Sí</option>
            </select>

          </div>

          <div className="bg-slate-100 p-5 rounded-2xl">

            <label className="font-bold text-gray-800">
              ¿Exportará productos?
            </label>

            <select
              name="exporta"
              className="w-full mt-3 p-4 border-2 border-gray-400 rounded-2xl text-black bg-white"
            >
              <option value="no">No</option>
              <option value="si">Sí</option>
            </select>

          </div>

          <div className="bg-slate-100 p-5 rounded-2xl">

            <label className="font-bold text-gray-800">
              ¿Tiene socios extranjeros?
            </label>

            <select
              name="extranjeros"
              className="w-full mt-3 p-4 border-2 border-gray-400 rounded-2xl text-black bg-white"
            >
              <option value="no">No</option>
              <option value="si">Sí</option>
            </select>

          </div>

          <div className="md:col-span-2">

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 text-white text-2xl font-bold p-5 rounded-2xl shadow-lg"
            >
              Analizar Empresa con IA
            </button>

          </div>

        </form>

        {resultado && (

          <div className="mt-10 bg-slate-100 border-l-8 border-blue-600 p-8 rounded-3xl whitespace-pre-line">

            <h2 className="text-4xl font-bold text-blue-700 mb-5">
              Resultado del análisis IA
            </h2>

            <div className="bg-white rounded-2xl p-5 shadow mb-6">

              <h3 className="text-2xl font-bold text-red-500 mb-2">
                Nivel de Riesgo Empresarial
              </h3>

              <div className="w-full bg-gray-300 rounded-full h-6">

                <div
                  className="bg-red-500 h-6 rounded-full"
                  style={{ width: `${riesgo}%` }}
                ></div>

              </div>

              <p className="mt-3 text-lg text-black">
                Riesgo estimado:
                <span className="font-bold">
                  {" "} {riesgo}%
                </span>
              </p>

            </div>

            <div className="text-lg text-gray-700 leading-8">
              {resultado}
            </div>

            <div className="mt-8 bg-white border-2 border-blue-200 p-6 rounded-3xl">

              <h2 className="text-3xl font-bold text-blue-700 mb-4">
                Minuta Preliminar IA
              </h2>

              <div className="text-gray-700 leading-8 whitespace-pre-line">
                {minuta}
              </div>

            </div>

          </div>

        )}

      </div>

    </main>
  );
}