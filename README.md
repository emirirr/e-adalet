# E-Adalet Web Uygulaması

Türkiye Cumhuriyeti Adalet Bakanlığı'nın e-adalet sisteminin web versiyonu. Mobil görünümlü, responsive tasarımlı modern bir React uygulaması.

## 🚀 Özellikler

### 📱 Mobil-First Tasarım
- Tamamen responsive tasarım
- Touch-friendly arayüz
- Mobil cihazlarda optimize edilmiş kullanıcı deneyimi

### 🏛️ E-Adalet Özellikleri
- **Ana Sayfa**: Hızlı işlemler, son aktiviteler ve bildirimler
- **Dava Takibi**: Açık davaları görüntüleme ve takip etme
- **Belge Yükleme**: Drag & drop ile belge yükleme
- **Randevu Alma**: Mahkeme randevularını yönetme
- **Hesabım**: Profil bilgileri ve hesap ayarları

### 🎨 Modern UI/UX
- Temiz ve kullanıcı dostu arayüz
- Gradient renkler ve modern tasarım
- Smooth animasyonlar ve geçişler
- Accessibility odaklı tasarım

## 🛠️ Teknolojiler

- **React 18** - Modern React hooks ve functional components
- **React Router** - Sayfa yönlendirme
- **Lucide React** - Modern ikonlar
- **CSS3** - Responsive tasarım ve animasyonlar
- **HTML5** - Semantic markup

## 📦 Kurulum

### Gereksinimler
- Node.js (v14 veya üzeri)
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın**
   ```bash
   git clone <repository-url>
   cd e-adalet
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm install
   ```

3. **Uygulamayı başlatın**
   ```bash
   npm start
   ```

4. **Tarayıcıda açın**
   ```
   http://localhost:3000
   ```

## 🏗️ Proje Yapısı

```
src/
├── components/          # Yeniden kullanılabilir bileşenler
│   ├── Header.js       # Üst menü ve navigasyon
│   ├── Header.css
│   ├── Navigation.js   # Yan menü
│   └── Navigation.css
├── pages/              # Sayfa bileşenleri
│   ├── Home.js         # Ana sayfa
│   ├── Home.css
│   ├── DavaTakip.js    # Dava takip sayfası
│   ├── DavaTakip.css
│   ├── BelgeYukleme.js # Belge yükleme sayfası
│   ├── BelgeYukleme.css
│   ├── RandevuAlma.js  # Randevu alma sayfası
│   ├── RandevuAlma.css
│   ├── Hesabim.js      # Hesap sayfası
│   └── Hesabim.css
├── App.js              # Ana uygulama bileşeni
├── App.css             # Uygulama stilleri
├── index.js            # Giriş noktası
└── index.css           # Global stiller
```

## 📱 Responsive Tasarım

Uygulama aşağıdaki ekran boyutlarında optimize edilmiştir:

- **Mobile**: 320px - 480px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎯 Ana Özellikler

### Ana Sayfa
- Kullanıcı karşılama ekranı
- Hızlı işlem kartları
- Son aktiviteler listesi
- Bildirimler paneli

### Dava Takibi
- Dava listesi ve filtreleme
- Arama fonksiyonu
- Dava durumu takibi
- İstatistik kartları

### Belge Yükleme
- Drag & drop belge yükleme
- Dosya formatı desteği (PDF, JPG, PNG, DOC, DOCX)
- Belge durumu takibi
- Dava ile ilişkilendirme

### Randevu Alma
- Mahkeme seçimi
- Tarih ve saat seçimi
- Randevu yönetimi
- Durum takibi

### Hesabım
- Profil bilgileri düzenleme
- Güvenlik ayarları
- Bildirim tercihleri
- Belge yönetimi

## 🎨 Tasarım Sistemi

### Renkler
- **Primary**: #1e40af (Mavi)
- **Secondary**: #6b7280 (Gri)
- **Success**: #059669 (Yeşil)
- **Warning**: #f59e0b (Sarı)
- **Error**: #dc2626 (Kırmızı)

### Tipografi
- **Font Family**: System fonts (San Francisco, Segoe UI, Roboto)
- **Font Weights**: 400, 500, 600, 700

### Spacing
- **Base Unit**: 4px
- **Common Spacings**: 8px, 12px, 16px, 20px, 24px, 32px

## 🚀 Build ve Deploy

### Production Build
```bash
npm run build
```

### Test
```bash
npm test
```

## 📄 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📞 İletişim

Proje hakkında sorularınız için issue açabilirsiniz.

---

**Not**: Bu uygulama eğitim amaçlı geliştirilmiştir ve gerçek e-adalet sistemi ile bağlantısı yoktur.
