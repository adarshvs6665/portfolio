'use client';

import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const ResumeTemplate = () => {
  const [width, setWidth] = useState(1200);
  const [file, setFile] = useState('../resume.pdf');

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Box>
      <Document file={file}>
        <Page pageNumber={1} scale={width > 786 ? 1.9 : 0.6} />
        <Page pageNumber={2} scale={width > 786 ? 1.9 : 0.6} />
      </Document>
    </Box>
  );
};

export default ResumeTemplate;
