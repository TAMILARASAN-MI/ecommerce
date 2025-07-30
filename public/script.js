// Product Data
const products = [
    {
        id: '1',
        name: 'Roland GP6 Digital Grand Piano',
        brand: 'Roland',
        price: 32999,
        originalPrice: 37999,
        image: 'https://cdn.shopaccino.com/johns-music/products/gp-6angleopengal-758231_l.jpg?v=579?param=1',
        category: 'Piano',
        description: 'The Roland GP6 is a premium digital baby grand piano that delivers rich, authentic sound with elegant design. It features advanced Piano Reality Modeling, a hybrid keybed, and immersive multi-speaker audio.',
        features: [
            'Piano Reality Premium Modeling – delivers rich, detailed grand piano sound',
            'PHA-50 Hybrid Keyboard – combines wood and molded materials for durability and feel',
            'Smart Touch Panel – sleek interface with easy controls and screen lock',
            'Compact Grand Design – elegant baby grand look for homes or studios',
            'Pedals with Continuous Detection – damper, soft, and sostenuto included'
        ],
        rating: 4.9,
        reviews: 127,
        inStock: true,
        isFeatured: true
    },
    {
        id: '2',
        name: 'Yamaha PSR-E473 Portable Keyboard',
        brand: 'Yamaha',
        price: 24999,
        originalPrice: 28999,
        image: 'https://yamahamusicstore.in/products-images/enlarge-image/VGU8620.jpg?v=1753075146',
        category: 'Keyboard',
        description: 'The Yamaha PSR-E473 is a powerful 61-key portable keyboard with high-quality Voices, quick sampling, and groove creation features—perfect for learning, performance, or music production.',
        features: [
            '61 touch-sensitive keys with expressive control',
            '820 high-quality Voices and 290 accompaniment styles',
            'Live Control Knobs, Motion Effect, and pitch bend for creative sound shaping',
            'Quick Sampling and Groove Creator for instant beat-making',
            'USB Audio/MIDI interface for easy recording and app integration'
        ],
        rating: 4.8,
        reviews: 89,
        inStock: true,
        isFeatured: true
    },
    {
        id: '3',
        name: 'ROLI Seaboard Block',
        brand: 'ROLI',
        price: 35999,
        originalPrice: 59999,
        image: 'https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/roli_rol_001142_seaboard_block_1496914545_1343013.jpg',
        category: 'Keyboard',
        description: 'The ROLI Seaboard Block is a compact and expressive 24-keywave MIDI controller featuring 5D Touch technology for dynamic sound control. It’s modular, portable, and connects via Bluetooth or USB-C for seamless integration into any setup.',
        features: [
            '24 keywave surface with 5D Touch: strike, glide, slide, press, lift',
            'Ultra-expressive silicone playing surface for detailed control',
            'Modular design – connects with other ROLI BLOCKS for expansion',
            'Wireless Bluetooth LE and USB-C connectivity',
            'Compatible with ROLI Studio, Equator, and other major DAWs'
        ],
        rating: 4.6,
        reviews: 203,
        inStock: true,
        isNew: true
    },
    {
        id: '4',
        name: 'Yamaha DTX432K Electronic Drum Kit',
        brand: 'Yamaha',
        price: 79999,
        originalPrice: 89999,
        image: 'https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/yamaha_dtx432k_electronic_drum_kit_1555493731_1472197.jpg',
        category: 'Electronic Drum Kit',
        description: 'The Yamaha DTX432K is an advanced electronic drum kit ideal for beginners and intermediate drummers. It offers realistic acoustic drum sounds, a durable build, and a versatile training mode for skill development.',
        features: [
            '10" snare pad and 8" tom pads with realistic rebound',
            'Mesh head snare pad for authentic feel and quieter play',
            'Built-in training functions including rhythm coach and warm-up exercises',
            '169 preset drum kits and 10 user kits for versatile sound options',
            'USB MIDI connectivity for integration with music software'

        ],
        rating: 4.7,
        reviews: 341,
        inStock: true
    },
    {
        id: '5',
        name: 'Yamaha YAS-62 Alto Saxophone',
        brand: 'Yamaha',
        price: 48999,
        image: 'https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=345/https://static.bhphoto.com/images/images345x345/1664851933_1729432.jpg',
        category: 'Drum',
        description: 'Professional alto saxophone with exceptional projection and rich, warm tone. Hand-engraved bell.',
        features: [
            'One-piece bell',
            'Hand-engraved design',
            'High F# key',
            'Adjustable thumb rest',
            'Professional case included'
        ],
        rating: 4.9,
        reviews: 76,
        inStock: true,
        isFeatured: true
    },
    {
        id: '6',
        name: 'Alesis Strike Multipad Percussion Pad',
        brand: 'Alesis',
        price: 59000,
        image: 'https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500/https://static.bhphoto.com/images/multiple_images/images500x500/1551364269_IMG_1148064.jpg',
        category: 'Electronic Drum Pad',
        description: 'An electronic drum pad is a compact, touch-sensitive percussion instrument that produces a wide range of drum and percussion sounds, allowing for dynamic, customizable, and portable drumming experiences.',
        features: [
            'Touch-Sensitive Pads – Respond to varying levels of pressure for dynamic sound control.',
            'MIDI Connectivity – Can be connected to DAWs or other MIDI-compatible devices.',
            'Recording Capability – Enables recording and playback of performances',
            'Multiple Built-In Sounds – Includes a wide range of drum, percussion, and FX sounds.',
            'Recording Capability – Enables recording and playback of performances.'
        ],
        rating: 4.8,
        reviews: 124,
        inStock: true
    },
    {
        id: '7',
        name: 'Ibanez SR500 Bass Guitar',
        brand: 'Ibanez',
        price: 21995,
        originalPrice: 24000,
        image: 'https://cdn.shopaccino.com/johns-music/products/cello-508542_l.jpg?v=579?param=1',
        category: 'Guitar Cello Instrumental',
        description: 'Designed specifically for students and beginners, the MC760L offers a reliable build quality at an accessible price. Its construction using laminated woods makes it resistant to wear and environmental changes, making it practical for early-stage learning.',
        features: [
            'Laminated Spruce Top – Offers a warm, resonant tone ideal for beginners.',
            'Laminated Maple Back & Sides – Durable and resistant to temperature changes.',
            'Complete Starter Kit – Includes bow, rosin, and a soft or lightweight case.',
            'Beginner-Friendly Build – Designed for student use in schools and academies.',
            'Lightweight & Portable – Easy to carry and store, especially for young learners.'
        ],
        rating: 4.6,
        reviews: 189,
        inStock: true,
        isNew: true
    },
    {
        id: '8',
        name: 'Guitar',
        brand: 'Yamaha',
        price: 10000,
        image: 'https://in.yamaha.com/en/files/Image-Index_L_series_1080x1080_00a7a8247397f5fb8e49b7ffbaf44630.jpg',
        category: 'Guitar',
        description: '**Yamaha** is a globally respected guitar brand known for producing high-quality acoustic, classical, and electric guitars that combine craftsmanship, reliability, and value—making them a top choice for beginners, students, and professional musicians alike.',
        features: [
            'Wide Range of Models – Offers acoustic, classical, electric, and bass guitars for all skill levels. ',
            'High-Quality Tonewoods – Uses spruce, mahogany, rosewood, and nato for rich, balanced sound.',
            'Electro-Acoustic Variants – Built-in pickups and preamps for stage performance and recording.',
            'Smooth Finishes & Ergonomic Shapes – Comfortable feel and professional look.',
            'Trusted Brand Worldwide – Preferred by music educators, schools, and professionals globally.'
        ],
        rating: 4.9,
        reviews: 156,
        inStock: true,
        isFeatured: true
    },
    // Additional Product Data
    {
        id: "9",
        name: "Electric Guitar ",
        brand: "StrumWorks",
        price: 9899,
        originalPrice: 14999,
        image: "https://media.guitarcenter.com/is/image/MMGS7/M11734000001000-02-600x600.jpg",
        category: "electric guitars",
        description: "Electric Guitar Model 9 offers a sleek design with a powerful tone, perfect for both beginners and professionals. Now available for just ₹9899 (originally ₹14999).",
        features: [
            "Solid mahogany body with gloss finish",
            "Dual humbucker pickups for rich sound",
            "Maple neck with rosewood fretboard",
            "Adjustable bridge for precision tuning",
            "5-way pickup selector switch"
        ],
        rating: 4.9,
        reviews: 68,
        inStock: true,
        isFeatured: false,
        isNew: false
    },
    {
        id: '10',
        name: 'Handcrafted Bamboo Flute',
        brand: 'SwarVenu',
        price: 1499,
        originalPrice: 1999,
        image: 'https://i.pinimg.com/736x/32/85/54/32855410bbb45ef5efcd121eec718a12.jpg',
        category: 'Bamboo Flute',
        description: 'The SwarVenu Handcrafted Bamboo Flute in the Key of C is perfect for beginners and professionals alike. Made from premium-seasoned bamboo, it offers a rich, mellow tone ideal for Indian classical, folk, and contemporary music.',
        features: [
            'Precision-tuned to the Key of C for accurate pitch',
            'Made from aged, natural bamboo for superior resonance',
            'Smooth, hand-polished finish for comfortable grip',
            'Lightweight and portable – great for practice or performance',
            'Ideal for meditative, classical, and fusion music styles'
        ],


        "rating": 4.5,
        "reviews": 70,
        "inStock": true,
        "isFeatured": false,
        "isNew": true
    },
    {
        "id": "11",
        "name": "Professional Steel Flute",
        "brand": "SwarVenu",
        "price": 2999,
        "originalPrice": 3499,
        "image": "https://m.media-amazon.com/images/I/41HSSKGPJCL._SX300_SY300_QL70_FMwebp_.jpg",
        "category": "steel Flute",
        "description": "The SwarVenu Professional Steel Flute in the Key of C is crafted for precision and durability. Ideal for students and concert-level players, it delivers a bright, resonant tone suitable for classical, orchestral, and contemporary music.",
        "features": [
            "Precision-engineered in the Key of C for clear, accurate pitch",
            "Crafted from high-grade stainless steel for durability and brightness",
            "Smooth, corrosion-resistant finish for lasting performance",
            "Ergonomically designed for comfortable finger placement",
            "Perfect for classical, orchestral, and modern performance styles"
        ],
        "rating": 4.6,
        "reviews": 72,
        "inStock": true,
        "isFeatured": false,
        "isNew": false
    },
    {

        "id": "12",
        "name": "Digital Flute Pro",
        "brand": "SwarVenu",
        "price": 7499,
        "originalPrice": 8999,
        "image": "https://s.alicdn.com/@sc04/kf/H7770c6e61d924813bb5424251800babeC.jpg_720x720q50.jpg",
        "category": "Electronic Flute",
        "description": "The SwarVenu Digital Flute Pro combines traditional flute aesthetics with modern digital innovation. Equipped with built-in tones, MIDI output, and touch-sensitive sensors, it's perfect for studio production, live performance, and silent practice.",
        "features": [
            "Touch-sensitive sensors mimic traditional finger holes",
            "Built-in sound library with multiple flute tones and effects",
            "MIDI and USB connectivity for digital music production",
            "Rechargeable battery with long playtime",
            "Headphone output for silent practice and private sessions"
        ],
        "rating": 4.7,
        "reviews": 74,
        "inStock": true,
        "isFeatured": true,
        "isNew": false
    },
    {
        "id": "13",
        "name": "Tabla Classic Model 13",
        "brand": "Rhythm Makers",
        "price": 3899,
        "originalPrice": null,
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/3/400928847/SA/NH/GX/31066070/wooden-table-set-dayan-bayan-wood-drum-heavy-hammer-cushions.jpg",
        "category": "Tabla",
        "description": "Traditional South Indian tabla known for its crisp tones and rich resonance. Ideal for classical performances and practice.",
        "features": [
            "Handcrafted wooden bayan and dayan",
            "Natural goat skin drum heads",
            "Tuned to concert pitch",
            "Includes ring cushions and tuning hammer",
            "Perfect for Carnatic rhythm practice"
        ],
        "rating": 4.8,
        "reviews": 76,
        "inStock": true,
        "isFeatured": false,
        "isNew": false
    },
    {
        "id": "14",
        "name": "Madhalam Traditional Model 13",
        "brand": "Temple Beats Co.",
        "price": 12499,
        "originalPrice": null,
        "image": "https://5.imimg.com/data5/OO/GJ/MY-30699112/musical-thavil-500x500.jpg",
        "category": "Madhalam",
        "description": "Expertly crafted Maddalam used in South Indian wedding and temple music. Produces deep, resonant rhythms essential for traditional performances.",
        "features": [
            "Made from high-quality jackfruit wood",
            "Buffalo and cowhide drumheads for authentic tone",
            "Hand-tuned for precise sound",
            "Indian-Tamil Nadu Music Instrumental",
            "Ideal for Chenda Melam and temple ensembles"
        ],
        "rating": 4.9,
        "reviews": 78,
        "inStock": true,
        "isFeatured": false,
        "isNew": false
    },
    {
        "id": "15",
        "name": "Cajon Drum Box",
        "brand": "Latin Percussion",
        "price": 14999,
        "originalPrice": null,
        "image": "https://www.heavenimagenes.com/heavencommerce/b23e72e1-40ba-4adb-9dc3-7ee3d3a63b35/images/v2/LATIN%20PERCUSSION/34961_medium.jpg",
        "category": "percussion",
        "description": "Professional Acoustic Cajon designed for studio, stage, and street performances. Delivers deep bass tones and crisp snare slaps with a natural wood finish.",
        "features": [
            "Handcrafted wooden body with adjustable snare system",
            "Produces both deep bass and sharp snare tones",
            "Comfortable padded seat for long playing sessions",
            "Non-slip rubber feet for stability during use",
            "Ideal for acoustic sets, flamenco, and unplugged performances"
        ],

        "rating": 4.5,
        "reviews": 80,
        "inStock": true,
        "isFeatured": false,
        "isNew": true
    },
    {
        "id": "16",
        "name": "Alto Saxophone",
        "brand": "JazzTone",
        "price": 27999,
        "originalPrice": null,
        "image": "https://png.pngtree.com/png-clipart/20231015/original/pngtree-3d-illustration-saxophone-object-png-image_13302518.png",
        "category": "Saxophone",
        "description": "High-quality Alto Saxophone with a smooth gold lacquer finish. Ideal for students, performers, and jazz enthusiasts. Offers excellent tone and playability.",
        "features": [
            "Precision-engineered brass body with gold lacquer",
            "Ergonomic key layout for comfortable fingering",
            "Responsive tone with strong projection",
            "Includes mouthpiece, reeds, cleaning kit, and hard case",
            "Suitable for jazz, classical, and contemporary music styles"
        ],
        "rating": 4.6,
        "reviews": 82,
        "inStock": true,
        "isFeatured": true,
        "isNew": false
    },
    {
        "id": "17",
        "name": "Nadaswaram",
        "brand": "Carnatic Classics",
        "price": 3299,
        "originalPrice": null,
        "image": "https://www.swarclassical.com/Instruments/pictures/Nadaswaram.png",
        "category": "Nadaswaram",
        "description": "A handcrafted Traditional Nadaswaram, ideal for South Indian wedding ceremonies and classical Carnatic music performances. Known for its powerful sound and cultural richness.",
        "features": [
            "Handmade with seasoned wood for rich tonal quality",
            "Authentic design used in temple and wedding rituals",
            "Suitable for professional and ceremonial performances",
            "Includes high-quality reed set and case",
            "Tuned for Carnatic scale with full tonal range"
        ],
        "rating": 4.7,
        "reviews": 84,
        "inStock": true,
        "isFeatured": false,
        "isNew": false
    },
    {
        "id": "18",
        "name": "Melodica",
        "brand": "Harmony Keys",
        "price": 1359,
        "originalPrice": 1459,
        "image": "https://r2.gear4music.com/media/90/909389/600/preview.jpg",
        "category": "melodicas",
        "description": "Melodica Model M18 offers a perfect blend of portability and expressive sound, ideal for both beginners and professionals.",
        "features": [
            "32-key range for versatile playability",
            "Lightweight and compact design",
            "Responsive keys with smooth airflow",
            "Durable mouthpiece and flexible tube included",
            "Ideal for music education and casual performances"
        ],
        "rating": 4.8,
        "reviews": 86,
        "inStock": true,
        "isFeatured": false,
        "isNew": false
    },
    {
        "id": "19",
        "name": "Tambourine ",
        "brand": "Meinl Percussion",
        "price": 499,
        "originalPrice": 799,
        "image": "https://m.media-amazon.com/images/I/81sGidh2x3L._AC_SX569_.jpg",
        "category": "Tambourine",
        "description": "Tambourine Model T18 delivers crisp jingles and a comfortable grip, perfect for live performances, studio use, or music classes.",
        "features": [
            "Double row of stainless steel jingles for bright, clear sound",
            "Ergonomic grip handle for comfortable playing",
            "Durable synthetic drum head",
            "Lightweight design for easy handling",
            "Suitable for all skill levels and musical styles"
        ],
        "rating": 4.9,
        "reviews": 88,
        "inStock": true,
        "isFeatured": false,
        "isNew": false
    },
    {
        "id": "20",
        "name": "Harmonium ",
        "brand": "Swar Sangeet",
        "price": 32999,
        "originalPrice": 38999,
        "image": "https://i0.wp.com/www.binaswar.com/wp-content/uploads/2019/08/AB0_2261.jpg?fit=1200%2C651&ssl=1",
        "category": "harmonium",
        "description": "Harmonium Model H18 is a finely crafted traditional instrument, offering rich tonal quality and smooth key action—ideal for classical, devotional, and folk music.",
        "features": [
            "42 full-size keys with smooth response",
            "Double bellow system for sustained airflow",
            "Teak wood frame with natural finish",
            "7-stop knobs for tonal control",
            "Perfect for both stage performance and practice"
        ],
        "rating": 4.5,
        "reviews": 90,
        "inStock": true,
        "isFeatured": true,
        "isNew": true
    },
    {
        "id": "21",
        "name": "Sitar ",
        "brand": "Raaga Craft",
        "price": 14599,
        "originalPrice": 15299,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp1yUSvchkwsDjWiASM-9vMZca-HF-HiKxcw&s",
        "category": "sitar",
        "description": "Sitar Model S18 is a beautifully handcrafted classical instrument, designed to produce deep, resonant tones ideal for Indian classical music and fusion genres.",
        "features": [
            "7 main playing strings and 13 sympathetic strings",
            "Hand-carved tun wood body with natural polish",
            "Inlaid with decorative bone or synthetic accents",
            "Custom bridge for tonal precision",
            "Includes mizrab (plectrum), extra strings, and padded case"
        ],
        "rating": 4.6,
        "reviews": 92,
        "inStock": true,
        "isFeatured": false,
        "isNew": false
    },
    {

        "id": "22",
        "name": "Harp ",
        "brand": "Celestia Strings",
        "price": 60000,
        "originalPrice": 69000,
        "image": "https://img.freepik.com/premium-photo/harp-with-white-background-high-quality-ultra-hd_889056-83572.jpg",
        "category": "harp",
        "description": "Harp Model H18 is a mid-sized lever harp designed for students and intermediate players. It offers a warm tone and easy handling.",
        "features": [
            "34 strings with durable nylon and wire winding",
            "Solid spruce soundboard for rich resonance",
            "Lightweight mahogany body with elegant finish",
            "Easy-to-use levers for key changes",
            "Ideal for learning, small performances, and practice"
        ],
        "rating": 4.7,
        "reviews": 94,
        "inStock": true,
        "isFeatured": false,
        "isNew": false
    },
    {
        "id": "23",
        "name": "Mouth Organ ",
        "brand": "WindTone",
        "price": 799,
        "originalPrice": 859,
        "image": "https://5.imimg.com/data5/GF/IB/MY-30320406/mouthorgan.jpg",
        "category": "mouth organ",
        "description": "Mouth Organ Model M18 is a 10-hole diatonic harmonica, ideal for beginners and hobbyists exploring blues, folk, and pop styles.",
        "features": [
            "10-hole diatonic tuning in key of C",
            "Stainless steel cover plates for durability",
            "ABS comb for consistent airflow",
            "Compact and lightweight for easy transport",
            "Includes plastic case and cleaning cloth"
        ],
        "rating": 4.8,
        "reviews": 96,
        "inStock": true,
        "isFeatured": false,
        "isNew": false
    },
    {
        "id": "24",
        "name": "Bongo Drum ",
        "brand": "Rhythm Roots",
        "price": 1499,
        "originalPrice": 1599,
        "image": "https://4.imimg.com/data4/VA/EI/MY-7551655/bongo-drum-1000x1000.jpg",
        "category": "bongo drums",
        "description": "Bongo Drum Model B40 is a high-quality percussion instrument designed for vibrant tones and rhythmic versatility—great for both beginners and pros.",
        "features": [
            "6\" and 7\" natural hide drum heads",
            "Handcrafted hardwood shells with natural gloss finish",
            "Chrome hardware for tuning stability",
            "Rich, bright sound with strong resonance",
            "Ideal for Latin, jazz, and world music styles"
        ],
        "rating": 4.9,
        "reviews": 98,
        "inStock": true,
        "isFeatured": true,
        "isNew": false
    },
    {
        "id": "25",
        "name": "Ahuja Cordless Microphone ",
        "brand": "Ahuja",
        "price": 5599,
        "originalPrice": 7599,
        "image": "https://www.publicaddresssolutions.com/cdn/shop/products/AWM-700U2.jpg?v=1592795627",
        "category": "microphones",
        "description": "Ahuja Cordless Microphone Model C41 delivers clear, reliable wireless performance, perfect for live events, speeches, and stage use.",
        "features": [
            "UHF wireless system with stable transmission",
            "Handheld dynamic microphone with cardioid pickup",
            "Operating range up to 50 meters",
            "Receiver with dual antennas for better signal reception",
            "Ideal for public address, karaoke, and professional use"
        ],
        "rating": 4.5,
        "reviews": 100,
        "inStock": true,
        "isFeatured": false,
        "isNew": true
    },
    {
        "id": "26",
        "name": "Ahuja Cord Microphone",
        "brand": "Ahuja",
        "price": 1499,
        "originalPrice": 1999,
        "image": "https://image.allekabels.be/image/1042485-0/handmicrofoon",
        "category": "microphones",
        "description": "Ahuja Cord Microphone Model CM43 is a rugged, high-quality wired microphone designed for vocals, speeches, and public address systems.",
        "features": [
            "Dynamic cardioid microphone for clear sound capture",
            "Durable metal body with on/off switch",
            "Supplied with 6-meter shielded cable",
            "Low handling noise and high sensitivity",
            "Ideal for announcements, karaoke, and general sound applications"
        ],
        "rating": 4.6,
        "reviews": 102,
        "inStock": true,
        "isFeatured": false,
        "isNew": false
    },
    {
        "id": "27",
        "name": "Ahuja ABW-400UL UHF Wireless Microphone",
        "brand": "Ahuja",
        "price": 3599,
        "originalPrice": 3799,
        "image": "https://m.media-amazon.com/images/I/41h+l2z36SL._SY300_SX300_.jpg",
        "category": "microphones",
        "description": "The Ahuja ABW-400UL is a high-quality UHF wireless microphone system featuring a handheld transmitter and robust receiver, perfect for professional sound reinforcement in live performances, presentations, and events.",
        "features": [
            "UHF frequency band for stable wireless transmission",
            "Handheld transmitter with high-sensitivity cardioid capsule",
            "Up to 50 meters operating range with minimal interference",
            "Receiver with volume control, RF/AF indicators, and balanced output",
            "Ideal for public speaking, stage performances, and houses of worship"
        ],
        "rating": 4.7,
        "reviews": 104,
        "inStock": true,
        "isFeatured": false,
        "isNew": false
    },
    {
        "id": "28",
        "name": "Ahuja Amplifier",
        "brand": "Ahuja",
        "price": 10599,
        "originalPrice": 13199,
        "image": "https://audiomaxx.in/cdn/shop/files/0010506_ahuja-pa-amplifiers-with-built-in-digital-player-ssa-250dp_49cdfd53-a172-4b59-8108-58654541c97c.png?v=1700913014&width=800",
        "category": "amplifiers",
        "description": "Ahuja SSA -250DP 250w PA Mixer Power Amplifier Auto AC/DC,USB, MP3 Player,- Each,Ahuja Amplifier Model A42 is a powerful and reliable audio amplifier designed for public address, live events, and indoor/outdoor audio setups.",
        "features": [
            "120W RMS output suitable for medium-sized venues",
            "Multiple mic and line inputs with volume control",
            "Built-in USB/SD media player and Bluetooth connectivity",
            "Sturdy metal body with efficient heat dissipation",
            "Ideal for schools, religious events, offices, and small concerts"
        ],
        "rating": 4.8,
        "reviews": 106,
        "inStock": true,
        "isFeatured": true,
        "isNew": false
    },
    {
        "id": "29",
        "name": "Yamaha DBR Active Speaker",
        "brand": "Yamaha",
        "price": 3599,
        "originalPrice": null,
        "image": "https://mccormicksnet.com/cdn/shop/products/YamahaDBRActiveSpeaker.jpg?v=1680637811&width=600",
        "category": "Speakers",
        "description": "The Yamaha DBR Active Speaker delivers powerful, clear sound performance in a lightweight, portable design. Perfect for live performances, rehearsals, and presentations.",
        "features": [
            "1000W Class-D amplifier for high output and efficiency",
            "High-performance 10”/12”/15” woofer for deep bass response",
            "1.4” compression driver delivers clear high frequencies",
            "Durable plastic cabinet with ergonomic handles for portability",
            "Versatile input/output options with onboard 2-channel mixer"
        ],
        "rating": 4.9,
        "reviews": 108,
        "inStock": true,
        "isFeatured": false,
        "isNew": false
    },
    {
        "id": "30",
        "name": "David Music Instrument Shop ",
        "brand": "All Brand ",
        "price": "",
        "image": "https://img.freepik.com/premium-photo/variety-musical-instruments-are-arranged-together-including-drum-set-piano-guitars-bass_14117-299000.jpg?w=360",
        "category": "All Music Instrument",
        "description": "",
        "features": [
            "High-fidelity sound output for professional performance",
            "Constructed with durable, stage-ready materials",
            "Ergonomic design for comfortable long sessions",
            "Compatible with a wide range of accessories",
            "Ideal for both beginners and experienced musicians",
            "Tunable components for precise pitch adjustment",
            "Customizable settings for personalized sound control",
            "Lightweight and portable design for easy transport",
            "Handcrafted or precision-engineered for quality assurance",
            "Stylish finish and visual appeal for stage presence"
        ]
        ,
        "rating": 5,
        "reviews": 110,
        "inStock": true,
        "isFeatured": false,
        "isNew": true
    },

];

