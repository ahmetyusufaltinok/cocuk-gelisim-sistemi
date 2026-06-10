// ===================================
// OPENROUTER API
// ===================================
const API_KEY = "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";

async function geminiAnaliz(yasGrubu, sonuclar, sorular, cevaplar) {
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

  const soruCevaplar = sorular.map((soru, index) => {
    const cevapIndex = cevaplar[index];
    const cevapMetni = cevapIndex !== undefined ? soru.secenekler[parseInt(cevapIndex)] : "Cevaplanmadı";
    return `- ${soru.soru} → ${cevapMetni}`;
  }).join("\n");

  const promptText = `Sen Montessori Atölyesi'nin çocuk gelişim uzmanısın. Bir ebeveyn montessoriatolyesi.com sitesinde çocuğu için gelişim anketi doldurdu.

Yaş grubu: ${yasGrubu}
Gelişim profili: ${sorunlar || "Normal gelişim"}

Ebeveynin verdiği cevaplar:
${soruCevaplar}

Lütfen şunları yaz:
1. Bu cevaplara dayanarak 2-3 cümlelik kişisel bir gelişim değerlendirmesi
2. Bu gelişim alanını destekleyen Montessori yönteminin bilimsel temelli olduğunu anlat
3. Ebeveyne 2-3 pratik öneri sun (ev içinde)

ÖNEMLİ KURALLAR:
- Kesinlikle Türkçe karakterlerle yaz, başka dil kullanma
- Yazım ve dilbilgisi kurallarına dikkat et
- Montessori yönteminin bilimsel temelli olduğunu vurgula
- Samimi ve destekleyici bir dil kullan
- 200 kelimeyi geçme`;

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
    etiket: "⭐ Her Çocuğa Önerilen",
    resim: "https://montessoriatolyesi.com/cdn/shop/files/Untitled_design_23.png"
  },
  isikliPano: {
    isim: "Montessori Işıklı Ahşap Pano",
    aciklama: "Motor + duyusal + dikkat geliştirici",
    link: "https://montessoriatolyesi.com/products/montessori-isikli-ahsap-pano",
    etiket: "🎯 Profile Özel",
    resim: "https://montessoriatolyesi.com/cdn/shop/files/Kendibagimsizliginadogrubiradim_1.png"
  },
  balikTutma: {
    isim: "Eğitici Balık Tutma Seti",
    aciklama: "El-göz koordinasyonu ve odak geliştirici",
    link: "https://montessoriatolyesi.com/products/cocuk-balik-tutma-seti",
    etiket: "🎯 Profile Özel",
    resim: "https://montessoriatolyesi.com/cdn/shop/files/Kendibagimsizliginadogrubiradim_3.png"
  },
  sebzeMeyve: {
    isim: "Ahşap Sebze Meyve Eşleştirme",
    aciklama: "Dil gelişimi ve bilişsel beceri",
    link: "https://montessoriatolyesi.com/products/montessori-ahsap-sebze-meyve-gelisim-ve-kesif-arabasi",
    etiket: "🎯 Profile Özel",
    resim: "https://montessoriatolyesi.com/cdn/shop/files/Kendibagimsizliginadogrubiradim_9.png"
  },
  yumurtaEslestirme: {
    isim: "Yumurta Şekil Eşleştirme",
    aciklama: "Motor beceri ve şekil algısı",
    link: "https://montessoriatolyesi.com/products/montessori-yumurta-sekil-eslestirme-motor-beceri-oyuncagi",
    etiket: "🎯 Profile Özel",
    resim: "https://montessoriatolyesi.com/cdn/shop/files/1_d30a01cb-d4f3-4356-bb82-68e31c6cbceb.png"
  },
  duyusalOyuncak: {
    isim: "Montessori Silikon Duyusal Oyuncak",
    aciklama: "Duyusal gelişim ve motor beceri",
    link: "https://montessoriatolyesi.com/products/montessori-silikon-duyusal-oyuncak",
    etiket: "🎯 Profile Özel",
    resim: "https://montessoriatolyesi.com/cdn/shop/files/Kendibagimsizliginadogrubiradim_5.png"
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

  const yzDiv = document.getElementById("yz-analiz");
  if (yzDiv) {
   yzDiv.innerHTML = `
  <div class="yz-yukleniyor">
    <div style="display:flex; justify-content:center; gap:16px; margin-bottom:16px;">
      <span class="yz-emoji" style="animation-delay:0s;">🧩</span>
      <span class="yz-emoji" style="animation-delay:0.2s;">🔍</span>
      <span class="yz-emoji" style="animation-delay:0.4s;">⭐</span>
    </div>
    <p class="yz-baslik">Rapor hazırlanıyor...</p>
    <p class="yz-alt">Çocuğunuz için özel analiz yapılıyor</p>
    <div class="yz-progress-bar">
      <div class="yz-progress-fill"></div>
    </div>
    <div style="display:flex; justify-content:center; gap:10px;">
      <span class="yz-wiggle" style="animation-delay:0s;">🌟</span>
      <span class="yz-wiggle" style="animation-delay:0.2s;">🎨</span>
      <span class="yz-wiggle" style="animation-delay:0.4s;">🧸</span>
      <span class="yz-wiggle" style="animation-delay:0.6s;">🌈</span>
      <span class="yz-wiggle" style="animation-delay:0.8s;">🎯</span>
    </div>
  </div>`;
    const analiz = await geminiAnaliz(yasGrubu, sonuclar, sorular, cevaplar);
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
      <img src="${urunler.aktivitePanosu.resim}" alt="${urunler.aktivitePanosu.isim}" style="width:100%; height:150px; object-fit:cover; border-radius:8px; margin-bottom:10px;">
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
          <img src="${urun.resim}" alt="${urun.isim}" style="width:100%; height:150px; object-fit:cover; border-radius:8px; margin-bottom:10px;">
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
