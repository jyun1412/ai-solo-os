(function () {
  const site = window.AI_SOLO_OS_SITE || {};

  function setTextAll(selector, value) {
    if (!value) return;

    const elements = document.querySelectorAll(selector);
    elements.forEach(function (el) {
      el.textContent = value;
    });
  }

  function setHrefAll(selector, value) {
    if (!value) return;

    const elements = document.querySelectorAll(selector);
    elements.forEach(function (el) {
      el.href = value;
    });
  }

  setTextAll("[data-site='hero.status']", site.hero?.status);
  setTextAll("[data-site='hero.titleLine1']", site.hero?.titleLine1);
  setTextAll("[data-site='hero.titleLine2']", site.hero?.titleLine2);
  setTextAll("[data-site='hero.description']", site.hero?.description);

  setTextAll("[data-site='cta.checklistText']", site.cta?.checklistText);
  setTextAll("[data-site='cta.newsletterText']", site.cta?.newsletterText);
  setTextAll("[data-site='cta.checklistButton']", site.cta?.checklistButton);
  setTextAll("[data-site='cta.newsletterButton']", site.cta?.newsletterButton);

  setTextAll("[data-site='product.title']", site.productSection?.title);
  setTextAll("[data-site='product.description']", site.productSection?.description);

  setTextAll("[data-site='footer.description']", site.footer?.description);

  setHrefAll("[data-link='home']", site.links?.home);
  setHrefAll("[data-link='blog']", site.links?.blog);
  setHrefAll("[data-link='checklist']", site.links?.checklist);
  setHrefAll("[data-link='newsletter']", site.links?.newsletter);
  setHrefAll("[data-link='gumroad']", site.links?.gumroad);
  setHrefAll("[data-link='x']", site.links?.x);
  setHrefAll("[data-link='github']", site.links?.github);
})();
