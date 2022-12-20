type InvoiceStatus = "draft" | "sent" | "paid";

type LineItem = {
	id: string;
	description: string;
	quantity: number;
	amount: number;
};

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

type ClientStatus = "active" | "archived";

type Client = {
	id: string;
	name: string;
	email: string;
	street: string;
	city: string;
	state: string;
	zip: string;
	status?: ClientStatus;
};
