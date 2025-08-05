// المان‌ها
const imgInput = document.getElementById('imgInput');
const cropModal = document.getElementById('cropModal');
const imageToCropEl = document.getElementById('imageToCrop');
const cropCancelBtn = document.getElementById('cropCancelBtn');
const cropConfirmBtn = document.getElementById('cropConfirmBtn');
const canvas = document.getElementById('previewCanvas');
const ctx = canvas.getContext('2d');
const textInput = document.getElementById('textInput');
const fontSelect = document.getElementById('fontSelect');
const colorInput = document.getElementById('colorInput');
const sizeInput = document.getElementById('sizeInput');
const shadowColorInput = document.getElementById('shadowColorInput');
const shadowOffsetXInput = document.getElementById('shadowOffsetXInput');
const shadowOffsetYInput = document.getElementById('shadowOffsetYInput');
const shadowBlurInput = document.getElementById('shadowBlurInput');
const formTitle = document.getElementById('formTitle');
const addTextBtn = document.getElementById('addTextBtn');
const textsList = document.getElementById('textsList');
const shadowTopRange = document.getElementById('shadowTopRange');
const shadowBottomRange = document.getElementById('shadowBottomRange');
const shadowTopValue = document.getElementById('shadowTopValue');
const shadowBottomValue = document.getElementById('shadowBottomValue');
const shadowIntensityRange = document.getElementById('shadowIntensityRange');
const shadowIntensityValue = document.getElementById('shadowIntensityValue');
const mileHeightRange = document.getElementById('mileHeightRange');
const mileHeightValue = document.getElementById('mileHeightValue');
const wordControls = document.getElementById('wordControls');
const downloadBtn = document.getElementById('downloadBtn');
const FONT = 'InterNational';          // داخل گیومه
document.fonts.load(`10px ${FONT}`).then(drawAll);

const logoImg = new Image();
logoImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABDgAAAQ4CAYAAADsEGyPAAAACXBIWXMAAAsSAAALEgHS3X78AAAgAElEQVR4nOzdS3IbR7qw4SLCY1A7kHoBBOgViF6B6RWImmJieswISGIEx6YmmJpawaFWYGoFRyAXcKQV/BIXQP5RdsINS7zgUgDyy3qeCEW7O9o2UCBxeZH55dbt7W0FAAAAEFnHowcAAABEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEAAACEJ3AAAAAA4QkcAAAAQHgCBwAAABCewAEA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QJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAAJAnOAAAAIA8wQEAAADkCQ4AAAAgT3AAAAAAeYIDAAAAyBMcAAAAQJ7gAAAAAPIEBwAAANC27aK47QEZO7VRAAAAAElFTkSuQmCC';
const logoWidth = 270;        // ثابت عرض لوگو
let logoHeight;               // محاسبه می‌شود پس از لود لوگو
let logoX, logoY;             // مختصات لوگو
const margin = 20;                           // فاصله از لبه‌ها

const mileImg = new Image();
mileImg.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyOTguMjIiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZjE2ZDJlO30uY2xzLTJ7ZmlsbDojMDQyYjdkO308L3N0eWxlPjwvZGVmcz48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxyZWN0IGNsYXNzPSJjbHMtMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjE0OS4xMSIvPjxyZWN0IGNsYXNzPSJjbHMtMiIgeT0iMTQ5LjExIiB3aWR0aD0iMjQiIGhlaWdodD0iMTQ5LjExIi8+PC9nPjwvZz48L3N2Zz4=';
const mileWidth = 30;       // عرض ثابت mile
let mileHeight, mileX, mileY;

// برای درگ
let isDraggingMile = false;
let mileDragOffset = { x: 0, y: 0 };


// گوشهٔ پایین-راست
const x = canvas.width - logoWidth - margin;
const y = canvas.height - logoHeight - margin;

ctx.drawImage(logoImg, x, y, logoWidth, logoHeight);
canvas.width = 1080;
canvas.height = 1080;

let isDraggingLogo = false;
let logoDragOffset = { x: 0, y: 0 };

