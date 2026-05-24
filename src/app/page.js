"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [chat, setChat] = useState("");
  const [respuesta, setRespuesta] = useState("");
  const [sugerencias, setSugerencias] = useState([]);

  const frases = [
    "¿Sabías que la S.A.C. es la más usada en Perú?",
    "SUNARP es obligatorio para formalizar empresas",
    "Puedes escalar de EIRL → SAC → S.A.",
    "Más capital reduce el riesgo empresarial",
    "La exportación aumenta la escalabilidad"
  ];

  useEffect(() => {
    if (data) {
      setRespuesta("🤖 " + frases[Math.floor(Math.random() * frases.length)]);
    }
  }, [data]);

  const analizar = (e) => {
    e.preventDefault();

    const sociosRaw = e.target.socios.value;
    const capitalRaw = e.target.capital.value;
    const rubro = (e.target.rubro.value || "").toLowerCase();
    const inversionistas = e.target.inversionistas.value;
    const exporta = e.target.exporta.value;
    const extranjeros = e.target.extranjeros.value;

    // ❌ VALIDACIÓN FUERTE
    if (!sociosRaw || !capitalRaw) {
      setRespuesta("⚠ Escribe correctamente los números antes de analizar la empresa.");
      return;
    }

    const socios = Number(sociosRaw);
    const capital = Number(capitalRaw);

    if (isNaN(socios) || isNaN(capital)) {
      setRespuesta("⚠ Error: escribe solo números válidos en socios y capital.");
      return;
    }

    let riesgo = 0;
    let oportunidad = 0;
    let estabilidad = 0;
    let escalabilidad = 0;

    if (capital < 1000) riesgo += 50;
    else if (capital < 5000) riesgo += 30;
    else riesgo += 15;

    if (socios <= 1) riesgo += 20;
    else estabilidad += 20;

    if (inversionistas === "si") oportunidad += 30;
    if (exporta === "si") escalabilidad += 30;
    if (extranjeros === "si") estabilidad += 10;

    if (rubro.includes("tec")) escalabilidad += 25;
    if (rubro.includes("serv")) estabilidad += 10;

    oportunidad += 40;

    riesgo = Math.min(100, riesgo);
    oportunidad = Math.min(100, oportunidad);
    estabilidad = Math.min(100, estabilidad);
    escalabilidad = Math.min(100, escalabilidad);

    let empresa = "E.I.R.L.";

    if (socios >= 2 && socios <= 20) empresa = "S.A.C.";
    if (inversionistas === "si") empresa = "S.A.";
    if (extranjeros === "si") empresa = "S.R.L.";

    const evolucion = [
      "EIRL → SAC → S.A. → expansión internacional",
      "Puedes escalar según crecimiento de capital",
      "Más socios = mayor capacidad empresarial"
    ];

    const documentos = [
      "DNI o pasaporte",
      "Reserva de nombre SUNARP",
      "Minuta notarial",
      "Escritura pública",
      "Inscripción SUNARP",
      "RUC SUNAT",
      "Licencia municipal"
    ];

    setData({
      empresa,
      riesgo,
      oportunidad,
      estabilidad,
      escalabilidad,
      evolucion,
      documentos
    });

    setSugerencias([
      "¿Qué puedo hacer?",
      "¿Cómo paso de EIRL a SAC?",
      "¿Qué empresa es mejor?",
      "¿Cómo consigo inversionistas?"
    ]);
  };

  const responder = (texto = chat) => {
    if (!data) return;

    const q = texto.toLowerCase();
    let r = "";

    if (q.includes("hola")) {
      r = "👋 Hola, soy tu asesor empresarial IA.";
    } else if (q.includes("qué puedo hacer")) {
      r = `
✔ Crear empresa en SUNARP
✔ Obtener RUC en SUNAT
✔ Escalar EIRL → SAC → S.A.
✔ Buscar inversionistas
✔ Exportar productos
      `;
    } else if (q.includes("empresa")) {
      r = `
🏢 ${data.empresa}
📊 Riesgo: ${data.riesgo}%
📈 Oportunidad: ${data.oportunidad}%
📊 Estabilidad: ${data.estabilidad}%
📊 Escalabilidad: ${data.escalabilidad}%
      `;
    } else {
      r = "💡 Puedes mejorar tu empresa aumentando capital o socios.";
    }

    setRespuesta(r);
    setChat("");
  };

  const Bar = ({ label, value, color }) => (
    <div className="mb-2">
      <p className="text-sm font-bold">{label}: {value}%</p>
      <div className="w-full bg-gray-200 h-3 rounded-full">
        <div className={`${color} h-3`} style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white p-6">

      <h1 className="text-4xl font-bold text-center mb-6">
        ⚖ IA Empresarial Perú
      </h1>

      {/* FORM */}
      <form
        onSubmit={analizar}
        className="grid md:grid-cols-2 gap-4 bg-white/10 p-6 rounded-xl backdrop-blur-lg"
      >
        <input name="socios" type="number" placeholder="Socios" className="p-2 text-black rounded" />
        <input name="capital" type="number" placeholder="Capital" className="p-2 text-black rounded" />
        <input name="rubro" placeholder="Rubro" className="p-2 text-black rounded" />

        <select name="inversionistas" className="p-2 text-black rounded">
          <option value="no">No inversionistas</option>
          <option value="si">Sí inversionistas</option>
        </select>

        <select name="exporta" className="p-2 text-black rounded">
          <option value="no">No exporta</option>
          <option value="si">Sí exporta</option>
        </select>

        <select name="extranjeros" className="p-2 text-black rounded">
          <option value="no">No extranjeros</option>
          <option value="si">Sí extranjeros</option>
        </select>

        <button className="md:col-span-2 bg-blue-600 p-3 rounded font-bold">
          Analizar Empresa
        </button>
      </form>

      {/* RESULTADO */}
      {data && (
        <div className="mt-6 grid md:grid-cols-2 gap-6">

          {/* DASHBOARD */}
          <div className="bg-white text-black p-5 rounded-xl">
            <h2 className="font-bold text-lg">📊 Dashboard</h2>

            <Bar label="Riesgo" value={data.riesgo} color="bg-red-500" />
            <Bar label="Oportunidad" value={data.oportunidad} color="bg-green-500" />
            <Bar label="Estabilidad" value={data.estabilidad} color="bg-blue-500" />
            <Bar label="Escalabilidad" value={data.escalabilidad} color="bg-purple-500" />

            <h3 className="mt-3 font-bold">🏢 Empresa: {data.empresa}</h3>

            <h3 className="mt-3 font-bold">🚀 Evolución</h3>
            <ul className="text-sm list-disc ml-5">
              {data.evolucion.map((e, i) => <li key={i}>{e}</li>)}
            </ul>

            <h3 className="mt-3 font-bold">📄 Documentos</h3>
            <ul className="text-sm list-disc ml-5">
              {data.documentos.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>

          {/* CHAT */}
          <div className="bg-white text-black p-5 rounded-xl">

            <h2 className="font-bold">🤖 Chat IA</h2>

            <input
              value={chat}
              onChange={(e) => setChat(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  responder();
                }
              }}
              className="w-full border p-2 mt-2"
              placeholder="Escribe aquí..."
            />

            <button
              onClick={() => responder()}
              className="mt-2 bg-blue-600 text-white p-2 rounded"
            >
              Enviar
            </button>

            {/* RESPUESTA */}
            <div className="mt-3 bg-gray-100 p-3 rounded whitespace-pre-line">
              {respuesta}
            </div>

            {/* SUGERENCIAS */}
            <div className="mt-3">
              <p className="font-bold">💡 Sugerencias</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {sugerencias.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => responder(s)}
                    className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
      )}
    </main>
  );
}