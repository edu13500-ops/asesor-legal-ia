"use client";

import { useState, useEffect } from "react";

export default function Home() {

  const [chat, setChat] = useState("");
  const [mensajeIA, setMensajeIA] = useState("");

  const [riesgo, setRiesgo] = useState(0);
  const [estabilidad, setEstabilidad] = useState(0);
  const [oportunidad, setOportunidad] = useState(0);
  const [crecimiento, setCrecimiento] = useState(0);

  const [empresa, setEmpresa] = useState("");
  const [analisis, setAnalisis] = useState("");

  const [horario, setHorario] = useState({
    lunes: "",
    martes: "",
    miercoles: "",
    jueves: "",
    viernes: "",
    sabado: "",
    domingo: "",
  });

  // =========================
  // RUBROS
  // =========================

  const datosRubros = {

    tecnologia: {
      crecimiento: 95,
      estabilidad: 85,
      oportunidad: 98,
      descripcion:
        "La tecnología y la IA son sectores muy fuertes actualmente."
    },

    turismo: {
      crecimiento: 82,
      estabilidad: 74,
      oportunidad: 94,
      descripcion:
        "Cusco y Machu Picchu siguen impulsando el turismo."
    },

    cafe: {
      crecimiento: 84,
      estabilidad: 79,
      oportunidad: 90,
      descripcion:
        "El café peruano sigue creciendo internacionalmente."
    },

    chocolate: {
      crecimiento: 87,
      estabilidad: 80,
      oportunidad: 92,
      descripcion:
        "El cacao peruano tiene fuerte demanda."
    },

    mineria: {
      crecimiento: 93,
      estabilidad: 90,
      oportunidad: 97,
      descripcion:
        "La minería sigue siendo muy fuerte en Perú."
    },

    alcohol: {
      crecimiento: 70,
      estabilidad: 68,
      oportunidad: 75,
      descripcion:
        "Las bebidas mantienen crecimiento constante."
    },

    videojuegos: {
      crecimiento: 91,
      estabilidad: 75,
      oportunidad: 96,
      descripcion:
        "Los videojuegos y streaming siguen creciendo."
    },

    restaurantes: {
      crecimiento: 78,
      estabilidad: 70,
      oportunidad: 86,
      descripcion:
        "La gastronomía peruana sigue creciendo."
    }

  };

  // =========================
  // DATOS CURIOSOS
  // =========================

  const curiosidades = [

    "💡 Las empresas organizadas crecen más rápido.",
    "😂 Todo emprendedor dijo: mañana empiezo.",
    "🚀 Más inversión reduce riesgo.",
    "☕ El café peruano crece internacionalmente.",
    "🍫 El cacao peruano es famoso mundialmente.",
    "📈 Exportar aumenta oportunidades.",
    "🏔 Cusco es potencia turística.",
    "😂 SUNAT siempre observa.",
    "🤖 La IA mejora productividad.",
    "📊 Marketing mejora crecimiento."

  ];

  const [datoCurioso, setDatoCurioso] = useState("");

  useEffect(() => {

    const cambiar = () => {

      const random =
        Math.floor(
          Math.random() * curiosidades.length
        );

      setDatoCurioso(
        curiosidades[random]
      );

    };

    cambiar();

    const intervalo =
      setInterval(cambiar, 5000);

    return () =>
      clearInterval(intervalo);

  }, []);
    // =========================
  // IA PRINCIPAL
  // =========================

  const responderIA = (
    preguntaManual = null
  ) => {

    const q =
      (preguntaManual || chat)
      .toLowerCase();

    // =========================
    // EASTER EGGS
    // =========================

    if (q.includes("mejor youtuber")) {

      setMensajeIA(
        "🎮 El mejor youtuber es Vegetta777 😎"
      );

    }

    else if (
      q.includes("mejor ia")
    ) {

      setMensajeIA(
        "🤖 La mejor IA es ChatGPT 😎"
      );

    }

    else if (
      q.includes("mejor profesor")
    ) {

      setMensajeIA(
        "👨‍🏫 El mejor profesor es Miguel Ángel 😎"
      );

    }

    else if (
      q.includes("mejor alumno")
    ) {

      setMensajeIA(
        "😎 El mejor alumno es Félix Eduardo Tito Dávila"
      );

    }

    else if (
      q.includes("quien creo")
    ) {

      setMensajeIA(
        "👨‍💻 Aplicación creada por Félix Eduardo Tito Dávila."
      );

    }

    // =========================
    // HORARIOS IA
    // =========================

    else if (
      q.includes("organiza mis horarios")
    ) {

      const horarioRandom =
        Math.floor(
          Math.random() * 2
        );

      // =========================
      // HORARIO 1
      // =========================

      if (horarioRandom === 0) {

        setHorario({

          lunes:
`7am-9am Marketing
9am-11am Clientes
11am-1pm Finanzas
1pm-2pm Almuerzo
2pm-4pm Redes Sociales
4pm-6pm Ventas
6pm-9pm Estrategias`,

          martes:
`7am-9am Publicidad
9am-11am Clientes
11am-1pm Organización
1pm-2pm Almuerzo
2pm-4pm Producción
4pm-6pm Administración
6pm-9pm Estrategias`,

          miercoles:
`7am-9am Marketing
9am-11am Finanzas
11am-1pm Ventas
1pm-2pm Almuerzo
2pm-4pm Redes Sociales
4pm-6pm Clientes
6pm-9pm Crecimiento`,

          jueves:
`7am-9am Publicidad
9am-11am Clientes
11am-1pm Producción
1pm-2pm Almuerzo
2pm-4pm Finanzas
4pm-6pm Ventas
6pm-9pm Estrategias`,

          viernes:
`7am-9am Organización
9am-11am Marketing
11am-1pm Clientes
1pm-2pm Almuerzo
2pm-4pm Producción
4pm-6pm Publicidad
6pm-9pm Crecimiento`,

          sabado:
`7am-10am Estrategias
10am-1pm Finanzas
1pm-2pm Almuerzo
2pm-5pm Redes Sociales
5pm-9pm Organización`,

          domingo:
`Descanso`

        });

      }

      // =========================
      // HORARIO 2
      // =========================

      else {

        setHorario({

          lunes:
`7am-9am Finanzas
9am-11am Marketing
11am-1pm Clientes
1pm-2pm Almuerzo
2pm-4pm Publicidad
4pm-6pm Organización
6pm-9pm Estrategias`,

          martes:
`7am-9am Producción
9am-11am Clientes
11am-1pm Redes Sociales
1pm-2pm Almuerzo
2pm-4pm Finanzas
4pm-6pm Administración
6pm-9pm Crecimiento`,

          miercoles:
`7am-9am Marketing
9am-11am Producción
11am-1pm Ventas
1pm-2pm Almuerzo
2pm-4pm Clientes
4pm-6pm Publicidad
6pm-9pm Estrategias`,

          jueves:
`7am-9am Organización
9am-11am Finanzas
11am-1pm Marketing
1pm-2pm Almuerzo
2pm-4pm Producción
4pm-6pm Clientes
6pm-9pm Crecimiento`,

          viernes:
`7am-9am Publicidad
9am-11am Clientes
11am-1pm Organización
1pm-2pm Almuerzo
2pm-4pm Finanzas
4pm-6pm Producción
6pm-9pm Estrategias`,

          sabado:
`7am-10am Marketing
10am-1pm Clientes
1pm-2pm Almuerzo
2pm-5pm Producción
5pm-9pm Organización`,

          domingo:
`Descanso`

        });

      }

      setMensajeIA(`
📅 HORARIO IA GENERADO

✔ productividad mejorada
✔ tiempo estratégico añadido
✔ organización empresarial
✔ marketing organizado
✔ clientes organizados

🚀 Consejo IA:
La organización reduce riesgos.
      `);

    }
        // =========================
    // MEJORAR PROYECTO
    // =========================

    else if (
      q.includes("mejorar mi proyecto")
    ) {

      setMensajeIA(`
🚀 MEJORAR TU PROYECTO

✔ mejorar publicidad
✔ usar TikTok
✔ usar Instagram
✔ automatizar procesos
✔ mejorar organización
✔ mejorar atención al cliente
✔ buscar inversionistas
✔ usar inteligencia artificial

📈 BENEFICIOS

• más crecimiento
• menos riesgo
• más estabilidad
• mejor productividad
• más clientes

💡 CONSEJO IA

Las empresas organizadas crecen más rápido.

📊 POSIBLES MEJORAS

• aumentar publicidad
• reducir gastos innecesarios
• invertir en redes sociales
• mejorar administración
• capacitar trabajadores
      `);

    }

    // =========================
    // EXPORTAR
    // =========================

    else if (
      q.includes("exportar")
    ) {

      setMensajeIA(`
🌎 EXPORTACIÓN

✔ registrar empresa
✔ obtener RUC
✔ buscar clientes internacionales
✔ mejorar logística
✔ usar publicidad internacional
✔ mejorar producción

📈 BENEFICIOS

• más ingresos
• expansión internacional
• más oportunidades
• mejor estabilidad

💡 CONSEJO IA

Exportar normalmente mejora crecimiento.
      `);

    }

    // =========================
    // CLIENTES
    // =========================

    else if (
      q.includes("clientes")
    ) {

      setMensajeIA(`
👥 CONSEGUIR CLIENTES

✔ TikTok
✔ Facebook
✔ Instagram
✔ publicidad digital
✔ promociones
✔ recomendaciones
✔ influencers

📈 RESULTADOS

• más ventas
• más crecimiento
• más reconocimiento

💡 CONSEJO IA

Las redes sociales ayudan bastante actualmente.
      `);

    }

    // =========================
    // CRECER
    // =========================

    else if (
      q.includes("crecer")
    ) {

      setMensajeIA(`
📈 CRECIMIENTO EMPRESARIAL

✔ marketing digital
✔ exportación
✔ automatización
✔ publicidad
✔ redes sociales
✔ organización empresarial

🚀 CONSEJO IA

Invertir en tecnología mejora productividad.

📊 POSIBLES RESULTADOS

• más ingresos
• menos riesgo
• más estabilidad
• más clientes
      `);

    }

    // =========================
    // MARKETING
    // =========================

    else if (
      q.includes("marketing")
    ) {

      setMensajeIA(`
📢 MARKETING EMPRESARIAL

✔ TikTok Ads
✔ Facebook Ads
✔ Instagram
✔ Influencers
✔ Publicidad digital
✔ Contenido viral

📈 BENEFICIOS

• más clientes
• más crecimiento
• más reconocimiento

💡 CONSEJO IA

El marketing digital es muy importante actualmente.
      `);

    }

    // =========================
    // DEFAULT
    // =========================

    else {

      setMensajeIA(`
🤖 Hola, soy tu Secretario IA.

Puedo ayudarte con:

✔ empresas
✔ riesgos
✔ marketing
✔ exportación
✔ horarios
✔ productividad
✔ clientes
✔ crecimiento empresarial

💡 SUGERENCIAS

• ¿Cómo crecer?
• ¿Cómo exportar?
• ¿Cómo mejorar mi proyecto?
• Organiza mis horarios
• ¿Cómo conseguir clientes?
• ¿Cómo mejorar marketing?

🚀 CONSEJO IA

Las empresas organizadas normalmente tienen más éxito.
      `);

    }

    setChat("");

  };
    // =========================
  // ANALIZAR EMPRESA
  // =========================

  const analizar = (e) => {

    e.preventDefault();

    const socios =
      Number(e.target.socios.value);

    const capital =
      Number(e.target.capital.value);

    const inversionistas =
      e.target.inversionistas.value;

    const exporta =
      e.target.exporta.value;

    const extranjeros =
      e.target.extranjeros.value;

    const rubro =
      e.target.rubro.value;

    const problema =
      e.target.problema.value;

    // VALIDACION

    if (
      isNaN(socios) ||
      isNaN(capital)
    ) {

      setAnalisis(
        "⚠ Escribe correctamente los números."
      );

      return;

    }

    const infoRubro =
      datosRubros[rubro];

    // =========================
    // BASE
    // =========================

    let riesgoCalc = 100;
    let estabilidadCalc = 0;
    let oportunidadCalc = 0;
    let crecimientoCalc = 0;

    // =========================
    // CAPITAL
    // =========================

    if (capital > 5000) {

      riesgoCalc -= 10;
      estabilidadCalc += 10;

    }

    if (capital > 20000) {

      riesgoCalc -= 20;
      crecimientoCalc += 15;

    }

    if (capital > 50000) {

      riesgoCalc -= 30;
      crecimientoCalc += 25;
      estabilidadCalc += 20;

    }

    // =========================
    // SOCIOS
    // =========================

    if (socios >= 2) {

      riesgoCalc -= 10;
      estabilidadCalc += 10;

    }

    if (socios >= 5) {

      riesgoCalc -= 15;
      oportunidadCalc += 15;

    }

    // =========================
    // INVERSIONISTAS
    // =========================

    if (inversionistas === "1") {

      riesgoCalc -= 10;
      oportunidadCalc += 10;

    }

    if (inversionistas === "2") {

      riesgoCalc -= 20;
      oportunidadCalc += 20;
      crecimientoCalc += 15;

    }

    if (inversionistas === "3") {

      riesgoCalc -= 35;
      oportunidadCalc += 35;
      crecimientoCalc += 25;
      estabilidadCalc += 20;

    }

    // =========================
    // EXPORTACION
    // =========================

    if (exporta === "1") {

      oportunidadCalc += 15;

    }

    if (exporta === "2") {

      oportunidadCalc += 30;
      crecimientoCalc += 20;

    }

    // =========================
    // EXTRANJEROS
    // =========================

    if (extranjeros === "1") {

      oportunidadCalc += 10;

    }

    if (extranjeros === "2") {

      oportunidadCalc += 20;

    }

    if (extranjeros === "3") {

      oportunidadCalc += 30;
      crecimientoCalc += 15;

    }

    // =========================
    // PROBLEMAS
    // =========================

    if (problema === "financiero") {

      riesgoCalc += 25;

    }

    if (problema === "marketing") {

      riesgoCalc += 10;

    }

    if (problema === "clientes") {

      riesgoCalc += 15;

    }

    if (problema === "organizacion") {

      riesgoCalc += 20;

    }

    if (problema === "competencia") {

      riesgoCalc += 15;

    }

    // =========================
    // RUBRO
    // =========================

    crecimientoCalc +=
      infoRubro.crecimiento / 4;

    estabilidadCalc +=
      infoRubro.estabilidad / 5;

    oportunidadCalc +=
      infoRubro.oportunidad / 4;

    // =========================
    // LIMITES
    // =========================

    riesgoCalc = Math.max(
      0,
      Math.min(100, riesgoCalc)
    );

    estabilidadCalc = Math.max(
      0,
      Math.min(100, estabilidadCalc)
    );

    oportunidadCalc = Math.max(
      0,
      Math.min(100, oportunidadCalc)
    );

    crecimientoCalc = Math.max(
      0,
      Math.min(100, crecimientoCalc)
    );

    // =========================
    // ACTUALIZAR
    // =========================

    setRiesgo(riesgoCalc);

    setEstabilidad(
      estabilidadCalc
    );

    setOportunidad(
      oportunidadCalc
    );

    setCrecimiento(
      crecimientoCalc
    );

    // =========================
    // EMPRESA
    // =========================

    let empresaCalc = "";

    if (socios <= 1) {

      empresaCalc = "E.I.R.L.";

    }

    else if (socios <= 20) {

      empresaCalc = "S.A.C.";

    }

    else {

      empresaCalc = "S.A.";

    }

    setEmpresa(
      empresaCalc
    );

    // =========================
    // RESULTADO
    // =========================

    setAnalisis(`

🏢 EMPRESA RECOMENDADA:
${empresaCalc}

📊 RESULTADOS EMPRESARIALES

• Riesgo: ${riesgoCalc}%
• Estabilidad: ${estabilidadCalc}%
• Oportunidad: ${oportunidadCalc}%
• Crecimiento futuro: ${crecimientoCalc}%

🌎 INFORMACIÓN DEL RUBRO

${infoRubro.descripcion}

🚀 RECOMENDACIONES IA

✔ mejorar marketing
✔ buscar inversionistas
✔ automatizar procesos
✔ usar redes sociales
✔ invertir en publicidad
✔ mejorar atención al cliente

📈 PREDICCIONES

• si mejoras organización → baja riesgo
• si exportas → aumentan oportunidades
• si consigues inversionistas → mejora crecimiento
• si mejoras publicidad → aumentan clientes

😂 CONSEJO IA

"No gastes todo en publicidad sin organización."

👨‍💻 Creador:
Félix Eduardo Tito Dávila

    `);

  };

  // =========================
  // BARRAS
  // =========================

  const Barra = ({
    titulo,
    valor,
    color
  }) => (

    <div className="mb-5">

      <div className="flex justify-between mb-1">

        <span className="font-semibold">
          {titulo}
        </span>

        <span>
          {valor}%
        </span>

      </div>

      <div className="w-full bg-gray-700 rounded-full h-5 overflow-hidden">

        <div
          className={`h-5 ${color} transition-all duration-700`}
          style={{
            width: `${valor}%`
          }}
        ></div>

      </div>

    </div>

  );
    // =========================
  // RETURN
  // =========================

  return (

    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white p-5">

      {/* TITULO */}

      <div className="text-center mb-8">

        <h1 className="text-5xl font-extrabold">
          ⚖ IA Empresarial Pro
        </h1>

        <p className="text-cyan-300 mt-3 text-lg">
          Plataforma Inteligente Empresarial
        </p>

      </div>

      {/* IMAGENES */}

      <div className="flex justify-center gap-6 flex-wrap mb-8">

        <img
          src="https://media.tenor.com/S61VCO73mOAAAAAC/dancing-dog.gif"
          className="w-40 rounded-3xl shadow-2xl"
        />

        <img
          src="https://media.tenor.com/8Z1F8iW9d7kAAAAC/penguin-dance.gif"
          className="w-32 rounded-3xl shadow-2xl"
        />

      </div>

      {/* GRID */}

      <div className="grid lg:grid-cols-2 gap-6">

        {/* SECRETARIO IA */}

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/20 shadow-2xl">

          <h2 className="text-3xl font-bold mb-5">
            🤖 Secretario IA
          </h2>

          {/* DATOS CURIOSOS */}

          <div className="bg-gradient-to-r from-blue-700 to-cyan-600 p-4 rounded-2xl mb-5">

            <div className="flex justify-between items-center">

              <span>
                {datoCurioso}
              </span>

              <button
                onClick={() => {

                  const random =
                    Math.floor(
                      Math.random() * curiosidades.length
                    );

                  setDatoCurioso(
                    curiosidades[random]
                  );

                }}
                className="bg-white text-black px-3 py-1 rounded-xl font-bold"
              >

                🔄

              </button>

            </div>

          </div>

          {/* SUGERENCIAS */}

          <div className="flex flex-wrap gap-3 mb-5">

            {[
              "¿Cómo mejorar mi proyecto?",
              "¿Cómo exportar?",
              "¿Cómo conseguir clientes?",
              "¿Cómo crecer?",
              "Organiza mis horarios",
              "¿Cómo mejorar marketing?"
            ].map((sugerencia) => (

              <button
                key={sugerencia}
                onClick={() => {

                  setChat(sugerencia);

                  responderIA(sugerencia);

                }}
                className="bg-cyan-600 hover:bg-cyan-700 transition-all duration-300 px-4 py-2 rounded-2xl font-semibold shadow-lg hover:scale-105"
              >

                {sugerencia}

              </button>

            ))}

          </div>

          {/* INPUT */}

          <input
            value={chat}
            onChange={(e) =>
              setChat(e.target.value)
            }
            onKeyDown={(e) => {

              if (e.key === "Enter") {

                e.preventDefault();

                responderIA();

              }

            }}
            className="w-full p-4 rounded-2xl text-black"
            placeholder="Pregunta algo..."
          />

          {/* BOTON */}

          <button
            onClick={responderIA}
            className="mt-4 w-full bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 p-4 rounded-2xl font-bold hover:scale-105"
          >

            🚀 Enviar

          </button>

          {/* RESPUESTA */}

          {mensajeIA && (

            <div className="bg-white text-black mt-5 p-5 rounded-2xl whitespace-pre-line shadow-xl">

              {mensajeIA}

            </div>

          )}

        </div>

        {/* FORMULARIO */}

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/20 shadow-2xl">

          <h2 className="text-3xl font-bold mb-5">
            📊 Datos Empresariales
          </h2>

          <form
            onSubmit={analizar}
            className="grid gap-4"
          >

            <input
              name="socios"
              type="number"
              placeholder="Número de socios"
              className="p-4 rounded-2xl text-black"
            />

            <input
              name="capital"
              type="number"
              placeholder="Capital inicial"
              className="p-4 rounded-2xl text-black"
            />

            {/* RUBRO */}

            <select
              name="rubro"
              className="p-4 rounded-2xl text-black"
            >

              <option value="tecnologia">
                Tecnología
              </option>

              <option value="turismo">
                Turismo
              </option>

              <option value="cafe">
                Café
              </option>

              <option value="chocolate">
                Chocolate
              </option>

              <option value="alcohol">
                Alcohol
              </option>

              <option value="mineria">
                Minería
              </option>

              <option value="videojuegos">
                Videojuegos
              </option>

              <option value="restaurantes">
                Restaurantes
              </option>

            </select>
                        {/* INVERSIONISTAS */}

            <select
              name="inversionistas"
              className="p-4 rounded-2xl text-black"
            >

              <option value="0">
                Sin inversionistas
              </option>

              <option value="1">
                Pocos inversionistas
              </option>

              <option value="2">
                Inversionistas moderados
              </option>

              <option value="3">
                Muchos inversionistas
              </option>

            </select>

            {/* EXPORTA */}

            <select
              name="exporta"
              className="p-4 rounded-2xl text-black"
            >

              <option value="0">
                No exporta
              </option>

              <option value="1">
                Exportación regional
              </option>

              <option value="2">
                Exportación internacional
              </option>

            </select>

            {/* EXTRANJEROS */}

            <select
              name="extranjeros"
              className="p-4 rounded-2xl text-black"
            >

              <option value="0">
                Sin extranjeros
              </option>

              <option value="1">
                Clientes extranjeros
              </option>

              <option value="2">
                Socios extranjeros
              </option>

              <option value="3">
                Ambos
              </option>

            </select>

            {/* PROBLEMAS */}

            <select
              name="problema"
              className="p-4 rounded-2xl text-black"
            >

              <option value="ninguno">
                Sin problemas
              </option>

              <option value="financiero">
                Problemas financieros
              </option>

              <option value="marketing">
                Problemas de marketing
              </option>

              <option value="clientes">
                Pocos clientes
              </option>

              <option value="organizacion">
                Mala organización
              </option>

              <option value="competencia">
                Mucha competencia
              </option>

            </select>

            {/* BOTON */}

            <button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-2xl p-5 font-bold hover:scale-105">

              🚀 Analizar Empresa

            </button>

          </form>

        </div>

      </div>

      {/* DASHBOARD */}

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        {/* GRAFICOS */}

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/20 shadow-2xl">

          <h2 className="text-3xl font-bold mb-5">
            📈 Dashboard Empresarial
          </h2>

          <Barra
            titulo="Riesgo"
            valor={riesgo}
            color="bg-red-500"
          />

          <Barra
            titulo="Estabilidad"
            valor={estabilidad}
            color="bg-green-500"
          />

          <Barra
            titulo="Oportunidad"
            valor={oportunidad}
            color="bg-cyan-500"
          />

          <Barra
            titulo="Crecimiento"
            valor={crecimiento}
            color="bg-yellow-400"
          />

          {/* PREDICCIONES */}

          <div className="mt-8">

            <h3 className="text-2xl font-bold mb-4">
              🔮 Predicciones IA
            </h3>

            <div className="space-y-4">

              <div className="bg-black/30 p-4 rounded-2xl">

                📈 Más inversión normalmente
                aumenta estabilidad.

              </div>

              <div className="bg-black/30 p-4 rounded-2xl">

                🌎 Exportar aumenta oportunidades.

              </div>

              <div className="bg-black/30 p-4 rounded-2xl">

                🤖 Automatizar procesos
                mejora productividad.

              </div>

            </div>

          </div>

        </div>

        {/* RESULTADO */}

        <div className="bg-white text-black p-6 rounded-3xl whitespace-pre-line shadow-2xl">

          <h2 className="text-3xl font-bold mb-4">
            🤖 Resultado IA
          </h2>

          {analisis || "La IA analizará tu empresa..."}

        </div>

      </div>

      {/* PLANIFICADOR */}

      <div className="bg-white/10 backdrop-blur-lg mt-8 p-6 rounded-3xl border border-white/20 shadow-2xl">

        <h2 className="text-3xl font-bold mb-5">
          📅 Planificador Semanal IA
        </h2>

        <div className="grid md:grid-cols-7 gap-4 text-sm">

          {[
            "lunes",
            "martes",
            "miercoles",
            "jueves",
            "viernes",
            "sabado",
            "domingo"
          ].map((dia) => (

            <div
              key={dia}
              className="bg-black/30 p-3 rounded-2xl"
            >

              <h3 className="font-bold mb-3 capitalize text-cyan-300">

                {dia}

              </h3>

              <textarea
                value={horario[dia]}
                onChange={(e) => {

                  setHorario({
                    ...horario,
                    [dia]: e.target.value
                  });

                }}
                className="w-full h-96 rounded-xl text-black p-3"
                placeholder={`Horario de ${dia}`}
              />

            </div>

          ))}

        </div>

      </div>

      {/* FOOTER */}

      <div className="mt-10 text-center text-gray-400">

        <p className="text-lg">

          ⚠ Para respuestas empresariales reales,
          se necesita conexión con APIs
          y bases de datos empresariales.

        </p>

        <p className="mt-4 text-xl">

          👨‍💻 Desarrollado por Félix Eduardo Tito Dávila

        </p>

      </div>

    </main>

  );

}