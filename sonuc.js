// ===================================
// OPENROUTER API
// ===================================
let API_KEY = localStorage.getItem("api_key");
if (!API_KEY) {
  API_KEY = prompt("API Anahtarı:");
  if (API_KEY) localStorage.setItem("api_key", API_KEY);
}

async function geminiAnaliz(yasGrubu, sonuclar) {
  const kategoriler = {
    motor: "Motor Beceri",
    dil: "Dil Gelişimi",
    sosyal: "Sosyal Gelişim",
    baglanma: "Bağımsızlık",
    dehb: "Dikkat & Odak"
  };

  const sorunlar = Object.keys(sonuclar)
    .filter(k => sonuclar[k] > 30)
    .map(k => `${kategoriler[k]}: %${sonuclar[k]}`)
    .join(", ");

  const promptText = `Sen Montessori Atölyesi'nin çocuk gelişim uzmanısın. Bir ebeveyn montessoriatolyesi.com sitesinde çocuğu için gelişim anketi doldurdu.

Yaş grubu: ${yasGrubu}
Gelişim profili: ${sorunlar || "Normal gelişim"}

Lütfen şunları yaz:
1. 2-3 cümlelik kısa ve samimi bir gelişim değerlendirmesi
2. Bu gelişim alanını destekleyen Montessori oyuncaklarının 2-3 somut faydası
3. Ebeveyne 2 pratik öneri

Önemli: Montessori yönteminin bilimsel temelli olduğunu, çocuğun bağımsızlığını ve doğal gelişimini desteklediğini vurgula. montessoriatolyesi.com'daki ürünlerin bu gelişimi desteklediğini belirt.

Türkçe yaz, samimi ve destekleyici bir dil kullan. 200 kelimeyi geçme.`;

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
          "HTTP-Referer": "https://ahmetyusufaltinok.github.io",
          "X-Title": "Cocuk Gelisim Sistemi"
        },
        body: JSON.stringify({
        model: "openrouter/free",
          messages: [{ role: "user", content: promptText }]
        })
      }
    );
    const data = await response.json();
    return data.choices[0].message.content;
  } catch (e) {
    return null;
  }
}

// ===================================
// ÜRÜN VERİTABANI
// ===================================
const urunler = {
  aktivitePanosu: {
    isim: "Montessori Aktivite Panosu",
    aciklama: "Motor beceri, bağımsızlık ve odak geliştirici",
    link: "https://montessoriatolyesi.com/products/montessori-aktivite-panosu",
    etiket: "⭐ Her Çocuğa Önerilen"
  },
  isikliPano: {
    isim: "Montessori Işıklı Ahşap Pano",
    aciklama: "Motor + duyusal + dikkat geliştirici",
    link: "https://montessoriatolyesi.com/products/montessori-isikli-ahsap-pano",
    etiket: "🎯 Profile Özel"
  },
  balikTutma: {
    isim: "Eğitici Balık Tutma Seti",
    aciklama: "El-göz koordinasyonu ve odak geliştirici",
    link: "https://montessoriatolyesi.com/products/cocuk-balik-tutma-seti",
    etiket: "🎯 Profile Özel"
  },
  sebzeMeyve: {
    isim: "Ahşap Sebze Meyve Eşleştirme",
    aciklama: "Dil gelişimi ve bilişsel beceri",
    link: "https://montessoriatolyesi.com/products/montessori-ahsap-sebze-meyve-gelisim-ve-kesif-arabasi",
    etiket: "🎯 Profile Özel"
  },
  yumurtaEslestirme: {
    isim: "Yumurta Şekil Eşleştirme",
    aciklama: "Motor beceri ve şekil algısı",
    link: "https://montessoriatolyesi.com/products/montessori-yumurta-sekil-eslestirme-motor-beceri-oyuncagi",
    etiket: "🎯 Profile Özel"
  },
  duyusalOyuncak: {
    isim: "Montessori Silikon Duyusal Oyuncak",
    aciklama: "Duyusal gelişim ve motor beceri",
    link: "https://montessoriatolyesi.com/products/montessori-silikon-duyusal-oyuncak",
    etiket: "🎯 Profile Özel"
  }
};