let shadowIntensityPct = +shadowIntensityRange.value;
let shadowTopPct = +shadowTopRange.value;
let shadowBottomPct = +shadowBottomRange.value;

let editIndex = null;
let cropper = null;
let imageDataURL = null;
let sentences = [];
let texts = [];
let isDraggingSentence = false;
let startMouse = { x: 0, y: 0 };
let originalPositions = [];  // آرایۀ { x, y } برای هر کلمه
let currentTemp = null;
let baseImg = new Image();
let isDraggingTemp = false;
let tempDragOffset = { x: 0, y: 0 };
let originalTempPositions = [];   // آرایه‌ی مختصات هر کلمهٔ temp
textInput.addEventListener('input', () => {
    const items = computeWordItems();
    populateWordControls(items);
    updateTemp();         // ← به‌جای updateMultiPreview
});
logoImg.onload = () => {
    logoHeight = logoWidth * (logoImg.height / logoImg.width);
    const margin = 20;
    logoX = canvas.width - logoWidth - margin;
    logoY = canvas.height - logoHeight - margin;
    drawAll();
};

mileImg.onload = () => {
    const naturalRatio = mileImg.height / mileImg.width;
    mileHeight = mileWidth * naturalRatio;
    mileHeightRange.value = mileHeight;
    mileHeightValue.textContent = Math.round(mileHeight);
    mileX = margin;
    mileY = canvas.height - mileHeight - margin;
    drawAll();
};
mileHeightRange.addEventListener('input', () => {
    mileHeight = +mileHeightRange.value;
    mileHeightValue.textContent = mileHeight;
    drawAll();
});
shadowTopRange.addEventListener('input', () => {
    shadowTopPct = +shadowTopRange.value;
    shadowTopValue.textContent = shadowTopPct;
    drawAll();
});
shadowBottomRange.addEventListener('input', () => {
    shadowBottomPct = +shadowBottomRange.value;
    shadowBottomValue.textContent = shadowBottomPct;
    drawAll();
});
shadowIntensityRange.addEventListener('input', () => {
    shadowIntensityPct = +shadowIntensityRange.value;
    shadowIntensityValue.textContent = shadowIntensityPct;
    drawAll();
});
function populateWordControls(words) {
    wordControls.innerHTML = '';
    words.forEach((w, idx) => {
        const row = document.createElement('div');
        row.className = 'word-row flex items-center justify-between bg-gray-50 p-3 rounded-xl';
        row.innerHTML = `
        <span class="flex-1 text-gray-800 truncate">${w.text}</span>
        <input type="color" data-word-index="${idx}" value="${w.color}"
                class="w-8 h-8 p-0 border-none rounded-lg"/>
        <input type="number" data-word-index="${idx}" min="10" max="200" value="${w.size}"
                class="w-16 text-center bg-white border border-gray-200 rounded-lg px-2 py-1"/>
        `;
        wordControls.appendChild(row);
    });
}
wordControls.addEventListener('input', e => {
    if (e.target.matches('input[type="color"], input[type="number"]')) {
        updateTemp();       // ← هر تغییری تو رنگ/سایز هر کلمه لایو پریویو
    }
});
function computeWordItemsForLine(lineText, y) {
    const tokens = lineText.trim().split(/\s+/).filter(t => t);
    if (!tokens.length) return [];

    // ۱) اندازهٔ هر کلمه
    const widths = tokens.map((token, idx) => {
        // سایز هر کلمه ممکنه از کنترلش توی wordControls تغییر کرده باشه
        const sizeEl = wordControls.querySelector(`input[data-word-index="${idx}"]`);
        const size = +sizeEl?.value || +sizeInput.value;
        ctx.font = `${size}px ${FONT}`;
        return ctx.measureText(token).width;
    });

    const margin = 20;
    // شروع از سمت راست
    let cursorX = canvas.width - margin;

    return tokens.map((token, idx) => {
        const w = widths[idx];

        // x نهایی این کلمه
        const x = cursorX - w;

        // تنظیم فاصلهٔ بعدی بر اساس عرض خود کلمه و کلمه بعد
        let nextGap = 20;
        if (idx < tokens.length - 1) {
            // ۱۰٪ از مجموع عرض این و کلمه بعدی
            nextGap = (widths[idx] + widths[idx + 1]) * 0.1;
        }

        // جا به جایی cursor برای کلمهٔ بعدی
        cursorX = x - nextGap;

        // رنگ و سایز رو از کنترل‌‌ها می‌گیریم
        const colorEl = wordControls.querySelector(`input[type=color][data-word-index="${idx}"]`);
        const sizeEl = wordControls.querySelector(`input[type=number][data-word-index="${idx}"]`);
        const color = colorEl?.value || colorInput.value;
        const size = +sizeEl?.value || +sizeInput.value;

        return {
            text: token,
            font: fontSelect.value,
            color, size,
            shadowColor: shadowColorInput.value,
            shadowOffsetX: +shadowOffsetXInput.value,
            shadowOffsetY: +shadowOffsetYInput.value,
            shadowBlur: +shadowBlurInput.value,
            x, y, align: 'right'
        };
    });
}
// تبدیل مختصات موس
function getCanvasPos(e) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: (e.clientX - rect.left) * (canvas.width / rect.width),
        y: (e.clientY - rect.top) * (canvas.height / rect.height)
    };
}

