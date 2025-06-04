import { v4 as uuidv4 } from 'uuid';

// Lawyers
export const lawyers = [
  {
    id: uuidv4(),
    name: 'Sarah Johnson',
    position: 'Senior Partner',
    email: 'sarah.johnson@legalcrm.com',
    phone: '(555) 123-4567',
    specialty: 'Corporate Law',
    avatar: 'https://images.pexels.com/photos/5439147/pexels-photo-5439147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    activeCases: 12
  },
  {
    id: uuidv4(),
    name: 'Michael Chen',
    position: 'Partner',
    email: 'michael.chen@legalcrm.com',
    phone: '(555) 234-5678',
    specialty: 'Intellectual Property',
    avatar: 'https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    activeCases: 8
  },
  {
    id: uuidv4(),
    name: 'Jessica Rodriguez',
    position: 'Associate',
    email: 'jessica.rodriguez@legalcrm.com',
    phone: '(555) 345-6789',
    specialty: 'Family Law',
    avatar: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    activeCases: 15
  },
  {
    id: uuidv4(),
    name: 'David Wilson',
    position: 'Associate',
    email: 'david.wilson@legalcrm.com',
    phone: '(555) 456-7890',
    specialty: 'Criminal Law',
    avatar: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    activeCases: 10
  }
];

// Clients
export const clients = [
  {
    id: uuidv4(),
    name: 'Acme Corporation',
    email: 'contact@acmecorp.com',
    phone: '(555) 111-2233',
    address: '123 Business Ave, New York, NY 10001',
    notes: 'Long-standing corporate client with multiple intellectual property cases',
    dateAdded: new Date('2023-01-15'),
    isActive: true,
    cases: []
  },
  {
    id: uuidv4(),
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '(555) 222-3344',
    address: '456 Maple St, Chicago, IL 60601',
    notes: 'Divorce proceedings in progress',
    dateAdded: new Date('2023-02-20'),
    isActive: true,
    cases: []
  },
  {
    id: uuidv4(),
    name: 'TechStart Inc.',
    email: 'legal@techstart.io',
    phone: '(555) 333-4455',
    address: '789 Innovation Dr, San Francisco, CA 94103',
    notes: 'Startup requiring patent filings and investment advice',
    dateAdded: new Date('2023-03-10'),
    isActive: true,
    cases: []
  },
  {
    id: uuidv4(),
    name: 'Jane Doe',
    email: 'jane.doe@email.com',
    phone: '(555) 444-5566',
    address: '101 Oak Lane, Boston, MA 02108',
    notes: 'Personal injury case following car accident',
    dateAdded: new Date('2023-04-05'),
    isActive: true,
    cases: []
  },
  {
    id: uuidv4(),
    name: 'Global Retail Ltd.',
    email: 'legal@globalretail.com',
    phone: '(555) 555-6677',
    address: '202 Commerce Blvd, Dallas, TX 75201',
    notes: 'Multiple employment law cases and contract reviews',
    dateAdded: new Date('2023-05-12'),
    isActive: false,
    cases: []
  }
];

