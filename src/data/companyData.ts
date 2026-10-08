import { ServiceItem, Project, TeamMember, Testimonial } from '../types';
import {
  HERO_CONSTRUCTION,
  TEAM_CONSTRUCTION_SAFETY,
  PROJECT_MODERN_FINISHED,
  PROJECT_STRUCTURE_ACTIVE,
  PROJECT_FOUNDATION_STAGE,
} from './images';

export const COMPANY_INFO = {
  name: 'MWANAWEIKA CONSTRUCTION COMPANY',
  shortName: 'MWANAWEIKA CONSTRUCTION',
  slogan: 'Building Today. Shaping Tomorrow.',
  tagline: 'Reliable construction solutions from foundation to completion.',
  location: 'Mukono, Uganda',
  address: 'Plot 44, Jinja Road, Mukono Municipality, Uganda',
  phone: '+256 700 000 000',
  phoneDisplay: '+256 700 000 000',
  email: 'info@mwanaweikaconstruction.com',
  whatsappNumber: '256700000000',
  whatsappMessage: 'Hello Mwanaweika Construction, I would like to discuss a construction project.',
  officeHours: [
    { days: 'Monday – Friday', hours: '8:00 AM – 5:00 PM' },
    { days: 'Saturday', hours: '9:00 AM – 2:00 PM' },
    { days: 'Sunday', hours: 'Closed (Emergency On-Call Only)' },
  ],
  stats: [
    { label: 'Projects Completed', value: '50+', subtext: 'Residential & commercial across Mukono & Greater Kampala' },
    { label: 'Years Experience', value: '10+', subtext: 'Continuous hands-on building & site supervisory expertise' },
    { label: 'Skilled Workers & Partners', value: '100+', subtext: 'Masons, steel fixers, carpenters, electricians & engineers' },
    { label: 'Client Satisfaction', value: '95%', subtext: 'Measured on-time and on-spec project handovers' },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'residential',
    title: 'RESIDENTIAL CONSTRUCTION',
    subtitle: 'Custom homes, duplexes, villas & residential estates',
    description: 'We construct residential homes tailored to local terrain and family living requirements, managing every phase from foundation trenches to final turnkey finishes.',
    items: [
      'New home construction & standalone villas',
      'Modern apartment blocks & townhouses',
      'Residential compound extensions & outbuildings',
      'Custom structural design alignment & foundation works',
      'Turnkey residential interior & exterior finishing',
      'Boundary walling, paving & compound development'
    ],
    image: PROJECT_MODERN_FINISHED,
    iconName: 'Home',
  },
  {
    id: 'commercial',
    title: 'COMMERCIAL CONSTRUCTION',
    subtitle: 'Offices, retail spaces, warehouses & business hubs',
    description: 'Purpose-built commercial structures engineered for durability, efficient foot traffic, structural integrity, and long-term asset value.',
    items: [
      'Multi-storey office buildings & administrative centers',
      'Retail shops, showrooms & commercial strip plazas',
      'Storage warehouses & light manufacturing facilities',
      'Reinforced industrial concrete flooring & heavy slab works',
      'Commercial perimeter security & drainage civil works',
      'Accessibility ramps, fire safety integration & service ducts'
    ],
    image: PROJECT_STRUCTURE_ACTIVE,
    iconName: 'Building2',
  },
  {
    id: 'renovation',
    title: 'RENOVATION & REMODELING',
    subtitle: 'Transforming existing properties into modern spaces',
    description: 'Strategic structural updates, facade modernization, and interior redesigns that breathe new life into older buildings while preserving structural health.',
    items: [
      'Complete house renovations & layout modernizations',
      'Commercial office revamps & modern partitioning',
      'Structural additions, vertical extensions & room expansions',
      'Roof replacements, waterproofing & timber frame repairs',
      'Exterior facade restyling & fresh decorative plastering',
      'Electrical rewiring & modern plumbing overhauls'
    ],
    image: PROJECT_MODERN_FINISHED,
    iconName: 'Wrench',
  },
  {
    id: 'structural',
    title: 'STRUCTURAL WORKS',
    subtitle: 'Foundations, structural frames & major load-bearing works',
    description: 'The backbone of any safe build. We execute meticulous ground excavations, strip and pad foundations, rebar reinforcement cages, and monolithic concrete casting.',
    items: [
      'Thorough site clearing, leveling & bulk earth excavation',
      'Strip, pad, and raft foundation installations with vapor barriers',
      'Reinforced concrete columns, ring beams & suspended floor slabs',
      'Heavy structural steel fixing & certified concrete batching',
      'Retaining walls for sloped Mukono terrains & drainage civil works',
      'Engineered timber & light-gauge steel roof truss fabrication'
    ],
    image: PROJECT_FOUNDATION_STAGE,
    iconName: 'Hammer',
  },
  {
    id: 'finishing',
    title: 'FINISHING WORKS',
    subtitle: 'Plastering, flooring, tiling, painting & precision detailing',
    description: 'The touch and feel that defines architectural quality. Our finishing crews focus on level surfaces, clean tile alignments, and durable, weather-resistant paints.',
    items: [
      'Internal smooth skimming, screeding & external rendering',
      'Porcelain, ceramic & terrazzo tile installations',
      'Interior & exterior paint systems with weather-shield coatings',
      'Gypsum suspended ceilings with integrated architectural lighting',
      'Hardwood, aluminium & UPVC window and door installations',
      'Sanitary ware fitting, kitchen countertops & cabinetry installation'
    ],
    image: HERO_CONSTRUCTION,
    iconName: 'Paintbrush',
  },
  {
    id: 'management',
    title: 'PROJECT MANAGEMENT',
    subtitle: 'Professional coordination, supervision & scheduled delivery',
    description: 'Complete oversight to eliminate budget leakage, prevent material waste, ensure structural compliance, and provide transparent stage-by-stage reporting.',
    items: [
      'Detailed construction program scheduling & milestone tracking',
      'Material procurement supervision & quality verification',
      'Subcontractor coordination & daily site labor management',
      'Strict quality assurance inspections at each milestone sign-off',
      'Transparent weekly photo progress logs & client updates',
      'Occupational health, site safety & environmental compliance'
    ],
    image: TEAM_CONSTRUCTION_SAFETY,
    iconName: 'ClipboardCheck',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'mwanaweika-residence',
    name: 'MWANAWEIKA RESIDENCE',
    location: 'Mukono, Uganda',
    category: 'Residential',
    stage: 'Completed',
    progress: 100,
    duration: '8 Months',
    clientType: 'Private Homeowner',
    isFeatured: true,
    description: 'A contemporary 4-bedroom residential home featuring clean horizontal architectural rooflines, custom concrete facade detailing, expansive living room natural lighting, and paved perimeter landscaping.',
    keyFeatures: [
      '4 Ensuite Bedrooms with Walk-in Wardrobes',
      'Deep Foundation on Compacted Red Laterite Soil',
      'Suspended Slabs with Double Reinforced Rebar Mesh',
      'Hardwood Teak Joinery & High-Performance Aluminium Sliders',
      'Solar Water Heating & Integrated Stormwater Harvesting'
    ],
    image: PROJECT_MODERN_FINISHED,
    timeline: [
      { stage: 'Foundation', description: 'Deep strip foundation & concrete sub-base', status: 'completed', progressPercentage: 100 },
      { stage: 'Structure', description: 'Reinforced concrete columns & clay brickwork', status: 'completed', progressPercentage: 100 },
      { stage: 'Roofing', description: 'Engineered timber roof trusses & dark profile sheets', status: 'completed', progressPercentage: 100 },
      { stage: 'Wall Finishing', description: 'Smooth sand-cement plastering & gypsum skimming', status: 'completed', progressPercentage: 100 },
      { stage: 'Installations', description: 'Concealed conduit electricals & PEX plumbing lines', status: 'completed', progressPercentage: 100 },
      { stage: 'Final Finishes', description: 'Porcelain tiling, interior painting & perimeter pavers', status: 'completed', progressPercentage: 100 },
      { stage: 'Completed', description: 'Full client handover with certified documentation', status: 'completed', progressPercentage: 100 },
    ]
  },
  {
    id: 'kampala-commercial-block',
    name: 'KAMPALA COMMERCIAL BLOCK',
    location: 'Kampala, Uganda',
    category: 'Commercial',
    stage: 'Under Construction',
    progress: 65,
    duration: '14 Months (Estimated)',
    clientType: 'Commercial Property Investor',
    description: 'A 3-storey mixed-use commercial center engineered for retail shops on ground level and open-plan executive office floors above, designed with reinforced concrete framing and curtain glass facade provisions.',
    keyFeatures: [
      'Heavy-duty Pad & Column Foundation Design',
      'Post-Tensioned Suspended Concrete Slabs',
      'Pre-installed Fire Suppression & Utility Riser Ducts',
      'External Scaffolding for High-Elevation Masonry',
      'Ground Floor Customer Parking with Reinforced Apron'
    ],
    image: PROJECT_STRUCTURE_ACTIVE,
    timeline: [
      { stage: 'Foundation', description: 'Pad footings & heavy grade ground beams', status: 'completed', progressPercentage: 100 },
      { stage: 'Structure', description: '3-tier column framework & 2nd suspended floor slab', status: 'completed', progressPercentage: 100 },
      { stage: 'Roofing', description: 'Structural steel canopy & waterproofing membrane', status: 'in-progress', progressPercentage: 70 },
      { stage: 'Wall Finishing', description: 'Blockwork infill complete; internal plastering underway', status: 'in-progress', progressPercentage: 45 },
      { stage: 'Installations', description: 'Heavy electrical trunking & 3-phase main distribution', status: 'pending', progressPercentage: 20 },
      { stage: 'Final Finishes', description: 'Curtain wall glazing & commercial floor tiling', status: 'pending', progressPercentage: 0 },
      { stage: 'Completed', description: 'Final occupancy certification and tenant handovers', status: 'pending', progressPercentage: 0 },
    ]
  },
  {
    id: 'mukono-family-home',
    name: 'MUKONO FAMILY HOME',
    location: 'Mukono, Uganda',
    category: 'Residential',
    stage: 'Foundation Stage',
    progress: 15,
    duration: '7 Months (Projected)',
    clientType: 'Private Family',
    description: 'Initial site preparation and groundworks for a custom single-storey family home in a tranquil Mukono neighborhood. Excavation trenches and high-tensile steel rebar cages are being anchored into solid bearing strata.',
    keyFeatures: [
      'Site Clearing & Precision Boundary Pegging',
      '1.2m Deep Trench Footings for Sloped Ground Stability',
      'Ant-Proof Damp Proof Membrane (DPM) Sub-base Layer',
      'BS-Standard High-Yield T12 & T16 Steel Reinforcement',
      'Ready-Mix Grade 25 Concrete Foundation Pours'
    ],
    image: PROJECT_FOUNDATION_STAGE,
    timeline: [
      { stage: 'Foundation', description: 'Excavation complete, rebar cages tied & footings poured', status: 'in-progress', progressPercentage: 85 },
      { stage: 'Structure', description: 'Sub-structure blockwork to damp-proof course (DPC)', status: 'pending', progressPercentage: 0 },
      { stage: 'Roofing', description: 'Pre-ordered timber rafters and iron sheet layout', status: 'pending', progressPercentage: 0 },
      { stage: 'Wall Finishing', description: 'Superstructure walling and internal partitions', status: 'pending', progressPercentage: 0 },
      { stage: 'Installations', description: 'Underground drainage & rough electrical conduit', status: 'pending', progressPercentage: 0 },
      { stage: 'Final Finishes', description: 'Ceramic tiles, fixtures, sanitaryware & painting', status: 'pending', progressPercentage: 0 },
      { stage: 'Completed', description: 'Turnkey key handover to homeowner', status: 'pending', progressPercentage: 0 },
    ]
  },
  {
    id: 'office-renovation-project',
    name: 'OFFICE RENOVATION PROJECT',
    location: 'Mukono, Uganda',
    category: 'Renovation',
    stage: 'Completed',
    progress: 100,
    duration: '3 Months',
    clientType: 'Corporate Practice',
    description: 'Complete interior and structural renovation of a dated commercial property along Mukono Main Road. Transformed into an ultra-modern executive workspace with acoustic glass partitions and energy-efficient LED grids.',
    keyFeatures: [
      'Structural Wall Removal & Steel I-Beam Installation',
      'Suspended Acoustic Mineral Fiber Ceiling Panels',
      'Heavy Traffic Polished Vitrified Floor Tiles',
      'Full Network CAT6 Data Cabling & Inverter Backup Lines',
      'Exterior Weather-Shield Refresh & Branded Facade Signage'
    ],
    image: PROJECT_MODERN_FINISHED,
    timeline: [
      { stage: 'Foundation', description: 'Structural audit & sub-floor inspection', status: 'completed', progressPercentage: 100 },
      { stage: 'Structure', description: 'Load-bearing lintel reinforcements & new doorways', status: 'completed', progressPercentage: 100 },
      { stage: 'Roofing', description: 'Ceiling void leak repair & waterproof flashing', status: 'completed', progressPercentage: 100 },
      { stage: 'Wall Finishing', description: 'Sound-dampening acoustic boards & premium coat paint', status: 'completed', progressPercentage: 100 },
      { stage: 'Installations', description: 'Server rack wiring, modern lighting & AC ducting', status: 'completed', progressPercentage: 100 },
      { stage: 'Final Finishes', description: 'Floor tiles, custom cabinetry & tempered glass doors', status: 'completed', progressPercentage: 100 },
      { stage: 'Completed', description: 'Immediate operational handover on schedule', status: 'completed', progressPercentage: 100 },
    ]
  },
  {
    id: 'seeta-apartments-complex',
    name: 'SEETA APARTMENTS COMPLEX',
    location: 'Mukono District (Seeta)',
    category: 'Residential',
    stage: 'Under Construction',
    progress: 58,
    duration: '12 Months (Estimated)',
    clientType: 'Residential Developer',
    description: 'A multi-unit modern apartment development featuring twelve 2-bedroom units designed for high occupancy and rental returns, built with concrete frame stability and independent utility metering.',
    keyFeatures: [
      'Two-Block Layout with Central Landscaped Court',
      'Monolithic Slabs Cast with Grade 30 Structural Concrete',
      'Dedicated Overhead Water Towers & Borehole Integration',
      'Independent Unit Balconies with Steel Balustrades',
      'Phase 1 Framing Complete; Plumbing Rough-ins in Progress'
    ],
    image: PROJECT_STRUCTURE_ACTIVE,
    timeline: [
      { stage: 'Foundation', description: 'Continuous strip foundation & reinforced basement raft', status: 'completed', progressPercentage: 100 },
      { stage: 'Structure', description: 'Level 1 and Level 2 slab casting and column curing', status: 'completed', progressPercentage: 100 },
      { stage: 'Roofing', description: 'Truss framework installation underway', status: 'in-progress', progressPercentage: 60 },
      { stage: 'Wall Finishing', description: 'External rendering & internal block laying', status: 'in-progress', progressPercentage: 40 },
      { stage: 'Installations', description: 'Plumbing stack risers and electrical junction boxes', status: 'pending', progressPercentage: 15 },
      { stage: 'Final Finishes', description: 'Tiling, kitchen counters, sanitaryware & railings', status: 'pending', progressPercentage: 0 },
      { stage: 'Completed', description: 'Full development handover & tenant readiness', status: 'pending', progressPercentage: 0 },
    ]
  },
  {
    id: 'kyetume-residential-villa',
    name: 'KYETUME RESIDENTIAL VILLA',
    location: 'Mukono (Kyetume)',
    category: 'Residential',
    stage: 'Foundation Stage',
    progress: 20,
    duration: '9 Months (Projected)',
    clientType: 'Diaspora Client',
    description: 'A contemporary luxury villa commissioned by a Ugandan client residing abroad. Tracked transparently via our weekly photographic build log from the initial topographical survey and footing excavations.',
    keyFeatures: [
      'Comprehensive Topographical Survey & Soil Bearing Test',
      'Engineered Ground Beam Grid on Deep Reinforced Pads',
      'Waterproofing Tanking Membrane to Prevent Damp Migration',
      'Transparent Weekly Progress Photos & Drone Aerial Survey',
      'Dedicated Site Store & 24/7 Security Enclosure'
    ],
    image: PROJECT_FOUNDATION_STAGE,
    timeline: [
      { stage: 'Foundation', description: 'Pad excavation, steel bending & blinding concrete pour', status: 'in-progress', progressPercentage: 90 },
      { stage: 'Structure', description: 'Rising brickwork and ground floor slab casting', status: 'pending', progressPercentage: 0 },
      { stage: 'Roofing', description: 'Custom architectural pitched steel roof system', status: 'pending', progressPercentage: 0 },
      { stage: 'Wall Finishing', description: 'Wall construction and internal plastering', status: 'pending', progressPercentage: 0 },
      { stage: 'Installations', description: 'Smart electrical conduits, solar plumbing setup', status: 'pending', progressPercentage: 0 },
      { stage: 'Final Finishes', description: 'Imported porcelain tiles, custom joinery, paint', status: 'pending', progressPercentage: 0 },
      { stage: 'Completed', description: 'Final inspection & remote digital handover', status: 'pending', progressPercentage: 0 },
    ]
  }
];

