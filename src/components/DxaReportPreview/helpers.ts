import {
  AlignmentType,
  convertInchesToTwip,
  Document,
  Footer,
  HeightRule,
  LevelFormat,
  Packer,
  PageNumber,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableRow,
  TextRun,
  VerticalAlign,
  WidthType,
} from 'docx';
import { saveAs } from 'file-saver';

const blank = new Paragraph('');

const title = new Paragraph({
  children: [
    new TextRun({
      text: 'BONE DENSITOMETRY AND TOTAL BODY COMPOSITION REPORT',
      bold: true,
      size: '12pt',
    }),
  ],
  alignment: AlignmentType.CENTER,
});

const salutation = new Paragraph({
  children: [
    new TextRun({
      text: 'Dear Doctor:',
      bold: true,
    }),
  ],
  alignment: AlignmentType.JUSTIFIED,
});

const introduction = [
  new Paragraph({
    children: [
      new TextRun({
        text: `\
Your patient underwent bone mineral density (BMD) and total body composition testing at The Medical City Bone Densitometry Unit \
using the HOLOGIC Horizon W Dual Energy X-ray Absorptiometry (fan beam x-ray).\
`,
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
  }),
  blank,
  new Paragraph({
    children: [
      new TextRun({
        text: 'Test results are as follows:',
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
  }),
];

const testResultTableCell = (
  text: string,
  center?: boolean,
  bold?: boolean,
  space?: number
) =>
  new Paragraph({
    children: [
      new TextRun({
        text,
        bold,
        ...(space && {
          break: space,
        }),
      }),
    ],
    indent: {
      start: '0.05in',
      end: '0.05in',
    },
    ...(center && {
      alignment: AlignmentType.CENTER,
    }),
  });

const testResultTableHeader = [
  new TableRow({
    children: [
      new TableCell({
        children: [testResultTableCell('SITES', true, true, 1)],
        rowSpan: 2,
        shading: {
          color: 'ccffcc',
          type: ShadingType.SOLID,
        },
        width: {
          size: convertInchesToTwip(1.89),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: 'BMD, g/cm',
                bold: true,
                break: 1,
              }),
              new TextRun({
                text: '2',
                bold: true,
                superScript: true,
              }),
            ],
            indent: {
              start: '0.05in',
              end: '0.05in',
            },
            alignment: AlignmentType.CENTER,
          }),
        ],
        rowSpan: 2,
        shading: {
          color: 'ccffcc',
          type: ShadingType.SOLID,
        },
        width: {
          size: convertInchesToTwip(1.13),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('Young Adult', true, true)],
        columnSpan: 2,
        shading: {
          color: 'ccffcc',
          type: ShadingType.SOLID,
        },
      }),
      new TableCell({
        children: [testResultTableCell('Age-matched', true, true)],
        columnSpan: 2,
        shading: {
          color: 'ccffcc',
          type: ShadingType.SOLID,
        },
      }),
    ],
    height: {
      value: '0.23in',
      rule: HeightRule.EXACT,
    },
  }),
  new TableRow({
    children: [
      new TableCell({
        children: [testResultTableCell('T-score', true, true)],
        shading: {
          color: 'ffcc99',
          type: ShadingType.SOLID,
        },
        width: {
          size: convertInchesToTwip(1),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('%', true, true)],
        shading: {
          color: 'ffcc99',
          type: ShadingType.SOLID,
        },
        width: {
          size: convertInchesToTwip(1),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('Z-score', true, true)],
        shading: {
          color: 'ffcc99',
          type: ShadingType.SOLID,
        },
        width: {
          size: convertInchesToTwip(1),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('%', true, true)],
        shading: {
          color: 'ffcc99',
          type: ShadingType.SOLID,
        },
        width: {
          size: convertInchesToTwip(1),
          type: WidthType.DXA,
        },
      }),
    ],
  }),
];

const lumbarSiteResult = () =>
  new TableRow({
    children: [
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: 'Lumbar ',
              }),
              new TextRun({
                text: 'L1 - L4', // Input
              }),
            ],
            indent: {
              start: '0.05in',
              end: '0.05in',
            },
          }),
        ],
        width: {
          size: convertInchesToTwip(1.89),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('', true)],
        width: {
          size: convertInchesToTwip(1.13),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('', true)],
        width: {
          size: convertInchesToTwip(1),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('', true)],
        width: {
          size: convertInchesToTwip(1),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('', true)],
        width: {
          size: convertInchesToTwip(1),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('', true)],
        width: {
          size: convertInchesToTwip(1),
          type: WidthType.DXA,
        },
      }),
    ],
  });