// ===================================
// KATEGORİ AÇIKLAMALARI
// ===================================
const kategoriBilgi = {
  motor: {
    baslik: "Motor Beceri Desteği",
    emoji: "✋",
    renk: "#27ae60",
    aciklama: "Çocuğunuz ince motor becerilerinde destek gerektirebilir.",
    ekUrunler: ["yumurtaEslestirme", "balikTutma"]
  },
  dil: {
    baslik: "Dil Gelişimi Desteği",
    emoji: "🗣️",
    renk: "#3498db",
    aciklama: "Çocuğunuzun dil ve iletişim becerileri desteklenebilir.",
    ekUrunler: ["sebzeMeyve", "isikliPano"]
  },
  sosyal: {
    baslik: "Sosyal Gelişim Desteği",
    emoji: "🤝",
    renk: "#f39c12",
    aciklama: "Çocuğunuzun sosyal becerileri desteklenebilir.",
    ekUrunler: ["balikTutma", "sebzeMeyve"]
  },
  baglanma: {
    baslik: "Bağımsızlık Desteği",
    emoji: "🌱",
    renk: "#9b59b6",
    aciklama: "Çocuğunuz bağımsızlık becerilerinde destek gerektirebilir.",
    ekUrunler: ["aktivitePanosu", "yumurtaEslestirme"]
  },
  dehb: {
    baslik: "Dikkat & Odak Desteği",
    emoji: "🎯",
    renk: "#e74c3c",
    aciklama: "Çocuğunuz dikkat ve odaklanma alanında destek gerektirebilir.",
    ekUrunler: ["balikTutma", "isikliPano"]
  }
};

// ===================================
// ANALİZ FONKSİYONU
// ===================================
function analizeEt(cevaplar, sorular) {
  let puanlar = { motor: 0, dil: 0, sosyal: 0, baglanma: 0, dehb: 0 };
  let sayilar = { motor: 0, dil: 0, sosyal: 0, baglanma: 0, dehb: 0 };

  sorular.forEach(function(soru, index) {
    var cevap = cevaplar[index];
    if (cevap === undefined || cevap === null) return;
    puanlar[soru.kategori] += parseInt(cevap);
    sayilar[soru.kategori]++;
  });

  let sonuclar = {};
  for (var k in puanlar) {
    if (sayilar[k] === 0) continue;
    sonuclar[k] = Math.round((puanlar[k] / (sayilar[k] * 2)) * 100);
  }
  return sonuclar;
}

// ===================================
// SAYFA YÜKLENINCE
// ===================================
window.onload = async function() {
  const cevaplar = JSON.parse(localStorage.getItem("cevaplar"));
  const sorular = JSON.parse(localStorage.getItem("sorular"));
  const yasGrubu = localStorage.getItem("yasGrubu");

  if (!cevaplar || !sorular) {
    window.location.href = "anket.html";
    return;
  }

  const sonuclar = analizeEt(cevaplar, sorular);

  grafikGoster(sonuclar);
  oneriGoster(sonuclar);

  // YZ analizi
  const yzDiv = document.getElementById("yz-analiz");
  if (yzDiv) {
    yzDiv.innerHTML = "<p style='color:#666; font-style:italic; text-align:center; padding:20px;'>🤖 Yapay zeka analiz yapıyor...</p>";
    const analiz = await geminiAnaliz(yasGrubu, sonuclar);
    if (analiz) {
      yzDiv.innerHTML = `
        <div style="background:#f3eff9; border-left:4px solid #4B3263; padding:20px; border-radius:10px; margin-bottom:25px;">
          <h3 style="color:#4B3263; margin-bottom:12px;">🤖 Yapay Zeka Değerlendirmesi</h3>
          <p style="color:#333; line-height:1.8; white-space:pre-wrap;">${analiz}</p>
        </div>`;
    } else {
      yzDiv.innerHTML = "";
    }
  }
};

