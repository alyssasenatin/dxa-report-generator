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
import {
  BmiClassification,
  ForearmTestResult,
  LeftTestResult,
  LumbarTestResult,
  MenopausalStatus,
  Race,
  ReportType,
  RightTestResult,
  Sex,
  ShowZScores,
  TestResult,
} from '../../types';
import { getBmdResult } from '../DxaReportForm/helpers';

const blank = new Paragraph('');

const title = ({ bmd: totalBodyBmd }: TestResult) =>
  new Paragraph({
    children: [
      new TextRun({
        text: 'BONE DENSITOMETRY',
        bold: true,
        size: '12pt',
      }),
      ...(totalBodyBmd
        ? [
            new TextRun({
              text: ' AND TOTAL BODY COMPOSITION',
              bold: true,
              size: '12pt',
            }),
          ]
        : []),
      new TextRun({
        text: ' REPORT',
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

const introduction = ({ bmd: totalBodyBmd }: TestResult) => [
  new Paragraph({
    children: [
      new TextRun({
        text: 'Your patient underwent bone mineral density (BMD)',
      }),
      ...(totalBodyBmd
        ? [
            new TextRun({
              text: ' and total body composition',
            }),
          ]
        : []),
      new TextRun({
        text: ' testing at The Medical City Bone Densitometry Unit using the HOLOGIC Horizon W Dual Energy X-ray Absorptiometry (fan beam x-ray).',
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

const lumbarSiteResult = ({
  ageMatchedPercent,
  ageMatchedZScore,
  bmd,
  lumbarSite,
  youngAdultPercent,
  youngAdultTScore,
}: LumbarTestResult) =>
  bmd
    ? [
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
                      text: `${lumbarSite.length === 4 || lumbarSite.length === 0 ? 'L1 - L4' : lumbarSite.map((site) => `${site}`).join(', ')}`,
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
              children: [
                testResultTableCell(
                  parseFloat(bmd.toString()).toFixed(1) ?? '',
                  true
                ),
              ],
              width: {
                size: convertInchesToTwip(1.13),
                type: WidthType.DXA,
              },
            }),
            new TableCell({
              children: [
                testResultTableCell(
                  parseFloat(youngAdultTScore.toString()).toFixed(1) ?? '',
                  true
                ),
              ],
              width: {
                size: convertInchesToTwip(1),
                type: WidthType.DXA,
              },
            }),
            new TableCell({
              children: [
                testResultTableCell(
                  parseFloat(youngAdultPercent.toString()).toFixed(1) ?? '',
                  true
                ),
              ],
              width: {
                size: convertInchesToTwip(1),
                type: WidthType.DXA,
              },
            }),
            new TableCell({
              children: [
                testResultTableCell(
                  parseFloat(ageMatchedZScore.toString()).toFixed(1) ?? '',
                  true
                ),
              ],
              width: {
                size: convertInchesToTwip(1),
                type: WidthType.DXA,
              },
            }),
            new TableCell({
              children: [
                testResultTableCell(
                  parseFloat(ageMatchedPercent.toString()).toFixed(1) ?? '',
                  true
                ),
              ],
              width: {
                size: convertInchesToTwip(1),
                type: WidthType.DXA,
              },
            }),
          ],
        }),
      ]
    : [];

const rightAndLeftSiteResult = (
  {
    ageMatchedPercent: leftZPercent,
    ageMatchedZScore: leftZScore,
    bmd: leftBmd,
    leftSite,
    youngAdultPercent: leftTPercent,
    youngAdultTScore: leftTScore,
  }: LeftTestResult,
  {
    ageMatchedPercent: rightZPercent,
    ageMatchedZScore: rightZScore,
    bmd: rightBmd,
    rightSite,
    youngAdultPercent: rightTPercent,
    youngAdultTScore: rightTScore,
  }: RightTestResult
) =>
  leftBmd && rightBmd
    ? [
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
                      text: rightSite,
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
              children: [
                testResultTableCell(
                  parseFloat(rightBmd.toString()).toFixed(1) ?? '',
                  true
                ),
              ],
              width: {
                size: convertInchesToTwip(1.13),
                type: WidthType.DXA,
              },
            }),
            new TableCell({
              children: [
                testResultTableCell(
                  parseFloat(rightTScore.toString()).toFixed(1) ?? '',
                  true
                ),
              ],
              width: {
                size: convertInchesToTwip(1),
                type: WidthType.DXA,
              },
            }),
            new TableCell({
              children: [
                testResultTableCell(
                  parseFloat(rightTPercent.toString()).toFixed(1) ?? '',
                  true
                ),
              ],
              width: {
                size: convertInchesToTwip(1),
                type: WidthType.DXA,
              },
            }),
            new TableCell({
              children: [
                testResultTableCell(
                  parseFloat(rightZScore.toString()).toFixed(1) ?? '',
                  true
                ),
              ],
              width: {
                size: convertInchesToTwip(1),
                type: WidthType.DXA,
              },
            }),
            new TableCell({
              children: [
                testResultTableCell(
                  parseFloat(rightZPercent.toString()).toFixed(1) ?? '',
                  true
                ),
              ],
              width: {
                size: convertInchesToTwip(1),
                type: WidthType.DXA,
              },
            }),
          ],
        }),
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
                      text: leftSite,
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
              children: [
                testResultTableCell(
                  parseFloat(leftBmd.toString()).toFixed(1) ?? '',
                  true
                ),
              ],
              width: {
                size: convertInchesToTwip(1.13),
                type: WidthType.DXA,
              },
            }),
            new TableCell({
              children: [
                testResultTableCell(
                  parseFloat(leftTScore.toString()).toFixed(1) ?? '',
                  true
                ),
              ],
              width: {
                size: convertInchesToTwip(1),
                type: WidthType.DXA,
              },
            }),
            new TableCell({
              children: [
                testResultTableCell(
                  parseFloat(leftTPercent.toString()).toFixed(1) ?? '',
                  true
                ),
              ],
              width: {
                size: convertInchesToTwip(1),
                type: WidthType.DXA,
              },
            }),
            new TableCell({
              children: [
                testResultTableCell(
                  parseFloat(leftZScore.toString()).toFixed(1) ?? '',
                  true
                ),
              ],
              width: {
                size: convertInchesToTwip(1),
                type: WidthType.DXA,
              },
            }),
            new TableCell({
              children: [
                testResultTableCell(
                  parseFloat(leftZPercent.toString()).toFixed(1) ?? '',
                  true
                ),
              ],
              width: {
                size: convertInchesToTwip(1),
                type: WidthType.DXA,
              },
            }),
          ],
        }),
      ]
    : [];