const rightSiteResult = () =>
  new TableRow({
    children: [
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: 'Right ',
              }),
              new TextRun({
                text: 'femoral neck', // Input
              }),
            ],
            indent: {
              start: '0.05in',
              end: '0.05in',
            },
          }),
        ],
        width: {
          size: convertInchesToTwip(1.89),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('', true)],
        width: {
          size: convertInchesToTwip(1.13),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('', true)],
        width: {
          size: convertInchesToTwip(1),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('', true)],
        width: {
          size: convertInchesToTwip(1),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('', true)],
        width: {
          size: convertInchesToTwip(1),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('', true)],
        width: {
          size: convertInchesToTwip(1),
          type: WidthType.DXA,
        },
      }),
    ],
  });

const leftSiteResult = () =>
  new TableRow({
    children: [
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: 'Left ',
              }),
              new TextRun({
                text: 'femoral neck', // Input
              }),
            ],
            indent: {
              start: '0.05in',
              end: '0.05in',
            },
          }),
        ],
        width: {
          size: convertInchesToTwip(1.89),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('', true)],
        width: {
          size: convertInchesToTwip(1.13),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('', true)],
        width: {
          size: convertInchesToTwip(1),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('', true)],
        width: {
          size: convertInchesToTwip(1),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('', true)],
        width: {
          size: convertInchesToTwip(1),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('', true)],
        width: {
          size: convertInchesToTwip(1),
          type: WidthType.DXA,
        },
      }),
    ],
  });

const forearmSiteResult = () =>
  new TableRow({
    children: [
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: 'Left', // Input
              }),
              new TextRun({
                text: ' forearm (33% radius)',
              }),
            ],
            indent: {
              start: '0.05in',
              end: '0.05in',
            },
          }),
        ],
        width: {
          size: convertInchesToTwip(1.89),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('', true)],
        width: {
          size: convertInchesToTwip(1.13),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('', true)],
        width: {
          size: convertInchesToTwip(1),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('', true)],
        width: {
          size: convertInchesToTwip(1),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('', true)],
        width: {
          size: convertInchesToTwip(1),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('', true)],
        width: {
          size: convertInchesToTwip(1),
          type: WidthType.DXA,
        },
      }),
    ],
  });

const totalBodyResult = () =>
  new TableRow({
    children: [
      new TableCell({
        children: [testResultTableCell('Total body')],
        width: {
          size: convertInchesToTwip(1.89),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('', true)],
        width: {
          size: convertInchesToTwip(1.13),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('', true)],
        width: {
          size: convertInchesToTwip(1),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('', true)],
        width: {
          size: convertInchesToTwip(1),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('', true)],
        width: {
          size: convertInchesToTwip(1),
          type: WidthType.DXA,
        },
      }),
      new TableCell({
        children: [testResultTableCell('', true)],
        width: {
          size: convertInchesToTwip(1),
          type: WidthType.DXA,
        },
      }),
    ],
  });

const testResultTableBody = [
  lumbarSiteResult(),
  leftSiteResult(),
  rightSiteResult(),
  forearmSiteResult(),
  totalBodyResult(),
];

const testResultTable = () =>
  new Table({
    alignment: AlignmentType.CENTER,
    columnWidths: [
      convertInchesToTwip(1.89),
      convertInchesToTwip(1.13),
      convertInchesToTwip(1),
    ],
    rows: [...testResultTableHeader, ...testResultTableBody],
  });

