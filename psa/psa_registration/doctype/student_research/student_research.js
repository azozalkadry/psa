// Copyright (c) 2024, Sana'a university and contributors
// For license information, please see license.txt

frappe.ui.form.on("Student Research", {
	validate: function(frm) {
        var ResearchTitleArabic = frm.doc.research_title_arabic;
        
        // Check if the Research Title Arabic field contains only Arabic characters, numbers, and symbols
        var isArabic = /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF\d\s!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]*$/.test(ResearchTitleArabic);

        if (!isArabic) {
            frappe.msgprint('<span style = "color:red;">The Research Title Arabic field should only contain Arabic characters, numbers, and symbols.</span>');
            frappe.validated = false;
        }

        var ResearchTitleEnglish = frm.doc.research_title_english;
        // Check if the Research Title English field contains only English letters, numbers, and symbols
        var isEnglish = /^[a-zA-Z0-9\s!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]*$/.test(ResearchTitleEnglish);
        
        if (!isEnglish) {
            frappe.msgprint('<span style="color:red;">The Research Title English field should only contain English characters, numbers, and symbols.</span>');
            frappe.validated = false;
        }
    }
});