// Cases
export const cases  = [
  {
    id: uuidv4(),
    clientId: clients[0].id,
    type: 'Intellectual Property',
    title: 'Acme Corp. Patent Infringement',
    description: 'Patent infringement case against competitor',
    status: 'In Progress',
    courtDate: new Date('2023-12-15'),
    assignedLawyer: lawyers[1].id,
    documents: [],
    createdAt: new Date('2023-06-10'),
    updatedAt: new Date('2023-11-05')
  },
  {
    id: uuidv4(),
    clientId: clients[1].id,
    type: 'Family Law',
    title: 'Smith Divorce Proceedings',
    description: 'Divorce and child custody arrangement',
    status: 'Open',
    courtDate: new Date('2023-11-20'),
    assignedLawyer: lawyers[2].id,
    documents: [],
    createdAt: new Date('2023-07-15'),
    updatedAt: new Date('2023-10-25')
  },
  {
    id: uuidv4(),
    clientId: clients[2].id,
    type: 'Corporate Law',
    title: 'TechStart Series A Funding',
    description: 'Investment contract review and negotiation',
    status: 'In Progress',
    assignedLawyer: lawyers[0].id,
    documents: [],
    createdAt: new Date('2023-08-20'),
    updatedAt: new Date('2023-10-10')
  },
  {
    id: uuidv4(),
    clientId: clients[3].id,
    type: 'Personal Injury',
    title: 'Doe v. Insurance Co.',
    description: 'Insurance claim for car accident injuries',
    status: 'Open',
    courtDate: new Date('2023-12-10'),
    assignedLawyer: lawyers[3].id,
    documents: [],
    createdAt: new Date('2023-09-05'),
    updatedAt: new Date('2023-10-30')
  },
  {
    id: uuidv4(),
    clientId: clients[4].id,
    type: 'Employment Law',
    title: 'Global Retail Wrongful Termination',
    description: 'Wrongful termination case by former employee',
    status: 'Closed',
    assignedLawyer: lawyers[0].id,
    documents: [],
    createdAt: new Date('2023-01-10'),
    updatedAt: new Date('2023-08-15')
  }
];

// Update client cases
clients.forEach((client, index) => {
  const clientCases = cases.filter(c => c.clientId === client.id);
  clients[index].cases = clientCases.map(c => c.id);
});

// Appointments
export const appointments = [
  {
    id: uuidv4(),
    clientId: clients[0].id,
    caseId: cases[0].id,
    title: 'Patent Strategy Meeting',
    type: 'Meeting',
    date: new Date('2023-11-20'),
    startTime: '10:00',
    endTime: '11:30',
    location: 'Conference Room A',
    notes: 'Discuss patent filing strategy and timeline'
  },
  {
    id: uuidv4(),
    clientId: clients[1].id,
    caseId: cases[1].id,
    title: 'Mediation Session',
    type: 'Court Date',
    date: new Date('2023-11-22'),
    startTime: '14:00',
    endTime: '16:00',
    location: 'Family Court Building',
    notes: 'Mediation for divorce settlement terms'
  },
  {
    id: uuidv4(),
    clientId: clients[2].id,
    caseId: cases[2].id,
    title: 'Investment Term Review',
    type: 'Call',
    date: new Date('2023-11-24'),
    startTime: '11:00',
    endTime: '12:00',
    notes: 'Review proposed term sheet from investors'
  },
  {
    id: uuidv4(),
    clientId: clients[3].id,
    caseId: cases[3].id,
    title: 'Medical Evaluation',
    type: 'Consultation',
    date: new Date('2023-11-28'),
    startTime: '09:30',
    endTime: '10:30',
    location: 'Medical Center',
    notes: 'Independent medical evaluation for insurance claim'
  },
  {
    id: uuidv4(),
    clientId: clients[0].id,
    title: 'Annual Contract Review',
    type: 'Meeting',
    date: new Date('2023-12-05'),
    startTime: '13:00',
    endTime: '15:00',
    location: 'Client Office',
    notes: 'Annual review of all corporate contracts'
  }
];

// Documents
export const documents = [
  {
    id: uuidv4(),
    title: 'Patent Filing Documentation',
    caseId: cases[0].id,
    clientId: clients[0].id,
    uploadedBy: lawyers[1].id,
    uploadDate: new Date('2023-06-15'),
    fileType: 'PDF',
    fileSize: '2.3 MB',
    url: '#document-1'
  },
  {
    id: uuidv4(),
    title: 'Divorce Agreement Draft',
    caseId: cases[1].id,
    clientId: clients[1].id,
    uploadedBy: lawyers[2].id,
    uploadDate: new Date('2023-07-20'),
    fileType: 'DOCX',
    fileSize: '1.8 MB',
    url: '#document-2'
  },
  {
    id: uuidv4(),
    title: 'Series A Term Sheet',
    caseId: cases[2].id,
    clientId: clients[2].id,
    uploadedBy: lawyers[0].id,
    uploadDate: new Date('2023-08-25'),
    fileType: 'PDF',
    fileSize: '0.9 MB',
    url: '#document-3'
  },
  {
    id: uuidv4(),
    title: 'Medical Records',
    caseId: cases[3].id,
    clientId: clients[3].id,
    uploadedBy: lawyers[3].id,
    uploadDate: new Date('2023-09-10'),
    fileType: 'PDF',
    fileSize: '5.2 MB',
    url: '#document-4'
  },
  {
    id: uuidv4(),
    title: 'Settlement Agreement',
    caseId: cases[4].id,
    clientId: clients[4].id,
    uploadedBy: lawyers[0].id,
    uploadDate: new Date('2023-07-30'),
    fileType: 'DOCX',
    fileSize: '1.1 MB',
    url: '#document-5'
  }
];

