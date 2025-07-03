function includeHTML() {
  document.querySelectorAll('[data-include]').forEach(async (el) => {
    const file = el.getAttribute('data-include');
    try {
      const resp = await fetch(file);
      if (!resp.ok) throw new Error(`No se pudo cargar ${file}`);
      el.innerHTML = await resp.text();
    } catch (e) {
      el.innerHTML = `<p style="color:red;">Error: ${e.message}</p>`;
    }
  });
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', includeHTML);