const forearmSiteResult = ({
  ageMatchedPercent,
  ageMatchedZScore,
  bmd,
  forearmSite,
  youngAdultPercent,
  youngAdultTScore,
}: ForearmTestResult) =>
  bmd
    ? [
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: forearmSite,
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
              children: [
                testResultTableCell(
                  parseFloat(bmd.toString()).toFixed(1) ?? '',
                  true
                ),
              ],
              width: {
                size: convertInchesToTwip(1.13),
                type: WidthType.DXA,
              },
            }),
            new TableCell({
              children: [
                testResultTableCell(
                  parseFloat(youngAdultTScore.toString()).toFixed(1) ?? '',
                  true
                ),
              ],
              width: {
                size: convertInchesToTwip(1),
                type: WidthType.DXA,
              },
            }),
            new TableCell({
              children: [
                testResultTableCell(
                  parseFloat(youngAdultPercent.toString()).toFixed(1) ?? '',
                  true
                ),
              ],
              width: {
                size: convertInchesToTwip(1),
                type: WidthType.DXA,
              },
            }),
            new TableCell({
              children: [
                testResultTableCell(
                  parseFloat(ageMatchedZScore.toString()).toFixed(1) ?? '',
                  true
                ),
              ],
              width: {
                size: convertInchesToTwip(1),
                type: WidthType.DXA,
              },
            }),
            new TableCell({
              children: [
                testResultTableCell(
                  parseFloat(ageMatchedPercent.toString()).toFixed(1) ?? '',
                  true
                ),
              ],
              width: {
                size: convertInchesToTwip(1),
                type: WidthType.DXA,
              },
            }),
          ],
        }),
      ]
    : [];