// رندر یک متن
function renderText(t) {
    ctx.save();  // برای راحتی ریست کردن همه تنظیمات بعد از رندر

    // 1. فونت و رنگ و سایه
    ctx.font = `${t.size}px ${t.font}`;
    ctx.fillStyle = t.color;
    ctx.shadowColor = t.shadowColor || 'transparent';
    ctx.shadowOffsetX = t.shadowOffsetX || 0;
    ctx.shadowOffsetY = t.shadowOffsetY || 0;
    ctx.shadowBlur = t.shadowBlur || 0;

    // 2. جهت و تراز
    if (t.align) {
        ctx.direction = 'rtl';
        ctx.textAlign = t.align;
    } else {
        ctx.direction = 'inherit';
        ctx.textAlign = 'center';
    }

    // 3. رسم
    ctx.fillText(t.text, t.x, t.y);

    ctx.restore();  // همه چیز برمی‌گردد به قبل
}
function preserveXY(newWords, oldWords) {
    if (!oldWords?.length) return newWords;
    return newWords.map((w, i) => {
        if (oldWords[i]) {
            w.x = oldWords[i].x;
            w.y = oldWords[i].y;
        }
        return w;
    });
}

function drawAll() {
    if (!imageDataURL) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
    }
    const img = new Image();
    img.onload = () => {
        // 1. تصویر اصلی
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // 2. سایه بالا/پایین (اول سایه‌ها)
        const alpha = shadowIntensityPct / 100, steps = 60;
        if (shadowTopPct > 0) {
            const h = canvas.height * (shadowTopPct / 100);
            const grad = ctx.createLinearGradient(0, 0, 0, h);
            for (let i = 0; i <= steps; i++) {
                const pos = i / steps, a = alpha * (1 - pos * pos);
                grad.addColorStop(pos, `rgba(0,0,0,${a})`);
            }
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, canvas.width, h);
        }
        if (shadowBottomPct > 0) {
            const h = canvas.height * (shadowBottomPct / 100);
            const y0 = canvas.height - h;
            const grad = ctx.createLinearGradient(0, canvas.height, 0, y0);
            for (let i = 0; i <= steps; i++) {
                const pos = i / steps, a = alpha * (1 - pos * pos);
                grad.addColorStop(pos, `rgba(0,0,0,${a})`);
            }
            ctx.fillStyle = grad;
            ctx.fillRect(0, y0, canvas.width, h);
        }

        // 3. لوگو و میله (حالا روی سایه‌ها)
        if (logoHeight) ctx.drawImage(logoImg, logoX, logoY, logoWidth, logoHeight);
        if (mileHeight) ctx.drawImage(mileImg, mileX, mileY, mileWidth, mileHeight);

        // 4. متن‌های ذخیره‌شده
        texts.forEach(item => {
            if (item.words && item.words.length) {
                item.words.forEach(w => renderText(w));
            } else {
                const lines = item.text.split('\n');
                const lineHeight = item.size * 1.2;
                const centerX = item.x;
                const topY = item.y - ((lines.length - 1) / 2) * lineHeight;
                ctx.save();
                ctx.font = `${item.size}px ${item.font}`;
                ctx.fillStyle = item.color;
                ctx.shadowColor = item.shadowColor;
                ctx.shadowOffsetX = item.shadowOffsetX;
                ctx.shadowOffsetY = item.shadowOffsetY;
                ctx.shadowBlur = item.shadowBlur;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.direction = 'rtl';
                lines.forEach((line, i) => {
                    const y = topY + i * lineHeight;
                    ctx.fillText(line, centerX, y);
                });
                ctx.restore();
            }
        });

        // 5. پیش‌نمایش موقت
        if (currentTemp?.words) {
            currentTemp.words.forEach(w => renderText(w));
        }

        // 6. ریست سایه
        ctx.shadowColor = 'transparent';
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;
    };
    img.src = imageDataURL;
}

