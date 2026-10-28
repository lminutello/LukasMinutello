(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.gallery a[data-lightbox]'));
  if (!links.length) return;

  var box = document.createElement('div');
  box.className = 'lightbox';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.innerHTML =
    '<div class="lb-frame">' +
      '<button class="lb-close" aria-label="Close"><i class="bi bi-x-lg"></i></button>' +
      '<img class="lb-img" alt="">' +
      '<div class="lb-bar">' +
        '<span class="lb-caption"></span>' +
        '<span class="lb-count"></span>' +
        '<a class="lb-full" target="_blank" rel="noopener"><i class="bi bi-box-arrow-up-right"></i> Open full size</a>' +
      '</div>' +
    '</div>' +
    '<button class="lb-nav lb-prev" aria-label="Previous image"><i class="bi bi-chevron-left"></i></button>' +
    '<button class="lb-nav lb-next" aria-label="Next image"><i class="bi bi-chevron-right"></i></button>';
  document.body.appendChild(box);

  var img = box.querySelector('.lb-img'), cap = box.querySelector('.lb-caption'),
      count = box.querySelector('.lb-count'), full = box.querySelector('.lb-full'), i = 0;

  function show(n) {
    i = (n + links.length) % links.length;
    var a = links[i];
    img.src = a.href;
    img.alt = a.querySelector('img').alt;
    cap.textContent = a.dataset.caption || '';
    count.textContent = links.length > 1 ? (i + 1) + ' / ' + links.length : '';
    full.href = a.href;
  }
  function open(n) { show(n); box.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function close() { box.classList.remove('open'); document.body.style.overflow = ''; }

  links.forEach(function (a, n) {
    a.addEventListener('click', function (e) { e.preventDefault(); open(n); });
  });
  box.querySelector('.lb-close').addEventListener('click', close);
  box.querySelector('.lb-prev').addEventListener('click', function () { show(i - 1); });
  box.querySelector('.lb-next').addEventListener('click', function () { show(i + 1); });
  box.addEventListener('click', function (e) { if (e.target === box) close(); });
  document.addEventListener('keydown', function (e) {
    if (!box.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(i - 1);
    if (e.key === 'ArrowRight') show(i + 1);
  });
  if (links.length < 2) box.querySelectorAll('.lb-nav').forEach(function (b) { b.style.display = 'none'; });
})();