const totalBodyResult = ({
  ageMatchedPercent,
  ageMatchedZScore,
  bmd,
  youngAdultPercent,
  youngAdultTScore,
}: TestResult) =>
  bmd
    ? [
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
              children: [
                testResultTableCell(
                  parseFloat(bmd.toString()).toFixed(1) ?? '',
                  true
                ),
              ],
              width: {
                size: convertInchesToTwip(1.13),
                type: WidthType.DXA,
              },
            }),
            new TableCell({
              children: [
                testResultTableCell(
                  parseFloat(youngAdultTScore.toString()).toFixed(1) ?? '',
                  true
                ),
              ],
              width: {
                size: convertInchesToTwip(1),
                type: WidthType.DXA,
              },
            }),
            new TableCell({
              children: [
                testResultTableCell(
                  parseFloat(youngAdultPercent.toString()).toFixed(1) ?? '',
                  true
                ),
              ],
              width: {
                size: convertInchesToTwip(1),
                type: WidthType.DXA,
              },
            }),
            new TableCell({
              children: [
                testResultTableCell(
                  parseFloat(ageMatchedZScore.toString()).toFixed(1) ?? '',
                  true
                ),
              ],
              width: {
                size: convertInchesToTwip(1),
                type: WidthType.DXA,
              },
            }),
            new TableCell({
              children: [
                testResultTableCell(
                  parseFloat(ageMatchedPercent.toString()).toFixed(1) ?? '',
                  true
                ),
              ],
              width: {
                size: convertInchesToTwip(1),
                type: WidthType.DXA,
              },
            }),
          ],
        }),
      ]
    : [];

const testResultTableBody = (
  forearm: ForearmTestResult,
  left: LeftTestResult,
  lumbar: LumbarTestResult,
  right: RightTestResult,
  totalBody: TestResult
) => [
  ...lumbarSiteResult(lumbar),
  ...rightAndLeftSiteResult(left, right),
  ...forearmSiteResult(forearm),
  ...totalBodyResult(totalBody),
];

const testResultTable = (
  forearm: ForearmTestResult,
  left: LeftTestResult,
  lumbar: LumbarTestResult,
  right: RightTestResult,
  totalBody: TestResult
) =>
  new Table({
    alignment: AlignmentType.CENTER,
    columnWidths: [
      convertInchesToTwip(1.89),
      convertInchesToTwip(1.13),
      convertInchesToTwip(1),
    ],
    rows: [
      ...testResultTableHeader,
      ...testResultTableBody(forearm, left, lumbar, right, totalBody),
    ],
  });

const totalBodyComposition = (
  bmi: number,
  bmiClassification: BmiClassification,
  boneMineral: number,
  fat: number,
  lean: number,
  { bmd: totalBodyBmd }: TestResult,
  totalBodyMass: number
) =>
  totalBodyBmd
    ? [
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
              text: bmi.toFixed(1),
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
              text: bmiClassification,
            }),
            new TextRun({
              text: '), Total body mass based from DXA = ',
            }),
            new TextRun({
              text: parseFloat(totalBodyMass.toString()).toFixed(1),
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
              text: parseFloat(fat.toString()).toFixed(1),
            }),
            new TextRun({
              text: ' kg (',
            }),
            new TextRun({
              text: ((fat / totalBodyMass) * 100).toFixed(1),
            }),
            new TextRun({
              text: ' %); Lean = ',
            }),
            new TextRun({
              text: parseFloat(lean.toString()).toFixed(1),
            }),
            new TextRun({
              text: ' kg (',
            }),
            new TextRun({
              text: ((lean / totalBodyMass) * 100).toFixed(1),
            }),
            new TextRun({
              text: ' %); Bone Mineral = ',
            }),
            new TextRun({
              text: parseFloat(boneMineral.toString()).toFixed(1),
            }),
            new TextRun({
              text: ' kg (',
            }),
            new TextRun({
              text: ((boneMineral / totalBodyMass) * 100).toFixed(1), // Input
            }),
            new TextRun({
              text: ' %)',
            }),
          ],
          indent: {
            start: '0.35in',
          },
        }),
        blank,
      ]
    : [];

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