function drawBase() {
    if (!baseImg.complete) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(baseImg, 0, 0, canvas.width, canvas.height);

    // 1. سایه‌ها
    const alpha = shadowIntensityPct / 100, steps = 60;
    if (shadowTopPct > 0) {
        const h = canvas.height * (shadowTopPct / 100);
        const grad = ctx.createLinearGradient(0, 0, 0, h);
        for (let i = 0; i <= steps; i++) {
            const pos = i / steps, a = alpha * (1 - pos * pos);
            grad.addColorStop(pos, `rgba(0,0,0,${a})`);
        }
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, h);
    }
    if (shadowBottomPct > 0) {
        const h = canvas.height * (shadowBottomPct / 100);
        const y0 = canvas.height - h;
        const grad = ctx.createLinearGradient(0, canvas.height, 0, y0);
        for (let i = 0; i <= steps; i++) {
            const pos = i / steps, a = alpha * (1 - pos * pos);
            grad.addColorStop(pos, `rgba(0,0,0,${a})`);
        }
        ctx.fillStyle = grad;
        ctx.fillRect(0, y0, canvas.width, h);
    }

    // 2. لوگو و میله روی سایه‌ها
    if (logoHeight) ctx.drawImage(logoImg, logoX, logoY, logoWidth, logoHeight);
    if (mileHeight) ctx.drawImage(mileImg, mileX, mileY, mileWidth, mileHeight);
}

function updateMultiPreview() {
    if (!imageDataURL) return;
    drawBase();

    const lines = textInput.value.split('\n');
    const baseSize = +sizeInput.value;
    const lineHeight = baseSize * 1.2;
    const margin = 20;

    ctx.save();
    ctx.font = `${baseSize}px ${fontSelect.value}`;
    ctx.fillStyle = colorInput.value;
    ctx.shadowColor = shadowColorInput.value;
    ctx.shadowOffsetX = +shadowOffsetXInput.value;
    ctx.shadowOffsetY = +shadowOffsetYInput.value;
    ctx.shadowBlur = +shadowBlurInput.value;
    ctx.textAlign = 'right';     // ← راست‌چین
    ctx.textBaseline = 'middle';
    ctx.direction = 'rtl';

    // شروع X از سمت راست
    const x = canvas.width - margin;
    // Y خط اول: بالا پایین کردن بر اساس تعداد خطوط

    const startY = currentTemp?.y ?? (canvas.height / 2);


    lines.forEach((line, i) => {
        const y = startY + i * lineHeight;
        ctx.fillText(line, x, y);
    });

    ctx.restore();
}



// بروزرسانی لیست
function updateTextsList() {
    // یکبار خالی کن
    textsList.innerHTML = '';

    // با یک بار innerHTML ستر کنیم
    const cardsHTML = texts.map((t, i) => `
        <div class="text-card" data-index="${i}">
        <span>${t.text}</span>
        <div class="flex items-center space-x-2">
            <!-- دکمه ویرایش -->
            <button data-action="edit" aria-label="ویرایش متن">
            <!-- آیکون مداد -->
    <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g>
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z"/>
        </g>
    </svg>
            </button>
            <!-- دکمه حذف -->
            <button data-action="delete" aria-label="حذف متن">
            <!-- آیکون سطل زباله -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"/>
            </svg>
            </button>
        </div>
        </div>
    `).join('');

    textsList.innerHTML = cardsHTML;
}
fontSelect.value = 'InterNational';   // برای حالت ویرایش قدیمی
fontSelect.disabled = true;           // یا element.style.display = 'none'