export const MASTER_CONSTRUCTION_JOURNEY = [
  {
    step: '01',
    title: 'EMPTY LAND & SITE SETUP',
    subtitle: 'Survey, clearing, boundary pegging & secure logistics',
    description: 'Before breaking ground, our survey team verifies legal boundary beacons, checks soil compaction characteristics, levels the site, establishes site offices, and secures water and power connections.',
    checkpoints: [
      'Topographical survey & beacon confirmation',
      'Bush clearing, topsoil stripping & site hoarding',
      'Temporary water storage & secure tool containers',
      'Architectural benchmark grid pegging'
    ],
    image: PROJECT_FOUNDATION_STAGE,
  },
  {
    step: '02',
    title: 'FOUNDATION & GROUNDWORKS',
    subtitle: 'Deep trenches, reinforcement rebar & solid concrete footings',
    description: 'The foundation carries every ounce of the building. We dig into firm bearing strata, lay blinding concrete, install high-tensile steel cages, and pour tested structural grade concrete with moisture barriers.',
    checkpoints: [
      'Excavation to verified load-bearing soil depth',
      'Steel cage fixing with concrete cover spacers',
      'Anti-termite treatment & damp-proof membrane (DPM)',
      'Foundation walling up to damp-proof course (DPC)'
    ],
    image: PROJECT_FOUNDATION_STAGE,
  },
  {
    step: '03',
    title: 'SUPERSTRUCTURE & FRAMEWORK',
    subtitle: 'Columns, load-bearing walls, lintels & suspended floor slabs',
    description: 'The building rises. Precision formwork, plumb columns, heavy brick/block masonry, ring beams, and monolithic suspended slabs create the permanent structural envelope.',
    checkpoints: [
      'Vertical column alignment with laser levels',
      'Bonded clay brick or concrete block masonry',
      'Formwork propping & slab reinforcement inspection',
      'Vibrated concrete casting & 21-day water curing'
    ],
    image: PROJECT_STRUCTURE_ACTIVE,
  },
  {
    step: '04',
    title: 'ROOFING & WATERPROOFING',
    subtitle: 'Engineered timber/steel trusses, leakproof roofing & drainage',
    description: 'Protecting the structure from tropical rain and sun. We fabricate anchored trusses, fix durable roofing profiles, install thermal insulation foils, and fit deep gutters.',
    checkpoints: [
      'Treated hardwood or light-gauge steel trusses',
      'Heavy-gauge corrugated or box-profile iron sheets',
      'Ridge capping, valley gutters & rainwater downpipes',
      'Fascia boards & eaves ventilation'
    ],
    image: PROJECT_STRUCTURE_ACTIVE,
  },
  {
    step: '05',
    title: 'WALL FINISHING & FIRST FIX',
    subtitle: 'Rough plumbing, electrical piping, rendering & ceiling boards',
    description: 'Internal services are concealed inside walls and floors before plastering. Water supply lines, drainage pipes, and electrical conduit conduits are tested under pressure before closing.',
    checkpoints: [
      'Concealed conduit electrical & circuit trunking',
      'PPR/PEX plumbing water lines & pressure testing',
      'Internal wall plastering & external sand-face rendering',
      'Gypsum false ceiling framing & board fixing'
    ],
    image: HERO_CONSTRUCTION,
  },
  {
    step: '06',
    title: 'FINAL FINISHES & SECOND FIX',
    subtitle: 'Tiling, painting, doors, windows, sanitaryware & fixtures',
    description: 'Craftsmanship takes center stage. Precision tile laying, smooth paint coats, modern sanitary fittings, sockets, lighting fixtures, and external compound paving are brought together.',
    checkpoints: [
      'Vitrified porcelain tiling with straight joint lines',
      'Multi-coat washable interior & weatherproof exterior paints',
      'Aluminium glazing, hardwood doors & locksets',
      'Sanitaryware installation, test running & compound paving'
    ],
    image: PROJECT_MODERN_FINISHED,
  },
  {
    step: '07',
    title: 'COMPLETED BUILDING & HANDOVER',
    subtitle: 'Final deep cleaning, defect inspection & keys delivery',
    description: 'A pristine, ready-to-inhabit property delivered to the client with full documentation, maintenance guidance, and verified structural integrity.',
    checkpoints: [
      'Comprehensive defect checklist sign-off',
      'Deep site cleaning & construction debris removal',
      'Handover of architectural plans, warranties & keys',
      'Post-handover warranty support'
    ],
    image: PROJECT_MODERN_FINISHED,
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Eng. Patrick Katende',
    role: 'Lead Project Director & Civil Engineer',
    category: 'management',
    categoryLabel: 'PROJECT MANAGEMENT',
    experience: '14+ Years in East Africa',
    bio: 'Oversees structural design compliance, resource planning, and quality control across all residential and commercial building sites.',
    avatarSeed: 'PatrickKatende',
    image: TEAM_CONSTRUCTION_SAFETY,
  },
  {
    id: 'team-2',
    name: 'Ronald Mukasa',
    role: 'Senior Project Manager & Estimator',
    category: 'management',
    categoryLabel: 'PROJECT MANAGEMENT',
    experience: '11+ Years Experience',
    bio: 'Responsible for budget auditing, procurement scheduling, and ensuring builds progress without material delays or cost overruns.',
    avatarSeed: 'RonaldMukasa',
  },
  {
    id: 'team-3',
    name: 'Grace Nakato',
    role: 'Senior Structural Site Engineer',
    category: 'engineers',
    categoryLabel: 'SITE ENGINEERS',
    experience: '9+ Years on Active Sites',
    bio: 'Specializes in foundation design analysis, reinforcement steel verification, and concrete grade testing on site.',
    avatarSeed: 'GraceNakato',
  },
  {
    id: 'team-4',
    name: 'Samuel Mugisha',
    role: 'Civil & Building Works Engineer',
    category: 'engineers',
    categoryLabel: 'SITE ENGINEERS',
    experience: '8+ Years Experience',
    bio: 'Coordinates structural slab casting, beam formwork tolerances, and local council building code alignment.',
    avatarSeed: 'SamuelMugisha',
  },
  {
    id: 'team-5',
    name: 'David Ssenyonjo',
    role: 'Chief Construction Supervisor',
    category: 'supervisors',
    categoryLabel: 'SUPERVISORS',
    experience: '12+ Years on Ground',
    bio: 'Daily on-site presence monitoring workmanship, safety standards adherence, and day-to-day progress logging.',
    avatarSeed: 'DavidSsenyonjo',
  },
  {
    id: 'team-6',
    name: 'Emmanuel Kirumira',
    role: 'Senior General Site Foreman',
    category: 'foremen',
    categoryLabel: 'FOREMEN',
    experience: '15+ Years Hands-on',
    bio: 'Directs trade foremen, masons, and iron benders to ensure every wall is straight, plumb, and structurally true.',
    avatarSeed: 'EmmanuelKirumira',
  },
  {
    id: 'team-7',
    name: 'Joseph Ochieng',
    role: 'Master Masonry & Structural Tradesman',
    category: 'skilled',
    categoryLabel: 'SKILLED WORKERS',
    experience: '10+ Years Dedicated Craft',
    bio: 'Leads our precision block-laying, stone pitch retaining walls, and monolithic casting teams.',
    avatarSeed: 'JosephOchieng',
  },
  {
    id: 'team-8',
    name: 'Sarah Nabanja',
    role: 'Client Relations & Project Support Coordinator',
    category: 'support',
    categoryLabel: 'SUPPORT TEAM',
    experience: '7+ Years Client Operations',
    bio: 'Maintains open communication channels with clients, coordinates weekly site photo updates, and schedules on-site inspections.',
    avatarSeed: 'SarahNabanja',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Mwanaweika Construction handled our project professionally from foundation to completion. Having lived abroad while the home was built in Mukono, their weekly photo updates and clear milestone invoicing gave us complete peace of mind.',
    clientType: 'Residential Client',
    project: '4-Bedroom Private Residence',
    location: 'Mukono Central',
  },
  {
    id: 'test-2',
    quote: 'The team communicated well and maintained a high standard throughout the project. Their structural engineering approach to our commercial retail building kept the timeline tight and prevented unnecessary material waste.',
    clientType: 'Commercial Client',
    project: 'Commercial Plaza Groundwork & Structure',
    location: 'Kampala-Jinja Highway Corridor',
  },
  {
    id: 'test-3',
    quote: 'We were impressed with the quality of work and attention to detail. From the first foundation footing excavation down to the final plastering and tile finishes, their foremen showed serious professionalism.',
    clientType: 'Property Owner',
    project: 'Complete Property Modernization & Extension',
    location: 'Mukono District',
  },
];

