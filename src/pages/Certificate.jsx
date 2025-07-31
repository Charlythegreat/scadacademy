import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
const styles = StyleSheet.create({ page: { padding: 30 }, section: { margin: 10, padding: 10 } });
const CertificatePDF = () => (<Document><Page size='A4' style={styles.page}><View style={styles.section}><Text>Certificat de réussite</Text></View></Page></Document>);
const Certificate = () => (<PDFViewer width='100%' height='600'><CertificatePDF /></PDFViewer>);
export default Certificate;