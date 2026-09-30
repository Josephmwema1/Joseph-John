import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

const doc = new jsPDF({
  unit: 'pt',
  format: 'a4',
});

const pageWidth = doc.internal.pageSize.getWidth();
const margin = 40;
const contentWidth = pageWidth - margin * 2;
let y = 45;

// Header Bar
doc.setFillColor(37, 99, 235); // blue-600
doc.rect(margin, y, contentWidth, 3, 'F');
y += 18;

// Name & Title
doc.setFont('helvetica', 'bold');
doc.setFontSize(22);
doc.setTextColor(15, 23, 42);
doc.text('JOSEPH JOHN', margin, y);
y += 16;

doc.setFontSize(10);
doc.setFont('helvetica', 'bold');
doc.setTextColor(37, 99, 235);
doc.text('BUSINESS DEVELOPMENT, SALES OPERATIONS & KEY ACCOUNT MANAGEMENT', margin, y);
y += 14;

// Contact Info
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(71, 85, 105);
doc.text('B.O BOX 62-90119, Matuu, Kenya  |  +254 702 581 235 / +254 748 104 697', margin, y);
y += 12;
doc.text('Email: Josephmwema1@gmail.com  |  LinkedIn: linkedin.com/in/joseph-john-270155a6/', margin, y);
y += 12;
doc.setFont('helvetica', 'bold');
doc.setTextColor(29, 78, 216);
doc.text('Location: Nairobi, Kenya  |  Status: Open to Remote, Hybrid and On-site roles', margin, y);
y += 18;

