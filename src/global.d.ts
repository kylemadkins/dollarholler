const InvoiceStatus = {
	Draft: "Draft",
	Sent: "Sent",
	Paid: "Paid"
} as const;

type InvoiceStatus = typeof InvoiceStatus[keyof typeof InvoiceStatus];

type Invoice = {
	id: string;
	status: InvoiceStatus;
	issueDate: string;
	number: string;
	client: Client;
	dueDate: string;
	subject?: string;
	lineItems?: LineItem[];
	notes?: string;
	terms?: string;
	createdAt: string;
};

const ClientStatus = {
	Active: "Active",
	Archived: "Archived"
} as const;

type ClientStatus = typeof ClientStatus[keyof typeof ClientStatus];

type Client = {
	id: string;
	name: string;
	email: string;
	street: string;
	city: string;
	state: string;
	zip: string;
	status: ClientStatus;
};

type LineItem = {
	id: string;
	description: string;
	quantity: number;
	amount: number;
};
