// PUANLAMA ALGORİTMASI
function analizeEt(cevaplar, sorular) {
    let puanlar = { dehb: 0, dil: 0, motor: 0, sosyal: 0 };
    let sayilar = { dehb: 0, dil: 0, motor: 0, sosyal: 0 };
  
    sorular.forEach(function(soru, index) {
      if (soru.kategori === "genel") return;
      var cevap = cevaplar[index];
      if (cevap === undefined || cevap === null) return;
  
      var cevapSayi = parseInt(cevap);
      puanlar[soru.kategori] += cevapSayi;
      sayilar[soru.kategori]++;
    });
  
    let sonuclar = {};
    for (var kategori in puanlar) {
      if (sayilar[kategori] === 0) {
        sonuclar[kategori] = 0;
        continue;
      }
      var max = sayilar[kategori] * (3);
      sonuclar[kategori] = Math.round((puanlar[kategori] / max) * 100);
    }
  
    return sonuclar;
  }
  
  // ÖNERİ VERİTABANI
  const oneriler = {
    dehb: {
      baslik: "Dikkat & Odaklanma Desteği",
      renk: "#e74c3c",
      emoji: "🎯",
      aciklama: "Çocuğunuz odaklanma ve dikkat alanında destek gerektirebilir.",
      oyuncaklar: [
        { isim: "Montessori Sıralama Oyunu", aciklama: "Sabır ve odaklanmayı geliştirir" },
        { isim: "Labirent Oyuncakları", aciklama: "Dikkat ve konsantrasyonu artırır" },
        { isim: "Yapboz (24-48 parça)", aciklama: "Odaklanma süresini uzatır" },
        { isim: "Lego Duplo Seti", aciklama: "Yapılandırılmış oyun ile dikkati toplar" }
      ],
      aktiviteler: [
        "Günlük 10 dakika sessiz okuma saati",
        "Küçük görevler ve ödül sistemi",
        "Yoga ve nefes egzersizleri",
        "Doğada yürüyüş ve gözlem oyunları"
      ]
    },
    dil: {
      baslik: "Dil Gelişimi Desteği",
      renk: "#3498db",
      emoji: "🗣️",
      aciklama: "Çocuğunuzun dil ve iletişim becerilerini destekleyelim.",
      oyuncaklar: [
        { isim: "Hikaye Kartları Seti", aciklama: "Kelime dağarcığını zenginleştirir" },
        { isim: "Alfabe Puzzle", aciklama: "Harfleri tanıma ve okuma hazırlığı" },
        { isim: "Kukla Seti", aciklama: "Rol yapma ile dil gelişimi" },
        { isim: "Sesli Kitaplar", aciklama: "Dinleme ve anlama becerisini geliştirir" }
      ],
      aktiviteler: [
        "Her gün yüksek sesle kitap okuma",
        "Hikaye tamamlama oyunları",
        "Şarkı ve tekerleme öğrenme",
        "Resim yapıp anlatma aktiviteleri"
      ]
    },
    motor: {
      baslik: "Motor Beceri Desteği",
      renk: "#27ae60",
      emoji: "✋",
      aciklama: "Çocuğunuzun ince motor becerilerini güçlendirelim.",
      oyuncaklar: [
        { isim: "Boncuk Dizme Seti", aciklama: "Parmak kaslarını güçlendirir" },
        { isim: "Hamur Oyun Seti", aciklama: "El kaslarını geliştirir" },
        { isim: "Makas ve Kağıt Kesme Seti", aciklama: "El-göz koordinasyonu" },
        { isim: "Montessori Vida Tahtası", aciklama: "İnce motor kontrolü" }
      ],
      aktiviteler: [
        "Günlük boyama ve çizim aktiviteleri",
        "Origami (kağıt katlama)",
        "Boncuk ve ip aktiviteleri",
        "Parmak boyası ile resim"
      ]
    },
    sosyal: {
      baslik: "Sosyal-Duygusal Gelişim Desteği",
      renk: "#f39c12",
      emoji: "🤝",
      aciklama: "Çocuğunuzun sosyal ve duygusal gelişimini destekleyelim.",
      oyuncaklar: [
        { isim: "Duygu Kartları", aciklama: "Duyguları tanıma ve ifade etme" },
        { isim: "Kutu Oyunları (2-4 kişi)", aciklama: "Sıra bekleme ve paylaşmayı öğretir" },
        { isim: "Rol Yapma Kostümleri", aciklama: "Empati ve sosyal beceri gelişimi" },
        { isim: "Takım Oyunları Seti", aciklama: "İşbirliği ve takım ruhu" }
      ],
      aktiviteler: [
        "Grup oyun tarihleri düzenleyin",
        "Duygu günlüğü tutma",
        "Drama ve tiyatro aktiviteleri",
        "Aile oyun geceleri"
      ]
    }
  };
  
  // EN YÜKSEK KATEGORİ
  function enYuksekKategori(sonuclar) {
    var max = 0;
    var kategori = "sosyal";
    for (var k in sonuclar) {
      if (sonuclar[k] > max) {
        max = sonuclar[k];
        kategori = k;
      }
    }
    return kategori;
  }