// Global Variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentPage = 'home';
let filteredProducts = [...products];

// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const cartCount = document.getElementById('cart-count');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const categoryFilter = document.getElementById('category-filter');
const sortSelect = document.getElementById('sort-select');
const productModal = document.getElementById('product-modal');
const closeModal = document.getElementById('close-modal');
const API="https://davidmusicinstruments.vercel.app"
// const API="http://localhost:8080"

// Initialize App
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
    setupEventListeners();
    updateCartCount();
    loadFeaturedProducts();
    loadAllProducts();
});

function initializeApp() {
    // Set active page
    showPage('home');

    // Load cart from localStorage
    updateCartDisplay();
}

function setupEventListeners() {
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            showPage(page);
        });
    });

    // Page navigation buttons
    document.addEventListener('click', (e) => {
        if (e.target.hasAttribute('data-page')) {
            e.preventDefault();
            const page = e.target.getAttribute('data-page');
            showPage(page);
        }
    });

    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    searchBtn.addEventListener('click', handleSearch);

    // Filters and sorting
    if (categoryFilter) {
        categoryFilter.addEventListener('change', handleCategoryFilter);
    }
    if (sortSelect) {
        sortSelect.addEventListener('change', handleSort);
    }

    // Modal
    if (closeModal) {
        closeModal.addEventListener('click', closeProductModal);
    }

    if (productModal) {
        productModal.addEventListener('click', (e) => {
            if (e.target === productModal) {
                closeProductModal();
            }
        });
    }

    // Cart button
    document.getElementById('cart-btn').addEventListener('click', () => {
        showPage('cart');
    });

    // Learn more button
    document.getElementById('learn-more-btn').addEventListener('click', () => {
        document.getElementById('features-section').scrollIntoView({ behavior: 'smooth' });
    });

    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }

    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }

    // Checkout form
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckoutSubmit);
    }

    // Mobile menu toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

