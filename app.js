const topics = [
  {
    nombre: "Trastornos de ansiedad",
    categoria: "ansiedad",
    nivel: "medio",
    resumen: "Miedo o preocupacion intensa que afecta escuela, familia o descanso.",
    rasgos: [
      "Preocupacion excesiva por tareas, errores o futuro.",
      "Palpitaciones, sudor o tension muscular.",
      "Evitar exposiciones, examenes o reuniones."
    ],
    notar: [
      "Dolor de estomago o cabeza antes de ir a clases.",
      "Busca seguridad constante y confirma todo varias veces.",
      "Baja el rendimiento por nervios."
    ],
    soluciones: [
      "Terapia cognitivo-conductual con profesional certificado.",
      "Rutina de sueno, ejercicio moderado y respiracion.",
      "Evaluacion medica cuando sea necesario."
    ],
    fuentes: [
      { texto: "OMS", url: "https://www.who.int/es/health-topics/mental-health" },
      { texto: "NIMH Ansiedad", url: "https://www.nimh.nih.gov/health/topics/anxiety-disorders" }
    ]
  },
  {
    nombre: "Depresion",
    categoria: "animo",
    nivel: "alto",
    resumen: "Tristeza profunda o vacio persistente que interfiere con la vida diaria.",
    rasgos: [
      "Perdida de interes en actividades.",
      "Cambios en sueno, apetito o energia por mas de 2 semanas.",
      "Pensamientos de culpa o desesperanza."
    ],
    notar: [
      "Aislamiento frecuente.",
      "Descenso marcado en tareas escolares.",
      "Comentarios negativos sobre si mismo."
    ],
    soluciones: [
      "Atencion psicologica temprana.",
      "Acompanamiento familiar y escolar.",
      "Canalizacion inmediata si hay riesgo."
    ],
    fuentes: [
      { texto: "OPS Depresion", url: "https://www.paho.org/es/temas/depresion" },
      { texto: "MedlinePlus", url: "https://medlineplus.gov/spanish/depression.html" }
    ]
  },
  {
    nombre: "TDAH",
    categoria: "neurodesarrollo",
    nivel: "medio",
    resumen: "Dificultad persistente de atencion, control de impulsos y organizacion.",
    rasgos: [
      "Distraccion frecuente.",
      "Dificultad para terminar actividades.",
      "Impulsividad al responder o actuar."
    ],
    notar: [
      "Patron continuo en casa y escuela.",
      "Olvido de tareas e instrucciones.",
      "Frustracion por errores no intencionales."
    ],
    soluciones: [
      "Evaluacion integral profesional.",
      "Adaptaciones en aula.",
      "Estrategias de organizacion visual."
    ],
    fuentes: [
      { texto: "CDC TDAH", url: "https://www.cdc.gov/adhd/spanish/index.html" },
      { texto: "NIMH ADHD", url: "https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd" }
    ]
  },
  {
    nombre: "Trastornos de la conducta alimentaria",
    categoria: "alimentacion",
    nivel: "alto",
    resumen: "Relacion danina con comida, peso e imagen corporal.",
    rasgos: [
      "Miedo intenso a subir de peso.",
      "Restriccion, atracones o purgas.",
      "Obsesion con calorias o imagen corporal."
    ],
    notar: [
      "Saltarse comidas frecuentemente.",
      "Cambios bruscos de peso o energia.",
      "Evita comer con otros."
    ],
    soluciones: [
      "Atencion medica, nutricional y psicologica.",
      "Monitoreo de salud fisica.",
      "Intervencion familiar."
    ],
    fuentes: [
      { texto: "NIMH Alimentacion", url: "https://www.nimh.nih.gov/health/topics/eating-disorders" },
      { texto: "OMS Nutricion", url: "https://www.who.int/es/news-room/fact-sheets/detail/healthy-diet" }
    ]
  },
  {
    nombre: "Estres escolar y burnout",
    categoria: "estres",
    nivel: "medio",
    resumen: "Sobrecarga academica y emocional que reduce rendimiento y bienestar.",
    rasgos: [
      "Cansancio constante y falta de motivacion.",
      "Irritabilidad o frustracion frecuente.",
      "Dificultad para concentrarse en clases."
    ],
    notar: [
      "Desvelo continuo por tareas o examenes.",
      "Abandono de actividades que antes disfrutaba.",
      "Baja de rendimiento sin causa academica clara."
    ],
    soluciones: [
      "Organizar horarios con pausas reales de descanso.",
      "Hablar con docentes para ajustar carga academica.",
      "Buscar apoyo profesional si el agotamiento persiste."
    ],
    fuentes: [
      { texto: "OPS Salud mental adolescente", url: "https://www.paho.org/es/temas/salud-mental-adolescentes" },
      { texto: "UNICEF Bienestar", url: "https://www.unicef.org/lac/salud-mental" }
    ]
  },
  {
    nombre: "Duelo y perdida en adolescentes",
    categoria: "animo",
    nivel: "medio",
    resumen: "Reaccion emocional intensa tras una perdida importante en la vida personal o familiar.",
    rasgos: [
      "Tristeza, enojo o culpa por periodos prolongados.",
      "Cambios en sueno, apetito y energia.",
      "Dificultad para adaptarse a la rutina escolar."
    ],
    notar: [
      "Aislamiento social despues de una perdida.",
      "Baja de interes por actividades habituales.",
      "Llanto frecuente o irritabilidad persistente."
    ],
    soluciones: [
      "Acompanamiento emocional sin juicio.",
      "Red de apoyo con familia, tutores y escuela.",
      "Atencion psicologica si los sintomas se intensifican."
    ],
    fuentes: [
      { texto: "NIMH Ninos y salud mental", url: "https://www.nimh.nih.gov/health/topics/child-and-adolescent-mental-health" },
      { texto: "MedlinePlus Salud mental", url: "https://medlineplus.gov/spanish/mentalhealth.html" }
    ]
  },
  {
    nombre: "Crisis emocional y riesgo suicida",
    categoria: "animo",
    nivel: "alto",
    resumen: "Situacion urgente cuando hay desesperanza extrema o expresiones de dano hacia si mismo.",
    rasgos: [
      "Desesperanza intensa y sensacion de no tener salida.",
      "Cambios bruscos de conducta o aislamiento severo.",
      "Mensajes sobre querer desaparecer o no vivir."
    ],
    notar: [
      "Despide pertenencias o se despide de forma inusual.",
      "Habla de ser una carga para otros.",
      "Aumento repentino de conductas de riesgo."
    ],
    soluciones: [
      "No dejar sola a la persona en riesgo inmediato.",
      "Contactar a un adulto responsable y servicios de emergencia (911).",
      "Buscar atencion profesional urgente en salud mental."
    ],
    fuentes: [
      { texto: "OMS Prevencion del suicidio", url: "https://www.who.int/es/news-room/fact-sheets/detail/suicide" },
      { texto: "OPS Prevencion del suicidio", url: "https://www.paho.org/es/temas/prevencion-suicidio" }
    ]
  }
];

