import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFGenerator from './pdf';

const DownloadPDFButton = ({ imageUrl }) => {
  return (
    <PDFDownloadLink document={<PDFGenerator imageUrl={imageUrl} />} fileName="document.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download PDF'
      }
    </PDFDownloadLink>
  );
};

export default DownloadPDFButton;