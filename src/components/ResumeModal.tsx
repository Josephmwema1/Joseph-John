import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, ExternalLink, FileDown } from 'lucide-react';
import { PERSONAL_INFO, REFERENCES, EXPERIENCES, EDUCATION_LIST, AWARDS } from '../data/portfolioData';
import { generateAndDownloadCV } from '../utils/generatePdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = (e: React.MouseEvent) => {
    try {
      generateAndDownloadCV();
      e.preventDefault();
    } catch {
      // fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-sm flex justify-center p-2 sm:p-4 md:p-6 print:p-0 print:bg-white">
      <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden print:shadow-none print:rounded-none my-auto">
        
        {/* Modal Top Control Bar (Hidden when printing) */}
        <div className="sticky top-0 z-10 bg-slate-950 text-white px-6 py-3.5 flex items-center justify-between border-b border-slate-800 no-print">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm tracking-wide">Official Curriculum Vitae</span>
            <span className="text-xs text-blue-400 font-mono-code">• Joseph John</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Direct Download Button */}
            <a
              href="/Joseph_John_Curriculum_Vitae.pdf"
              download="Joseph_John_Curriculum_Vitae.pdf"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors shadow-md shadow-blue-600/30"
              title="Download PDF directly to your device"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* Browser Print Trigger */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
              title="Print or Save via Browser dialog"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors ml-1"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Content Document */}
        <div className="p-8 sm:p-12 space-y-8 font-sans print:p-0 print:space-y-6">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 font-display">
                  JOSEPH JOHN
                </h1>
                <p className="text-sm font-bold text-blue-700 mt-1 uppercase tracking-wider">
                  Business Development, Sales Operations & Key Account Management
                </p>
                <a
                  href={PERSONAL_INFO.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-700 hover:underline flex items-center gap-1 mt-1 font-mono-code"
                >
                  <Linkedin className="w-3 h-3" />
                  <span>linkedin.com/in/joseph-john-270155a6/</span>
                </a>
              </div>

              <div className="text-xs text-slate-700 sm:text-right space-y-1 font-mono-code">
                <div>B.O BOX 62-90119, Matuu, Kenya</div>
                <div>+254 702 581 235 / +254 748 104 697</div>
                <div className="font-semibold text-slate-900">{PERSONAL_INFO.email}</div>
                <div className="text-blue-800 font-bold">Nairobi, Kenya • Open to Remote, Hybrid & On-site roles</div>
              </div>
            </div>
          </div>

          {/* OBJECTIVE */}
          <div className="space-y-2">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1">
              OBJECTIVE
            </h2>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed text-justify">
              To be a results-driven Business Development, Sales Operations, Strategic and Project Management Professional, contributing over 8+ years of experience in client acquisition, strategic partnership development, key account management, project and operations management to a growth-focused organization, while leveraging expertise in lead generation, negotiation, CRM-driven pipeline management, and market analysis, performance and operations management to drive revenue growth and build long-term, high-value business relationships. Open to remote, hybrid and on-site opportunities.
            </p>
          </div>

          {/* EDUCATION */}
          <div className="space-y-3">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1">
              EDUCATION & CERTIFICATIONS
            </h2>
            <div className="space-y-2.5 text-xs text-slate-800">
              <div>
                <div className="flex justify-between font-bold text-slate-950">
                  <span>BS Actuarial Science | University of Kabianga</span>
                  <span className="font-mono-code">2013-2017</span>
                </div>
                <p className="text-slate-600 mt-0.5">
                  Courses included Financial and Actuarial Mathematics, Operations & Project Management, Economics, Database Systems, Data Analysis, Computer Programming, Mathematical Statistics, Probability Modeling & Numerical Analysis, Actuarial Theory of Pension Funds, Survival Models.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-950">
                  <span>Diplomas in Risk Management | Alison & Athena Global Education</span>
                  <span className="font-mono-code">2024-2025</span>
                </div>
                <p className="text-slate-600 mt-0.5">
                  Courses included Operational, Financial and Insurance Risk Management.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-950">
                  <span>Certificate in Software Engineering with AI | Power Learn Project</span>
                  <span className="font-mono-code">2025</span>
                </div>
                <p className="text-slate-600 mt-0.5">
                  The 16-week Software Development Programme covered Python, Database Management, Design and Programming with SQL, Startup Building for Developers, Data Analysis with Excel and Web Development.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-950">
                  <span>Certificates in Strategic, Operations and Project Management | CIQ</span>
                  <span className="font-mono-code">2025</span>
                </div>
                <p className="text-slate-600 mt-0.5">
                  The programmes covered Data Analysis and Visualization, Sales and Marketing Analytics, Operations, Strategic and Project Management.
                </p>
              </div>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="space-y-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1">
              PROFESSIONAL EXPERIENCE
            </h2>

            {/* Canvas Technologies 2026 */}
            <div className="space-y-1.5 print-break-inside-avoid">
              <div className="flex justify-between items-baseline font-bold text-slate-950 text-xs sm:text-sm">
                <span>Sales & Customer Service Lead | Canvas Technologies & Computers</span>
                <span className="text-xs font-mono-code font-normal text-blue-700">June 2026 - Present</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 leading-normal">
                <li>Lead the sales and customer service function for corporate and retail ICT clients, setting priorities and monitoring monthly and quarterly targets.</li>
                <li>Coach the team on consultative selling, product knowledge and service standards to drive conversions.</li>
                <li>Manage B2B and institutional relationships and grow them through upselling and cross-selling of ICT products and services.</li>
                <li>Oversee stock levels, order fulfilment, POS operations and M-PESA reconciliation for accurate financial bookkeeping.</li>
              </ul>
            </div>

            {/* Actuarial Services East Africa 2024-2026 */}
            <div className="space-y-1.5 print-break-inside-avoid">
              <div className="flex justify-between items-baseline font-bold text-slate-950 text-xs sm:text-sm">
                <span>Business Development Associate | ACTSERV Consulting Limited (Actuarial Services East Africa)</span>
                <span className="text-xs font-mono-code font-normal text-blue-700">2024 - 2026</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 leading-normal">
                <li>Sourced, nurtured, and converted leads through tendering, email marketing, cold calling, and networking events, increasing client acquisition opportunities.</li>
                <li>Identified, evaluated and secured high-impacting partnerships with channel partners such as insurance companies, regulators (IRA & RBA), wealth and investment funds, and pension schemes aligned with business expansion goals.</li>
                <li>Developed and maintained a robust sales pipeline in the CRM system, ensuring accurate tracking of leads, timely follow-ups, and improved prospect conversion rates.</li>
                <li>Managed key corporate and institutional client accounts, providing pension, investment, and insurance consultancy services, software solutions, and training.</li>
                <li>Prepared proposals, quotations, product demos, presentations, and persuasive pitches; responded to RFPs/RFIs and tenders, consistently meeting revenue targets.</li>
                <li>Conducted market research and competitor analysis to inform product development, pricing strategies, and marketing initiatives.</li>
                <li>Negotiated and closed deals, and prepared contracts, NDAs, and SLAs for IDD, PRMF, ActVal, and GenVal software and consulting solutions.</li>
              </ul>
            </div>

            {/* Canvas Technologies 2020-2023 */}
            <div className="space-y-1.5 print-break-inside-avoid">
              <div className="flex justify-between items-baseline font-bold text-slate-950 text-xs sm:text-sm">
                <span>Sales & Customer Service Lead | Canvas Technologies & Computers</span>
                <span className="text-xs font-mono-code font-normal text-blue-700">2020 - 2023</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 leading-normal">
                <li>Led a high-performing sales team, driving revenue growth through effective sales strategies, performance coaching, and achievement of monthly and quarterly targets.</li>
                <li>Developed and managed B2B and institutional client relationships, expanding key accounts through upselling and cross-selling ICT products and networking solutions.</li>
                <li>Managed the full sales cycle: lead generation, client needs assessment, product demonstrations, quotation preparation, proposal development, negotiation, and deal closure.</li>
                <li>Sold a wide range of ICT solutions, including laptops, desktops, monitors, accessories, software, and Wi-Fi installation services to corporate and retail clients.</li>
                <li>Oversaw inventory and supply coordination, ensuring optimal stock levels, efficient procurement planning, and timely order fulfilment.</li>
                <li>Managed financial transactions and reconciliation, including POS operations, cash management, and MPESA bookkeeping.</li>
              </ul>
            </div>

            {/* Royal Prime Investment 2017-2019 */}
            <div className="space-y-1.5 print-break-inside-avoid">
              <div className="flex justify-between items-baseline font-bold text-slate-950 text-xs sm:text-sm">
                <span>Sales and Business Operations Manager | Royal Prime Investment (Hotel, Hospitality & Real Estate)</span>
                <span className="text-xs font-mono-code font-normal text-blue-700">2017 - 2019</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 leading-normal">
                <li>Directed sales and operational performance across hotel and real estate operations, consistently achieving revenue targets and improving business performance.</li>
                <li>Led and supervised a team of 9 employees, setting KPIs, tracking performance metrics, and coaching staff to improve productivity and service delivery.</li>
                <li>Managed corporate and institutional client accounts, including chamas, SACCOs, and banks, delivering conferencing and facility management services while ensuring SLA compliance.</li>
                <li>Oversaw budget planning, financial management, and cost control, improving profitability through efficient resource allocation.</li>
                <li>Managed business licensing and regulatory compliance, ensuring required operating permits and compliance documents were maintained.</li>
              </ul>
            </div>
          </div>

          {/* SKILLS */}
          <div className="space-y-2 print-break-inside-avoid">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1">
              SKILLS & CORE COMPETENCIES
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1 text-xs text-slate-800">
              <div>• Outreach Marketing & Lead Gen</div>
              <div>• Consultative Selling</div>
              <div>• Key Account Management</div>
              <div>• Upselling & Cross-selling</div>
              <div>• Pitching & Software Demos</div>
              <div>• Bid & Tender Management (RFPs)</div>
              <div>• Contracting & Negotiations</div>
              <div>• CRM & ERP (Salesforce & Zoho)</div>
              <div>• Operations & Process Improvement</div>
              <div>• KPI Tracking & Analysis</div>
              <div>• Project Management (Trello, Jira)</div>
              <div>• Data Analysis (Excel, Power BI, SQL)</div>
              <div>• Cross-functional Leadership (10 Led)</div>
              <div>• Risk Management & Compliance</div>
              <div>• Strategic & Critical Thinking</div>
            </div>
          </div>

          {/* AWARDS */}
          <div className="space-y-2 print-break-inside-avoid">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1">
              LEADERSHIP AWARDS & ACHIEVEMENTS
            </h2>
            <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700">
              <li><strong className="text-slate-900">Leadership Award – Chairmanship</strong>, Actuarial Science Students Association, University of Kabianga | Nov 2016</li>
              <li><strong className="text-slate-900">Participant, Actuarial Bootcamp (4th & 5th Annual Editions)</strong>, Insurance Regulatory Authority (Kenya) & TASSMU | May 2016</li>
              <li><strong className="text-slate-900">Top Performer, National Mathematics Contest</strong>, BIC, HACCO Brands & Mang'u High School | June 2012</li>
            </ul>
          </div>

          {/* REFERENCES */}
          <div className="space-y-2 print-break-inside-avoid">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1">
              PROFESSIONAL REFERENCES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-800">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div className="font-bold text-slate-950">Joan Ngao</div>
                <div className="text-blue-700 font-medium">Commercial Manager, Kuunda</div>
                <div className="font-mono-code text-[11px] text-slate-600 mt-1">Phone: (+254) 720 860 187</div>
                <div className="font-mono-code text-[11px] text-slate-600">Email: joan.nandaa@gmail.com</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div className="font-bold text-slate-950">Purity Mwihaki</div>
                <div className="text-blue-700 font-medium">Business Development Consultant, Actuarial Services East Africa</div>
                <div className="font-mono-code text-[11px] text-slate-600 mt-1">Phone: (+254) 746 012 496</div>
                <div className="font-mono-code text-[11px] text-slate-600">Email: mwihakipurity09@gmail.com</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div className="font-bold text-slate-950">Ernest Makau</div>
                <div className="text-blue-700 font-medium">Founder & Manager, Royal Prime Investment</div>
                <div className="font-mono-code text-[11px] text-slate-600 mt-1">Tel: +254 702 056 140</div>
                <div className="font-mono-code text-[11px] text-slate-600">Email: emkyembwa@gmail.com</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div className="font-bold text-slate-950">Joseph Nduva Kamwele</div>
                <div className="text-blue-700 font-medium">Founder & Manager, Canvas Technologies & Computers</div>
                <div className="font-mono-code text-[11px] text-slate-600 mt-1">Tel: +254 726 024 845</div>
                <div className="font-mono-code text-[11px] text-slate-600">Email: canvascomputers254@gmail.com</div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer print bar */}
        <div className="bg-slate-100 p-4 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-600 no-print">
          <span className="font-medium text-slate-700">Official CV representation of Joseph John • Open to Remote, Hybrid and On-site roles</span>
          <div className="flex items-center gap-2">
            <a
              href="/Joseph_John_Curriculum_Vitae.pdf"
              download="Joseph_John_Curriculum_Vitae.pdf"
              onClick={handleDownload}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF File</span>
            </a>
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