function showPage(pageId) {
    // Update navigation
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        }
    });

    // Show/hide pages
    pages.forEach(page => {
        page.classList.remove('active');
        if (page.id === pageId) {
            page.classList.add('active');
        }
    });

    currentPage = pageId;

    // Load page-specific content
    if (pageId === 'products') {
        loadAllProducts();
    } else if (pageId === 'cart') {
        loadCartPage();
    } else if (pageId === 'checkout') {
        loadCheckoutPage();
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

function loadFeaturedProducts() {
    const featuredGrid = document.getElementById('featured-products-grid');
    if (!featuredGrid) return;

    const featuredProducts = products.filter(product => product.isFeatured);
    featuredGrid.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
}

function loadAllProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
    const badge = product.isFeatured ? 'Featured' : (product.isNew ? 'New' : '');
    const originalPriceHtml = product.originalPrice ?
        `<span style="text-decoration: line-through; color: #6b7280; font-size: 0.9rem;">₹${product.originalPrice.toLocaleString()}</span>` : '';

    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${badge ? `<div class="product-badge">${badge}</div>` : ''}
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                    <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
                </div>
                <div class="product-price">
                    ₹${product.price.toLocaleString()}
                    ${originalPriceHtml}
                </div>
                <div class="product-actions">
                    <button class="btn btn-outline btn-small view-product" data-product-id="${product.id}">
                        View Details
                    </button>
                    <button class="btn btn-primary btn-small add-to-cart" data-product-id="${product.id}">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Event delegation for product cards
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('view-product')) {
        const productId = e.target.getAttribute('data-product-id');
        showProductModal(productId);
    }

    if (e.target.classList.contains('add-to-cart')) {
        const productId = e.target.getAttribute('data-product-id');
        addToCart(productId);
    }

    if (e.target.classList.contains('remove-from-cart')) {
        const productId = e.target.getAttribute('data-product-id');
        removeFromCart(productId);
    }

    if (e.target.classList.contains('quantity-btn')) {
        const productId = e.target.getAttribute('data-product-id');
        const action = e.target.getAttribute('data-action');
        updateCartQuantity(productId, action);
    }

    if (e.target.classList.contains('clear-cart')) {
        clearCart();
    }
});

function showProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modalContent = document.getElementById('product-detail');
    modalContent.innerHTML = `
        <div class="product-detail-grid">
            <div>
                <img src="${product.image}" alt="${product.name}" class="product-detail-image">
            </div>
            <div class="product-detail-info">
                <div class="product-detail-brand">${product.brand}</div>
                <h2>${product.name}</h2>
                <div class="product-rating">
                    <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                    <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
                </div>
                <div class="product-detail-price">₹${product.price.toLocaleString()}</div>
                <p>${product.description}</p>
                
                <div class="quantity-selector">
                    <button class="quantity-btn" data-product-id="${product.id}" data-action="decrease">-</button>
                    <span class="quantity-display" id="modal-quantity">1</span>
                    <button class="quantity-btn" data-product-id="${product.id}" data-action="increase">+</button>
                </div>
                
                <button class="btn btn-primary btn-large add-to-cart" data-product-id="${product.id}">
                    Add to Cart
                </button>
            </div>
        </div>
        
        <div class="product-features">
            <h3>Key Features</h3>
            <ul>
                ${product.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
    `;

    productModal.style.display = 'block';
}

function closeProductModal() {
    productModal.style.display = 'none';
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Get quantity from modal if it exists
    const modalQuantity = document.getElementById('modal-quantity');
    if (modalQuantity) {
        quantity = parseInt(modalQuantity.textContent);
    }

    const existingItem = cart.find(item => item.productId === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            productId: productId,
            quantity: quantity
        });
    }

    saveCart();
    updateCartCount();
    showSuccessMessage('Product added to cart!');

    // Close modal if open
    closeProductModal();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.productId !== productId);
    saveCart();
    updateCartCount();
    updateCartDisplay();
}

