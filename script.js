function guardarEstado() {
    localStorage.setItem("estadoRamos", JSON.stringify(estadoRamos));
  }
  
  function cargarEstado() {
    const guardado = localStorage.getItem("estadoRamos");
    if (guardado) {
      Object.assign(estadoRamos, JSON.parse(guardado));
      
    }
  }  

const ramos = [
    // Semestre 1
    { id: "mat1920", nombre: "Números", desc: "Facultad de Matemática\n10 créditos\nEs prerequisito de:\n - Geometría I", semestre: 1, prereqs: [] },
    { id: "edu0310", nombre: "Aprendizaje y desarrollo: Teoría y práctica", desc: "Facultad de Educación\n10 créditos\nEs prerequisito de:\n - Aprendizaje y desarrollo del escolar\n - Práctica I", semestre: 1, prereqs: [] },
    { id: "edu0311", nombre: "Teoría de la educación", desc: "Facultad de Educación\n10 créditos", semestre: 1, prereqs: [] },
    { id: "edu0329", nombre: "Desarrollo y enseñanza del lenguaje artístico visual", desc: "Facultad de Educación\n10 créditos", semestre: 1, prereqs: [] },
    { id: "let001b", nombre: "Fundamentos lingüísticos", desc: "Facultad de Letras\n10 créditos\nEs prerequisito de:\n - Oralidad y desarrollo semiótico infantil", semestre: 1, prereqs: [] },
    { id: "vra200", nombre: "English Test", desc: "0 créditos", semestre: 1, prereqs: [] },
    { id: "vra100c", nombre: "Test de comunicación escrita", desc: "0 créditos", semestre: 1, prereqs: [] },
    //Semestre 2
    { id: "mat1930", nombre: "Geometría I", desc: "Facultad de Matemática\n10 créditos\nEs prerequisito de:\n - Didáctica de la matemática I\n- Geometría II", semestre: 2, prereqs: ["mat1920"] },
    { id: "edu0315", nombre: "Aprendizaje y desarrollo del escolar", desc: "Facultad de Educación\n10 créditos\nEs prerequisito de:\n - Didáctica de la matemática I\n- Didáctica de las ciencias naturales\n- Didáctica de la escritura\n- Didáctica de las ciencias sociales\n- Didáctica de la geografía", semestre: 2, prereqs: ["edu0310"] },
    { id: "edu0318", nombre: "Currículum en la educación básica", desc: "Facultad de Educación\n10 créditos\nEs prerequisito de:\n- Evaluación en la eduación básica\n- Didáctica de la lectura\n- Didáctica de la matemática I\n - Didáctica de las ciencias naturales\n- Práctica 2\n- Didáctica de la escritura\n- Didáctica de las ciencias sociales\n- Didáctica de la geografía", semestre: 2, prereqs: [] },
    { id: "let002b", nombre: "Oralidad y desarrollo semiótico infantil", desc: "Facultad de Educación\n10 créditos\nEs prerequisito de:\n - Didáctica de la lectura\n- Didáctica de la escritura\n- Elementos de gramática española (mención Lenguaje y comunicación)", semestre: 2, prereqs: ["let001b"] },
    { id: "edu0338", nombre: "Práctica I", desc: "Facultad de Educación\n10 créditos\nEs prerequisito de:\n - Práctica II", semestre: 2, prereqs: ["edu0310"] },
    // Semestre 3
    { id: "qim100p", nombre: "Química general", desc: "Facultad de Química\n10 créditos\nEs prerequisito de:\n - Didáctica de las ciencias naturales", semestre: 3, prereqs: [] },
    { id: "edu0319", nombre: "Evaluación en educación básica", desc: "Facultad de Educación\n10 créditos\nEs prerequisito de:\n- Didáctica de la matemática I\n - Didáctica de las ciencias naturales\n- Práctica 2\n- Didáctica de la escritura\n- Didáctica de las ciencias sociales\n- Didáctica de la geografía", semestre: 3, prereqs: ["edu0318"] },
    { id: "edu0330", nombre: "Didáctica de la lectura", desc: "Facultad de Educación\n10 créditos\nEs prerequisito de:\n- Práctica II\n- Literatura infantil y juvenil (mención Lenguaje y comunicación)\n- Didáctica de la comunicación multimodal (mención Lenguaje y comunicación)", semestre: 3, prereqs: ["edu0318", "let002b"] },
    { id: "edu0323", nombre: "Ciencias sociales", desc: "Facultad de Educación\n10 créditos\nEs prerequisito de:\n- Didáctica de las ciencias sociales", semestre: 3, prereqs: [] },
    { id: "TTF", nombre: "Formación teológica", desc: "Facultad de Teología\n10 créditos", semestre: 3, prereqs: [] },
    // Semestre 4
    { id: "eyp1020", nombre: "Análisis de datos", desc: "Facultad de Matemática\n10 créditos\nEs prerequisito de:\n- Didáctica de la matemática I\n- Probabilidad y estadística (mención Matemática)", semestre: 4, prereqs: [] },
    { id: "bio155e", nombre: "Introducción a la biología", desc: "Facultad de Ciencias biológicas\n10 créditos\nEs prerequisito de:\n- Didáctica de las ciencias naturales\n- Biología y diversidad vegetal (mención Ciencias naturales)", semestre: 4, prereqs: [] },
    { id: "edu0317", nombre: "Diversidad e inclusión en educación", desc: "Facultad de Educación\n10 créditos", semestre: 4, prereqs: [] },
    { id: "ihi", nombre: "Optativo Historia de Chile y América", desc: "Facultad de Historia\n10 créditos", semestre: 4, prereqs: [] },
    { id: "fil2001", nombre: "Filosofía: ¿Para qué?", desc: "Facultad de Filosofía\n10 créditos", semestre: 4, prereqs: [] },
    // Semestre 5
    { id: "edu0332", nombre: "Didáctica de la matemática I", desc: "Facultad de Educación\n10 créditos\nEs prerequisito de:\n- Didáctica de la matemática II\n- Práctica III", semestre: 5, prereqs: ["eyp1020", "mat1930", "edu0315", "edu0318", "edu0319"] },
    { id: "edu0336", nombre: "Didáctica de las ciencias naturales", desc: "Facultad de Educación\n10 créditos\nEs prerequisito de:\n- Práctica III\n- Didáctica de las ciencias naturales II", semestre: 5, prereqs: ["bio155e", "edu0315", "edu0318", "edu0319", "qim100p"] },
    { id: "edu0322", nombre: "Literatura para niños", desc: "Facultad de Educación\n10 créditos\nEs prerequisito de:\n- Literatura infantil y juvenil (mención Lenguaje y comunicación)\n- Didáctica de la comunicación multimodal (mención Lenguaje y comunicación)", semestre: 5, prereqs: [] },
    { id: "edu0339", nombre: "Práctica II", desc: "Facultad de Educación\n10 créditos\nEs prerequisito de:\n- Práctica III", semestre: 5, prereqs: ["edu0338", "edu0318", "edu0319", "edu0330"] },
    { id: "ofg1", nombre: "Formación general", desc: "10 créditos", semestre: 5, prereqs: [] },
    // Semestre 6
    { id: "edu0333", nombre: "Didáctica de la matemática II", desc: "Facultad de Educación\n10 créditos\nEs prerequisito de:\n- Práctica Profesional I\n- Álgebra y sistemas numéricos I (mención Matemática)\n- Probabilidad y estadística (mención Matemática)", semestre: 6, prereqs: ["edu0332"] },
    { id: "fis119e", nombre: "Fisica general para educación básica", desc: "Facultad de Fisica\n10 créditos\nEs prerequisito de:\n- Didáctica de las ciencias naturales II", semestre: 6, prereqs: [] },
    { id: "edu0331", nombre: "Didáctica de la escritura", desc: "Facultad de Educación\n10 créditos\nEs prerequisito de:\n- Práctica Profesional I\n- Elementos de gramática española (mención Lenguaje y comunicación)\n- Didáctica de la comunicación multimodal (mención Lenguaje y comunicación)", semestre: 6, prereqs: ["let002b", "edu0315", "edu0318", "edu0319"] },
    { id: "edu0334", nombre: "Didáctica de las ciencias sociales", desc: "Facultad de Educación\n10 créditos\nEs prerequisito de:\n- Práctica III", semestre: 6, prereqs: ["edu0323", "edu0318", "edu0319", "edu0315"] },
    { id: "ofg2", nombre: "Formación general", desc: "10 créditos", semestre: 6, prereqs: [] },
    // Semestre 7
    { id: "edu0321", nombre: "Seminario de investigación en educación", desc: "Facultad de Educación\n10 créditos\nEs prerequisito de:\n- Elementos de gramática española (mención Lenguaje y comunicación)", semestre: 7, prereqs: [] },
    { id: "geo111", nombre: "Geografía de Chile: Espacio y sociedad", desc: "Facultad de Geografía\n10 créditos", semestre: 7, prereqs: [] },
    { id: "edu0340", nombre: "Práctica III", desc: "Facultad de Educación\n10 créditos\nEs prerequisito de:\n- Práctica Profesional I\n-  Elementos de gramática española (mención Lenguaje y comunicación)", semestre: 7, prereqs: ["edu0339", "edu0332", "edu0334", "edu0336"] },
    { id: "ofg3", nombre: "Formación general", desc: "10 créditos", semestre: 7, prereqs: [] },
    { id: "ofg4", nombre: "Formación general", desc: "10 créditos", semestre: 7, prereqs: [] },
     // Semestre 8
     { id: "edu0337", nombre: "Didáctica de las ciencias naturales II", desc: "Facultad de Educación\n10 créditosEs prerequisito de:\n- Práctica Profesional I\n- Didáctica de las ciencias naturales III (mención Ciencias naturales)", semestre: 8, prereqs: ["fis119e", "edu0336"] },
     { id: "edu556", nombre: "Dimensión ética de la profesión docente", desc: "Facultad de Educación\n5 créditos", semestre: 8, prereqs: [] },
     {id: "edu0307", nombre: "Historia y políticas educacionales", semestre: 8, desc: "Facultad de Educación\n5 créditos", prereqs: [], grupoOptativo: "optativos1"},
     {id: "edu0308", nombre: "Educación y filosofía", semestre: 8, desc: "Facultad de Educación\n5 créditos", prereqs: [], grupoOptativo: "optativos1"},
     {id: "edu0309", nombre: "Educación, cultura y sociedad", semestre: 8, desc: "Facultad de Educación\n5 créditos", prereqs: [], grupoOptativo: "optativos1"},
     { id: "ofg5", nombre: "Formación general", desc: "10 créditos", semestre: 8, prereqs: [] },
     { id: "ofg6", nombre: "Formación general", desc: "10 créditos", semestre: 8, prereqs: [] }, 
     // Semestre 9
     { id: "edu0316", nombre: "Gestión y liderazgo en el aula", desc: "Facultad de Educación\n 10 créditos", prereqs: [], semestre: 9 },
     { id: "edu0360", nombre: "Práctica Profesional I", desc: "Facultad de Educación\n20 créditos\nEs prerequisito de:\n- Práctica Profesional II (mención)\n- Didáctica de las ciencias naturales III (mención Ciencias naturales)", semestre: 9, prereqs: ["edu0340", "edu0331", "edu0333", "edu0334", "edu0337"] },
  ];
  
