import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
//import file from './test.pdf'
//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ExamplePDF(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      {pageNumber !== 1 && (
        <button
          onClick={() => {
            setPageNumber((cur) => cur - 1);
          }}
        >
          {" "}
          prev page
        </button>
      )}
      {pageNumber !== numPages && (
        <button
          onClick={() => {
            setPageNumber((cur) => cur + 1);
          }}
        >
          {" "}
          next page
        </button>
      )}
      <Document file="./test.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
}
