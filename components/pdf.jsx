import React from 'react';
import { Document, Page, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  image: {
    width: '50%',
  },
});

const PDFGenerator = ({ imageUrl }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image src={imageUrl} style={styles.image} />
      </Page>
    </Document>
  );
};

export default PDFGenerator;