const interpretation = (
  {
    ageMatchedPercent: forearmZPercent,
    ageMatchedZScore: forearmZScore,
    bmd: forearmBmd,
    youngAdultPercent: forearmTPercent,
    youngAdultTScore: forearmTScore,
  }: ForearmTestResult,
  {
    ageMatchedPercent: leftZPercent,
    ageMatchedZScore: leftZScore,
    bmd: leftBmd,
    youngAdultPercent: leftTPercent,
    youngAdultTScore: leftTScore,
  }: LeftTestResult,
  {
    ageMatchedPercent: lumbarZPercent,
    ageMatchedZScore: lumbarZScore,
    bmd: lumbarBmd,
    lumbarSite,
    youngAdultPercent: lumbarTPercent,
    youngAdultTScore: lumbarTScore,
  }: LumbarTestResult,
  {
    ageMatchedPercent: rightZPercent,
    ageMatchedZScore: rightZScore,
    bmd: rightBmd,
    rightSite,
    youngAdultPercent: rightTPercent,
    youngAdultTScore: rightTScore,
  }: RightTestResult,
  showZScores: ShowZScores,
  {
    ageMatchedPercent: totalBodyZPercent,
    ageMatchedZScore: totalBodyZScore,
    bmd: totalBodyBmd,
    youngAdultPercent: totalBodyTPercent,
    youngAdultTScore: totalBodyTScore,
  }: TestResult
) => [
  // Lumbar
  ...(lumbarBmd
    ? [
        new Paragraph({
          children: [
            new TextRun({
              text: 'The most representative BMD of the lumbar spine comes from ',
            }),
            new TextRun({
              text:
                lumbarSite.length === 4
                  ? 'L1 - L4'
                  : lumbarSite.map((site) => `${site}`).join(', '),
            }),
            new TextRun({
              text: '. This total BMD value of ',
            }),
            new TextRun({
              text: parseFloat(lumbarBmd.toString()).toFixed(1),
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
              text: parseFloat(lumbarTScore.toString()).toFixed(1),
            }),
            ...(showZScores === ShowZScores.SHOW_BOTH_T_Z_SCORES
              ? [
                  new TextRun({
                    text: ' and Z-score: ',
                  }),
                  new TextRun({
                    text: parseFloat(lumbarZScore.toString()).toFixed(1),
                  }),
                ]
              : []),
            new TextRun({
              text: ') indicates ',
            }),
            ...(100 - lumbarTPercent > 0
              ? [
                  new TextRun({
                    text: 'a ',
                  }),
                  new TextRun({
                    text: parseFloat((100 - lumbarTPercent).toString()).toFixed(
                      1
                    ),
                  }),
                  new TextRun({
                    text: ' %',
                  }),
                ]
              : [
                  new TextRun({
                    text: 'no',
                  }),
                ]),
            new TextRun({
              text: ' diminution from the mean peak BMD of a young adult aged 20 – 45 and ',
            }),
            ...(100 - lumbarZPercent > 0
              ? [
                  new TextRun({
                    text: parseFloat((100 - lumbarZPercent).toString()).toFixed(
                      1
                    ),
                  }),
                  new TextRun({
                    text: ' %',
                  }),
                ]
              : [
                  new TextRun({
                    text: 'not',
                  }),
                ]),
            new TextRun({
              text: ' diminished when compared to adults of similar age, weight, and race (age-matched).',
            }),
          ],
          alignment: AlignmentType.JUSTIFIED,
        }),
        blank,
      ]
    : []),
  // Femoral neck / total hip
  ...(rightBmd && leftBmd
    ? [
        new Paragraph({
          children: [
            new TextRun({
              text: 'The right and left ',
            }),
            new TextRun({
              text: rightSite,
            }),
            new TextRun({
              text: ' BMDs of ',
            }),
            new TextRun({
              text: parseFloat(rightBmd.toString()).toFixed(1),
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
              text: parseFloat(leftBmd.toString()).toFixed(1),
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
              text: parseFloat(rightTScore.toString()).toFixed(1),
            }),
            new TextRun({
              text: ' right, ',
            }),
            new TextRun({
              text: parseFloat(leftTScore.toString()).toFixed(1),
            }),
            new TextRun({
              text: ' left',
            }),
            ...(showZScores === ShowZScores.SHOW_BOTH_T_Z_SCORES
              ? [
                  new TextRun({
                    text: ' and Z-scores: ',
                  }),
                  new TextRun({
                    text: parseFloat(rightZScore.toString()).toFixed(1),
                  }),
                  new TextRun({
                    text: ' right, ',
                  }),
                  new TextRun({
                    text: parseFloat(leftZScore.toString()).toFixed(1),
                  }),
                  new TextRun({
                    text: ' left',
                  }),
                ]
              : []),
            new TextRun({
              text: ') respectively are ',
            }),
            ...(100 - rightTPercent > 0 || 100 - leftTPercent > 0
              ? [
                  new TextRun({
                    text: parseFloat((100 - rightTPercent).toString()).toFixed(
                      1
                    ),
                  }),
                  new TextRun({
                    text: ' % and ',
                  }),
                  new TextRun({
                    text: parseFloat((100 - leftTPercent).toString()).toFixed(
                      1
                    ),
                  }),
                  new TextRun({
                    text: ' %',
                  }),
                ]
              : [
                  new TextRun({
                    text: 'not',
                  }),
                ]),
            new TextRun({
              text: ' diminished relative to the mean peak BMD of a young adult aged 20 – 45, and ',
            }),
            ...(100 - rightZPercent > 0 || 100 - leftZPercent > 0
              ? [
                  new TextRun({
                    text: parseFloat((100 - rightZPercent).toString()).toFixed(
                      1
                    ),
                  }),
                  new TextRun({
                    text: ' % and ',
                  }),
                  new TextRun({
                    text: parseFloat((100 - leftZPercent).toString()).toFixed(
                      1
                    ),
                  }),
                  new TextRun({
                    text: ' %',
                  }),
                ]
              : [
                  new TextRun({
                    text: 'not',
                  }),
                ]),
            new TextRun({
              text: ' diminished when compared to adults of similar age, weight, and race (age-matched).',
            }),
          ],
          alignment: AlignmentType.JUSTIFIED,
        }),
        blank,
      ]
    : []),
  // Forearm
  ...(forearmBmd && !totalBodyBmd
    ? [
        new Paragraph({
          children: [
            new TextRun({
              text: 'The nondominant forearm 33 % radius BMD of ',
            }),
            new TextRun({
              text: parseFloat(forearmBmd.toString()).toFixed(1),
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
              text: parseFloat(forearmTScore.toString()).toFixed(1),
            }),
            ...(showZScores === ShowZScores.SHOW_BOTH_T_Z_SCORES
              ? [
                  new TextRun({
                    text: ' and Z-score: ',
                  }),
                  new TextRun({
                    text: parseFloat(forearmZScore.toString()).toFixed(1),
                  }),
                ]
              : []),
            new TextRun({
              text: ') is ',
            }),
            new TextRun({
              text: parseFloat((100 - forearmTPercent).toString()).toFixed(1),
            }),
            new TextRun({
              text: ' % below the young adult mean BMD and ',
            }),
            ...(100 - forearmZPercent > 0
              ? [
                  new TextRun({
                    text: parseFloat(
                      (100 - forearmZPercent).toString()
                    ).toFixed(1),
                  }),
                  new TextRun({
                    text: ' %',
                  }),
                ]
              : [
                  new TextRun({
                    text: 'not',
                  }),
                ]),
            new TextRun({
              text: ' diminished when compared to adults of similar age, weight, and race (age-matched).',
            }),
          ],
          alignment: AlignmentType.JUSTIFIED,
        }),
        blank,
      ]
    : []),
  // Forearm and total body
  ...(forearmBmd && totalBodyBmd
    ? [
        new Paragraph({
          children: [
            new TextRun({
              text: 'The nondominant forearm 33 % radius and total body BMDs of ',
            }),
            new TextRun({
              text: parseFloat(forearmBmd.toString()).toFixed(1),
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
              text: parseFloat(totalBodyBmd.toString()).toFixed(1),
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
              text: parseFloat(forearmTScore.toString()).toFixed(1),
            }),
            new TextRun({
              text: ', ',
            }),
            new TextRun({
              text: parseFloat(totalBodyTScore.toString()).toFixed(1),
            }),
            ...(showZScores === ShowZScores.SHOW_BOTH_T_Z_SCORES
              ? [
                  new TextRun({
                    text: ' and Z-scores: ',
                  }),
                  new TextRun({
                    text: parseFloat(forearmZScore.toString()).toFixed(1),
                  }),
                  new TextRun({
                    text: ', ',
                  }),
                  new TextRun({
                    text: parseFloat(totalBodyZScore.toString()).toFixed(1),
                  }),
                ]
              : []),
            new TextRun({
              text: ') respectively are ',
            }),
            new TextRun({
              text: parseFloat((100 - forearmTPercent).toString()).toFixed(1),
            }),
            new TextRun({
              text: ' % and ',
            }),
            new TextRun({
              text: parseFloat((100 - totalBodyTPercent).toString()).toFixed(1),
            }),
            new TextRun({
              text: ' % below the young adult mean BMD, and ',
            }),
            ...(100 - forearmZPercent > 0 || 100 - totalBodyZPercent > 0
              ? [
                  new TextRun({
                    text: parseFloat(
                      (100 - forearmZPercent).toString()
                    ).toFixed(1),
                  }),
                  new TextRun({
                    text: ' % and ',
                  }),
                  new TextRun({
                    text: parseFloat(
                      (100 - totalBodyZPercent).toString()
                    ).toFixed(1),
                  }),
                  new TextRun({
                    text: ' %',
                  }),
                ]
              : [
                  new TextRun({
                    text: 'not',
                  }),
                ]),
            new TextRun({
              text: ' diminished when compared to adults of similar age, weight, and race (age-matched).',
            }),
          ],
          alignment: AlignmentType.JUSTIFIED,
        }),
        blank,
      ]
    : []),
];