// Update case documents
cases.forEach((caseItem, index) => {
  const caseDocuments = documents.filter(d => d.caseId === caseItem.id);
  cases[index].documents = caseDocuments.map(d => d.id);
});

// Tasks
export const tasks = [
  {
    id: uuidv4(),
    title: 'Prepare patent filing documents',
    description: 'Complete all necessary forms for patent application',
    caseId: cases[0].id,
    assignedTo: lawyers[1].id,
    status: 'In Progress',
    priority: 'High',
    dueDate: new Date('2023-11-25'),
    createdAt: new Date('2023-06-12')
  },
  {
    id: uuidv4(),
    title: 'Draft custody agreement',
    description: 'Prepare custody agreement based on mediation outcomes',
    caseId: cases[1].id,
    assignedTo: lawyers[2].id,
    status: 'To Do',
    priority: 'Medium',
    dueDate: new Date('2023-11-30'),
    createdAt: new Date('2023-07-18')
  },
  {
    id: uuidv4(),
    title: 'Review investor terms',
    description: 'Analyze and provide feedback on investor term sheet',
    caseId: cases[2].id,
    assignedTo: lawyers[0].id,
    status: 'Done',
    priority: 'High',
    dueDate: new Date('2023-11-15'),
    createdAt: new Date('2023-08-22')
  },
  {
    id: uuidv4(),
    title: 'Request additional medical records',
    description: 'Contact hospital for complete medical history',
    caseId: cases[3].id,
    assignedTo: lawyers[3].id,
    status: 'In Progress',
    priority: 'Medium',
    dueDate: new Date('2023-11-20'),
    createdAt: new Date('2023-09-07')
  },
  {
    id: uuidv4(),
    title: 'File settlement documentation',
    description: 'Submit finalized settlement agreement to court',
    caseId: cases[4].id,
    assignedTo: lawyers[0].id,
    status: 'Done',
    priority: 'Low',
    dueDate: new Date('2023-08-10'),
    createdAt: new Date('2023-07-25')
  }
];

