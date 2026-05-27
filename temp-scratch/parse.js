const pdf = require('pdf-parse');
const path = require('path');
const fs = require('fs');

const pdfPath = path.join(__dirname, '..', 'public', 'Mujtaba CV.pdf');
const dataBuffer = fs.readFileSync(pdfPath);
const uint8Array = new Uint8Array(dataBuffer);

try {
    const parser = new pdf.PDFParse(uint8Array);
    parser.load().then(async (doc) => {
        console.log("Loaded PDF, pages:", doc.numPages);
        const result = await parser.getText();
        console.log("Type of result:", typeof result);
        const textContent = typeof result === 'string' ? result : (result.text || JSON.stringify(result, null, 2));
        fs.writeFileSync(path.join(__dirname, 'cv_text.txt'), textContent);
        console.log("Saved to cv_text.txt");
    }).catch(err => {
        console.error("Error loading PDF:", err);
    });
} catch(e) {
    console.error("Instantiation error:", e);
}
