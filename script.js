'use strict';

/*
  CONFIGURAÇÃO DE CONTATO
  Para ativar o botão de WhatsApp, informe somente números com DDI e DDD.
  Exemplo: whatsappNumber: '5514999999999'
*/
const SITE_CONFIG = {
  instagramUrl: 'https://www.instagram.com/galvacentertelhas/',
  whatsappNumber: '5514981572026',
  whatsappContactName: 'Ana Flavia'
};

const products = [
  { id: 1, name: 'Telha Branca Ondulada', category: 'simples', system: 'Linha simples', profile: 'Ondulada', finish: 'Branco', config: 'Ondulada • acabamento branco • sob encomenda' },
  { id: 2, name: 'Telha Branca Sanduíche TR 25', category: 'sanduiche', system: 'Sanduíche', profile: 'TR 25', finish: 'Branco', config: 'Sanduíche • TR 25 • branco • núcleo EPS' },
  { id: 3, name: 'Telha Branca Sanduíche TR 40', category: 'sanduiche', system: 'Sanduíche', profile: 'TR 40', finish: 'Branco', config: 'Sanduíche • TR 40 • branco • núcleo EPS' },
  { id: 4, name: 'Telha Branca Semi-Sanduíche TR 25', category: 'semi', system: 'Semi-sanduíche', profile: 'TR 25', finish: 'Branco', config: 'Semi-sanduíche • TR 25 • branco' },
  { id: 5, name: 'Telha Branca Semi-Sanduíche TR 40', category: 'semi', system: 'Semi-sanduíche', profile: 'TR 40', finish: 'Branco', config: 'Semi-sanduíche • TR 40 • branco' },
  { id: 6, name: 'Telha Branca Simples TR 25', category: 'simples', system: 'Simples', profile: 'TR 25', finish: 'Branco', config: 'Simples • TR 25 • acabamento branco' },
  { id: 7, name: 'Telha Branca Simples TR 40', category: 'simples', system: 'Simples', profile: 'TR 40', finish: 'Branco', config: 'Simples • TR 40 • acabamento branco' },
  { id: 8, name: 'Telha Preta Simples TR 25', category: 'simples', system: 'Simples', profile: 'TR 25', finish: 'Preto', config: 'Simples • TR 25 • acabamento preto' },
  { id: 9, name: 'Telha Preta Simples TR 40', category: 'simples', system: 'Simples', profile: 'TR 40', finish: 'Preto', config: 'Simples • TR 40 • acabamento preto' },
  { id: 10, name: 'Telha-Forro Branca', category: 'forro', system: 'Telha-forro', profile: 'Conforme configuração', finish: 'Branco', config: 'Sistema telha-forro • acabamento branco' },
  { id: 11, name: 'Telha-Forro Madeira', category: 'forro', system: 'Telha-forro', profile: 'Conforme configuração', finish: 'Efeito madeira', config: 'Sistema telha-forro • efeito madeira' },
  { id: 12, name: 'Telha-Forro Madeira + Telha Branca', category: 'forro', system: 'Telha-forro', profile: 'Conforme configuração', finish: 'Madeira + branco', config: 'Forro madeira • face superior branca' },
  { id: 13, name: 'Telha-Forro Madeira + Trapézio Preto', category: 'forro', system: 'Telha-forro', profile: 'Trapezoidal', finish: 'Madeira + preto', config: 'Forro madeira • face superior preta trapezoidal' },
  { id: 14, name: 'Telha-Forro Natural', category: 'forro', system: 'Telha-forro', profile: 'Conforme configuração', finish: 'Natural', config: 'Sistema telha-forro • acabamento natural' },
  { id: 15, name: 'Telha-Forro Preta', category: 'forro', system: 'Telha-forro', profile: 'Conforme configuração', finish: 'Preto', config: 'Sistema telha-forro • acabamento preto' },
  { id: 16, name: 'Telha-Forro Simples Branca', category: 'forro', system: 'Forro simples', profile: 'Conforme configuração', finish: 'Branco', config: 'Linha forro simples • acabamento branco' },
  { id: 17, name: 'Telha-Forro Simples Madeira', category: 'forro', system: 'Forro simples', profile: 'Conforme configuração', finish: 'Efeito madeira', config: 'Linha forro simples • efeito madeira' },
  { id: 18, name: 'Telha-Forro Simples Natural', category: 'forro', system: 'Forro simples', profile: 'Conforme configuração', finish: 'Natural', config: 'Linha forro simples • acabamento natural' },
  { id: 19, name: 'Telha-Forro Simples Preta', category: 'forro', system: 'Forro simples', profile: 'Conforme configuração', finish: 'Preto', config: 'Linha forro simples • acabamento preto' },
  { id: 20, name: 'Telha Madeira Ondulada', category: 'simples', system: 'Linha simples', profile: 'Ondulada', finish: 'Efeito madeira', config: 'Ondulada • acabamento efeito madeira' },
  { id: 21, name: 'Telha Madeira Sanduíche TR 25', category: 'sanduiche', system: 'Sanduíche', profile: 'TR 25', finish: 'Efeito madeira', config: 'Sanduíche • TR 25 • efeito madeira' },
  { id: 22, name: 'Telha Madeira Sanduíche TR 40', category: 'sanduiche', system: 'Sanduíche', profile: 'TR 40', finish: 'Efeito madeira', config: 'Sanduíche • TR 40 • efeito madeira' },
  { id: 23, name: 'Telha Madeira Semi-Sanduíche TR 25', category: 'semi', system: 'Semi-sanduíche', profile: 'TR 25', finish: 'Efeito madeira', config: 'Semi-sanduíche • TR 25 • efeito madeira' },
  { id: 24, name: 'Telha Madeira Semi-Sanduíche TR 40', category: 'semi', system: 'Semi-sanduíche', profile: 'TR 40', finish: 'Efeito madeira', config: 'Semi-sanduíche • TR 40 • efeito madeira' },
  { id: 25, name: 'Telha Madeira Simples TR 25', category: 'simples', system: 'Simples', profile: 'TR 25', finish: 'Efeito madeira', config: 'Simples • TR 25 • efeito madeira' },
  { id: 26, name: 'Telha Madeira Simples TR 40', category: 'simples', system: 'Simples', profile: 'TR 40', finish: 'Efeito madeira', config: 'Simples • TR 40 • efeito madeira' },
  { id: 27, name: 'Telha Sanduíche Galvalume e Branca', category: 'sanduiche', system: 'Sanduíche', profile: 'Conforme configuração', finish: 'Galvalume + branco', config: 'Sanduíche • face galvalume + face branca' },
  { id: 28, name: 'Telha Sanduíche Galvalume e Branca — EPS 40 mm', category: 'sanduiche', system: 'Sanduíche', profile: 'Conforme configuração', finish: 'Galvalume + branco', config: 'Sanduíche • galvalume + branco • EPS 40 mm' },
  { id: 29, name: 'Telha Sanduíche Galvalume e Madeira', category: 'sanduiche', system: 'Sanduíche', profile: 'Conforme configuração', finish: 'Galvalume + madeira', config: 'Sanduíche • face galvalume + efeito madeira' },
  { id: 30, name: 'Telha Sanduíche Galvalume e Preto', category: 'sanduiche', system: 'Sanduíche', profile: 'Conforme configuração', finish: 'Galvalume + preto', config: 'Sanduíche • face galvalume + face preta' },
  { id: 31, name: 'Telha Semi-Sanduíche Galvalume Trapezoidal 25 Preto', category: 'semi', system: 'Semi-sanduíche', profile: 'TR 25', finish: 'Galvalume + preto', config: 'Semi-sanduíche • TR 25 • galvalume + preto' },
  { id: 32, name: 'Telha Simples Ondulada', category: 'simples', system: 'Simples', profile: 'Ondulada', finish: 'Conforme pedido', config: 'Simples • perfil ondulado • sob medida' },
  { id: 33, name: 'Telha Simples Trapézio 25', category: 'simples', system: 'Simples', profile: 'TR 25', finish: 'Conforme pedido', config: 'Simples • perfil trapezoidal 25' },
  { id: 34, name: 'Telha Simples Trapézio 40 — 40.980 — 0,50', category: 'simples', system: 'Simples', profile: 'TR 40', finish: 'Conforme pedido', config: 'Simples • perfil trapezoidal 40 • referência informada' },
  { id: 35, name: 'Telha Termoacústica Sanduíche TR 25', category: 'sanduiche', system: 'Termoacústica sanduíche', profile: 'TR 25', finish: 'Conforme composição', config: 'Termoacústica • sanduíche • TR 25' },
  { id: 36, name: 'Telha Termoacústica Sanduíche TR 40', category: 'sanduiche', system: 'Termoacústica sanduíche', profile: 'TR 40', finish: 'Conforme composição', config: 'Termoacústica • sanduíche • TR 40' },
  { id: 37, name: 'Telha Termoacústica Semi-Sanduíche TR 25', category: 'semi', system: 'Termoacústica semi-sanduíche', profile: 'TR 25', finish: 'Conforme composição', config: 'Termoacústica • semi-sanduíche • TR 25' },
  { id: 38, name: 'Telha Termoacústica Semi-Sanduíche TR 40', category: 'semi', system: 'Termoacústica semi-sanduíche', profile: 'TR 40', finish: 'Conforme composição', config: 'Termoacústica • semi-sanduíche • TR 40' }
];

