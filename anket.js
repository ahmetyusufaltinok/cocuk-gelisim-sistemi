// ===================================
// YAŞ GRUPLARINA GÖRE SORULAR
// ===================================

const soruSetleri = {

  "6-12ay": [
    { soru: "Bebeğiniz nesneleri iki eli arasında aktarabilir mi?", kategori: "motor", secenekler: ["Evet kolayca", "Bazen yapıyor", "Hayır yapamıyor"] },
    { soru: "Bebeğiniz küçük nesneleri baş ve işaret parmağıyla tutabiliyor mu?", kategori: "motor", secenekler: ["Evet kolayca", "Bazen yapıyor", "Hayır yapamıyor"] },
    { soru: "Bebeğiniz desteksiz oturabilir mi?", kategori: "motor", secenekler: ["Evet kolayca", "Destekle oturuyor", "Hayır oturamiyor"] },
    { soru: "Bebeğiniz emekleyebiliyor mu?", kategori: "motor", secenekler: ["Evet aktif olarak", "Henüz deniyor", "Hayır henüz değil"] },
    { soru: "Bebeğiniz oyuncaklara uzanıp kavrayabiliyor mu?", kategori: "motor", secenekler: ["Evet kolayca", "Bazen yapıyor", "Hayır zorlanıyor"] },
    { soru: "Adını söylenince başını çevirip bakıyor mu?", kategori: "dil", secenekler: ["Evet hep bakıyor", "Bazen bakıyor", "Hayır bakmıyor"] },
    { soru: "Bebeğiniz 'anne', 'baba' gibi sesler çıkarabiliyor mu?", kategori: "dil", secenekler: ["Evet söylüyor", "Ses çıkarıyor ama net değil", "Hayır ses çıkarmıyor"] },
    { soru: "El sallama veya alkış gibi hareketleri taklit edebiliyor mu?", kategori: "dil", secenekler: ["Evet taklit ediyor", "Bazen deniyor", "Hayır taklit etmiyor"] },
    { soru: "'Hayır' veya 'gel' gibi basit kelimelere tepki veriyor mu?", kategori: "dil", secenekler: ["Evet anlıyor", "Bazen anlıyor", "Hayır anlamıyor"] },
    { soru: "Bebeğiniz tanıdık yüzlere gülümsüyor mu?", kategori: "sosyal", secenekler: ["Evet hep gülümsüyor", "Bazen gülümsüyor", "Hayır gülümsemiyor"] },
    { soru: "Yabancı biri görünce tedirgin oluyor mu?", kategori: "sosyal", secenekler: ["Normal tepki veriyor", "Hafif tedirgin oluyor", "Aşırı ağlıyor veya hiç tepki vermiyor"] },
    { soru: "Bebeğiniz göz teması kurabiliyor mu?", kategori: "sosyal", secenekler: ["Evet rahatça kuruyor", "Bazen kuruyor", "Hayır kuramıyor"] },
    { soru: "Yalnız bırakıldığında nasıl tepki veriyor?", kategori: "baglanma", secenekler: ["Sakin kalıyor", "Biraz ağlıyor", "Aşırı ağlıyor sakinleşmiyor"] },
    { soru: "Bebeğiniz oyuncaklarla ilgileniyor mu?", kategori: "baglanma", secenekler: ["Evet çok ilgileniyor", "Bazen ilgileniyor", "Hayır ilgilenmiyor"] },
    { soru: "Bebeğiniz ebeveynle göz göze gelince mutlu oluyor mu?", kategori: "baglanma", secenekler: ["Evet çok mutlu oluyor", "Bazen oluyor", "Hayır tepki vermiyor"] }
  ],

  "1-2yas": [
    { soru: "Çocuğunuz en az 5-10 kelime söyleyebiliyor mu?", kategori: "dil", secenekler: ["Evet söylüyor", "2-3 kelime söylüyor", "Hayır henüz yok"] },
    { soru: "'Getir', 'bırak' gibi basit yönergeleri anlıyor mu?", kategori: "dil", secenekler: ["Evet anlıyor", "Bazen anlıyor", "Hayır anlamıyor"] },
    { soru: "İki kelimeyi birleştirerek cümle kurabiliyor mu? (mama ver, top al)", kategori: "dil", secenekler: ["Evet kuruyor", "Tek kelime kullanıyor", "Hayır henüz değil"] },
    { soru: "Resimli kitaplardaki nesneleri gösterebiliyor mu?", kategori: "dil", secenekler: ["Evet gösteriyor", "Bazen gösteriyor", "Hayır gösteremiyor"] },
    { soru: "Kaşık tutup yemek yiyebiliyor mu?", kategori: "motor", secenekler: ["Evet kendi yiyor", "Yardımla yapıyor", "Hayır yapamıyor"] },
    { soru: "Kitap sayfalarını çevirebiliyor mu?", kategori: "motor", secenekler: ["Evet çevirebiliyor", "Bazen yapıyor", "Hayır yapamıyor"] },
    { soru: "2-3 küpü üst üste koyarak kule yapabiliyor mu?", kategori: "motor", secenekler: ["Evet yapıyor", "1-2 küp koyuyor", "Hayır yapamıyor"] },
    { soru: "Kalemle karalama yapabiliyor mu?", kategori: "motor", secenekler: ["Evet yapıyor", "Bazen deniyor", "Hayır yapamıyor"] },
    { soru: "Ebeveynden ayrılınca aşırı ağlıyor mu?", kategori: "baglanma", secenekler: ["Hayır sakin kalıyor", "Biraz ağlıyor sonra sakinleşiyor", "Evet çok uzun süre ağlıyor"] },
    { soru: "Diğer çocuklarla ilgileniyor mu?", kategori: "sosyal", secenekler: ["Evet çok ilgileniyor", "Bazen bakıyor", "Hayır ilgilenmiyor"] },
    { soru: "Duygularını yüz ifadesiyle gösterebiliyor mu?", kategori: "sosyal", secenekler: ["Evet rahatça gösteriyor", "Bazen gösteriyor", "Hayır gösteremiyor"] },
    { soru: "Oyunda sıra bekleme var mı?", kategori: "sosyal", secenekler: ["Evet bekleyebiliyor", "Zorlanıyor ama deniyor", "Hayır bekleyemiyor"] },
    { soru: "Yeni bir ortama uyum sağlayabiliyor mu?", kategori: "baglanma", secenekler: ["Evet kolayca", "Biraz zaman alıyor", "Hayır çok zorlanıyor"] },
    { soru: "Tek başına oynayabiliyor mu?", kategori: "baglanma", secenekler: ["Evet oynuyor", "Kısa süre oynuyor", "Hayır sürekli yanında olmanı istiyor"] },
    { soru: "Tanıdık olmayan yetişkinlere karşı tutumu nasıl?", kategori: "sosyal", secenekler: ["Normal tepki veriyor", "Çekingen ama uyum sağlıyor", "Aşırı kaygı yaşıyor"] }
  ],

  "3-4yas": [
    { soru: "Çocuğunuz cümleler kurarak kendini ifade edebiliyor mu?", kategori: "dil", secenekler: ["Evet rahatça", "Kısa cümleler kuruyor", "Hayır tek kelimeyle anlatıyor"] },
    { soru: "Renkleri ve temel şekilleri biliyor mu?", kategori: "dil", secenekler: ["Evet biliyor", "Bazılarını biliyor", "Hayır bilmiyor"] },
    { soru: "Yaşadığı bir olayı anlatabilir mi?", kategori: "dil", secenekler: ["Evet detaylı anlatıyor", "Kısmen anlatıyor", "Hayır anlatamıyor"] },
    { soru: "Sorulara uygun cevap verebiliyor mu?", kategori: "dil", secenekler: ["Evet uygun cevap veriyor", "Bazen veriyor", "Hayır veremıyor"] },
    { soru: "Makas kullanabiliyor mu?", kategori: "motor", secenekler: ["Evet kullanıyor", "Yardımla kullanıyor", "Hayır kullanamıyor"] },
    { soru: "Kalem tutup şekil çizebiliyor mu?", kategori: "motor", secenekler: ["Evet çizebiliyor", "Karalama yapıyor", "Hayır yapamıyor"] },
    { soru: "Küçük nesneleri yerleştirme yapabiliyor mu? (puzzle, lego)", kategori: "motor", secenekler: ["Evet kolayca", "Bazen yapıyor", "Hayır yapamıyor"] },
    { soru: "Kıyafetlerini yardımsız giyebiliyor mu?", kategori: "motor", secenekler: ["Evet giyiyor", "Bazen yardım istiyor", "Hayır yapamıyor"] },
    { soru: "Arkadaşlarıyla birlikte oynayabiliyor mu?", kategori: "sosyal", secenekler: ["Evet oynuyor", "Yanlarında oynuyor ama birlikte değil", "Hayır yalnız oynamayı tercih ediyor"] },
    { soru: "Kurallı oyunlara uyabiliyor mu?", kategori: "sosyal", secenekler: ["Evet uyuyor", "Bazen uyuyor", "Hayır uymuyor"] },
    { soru: "Ebeveynden bağımsız oynayabiliyor mu?", kategori: "baglanma", secenekler: ["Evet oynuyor", "Kısa süre oynuyor", "Hayır sürekli yanında olmanı istiyor"] },
    { soru: "Okula veya oyun grubuna gitmekte zorlanıyor mu?", kategori: "baglanma", secenekler: ["Hayır isteyerek gidiyor", "Bazen zorlanıyor", "Evet çok zorlanıyor"] },
    { soru: "Bir aktivitede 5-10 dakika odaklanabiliyor mu?", kategori: "dehb", secenekler: ["Evet odaklanıyor", "2-3 dakika sonra bırakıyor", "Hayır hiç odaklanamıyor"] },
    { soru: "Oturması gereken yerde durabiliyor mu?", kategori: "dehb", secenekler: ["Evet duruyor", "Kısa süre duruyor", "Hayır hiç durmuyor"] },
    { soru: "Düşünmeden hareket ediyor, dürtüsel davranışlar var mı?", kategori: "dehb", secenekler: ["Hayır yok", "Bazen var", "Evet sık sık var"] }
  ],

  "5-6yas": [
    { soru: "Çocuğunuz yaşıtlarıyla aynı seviyede konuşuyor mu?", kategori: "dil", secenekler: ["Evet aynı seviyede", "Biraz geride", "Hayır belirgin şekilde geride"] },
    { soru: "Okuma-yazma hazırlığında (harf tanıma, kalem tutma) zorlanıyor mu?", kategori: "dil", secenekler: ["Hayır zorlanmıyor", "Biraz zorlanıyor", "Evet çok zorlanıyor"] },
    { soru: "Yönergeleri anlayıp uygulayabiliyor mu?", kategori: "dil", secenekler: ["Evet kolayca", "Bazen zorlanıyor", "Hayır anlamıyor"] },
    { soru: "Hikaye anlatabilir veya dinleyebilir mi?", kategori: "dil", secenekler: ["Evet çok seviyor", "Bazen ilgileniyor", "Hayır ilgilenmiyor"] },
    { soru: "Kalemi doğru tutuyor mu?", kategori: "motor", secenekler: ["Evet doğru tutuyor", "Yanlış tutuyor ama yazabiliyor", "Hayır tutamıyor"] },
    { soru: "Makas kullanabiliyor mu?", kategori: "motor", secenekler: ["Evet kullanıyor", "Zorlanıyor", "Hayır kullanamıyor"] },
    { soru: "Bağcık bağlayabiliyor mu?", kategori: "motor", secenekler: ["Evet bağlıyor", "Deniyor ama yapamıyor", "Hayır hiç denemuyor"] },
    { soru: "Çizim yaparken sınır içinde kalabiliyor mu?", kategori: "motor", secenekler: ["Evet kalıyor", "Bazen çıkıyor", "Hayır hiç kalmıyor"] },
    { soru: "Göreve odaklanmakta zorlanıyor mu?", kategori: "dehb", secenekler: ["Hayır odaklanıyor", "Bazen zorlanıyor", "Evet çok zorlanıyor"] },
    { soru: "Aşırı hareketli mi, bir yerde duramıyor mu?", kategori: "dehb", secenekler: ["Hayır normal", "Bazen aşırı hareketli", "Evet sürekli hareket halinde"] },
    { soru: "Düşünmeden hareket ediyor mu? (dürtüsellik)", kategori: "dehb", secenekler: ["Hayır yok", "Bazen var", "Evet sık sık var"] },
    { soru: "Talimatları takip edemiyor mu?", kategori: "dehb", secenekler: ["Hayır takip ediyor", "Bazen unutuyor", "Evet hiç takip etmiyor"] },
    { soru: "Okula gitmekte zorlanıyor mu?", kategori: "baglanma", secenekler: ["Hayır isteyerek gidiyor", "Bazen zorlanıyor", "Evet ağlıyor gitmek istemiyor"] },
    { soru: "Tek başına oyun kurabiliyor mu?", kategori: "baglanma", secenekler: ["Evet oynuyor", "Kısa süre oynuyor", "Hayır sürekli yanında olmanı istiyor"] },
    { soru: "Yeni ortamlara uyum sağlayabiliyor mu?", kategori: "baglanma", secenekler: ["Evet kolayca", "Biraz zaman alıyor", "Hayır çok zorlanıyor"] }
  ]

};