function updateCartQuantity(productId, action) {
    const item = cart.find(item => item.productId === productId);
    if (!item) return;

    if (action === 'increase') {
        item.quantity++;
    } else if (action === 'decrease') {
        item.quantity--;
        if (item.quantity <= 0) {
            removeFromCart(productId);
            return;
        }
    }

    // Update modal quantity if in modal
    const modalQuantity = document.getElementById('modal-quantity');
    if (modalQuantity && action) {
        let currentQty = parseInt(modalQuantity.textContent);
        if (action === 'increase') {
            currentQty++;
        } else if (action === 'decrease' && currentQty > 1) {
            currentQty--;
        }
        modalQuantity.textContent = currentQty;
    }

    saveCart();
    updateCartCount();
    updateCartDisplay();
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartCount();
    updateCartDisplay();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function loadCartPage() {
    const cartContent = document.getElementById('cart-content');
    if (!cartContent) return;

    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-cart"></i>
                <h2>Your cart is empty</h2>
                <p>Add some instruments to get started!</p>
                <button class="btn btn-primary" data-page="products">Continue Shopping</button>
            </div>
        `;
        return;
    }

    const cartItems = cart.map(item => {
        const product = products.find(p => p.id === item.productId);
        return { ...product, quantity: item.quantity };
    });

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    cartContent.innerHTML = `
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 40px;">
            <div class="cart-items">
                <div style="display: flex; justify-content: between; align-items: center; margin-bottom: 20px;">
                    <h2>Cart Items</h2>
                    <button class="btn btn-outline clear-cart">Clear Cart</button>
                </div>
                ${cartItems.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                        <div class="cart-item-info">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-brand">${item.brand}</div>
                            <div class="cart-item-price">$${item.price.toLocaleString()}</div>
                        </div>
                        <div class="cart-item-controls">
                            <button class="quantity-btn" data-product-id="${item.id}" data-action="decrease">-</button>
                            <span class="quantity-display">${item.quantity}</span>
                            <button class="quantity-btn" data-product-id="${item.id}" data-action="increase">+</button>
                            <button class="btn btn-outline remove-from-cart" data-product-id="${item.id}">Remove</button>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="cart-summary">
                <h2>Order Summary</h2>
                <div class="summary-row">
                    <span>Subtotal:</span>
                    <span>₹${subtotal.toLocaleString()}</span>
                </div>
                <div class="summary-row">
                    <span>Tax:</span>
                    <span>₹${tax.toFixed(2)}</span>
                </div>
                <div class="summary-row">
                    <span>Shipping:</span>
                    <span style="color: #10b981;">Free</span>
                </div>
                <div class="summary-row summary-total">
                    <span>Total:</span>
                    <span>₹${total.toFixed(2)}</span>
                </div>
                <button class="btn btn-primary btn-large" data-page="checkout" style="width: 100%; margin-top: 20px;">
                    Proceed to Checkout
                </button>
                <button class="btn btn-outline" data-page="products" style="width: 100%; margin-top: 10px;">
                    Continue Shopping
                </button>
            </div>
        </div>
    `;
}

function updateCartDisplay() {
    if (currentPage === 'cart') {
        loadCartPage();
    }
}

function loadCheckoutPage() {
    const orderSummary = document.getElementById('order-summary');
    if (!orderSummary) return;

    const cartItems = cart.map(item => {
        const product = products.find(p => p.id === item.productId);
        return { ...product, quantity: item.quantity };
    });

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    orderSummary.innerHTML = `
        <div class="cart-summary">
            <h2>Order Summary</h2>
            ${cartItems.map(item => `
                <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #e5e7eb;">
                    <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
                    <div style="flex: 1;">
                        <div style="font-weight: 600; font-size: 0.9rem;">${item.name}</div>
                        <div style="color: #6b7280; font-size: 0.8rem;">Qty: ${item.quantity}</div>
                    </div>
                    <div style="font-weight: 600;">₹${(item.price * item.quantity).toLocaleString()}</div>
                </div>
            `).join('')}
            
            <div class="summary-row">
                <span>Subtotal:</span>
                <span>₹${subtotal.toLocaleString()}</span>
            </div>
            <div class="summary-row">
            
                <span>Tax:</span>
                <span>₹${tax.toFixed(2)}</span>
            </div>
            <div class="summary-row">
                <span>Shipping:</span>
                <span style="color: #10b981;">Free</span>
            </div>
            <div class="summary-row summary-total">
                <span>Total:</span>
                <span>₹${total.toFixed(2)}</span>
            </div>
        </div>
    `;
}

function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();

    filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );

    if (currentPage === 'products') {
        loadAllProducts();
    }
}

function handleCategoryFilter() {
    const category = categoryFilter.value;

    if (category === 'all') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => product.category === category);
    }

    // Apply search filter if there's a search query
    const query = searchInput.value.toLowerCase().trim();
    if (query) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.brand.toLowerCase().includes(query)
        );
    }

    loadAllProducts();
}

function handleSort() {
    const sortBy = sortSelect.value;

    filteredProducts.sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            case 'name':
            default:
                return a.name.localeCompare(b.name);
        }
    });

    loadAllProducts();
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    const successMessage = document.getElementById('newsletter-success');
    successMessage.style.display = 'block';
    e.target.reset();

    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
}

async function handleContactSubmit(e) {
    e.preventDefault();
    const submitbtn = document.getElementById('sendmsgbtn')
    submitbtn.disabled = true
    submitbtn.innerHTML = "Submitting..."
    const successMessage = document.getElementById('contact-success');
    successMessage.style.display = 'block';
    const formData = new FormData(e.target); // e.target refers to the form
    const data = Object.fromEntries(formData.entries());
    const response = await fetch(API+"/api/sendmail", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((res) => res.json())
    if (response.status == "success") {
        e.target.reset();
    }
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
    submitbtn.disabled = false
    submitbtn.innerHTML = "Send Message"

}

async function handleCheckoutSubmit(e) {
    e.preventDefault();
    const submitbtn = document.getElementById('orderBtn')
    submitbtn.disabled = true
    submitbtn.innerHTML = "Submitting..."
    const formData = new FormData(e.target); // e.target refers to the form
    const data = Object.fromEntries(formData.entries());
    const cart_products=cart.map((elem)=>{
        const product=products.find((i)=>i.id==elem.productId)
        return {...elem,...product}
    })
    
    const response = await fetch(API+"/api/order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({...data,cart:cart_products}),
    }).then((res) => res.json())
    if (response.status == "success") {
        e.target.reset();
        showSuccessMessage('Order placed successfully! Thank you for your purchase.');
        clearCart();
    }
    submitbtn.disabled = false
    submitbtn.innerHTML = "Complete Order"
    // Redirect to home after a delay
    setTimeout(() => {
        showPage('home');
    }, 2000);
}

function showSuccessMessage(message) {
    // Create or update success message
    let successDiv = document.querySelector('.success-message');
    if (!successDiv) {
        successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        document.body.appendChild(successDiv);
    }

    successDiv.textContent = message;
    successDiv.classList.add('show');

    setTimeout(() => {
        successDiv.classList.remove('show');
    }, 3000);
}

// Smooth scrolling for anchor links
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Handle window resize for responsive design
window.addEventListener('resize', () => {
    // Close mobile menu on resize
    const navMenu = document.getElementById('nav-menu');
    if (window.innerWidth > 768 && navMenu) {
        navMenu.classList.remove('active');
    }
});