// یک بار event listener برای کل لیست
textsList.addEventListener('click', e => {
    const btn = e.target.closest('button[data-action]');
    if (!btn) return;
    const idx = +btn.closest('[data-index]').dataset.index;
    if (btn.dataset.action === 'edit') {
        const t = texts[idx];
        textInput.value = t.text;
        fontSelect.value = t.font;
        colorInput.value = t.color;
        sizeInput.value = t.size;
        shadowColorInput.value = t.shadowColor;
        shadowOffsetXInput.value = t.shadowOffsetX;
        shadowOffsetYInput.value = t.shadowOffsetY;
        shadowBlurInput.value = t.shadowBlur;

        editIndex = idx;
        formTitle.textContent = 'ویرایش متن';
        addTextBtn.textContent = 'بروزرسانی متن';

        // فقط یک‌بار کنترل‌ها رو با آرایه‌ی ذخیره‌شده پر می‌کنیم:
        populateWordControls(t.words);

        // و بلافاصله لایو پرِویو per-word:
        updateTemp();
    }
    else if (btn.dataset.action === 'delete') {
        // حذف آیتم از آرایه‌ی texts
        texts.splice(idx, 1);
        // به‌روزرسانی لیست کارت‌ها و رندر مجدد کانواس
        updateTextsList();
        drawAll();
        // اگر در حالت ویرایش بودی، فرم رو ریست کن
        resetForm();
    }
});
function resetForm() {
    editIndex = null;
    currentTemp = null;
    formTitle.textContent = 'افزودن متن جدید';
    addTextBtn.textContent = 'افزودن متن';
    textInput.value = '';
    // (اختیاری) ریست سایر فیلدها هم اینجا
}

// پیش‌نمایش لایو
function updateTemp() {
  const txt = textInput.value.trim();
  if (!txt || !imageDataURL) {
    currentTemp = null;
    return drawAll();
  }

  // ➊ پایهٔ مرکز قبلی (برای ویرایش)
  const base = {
    x: currentTemp?.x ?? (editIndex !== null ? texts[editIndex].x : canvas.width / 2),
    y: currentTemp?.y ?? (editIndex !== null ? texts[editIndex].y : canvas.height / 2),
  };

  // ➋ محاسبهٔ کامل موقعیت‌های جدید بر اساس اندازه‌های کلمات
  const newWords = computeWordItems();

  // ➌ حفظ مرکز بلاک در صورت نیاز
  function calcCenter(words) {
    const xs = words.map(w => w.x), ys = words.map(w => w.y);
    return {
      x: (Math.min(...xs) + Math.max(...xs)) / 2,
      y: (Math.min(...ys) + Math.max(...ys)) / 2
    };
  }
  const oldCenter = currentTemp?.words ? calcCenter(currentTemp.words) : base;
  const newCenter = calcCenter(newWords);
  const dx = oldCenter.x - newCenter.x;
  const dy = oldCenter.y - newCenter.y;
  newWords.forEach(w => { w.x += dx; w.y += dy; });

  // ➍ به‌روزرسانی currentTemp و رندر
  currentTemp = {
    text: txt,
    font: fontSelect.value,
    color: colorInput.value,
    size: +sizeInput.value,
    shadowColor: shadowColorInput.value,
    shadowOffsetX: +shadowOffsetXInput.value,
    shadowOffsetY: +shadowOffsetYInput.value,
    shadowBlur: +shadowBlurInput.value,
    x: oldCenter.x,
    y: oldCenter.y,
    words: newWords
  };

  drawAll();
}
[
    textInput,
    colorInput,
    sizeInput,
    shadowColorInput,
    shadowOffsetXInput,
    shadowOffsetYInput,
    shadowBlurInput
].forEach(el => el.addEventListener('input', updateTemp));

