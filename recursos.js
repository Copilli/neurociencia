const resources = [
  {
    nombre: "OMS - Salud mental",
    tipo: "organismo",
    descripcion: "Panorama general de salud mental, politicas y recomendaciones.",
    enlace: "https://www.who.int/es/health-topics/mental-health"
  },
  {
    nombre: "OPS - Salud mental en adolescentes",
    tipo: "prevencion",
    descripcion: "Lineamientos regionales para deteccion temprana y apoyo en jovenes.",
    enlace: "https://www.paho.org/es/temas/salud-mental-adolescentes"
  },
  {
    nombre: "UNICEF - Bienestar emocional",
    tipo: "guia",
    descripcion: "Recursos para familia y escuela sobre bienestar psicosocial.",
    enlace: "https://www.unicef.org/lac/salud-mental"
  },
  {
    nombre: "NIMH - Trastornos mentales",
    tipo: "organismo",
    descripcion: "Informacion medica de referencia sobre trastornos y tratamiento.",
    enlace: "https://www.nimh.nih.gov/health/topics"
  },
  {
    nombre: "MedlinePlus - Salud mental",
    tipo: "guia",
    descripcion: "Biblioteca de salud en espanol con informacion revisada.",
    enlace: "https://medlineplus.gov/spanish/mentalhealth.html"
  },
  {
    nombre: "CDC - Salud mental de ninos y adolescentes",
    tipo: "prevencion",
    descripcion: "Buenas practicas para escuela y cuidadores.",
    enlace: "https://www.cdc.gov/childrensmentalhealth/spanish/index.html"
  }
];

const resourceSearch = document.getElementById("resourceSearch");
const resourceFilter = document.getElementById("resourceFilter");
const resourceContainer = document.getElementById("resourceContainer");
const copyPlanBtn = document.getElementById("copyPlanBtn");
const copyStatus = document.getElementById("copyStatus");

function renderResources() {
  const term = resourceSearch.value.trim().toLowerCase();
  const type = resourceFilter.value;

  const filtered = resources.filter((item) => {
    const byType = type === "todos" || item.tipo === type;
    const byText =
      item.nombre.toLowerCase().includes(term) ||
      item.descripcion.toLowerCase().includes(term);
    return byType && byText;
  });

  if (!filtered.length) {
    resourceContainer.innerHTML = `
      <div class="col-12">
        <div class="note-important">No hay resultados para ese criterio. Prueba con otra palabra.</div>
      </div>
    `;
    return;
  }

  resourceContainer.innerHTML = filtered
    .map(
      (item) => `
      <div class="col-md-6 col-lg-4">
        <article class="card card-topic p-3 h-100">
          <span class="badge-kind mb-2">${item.tipo}</span>
          <h2 class="h5">${item.nombre}</h2>
          <p class="text-secondary">${item.descripcion}</p>
          <a class="official-link mt-auto" href="${item.enlace}" target="_blank" rel="noopener noreferrer">Abrir fuente oficial</a>
        </article>
      </div>
    `
    )
    .join("");
}

resourceSearch.addEventListener("input", renderResources);
resourceFilter.addEventListener("change", renderResources);

copyPlanBtn.addEventListener("click", async () => {
  const text = [
    "Plan rapido de apoyo escolar:",
    "1) Detectar cambios persistentes por mas de 2 semanas.",
    "2) Escuchar sin juzgar y canalizar con orientacion escolar.",
    "3) Ante riesgo inmediato, activar emergencias locales (911)."
  ].join("\n");

  try {
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = "Plan copiado. Ya puedes pegarlo en WhatsApp o tu presentacion.";
  } catch (error) {
    copyStatus.textContent = "No se pudo copiar automaticamente. Copialo manualmente desde esta pagina.";
  }
});

renderResources();