export const COMPANY_VALUES = [
  {
    title: 'QUALITY',
    description: 'We never cut corners on concrete mixes, steel grade, or finish standards. Every structure is built to endure generations.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'INTEGRITY',
    description: 'Honest bills of quantities, transparent pricing, and straightforward communication at every phase of the contract.',
    iconName: 'Scale',
  },
  {
    title: 'SAFETY',
    description: 'Zero tolerance for unsafe site practices. Full PPE, secure scaffolding, and systematic worker protection on every site.',
    iconName: 'HardHat',
  },
  {
    title: 'ACCOUNTABILITY',
    description: 'We take complete responsibility for agreed milestones, quality benchmarks, material custody, and promised timelines.',
    iconName: 'CheckCircle2',
  },
  {
    title: 'PROFESSIONALISM',
    description: 'Disciplined site foremen, qualified civil engineers, clean site management, and respect for clients and neighboring communities.',
    iconName: 'Award',
  },
  {
    title: 'CUSTOMER FOCUS',
    description: 'We build for your exact living or business needs, keeping you informed with documented weekly progress and transparent reporting.',
    iconName: 'Users',
  },
];

export const COMPANY_APPROACH = [
  {
    step: '01',
    title: 'CONSULTATION',
    subtitle: 'Understanding your vision & budget',
    description: 'We sit down with you to review architectural drawings, land tenure, project expectations, and realistic financial parameters.',
  },
  {
    step: '02',
    title: 'PLANNING & BOQ',
    subtitle: 'Detailed schedules & material quantities',
    description: 'Our engineers produce a transparent Bill of Quantities (BOQ), material specifications, construction schedule, and cost breakdown.',
  },
  {
    step: '03',
    title: 'SITE PREPARATION',
    subtitle: 'Survey, mobilization & ground clearing',
    description: 'Site hoarding is installed, boundaries verified, survey benchmarks marked, and equipment mobilized safely.',
  },
  {
    step: '04',
    title: 'CONSTRUCTION',
    subtitle: 'Disciplined building from foundation up',
    description: 'Active building under constant site supervisory presence, following certified engineering standards and material batch tests.',
  },
  {
    step: '05',
    title: 'INSPECTION & TESTING',
    subtitle: 'Rigorous quality checkpoints',
    description: 'Independent inspection of reinforcement, concrete cube curing, plumbing pressure tests, and structural alignment.',
  },
  {
    step: '06',
    title: 'COMPLETION & HANDOVER',
    subtitle: 'Clean delivery with warranties',
    description: 'Thorough defect rectification, deep site cleanup, handover of keys, drawings, and post-occupancy guidance.',
  },
];
