const hamburguer = document.querySelector(".Hamburguer");
const navMenu = document.querySelector(".navmenu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
}));

const btnVoltarTopo = document.getElementById('scrollTop');

btnVoltarTopo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

function cafe() {
    // Verifica se o dispositivo é móvel
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
    // Define a distância e o comportamento do scroll
    let scrollDistance = 600;
    let scrollBehavior = 'smooth';
  
    // Ajusta a distância e o comportamento para dispositivos móveis (opcional)
    if (isMobile) {
      scrollDistance = 650; // Ajuste a distância conforme necessário
      // scrollBehavior = 'auto'; // Se preferir um scroll instantâneo em dispositivos móveis
    }
  
    window.scrollTo({
      top: window.scrollY + scrollDistance,
      behavior: scrollBehavior
    });
  };

function entra() {
    // Verifica se o dispositivo é móvel
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
    // Define a distância e o comportamento do scroll
    let scrollDistance = 1150;
    let scrollBehavior = 'smooth';
  
    // Ajusta a distância e o comportamento para dispositivos móveis (opcional)
    if (isMobile) {
      scrollDistance = 1360; // Ajuste a distância conforme necessário
      // scrollBehavior = 'auto'; // Se preferir um scroll instantâneo em dispositivos móveis
    }
  
    window.scrollTo({
      top: window.scrollY + scrollDistance,
      behavior: scrollBehavior
    });
  };

function petiscos() {
    // Verifica se o dispositivo é móvel
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
    // Define a distância e o comportamento do scroll
    let scrollDistance = 1670;
    let scrollBehavior = 'smooth';
  
    // Ajusta a distância e o comportamento para dispositivos móveis (opcional)
    if (isMobile) {
      scrollDistance = 2320; // Ajuste a distância conforme necessário
      // scrollBehavior = 'auto'; // Se preferir um scroll instantâneo em dispositivos móveis
    }
  
    window.scrollTo({
      top: window.scrollY + scrollDistance,
      behavior: scrollBehavior
    });
  }

  function sugestoesdochefe() {
    // Verifica se o dispositivo é móvel
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
    // Define a distância e o comportamento do scroll
    let scrollDistance = 2575;
    let scrollBehavior = 'smooth';
  
    // Ajusta a distância e o comportamento para dispositivos móveis (opcional)
    if (isMobile) {
      scrollDistance = 4210; // Ajuste a distância conforme necessário
      // scrollBehavior = 'auto'; // Se preferir um scroll instantâneo em dispositivos móveis
    }
  
    window.scrollTo({
      top: window.scrollY + scrollDistance,
      behavior: scrollBehavior
    });
  }

  function pratosexecutivos() {
    // Verifica se o dispositivo é móvel
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
    // Define a distância e o comportamento do scroll
    let scrollDistance = 3520;
    let scrollBehavior = 'smooth';
  
    // Ajusta a distância e o comportamento para dispositivos móveis (opcional)
    if (isMobile) {
      scrollDistance = 6100; // Ajuste a distância conforme necessário
      // scrollBehavior = 'auto'; // Se preferir um scroll instantâneo em dispositivos móveis
    }
  
    window.scrollTo({
      top: window.scrollY + scrollDistance,
      behavior: scrollBehavior
    });
  }

  function carnes() {
    // Verifica se o dispositivo é móvel
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
    // Define a distância e o comportamento do scroll
    let scrollDistance = 4080;
    let scrollBehavior = 'smooth';
  
    // Ajusta a distância e o comportamento para dispositivos móveis (opcional)
    if (isMobile) {
      scrollDistance = 6820; // Ajuste a distância conforme necessário
      // scrollBehavior = 'auto'; // Se preferir um scroll instantâneo em dispositivos móveis
    }
  
    window.scrollTo({
      top: window.scrollY + scrollDistance,
      behavior: scrollBehavior
    });
  }


  function frangos() {
    // Verifica se o dispositivo é móvel
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
    // Define a distância e o comportamento do scroll
    let scrollDistance = 4550;
    let scrollBehavior = 'smooth';
  
    // Ajusta a distância e o comportamento para dispositivos móveis (opcional)
    if (isMobile) {
      scrollDistance = 7775; // Ajuste a distância conforme necessário
      // scrollBehavior = 'auto'; // Se preferir um scroll instantâneo em dispositivos móveis
    }
  
    window.scrollTo({
      top: window.scrollY + scrollDistance,
      behavior: scrollBehavior
    });
  }

  function frutosdomar(){
    // Verifica se o dispositivo é móvel
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
    // Define a distância e o comportamento do scroll
    let scrollDistance = 5100;
    let scrollBehavior = 'smooth';
  
    // Ajusta a distância e o comportamento para dispositivos móveis (opcional)
    if (isMobile) {
      scrollDistance = 8500; // Ajuste a distância conforme necessário
      // scrollBehavior = 'auto'; // Se preferir um scroll instantâneo em dispositivos móveis
    }
  
    window.scrollTo({
      top: window.scrollY + scrollDistance,
      behavior: scrollBehavior
    });
  }

  function acompanhamentos(){
    // Verifica se o dispositivo é móvel
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
    // Define a distância e o comportamento do scroll
    let scrollDistance = 5600;
    let scrollBehavior = 'smooth';
  
    // Ajusta a distância e o comportamento para dispositivos móveis (opcional)
    if (isMobile) {
      scrollDistance = 9450; // Ajuste a distância conforme necessário
      // scrollBehavior = 'auto'; // Se preferir um scroll instantâneo em dispositivos móveis
    }
  
    window.scrollTo({
      top: window.scrollY + scrollDistance,
      behavior: scrollBehavior
    });
  }

  function lanches(){
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    let scrollDistance = 6555;
    let scrollBehavior = 'smooth';
    if (isMobile) {
      scrollDistance = 11110; 
    }
    window.scrollTo({
      top: window.scrollY + scrollDistance,
      behavior: scrollBehavior
    });
  }