const totalBodyComposition = () => [
  new Paragraph({
    children: [
      new TextRun({
        text: 'Total Body Composition',
        bold: true,
      }),
    ],
    indent: {
      start: '0.35in',
    },
  }),
  new Paragraph({
    children: [
      new TextRun({
        text: 'BMI: ',
      }),
      new TextRun({
        text: '23.2', // Input
      }),
      new TextRun({
        text: ' kg/m',
      }),
      new TextRun({
        text: '2',
        superScript: true,
      }),
      new TextRun({
        text: ' (',
      }),
      new TextRun({
        text: 'Overweight', // Input
      }),
      new TextRun({
        text: '), Total body mass based from DXA = ',
      }),
      new TextRun({
        text: '60.3', // Input
      }),
      new TextRun({
        text: ' kg',
      }),
    ],
    indent: {
      start: '0.35in',
    },
  }),
  new Paragraph({
    children: [
      new TextRun({
        text: 'Whole body composition as follows: Fat = ',
      }),
      new TextRun({
        text: '23.7', // Input
      }),
      new TextRun({
        text: ' kg (',
      }),
      new TextRun({
        text: '39.2', // Input
      }),
      new TextRun({
        text: ' %); Lean = ',
      }),
      new TextRun({
        text: '34.8', // Input
      }),
      new TextRun({
        text: ' kg (',
      }),
      new TextRun({
        text: '58.3', // Input
      }),
      new TextRun({
        text: ' %); Bone Mineral = ',
      }),
      new TextRun({
        text: '1.8', // Input
      }),
      new TextRun({
        text: ' kg (',
      }),
      new TextRun({
        text: '3.1', // Input
      }),
      new TextRun({
        text: ' %)',
      }),
    ],
    indent: {
      start: '0.35in',
    },
  }),
];

const whoClassificationTableCell = (text: string, bold?: boolean) =>
  new Paragraph({
    children: [
      new TextRun({
        text,
        bold,
        size: '10pt',
      }),
    ],
    indent: {
      start: '0.05in',
      end: '0.05in',
    },
    alignment: AlignmentType.CENTER,
  });

const whoClassificationTable = new Table({
  columnWidths: [convertInchesToTwip(2.3), convertInchesToTwip(4.38)],
  indent: {
    size: convertInchesToTwip(0.4),
    type: WidthType.DXA,
  },
  rows: [
    new TableRow({
      children: [
        new TableCell({
          children: [
            whoClassificationTableCell(
              'WHO Classification for Osteoporosis',
              true
            ),
          ],
          columnSpan: 2,
          verticalAlign: VerticalAlign.CENTER,
        }),
      ],
      height: {
        value: '0.17in',
        rule: HeightRule.AUTO,
      },
    }),
    new TableRow({
      children: [
        new TableCell({
          children: [whoClassificationTableCell('Normal')],
          width: {
            size: convertInchesToTwip(2.3),
            type: WidthType.DXA,
          },
          verticalAlign: VerticalAlign.CENTER,
        }),
        new TableCell({
          children: [
            whoClassificationTableCell(
              'Bone density equal to – 1.0 SD or higher (T-score ≥ - 1.0)'
            ),
          ],
          width: {
            size: convertInchesToTwip(4.38),
            type: WidthType.DXA,
          },
          verticalAlign: VerticalAlign.CENTER,
        }),
      ],
      height: {
        value: '0.17in',
        rule: HeightRule.AUTO,
      },
    }),
    new TableRow({
      children: [
        new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: 'Low Bone Mass',
                  size: '10pt',
                }),
              ],
              indent: {
                start: '0.05in',
                end: '0.05in',
              },
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: '(Osteopenia/Low Bone Density)',
                  size: '10pt',
                }),
              ],
              indent: {
                start: '0.05in',
                end: '0.05in',
              },
              alignment: AlignmentType.CENTER,
            }),
          ],
          width: {
            size: convertInchesToTwip(2.3),
            type: WidthType.DXA,
          },
          verticalAlign: VerticalAlign.CENTER,
        }),
        new TableCell({
          children: [
            whoClassificationTableCell(
              'Bone density between – 1.0 and – 2.5 SD (T-score < - 1.0 and > - 2.5)'
            ),
          ],
          width: {
            size: convertInchesToTwip(4.38),
            type: WidthType.DXA,
          },
          verticalAlign: VerticalAlign.CENTER,
        }),
      ],
      height: {
        value: '0.17in',
        rule: HeightRule.AUTO,
      },
    }),
    new TableRow({
      children: [
        new TableCell({
          children: [whoClassificationTableCell('Osteoporosis')],
          width: {
            size: convertInchesToTwip(2.3),
            type: WidthType.DXA,
          },
          verticalAlign: VerticalAlign.CENTER,
        }),
        new TableCell({
          children: [
            whoClassificationTableCell(
              'Bone density equal to – 2.5 SD or lower (T-score ≤ - 2.5)'
            ),
          ],
          width: {
            size: convertInchesToTwip(4.38),
            type: WidthType.DXA,
          },
          verticalAlign: VerticalAlign.CENTER,
        }),
      ],
      height: {
        value: '0.17in',
        rule: HeightRule.AUTO,
      },
    }),
    new TableRow({
      children: [
        new TableCell({
          children: [
            whoClassificationTableCell('Severe (established) Osteoporosis'),
          ],
          width: {
            size: convertInchesToTwip(2.3),
            type: WidthType.DXA,
          },
          verticalAlign: VerticalAlign.CENTER,
        }),
        new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: 'Bone density at least 2.5 SD below the mean for young adult women,',
                  size: '10pt',
                }),
              ],
              indent: {
                start: '0.05in',
                end: '0.05in',
              },
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: 'with history of fragility fracture (T-score ≤ - 2.5)',
                  size: '10pt',
                }),
              ],
              indent: {
                start: '0.05in',
                end: '0.05in',
              },
              alignment: AlignmentType.CENTER,
            }),
          ],
          width: {
            size: convertInchesToTwip(4.38),
            type: WidthType.DXA,
          },
          verticalAlign: VerticalAlign.CENTER,
        }),
      ],
      height: {
        value: '0.17in',
        rule: HeightRule.AUTO,
      },
    }),
  ],
});