const assessment = (
  age: number,
  {
    ageMatchedZScore: forearmZScore,
    youngAdultTScore: forearmTScore,
  }: ForearmTestResult,
  {
    ageMatchedZScore: leftZScore,
    youngAdultTScore: leftTScore,
  }: LeftTestResult,
  {
    ageMatchedZScore: lumbarZScore,
    youngAdultTScore: lumbarTScore,
  }: LumbarTestResult,
  menopausalStatus: MenopausalStatus,
  {
    ageMatchedZScore: rightZScore,
    youngAdultTScore: rightTScore,
  }: RightTestResult,
  sex: Sex,
  { ageMatchedZScore: totalBodyZScore }: TestResult
) => {
  const hasTScore = forearmTScore || leftTScore || lumbarTScore || rightTScore;
  const hasZScore =
    forearmZScore ||
    leftZScore ||
    lumbarZScore ||
    rightZScore ||
    totalBodyZScore;

  const validInput =
    sex === Sex.MALE
      ? age && hasTScore && hasZScore
      : hasTScore && hasZScore && menopausalStatus;

  if (!validInput) return [];

  const manYoungerThan50 = sex === Sex.MALE && age < 50;
  const preMenopausalWoman =
    sex === Sex.FEMALE && menopausalStatus === MenopausalStatus.PRE_MENOPAUSAL;

  const lowestZScore = Math.min(
    forearmZScore,
    leftZScore,
    lumbarZScore,
    rightZScore,
    totalBodyZScore
  );

  return [
    ...(manYoungerThan50 || preMenopausalWoman
      ? [
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
                text:
                  lowestZScore > -2.0
                    ? 'within the expected range for age'
                    : 'below the expected range for age',
                bold: true,
              }),
              new TextRun({
                text: ' based on the ISCD guidelines for ',
              }),
              new TextRun({
                text: preMenopausalWoman
                  ? 'pre-menopausal women'
                  : 'men younger than 50 years old',
                bold: true,
              }),
              new TextRun({
                text: '.',
                bold: true,
              }),
            ],
            alignment: AlignmentType.JUSTIFIED,
          }),
        ]
      : [
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
                text:
                  sex === Sex.FEMALE
                    ? getBmdResult(
                        Math.min(
                          forearmTScore,
                          leftTScore,
                          lumbarTScore,
                          rightTScore
                        )
                      )
                    : getBmdResult(
                        Math.min(leftTScore, rightTScore, lumbarTScore)
                      ),
                bold: true,
              }),
              new TextRun({
                text: ' based on the WHO classification for ',
              }),
              new TextRun({
                text:
                  sex === Sex.FEMALE &&
                  menopausalStatus === MenopausalStatus.PERI_MENOPAUSAL
                    ? 'peri-menopausal women'
                    : sex === Sex.FEMALE &&
                        menopausalStatus === MenopausalStatus.POST_MENOPAUSAL
                      ? 'post-menopausal women'
                      : 'men aged 50 and older',
                bold: true,
              }),
              new TextRun({
                text: '.',
                bold: true,
              }),
            ],
            alignment: AlignmentType.JUSTIFIED,
          }),
        ]),
  ];
};