const menciones = {
    lenguaje: [
      { id: "let003b", nombre: "Elementos de gramática española", desc: "Facultad de Letras\n 10 créditos\nEs prerequisito de:\n- Gramática para la competencia comunicativa", prereqs: ["edu0321", "edu0322", "edu0331", "edu0340", "let002B"], semestre: 9 },
      { id: "edu0361", nombre: "Literatura infantil y juvenil", desc: "Facultad de Educación\n 10 créditos", prereqs: ["edu0330", "edu0322"], semestre: 9 },
      { id: "let004b", nombre: "Gramática para la competencia comunicativa", desc: "Facultad de Letras\n 10 créditos", prereqs: ["let003B"], semestre: 10 },
      { id: "edu0362", nombre: "Leer y escribir a traves del currículum", desc: "Facultad de Educación\n 10 créditos", prereqs: [], semestre: 10 },
      { id: "edu0363", nombre: "Didáctica de la comunicación multimodal", desc: "Facultad de Educación\n 10 créditos", prereqs: ["edu0330", "edu0322", "edu0331"], semestre: 10 },
      { id: "edu0366", nombre: "Práctica profesional II (Mención)", desc: "Facultad de Educación\n 20 créditos", prereqs: ["edu0360"], semestre: 10 },
    ],
    matematica: [
        { id: "mat2920", nombre: "Álgebra y sistemas numéricos I", desc: "Facultad de Matemática\n 10 créditos\nEs prerequisito de:\n- Álgebra y sistemas numéricos II\n- Didáctica de la matemática III", prereqs: ["edu0333"], semestre: 9 },
        { id: "mat2930", nombre: "Geometría II", desc: "Facultad de Matemática\n 10 créditos\nEs prerequisito de:\n- Didáctica de la matemática III", prereqs: ["mat1930"], semestre: 9 },
        { id: "eyp2020", nombre: "Probabilidad y estadística", desc: "Facultad de Matemáticas\n 10 créditos", prereqs: ["eyp1020", "edu0333"], semestre: 10 },
        { id: "mat2925", nombre: "Álgebra y sistemas numéricos II", desc: "Facultad de Matemática\n 10 créditos", prereqs: ["mat2920"], semestre: 10 },
        { id: "edu0370", nombre: "Didáctica de la matemática III", desc: "Facultad de Educación\n 10 créditos", prereqs: ["mat2920", "mat2930"], semestre: 10 },
        { id: "edu0376", nombre: "Práctica profesional II (Mención)", desc: "Facultad de Educación\n 20 créditos", prereqs: ["edu0360"], semestre: 10 },
    ],
    naturales: [
        {id: "bio110c", nombre: "Biología de organismos y comunidades", semestre: 9, desc: "Facultad de Ciencias biológicas\n10 créditos", prereqs: [], grupoOptativo: "optativosbio"},
        {id: "bio145g", nombre: "Microbiología e inmunología", semestre: 9, desc: "Facultad de Ciencias biológicas\n10 créditos", prereqs: [], grupoOptativo: "optativosbio"},
        {id: "bio219e", nombre: "Biología y diversidad vegetal", semestre: 9, desc: "Facultad de Ciencias biológicas\n10 créditos", prereqs: ["bio155e"], grupoOptativo: "optativosfis"},
        {id: "ast0111", nombre: "Astronomía", semestre: 9, desc: "Facultad de Astrofisica\n10 créditos", prereqs: [], grupoOptativo: "optativosfis"},
        {id: "geo104", nombre: "Geografía Física General", semestre: 9, desc: "Facultad de Geografía\n10 créditos", prereqs: [], grupoOptativo: "optativosfis"},
        {id: "qim120", nombre: "Química en la naturaleza y la sociedad", semestre: 10, desc: "Facultad de Química\n10 créditos", prereqs: [], grupoOptativo: "optativosqim"},
        {id: "qif117", nombre: "El mundo de los medicamentos", semestre: 10, desc: "Facultad de Química\n10 créditos", prereqs: [], grupoOptativo: "optativosqim"},
        {id: "edu0393", nombre: "Didáctica de las ciencias naturales III", desc: "Facultad de Educación\n 10 créditos", prereqs: ["edu0360", "edu0337"], semestre: 10 },
        {id: "optc", nombre: "Optativo ciencias", desc: "10 créditos", prereqs: [], semestre: 10 },
        { id: "edu0396", nombre: "Práctica profesional II (Mención)", desc: "Facultad de Educación\n 20 créditos", prereqs: ["edu0360"], semestre: 10 },
    ],
    sociales: [
        { id: "ihi101", nombre: "Intrdoducción a la historia", desc: "Facultad de Letras\n 10 créditos", prereqs: [], semestre: 9 },
        { id: "ihi0214", nombre: "Historia de Chile contemporáneo", desc: "Facultad de Educación\n 10 créditos", prereqs: [], semestre: 9 },
        { id: "ihi0211", nombre: "Chile y América indígena", desc: "Facultad de Historia\n 10 créditos", prereqs: [], semestre: 10 },
        { id: "geo103", nombre: "Geografía humana general", desc: "Facultad de Geografía\n 10 créditos", prereqs: [], semestre: 10 },
        { id: "edu0380", nombre: "Didáctica de la historia", desc: "Facultad de Educación\n 10 créditos", prereqs: [], semestre: 10 },
        { id: "edu0386", nombre: "Práctica profesional II (Mención)", desc: "Facultad de Educación\n 20 créditos", prereqs: ["edu0360"], semestre: 10 },
      
      ],
  };
  let estadoRamos = {};

