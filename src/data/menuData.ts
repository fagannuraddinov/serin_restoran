export interface MenuItem {
  name: string;
  price: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  backgroundUrl: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    "id": "30 Manat Menu",
    "title": "30 Manatlıq Banket Menyusu",
    "backgroundUrl": "/images/30_manat_menu_30_manatliq_menu.jpeg",
    "items": [
      {
        "name": "SƏRİN AİLƏVİ RESTORAN\nToy, Nişan, Ad günləri və Bayram şənlikləri üçün\nMENYU 30 Azn\nSOYUQ QƏLYANALTILAR\nMeyvə (mövsümü)\nPomidor - xiyar\nPendir (mal-saçaq)\nSüzmə\nAjika\nZeytun - limon\nLəbləbi\nBlinçik (mal əti və ciyər)\nRulet (Lavaşda)\nManqal salatı\nGavalı salatı\nPaytaxt salatı\nMimoza\nKazaçki\nÇörək (xərək)\nKABABLAR\nLülə\nTikə\nAntrikod - Yablocka\nBasdırma\nToyuq\nKartof\nTərəvəz (istəyə görə)\nİSTİ YEMƏKLƏR\nÇolpa Tabaka və ya (soyutma)\nBuğlama (quzu və ya mal)\nPilov (şüüt və ya turşu qovurma)\nSƏRİN İÇKİLƏR\nQazlı su\nQazsız su\nDüşes\nTarxun\nKampot\nÇay\nƏLAVƏ XƏRCLƏR (30₼)\nSpirtli içki\nMusiqi\nKamera - foto\nDekor\nŞou proqram\nƏlaqə və Sosial Media:\nTikTok: serin.restoran.quba\nInstagram: serinrestoran_quba\nRestoran əlaqə tel: 050 550 82 82",
        "price": "30 AZN"
      }
    ]
  },
  {
    "id": "Səhər Yeməyi",
    "title": "Səhər Yeməkləri",
    "backgroundUrl": "/images/s_h_r_yem_yi_alma_cemi.jpg",
    "items": [
      {
        "name": "Xərək Çörəyi",
        "price": "1 AZN"
      },
      {
        "name": "Fəsəli",
        "price": "4 AZN"
      },
      {
        "name": "Bal",
        "price": "3 AZN"
      },
      {
        "name": "Qaymaq",
        "price": "3 AZN"
      },
      {
        "name": "Kərə yağı",
        "price": "2 AZN"
      },
      {
        "name": "Nəhrə yağı",
        "price": "4 AZN"
      },
      {
        "name": "Pendir qoyun",
        "price": "3 AZN"
      },
      {
        "name": "Pendir mal",
        "price": "2 AZN"
      },
      {
        "name": "Zeytun",
        "price": "2 AZN"
      },
      {
        "name": "Siveji",
        "price": "3 AZN"
      },
      {
        "name": "Alma cemi",
        "price": "2 AZN"
      },
      {
        "name": "Şokolad yağı",
        "price": "2 AZN"
      },
      {
        "name": "Çay",
        "price": "2 AZN"
      }
    ]
  },
  {
    "id": "SALAT",
    "title": "Salatlar",
    "backgroundUrl": "/images/salat_kaza_ka.jpg",
    "items": [
      {
        "name": "Manqal salatı",
        "price": "3 AZN"
      },
      {
        "name": "Sərin salatı",
        "price": "3 AZN"
      },
      {
        "name": "Lobya salatı",
        "price": "2 AZN"
      },
      {
        "name": "Paytaxt salatı",
        "price": "3 AZN"
      },
      {
        "name": "Mimoza",
        "price": "4 AZN"
      },
      {
        "name": "Kazaçka",
        "price": "3 AZN"
      },
      {
        "name": "Çoban salatı",
        "price": "3 AZN"
      },
      {
        "name": "Çoban salatı pendirli",
        "price": "4 AZN"
      }
    ]
  },
  {
    "id": "Təndir Yeməklər",
    "title": "Təndir yeməkləri",
    "backgroundUrl": "/images/t_ndir_yem_kl_r_quzu_tendirde.jpg",
    "items": [
      {
        "name": "Quzu təndirdə",
        "price": "65 AZN"
      },
      {
        "name": "Çolpa təndirdə",
        "price": "15 AZN"
      }
    ]
  },
  {
    "id": "XƏMİR YEMƏKLƏRİ",
    "title": "Xəmir Yeməkləri",
    "backgroundUrl": "/images/x_m_r_yem_kl_r__g_rc__xengeli.jpg",
    "items": [
      {
        "name": "Gürcü xəngəli",
        "price": "1 AZN"
      },
      {
        "name": "Yayma xəngəl",
        "price": "6 AZN"
      },
      {
        "name": "Gürzə pors",
        "price": "6 AZN"
      }
    ]
  },
  {
    "id": "İsti yeməklər",
    "title": "İsti Yeməklər",
    "backgroundUrl": "/images/_sti_yem_kl_r_set1.jpg",
    "items": [
      {
        "name": "Soyutma yumurta kənd",
        "price": "1 AZN"
      },
      {
        "name": "Soyutma sosiska",
        "price": "4 AZN"
      },
      {
        "name": "Pomidor yumurta",
        "price": "4 AZN"
      },
      {
        "name": "Qlazok",
        "price": "2 AZN"
      },
      {
        "name": "Sosiska yumurta",
        "price": "4 AZN"
      },
      {
        "name": "kükü",
        "price": "3 AZN"
      },
      {
        "name": "Xaş",
        "price": "8 AZN"
      },
      {
        "name": "1 Nəfərlik Set",
        "price": ""
      },
      {
        "name": "Səhər Yeməyi",
        "price": "6 AZN"
      }
    ]
  },
  {
    "id": "Soyuq Qəlyanaltılar",
    "title": "Soyuq Qəlyanaltılar",
    "backgroundUrl": "/images/soyuq_qelyanaltilar.png",
    "items": [
      {
        "name": "Acika",
        "price": ""
      },
      {
        "name": "Süzmə",
        "price": "1 AZN"
      },
      {
        "name": "Xiyar-pomidor",
        "price": "3 AZN"
      },
      {
        "name": "Göy",
        "price": "2 AZN"
      },
      {
        "name": "Pendir qoyun",
        "price": "3 AZN"
      },
      {
        "name": "Pendir mal",
        "price": "2 AZN"
      },
      {
        "name": "Pendir asorti",
        "price": "5 AZN"
      },
      {
        "name": "Zeytun",
        "price": "2 AZN"
      },
      {
        "name": "Turşu asorti",
        "price": "4 AZN"
      },
      {
        "name": "Qatıq",
        "price": "1 AZN"
      },
      {
        "name": "Limon",
        "price": "1 AZN"
      },
      {
        "name": "Blinçik",
        "price": "1 AZN"
      }
    ]
  },
  {
    "id": "Tava Yemək",
    "title": "Tava Yeməkləri",
    "backgroundUrl": "/images/tava_yem_k_tava_yemek_3.jpg",
    "items": [
      {
        "name": "Tabaka",
        "price": "14 AZN"
      },
      {
        "name": "Tat çığırtması",
        "price": "20 AZN"
      },
      {
        "name": "Çolpa urublu",
        "price": "14 AZN"
      },
      {
        "name": "Can əti urublu",
        "price": "12 AZN"
      },
      {
        "name": "Kotlet mal əti",
        "price": "5 AZN"
      },
      {
        "name": "Nar qovurma mal əti",
        "price": "10 AZN"
      },
      {
        "name": "Can əti qaymaqlı",
        "price": "12 AZN"
      },
      {
        "name": "Nar qovurma quzu əti",
        "price": "12 AZN"
      },
      {
        "name": "Langet mal əti",
        "price": "8 AZN"
      },
      {
        "name": "Langet toyuq əti",
        "price": "7 AZN"
      }
    ]
  },
  {
    "id": "BALİQ",
    "title": "Balıq Yeməkləri",
    "backgroundUrl": "/images/bal_q_baliq_set.jpg",
    "items": [
      {
        "name": "Farel tavada (350q)",
        "price": "10 AZN"
      },
      {
        "name": "Beluqa(200q)",
        "price": "15 AZN"
      },
      {
        "name": "Asatrin(200q)",
        "price": "20 AZN"
      },
      {
        "name": "Darado",
        "price": "15 AZN"
      },
      {
        "name": "Kütüm",
        "price": "25 AZN"
      },
      {
        "name": "Farel Setkada (350q)",
        "price": "10 AZN"
      }
    ]
  },
  {
    "id": "Qarnir",
    "title": "Qarnirlər",
    "backgroundUrl": "/images/qarnir_kartof_fri.jpg",
    "items": [
      {
        "name": "Düyü sadə",
        "price": "3 AZN"
      },
      {
        "name": "Kartof firi",
        "price": "3 AZN"
      },
      {
        "name": "Nages",
        "price": "4 AZN"
      },
      {
        "name": "Kartof pürə",
        "price": "3 AZN"
      },
      {
        "name": "Kartof ev sayağı",
        "price": "3 AZN"
      }
    ]
  },
  {
    "id": "Sac Yemekler",
    "title": "Sac yeməkləri",
    "backgroundUrl": "/images/sac_yemekler_quzu_sa_.png",
    "items": [
      {
        "name": "Sac quzu əti (2 pors)",
        "price": "16 AZN"
      },
      {
        "name": "Sac mal əti (2 pors)",
        "price": "14 AZN"
      },
      {
        "name": "Sac çolpa",
        "price": "17 AZN"
      }
    ]
  },
  {
    "id": "Qazan Yeməklər",
    "title": "Qazan Yeməkləri",
    "backgroundUrl": "/images/qazan_yem_kl_r_bozlamac.jpg",
    "items": [
      {
        "name": "Çölmə",
        "price": "8 AZN"
      },
      {
        "name": "Bozlamac",
        "price": "8 AZN"
      },
      {
        "name": "Quzu buğlaması",
        "price": "8 AZN"
      },
      {
        "name": "Yarpaq dolması",
        "price": "6 AZN"
      },
      {
        "name": "Dana atrikotu",
        "price": "10 AZN"
      },
      {
        "name": "Hinduşka buğlaması",
        "price": "9 AZN"
      }
    ]
  },
  {
    "id": "KABABLAR",
    "title": "Kabablar",
    "backgroundUrl": "/images/kabablar_chatgpt_image_may_4__2026__01_16_42_am.png",
    "items": [
      {
        "name": "Lülə",
        "price": "7 AZN"
      },
      {
        "name": "Tikə",
        "price": "7 AZN"
      },
      {
        "name": "Antrikot",
        "price": "8 AZN"
      },
      {
        "name": "Dana basdırması",
        "price": "8 AZN"
      },
      {
        "name": "Toyuq",
        "price": "5 AZN"
      },
      {
        "name": "Hinduşka kababı",
        "price": "9 AZN"
      },
      {
        "name": "Semiçka kababı",
        "price": "7 AZN"
      },
      {
        "name": "Quyruq kababı",
        "price": "7 AZN"
      },
      {
        "name": "Çolpa setkada",
        "price": "14 AZN"
      },
      {
        "name": "Xan kababı",
        "price": "7 AZN"
      },
      {
        "name": "Tərəvəz kababı",
        "price": "3 AZN"
      },
      {
        "name": "Ciyər quyruq",
        "price": "6 AZN"
      },
      {
        "name": "İçalat kababı",
        "price": "5 AZN"
      },
      {
        "name": "Kartof quyruq",
        "price": "4 AZN"
      }
    ]
  },
  {
    "id": "Soyuq İçkilər",
    "title": "Soyuq İçkilər",
    "backgroundUrl": "/images/soyuq___kil_r_kolaylikla-hazirlayabileceginiz-soguk-ic-4d37.png",
    "items": [
      {
        "name": "Qızılquyu düşes",
        "price": "3 AZN"
      },
      {
        "name": "Düşes",
        "price": "2 AZN"
      },
      {
        "name": "İtburnu",
        "price": "2 AZN"
      },
      {
        "name": "Kampot",
        "price": "3 AZN"
      },
      {
        "name": "Kola 1.L",
        "price": "3 AZN"
      },
      {
        "name": "Fanta 1.L",
        "price": "3 AZN"
      },
      {
        "name": "Sirab qazlı",
        "price": "2 AZN"
      },
      {
        "name": "Sirab qazsız",
        "price": "2 AZN"
      },
      {
        "name": "Ayran qrafin",
        "price": "3 AZN"
      }
    ]
  },
  {
    "id": "İsti İcecek",
    "title": "İsti İçkilər",
    "backgroundUrl": "/images/_sti__cecek_isti_icecek.jpeg",
    "items": [
      {
        "name": "Çay sadə",
        "price": "3 AZN"
      },
      {
        "name": "Çay pletka",
        "price": "7 AZN"
      },
      {
        "name": "Çay mürəbbə",
        "price": "7 AZN"
      },
      {
        "name": "Somavar sadə",
        "price": "10 AZN"
      },
      {
        "name": "Çay dəstgahı",
        "price": "30 AZN"
      }
    ]
  },
  {
    "id": "şorbalar",
    "title": "Şorbalar",
    "backgroundUrl": "/images/_orbalar_merci_sorba.jpg",
    "items": [
      {
        "name": "Mərci",
        "price": "3 AZN"
      },
      {
        "name": "Çolpa",
        "price": "3 AZN"
      },
      {
        "name": "Düşbərə",
        "price": "4 AZN"
      },
      {
        "name": "İnduşka",
        "price": "4 AZN"
      },
      {
        "name": "Dovğa",
        "price": "3 AZN"
      },
      {
        "name": "Göyərti şorbası",
        "price": "3 AZN"
      },
      {
        "name": "Sulu Xəngəl",
        "price": ""
      }
    ]
  }
];
