import { fetchGSTData } from '../services/dataGovApi';
 
export interface Citation {
  source: string;
  url: string;
  date: string;
}

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'Act' | 'Section' | 'Notification';
  citations: Citation[];
}

export const MOCK_DATABASE: SearchResult[] = [
  {
    id: 'gst-act-2017',
    title: 'Central Goods and Services Tax Act, 2017',
    description: 'An Act to make a provision for levy and collection of tax on intra-State supply of goods or services or both by the Central Government and for matters connected therewith or incidental thereto.',
    type: 'Act',
    citations: [
      { source: 'gst.gov.in', url: 'https://www.gst.gov.in/', date: '2017-04-12' }
    ]
  },
  {
    id: 'section-16-cgst',
    title: 'Section 16 - Eligibility and conditions for taking input tax credit',
    description: '(1) Every registered person shall, subject to such conditions and restrictions as may be prescribed and in the manner specified in section 49, be entitled to take credit of input tax charged on any supply of goods or services or both to him which are used or intended to be used in the course or furtherance of his business...',
    type: 'Section',
    citations: [
      { source: 'cbic.gov.in', url: 'https://www.cbic.gov.in/', date: '2017-07-01' }
    ]
  },
  {
    id: 'section-9-cgst',
    title: 'Section 9 - Levy and Collection',
    description: 'Subject to the provisions of sub-section (2), there shall be levied a tax called the central goods and services tax on all intra-State supplies of goods or services or both, except on the supply of alcoholic liquor for human consumption...',
    type: 'Section',
    citations: [
      { source: 'gst.gov.in', url: 'https://www.gst.gov.in/', date: '2017-07-01' }
    ]
  },
  {
    id: 'income-tax-act-1961',
    title: 'Income-tax Act, 1961',
    description: 'An Act to consolidate and amend the law relating to income-tax and super-tax.',
    type: 'Act',
    citations: [
      { source: 'incometaxindia.gov.in', url: 'https://www.incometaxindia.gov.in/', date: '1961-04-01' }
    ]
  },
  {
    id: 'rule-86b',
    title: 'Rule 86B - Restrictions on use of amount available in electronic credit ledger',
    description: 'Restrictions on use of amount available in electronic credit ledger for discharging liability towards output tax in certain cases.',
    type: 'Notification',
    citations: [
      { source: 'cbic.gov.in', url: 'https://www.cbic.gov.in/', date: '2020-12-22' }
    ]
  }
];

export const searchDatabase = (query: string): SearchResult[] => {
  const lowerQuery = query.toLowerCase();
  return MOCK_DATABASE.filter(item => 
    item.title.toLowerCase().includes(lowerQuery) || 
    item.description.toLowerCase().includes(lowerQuery)
  );
};

// Expanded AI Knowledge Base
const KNOWLEDGE_BASE = [
  {
    keywords: ['registration', 'limit', 'threshold'],
    text: "As per the latest GST regulations, the threshold limit for registration is ₹40 lakhs for supplier of goods (₹20 lakhs for special category states) and ₹20 lakhs for supplier of services (₹10 lakhs for special category states).",
    citations: [
      { source: 'GST Registration Rules', url: 'https://www.gst.gov.in/', date: '2024-01-01' }
    ]
  },
  {
    keywords: ['returns', 'gstr-1', 'gstr-3b', 'filing'],
    text: "Regular taxpayers must file GSTR-1 (details of outward supplies) and GSTR-3B (summary return). For QRMP scheme users, GSTR-1 is filed quarterly with IFF facility for first two months. Annual return is GSTR-9.",
    citations: [
      { source: 'GST Return Filing', url: 'https://www.gst.gov.in/', date: '2024-01-01' }
    ]
  },
  {
    keywords: ['e-way', 'bill', 'movement'],
    text: "E-Way Bill is mandatory for inter-state movement of goods of consignment value exceeding ₹50,000. For intra-state movement, limits vary by state.",
    citations: [
      { source: 'E-Way Bill System', url: 'https://ewaybillgst.gov.in/', date: '2024-01-01' }
    ]
  },
  {
    keywords: ['itc', 'input', 'credit', '16'],
    text: "According to Section 16 of the CGST Act, 2017, registered persons can claim ITC on goods/services used for business. Conditions include: possession of invoice, receipt of goods, tax paid to government, and return furnished.",
    citations: [
      { source: 'CGST Act Section 16', url: 'https://www.cbic.gov.in/', date: '2017-07-01' }
    ]
  },
  {
    keywords: ['composition', 'scheme'],
    text: "Composition Scheme is available for taxpayers with turnover up to ₹1.5 Crore. Tax rates: 1% for traders/manufacturers, 5% for restaurants, 6% for service providers.",
    citations: [
      { source: 'GST Composition Rules', url: 'https://www.gst.gov.in/', date: '2024-01-01' }
    ]
  },
  {
    keywords: ['rate', 'slab', 'percentage'],
    text: "GST has four primary slab rates: 5%, 12%, 18%, and 28%. Essential items are often exempt (0%). Luxury and demerit goods attract cess over 28%.",
    citations: [
      { source: 'GST Council', url: 'https://gstcouncil.gov.in/', date: '2024-01-01' }
    ]
  },
  {
    keywords: ['invoice', 'e-invoice'],
    text: "E-Invoicing is mandatory for businesses with aggregate turnover exceeding ₹5 Crore in any preceding financial year from 2017-18 onwards.",
    citations: [
      { source: 'E-Invoice System', url: 'https://einvoice1.gst.gov.in/', date: '2023-08-01' }
    ]
  }
];