function guardarEstado() {
  localStorage.setItem("estadoRamos", JSON.stringify(estadoRamos));
}

function cargarEstado() {
  const guardado = localStorage.getItem("estadoRamos");
  if (guardado) {
    estadoRamos = JSON.parse(guardado);
  }
}

function crearRamo(ramo) {
  const div = document.createElement("div");
  div.className = "ramo bloqueado";
  div.innerText = ramo.nombre;
  div.setAttribute("id", ramo.id);

  // Tooltip simple
  div.addEventListener("mouseenter", (e) => mostrarTooltip(e, ramo.desc));
  div.addEventListener("mousemove", (e) => moverTooltip(e));
  div.addEventListener("mouseleave", ocultarTooltip);

  div.addEventListener("click", () => {
    if (div.classList.contains("bloqueado")) return;

    if (estadoRamos[ramo.id]) {
      delete estadoRamos[ramo.id];
    } else {
      estadoRamos[ramo.id] = true;
    }

    actualizarRamos();
  });

  return div;
}

function mostrarTooltip(e, texto) {
  const tooltip = document.getElementById("tooltip");
  tooltip.innerText = texto;
  tooltip.style.display = "block";
  moverTooltip(e);
}

function moverTooltip(e) {
  const tooltip = document.getElementById("tooltip");
  tooltip.style.left = e.pageX + 15 + "px";
  tooltip.style.top = e.pageY + 15 + "px";
}