const categoryLabels = {
  simples: 'Simples',
  semi: 'Semi-sanduíche',
  sanduiche: 'Sanduíche',
  forro: 'Telha-forro'
};

const finishData = {
  redwood: {
    index: '01 / 06', image: 'assets/finish-redwood.webp', alt: 'Amostra de telha metálica com acabamento madeira avermelhada', kicker: 'Efeito madeira', title: 'Madeira avermelhada', description: 'Padrão marcante e quente para composições residenciais, comerciais e arquitetônicas.', tags: ['Simples', 'Semi-sanduíche', 'Sanduíche', 'Telha-forro']
  },
  lightwood: {
    index: '02 / 06', image: 'assets/finish-lightwood.webp', alt: 'Amostra de telha metálica com acabamento madeira clara', kicker: 'Efeito madeira', title: 'Madeira clara', description: 'Visual leve e natural para projetos que pedem uma aparência acolhedora e luminosa.', tags: ['Simples', 'Semi-sanduíche', 'Sanduíche', 'Telha-forro']
  },
  mediumwood: {
    index: '03 / 06', image: 'assets/finish-mediumwood.webp', alt: 'Amostra de telha metálica com acabamento madeira média', kicker: 'Efeito madeira', title: 'Madeira média', description: 'Tonalidade equilibrada para integrar a cobertura a diferentes linguagens arquitetônicas.', tags: ['Simples', 'Semi-sanduíche', 'Sanduíche', 'Telha-forro']
  },
  white: {
    index: '04 / 06', image: 'assets/finish-white.webp', alt: 'Amostra de telha metálica branca', kicker: 'Acabamento liso', title: 'Branco', description: 'Visual claro e versátil, presente em linhas simples, semi-sanduíche, sanduíche e forro.', tags: ['Simples', 'Semi-sanduíche', 'Sanduíche', 'Telha-forro']
  },
  black: {
    index: '05 / 06', image: 'assets/finish-black.webp', alt: 'Amostra de telha metálica preta', kicker: 'Acabamento liso', title: 'Preto', description: 'Presença contemporânea para linhas simples, combinações de painéis e telha-forro.', tags: ['Simples', 'Combinações', 'Telha-forro']
  },
  natural: {
    index: '06 / 06', image: 'assets/finish-natural.webp', alt: 'Amostra de telha metálica natural ou galvalume', kicker: 'Aspecto metálico', title: 'Natural / Galvalume', description: 'Superfície metálica para linhas simples e composições de painéis conforme o produto.', tags: ['Simples', 'Sanduíche', 'Semi-sanduíche']
  }
};