const fracture = (hipFractureRisk: number, majorBoneFractureRisk: number) =>
  new Paragraph({
    children: [
      new TextRun({
        text: 'The 10-year probability of developing a hip fracture is ',
      }),
      new TextRun({
        text: parseFloat(hipFractureRisk.toString()).toFixed(1),
        bold: true,
      }),
      new TextRun({
        text: ' %',
        bold: true,
      }),
      new TextRun({
        text: ' while the 10-year probability of any major bone fracture (spine, forearm, hip or shoulder) is ',
      }),
      new TextRun({
        text: parseFloat(majorBoneFractureRisk.toString()).toFixed(1),
        bold: true,
      }),
      new TextRun({
        text: ' %',
        bold: true,
      }),
      new TextRun({
        text: ' based on the standardized T-score of the femoral neck. Note: These values apply to previously untreated patients.',
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
  });

const fractureProbability = (menopausalStatus: MenopausalStatus, sex: Sex) => [
  ...(sex === Sex.FEMALE &&
  (menopausalStatus === MenopausalStatus.PERI_MENOPAUSAL ||
    menopausalStatus === MenopausalStatus.POST_MENOPAUSAL)
    ? [
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
      ]
    : [
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
      ]),
];

const riskFactors = (
  age: number,
  bmi: number,
  race: Race,
  reportType: ReportType,
  sex: Sex
) =>
  reportType === ReportType.BASELINE
    ? [
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
            ...(sex === Sex.FEMALE
              ? [
                  new TextRun({
                    text: 'her sex, ',
                  }),
                ]
              : []),
            ...(race === Race.ASIAN
              ? [
                  new TextRun({
                    text: 'Asian race, ',
                  }),
                ]
              : []),
            ...(age > 70
              ? [
                  new TextRun({
                    text: 'advanced age (>70 years), ',
                  }),
                ]
              : []),
            ...(bmi < 18.5
              ? [
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
                ]
              : []),
            ...(sex === Sex.FEMALE && age - 55 > 0
              ? [
                  new TextRun({
                    text: 'estrogen deficiency (',
                  }),
                  new TextRun({
                    text: (age - 55).toString(),
                  }),
                  new TextRun({
                    text: ' years), ',
                  }),
                ]
              : []),
            new TextRun({
              text: 'low dietary calcium intake',
            }),
          ],
          alignment: AlignmentType.JUSTIFIED,
        }),
      ]
    : [];

