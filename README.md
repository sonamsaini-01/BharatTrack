Deployed site is working on -https://sonamsaini-01.github.io/BharatTrack/

BharatTrack** is a specialized digital platform designed to provide verified, sourced, and real-time information regarding Indian financial regulations, legal acts, and government data.
Its primary mission is to serve as a "Single Source of Truth" for citizens, businesses, and legal professionals.

Core Mission
Transparency: Making complex Indian laws and tax regulations accessible to everyone.
verification: Ensuring every piece of information provided is backed by an official government source or legal citation.
Zero Hallucination: Unlike general AI, BharatTrack is hardcoded to refuse providing information that cannot be verified against its internal database or official portals.

**Key Features**
- **BharatTrack AI Assistant**: A smart chat interface that provides direct answers to queries about GST, Income Tax, and Legal Sections, complete with clickable source citations.
- **Verified Search**: A dedicated search engine for the [MOCK_DATABASE](file:///d:/Trae/BharatTrack/src/lib/mockData.ts#L17) containing official Acts, Sections, and Notifications (e.g., CGST Act 2017, Income Tax Act 1961).
- **Real-Time Data Integration**: Directly connects to [data.gov.in](file:///d:/Trae/BharatTrack/src/services/dataGovApi.ts) to pull live statistics, such as commodity prices from Mandis across India.
- **Source Transparency**: Every response includes a list of "Sources" pointing to portals like `india.gov.in`, `gst.gov.in`, and `cbic.gov.in`.

**Technical Stack**
- **Frontend**: Built with [React](file:///d:/Trae/BharatTrack/package.json#L17) and [TypeScript](file:///d:/Trae/BharatTrack/package.json#L31) for a robust, type-safe user experience.
- **Styling**: Utilizes [Tailwind CSS](file:///d:/Trae/BharatTrack/package.json#L30) for a modern, responsive, and professional UI.
- **State Management**: Powered by [Zustand](file:///d:/Trae/BharatTrack/package.json#L21) for efficient data handling.
- **Backend/API**: Integrates with [Supabase](file:///d:/Trae/BharatTrack/package.json#L14) for authentication and the official **Data.gov.in API** for live government records.

**Target Audience**
- **Business Owners**: To stay updated on GST limits, filing rules, and e-invoicing mandates.
- **Legal Professionals**: For quick reference to specific sections of Indian Acts.
- **General Citizens**: To find reliable information without the risk of misinformation often found on social media or unverified blogs.