const topicContainer = document.getElementById("topicContainer");
const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterSelect");
const resultCount = document.getElementById("resultCount");
const togglePresentationBtn = document.getElementById("togglePresentationBtn");
const presentationPanel = document.getElementById("presentationPanel");
const presentationCard = document.getElementById("presentationCard");
const presentationCounter = document.getElementById("presentationCounter");
const prevPresentationBtn = document.getElementById("prevPresentationBtn");
const nextPresentationBtn = document.getElementById("nextPresentationBtn");

let filteredTopics = [...topics];
let presentationActive = false;
let presentationIndex = 0;

function getRiskClass(nivel) {
  if (nivel === "alto") return "badge-risk-alto";
  if (nivel === "medio") return "badge-risk-medio";
  return "badge-risk-bajo";
}

function renderTopics() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const filter = filterSelect.value;

  const filtered = topics.filter((topic) => {
    const matchesType = filter === "todos" || topic.categoria === filter;
    const matchesText =
      topic.nombre.toLowerCase().includes(searchTerm) ||
      topic.resumen.toLowerCase().includes(searchTerm) ||
      topic.rasgos.join(" ").toLowerCase().includes(searchTerm);
    return matchesType && matchesText;
  });

  filteredTopics = filtered;

  resultCount.textContent = String(filtered.length);

  if (!filtered.length) {
    topicContainer.innerHTML = `
      <div class="col-12">
        <div class="note-important">No se encontraron temas con ese criterio.</div>
      </div>
    `;
    renderPresentation();
    return;
  }

  topicContainer.innerHTML = filtered
    .map((topic) => {
      const riskClass = getRiskClass(topic.nivel);
      return `
        <div class="col-md-6 col-lg-4">
          <article class="card card-topic p-3 h-100">
            <div class="d-flex justify-content-between align-items-start gap-2 mb-2">
              <span class="badge-kind">${topic.categoria}</span>
              <span class="badge-kind ${riskClass}">prioridad ${topic.nivel}</span>
            </div>
            <h3 class="h5 mb-2">${topic.nombre}</h3>
            <p class="text-secondary mb-3">${topic.resumen}</p>

            <details class="mb-2">
              <summary><strong>Rasgos especificos</strong></summary>
              <ul class="list-clean mt-2">${topic.rasgos.map((i) => `<li>${i}</li>`).join("")}</ul>
            </details>

            <details class="mb-2">
              <summary><strong>Como notarlo</strong></summary>
              <ul class="list-clean mt-2">${topic.notar.map((i) => `<li>${i}</li>`).join("")}</ul>
            </details>

            <details class="mb-2">
              <summary><strong>Funcion y solucion</strong></summary>
              <ul class="list-clean mt-2">${topic.soluciones.map((i) => `<li>${i}</li>`).join("")}</ul>
            </details>

            <div class="d-flex flex-column gap-1">
              ${topic.fuentes
                .map(
                  (f) =>
                    `<a class="official-link" href="${f.url}" target="_blank" rel="noopener noreferrer">Fuente oficial: ${f.texto}</a>`
                )
                .join("")}
            </div>
          </article>
        </div>
      `;
    })
    .join("");

  if (presentationIndex > filteredTopics.length - 1) {
    presentationIndex = 0;
  }

  renderPresentation();
}

