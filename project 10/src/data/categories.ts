import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'vision',
    title: 'Vision and Strategy',
    icon: 'Target',
    questions: [
      {
        id: 'vision_1',
        text: 'Does your organization have a national AI strategy/policy/plan?',
        tooltip: 'Assess the existence and maturity of your AI strategy',
        examples: {
          1: 'No AI strategy exists',
          2: 'Initial discussions about AI strategy',
          3: 'Draft strategy in development',
          4: 'Strategy exists but not fully implemented',
          5: 'Comprehensive strategy fully implemented'
        }
      },
      {
        id: 'vision_2',
        text: 'Has your organization set out a budget for AI development or its strategy/policy/plan?',
        tooltip: 'Evaluate financial commitment to AI initiatives',
        examples: {
          1: 'No budget allocation',
          2: 'Basic budget planning',
          3: 'Partial budget allocated',
          4: 'Significant budget committed',
          5: 'Comprehensive budget with long-term planning'
        }
      },
      {
        id: 'vision_3',
        text: 'Does your organization have an implementing body for its strategy/policy?',
        tooltip: 'Assess governance structure for AI implementation',
        examples: {
          1: 'No implementing body',
          2: 'Informal oversight',
          3: 'Designated team without full authority',
          4: 'Formal body with partial authority',
          5: 'Fully empowered implementing body'
        }
      },
      {
        id: 'vision_4',
        text: 'Does your strategy/policy/plan identify specific areas or use cases to drive AI adoption?',
        tooltip: 'Evaluate strategic focus and use case prioritization',
        examples: {
          1: 'No specific areas identified',
          2: 'Basic use cases under discussion',
          3: 'Some areas identified',
          4: 'Multiple priority areas defined',
          5: 'Comprehensive use case roadmap'
        }
      }
    ]
  },
  {
    id: 'ethics',
    title: 'Ethics and Regulation',
    icon: 'Scale',
    questions: [
      {
        id: 'ethics_1',
        text: 'Does your organization embed human rights and rule-of-law principles into its national strategy/policy/plan?',
        tooltip: 'Assess ethical framework integration',
        examples: {
          1: 'No ethical principles',
          2: 'Basic awareness of ethics',
          3: 'Partial integration',
          4: 'Strong ethical framework',
          5: 'Comprehensive rights-based approach'
        }
      },
      {
        id: 'ethics_2',
        text: 'Are there government-developed ethical guidelines and/or self-assessment tools for ethical, safe, and secure AI?',
        tooltip: 'Evaluate ethical guidelines and tools',
        examples: {
          1: 'No guidelines exist',
          2: 'Basic principles outlined',
          3: 'Guidelines in development',
          4: 'Guidelines implemented',
          5: 'Comprehensive framework with tools'
        }
      },
      {
        id: 'ethics_3',
        text: 'Is there a government agency with regulatory oversight or guidance on AI procurement?',
        tooltip: 'Assess regulatory oversight',
        examples: {
          1: 'No oversight',
          2: 'Limited guidance',
          3: 'Partial oversight',
          4: 'Established oversight',
          5: 'Comprehensive regulatory framework'
        }
      },
      {
        id: 'ethics_4',
        text: 'Is there diversity and inclusion assessment related to AI deployment and governance?',
        tooltip: 'Evaluate diversity in AI governance',
        examples: {
          1: 'No diversity consideration',
          2: 'Basic awareness',
          3: 'Some initiatives',
          4: 'Strong diversity focus',
          5: 'Comprehensive inclusion framework'
        }
      }
    ]
  },
  {
    id: 'human_capital',
    title: 'Human Capital',
    icon: 'Users',
    questions: [
      {
        id: 'human_1',
        text: 'Are there people across government agencies with the capability to implement AI solutions?',
        tooltip: 'Assess technical capacity',
        examples: {
          1: 'No AI capabilities',
          2: 'Limited expertise',
          3: 'Growing capabilities',
          4: 'Strong expertise',
          5: 'Comprehensive capabilities'
        }
      },
      {
        id: 'human_2',
        text: 'Are there public programs that train workers, teachers, students with AI-related skills?',
        tooltip: 'Evaluate AI training programs',
        examples: {
          1: 'No training programs',
          2: 'Basic training',
          3: 'Moderate programs',
          4: 'Comprehensive training',
          5: 'Advanced education ecosystem'
        }
      },
      {
        id: 'human_3',
        text: 'Does the government have robust visa processes to attract and retain AI talent?',
        tooltip: 'Assess talent attraction strategies',
        examples: {
          1: 'No specific processes',
          2: 'Basic visa options',
          3: 'Some incentives',
          4: 'Strong talent programs',
          5: 'Comprehensive talent strategy'
        }
      }
    ]
  },
  {
    id: 'infrastructure',
    title: 'Digital and Data Infrastructure',
    icon: 'Database',
    questions: [
      {
        id: 'infra_1',
        text: 'Does your organization collect data on digital-inclusion aspects?',
        tooltip: 'Assess digital inclusion monitoring',
        examples: {
          1: 'No data collection',
          2: 'Basic metrics',
          3: 'Regular monitoring',
          4: 'Comprehensive tracking',
          5: 'Advanced analytics'
        }
      },
      {
        id: 'infra_2',
        text: 'Are more than 80% of public records digitized?',
        tooltip: 'Evaluate digital transformation progress',
        examples: {
          1: '<20% digitized',
          2: '20-40% digitized',
          3: '40-60% digitized',
          4: '60-80% digitized',
          5: '>80% digitized'
        }
      },
      {
        id: 'infra_3',
        text: 'Are data collected by the public sector representative of society?',
        tooltip: 'Assess data representativeness',
        examples: {
          1: 'Not representative',
          2: 'Limited representation',
          3: 'Partially representative',
          4: 'Mostly representative',
          5: 'Fully representative'
        }
      },
      {
        id: 'infra_4',
        text: 'Does the government release timely and reliable data sets?',
        tooltip: 'Evaluate data availability',
        examples: {
          1: 'No public data',
          2: 'Limited releases',
          3: 'Regular releases',
          4: 'Comprehensive data',
          5: 'Real-time data access'
        }
      },
      {
        id: 'infra_5',
        text: 'Does the government offer responsible data-sharing guidelines?',
        tooltip: 'Assess data sharing framework',
        examples: {
          1: 'No guidelines',
          2: 'Basic guidelines',
          3: 'Structured framework',
          4: 'Comprehensive policy',
          5: 'Advanced sharing ecosystem'
        }
      }
    ]
  },
  {
    id: 'computing',
    title: 'Computing Resources',
    icon: 'Server',
    questions: [
      {
        id: 'compute_1',
        text: 'Do government agencies have access to analytics-based computing capability?',
        tooltip: 'Assess computing infrastructure',
        examples: {
          1: 'No analytics capability',
          2: 'Basic computing',
          3: 'Moderate capability',
          4: 'Advanced analytics',
          5: 'State-of-the-art computing'
        }
      },
      {
        id: 'compute_2',
        text: 'Do startups and students have affordable access to high-performance computing?',
        tooltip: 'Evaluate computing accessibility',
        examples: {
          1: 'No access',
          2: 'Limited access',
          3: 'Moderate access',
          4: 'Good access',
          5: 'Universal access'
        }
      }
    ]
  },
  {
    id: 'data_governance',
    title: 'Data Governance',
    icon: 'Shield',
    questions: [
      {
        id: 'gov_1',
        text: 'Does your organization have a data-protection law with robust security policies?',
        tooltip: 'Assess data protection framework',
        examples: {
          1: 'No protection law',
          2: 'Basic policies',
          3: 'Developing framework',
          4: 'Strong protection',
          5: 'Comprehensive framework'
        }
      },
      {
        id: 'gov_2',
        text: 'Are data accessible and terms of use clear for both private and public sectors?',
        tooltip: 'Evaluate data accessibility',
        examples: {
          1: 'No clear terms',
          2: 'Limited clarity',
          3: 'Moderate accessibility',
          4: 'Clear guidelines',
          5: 'Full transparency'
        }
      },
      {
        id: 'gov_3',
        text: 'Is the data-protection agency empowered to enforce data policies?',
        tooltip: 'Assess enforcement capability',
        examples: {
          1: 'No enforcement',
          2: 'Limited authority',
          3: 'Moderate power',
          4: 'Strong authority',
          5: 'Full enforcement power'
        }
      }
    ]
  },
  {
    id: 'tech_sector',
    title: 'Technology Sector',
    icon: 'Laptop',
    questions: [
      {
        id: 'tech_1',
        text: 'Does the business environment support entrepreneurship and R&D?',
        tooltip: 'Assess business environment',
        examples: {
          1: 'No support',
          2: 'Limited support',
          3: 'Growing support',
          4: 'Strong support',
          5: 'Comprehensive ecosystem'
        }
      },
      {
        id: 'tech_2',
        text: 'Are there at least five AI companies in your ecosystem?',
        tooltip: 'Evaluate AI ecosystem maturity',
        examples: {
          1: 'No AI companies',
          2: '1-2 companies',
          3: '3-4 companies',
          4: '5-10 companies',
          5: '>10 companies'
        }
      },
      {
        id: 'tech_3',
        text: 'Are there policies to incentivize AI company funding?',
        tooltip: 'Assess funding incentives',
        examples: {
          1: 'No incentives',
          2: 'Limited incentives',
          3: 'Some incentives',
          4: 'Strong incentives',
          5: 'Comprehensive support'
        }
      },
      {
        id: 'tech_4',
        text: 'Are universities participating in AI research with public-private partnerships?',
        tooltip: 'Evaluate research collaboration',
        examples: {
          1: 'No participation',
          2: 'Limited research',
          3: 'Growing participation',
          4: 'Active research',
          5: 'Leading research hub'
        }
      }
    ]
  }
];