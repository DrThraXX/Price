// static/prices/js/update.js

/**
 * نمایش یا مخفی کردن اسپینر و جدول
 * (فرض می‌کنیم در HTML عنصری با id="loader-{section}" و id="{section}-table" دارید)
 */
function toggleSection(section, isLoading) {
  const loader = document.getElementById(`loader-${section}`);
  const table  = document.getElementById(`${section}-table`);
  if (loader) loader.style.display = isLoading ? 'block' : 'none';
  if (table)  table.classList.toggle('visually-hidden', isLoading);
}

/**
 * رندر داده‌های یک بخش در جدول مربوطه
 */
function updateSection(section, items) {
  const body = document.getElementById(`${section}-prices-body`);
  if (!body) return;
  body.innerHTML = '';

  if (!items || items.length === 0) {
    body.innerHTML = `<tr><td colspan="2" class="text-warning">داده‌ای برای نمایش وجود ندارد</td></tr>`;
  } else {
    items.forEach(item => {
      const tr = document.createElement('tr');

      // اگر بخش 'cars' است، اعداد را با لوکال fa-IR نمایش بده
      let price;
      if (item.price != null) {
        price = (section === 'cars')
          ? item.price.toLocaleString('fa-IR')      // ارقام فارسی
          : item.price.toLocaleString();             // ارقام انگلیسی
      } else {
        price = '-';
      }

      tr.innerHTML = `
        <td>${item.name}</td>
        <td>${price}</td>
      `;
      body.appendChild(tr);
    });
  }

  toggleSection(section, false);
}

/**
 * واکشی و به‌روزرسانی همه بخش‌ها
 */
async function refreshPrices() {
  try {
    const resp = await fetch('/api/prices/');
    const data = await resp.json();

    // بخش‌های عادی
    ['crypto','fiat','coin','metal'].forEach(sec => updateSection(sec, data[sec]));

    // بخش خودرو بدون toggleSection
    updateSection('cars', data['cars']);

  } catch (err) {
    console.error(err);
    // نمایش خطا فقط در tbody
    const body = document.getElementById('cars-prices-body');
    if (body) {
      body.innerHTML = `<tr><td colspan="2" class="text-danger">خطا در دریافت داده‌ها</td></tr>`;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // روشن کردن اسپینر همه بخش‌ها
  ['crypto','fiat','coin','metal','cars'].forEach(sec => toggleSection(sec, true));
  refreshPrices();
  setInterval(refreshPrices, 30000);
});
