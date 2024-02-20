// InvoicePDF.js
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Define types for props
type Row = {
  productName: string;
  quantity: number;
  rate: number;
  gst: number;
};

type Props = {
  rows: Row[];
  finalTotal: number;
};


const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const InvoicePDF: React.FC<Props> = ({ rows, finalTotal }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{rows[0].productName}</Text>
      </View>
      <View style={styles.section}>
        <Text>{finalTotal}</Text>
      </View>
    </Page>
  </Document>
);

export default InvoicePDF;
