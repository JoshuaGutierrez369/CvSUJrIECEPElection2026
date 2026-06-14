const CANDIDATE_CATEGORIES = [
  { id: "all", label: "All Candidates" },
  { id: "executive", label: "Executive Board" },
  { id: "secretariat", label: "Secretariat & PIO" },
  { id: "documentation", label: "Documentation & Creatives" },
  { id: "finance", label: "Finance & Business" },
  { id: "partnerships", label: "Partnerships & Sponsorship" },
  { id: "operations", label: "Logistics & Operations" },
  { id: "gad", label: "Gender & Development" }
];

const CANDIDATES = [
  {
    id: "francine-sorongon",
    order: 1,
    name: "Francine S. Sorongon",
    position: "President",
    category: "executive",
    image: "assets/candidates/35.png",
    motto: "Learning as I lead, serving as I learn.",
    platformSections: [
      {
        title: "I. Academic, Industry, and Leadership Advancements",
        items: [
          { title: "Project EXPEDITION: ECE Industry Tour", description: "An immersive industrial plant tour for all ECEs, bringing students straight to the real field. Designed to provide early company exposure." },
          { title: "Project SPARKS: Igniting the Leader Within.", description: "Interactive leadership and communication seminars designed to help every engineering student discover and confidently embrace their hidden potential." },
          { title: "Project WONDERLAND: The ECE General Assembly & Career Caravan", description: "A high-concept, themed General Assembly designed to bring the entire department together while broadening horizons by highlighting diverse careers." },
          { title: "Project CORE: ECEntials", description: "Workshop series dedicated to continuously improving the technical growth and skills advancement of every ECE student." },
          { title: "Project OPTIMA: Pre-Board Mastery & Licensure Readiness", description: "A continuity initiative providing realistic, simulated board exam environments to build testing stamina and confidence for our graduating class." }
        ]
      },
      {
        title: "II. Structural Standardization & Governance",
        items: [
          { title: "Organizational Stabilization", description: "Clearly defining officer roles to maximize efficiency, while institutionalizing a stable, two-year horizon for the Constitution and By-Laws." }
        ]
      },
      {
        title: "III. Student Care & Digital Empowerment",
        items: [
          { title: "The Pit Stop: Tactical Exam Support Oasis", description: "A revamped exam support booth featuring emergency borrowable toolkits (calculators, pens) and snacks." },
          { title: "The ECE Thrift & Tech Exchange", description: "A practical marketplace where seniors can sell used capstone parts, books, and notes to lowerclassmen at discounted prices while offering peer advice." },
          { title: "ECE On-Air: Dynamic Multi-Media Hub", description: "Maximizing our digital presence through promotional videos, student spotlights, and streamlined multimedia content." }
        ]
      }
    ]
  },
  {
    id: "dray-santos",
    order: 2,
    name: "Dray Turry L. Santos",
    position: "Vice President for Internal Affairs",
    category: "executive",
    image: "assets/candidates/36.png",
    motto: "Lead with Action, Govern with Purpose",
    platformSections: [
      {
        title: "Academic and Technical Support",
        items: [
          { title: "Skill-Building Workshops and Training Programs", description: "Organize hands-on workshops, seminars, and training sessions that strengthen the practical and technical competencies of ECE students, bridging the gap between classroom learning and industry applications." },
          { title: "Accessible Learning Resources Initiative", description: "E-books, lecture notes, reviewers, and other educational materials to provide students with easier access to quality learning resources." },
          { title: "Academic and Technical Competitions", description: "Promote and organize competitions, quiz bees, design challenges, and innovation contests that encourage excellence, develop problem-solving skills, and recognize outstanding ECE students." },
          { title: "Peer Mentoring and Academic Support Network", description: "Establish a mentoring system where upper-year students can guide and support fellow ECE students in academics, study strategies, and career preparation." },
          { title: "Industry Exposure and Career Development Programs", description: "Facilitate talks, networking events, and career-oriented seminars with professionals and alumni to help students gain insights into the ECE industry and future opportunities." }
        ]
      },
      {
        title: "Student Well-Being",
        items: [
          { title: "Mental Health and Wellness Advocacy", description: "Promote programs and initiatives that raise awareness about mental health, encourage self-care, and provide students with access to support resources during challenging academic periods." },
          { title: "Student Feedback and Open Communication Channels", description: "Maintain accessible platforms where students can freely voice their concerns, suggestions, and ideas, ensuring that every student feels heard and represented." },
          { title: "Work-Life Balance Initiatives", description: "Organize recreational, social, and community-building activities that allow students to unwind, build meaningful connections, and maintain a healthy balance between academics and personal life." },
          { title: "Student Recognition and Appreciation Programs", description: "Celebrate not only academic achievements but also leadership, service, creativity, and personal growth to foster a positive and motivating student environment." }
        ]
      }
    ]
  },
  {
    id: "anjho-bitago",
    order: 3,
    name: "Anjho T. Bitago",
    position: "Vice President for External Affairs",
    category: "executive",
    image: "assets/candidates/37.png",
    motto: "Win through your actions, never through argument",
    platformItems: [
      "This digital platform bridges learning gaps by providing structured exam reviews, recorded tutorials, and live peer support during midterms and finals.",
      "A two-year cycle program that alternates between foundational lectures and hands-on workshops to balance core theory with practical engineering application.",
      "A prestigious university-wide mathematics competition that challenges students across all colleges, promoting analytical excellence and healthy academic rivalry.",
      "A realistic PRC licensure exam simulation that uses diagnostic analytics to help ECE students assess their readiness and identify critical focus areas.",
      "A semestral recognition program honoring top ECE students for outstanding achievements in academics, traditional sports, and competitive esports.",
      "An interactive workshop designed to build soft skills, foster collaboration, and unite ECE student leaders and members through team challenges.",
      "A career preparation initiative offering resume clinics, alumni mock interviews, and industry networking to ready upperclassmen for the tech job market.",
      "A structured talent search that scouts and drafts top ECE student representatives for competitive academic, athletic, esports, and creative teams."
    ]
  },
  {
    id: "janna-landicho",
    order: 4,
    name: "Janna A. Landicho",
    position: "Vice President for Technical Operations",
    category: "executive",
    image: "assets/candidates/38.png",
    motto: "Own the outcome, trust the process.",
    platformText: "As VP for Technical Creatives, I will foster innovation, enhance technical and creative skills, provide opportunities for collaboration, and create platforms where every member can develop, showcase, and maximize their talents for academic and professional growth."
  },
  {
    id: "dave-lumagui",
    order: 5,
    name: "Dave Matthew N. Lumagui",
    position: "Vice President for Technical Operations",
    category: "executive",
    image: "assets/candidates/39.png",
    motto: "A leader's true power comes from their ability to empower others.",
    platformItems: [
      { title: "Engaging Publication Materials", description: "Create visually appealing and informative content." },
      { title: "Efficient Delegation of Tasks", description: "Ensure responsibilities are distributed fairly." },
      { title: "Skill Development and Training", description: "Provide opportunities for members to learn technical skills." }
    ]
  },
  {
    id: "janna-gloriani",
    order: 6,
    name: "Janna Fe C. Gloriani",
    position: "Vice President for Partnerships and Sponsorships",
    category: "executive",
    image: "assets/candidates/40.png",
    motto: "Relationship status: In partnership.",
    platformItems: [
      { title: "Beyond the Bias (Continuation of Break the Bias)", description: "Beyond the Bias continues the organization's commitment to mental health awareness, leadership development, and student empowerment within the ECE community." },
      { title: "Sustaining and Expanding Industry Opportunities", description: "To focus on strengthening existing partnerships while continuously securing new ones that provide greater opportunities for ECE students." },
      { title: "More OJT, More Career Pathways", description: "Seeks to expand the Priority Internship Program by increasing access to ECE-related internship and employment opportunities. Aiming to ensure that every qualified student has a clear pathway from academics to industry experience." },
      { title: "Continuous Support for Robotics and ASQL", description: "Dedicated to sustaining the growth of the Robotics and ASQL teams through continuous sponsorships, partnerships, and technical support. It ensures that student innovators are given the resources they need to compete and excel." },
      { title: "Student Welfare Beyond Academics", description: "Aims to promote mental health, inclusivity, and overall student well-being through programs and partnerships that support a healthier academic environment. It emphasizes that student success includes both academic performance and personal well-being." }
    ]
  },
  {
    id: "jemaelah-concepcion",
    order: 7,
    name: "Jemaelah P. Concepcion",
    position: "Vice President for Documentation & Records",
    category: "executive",
    image: "assets/candidates/41.png",
    motto: "Leading with Order, Recording with Purpose.",
    platformItems: [
      { title: "Organized and Reliable Documentation", description: "Having served as a member of a Documentation Unit, I have gained experience in handling reports, records, and event documentation. I will use this experience to ensure that all organizational documents are accurate, organized, and properly maintained." },
      { title: "On-Time Submission of Records", description: "I understand the importance of deadlines and timely documentation. I will make sure that reports, minutes, and other necessary records are submitted promptly without compromising quality." },
      { title: "Clear and Accurate Information", description: "I will ensure that important announcements, decisions, and activities are properly documented so that members can easily stay informed and updated." },
      { title: "Active Participation in Activities", description: "I believe good documentation comes from being involved. I will actively participate in organizational activities to better capture and represent the experiences and achievements of our members." },
      { title: "Quality Documentation and Creative Outputs", description: "Through my experience in documentation, I have developed skills in organizing information and creating presentable outputs. I will strive to produce documentation that is both professional and meaningful." },
      { title: "Teamwork and Commitment", description: "I will work closely with officers, committees, and members to ensure that every event and accomplishment is properly documented and preserved as part of our organization's history." }
    ]
  },
  {
    id: "johnreign-ancheta",
    order: 8,
    name: "Johnreign Jayden P. Ancheta",
    position: "Vice President for Documentation & Records",
    category: "executive",
    image: "assets/candidates/42.png",
    motto: "If things doesn't get better on their own, make it better with your all!",
    platformItems: [
      { title: "Docu-Archive", description: "Organized archive of organizational events and publication materials." },
      { title: "Holistic Duty Assignments", description: "Ensuring inclusivity in organizational duties, especially for documentation purposes." },
      { title: "A Well-Rounded and Well-Documented JIECEP", description: "Coordination with other offices with documentation-related purposes, working closely with other officers and partners for quality publication materials and documentation." }
    ]
  },
  {
    id: "aliyah-pagara",
    order: 9,
    name: "Aliyah Sophia D. Pagara",
    position: "Vice President for Finance and Marketing",
    category: "executive",
    image: "assets/candidates/43.png",
    motto: "Transparency, Responsibility, Accountability.",
    platformItems: [
      { title: "Transparent Financial Reporting", description: "Provide regular and easy-to-understand financial reports to all members." },
      { title: "Responsible Budget Management", description: "Plan and manage budgets efficiently to maximize organizational resources." },
      { title: "Fundraising and Resource Generation", description: "Develop innovative fundraising activities to support organizational programs." }
    ]
  },
  {
    id: "ellyssa-vidal",
    order: 10,
    name: "Ellyssa Terence L. Vidal",
    position: "Secretary",
    category: "secretariat",
    image: "assets/candidates/44.png",
    motto: "aspire to inspire before we expire",
    platformItems: [
      { title: "Digital Archiving", description: "Organize records, meeting minutes, and documentation in a searchable database." },
      { title: "Standardized Templates", description: "Templates for documents like proposals for efficient and sped up tasks, as well as to reduce delays." },
      { title: "Centralized Communication", description: "Serve as a bridge of different committees/positions to track project timelines, manage room bookings, and prevent scheduling conflicts." }
    ]
  },
  {
    id: "russell-glorioso",
    order: 11,
    name: "Russell Johnsdher Glorioso",
    position: "Assistant Secretary",
    category: "secretariat",
    image: "assets/candidates/45.png",
    motto: "being a wise leader is not good enough, He must be a child of God in order to succeed in life",
    platformText: "As a candidate for Assistant Secretary of the Institute of Electronics Engineers of the Philippines, I am committed to promoting organization, transparency, and efficient communication within our chapter. I will ensure accurate documentation of meetings, timely dissemination of information, and proper record management to support the organization's activities and goals."
  },
  {
    id: "racklen-anago",
    order: 12,
    name: "Racklen B. Añago",
    position: "Technical Creatives",
    category: "documentation",
    image: "assets/candidates/46.png",
    motto: "Eyes on the Stars, Feet on the Ground",
    platformItems: [
      { title: "Digital Legacy Project", description: "Create a centralized archive of JIECEP publications, event highlights, achievements, and creative materials to preserve the organization's history and make resources accessible for future officers." },
      { title: "Behind-the-Scenes JIECEP", description: "Showcase the effort and teamwork behind events through videos, candid photos, and creative documentation to strengthen transparency and member appreciation, to show everyone how much work and teamwork goes into making our events happen." },
      { title: "Strengthening JIECEP's Visual Identity", description: "Create consistent and professional publication materials that reflect JIECEP's values and strengthen its brand across all events and social media platforms." }
    ]
  },
  {
    id: "junix-maya",
    order: 13,
    name: "Junix Saab S. Maya",
    position: "PIO for Internal Affairs",
    category: "secretariat",
    image: "assets/candidates/47.png",
    motto: "Transparency in Action, Service in Motion.",
    platformItems: [
      "Establish an efficient, real-time notification system within CvSU Jr. IECEP to keep all student members promptly updated on upcoming organizational programs, projects, and activities.",
      "Ensure the timely and transparent dissemination of all approved executive orders, resolutions, and official meeting minutes to the student body through a centralized digital archive.",
      "Maintain a healthy, structured internal communication pipeline that accurately channels student feedback and sentiments to the executive committee before majority decisions are executed."
    ]
  },
  {
    id: "sharri-reola",
    order: 14,
    name: "Sharri Alanis L. Reola",
    position: "PIO for External Affairs",
    category: "secretariat",
    image: "assets/candidates/48.png",
    motto: "\"I am not throwing away my shot\" -Alexander Hamilton",
    platformItems: [
      "Ensure the dissemination of information within the regional chapter and Cavite State University in a transparent, timely, and accurate manner.",
      "As the representative of CvSU Jr. JIECEP in communicating with other organizations and regional chapters, I will uphold professionalism, integrity, and respect to properly reflect the organization's goals, values, and image.",
      "Ensure that all announcements, updates, and external communications are properly disseminated, organized, and well-managed.",
      "Uphold healthy, collaborative, and effective communication with other organizational bodies and regional chapters."
    ]
  },
  {
    id: "mariel-tamayo",
    order: 15,
    name: "Mariel Nicole C. Tamayo",
    position: "Events Documentation Unit",
    category: "documentation",
    image: "assets/candidates/49.png",
    motto: "Building progress through reliable support and quiet dedication.",
    platformItems: [
      "Provide clear visual documentation by capturing the highlights of inside activities, online meetings, and outside events, including taking photos and videos of Jr. IECEP members and representatives.",
      "Maintain an organized and accessible archive of essential media files for reliable record-keeping.",
      "Help keep our members informed and updated on organizational activities by providing clear and engaging visual highlights of our events.",
      "Assist in compiling visual records to support the officers in the timely submission of accomplishment reports.",
      "Help with visual designs and assist in setting up engaging event features.",
      "Serve as a reliable support member by assisting fellow officers with general event preparations and physical setups when assigned."
    ]
  },
  {
    id: "mary-panganiban",
    order: 16,
    name: "Mary Katrice Anne R. Panganiban",
    position: "Events Documentation Unit",
    category: "documentation",
    image: "assets/candidates/50.png",
    motto: "\"Don't tell people how to do things. Tell them what to do and let them surprise you with their results.\" - Gen. George Patton",
    platformItems: [
      { title: "Memory Wall Project", description: "Create a digital or physical memory wall featuring photos, quotes, and highlights from events throughout the year. This will helps members remember meaningful experiences, strengthens the sense of community, and showcases the organization's journey and achievements." },
      { title: "Moments That Matter Series", description: "Feature memorable event photos along with short stories or reflections from participants. This can highlights the impact of events on individuals and encourages appreciation of shared experiences and lasting memories." }
    ]
  },
  {
    id: "dallin-velasco",
    order: 17,
    name: "Dallin Russel C. Velasco",
    position: "Events Documentation Unit",
    category: "documentation",
    image: "assets/candidates/51.png",
    motto: "Transforming limitations into possibilities.",
    platformTagline: "HELP, HANDLES, & HIGHLIGHTS",
    platformItems: [
      { title: "Streamlined Event Management - Centralized Event Timelines", description: "Implement strict, transparent planning timelines for all departmental events to avoid scheduling conflicts and ensure high student turnout." },
      { title: "Clear Communications", description: "I will make sure meeting minutes and event updates are written clearly and shared quickly, so no student is left in the dark about what's happening in Jr. IECEP." },
      { title: "Photo & Memory Highlights", description: "I will focus on capturing the best moments of our seminars and activities, ensuring we have great photos and records to remember our college journey together." }
    ]
  },
  {
    id: "ahron-telmo",
    order: 18,
    name: "Ahron Tristan B. Telmo",
    position: "Events Documentation Unit",
    category: "documentation",
    image: "assets/candidates/52.png",
    motto: "Dream BIG, Work Hard, Stay Humble",
    platformText: "As a member of the Events Documentation Unit, I am committed to keeping all event photos, videos, and documents organized and properly archived to ensure easy access and preservation of records. I will strive to submit accurate documentation, reports, and outputs on or before their deadlines while ensuring complete coverage of all organizational events and activities.\n\nThrough close collaboration with officers and members, I will help preserve important memories, achievements, and records of the organization. I am also dedicated to providing timely updates and documentation of organizational accomplishments and ensuring that every event is properly documented from preparation to completion. Through responsibility, teamwork, and attention to detail, I aim to contribute to a reliable and effective documentation system for the organization."
  },
  {
    id: "gabriel-velasco",
    order: 19,
    name: "Gabriel Reinharth R. Velasco",
    position: "Assistant Vice President for Finance and Marketing",
    category: "finance",
    image: "assets/candidates/53.png",
    motto: "Responsible Finance, Stronger Organization",
    platformText: "As Vice President for Finance, I will promote transparency, accountability, and efficient financial management by providing clear financial reports, maintaining accurate records, and ensuring that every peso contributes to the growth and success of our organization."
  },
  {
    id: "alezzandra-legaspi",
    order: 20,
    name: "Alezzandra Nicole Y. Legaspi",
    position: "Auditor",
    category: "finance",
    image: "assets/candidates/54.png",
    motto: "Passion into purpose.",
    platformItems: [
      { title: "AuditSync Hub", description: "A centralized audit and workflow management platform that helps departments monitor tasks, track progress, and maintain organized records of audit activities to promote transparency and efficiency across the organization." },
      { title: "DocuSure", description: "A secure document management that enables the officers to access, verify, and organize financial records, reports, and compliance documents, ensuring proper documentation." },
      { title: "DeadlineConnect", description: "A reminder and scheduling platform that keeps officers informed of important deadlines, meetings, compliance requirements, and pending tasks, improving coordination and timely completion of organizational responsibilities." }
    ]
  },
  {
    id: "naomie-largado",
    order: 21,
    name: "Naomie Danielle L. Largado",
    position: "Business Manager",
    category: "finance",
    image: "assets/candidates/55.png",
    motto: "True leadership is not about being ahead, it's about bringing everyone along and leaving no one behind.",
    platformItems: [
      { title: "Digital Business Management", description: "Utilize online platforms to improve promotion, sales, and coordination of business-related activities." },
      { title: "Merchandise and Product Innovation", description: "develop appealing ECE merchandise that promotes the school pride and the organization." },
      { title: "Business Partnerships Network", description: "build connections with local businesses, alumni and other industry partners to create mutually beneficial collaborations." }
    ]
  },
  {
    id: "melcha-gayoma",
    order: 22,
    name: "Melcha Marie T. Gayoma",
    position: "Logistics Director",
    category: "operations",
    image: "assets/candidates/56.png",
    motto: "Excellence in the details. Elegance in the execution.",
    platformItems: [
      { title: "Logi- Link: The Integrated Notion Operations Dashboard" },
      { title: "Project L.E.A.P. (Logistics Execution and Adaptive Protocols" },
      { title: "DNA Approach: Operational continuity Framework" }
    ]
  },
  {
    id: "dominic-basco",
    order: 23,
    name: "Dominic G. Basco",
    position: "Sponsorship and Funding Officer",
    category: "partnerships",
    image: "assets/candidates/57.png",
    motto: "Take the risk or lose the chance, for a better future",
    platformItems: [
      { title: "Community Partnerships Intiative", description: "building mutually beneficial relations with local businesses around the campus. In exchange for funding and in-kind donations, the businesses will receive advertising space on event banners and social media platforms." },
      { title: "Transparent Grant and Funding System", description: "establish a simple, standardized process for members or sub-committees to request support for their specific projects or laboratory activities, to ensure that the funds raised are actually being utilized efficiently by those who need them." }
    ]
  },
  {
    id: "anthony-baigan",
    order: 24,
    name: "Anthony Luis S. Baigan",
    position: "Partnership Maintenance and Liaison Officer",
    category: "partnerships",
    image: "assets/candidates/58.png",
    motto: "A true act of goodwill, always sparks another.",
    platformItems: [
      {
        title: "Strengthening Community Outreach and Service",
        description: "A platform that can encourage student involvement in giving back to the community by supporting platforms that emphasize:",
        subItems: [
          "Establishing regular volunteering opportunities in local organizations.",
          "Coordinating fundraisers for charitable causes.",
          "Partnering with other schools or community groups to tackle shared concerns."
        ]
      },
      { title: "Student Wellness and Support Programs", description: "A commitment to constructive engagement advocates for professional counseling choices, peer support networks and mentoring programs, stress-reduction activities during exam periods, wellness spaces for quiet breaks, and mental health awareness campaigns to lessen stigma." },
      { title: "Building Professional Skills and Networks", description: "Student organization program that develops competencies and relationships that are useful far beyond school years, such as public speaking comfort for career presentations, project management experience that can be applied to professional contexts, negotiation skills that can be used throughout life." }
    ]
  },
  {
    id: "john-caneza",
    order: 25,
    name: "John Kale F. Cañeza",
    position: "OSP Creative Director",
    category: "partnerships",
    image: "assets/candidates/59.png",
    motto: "Creativity You Can Trust, Partnerships You Can See.",
    platformItems: [
      { title: "Maximized Partner Exposure", description: "Prioritizes clean layouts and high-visibility positioning for partner logos, ensuring sponsors get great visibility and real value from the publication." },
      { title: "Conversion-Driven Visual Campaigns", description: "Utilizes clear layouts and direct calls-to-action to easily guide students toward exclusive partner perks, food discounts, and upcoming speaker events." },
      { title: "Automated Partnership Templating", description: "Establishes a standardized library of pre-made graphics that slashes design workloads in half while maintaining a consistent, professional aesthetic." },
      { title: "The 5-Day Creative Lead Time Protocol", description: "Requires all graphic requests to be submitted at least 5 to 7 days before the posting date, eliminating last-minute rush jobs to protect student schedules and ensure high-quality outputs." }
    ]
  },
  {
    id: "andrea-loreto",
    order: 26,
    name: "Andrea Gail M. Loreto",
    position: "Gender and Development Representative",
    category: "gad",
    image: "assets/candidates/60.png",
    motto: "Shattering stigmas, breaking gender norms.",
    platformItems: [
      { title: "Women in Engineering: Establishing Gender Equality in a Male-Dominated Field", description: "Overcoming the stereotype that engineering is only for men through active women empowerment via seminars, workshops, and mentorships." },
      { title: "Breaking the Norms: Technical Skill-Bridging", description: "ECE is a vast field, with numerous areas of application coming from different people with different types of intellect. Through this, a showcase of differences can become a bridging opportunity for varying individuals." },
      { title: "Engineering an Inclusive Society: Empowering Gender and Culture Diversity", description: "Challenging engineering, especially ECE, students to develop inclusive ideas, technologies, innovation, or devices suitable for a diverse society (such as technologies adapting to multiple ethnicities' needs)." }
    ]
  }
];
