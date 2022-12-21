export type TagVariant = "inverted" | "success" | "alert" | "archived";

export type InvoiceStatus = "draft" | "sent" | "paid";

export type LineItem = {
	id: string;
	description: string;
	quantity: number;
	amount: number;
};

export type Invoice = {
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

export type ClientStatus = "active" | "archived";

export type Client = {
	id: string;
	name: string;
	email: string;
	street: string;
	city: string;
	state: string;
	zip: string;
	status?: ClientStatus;
};