const state = {
  filter: 'todos',
  query: '',
  visibleLimit: 12,
  selectedProduct: null
};

const normalizeText = (value) => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase();

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('is-visible'), 2600);
}

function initHeader() {
  const header = $('#siteHeader');
  const menuToggle = $('#menuToggle');
  const nav = $('#mainNav');
  const links = $$('a[href^="#"]', nav);

  const updateHeader = () => {
    header.classList.toggle('is-fixed', window.scrollY > 34);
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    $('#scrollProgress').style.width = `${progress}%`;
    const floatingCta = $('.floating-cta');
    if (floatingCta) floatingCta.classList.toggle('is-visible', window.scrollY > 620);
  };

  const closeMenu = () => {
    nav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
  };

  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!open));
    menuToggle.setAttribute('aria-label', open ? 'Abrir menu' : 'Fechar menu');
    nav.classList.toggle('is-open', !open);
    document.body.classList.toggle('menu-open', !open);
  });
  links.forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  const sections = $$('main section[id]');
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-30% 0px -60% 0px' });
  sections.forEach((section) => navObserver.observe(section));
}

function initReveal() {
  const elements = $$('.reveal');
  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
  elements.forEach((element) => observer.observe(element));
}

function initFinishViewer() {
  const media = $('.finish-viewer__media');
  const image = $('#finishImage');
  const buttons = $$('.finish-option');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const key = button.dataset.finish;
      const data = finishData[key];
      if (!data || button.classList.contains('is-active')) return;

      buttons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });

      media.classList.add('is-changing');
      const preloader = new Image();
      preloader.src = data.image;
      preloader.onload = () => {
        image.src = data.image;
        image.alt = data.alt;
        $('#finishCounter').textContent = data.index;
        $('#finishCaption').textContent = data.title;
        $('#finishKicker').textContent = data.kicker;
        $('#finishTitle').textContent = data.title;
        $('#finishDescription').textContent = data.description;
        $('#finishTags').innerHTML = data.tags.map((tag) => `<span>${tag}</span>`).join('');
        requestAnimationFrame(() => media.classList.remove('is-changing'));
      };
    });
  });
}

