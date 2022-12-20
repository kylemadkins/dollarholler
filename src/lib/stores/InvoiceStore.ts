import { writable } from "svelte/store";
import data from "../../seed.json";
import type { Invoice } from "$lib/types";

export const invoices = writable<Invoice[]>([]);

export const loadInvoices = () => {
	invoices.set(data.invoices as Invoice[]);
};