function ocultarTooltip() {
  document.getElementById("tooltip").style.display = "none";
}

function actualizarRamos() {
    const optativoSeleccionado = {};
  
    ramos.forEach(ramo => {
      const div = document.getElementById(ramo.id);
      if (!div) return;
  
      const completado = estadoRamos[ramo.id];
      const puedeActivarse = ramo.prereqs.every(pr => estadoRamos[pr]);
  
      div.classList.remove("completado", "bloqueado");
  
      if (completado) {
        div.classList.add("completado");
        // Si es parte de grupo optativo, lo marcamos como seleccionado
        if (ramo.grupoOptativo) {
          optativoSeleccionado[ramo.grupoOptativo] = ramo.id;
        }
      } else if (!puedeActivarse) {
        div.classList.add("bloqueado");
      }
    });
  
    // Bloquear los otros del mismo grupo optativo
    Object.entries(optativoSeleccionado).forEach(([grupo, idSeleccionado]) => {
      ramos.forEach(r => {
        if (r.grupoOptativo === grupo && r.id !== idSeleccionado) {
          const otroDiv = document.getElementById(r.id);
          if (otroDiv && !estadoRamos[r.id]) {
            otroDiv.classList.add("bloqueado");
          }
        }
      });
    });
  
    guardarEstado();
  }


  function renderMalla() {
    cargarEstado();
  
    const container = document.getElementById("malla-container");
    container.innerHTML = "";
  
    // Crear columnas fijas para todos los semestres del 1 al 10
    for (let sem = 1; sem <= 10; sem++) {
      const columna = document.createElement("div");
      columna.className = "semestre-column";
      columna.id = `semestre-${sem}`;
  
      const titulo = document.createElement("h3");
      titulo.innerText = `Semestre ${sem}`;
      columna.appendChild(titulo);
  
      container.appendChild(columna);
    }
  
    // Agrupar ramos actuales por semestre
    const porSemestre = {};
    ramos.forEach(ramo => {
      const semestre = Number(ramo.semestre);
      if (!porSemestre[semestre]) {
        porSemestre[semestre] = [];
      }
      porSemestre[semestre].push(ramo);
    });
  
    // Agregar los ramos que ya tienes
    Object.entries(porSemestre).forEach(([sem, ramosSem]) => {
      const columna = document.getElementById(`semestre-${sem}`);
      if (!columna) return;
  
      ramosSem.forEach(ramo => {
        const div = crearRamo(ramo);
        columna.appendChild(div);
      });
    });
  
    actualizarRamos();
  }
  ;