// ===================================
// DEĞİŞKENLER
// ===================================
let secilenYas = "";
let mevcutSoru = 0;
let cevaplar = {};
let aktifSorular = [];

// ===================================
// YAŞ SEÇİMİ
// ===================================
function yasSec(yas) {
  secilenYas = yas;
  aktifSorular = soruSetleri[yas];
  cevaplar = {};
  mevcutSoru = 0;

  document.getElementById("yas-secim").style.display = "none";
  document.getElementById("anket-bolumu").style.display = "block";

  soruGoster(0);
}

// ===================================
// SORU GÖSTER
// ===================================
function soruGoster(index) {
  const soru = aktifSorular[index];
  const kutu = document.getElementById("soru-kutusu");

  let html = `<h2 class="soru-metni">${soru.soru}</h2><div class="secenekler">`;

  soru.secenekler.forEach((secenek, i) => {
    const secili = cevaplar[index] === i ? "secili" : "";
    html += `<button class="secenek ${secili}" onclick="cevapSec(${index}, ${i}, this)">${secenek}</button>`;
  });

  html += `</div>`;
  kutu.innerHTML = html;

  const yuzde = (index / aktifSorular.length) * 100;
  document.getElementById("ilerleme").style.width = yuzde + "%";
  document.getElementById("soru-sayac").textContent = `Soru ${index + 1} / ${aktifSorular.length}`;

  document.getElementById("btn-geri").style.display = index === 0 ? "none" : "inline-block";
  document.getElementById("btn-ileri").textContent = index === aktifSorular.length - 1 ? "Sonuçları Gör ✓" : "İleri →";
}

// ===================================
// CEVAP SEÇ
// ===================================
function cevapSec(soruIndex, secenekIndex, element) {
  cevaplar[soruIndex] = secenekIndex;
  document.querySelectorAll(".secenek").forEach(s => s.classList.remove("secili"));
  element.classList.add("secili");
}

// ===================================
// İLERİ / GERİ
// ===================================
function sonrakiSoru() {
  if (cevaplar[mevcutSoru] === undefined) {
    alert("Lütfen bir seçenek seçin!");
    return;
  }
  if (mevcutSoru < aktifSorular.length - 1) {
    mevcutSoru++;
    soruGoster(mevcutSoru);
  } else {
    sonucaGit();
  }
}

function oncekiSoru() {
  if (mevcutSoru > 0) {
    mevcutSoru--;
    soruGoster(mevcutSoru);
  }
}

// ===================================
// SONUCA GİT
// ===================================
function sonucaGit() {
  localStorage.setItem("cevaplar", JSON.stringify(cevaplar));
  localStorage.setItem("sorular", JSON.stringify(aktifSorular));
  localStorage.setItem("yasGrubu", secilenYas);
  window.location.href = "sonuc.html";
}