// هندلر plus/minus
document.querySelectorAll('button[data-action]').forEach(btn => {
    btn.addEventListener('click', e => {
        const act = btn.dataset.action, id = btn.dataset.target;
        const inp = document.getElementById(id);
        let v = parseInt(inp.value) || 0;
        if (act === 'increment') v++;
        else v--;
        if (id === 'sizeInput') v = Math.max(10, Math.min(200, v));
        inp.value = v;
        updateTemp();
    });
});
function duplicateBelow(words, offset) {
    // offset مثلاً می‌تواند  lineHeight  باشد
    return words.map(w => ({ ...w, y: w.y + offset }));
}
function computeWordItems() {
    const raw = textInput.value.trim();
    if (!raw) return [];
    const lines = raw.split('\n');
    const baseSize = +sizeInput.value;
    const lineHeight = baseSize * 1.2;
    const startY = currentTemp?.y ?? (canvas.height / 2);
    const margin = 20;

    let allItems = [];
    let globalIdx = 0;

    lines.forEach((lineText, lineNumber) => {
        const tokens = lineText.trim().split(/\s+/).filter(t => t);
        if (!tokens.length) return;

        // محاسبه عرض هر کلمه بر اساس سایز اختصاصی آن
        const widths = tokens.map((token, i) => {
            const sizeEl = wordControls.querySelector(
                `input[type="number"][data-word-index="${globalIdx + i}"]`
            );
            const size = +sizeEl?.value || baseSize;
            ctx.font = `${size}px ${fontSelect.value}`;
            return ctx.measureText(token).width;
        });

        let cursorX = canvas.width - margin;
        const y = startY + lineNumber * lineHeight;

        tokens.forEach((token, i) => {
            const w = widths[i];

            // فاصله‌ی اتوماتیک: ۱۰٪ مجموع عرض این و کلمه بعد
            let gap = 20;
            if (i < tokens.length - 1) {
                const wNext = widths[i + 1];
                gap = (w + wNext) * 0.1;
            }

            const x = cursorX;
            cursorX -= w + gap;

            // خواندن رنگ و سایز اختصاصی هر کلمه
            const colorEl = wordControls.querySelector(
                `input[type="color"][data-word-index="${globalIdx}"]`
            );
            const sizeEl = wordControls.querySelector(
                `input[type="number"][data-word-index="${globalIdx}"]`
            );
            const color = colorEl?.value || colorInput.value;
            const size = +sizeEl?.value || baseSize;

            allItems.push({
                text: token,
                font: fontSelect.value,
                color,
                size,
                shadowColor: shadowColorInput.value,
                shadowOffsetX: +shadowOffsetXInput.value,
                shadowOffsetY: +shadowOffsetYInput.value,
                shadowBlur: +shadowBlurInput.value,
                x,
                y,
                align: 'right'
            });

            globalIdx++;
        });
    });

    return allItems;
}

addTextBtn.onclick = () => {
    if (!imageDataURL) return;
    const fullText = textInput.value;
    if (!fullText) return;

    const newItem = {
        text: fullText,
        font: fontSelect.value,
        color: colorInput.value,
        size: +sizeInput.value,
        shadowColor: shadowColorInput.value,
        shadowOffsetX: +shadowOffsetXInput.value,
        shadowOffsetY: +shadowOffsetYInput.value,
        shadowBlur: +shadowBlurInput.value,
        x: currentTemp?.x ?? canvas.width / 2,
        y: currentTemp?.y ?? canvas.height / 2,
        words: currentTemp?.words ? currentTemp.words.map(w => ({ ...w })) // ← این خط
            : (() => {
                const base = computeWordItems();
                const lh = +sizeInput.value * 1.2;
                return [...base, ...duplicateBelow(base, lh)];
            })()
    };

    if (editIndex !== null) {
        texts[editIndex] = newItem;
        editIndex = null;
        formTitle.textContent = 'افزودن متن جدید';
        addTextBtn.textContent = 'افزودن متن';
    } else {
        texts.push(newItem);
    }

    currentTemp = null;
    textInput.value = '';
    drawAll();
    updateTextsList();
};

