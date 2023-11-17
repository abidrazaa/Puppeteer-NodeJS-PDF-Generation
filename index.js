require("@babel/register");
const puppeteer = require("puppeteer");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const LoadSheetPDFContent = require("./view/LoadSheet/index.js");
// const Logo = "file://" + __dirname + "/assets/Logo.png";
const pkg = require("./static/logo.js");
const imageDataURL = pkg;
const data = require("./data/loadsheet.js");

async function generatePDF() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    let wrappedContent = ``;
    const LOADSHEETDATA = data.LOADSHEETDATA;
    const content = ReactDOMServer.renderToString(
        React.createElement(LoadSheetPDFContent, LOADSHEETDATA)
    );
    wrappedContent += `
      <div class="loadsheet-page">
        ${content}
      </div>
    `;

    await page.setContent(wrappedContent);
    await page.addStyleTag({
        content: `
    @page {
      margin: 30 30 50 30;
    }
    .loadsheet-page {
      page-break-after: always;
    }
  `,
    });
    const footer = `
    <style>
        .pageNumber, .totalPages {
            font-size: 12px;
            color: #ccc;
        }
    </style>
    <div style="width:100%; height: 30px; margin: 0px 10px;">
        <hr style="width: 100%; border: 0; border-top: 1px solid #ccc;">
        <div style="display: flex; margin: 7px 30px 0px 30px; justify-content: space-between; align-items: center;">
            <div>
                <paragraph style="font-size: 10px; color: #ccc; margin: 4px 5px 0px 0px; padding: 0px;">POWERED BY</paragraph>
                <img height="15" src="${imageDataURL}"/>
            </div>
            <div >
                <span class="pageNumber"></span> <paragraph style="font-size: 12px; color: #ccc;">/</paragraph> <span class="totalPages"></span>
            </div>
        </div>
    </div>
    `;
    await page.pdf({
        path: "dynamic.pdf",
        format: "A4",
        printBackground: true,
        displayHeaderFooter: true,
        footerTemplate: footer,
    });

    await browser.close();
}

generatePDF();