function addSectionHeader(title: string) {
  if (y > 750) {
    doc.addPage();
    y = 45;
  }
  doc.setFillColor(239, 246, 255);
  doc.rect(margin, y - 10, contentWidth, 16, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(30, 64, 175);
  doc.text(title.toUpperCase(), margin + 6, y + 2);
  y += 16;
}

// OBJECTIVE
addSectionHeader('Professional Objective');
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(30, 41, 59);
const objectiveLines = doc.splitTextToSize(
  'Results-driven Business Development, Sales Operations, Strategic and Project Management Professional with 8+ years of experience in client acquisition, strategic partnership development, key account management, and operations across ICT, Retail, FMCG, Professional Consultancy, Hotel & Hospitality, and Real Estate. Expert in lead generation, CRM-driven pipeline acceleration, and high-value tender bidding. Open to remote, hybrid and on-site opportunities.',
  contentWidth
);
doc.text(objectiveLines, margin, y);
y += objectiveLines.length * 11 + 8;

// CORE SKILLS
addSectionHeader('Core Competencies & Capabilities');
doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(30, 41, 59);
doc.text('• Business Development & Consultative Selling   • Key Account Management & Retention   • Lead Gen & Outreach', margin, y); y += 11;
doc.text('• Bid & Tender Management (RFPs/RFIs)          • Pitching & Product Demos (ActVal, GenVal)  • Negotiation & Contracting', margin, y); y += 11;
doc.text('• CRM Systems (Salesforce & Zoho)              • Data Analytics (Excel, Power BI, SQL)    • Cross-Functional Leadership (10 Led)', margin, y); y += 11;
doc.text('• Financial Bookkeeping (POS, M-PESA)           • Risk Management & Compliance             • Strategic & Critical Thinking', margin, y); y += 14;

// EXPERIENCE
addSectionHeader('Professional Experience');

// Role 1
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(15, 23, 42);
doc.text('Sales and Customer Service Lead  |  Canvas Technologies & Computers', margin, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(37, 99, 235);
doc.text('June 2026 – Present', pageWidth - margin - 80, y);
y += 12;
doc.setFontSize(8);
doc.setTextColor(51, 65, 85);
[
  '• Lead sales and customer care operations for corporate and retail ICT clients, setting quotas and monitoring targets.',
  '• Coach sales team on consultative selling, technical product knowledge, and post-sale support standards.',
  '• Cultivate B2B and institutional client relationships, generating incremental revenue via upselling and cross-selling.',
  '• Oversee inventory levels, order fulfillment, POS operations, and daily M-PESA reconciliations.'
].forEach(line => {
  doc.text(line, margin, y);
  y += 11;
});
y += 4;

// Role 2
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(15, 23, 42);
doc.text('Business Development & Account Executive  |  Actuarial Services East Africa (ACTSERV)', margin, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(37, 99, 235);
doc.text('2024 – June 2026', pageWidth - margin - 80, y);
y += 12;
doc.setFontSize(8);
doc.setTextColor(51, 65, 85);
[
  '• Sourced, nurtured, and converted institutional leads through tendering, email marketing, cold calling, and networking.',
  '• Won executive training accounts for investment teams and boards of trustees covering governance, IFRS 17, IAS 19, pensions, and risk.',
  '• Secured high-impact partnerships with regulators (IRA & RBA), insurance firms, wealth funds, and pension schemes.',
  '• Managed key accounts across pension, insurance, and investment software solutions (ActVal, GenVal, IDD, and PRMF).',
  '• Prepared competitive proposals, quotations, product demos, pitches, and responses to RFPs/RFIs; met all revenue benchmarks.',
  '• Negotiated commercial terms, contracts, NDAs, and SLAs; maintained rigorous CRM pipeline hygiene.'
].forEach(line => {
  doc.text(line, margin, y);
  y += 11;
});
y += 4;

// Role 3
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(15, 23, 42);
doc.text('Sales and Customer Service Lead  |  Canvas Technologies & Computers', margin, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(37, 99, 235);
doc.text('2020 – 2024', pageWidth - margin - 80, y);
y += 12;
doc.setFontSize(8);
doc.setTextColor(51, 65, 85);
[
  '• Spearheaded full sales cycles (lead gen, needs assessment, hardware demos, quotation, negotiation, and closing).',
  '• Expanded institutional key accounts via upselling of laptops, desktops, accessories, software, and Wi-Fi installations.',
  '• Coordinated inventory procurement, customer care feedback loops, POS operations, and cash reconciliation.'
].forEach(line => {
  doc.text(line, margin, y);
  y += 11;
});
y += 4;

// Role 4
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(15, 23, 42);
doc.text('Sales and Business Operations Manager  |  Royal Prime Investment (Hotel & Real Estate)', margin, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(37, 99, 235);
doc.text('2017 – 2019', pageWidth - margin - 80, y);
y += 12;
doc.setFontSize(8);
doc.setTextColor(51, 65, 85);
[
  '• Directed commercial performance across hotel and real estate operations, meeting quarterly revenue quotas.',
  '• Led, mentored, and set KPIs for a team of 9 operations and client service employees.',
  '• Managed corporate institutional accounts (banks, SACCOs, chamas), delivering conferencing and facility operations to SLA.',
  '• Controlled operating budgets, resource allocation, event planning, and maintained regulatory licensing.'
].forEach(line => {
  doc.text(line, margin, y);
  y += 11;
});
y += 8;

// EDUCATION
addSectionHeader('Education & Certifications');
doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.setTextColor(15, 23, 42);
doc.text('BS Actuarial Science  |  University of Kabianga (2013–2017)', margin, y);
y += 11;
doc.setFont('helvetica', 'normal');
doc.setFontSize(7.8);
doc.setTextColor(71, 85, 105);
doc.text('Courses: Financial Mathematics, Operations & Project Management, Data Analysis, Statistics, Probability, Database Systems', margin, y);
y += 12;

doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.setTextColor(15, 23, 42);
doc.text('Diplomas in Risk Management (Operational, Financial, Insurance)  |  Alison & Athena (2024–2025)', margin, y);
y += 12;

doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.setTextColor(15, 23, 42);
doc.text('Certificate in Software Engineering with AI  |  Power Learn Project (2025)', margin, y);
y += 12;

doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.setTextColor(15, 23, 42);
doc.text('Certificates in Strategic, Operations and Project Management  |  CIQ (2025)', margin, y);
y += 14;

// REFERENCES
addSectionHeader('Professional References');
doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(30, 41, 59);
doc.text('• Joan Ngao – Commercial Manager, Kuunda | Phone: (+254) 720 860 187 | Email: joan.nandaa@gmail.com', margin, y);
y += 11;
doc.text('• Purity Mwihaki – Business Development Consultant, ACTSERV | Phone: (+254) 746 012 496 | Email: mwihakipurity09@gmail.com', margin, y);
y += 11;
doc.text('• Ernest Makau – Founder & Manager, Royal Prime Investment | Tel: +254 702 056 140 | Email: emkyembwa@gmail.com', margin, y);
y += 11;
doc.text('• Joseph Nduva Kamwele – Founder & Manager, Canvas Technologies | Tel: +254 726 024 845 | Email: canvascomputers254@gmail.com', margin, y);

const publicDir = path.resolve(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
fs.writeFileSync(path.join(publicDir, 'Joseph_John_Curriculum_Vitae.pdf'), pdfBuffer);
fs.writeFileSync(path.join(publicDir, 'Joseph_John_CV.pdf'), pdfBuffer);
console.log('PDF generated successfully in /public');