const previousStudy = (dateOfPreviousStudy: string, reportType: ReportType) =>
  reportType === ReportType.FOLLOW_UP
    ? [
        new Paragraph({
          children: [
            new TextRun({
              text: 'Compared to the previous study of ',
              size: '10pt',
            }),
            new TextRun({
              text: new Date(dateOfPreviousStudy).toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }),
              bold: true,
              size: '10pt',
            }),
            new TextRun({
              text: ', ',
              size: '10pt',
            }),
            ...(new Date(dateOfPreviousStudy) < new Date('2022-07-01')
              ? [
                  new TextRun({
                    text: 'with proper cross calibration to Lunar iDXA, ',
                    size: '10pt',
                  }),
                ]
              : []),
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
      ]
    : [];

const recommendation = (
  {
    ageMatchedZScore: forearmZScore,
    forearmSite,
    youngAdultTScore: forearmTScore,
  }: ForearmTestResult,
  hipFractureRisk: number,
  {
    ageMatchedZScore: leftZScore,
    leftSite,
    youngAdultTScore: leftTScore,
  }: LeftTestResult,
  {
    ageMatchedZScore: lumbarZScore,
    youngAdultTScore: lumbarTScore,
  }: LumbarTestResult,
  majorBoneFractureRisk: number,
  {
    ageMatchedZScore: rightZScore,
    rightSite,
    youngAdultTScore: rightTScore,
  }: RightTestResult,
  {
    ageMatchedZScore: totalBodyZScore,
    youngAdultTScore: totalBodyTScore,
  }: TestResult
) => {
  if (
    Math.min(
      forearmTScore,
      leftTScore,
      lumbarTScore,
      rightTScore,
      totalBodyTScore
    ) >= -1
  ) {
    return [
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
      blank,
    ];
  }

  const lowestZScore = Math.min(
    forearmZScore,
    leftZScore,
    lumbarZScore,
    rightZScore,
    totalBodyZScore
  );

  if (hipFractureRisk >= 1.25 || majorBoneFractureRisk >= 3.75) {
    return [
      new Paragraph({
        children: [
          new TextRun({
            text: 'Recommendation: ',
            bold: true,
          }),
          new TextRun({
            text: 'Appropriate pharmacologic measures in addition to calcium and vitamin D3 may be given, if there are no contraindications. Regular physical activity with a combination of exercise types and fall prevention are advised.',
          }),
          ...(lowestZScore <= -2
            ? [
                new TextRun({
                  text: ' Evaluation for secondary causes of bone loss is recommended since the Z-score of the ',
                }),
                new TextRun({
                  text:
                    forearmZScore == lowestZScore
                      ? `${forearmSite.toLowerCase()} forearm (33% radius)`
                      : leftZScore == lowestZScore
                        ? `left ${leftSite}`
                        : lumbarZScore == lowestZScore
                          ? 'lumbar spine'
                          : rightZScore == lowestZScore
                            ? `right ${rightSite}`
                            : 'total body',
                }),
                new TextRun({
                  text: ' are ≤ -2.0.',
                }),
              ]
            : []),
        ],
        alignment: AlignmentType.JUSTIFIED,
      }),
      blank,
    ];
  }

  return [];
};

const followUpStudy = (
  { youngAdultTScore: forearmTScore }: ForearmTestResult,
  hipFractureRisk: number,
  { youngAdultTScore: leftTScore }: LeftTestResult,
  { youngAdultTScore: lumbarTScore }: LumbarTestResult,
  majorBoneFractureRisk: number,
  { youngAdultTScore: rightTScore }: RightTestResult,
  { youngAdultTScore: totalBodyTScore }: TestResult
) =>
  new Paragraph({
    children: [
      new TextRun({
        text: 'Follow-up study: ',
        bold: true,
      }),
      new TextRun({
        text: 'Whatever modes of intervention are opted, there is a need for follow-up bone density test after ',
      }),
      new TextRun({
        text:
          Math.min(
            forearmTScore,
            leftTScore,
            lumbarTScore,
            rightTScore,
            totalBodyTScore
          ) >= -1
            ? '3 years'
            : hipFractureRisk >= 1.25 || majorBoneFractureRisk >= 3.75
              ? '1 year'
              : '2 years',
      }),
      new TextRun({
        text: ' to monitor the rate of bone loss',
      }),
      ...(Math.min(
        forearmTScore,
        leftTScore,
        lumbarTScore,
        rightTScore,
        totalBodyTScore
      ) < -1
        ? [
            new TextRun({
              text: ' and assess response to therapy',
            }),
          ]
        : []),
      new TextRun({
        text: '.',
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

const createDocument = (
  age: number,
  bmi: number,
  bmiClassification: BmiClassification,
  boneMineral: number,
  dateOfPreviousStudy: string,
  fat: number,
  forearm: ForearmTestResult,
  hipFractureRisk: number,
  lean: number,
  left: LeftTestResult,
  lumbar: LumbarTestResult,
  majorBoneFractureRisk: number,
  menopausalStatus: MenopausalStatus,
  race: Race,
  reportType: ReportType,
  right: RightTestResult,
  sex: Sex,
  showZScores: ShowZScores,
  totalBody: TestResult,
  totalBodyMass: number
) =>
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
          title(totalBody),
          blank,
          salutation,
          blank,
          ...introduction(totalBody),
          blank,
          testResultTable(forearm, left, lumbar, right, totalBody),
          blank,
          ...totalBodyComposition(
            bmi,
            bmiClassification,
            boneMineral,
            fat,
            lean,
            totalBody,
            totalBodyMass
          ),
          whoClassificationTable,
          blank,
          ...interpretation(
            forearm,
            left,
            lumbar,
            right,
            showZScores,
            totalBody
          ),
          ...assessment(
            age,
            forearm,
            left,
            lumbar,
            menopausalStatus,
            right,
            sex,
            totalBody
          ),
          blank,
          fracture(hipFractureRisk, majorBoneFractureRisk),
          blank,
          ...fractureProbability(menopausalStatus, sex),
          blank,
          ...riskFactors(age, bmi, race, reportType, sex),
          ...previousStudy(dateOfPreviousStudy, reportType),
          blank,
          ...recommendation(
            forearm,
            hipFractureRisk,
            left,
            lumbar,
            majorBoneFractureRisk,
            right,
            totalBody
          ),
          followUpStudy(
            forearm,
            hipFractureRisk,
            left,
            lumbar,
            majorBoneFractureRisk,
            right,
            totalBody
          ),
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

export const generateDocxFile = (
  age: number,
  bmi: number,
  bmiClassification: BmiClassification,
  boneMineral: number,
  dateOfPreviousStudy: string,
  fat: number,
  forearm: ForearmTestResult,
  hipFractureRisk: number,
  lean: number,
  left: LeftTestResult,
  lumbar: LumbarTestResult,
  majorBoneFractureRisk: number,
  menopausalStatus: MenopausalStatus,
  race: Race,
  reportType: ReportType,
  right: RightTestResult,
  sex: Sex,
  showZScores: ShowZScores,
  totalBody: TestResult,
  totalBodyMass: number
) => {
  const document = createDocument(
    age,
    bmi,
    bmiClassification,
    boneMineral,
    dateOfPreviousStudy,
    fat,
    forearm,
    hipFractureRisk,
    lean,
    left,
    lumbar,
    majorBoneFractureRisk,
    menopausalStatus,
    race,
    reportType,
    right,
    sex,
    showZScores,
    totalBody,
    totalBodyMass
  );

  Packer.toBlob(document).then((blob) => {
    saveAs(blob, 'DxaReport.docx');
  });
};
