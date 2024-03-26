const { PDFDocument, StandardFonts, rgb } = PDFLib
const Uri = 0;
async function generatePdf() {
    	// Fetch the PDF with form fields
        const formUrl = 'Form 1 BRF-unlocked.pdf'
        const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
  
        // Load a PDF with form fields
        const pdfDoc = await PDFDocument.load(formPdfBytes)
        const form = pdfDoc.getForm()
        const radioGroupReg = form.getRadioGroup('form1[0].Page2[0].rdregtype[0]')
        radioGroupReg.select('1')            

        // Serialize the PDFDocument to bytes (a Uint8Array)
        const pdfBytes = await pdfDoc.save()
        const Uri = await pdfDoc.saveAsBase64({ dataUri: true });
        document.querySelector("#iframe").src = Uri;

    }


    async function loadFrom() {
    	// Fetch the PDF with form fields
        console.log(document.querySelector("#iframe"))
        const formUrl = document.querySelector("#iframe").src
        const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
  
        // Load a PDF with form fields
        const pdfDoc = await PDFDocument.load(formPdfBytes)
        const pdfBytes = await pdfDoc.save();
        const form = pdfDoc.getForm()
        const radioGroupReg = form.getRadioGroup('form1[0].Page2[0].rdregtype[0]')
        const optionsRef = radioGroupReg.getSelected()
        console.log(optionsRef)
    }    
generatePdf();