// درگ و دراپ متون
let isDraggingBlock = false;
let dragIndex = null;
let dragOffset = { x: 0, y: 0 };
// ذخیرهٔ موقعیت اولیهٔ هر کلمه


canvas.addEventListener('mousedown', e => {
    if (!imageDataURL) return;
    const pos = getCanvasPos(e);

    // از آخرین به اولین می‌چرخیم تا روی بالاترین متن باشه
    for (let i = texts.length - 1; i >= 0; i--) {
        const item = texts[i];
        if (!item.words?.length) continue;

        // حساب باکس دور کل کلمات
        let minX = Infinity, maxX = -Infinity;
        let minY = Infinity, maxY = -Infinity;
        item.words.forEach(w => {
            ctx.font = `${w.size}px ${w.font}`;
            const wW = ctx.measureText(w.text).width;
            const wH = w.size;
            minX = Math.min(minX, w.x - wW);
            maxX = Math.max(maxX, w.x);
            minY = Math.min(minY, w.y - wH / 2);
            maxY = Math.max(maxY, w.y + wH / 2);
        });

        if (pos.x >= minX && pos.x <= maxX && pos.y >= minY && pos.y <= maxY) {
            isDraggingBlock = true;
            dragIndex = i;
            // فاصلهٔ موس تا مرکز بلاک
            const centerX = (minX + maxX) / 2;
            const centerY = (minY + maxY) / 2;
            dragOffset.x = pos.x - centerX;
            dragOffset.y = pos.y - centerY;
            // موقعیت اولیهٔ تک‌تک کلمات رو ذخیره می‌کنیم
            originalPositions = item.words.map(w => ({ x: w.x, y: w.y }));
            return;
        }
    }
    if (!isDraggingBlock && currentTemp?.words?.length) {
        let minX = Infinity, maxX = -Infinity,
            minY = Infinity, maxY = -Infinity;

        currentTemp.words.forEach(w => {
            ctx.font = `${w.size}px ${w.font}`;
            const wWid = ctx.measureText(w.text).width;
            const wHei = w.size;
            minX = Math.min(minX, w.x - wWid);
            maxX = Math.max(maxX, w.x);
            minY = Math.min(minY, w.y - wHei / 2);
            maxY = Math.max(maxY, w.y + wHei / 2);
        });

        if (pos.x >= minX && pos.x <= maxX && pos.y >= minY && pos.y <= maxY) {
            isDraggingTemp = true;
            const cX = (minX + maxX) / 2;
            const cY = (minY + maxY) / 2;
            tempDragOffset.x = pos.x - cX;
            tempDragOffset.y = pos.y - cY;
            originalTempPositions = currentTemp.words.map(w => ({ x: w.x, y: w.y }));
            return;          // دیگر ادامه نده چون temp انتخاب شده
        }
    }
});

window.addEventListener('mousemove', e => {
    if (isDraggingTemp) {
        const pos = getCanvasPos(e);
        const cX = pos.x - tempDragOffset.x;
        const cY = pos.y - tempDragOffset.y;

        const initCX = originalTempPositions.reduce((s, p) => s + p.x, 0) / originalTempPositions.length;
        const initCY = originalTempPositions.reduce((s, p) => s + p.y, 0) / originalTempPositions.length;
        const dx = cX - initCX;
        const dy = cY - initCY;

        currentTemp.words.forEach((w, i) => {
            w.x = originalTempPositions[i].x + dx;
            w.y = originalTempPositions[i].y + dy;
        });

        // لازم است مرکز جدید را برای زمانی که کاربر «افزودن» می‌زند ذخیره کنیم
        currentTemp.x = cX;
        currentTemp.y = cY;

        drawAll();
        return;
    }
    if (!isDraggingBlock) return;
    const pos = getCanvasPos(e);
    const item = texts[dragIndex];
    // مرکز جدید بلاک
    const centerX = pos.x - dragOffset.x;
    const centerY = pos.y - dragOffset.y;
    // دلتا نسبت به مرکز اولیه
    const initPositions = originalPositions;
    const initCenterX = initPositions.reduce((sum, p, i) => sum + p.x, 0) / initPositions.length;
    const initCenterY = initPositions.reduce((sum, p, i) => sum + p.y, 0) / initPositions.length;
    const dx = centerX - initCenterX;
    const dy = centerY - initCenterY;
    // جابجایی همهٔ کلمات
    item.words.forEach((w, j) => {
        w.x = initPositions[j].x + dx;
        w.y = initPositions[j].y + dy;
    });
    drawAll();
});