function toggleRamoCompletion(ramo, div) {
    if (ramo.bloqueado) return;
  
    // Si ya está completado, lo desmarcamos
    if (ramo.completado) {
      ramo.completado = false;
      div.classList.remove("completado");
  
      // Si pertenece a un grupo optativo, desbloqueamos los demás
      if (ramo.grupoOptativo) {
        ramos.forEach(r => {
          if (r.grupoOptativo === ramo.grupoOptativo && r.codigo !== ramo.codigo) {
            r.bloqueado = false;
            document.getElementById(r.codigo)?.classList.remove("bloqueado");
          }
        });
      }
    } else {
      ramo.completado = true;
      div.classList.add("completado");
  
      // Si pertenece a un grupo optativo, bloqueamos los demás
      if (ramo.grupoOptativo) {
        ramos.forEach(r => {
          if (r.grupoOptativo === ramo.grupoOptativo && r.codigo !== ramo.codigo) {
            r.bloqueado = true;
            document.getElementById(r.codigo)?.classList.add("bloqueado");
          }
        });
      }
    }
  
    guardarEstado();
    actualizarEstadoRamos();
  }  

document.getElementById("mencionSelect").addEventListener("change", function () {
  const seleccion = this.value;

  // Elimina antiguos ramos de mención
  document.querySelectorAll(".ramo.mencion").forEach(el => el.remove());

  if (seleccion && menciones[seleccion]) {
    menciones[seleccion].forEach(ramo => {
      const div = crearRamo(ramo);
      div.classList.add("mencion");

      const columna = document.querySelector(`#semestre-${ramo.semestre}`);
      if (columna) {
        columna.appendChild(div);
      }
      ramos.push(ramo);
    });

    actualizarRamos(); // para que se bloquee o active según prerequisitos
  }
});


function reiniciarMalla() {
  localStorage.removeItem("estadoRamos");
  estadoRamos = {};
  actualizarRamos();
}

renderMalla();