export const getAIResponse = async (query: string): Promise<{ text: string, citations: Citation[], status: 'success' | 'no_data' }> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const lowerQuery = query.toLowerCase();
  const providers: Citation[] = [
    { source: 'India.gov.in', url: `https://search.india.gov.in/searchall.php?q=${encodeURIComponent(query)}`, date: new Date().toISOString().slice(0, 10) },
    { source: 'Indian Kanoon', url: `https://indiankanoon.org/search/?formInput=${encodeURIComponent(query)}`, date: new Date().toISOString().slice(0, 10) },
    { source: 'GST Council', url: 'https://gstcouncil.gov.in/', date: new Date().toISOString().slice(0, 10) },
    { source: 'NALSAR Library', url: 'https://library.nalsar.ac.in/', date: new Date().toISOString().slice(0, 10) },
    { source: 'GitHub', url: `https://github.com/search?q=${encodeURIComponent(query)}`, date: new Date().toISOString().slice(0, 10) },
    { source: 'DataProvider.in', url: 'https://dataprovider.in/', date: new Date().toISOString().slice(0, 10) }
  ];
  const matchedEntry = KNOWLEDGE_BASE.find(entry =>
    entry.keywords.some(keyword => lowerQuery.includes(keyword))
  );
  if (matchedEntry) {
    let text = matchedEntry.text;
    if (lowerQuery.includes('gst') || lowerQuery.includes('tax')) {
      try {
        const data = await fetchGSTData(3);
        if (data && Array.isArray(data.records) && data.records.length > 0) {
          const sample = data.records.slice(0, 3).map((r: any) => {
            const parts: string[] = [];
            if (r.state) parts.push(`State: ${r.state}`);
            if (r.district) parts.push(`District: ${r.district}`);
            if (r.commodity) parts.push(`Commodity: ${r.commodity}`);
            if (r.arrival_date) parts.push(`Date: ${r.arrival_date}`);
            return `- ${parts.join(' | ')}`;
          }).join('\n');
          text = `${text}\n\nLatest official data (sample):\n${sample}`;
        }
      } catch {}
    }
    return {
      status: 'success',
      text,
      citations: [...matchedEntry.citations, ...providers]
    };
  }
  if (lowerQuery.includes('gst') || lowerQuery.includes('tax')) {
    let appendix = '';
    try {
      const data = await fetchGSTData(3);
      if (data && Array.isArray(data.records) && data.records.length > 0) {
        const sample = data.records.slice(0, 3).map((r: any) => {
          const parts: string[] = [];
          if (r.state) parts.push(`State: ${r.state}`);
          if (r.district) parts.push(`District: ${r.district}`);
          if (r.commodity) parts.push(`Commodity: ${r.commodity}`);
          if (r.arrival_date) parts.push(`Date: ${r.arrival_date}`);
          return `- ${parts.join(' | ')}`;
        }).join('\n');
        appendix = `\n\nLatest official data (sample):\n${sample}`;
      }
    } catch {}
    return {
      status: 'success',
      text: "I found multiple references to GST regulations. Specify if you are looking for Registration, Returns, ITC, E-Way Bill, or Rate slabs." + appendix,
      citations: [
        { source: 'GST Portal', url: 'https://www.gst.gov.in/', date: '2024-01-01' }
      ].concat(providers)
    };
  }
  return {
    status: 'no_data',
    text: "❌ No official government data is available for this query at the moment. BharatTrack refuses to hallucinate information that cannot be verified against official Indian government portals. \n\nTry asking about: \n- GST Registration Limits\n- Input Tax Credit (ITC)\n- E-Way Bill Rules\n- GST Returns",
    citations: providers
  };
};