function getFilteredProducts() {
  return products.filter((product) => {
    const matchesFilter = state.filter === 'todos' || product.category === state.filter;
    const haystack = normalizeText(`${product.name} ${product.system} ${product.profile} ${product.finish} ${product.config}`);
    const matchesQuery = !state.query || haystack.includes(normalizeText(state.query));
    return matchesFilter && matchesQuery;
  });
}

function renderProducts() {
  const grid = $('#productGrid');
  const filtered = getFilteredProducts();
  const visible = filtered.slice(0, state.visibleLimit);
  grid.innerHTML = '';

  if (!visible.length) {
    grid.innerHTML = '<div class="product-empty"><strong>Nenhum produto encontrado.</strong><br>Revise a pesquisa ou selecione outro sistema.</div>';
  } else {
    const fragment = document.createDocumentFragment();
    visible.forEach((product) => {
      const card = document.createElement('article');
      card.className = 'product-card';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Ver detalhes de ${product.name}`);
      card.dataset.productId = String(product.id);
      card.innerHTML = `
        <div class="product-card__top">
          <span class="product-card__number">${String(product.id).padStart(2, '0')}</span>
          <span class="product-card__category">${categoryLabels[product.category]}</span>
        </div>
        <div class="product-card__profile">${product.profile}</div>
        <h3>${product.name}</h3>
        <p>${product.config}</p>
        <div class="product-card__footer">
          <span class="product-card__finish">${product.finish}</span>
          <span class="product-card__arrow">↗</span>
        </div>`;
      const open = () => openProductDialog(product);
      card.addEventListener('click', open);
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          open();
        }
      });
      fragment.append(card);
    });
    grid.append(fragment);
  }

  const shown = Math.min(state.visibleLimit, filtered.length);
  $('#productResultCount').textContent = filtered.length
    ? `Exibindo ${shown} de ${filtered.length} produto${filtered.length === 1 ? '' : 's'}`
    : 'Nenhum produto encontrado';

  const remaining = Math.max(filtered.length - shown, 0);
  const loadMore = $('#loadMore');
  loadMore.hidden = remaining === 0;
  $('#remainingProducts').textContent = `+${remaining}`;
}

function setFilter(filter, scrollToPortfolio = false) {
  state.filter = filter;
  state.visibleLimit = 12;
  $$('.filter-button').forEach((button) => button.classList.toggle('is-active', button.dataset.filter === filter));
  renderProducts();
  if (scrollToPortfolio) {
    $('#portfolio').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function initPortfolio() {
  $$('.filter-button').forEach((button) => button.addEventListener('click', () => setFilter(button.dataset.filter)));
  $$('.js-filter-system').forEach((button) => button.addEventListener('click', () => setFilter(button.dataset.filter, true)));
  $('#productSearch').addEventListener('input', (event) => {
    state.query = event.target.value.trim();
    state.visibleLimit = 12;
    renderProducts();
  });
  $('#loadMore').addEventListener('click', () => {
    state.visibleLimit += 12;
    renderProducts();
  });
  renderProducts();
}

function openProductDialog(product) {
  state.selectedProduct = product;
  $('#dialogNumber').textContent = `PRODUTO ${String(product.id).padStart(2, '0')} / 40`;
  $('#dialogCategory').textContent = categoryLabels[product.category];
  $('#dialogTitle').textContent = product.name;
  $('#dialogDescription').textContent = product.config;
  $('#dialogSpecs').innerHTML = `
    <div><small>Sistema</small><strong>${product.system}</strong></div>
    <div><small>Perfil</small><strong>${product.profile}</strong></div>
    <div><small>Acabamento</small><strong>${product.finish}</strong></div>`;
  $('#productDialog').showModal();
}

function initDialogs() {
  const productDialog = $('#productDialog');
  const lightbox = $('#lightboxDialog');

  $('[data-close-dialog]').addEventListener('click', () => productDialog.close());
  $('[data-close-lightbox]').addEventListener('click', () => lightbox.close());
  [productDialog, lightbox].forEach((dialog) => {
    dialog.addEventListener('click', (event) => {
      const rect = dialog.getBoundingClientRect();
      const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
      if (!inside) dialog.close();
    });
  });

  $('#selectProduct').addEventListener('click', () => {
    if (!state.selectedProduct) return;
    $('#selectedProduct').value = state.selectedProduct.name;
    const categoryToSelect = {
      simples: 'Telha simples',
      semi: 'Telha semi-sanduíche',
      sanduiche: 'Telha sanduíche / termoacústica',
      forro: 'Telha-forro'
    };
    $('#quoteSystem').value = categoryToSelect[state.selectedProduct.category] || '';
    productDialog.close();
    $('#orcamento').scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast('Produto adicionado ao briefing do orçamento.');
  });

  $$('.gallery-card').forEach((card) => {
    card.addEventListener('click', () => {
      const image = $('#lightboxImage');
      image.src = card.dataset.image;
      image.alt = card.dataset.caption;
      $('#lightboxCaption').textContent = card.dataset.caption;
      lightbox.showModal();
    });
  });
}

function buildQuoteMessage(formData) {
  const value = (key) => formData.get(key)?.toString().trim() || 'Não informado';
  return [
    'SOLICITAÇÃO DE ORÇAMENTO — GALVACENTER',
    '',
    `Nome: ${value('nome')}`,
    `Cidade / UF: ${value('cidade')}`,
    `Aplicação: ${value('aplicacao')}`,
    `Produto selecionado: ${value('produto')}`,
    `Sistema: ${value('sistema')}`,
    `Perfil: ${value('perfil')}`,
    `Acabamento: ${value('acabamento')}`,
    `Medidas e quantidade: ${value('medidas')}`,
    `Informações adicionais: ${value('observacoes')}`,
    '',
    'Observação: solicitação inicial sujeita à validação de medidas, composição, disponibilidade, prazo, logística e condições comerciais.'
  ].join('\n');
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.append(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  }
}

function initQuoteForm() {
  const form = $('#quoteForm');
  const result = $('#quoteResult');
  const preview = $('#quotePreview');
  const copyButton = $('#copyQuote');
  const whatsapp = $('#whatsappQuote');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const message = buildQuoteMessage(new FormData(form));
    preview.textContent = message;
    result.hidden = false;
    result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    if (SITE_CONFIG.whatsappNumber) {
      whatsapp.hidden = false;
      whatsapp.dataset.message = message;
    } else {
      whatsapp.hidden = true;
      delete whatsapp.dataset.message;
    }
  });

  copyButton.addEventListener('click', async () => {
    await copyText(preview.textContent);
    showToast('Resumo copiado. Agora é só enviar à equipe.');
  });

  whatsapp.addEventListener('click', () => {
    const message = whatsapp.dataset.message || preview.textContent.trim();
    if (!SITE_CONFIG.whatsappNumber || !message) {
      showToast('Gere o resumo do orçamento antes de enviar.');
      return;
    }
    const greeting = SITE_CONFIG.whatsappContactName
      ? `Olá, ${SITE_CONFIG.whatsappContactName}! Segue minha solicitação de orçamento:\n\n`
      : 'Olá! Segue minha solicitação de orçamento:\n\n';
    const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(greeting + message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });

  form.addEventListener('reset', () => {
    window.setTimeout(() => {
      result.hidden = true;
      preview.textContent = '';
      state.selectedProduct = null;
    }, 0);
  });
}

function initFaq() {
  $$('.faq details').forEach((detail) => {
    detail.addEventListener('toggle', () => {
      if (!detail.open) return;
      $$('.faq details').forEach((other) => {
        if (other !== detail) other.open = false;
      });
    });
  });
}

function init() {
  $('#currentYear').textContent = new Date().getFullYear();
  initHeader();
  initReveal();
  initFinishViewer();
  initPortfolio();
  initDialogs();
  initQuoteForm();
  initFaq();
}

document.addEventListener('DOMContentLoaded', init);
