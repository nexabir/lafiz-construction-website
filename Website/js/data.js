/**
 * LAFIZ Construction & Consultant Ltd.
 * Core Data Store: Projects, CAD Drawings, Services, and Testimonials
 */

const LAFIZ_DATA = {
  stats: {
    established: 2011,
    personnel: 41,
    projectsCompleted: 160,
    districtsCovered: 18
  },

  services: [
    {
      id: "consultancy",
      title: "Consultancy",
      subtitle: "Architectural, Structural, MEP & Regulatory",
      tag: "01. Engineering",
      description: "Comprehensive engineering consultancy ranging from conceptual architectural design to complex structural analysis (ETABS/SAFE), MEP coordination, and official RAJUK/City Corporation approvals.",
      deliverables: [
        "Architectural 2D/3D Design & Space Planning",
        "Structural Engineering & Earthquake Resilient Design",
        "MEP (Mechanical, Electrical, Plumbing) Engineering",
        "RAJUK & Municipal Regulatory Approval Processing",
        "Cost Estimation & Bill of Quantities (BOQ)"
      ],
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20M5 20V8l7-5 7 5v12M9 12h6M9 16h6"/></svg>`
    },
    {
      id: "construction",
      title: "Construction",
      subtitle: "Turnkey Civil & Industrial Execution",
      tag: "02. Execution",
      description: "Full-scale building and civil construction delivering top-tier residential towers, commercial plazas, industrial plants, and public infrastructure with stringent quality benchmarks and timeline adherence.",
      deliverables: [
        "High-Rise Commercial & Residential Construction",
        "Industrial Warehouse & Pre-Engineered Steel (PEB)",
        "Deep Foundation, RCC Piling & Shore Protection",
        "Bridge Substructures & Road Infrastructure",
        "Rigorous Material Testing & Quality Assurance"
      ],
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>`
    },
    {
      id: "renovation",
      title: "Renovation & Restoration",
      subtitle: "Structural Retrofit & Modernization",
      tag: "03. Heritage & Upgrade",
      description: "Breathing new life into aging structures through advanced structural retrofitting, seismic strengthening, facade renewal, and historic preservation seamlessly combined with modern energy-efficient infrastructure.",
      deliverables: [
        "Seismic Strengthening & Column Jacketing",
        "Facade Restoration & Modern Architectural Cladding",
        "Adaptive Reuse of Heritage & Industrial Facilities",
        "Waterproofing & Damp Repair Technologies",
        "Building Envelope & Insulation Upgrades"
      ],
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`
    },
    {
      id: "interior",
      title: "Interior Design",
      subtitle: "Corporate, Commercial & Luxury Living",
      tag: "04. Spatial Design",
      description: "Creating functional, aesthetically refined, and human-centric interior environments. From state-of-the-art corporate boardrooms to luxury residential interiors, our designs embody precision and elegance.",
      deliverables: [
        "Corporate Workplace & Headquarters Fit-outs",
        "Executive Suites, Boardrooms & Conference Hubs",
        "Luxury Residential Penthouse & Apartment Interiors",
        "Acoustic Engineering & Architectural Lighting Design",
        "Custom Millwork & Precision Material Detailing"
      ],
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`
    }
  ],

  projects: [
    {
      id: "pgcb-aricha",
      title: "PGCB Complex at Aricha, Manikganj - Master Plan",
      category: ["industrial", "infrastructure", "power"],
      sector: "Power & Energy",
      location: "Aricha, Manikganj, Bangladesh",
      client: "Power Grid Company of Bangladesh (PGCB)",
      year: "2023 - 2024",
      scope: "Consultancy - Master Plan Preparation (Phase-2)",
      image: "assets/projects/pgcb-complex-aricha.jpg?v=5",
      featured: true,
      summary: "Master Plan preparation for PGCB Complex at Aricha, Manikganj (Phase-2) including Part-I Master Plan up to year-2059, Part-II Short Term Development Plan up to year-2028, and Part-III Environment Impact Assessment (EIA) and Resettlement Study.",
      challenge: "Developing a comprehensive master plan for a critical 230/132kV power grid complex requiring long-term planning spanning decades.",
      solution: "LAFIZ provided consultancy services including site analysis, survey, conceptual design, layout planning, and cost estimation for the PGCB complex development.",
      outcome: "Successfully delivered comprehensive master plan valued at Tk. 6.80 Lakh enabling phased development of the PGCB complex."
    },
    {
      id: "sreenagar-toll",
      title: "Toll Plaza Traffic Facility at Dhaka-Maowa Expressway",
      category: ["transportation", "infrastructure"],
      sector: "Transportation",
      location: "Dhaka-Maowa Expressway",
      client: "Roads & Highways Department (RHD)",
      year: "2022",
      scope: "Consultancy & Construction of Toll Plaza Traffic Facility",
      image: "assets/projects/toll-plaza-dhaka.jpg?v=5",
      featured: true,
      summary: "Consultancy and construction of toll plaza traffic facility on the Dhaka-Maowa Expressway, including structural steel canopies and administrative buildings.",
      challenge: "Executing heavy structural steel fabrications and traffic control infrastructure on a high-volume expressway corridor while maintaining safety and traffic flow.",
      solution: "LAFIZ provided complete consultancy and construction supervision, delivering heavy steel structures and traffic facility infrastructure on schedule.",
      outcome: "Successfully completed toll plaza traffic facility delivering efficient highway toll collection infrastructure for the expressway corridor."
    },
    {
      id: "rajuk-residential",
      title: "16-Storied Building at NHA Mohammadpur",
      category: ["residential"],
      sector: "Residential",
      location: "Mohammadpur, Dhaka, Bangladesh",
      client: "National Housing Authority (NHA)",
      year: "2014 - 2018",
      scope: "Construction of 16 Storied Building with Basement",
      image: "assets/projects/nha-mohammadpur.jpg?v=5",
      featured: true,
      summary: "Construction of 16-storied building and basement for the National Housing Authority. Each floor area consists of 112 sqm.",
      challenge: "Delivering a high-rise residential structure for a government housing authority within strict quality benchmarks and timeline requirements.",
      solution: "LAFIZ executed the full construction scope including basement excavation, structural framing, and finishing works with rigorous quality control.",
      outcome: "Completed February 2014 - August 2018, delivering 16-storied government residential housing with basement parking."
    },
    {
      id: "industrial-substation",
      title: "Bangladesh Bank Administrative & Dormitory, Rajshahi",
      category: ["institutional", "commercial"],
      sector: "Institutional",
      location: "Rajshahi, Bangladesh",
      client: "Bangladesh Bank",
      year: "2021 - 2023",
      scope: "Consultancy & Construction of Administrative Complex",
      image: "assets/projects/bangladesh-bank-admin.jpg?v=5",
      featured: true,
      summary: "Complete construction of 3-storied administrative building (34,000 sqft), 6-storied dormitory (61,000 sqft), pump house, guest house, parking, and all utility systems.",
      challenge: "Delivering a comprehensive administrative complex with dormitory, pump house, water supply, drainage, sewerage, AC, fire protection, and power systems.",
      solution: "LAFIZ provided full consultancy and construction management, coordinating all building systems including generator/sub-station building, hot water supply, and waste management.",
      outcome: "Successfully completed administrative and dormitory complex with all modern amenities for Bangladesh Bank's regional operations."
    },
    {
      id: "commercial-tower",
      title: "9-Storied Residential Building at Aftab Nagor, Dhaka",
      category: ["residential"],
      sector: "Residential",
      location: "Aftab Nagor, Dhaka",
      client: "Private Client",
      year: "2022",
      scope: "Consultancy & Construction of 9-Storied Residential Building",
      image: "assets/projects/residential-aftab-nagor.jpg?v=5",
      featured: true,
      summary: "9-storied residential building at Aftab Nagor, Dhaka on 12.0 decimal land area with 18 residential units, total project cost Tk. 7.0 crore.",
      challenge: "Maximizing residential units on a 12-decimal plot in a dense Dhaka neighborhood while ensuring structural integrity and modern amenities.",
      solution: "LAFIZ provided architectural and structural consultancy with full construction execution delivering 18 well-designed residential units.",
      outcome: "Successfully completed 9-storied residential building delivering 18 premium residential units within project budget of Tk. 7.0 crore."
    },
    {
      id: "bridge-staging",
      title: "6-Storied Residential Building at Feni",
      category: ["residential"],
      sector: "Residential",
      location: "Feni, Bangladesh",
      client: "Suchana Developer Ltd.",
      year: "2021",
      scope: "Consultancy & Construction of 6-Storied Residential Building",
      image: "assets/projects/residential-feni.jpg?v=5",
      featured: true,
      summary: "6-storied residential building at Feni on 10.0 decimal land area with 16 residential units, total project cost Tk. 4.50 Crore.",
      challenge: "Delivering quality residential construction in a growing regional city with efficient use of a 10-decimal plot.",
      solution: "LAFIZ provided complete consultancy and construction services delivering 16 residential units with modern design.",
      outcome: "Successfully completed 6-storied residential building delivering 16 units within project budget of Tk. 4.50 Crore."
    },
    {
      id: "educational-campus",
      title: "Admin Cum Academic Building, Rangpur Cadet College",
      category: ["institutional"],
      sector: "Institutional",
      location: "Rangpur, Bangladesh",
      client: "Rangpur Cadet College",
      year: "2021 - 2023",
      scope: "Construction of 3-Storey Admin Cum Academic Building with 5-Storied Foundation",
      image: "assets/projects/rangpur-cadet-admin.jpg?v=5",
      featured: false,
      summary: "Construction of a 3-storey admin cum academic building with 5-storied foundation for Rangpur Cadet College, completed May 2021 - December 2023.",
      challenge: "Delivering a large academic building with deep foundation requirements in a northern district location.",
      solution: "LAFIZ executed the full construction scope including 5-storied foundation work and 3-storey superstructure with all necessary academic facilities.",
      outcome: "Successfully completed admin cum academic building for Rangpur Cadet College, enhancing the institution's educational infrastructure."
    },
    {
      id: "steel-warehouse",
      title: "Auditorium Complex Building, Rangpur Cadet College",
      category: ["institutional"],
      sector: "Institutional",
      location: "Rangpur, Bangladesh",
      client: "Rangpur Cadet College",
      year: "2021 - 2023",
      scope: "Construction of 2-Storey Auditorium Complex with 4-Storied Foundation",
      image: "assets/projects/rangpur-cadet-auditorium.jpg?v=5",
      featured: false,
      summary: "Construction of a 2-storey auditorium complex building with 4-storied foundation for Rangpur Cadet College, completed May 2021 - November 2023.",
      challenge: "Constructing a large auditorium complex with deep foundations to serve the college's event and gathering needs.",
      solution: "LAFIZ executed the complete construction including 4-storied foundation and 2-storey auditorium superstructure with proper acoustic considerations.",
      outcome: "Successfully completed auditorium complex providing a modern event and gathering space for Rangpur Cadet College."
    },
    {
      id: "jalsheri-fuel",
      title: "Jalsheri Eco-Service & Fueling Station",
      category: ["commercial", "infrastructure"],
      sector: "Commercial",
      location: "Jalsheri, Purbachal Smart City, Dhaka",
      client: "Energy Corporation Bangladesh",
      year: "2024 - 2025",
      scope: "CAD Masterplan, Civil Layout & Petroleum Compliance",
      image: "assets/projects/fuel-pump-jalsheri-cad.jpg",
      featured: false,
      summary: "Next-generation energy distribution station featuring EV charging bays, double-walled fuel storage containment, and canopy architecture.",
      challenge: "Strict environmental aquifer protection guidelines and high safety setbacks under Ministry of Explosives and RAJUK regulations.",
      solution: "Zero-leakage fiberglass-jacketed underground storage tanks with continuous interstitial electronic leak sensors.",
      outcome: "Model sustainable fueling station design approved by all environmental and civil authorities."
    }
  ],

  cadBlueprints: [
    {
      id: "cad-rajuk-floor",
      title: "Multi-Storey Architectural Floor Plan & Layout",
      category: "Architectural",
      sheet: "Sheet A-01 | Scale 1:100",
      project: "Rajuk Residential Tower",
      image: "assets/cad/rajuk-floor-plan-sheet1.jpg",
      description: "Detailed ground and typical floor layout showing structural column grid, elevator cores, fire stairwells, and municipal setback adherence."
    },
    {
      id: "cad-rajuk-elevation",
      title: "Building Elevations & Cross-Sectional Geometry",
      category: "Architectural",
      sheet: "Sheet A-03 | Scale 1:100",
      project: "Rajuk Residential Tower",
      image: "assets/cad/rajuk-elevation-sheet3.jpg",
      description: "Complete north/south exterior facade elevations and vertical sectional elevations detailing floor-to-floor clearances and cantilever balconies."
    },
    {
      id: "cad-rajuk-structural",
      title: "Structural Column Schedule & Piling Detail",
      category: "Structural",
      sheet: "Sheet S-05 | Engineering Scale",
      project: "High-Rise Foundation System",
      image: "assets/cad/rajuk-structural-sheet5.jpg",
      description: "Structural reinforcement schedules, rebar curtailment, pile cap dimensions, and beam-column joint ductile detailing compliant with BNBC 2020."
    },
    {
      id: "cad-fuel-pump",
      title: "Petroleum Fueling Station Civil Master CAD",
      category: "Masterplan",
      sheet: "Sheet C-01 | Jalsheri Purbachal",
      project: "Jalsheri Modern Fuel Pump",
      image: "assets/cad/fuel-pump-jalsheri-cad.jpg",
      description: "Complete civil plot plan, turning radiuses for fuel tankers, canopy footprint, separator tanks, and ingress/egress vehicular traffic loops."
    },
    {
      id: "cad-staging-calc",
      title: "Bridge Staging & Heavy Shoring Calculations",
      category: "Structural",
      sheet: "Sheet ST-04 | High Load Falsework",
      project: "Flyover Superstructure Construction",
      image: "assets/cad/staging-structural-calc.jpg",
      description: "Finite-element load staging analysis, buckling ratios, coupler distributions, and hydraulic jack lifting points for elevated roadway bridge casting."
    },
    {
      id: "cad-rcc-scaffolding",
      title: "Heavy RCC Scaffolding & Support Blueprint",
      category: "Construction",
      sheet: "Sheet M-01 | Heavy Temporary Works",
      project: "RCC Engineering Structures",
      image: "assets/cad/rcc-scaffolding-cad.jpg",
      description: "Detailed fabrication assembly for heavy tubular steel scaffolding towers, base plates, diagonal bracing, and wind stabilization tiebacks."
    },
    {
      id: "cad-school-grading",
      title: "Campus Grading & Digital Surface Model",
      category: "Civil & Site",
      sheet: "Sheet L-03 | Surface Topography",
      project: "Baniatari Model School Complex",
      image: "assets/cad/baniatari-school-cad.jpg",
      description: "Civil 3D topographic contours, surface cut/fill balance, stormwater drainage gradient calculations, and external apron elevations."
    },
    {
      id: "cad-footpath",
      title: "Urban Pedestrian Infrastructure & Drainage",
      category: "Infrastructure",
      sheet: "Sheet INF-02 | Municipal Works",
      project: "Dhaka School Zone Footpath",
      image: "assets/cad/footpath-infrastructure-cad.jpg",
      description: "Tactile paving layout, curb stones, subsurface stormwater catch-basins, and pedestrian safety barricades."
    }
  ],

  sectors: [
    { title: "Residential", count: "45+ Projects", desc: "Luxury apartments, gated communities & high-rise urban condominiums." },
    { title: "Commercial", count: "38+ Projects", desc: "Corporate headquarters, retail shopping complexes & mixed-use plazas." },
    { title: "Institutional", count: "22+ Projects", desc: "Universities, government training facilities, schools & civic centers." },
    { title: "Industrial", count: "29+ Projects", desc: "Heavy manufacturing plants, export warehouses & PEB steel structures." },
    { title: "Infrastructure", count: "18+ Projects", desc: "Highway flyovers, toll plazas, deep foundations & retaining structures." },
    { title: "Transportation", count: "14+ Projects", desc: "Transit stations, bridge approaches, pavement works & traffic nodes." },
    { title: "Power & Energy", count: "12+ Projects", desc: "Electrical substations, PGCB grid complexes & industrial power hubs." },
    { title: "Specialized Facilities", count: "9+ Projects", desc: "Fuel distribution hubs, seismic retrofits & emergency cyclone shelters." }
  ],

  values: [
    {
      title: "Multidisciplinary Expertise",
      desc: "Full in-house synergy between architectural vision, structural calculation, and MEP precision under one roof."
    },
    {
      title: "Practical Engineering",
      desc: "Designs engineered for constructability, structural resilience, and cost efficiency in real-world Bangladeshi soil and climate."
    },
    {
      title: "Project Experience",
      desc: "Over 13 years of demonstrated excellence handling high-stakes public contracts and private sector flagships."
    },
    {
      title: "Technical Documentation",
      desc: "Meticulous CAD blueprints, BIM coordination, and strict adherence to BNBC 2020 and RAJUK regulatory building bylaws."
    },
    {
      title: "Collaborative Delivery",
      desc: "Transparent partnerships with clients, government authorities, and supply partners from initial sketch to final handover."
    }
  ]
};
