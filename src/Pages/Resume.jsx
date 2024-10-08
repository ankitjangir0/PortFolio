 
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file="..src\Pages\pdf\resume.pdf"
        onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button
        onClick={() => setPageNumber((prevPageNumber) => prevPageNumber - 1)}
        disabled={pageNumber <= 1}>
        Previous
      </button>
      <button
        onClick={() => setPageNumber((prevPageNumber) => prevPageNumber + 1)}
        disabled={pageNumber >= numPages}>
        Next
      </button>
    </div>
  );
}
export default Resume