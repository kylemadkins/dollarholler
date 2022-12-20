export const TAG_VARIANT = {
	INVERTED: "inverted",
	SUCCESS: "success",
	ALERT: "alert",
	ARCHIVED: "archived"
} as const;

export type TagVariant = typeof TAG_VARIANT[keyof typeof TAG_VARIANT];

export const INVOICE_STATUS = {
	DRAFT: "draft",
	SENT: "sent",
	PAID: "paid"
} as const;

export type InvoiceStatus = typeof INVOICE_STATUS[keyof typeof INVOICE_STATUS];

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

export const CLIENT_STATUS = {
	ACTIVE: "active",
	ARCHIVED: "archived"
} as const;

export type ClientStatus = typeof CLIENT_STATUS[keyof typeof CLIENT_STATUS];

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