function createPresentationTopic(topic) {
  const sources = topic.fuentes
    .map(
      (f) =>
        `<a class="official-link" href="${f.url}" target="_blank" rel="noopener noreferrer">Fuente oficial: ${f.texto}</a>`
    )
    .join("");

  return `
    <h3 class="h4">${topic.nombre}</h3>
    <p class="text-secondary">${topic.resumen}</p>
    <p><strong>Rasgos especificos</strong></p>
    <ul class="list-clean">${topic.rasgos.map((i) => `<li>${i}</li>`).join("")}</ul>
    <p><strong>Como notarlo</strong></p>
    <ul class="list-clean">${topic.notar.map((i) => `<li>${i}</li>`).join("")}</ul>
    <p><strong>Funcion y solucion</strong></p>
    <ul class="list-clean">${topic.soluciones.map((i) => `<li>${i}</li>`).join("")}</ul>
    <div class="d-flex flex-column gap-1">${sources}</div>
  `;
}

function renderPresentation() {
  if (!presentationPanel || !presentationCard || !presentationCounter) {
    return;
  }

  if (!presentationActive) {
    presentationPanel.classList.add("d-none");
    return;
  }

  presentationPanel.classList.remove("d-none");

  if (!filteredTopics.length) {
    presentationCounter.textContent = "Sin temas";
    presentationCard.innerHTML = "<p class='mb-0'>No hay resultados para exponer con el filtro actual.</p>";
    return;
  }

  const topic = filteredTopics[presentationIndex];
  presentationCounter.textContent = `Tema ${presentationIndex + 1} de ${filteredTopics.length}`;
  presentationCard.innerHTML = createPresentationTopic(topic);
}

function movePresentation(step) {
  if (!presentationActive || !filteredTopics.length) {
    return;
  }

  const max = filteredTopics.length;
  presentationIndex = (presentationIndex + step + max) % max;
  renderPresentation();
}

if (togglePresentationBtn) {
  togglePresentationBtn.addEventListener("click", () => {
    presentationActive = !presentationActive;
    togglePresentationBtn.textContent = presentationActive
      ? "Desactivar modo exposicion"
      : "Activar modo exposicion";
    renderPresentation();
  });
}

if (prevPresentationBtn) {
  prevPresentationBtn.addEventListener("click", () => movePresentation(-1));
}

if (nextPresentationBtn) {
  nextPresentationBtn.addEventListener("click", () => movePresentation(1));
}

document.addEventListener("keydown", (event) => {
  if (!presentationActive) {
    return;
  }

  if (event.key === "ArrowRight") {
    movePresentation(1);
  }

  if (event.key === "ArrowLeft") {
    movePresentation(-1);
  }
});

searchInput.addEventListener("input", renderTopics);
filterSelect.addEventListener("change", renderTopics);

renderTopics();