function sucosleiteevitamina(){
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  let scrollDistance = 7470;
  let scrollBehavior = 'smooth';
  if (isMobile) {
    scrollDistance = 12765; 
  }
  window.scrollTo({
    top: window.scrollY + scrollDistance,
    behavior: scrollBehavior
  });
}

function vinhos(){
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  let scrollDistance = 8400;
  let scrollBehavior = 'smooth';
  if (isMobile) {
    scrollDistance = 14430; 
  }
  window.scrollTo({
    top: window.scrollY + scrollDistance,
    behavior: scrollBehavior
  });
}

function champagne(){
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  let scrollDistance = 8950;
  let scrollBehavior = 'smooth';
  if (isMobile) {
    scrollDistance = 15150; 
  }
  window.scrollTo({
    top: window.scrollY + scrollDistance,
    behavior: scrollBehavior
  });
}

function destilados(){
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  let scrollDistance = 9265;
  let scrollBehavior = 'smooth';
  if (isMobile) {
    scrollDistance = 15650; 
  }
  window.scrollTo({
    top: window.scrollY + scrollDistance,
    behavior: scrollBehavior
  });
}

function whiskies(){
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  let scrollDistance = 9970;
  let scrollBehavior = 'smooth';
  if (isMobile) {
    scrollDistance = 16820; 
  }
  window.scrollTo({
    top: window.scrollY + scrollDistance,
    behavior: scrollBehavior
  });
}

function drinks(){
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  let scrollDistance = 10720;
  let scrollBehavior = 'smooth';
  if (isMobile) {
    scrollDistance = 18250; 
  }
  window.scrollTo({
    top: window.scrollY + scrollDistance,
    behavior: scrollBehavior
  });
}

function frigobar(){
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  let scrollDistance = 11650;
  let scrollBehavior = 'smooth';
  if (isMobile) {
    scrollDistance = 20135; 
  }
  window.scrollTo({
    top: window.scrollY + scrollDistance,
    behavior: scrollBehavior
  });
}

function diversos(){
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  let scrollDistance = 13650;
  let scrollBehavior = 'smooth';
  if (isMobile) {
    scrollDistance = 24365; 
  }
  window.scrollTo({
    top: window.scrollY + scrollDistance,
    behavior: scrollBehavior
  });
}