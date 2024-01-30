// Copyright (c) 2024, Aditya Purohit and contributors
// For license information, please see license.txt

frappe.ui.form.on('Library Membership', {
	refresh: function(frm) {
		frm.add_custom_button('Create Membership', () => {
			frappe.new_doc('Library Membership', {
				library_member: frm.doc.name
			})
		})
		frm.add_custom_button('Create Transaction',() => {
			frappe.new_doc('Library Trasnsaction', {
				library_member: frm.doc.name
			})
		})
	}
});