window.addEventListener('mouseup', () => {
    isDraggingBlock = false;
    dragIndex = null;
    isDraggingTemp = false;
});

// کراپ
imgInput.onchange = () => {
    const file = imgInput.files[0]; if (!file) return;
    const rdr = new FileReader();
    rdr.onload = e => {
        imageToCropEl.src = e.target.result;
        cropModal.classList.remove('hidden');
        if (cropper) cropper.destroy();


        imageToCropEl.style.display = 'none';

        cropper = new Cropper(imageToCropEl, {
            aspectRatio: 1,
            viewMode: 2,
            cropBoxMovable: true,
            cropBoxResizable: false,
            minCropBoxWidth: 1080,
            minCropBoxHeight: 1080,
            maxCropBoxWidth: 1080,
            maxCropBoxHeight: 1080,
            background: false,
            responsive: true,
        });
    };
    rdr.readAsDataURL(file);
};
cropCancelBtn.onclick = () => {
    if (cropper) cropper.destroy();
    cropper = null;
    imageToCropEl.style.display = 'block';
    cropModal.classList.add('hidden');
};
cropConfirmBtn.onclick = () => {
    if (!cropper) return;
    const d = cropper.getData(true);
    const off = document.createElement('canvas');
    off.width = off.height = 1080;
    const octx = off.getContext('2d');
    const tmp = new Image();
    tmp.onload = () => {
        octx.drawImage(tmp, d.x, d.y, d.width, d.height, 0, 0, 1080, 1080);
        imageDataURL = off.toDataURL('image/png');
        baseImg.src = imageDataURL;
        baseImg.onload = () => {
            drawAll();          // برای اولین رندر کامل
            updateMultiPreview(); // و پیش‌نمایش چندکلمه‌ای
        };
        cropper.destroy();
        drawAll();
        cropper.destroy(); cropper = null;
        imageToCropEl.style.display = 'block';
        cropModal.classList.add('hidden');
    };
    tmp.src = imageToCropEl.src;
};
canvas.addEventListener('mousedown', e => {
    const pos = getCanvasPos(e);
    if (
        pos.x >= mileX &&
        pos.x <= mileX + mileWidth &&
        pos.y >= mileY &&
        pos.y <= mileY + mileHeight
    ) {
        isDraggingMile = true;
        mileDragOffset.x = pos.x - mileX;
        mileDragOffset.y = pos.y - mileY;
        return;
    }
    if (
        pos.x >= logoX &&
        pos.x <= logoX + logoWidth &&
        pos.y >= logoY &&
        pos.y <= logoY + logoHeight
    ) {
        isDraggingLogo = true;
        logoDragOffset.x = pos.x - logoX;
        logoDragOffset.y = pos.y - logoY;
    }
});

canvas.addEventListener('mousemove', e => {
    const pos = getCanvasPos(e);
    if (isDraggingMile) {
        mileX = pos.x - mileDragOffset.x;
        mileY = pos.y - mileDragOffset.y;
        drawAll();
        return;
    }

    if (!isDraggingLogo) return;

    logoX = pos.x - logoDragOffset.x;
    logoY = pos.y - logoDragOffset.y;
    drawAll();
});

window.addEventListener('mouseup', () => {
    isDraggingLogo = false;
    isDraggingMile = false;
});
downloadBtn.addEventListener('click', () => {
    if (!imageDataURL) return;
    const link = document.createElement('a');
    link.download = 'news-image.jpg';
    // کیفیت رو می‌تونی بین 0 و 1 تنظیم کنی (مثلاً 0.92)
    link.href = canvas.toDataURL('image/jpeg', 0.92);
    link.click();
});