// ===================================
// GRAFİK
// ===================================
function grafikGoster(sonuclar) {
  const div = document.getElementById("profil-grafik");
  const isimler = {
    motor: "Motor Beceri",
    dil: "Dil Gelişimi",
    sosyal: "Sosyal Gelişim",
    baglanma: "Bağımsızlık",
    dehb: "Dikkat & Odak"
  };

  let html = "<h2>Gelişim Profili</h2><div class='grafik'>";

  for (var k in sonuclar) {
    if (!(k in isimler)) continue;
    const puan = sonuclar[k];
    const renk = puan > 60 ? "#e74c3c" : puan > 30 ? "#f39c12" : "#27ae60";
    const durum = puan > 60 ? "Destek Önerilir" : puan > 30 ? "Takip Edilmeli" : "Normal";

    html += `
      <div class="grafik-satir">
        <span class="grafik-etiket">${isimler[k]}</span>
        <div class="grafik-bar-bg">
          <div class="grafik-bar" style="width:${puan}%; background:${renk}"></div>
        </div>
        <span class="grafik-puan" style="color:${renk}">${durum}</span>
      </div>`;
  }

  html += "</div>";
  div.innerHTML = html;
}

// ===================================
// ÖNERİLER
// ===================================
function oneriGoster(sonuclar) {
  const div = document.getElementById("oneri-kutusu");
  const destekGereken = Object.keys(sonuclar).filter(k => sonuclar[k] > 30 && k in kategoriBilgi);

  let html = "";

  if (destekGereken.length > 0) {
    destekGereken.forEach(k => {
      const bilgi = kategoriBilgi[k];
      html += `
        <div class="oneri-baslik" style="border-left: 5px solid ${bilgi.renk}">
          <h3>${bilgi.emoji} ${bilgi.baslik}</h3>
          <p>${bilgi.aciklama}</p>
        </div>`;
    });
  } else {
    html += `
      <div class="oneri-baslik" style="border-left: 5px solid #27ae60">
        <h3>✅ Harika Gelişim!</h3>
        <p>Çocuğunuzun gelişimi yaşına uygun görünüyor. Desteklemeye devam edin!</p>
      </div>`;
  }

  html += `
    <h3 style="margin-top:25px">🏆 Önerilen Temel Ürün</h3>
    <div class="urun-kart ana-urun">
      <div class="urun-bilgi">
        <span class="urun-etiket">⭐ Her Çocuğa Önerilen</span>
        <strong>${urunler.aktivitePanosu.isim}</strong>
        <p>${urunler.aktivitePanosu.aciklama}</p>
      </div>
      <a href="${urunler.aktivitePanosu.link}" target="_blank" class="urun-btn">İncele →</a>
    </div>`;

  if (destekGereken.length > 0) {
    const ekUrunSeti = new Set();
    destekGereken.forEach(k => {
      kategoriBilgi[k].ekUrunler.forEach(u => ekUrunSeti.add(u));
    });

    html += `<h3 style="margin-top:25px">🎁 Profile Özel Ek Destek</h3>
    <p style="color:#666; font-size:13px; margin-bottom:15px">Birlikte alındığında gelişime daha fazla destek sağlar.</p>
    <div class="urun-grid">`;

    ekUrunSeti.forEach(urunKey => {
      if (urunKey === "aktivitePanosu") return;
      const urun = urunler[urunKey];
      html += `
        <div class="urun-kart">
          <div class="urun-bilgi">
            <span class="urun-etiket">${urun.etiket}</span>
            <strong>${urun.isim}</strong>
            <p>${urun.aciklama}</p>
          </div>
          <a href="${urun.link}" target="_blank" class="urun-btn">İncele →</a>
        </div>`;
    });

    html += `</div>`;
  }

  html += `
    <div class="hediye-banner">
      🎨 <strong>Tüm siparişlerde:</strong> Sihirli Sulu Boyama Hediye!
      <span>Motor beceri + yaratıcılık + renk algısı geliştirir ✨</span>
    </div>`;

  div.innerHTML = html;
}
