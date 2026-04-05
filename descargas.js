setInterval(function() {
  const cajas = document.querySelectorAll('.dl-box:not(.armado)');
  
  cajas.forEach(function(caja) {
    caja.classList.add('armado');
    
    const boton = caja.querySelector('a');
    if (!boton) return;
    
    boton.classList.add('dl-btn');
    boton.textContent = 'Descargar';
    
    const titulo = caja.getAttribute('data-titulo') || "Archivo sin título";
    const peso = caja.getAttribute('data-peso') || "Desconocido";
    
    const capaOriginal = document.createElement('div');
    capaOriginal.className = 'dl-info caja-original';
    capaOriginal.innerHTML = '<div class="dl-img"></div><div class="dl-detalle"><span style="font-size: 16px; display: block; font-weight: 700;">' + titulo + '</span><small><i class="fas fa-server"></i> ' + peso + '</small></div>';
    
    const capaAdvertencia = document.createElement('div');
    capaAdvertencia.className = 'dl-info caja-advertencia';
    capaAdvertencia.style.display = 'none';
    capaAdvertencia.style.color = 'var(--danger)';
    capaAdvertencia.innerHTML = '<div class="dl-img dl-icon-warning"></div><div style="font-size: 13.5px; line-height: 1.4; color: var(--text);">Accederás a webs con archivos bajo derechos de autor. eltorga.com no se responsabiliza de su uso. Solo compartimos información de internet y nos eximimos de cualquier cargo.</div>';
    
    caja.insertBefore(capaOriginal, boton);
    caja.insertBefore(capaAdvertencia, boton);
    
    let estado = 0;
    
    boton.addEventListener('click', function(e) {
      if (estado === 0) {
        e.preventDefault(); 
        capaOriginal.style.display = 'none';
        capaAdvertencia.style.display = 'flex';
        caja.classList.add('estado-peligro');
        boton.classList.add('btn-peligro');
        boton.textContent = 'Acepto';
        estado = 1;
        
      } else if (estado === 1) {
        e.preventDefault(); 
        capaAdvertencia.style.display = 'none';
        capaOriginal.style.display = 'flex';
        caja.classList.remove('estado-peligro');
        boton.classList.remove('btn-peligro');
        boton.classList.add('btn-exito');
        boton.textContent = 'Descargar';
        estado = 2;
      }
    });
  });
}, 1000);