// Invoices
export const invoices = [
  {
    id: uuidv4(),
    invoiceNumber: 'INV-2023-001',
    clientId: clients[0].id,
    caseId: cases[0].id,
    items: [
      {
        id: uuidv4(),
        description: 'Patent Filing Preparation',
        quantity: 15,
        rate: 250,
        amount: 3750
      },
      {
        id: uuidv4(),
        description: 'Legal Research',
        quantity: 8,
        rate: 200,
        amount: 1600
      }
    ],
    subtotal: 5350,
    tax: 428,
    total: 5778,
    status: 'Paid',
    issueDate: new Date('2023-07-01'),
    dueDate: new Date('2023-07-15'),
    paymentDate: new Date('2023-07-12')
  },
  {
    id: uuidv4(),
    invoiceNumber: 'INV-2023-002',
    clientId: clients[1].id,
    caseId: cases[1].id,
    items: [
      {
        id: uuidv4(),
        description: 'Initial Consultation',
        quantity: 2,
        rate: 300,
        amount: 600
      },
      {
        id: uuidv4(),
        description: 'Document Preparation',
        quantity: 5,
        rate: 250,
        amount: 1250
      }
    ],
    subtotal: 1850,
    tax: 148,
    total: 1998,
    status: 'Unpaid',
    issueDate: new Date('2023-08-01'),
    dueDate: new Date('2023-08-15')
  },
  {
    id: uuidv4(),
    invoiceNumber: 'INV-2023-003',
    clientId: clients[2].id,
    caseId: cases[2].id,
    items: [
      {
        id: uuidv4(),
        description: 'Contract Review',
        quantity: 10,
        rate: 300,
        amount: 3000
      },
      {
        id: uuidv4(),
        description: 'Negotiation Services',
        quantity: 6,
        rate: 350,
        amount: 2100
      }
    ],
    subtotal: 5100,
    tax: 408,
    total: 5508,
    status: 'Overdue',
    issueDate: new Date('2023-09-01'),
    dueDate: new Date('2023-09-15')
  },
  {
    id: uuidv4(),
    invoiceNumber: 'INV-2023-004',
    clientId: clients[3].id,
    caseId: cases[3].id,
    items: [
      {
        id: uuidv4(),
        description: 'Case Evaluation',
        quantity: 3,
        rate: 275,
        amount: 825
      },
      {
        id: uuidv4(),
        description: 'Insurance Claim Review',
        quantity: 4,
        rate: 250,
        amount: 1000
      }
    ],
    subtotal: 1825,
    tax: 146,
    total: 1971,
    status: 'Paid',
    issueDate: new Date('2023-10-01'),
    dueDate: new Date('2023-10-15'),
    paymentDate: new Date('2023-10-10')
  }
];

// Team Members for About page
export const teamMembers = [
  {
    id: uuidv4(),
    name: 'Sarah Johnson',
    role: 'Senior Partner',
    bio: 'Sarah has over 20 years of experience in corporate law and leads our corporate practice.',
    image: 'https://images.pexels.com/photos/5439147/pexels-photo-5439147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: uuidv4(),
    name: 'Michael Chen',
    role: 'Partner',
    bio: 'Michael specializes in intellectual property law with expertise in patent and trademark matters.',
    image: 'https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: uuidv4(),
    name: 'Jessica Rodriguez',
    role: 'Associate',
    bio: 'Jessica focuses on family law and has successfully represented clients in complex divorce cases.',
    image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: uuidv4(),
    name: 'David Wilson',
    role: 'Associate',
    bio: 'David has extensive experience in criminal defense and has represented clients in high-profile cases.',
    image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: uuidv4(),
    name: 'Emily Patel',
    role: 'Legal Assistant',
    bio: 'Emily provides crucial support to our legal team and manages client communications.',
    image: 'https://images.pexels.com/photos/5717660/pexels-photo-5717660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: uuidv4(),
    name: 'Robert Thompson',
    role: 'Paralegal',
    bio: 'Robert assists in case preparation and legal research across multiple practice areas.',
    image: 'https://images.pexels.com/photos/3760819/pexels-photo-3760819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

// Dashboard Stats
export const dashboardStats = {
  totalClients: clients.length,
  openCases: cases.filter(c => c.status !== 'Closed').length,
  hearingsThisWeek: 3,
  tasksDue: tasks.filter(t => t.status !== 'Done').length,
  revenue: {
    current: 15257,
    previous: 12430,
    percentChange: 22.7
  }
};

// Helper function to get client name by ID
export const getClientNameById = (id) => {
  const client = clients.find(c => c.id === id);
  return client ? client.name : 'Unknown Client';
};

// Helper function to get lawyer name by ID
export const getLawyerNameById = (id) => {
  const lawyer = lawyers.find(l => l.id === id);
  return lawyer ? lawyer.name : 'Unknown Lawyer';
};

// Helper function to get case title by ID
export const getCaseTitleById = (id) => {
  const caseItem = cases.find(c => c.id === id);
  return caseItem ? caseItem.title : 'Unknown Case';
};

// Helper function to format date
export const formatDate = (date) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// Helper function to format currency
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};