const interpretation = () => [
  // Lumbar
  new Paragraph({
    children: [
      new TextRun({
        text: 'The most representative BMD of the lumbar spine comes from L1 - L4. This total BMD value of ',
      }),
      new TextRun({
        text: '___', // Input
      }),
      new TextRun({
        text: ' g/cm',
      }),
      new TextRun({
        text: '2',
        superScript: true,
      }),
      new TextRun({
        text: ' (T-score: ',
      }),
      new TextRun({
        text: '__', // Input
      }),
      // Z-score start
      new TextRun({
        text: ' and Z-score: ',
      }),
      new TextRun({
        text: '___', // Input
      }),
      // Z-score end
      new TextRun({
        text: ') indicates ',
      }),
      // % or not diminished start
      new TextRun({
        text: 'a ',
      }),
      new TextRun({
        text: '__', // Input
      }),
      new TextRun({
        text: ' %',
      }),
      // % or not diminished end
      new TextRun({
        text: ' diminution from the mean peak BMD of a young adult aged 20 – 45 and ',
      }),
      // % or not diminished start
      new TextRun({
        text: '__', // Input
      }),
      new TextRun({
        text: ' %',
      }),
      // % or not diminished end
      new TextRun({
        text: ' diminished when compared to adults of similar age, weight, and race (age-matched).',
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
  }),
  blank,
  // Femoral neck / total hip
  new Paragraph({
    children: [
      new TextRun({
        text: 'The right and left ',
      }),
      new TextRun({
        text: 'femoral neck', // Input
      }),
      new TextRun({
        text: ' BMDs of ',
      }),
      new TextRun({
        text: '___', // Input
      }),
      new TextRun({
        text: ' g/cm',
      }),
      new TextRun({
        text: '2',
        superScript: true,
      }),
      new TextRun({
        text: ' and ',
      }),
      new TextRun({
        text: '___', // Input
      }),
      new TextRun({
        text: ' g/cm',
      }),
      new TextRun({
        text: '2',
        superScript: true,
      }),
      new TextRun({
        text: ' (T-scores: ',
      }),
      new TextRun({
        text: '___', // Input
      }),
      new TextRun({
        text: ' right, ',
      }),
      new TextRun({
        text: '___', // Input
      }),
      new TextRun({
        text: ' left',
      }),
      // Z-score start
      new TextRun({
        text: ' and Z-scores: ',
      }),
      new TextRun({
        text: '___', // Input
      }),
      new TextRun({
        text: ' right, ',
      }),
      new TextRun({
        text: '___', // Input
      }),
      new TextRun({
        text: ' left',
      }),
      // Z-score end
      new TextRun({
        text: ') respectively are ',
      }),
      // % or not diminished start
      new TextRun({
        text: '__', // Input
      }),
      new TextRun({
        text: ' % and ',
      }),
      new TextRun({
        text: '__', // Input
      }),
      new TextRun({
        text: ' %',
      }),
      // % or not diminished end
      new TextRun({
        text: ' diminished relative to the mean peak BMD of a young adult aged 20 – 45, and ',
      }),
      // % or not diminished start
      new TextRun({
        text: '__', // Input
      }),
      new TextRun({
        text: ' % and ',
      }),
      new TextRun({
        text: '__', // Input
      }),
      new TextRun({
        text: ' %',
      }),
      // % or not diminished end
      new TextRun({
        text: ' diminished when compared to adults of similar age, weight, and race (age-matched).',
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
  }),
  blank,
  // Forearm
  new Paragraph({
    children: [
      new TextRun({
        text: 'The nondominant forearm 33 % radius BMD of ',
      }),
      new TextRun({
        text: '___', // Input
      }),
      new TextRun({
        text: ' g/cm',
      }),
      new TextRun({
        text: '2',
        superScript: true,
      }),
      new TextRun({
        text: ' (T-score: ',
      }),
      new TextRun({
        text: '___', // Input
      }),
      // Z-score start
      new TextRun({
        text: ' and Z-score: ',
      }),
      new TextRun({
        text: '___', // Input
      }),
      // Z-score end
      new TextRun({
        text: ') is ',
      }),
      new TextRun({
        text: '__', // Input
      }),
      new TextRun({
        text: ' % below the young adult mean BMD and ',
      }),
      // % or not diminished
      new TextRun({
        text: '__', // Input
      }),
      new TextRun({
        text: ' %',
      }),
      // % or not diminished
      new TextRun({
        text: ' diminished when compared to adults of similar age, weight, and race (age-matched).',
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
  }),
  blank,
  // Forearm and total body
  new Paragraph({
    children: [
      new TextRun({
        text: 'The nondominant forearm 33 % radius and total body BMDs of ',
      }),
      new TextRun({
        text: '___', // Input
      }),
      new TextRun({
        text: ' g/cm',
      }),
      new TextRun({
        text: '2',
        superScript: true,
      }),
      new TextRun({
        text: ' and ',
      }),
      new TextRun({
        text: '___', // Input
      }),
      new TextRun({
        text: ' g/cm',
      }),
      new TextRun({
        text: '2',
        superScript: true,
      }),
      new TextRun({
        text: ' (T-scores: ',
      }),
      new TextRun({
        text: '__', // Input
      }),
      new TextRun({
        text: ', ',
      }),
      new TextRun({
        text: '__', // Input
      }),
      // Z-score start
      new TextRun({
        text: ' and Z-scores: ',
      }),
      new TextRun({
        text: '__', // Input
      }),
      new TextRun({
        text: ', ',
      }),
      new TextRun({
        text: '__', // Input
      }),
      // Z-score end
      new TextRun({
        text: ') respectively are ',
      }),
      new TextRun({
        text: '__', // Input
      }),
      new TextRun({
        text: ' % and ',
      }),
      new TextRun({
        text: '__', // Input
      }),
      new TextRun({
        text: ' % below the young adult mean BMD, and ',
      }),
      // % or not diminished start
      new TextRun({
        text: '__', // Input
      }),
      new TextRun({
        text: ' % and ',
      }),
      new TextRun({
        text: '__', // Input
      }),
      new TextRun({
        text: ' %',
      }),
      // % or not diminished end
      new TextRun({
        text: ' diminished when compared to adults of similar age, weight, and race (age-matched).',
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
  }),
];

const assessment = () => [
  new Paragraph({
    children: [
      new TextRun({
        text: 'Assessment: ',
        bold: true,
      }),
      new TextRun({
        text: 'In summary, your patient has ',
      }),
      new TextRun({
        text: 'osteoporosis',
        bold: true,
      }),
      new TextRun({
        text: ' based on the WHO classification for ',
      }),
      new TextRun({
        text: 'post-menopausal women',
        bold: true,
      }),
      new TextRun({
        text: '.',
        bold: true,
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
  }),
  blank,
  new Paragraph({
    children: [
      new TextRun({
        text: 'Assessment: ',
        bold: true,
      }),
      new TextRun({
        text: 'In summary, your patient’s BMD is ',
      }),
      new TextRun({
        text: 'within the expected range for age',
        bold: true,
      }),
      new TextRun({
        text: ' based on the ISCD guidelines for ',
      }),
      new TextRun({
        text: 'pre-menopausal women',
        bold: true,
      }),
      new TextRun({
        text: '.',
        bold: true,
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
  }),
];

const fracture = () =>
  new Paragraph({
    children: [
      new TextRun({
        text: 'The 10-year probability of developing a hip fracture is ',
      }),
      new TextRun({
        text: '0.4 %',
        bold: true,
      }),
      new TextRun({
        text: ' while the 10-year probability of any major bone fracture (spine, forearm, hip or shoulder) is ',
      }),
      new TextRun({
        text: '3.2 %',
        bold: true,
      }),
      new TextRun({
        text: ' based on the standardized T-score of the femoral neck. Note: These values apply to previously untreated patients.',
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
  });

const fractureProbability = [
  new Paragraph({
    children: [
      new TextRun({
        text: '10-year probability of fractures is calculated based on the WHO Fracture Risk Assessment Tool (FRAX',
        size: '9pt',
      }),
      new TextRun({
        text: 'TM',
        size: '9pt',
        superScript: true,
      }),
      new TextRun({
        text: ').',
        size: '9pt',
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
  }),
  new Paragraph({
    children: [
      new TextRun({
        text: 'The 2023 Philippine Clinical Practice Guidelines on Osteoporosis recommends treatment of post-menopausal women with the following: (1) A fragility fracture (2) T-score ≤ -2.5 in the lumbar spine, total hip, femoral neck, or distal radius, (3) low bone density (also called osteopenia) whose 10-year probability of hip fracture is ≥ 1.25 %, or whose risk for major osteoporotic fractures is ≥ 3.75 %. The proposed therapeutic thresholds are for clinical guidance only; the decision to treat must still be made on a case-to-case basis.',
        size: '9pt',
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
  }),
  blank,
  new Paragraph({
    children: [
      new TextRun({
        text: '10-year probability of fractures is calculated based on the US-adapted WHO Fracture Risk Assessment Tool (FRAX',
        size: '9pt',
      }),
      new TextRun({
        text: 'TM',
        size: '9pt',
        superScript: true,
      }),
      new TextRun({
        text: ').',
        size: '9pt',
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
  }),
  new Paragraph({
    children: [
      new TextRun({
        text: 'The US National Osteoporosis Foundation recommends treatment of post-menopausal women and men age 50 or older with the following: 1) A hip or vertebral (clinical or morphometric) fracture, (2) T-score ≤ -2.5 in the femoral neck or spine after excluding secondary causes of osteoporosis, (3) low bone density (also called osteopenia) whose 10-year probability of hip fracture is ≥ 3 %, or whose risk for other bone fractures is greater than 20 %. The proposed therapeutic thresholds are for clinical guidance only; the decision to treat must still be made on a case-to-case basis.',
        size: '9pt',
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
  }),
];

const riskFactors = () => [
  new Paragraph({
    children: [
      new TextRun({
        text: 'The following are risk factors that may be related to your patient’s low bone density:',
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
  }),
  new Paragraph({
    children: [
      new TextRun({
        text: 'her sex, ',
      }),
      new TextRun({
        text: 'Asian race, ',
      }),
      new TextRun({
        text: 'advanced age (>70 years), ',
      }),
      new TextRun({
        text: 'low BMI (<18.5 kg/m',
      }),
      new TextRun({
        text: '2',
        superScript: true,
      }),
      new TextRun({
        text: '), ',
      }),
      new TextRun({
        text: 'estrogen deficiency (',
      }),
      new TextRun({
        text: 'x', // Input
      }),
      new TextRun({
        text: ' years), ',
      }),
      new TextRun({
        text: ' and low dietary calcium intake',
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
  }),
];

const previousStudy = () => [
  new Paragraph({
    children: [
      new TextRun({
        text: 'Compared to the previous study of ',
        size: '10pt',
      }),
      new TextRun({
        text: 'June 30, 2022',
        bold: true,
        size: '10pt',
      }),
      new TextRun({
        text: ', ',
        size: '10pt',
      }),
      new TextRun({
        text: 'with proper cross calibration to Lunar iDXA, ',
        size: '10pt',
      }),
      new TextRun({
        text: 'the following are observed:',
        size: '10pt',
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
  }),
  new Paragraph({
    children: [
      new TextRun({
        text: 'A 0.057 g/cm',
        size: '10pt',
      }),
      new TextRun({
        text: '2',
        size: '10pt',
        superScript: true,
      }),
      new TextRun({
        text: ' (7.6 %) ',
        size: '10pt',
      }),
      new TextRun({
        text: 'decrease',
        bold: true,
        size: '10pt',
      }),
      new TextRun({
        text: ' in L1 – L4 BMD which is ',
        size: '10pt',
      }),
      new TextRun({
        text: 'significant',
        bold: true,
        size: '10pt',
      }),
      new TextRun({
        text: ' since it is greater than the 0.013 g/cm',
        size: '10pt',
      }),
      new TextRun({
        text: '2',
        size: '10pt',
        superScript: true,
      }),
      new TextRun({
        text: ' calculated least significant change (LSC) for the lumbar spine in this densitometry unit.',
        size: '10pt',
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
    numbering: {
      reference: 'previous-study-numbering',
      level: 0,
    },
  }),
  new Paragraph({
    children: [
      new TextRun({
        text: 'A 0.021 g/cm',
        size: '10pt',
      }),
      new TextRun({
        text: '2',
        size: '10pt',
        superScript: true,
      }),
      new TextRun({
        text: ' (2.4 %) ',
        size: '10pt',
      }),
      new TextRun({
        text: 'decrease',
        bold: true,
        size: '10pt',
      }),
      new TextRun({
        text: ' in the right total hip BMD which is ',
        size: '10pt',
      }),
      new TextRun({
        text: 'significant',
        bold: true,
        size: '10pt',
      }),
      new TextRun({
        text: ' since this is greater than the 0.010 g/cm',
        size: '10pt',
      }),
      new TextRun({
        text: '2',
        size: '10pt',
        superScript: true,
      }),
      new TextRun({
        text: ' calculated least significant change (LSC) for the total hip in this densitometry unit.',
        size: '10pt',
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
    numbering: {
      reference: 'previous-study-numbering',
      level: 0,
    },
  }),
  new Paragraph({
    children: [
      new TextRun({
        text: 'A 0.074 g/cm',
        size: '10pt',
      }),
      new TextRun({
        text: '2',
        size: '10pt',
        superScript: true,
      }),
      new TextRun({
        text: ' (8.3 %) ',
        size: '10pt',
      }),
      new TextRun({
        text: 'decrease',
        bold: true,
        size: '10pt',
      }),
      new TextRun({
        text: ' in the left total hip BMD which is ',
        size: '10pt',
      }),
      new TextRun({
        text: 'significant',
        bold: true,
        size: '10pt',
      }),
      new TextRun({
        text: ' since this is greater than the 0.010 g/cm',
        size: '10pt',
      }),
      new TextRun({
        text: '2',
        size: '10pt',
        superScript: true,
      }),
      new TextRun({
        text: ' calculated least significant change (LSC) for the total hip in this densitometry unit.',
        size: '10pt',
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
    numbering: {
      reference: 'previous-study-numbering',
      level: 0,
    },
  }),
];

const recommendation = () => [
  new Paragraph({
    children: [
      new TextRun({
        text: 'Recommendation: ',
        bold: true,
      }),
      new TextRun({
        text: 'Appropriate pharmacologic measures in addition to calcium and vitamin D3 may be given, if there are no contraindications. Regular physical activity with a combination of exercise types and fall prevention are advised. Evaluation for secondary causes of bone loss is recommended since the Z-score of the ___ are ≤ -2.0.',
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
  }),
  blank,
  new Paragraph({
    children: [
      new TextRun({
        text: 'Recommendations: ',
        bold: true,
      }),
      new TextRun({
        text: 'Optimize dietary/supplementary calcium and vitamin D3, if there are no contraindications. Regular physical activity with a combination of exercise types are advised.',
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
  }),
];

const followUpStudy = () =>
  new Paragraph({
    children: [
      new TextRun({
        text: 'Follow-up study: ',
        bold: true,
      }),
      new TextRun({
        text: 'Whatever modes of intervention are opted, there is a need for follow-up bone density test after 1 year to monitor the rate of bone loss and assess response to therapy.',
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
  });

const closing = [
  new Paragraph({
    children: [
      new TextRun({
        text: 'We certainly hope that your management questions were fully addressed by this initial screening procedure.',
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
  }),
  blank,
  new Paragraph({
    children: [
      new TextRun({
        text: 'Thank you.',
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
  }),
];

const createDocument = () =>
  new Document({
    styles: {
      default: {
        document: {
          run: {
            size: '11pt',
            font: 'Calibri',
          },
        },
      },
    },
    numbering: {
      config: [
        {
          levels: [
            {
              level: 0,
              format: LevelFormat.DECIMAL,
              text: '%1)',
              alignment: AlignmentType.START,
              style: {
                paragraph: {
                  indent: {
                    left: convertInchesToTwip(1),
                    hanging: convertInchesToTwip(0.25),
                  },
                },
              },
            },
          ],
          reference: 'previous-study-numbering',
        },
      ],
    },
    sections: [
      {
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: 'This report has been approved electronically. Information contained in this document is CONFIDENTIAL',
                    bold: true,
                    size: '8pt',
                  }),
                ],
                alignment: AlignmentType.CENTER,
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: '',
                    size: '6pt',
                  }),
                  new TextRun({
                    text: 'Ortigas Ave., Pasig City, Philippines 1605 / +63 (02) 8-988-1000 / mail@themedicalcity.com',
                    break: 1,
                    size: '8pt',
                  }),
                ],
                alignment: AlignmentType.CENTER,
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: 'Owned and Operated by Professional Services Inc. (PSI)',
                    size: '8pt',
                  }),
                ],
                alignment: AlignmentType.CENTER,
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: '',
                    size: '6pt',
                  }),
                  new TextRun({
                    children: [
                      'Page ',
                      PageNumber.CURRENT,
                      ' of ',
                      PageNumber.TOTAL_PAGES,
                    ],
                    break: 1,
                    size: '8pt',
                  }),
                ],
                alignment: AlignmentType.CENTER,
              }),
            ],
          }),
        },
        children: [
          title,
          blank,
          salutation,
          blank,
          ...introduction,
          blank,
          testResultTable(),
          blank,
          ...totalBodyComposition(),
          blank,
          whoClassificationTable,
          blank,
          ...interpretation(),
          blank,
          ...assessment(),
          blank,
          fracture(),
          blank,
          ...fractureProbability,
          blank,
          ...riskFactors(),
          blank,
          ...previousStudy(),
          blank,
          ...recommendation(),
          blank,
          followUpStudy(),
          blank,
          ...closing,
        ],
        properties: {
          page: {
            margin: {
              top: '0.98in',
              bottom: '0.98in',
              left: '0.35in',
              right: '0.35in',
              footer: '0.25in',
            },
            size: {
              height: '11in',
              width: '8.5in',
              orientation: 'portrait',
            },
          },
        },
      },
    ],
  });

export const generateDocxFile = () => {
  const document = createDocument();

  Packer.toBlob(document).then((blob) => {
    saveAs(blob, 'DxaReport.docx');
  });
};
