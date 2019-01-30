export class TreeData {
  public static nodes =  [{
      'itemId': 19970,
      'id': 'suite_19970',
      'type': 'suite',
      'order': 1,
      'prefix': 'TBB',
      'name': 'Outbound Calls from HP/SP',
      'children': [{
        'itemId': 21432,
        'id': 'suite_21432',
        'type': 'suite',
        'order': 1,
        'prefix': 'TBB',
        'name': 'Outbound Calls from HP (Polycom/Cisco) (same default codec - 711u)',
        'children': [{
          'itemId': 26628,
          'id': 'case_26628',
          'type': 'case',
          'order': 1,
          'prefix': 'TBB',
          'externalId': 8439,
          'name': 'TBB-8439: Call from Polycom (711u) to PSTN (711u)',
          'children': [],
          'count': 1
        }, {
          'itemId': 26630,
          'id': 'case_26630',
          'type': 'case',
          'order': 2,
          'prefix': 'TBB',
          'externalId': 8440,
          'name': 'TBB-8440: Call from Cisco SPA (711u) to PSTN (711u)',
          'children': [],
          'count': 1
        }, {
          'itemId': 26629,
          'id': 'case_26629',
          'type': 'case',
          'order': 3,
          'prefix': 'TBB',
          'externalId': 35343,
          'name': 'TBB-35343: Call from Cisco ATA 122 (711u) to PSTN (711u)',
          'children': [],
          'count': 1
        }],
        'count': 3
      }, {
        'itemId': 21430,
        'id': 'suite_21430',
        'type': 'suite',
        'order': 2,
        'prefix': 'TBB',
        'name': 'Outbound Calls from SP DL/FreeDL (Win/Mac)',
        'children': [{
          'itemId': 26658,
          'id': 'case_26658',
          'type': 'case',
          'order': 1,
          'prefix': 'TBB',
          'externalId': 18452,
          'name': 'TBB-18452: Call from SP Win (711u, NON-SECURE) to PSTN (711u) and send DTMF',
          'children': [],
          'count': 1
        }, {
          'itemId': 26654,
          'id': 'case_26654',
          'type': 'case',
          'order': 2,
          'prefix': 'TBB',
          'externalId': 45885,
          'name': 'TBB-45885: Call from SP Win (711u, SECURE/TLS) to PSTN (711u) and send DTMF',
          'children': [],
          'count': 1
        }, {
          'itemId': 26657,
          'id': 'case_26657',
          'type': 'case',
          'order': 3,
          'prefix': 'TBB',
          'externalId': 19124,
          'name': 'TBB-19124: Call from SP Mac (711u, NON-SECURE) to PSTN (711u) and send DTMF',
          'children': [],
          'count': 1
        }, {
          'itemId': 26656,
          'id': 'case_26656',
          'type': 'case',
          'order': 4,
          'prefix': 'TBB',
          'externalId': 45886,
          'name': 'TBB-45886: Call from SP Mac (711u, SECURE/TLS) to PSTN (711u) and send DTMF',
          'children': [],
          'count': 1
        }, {
          'itemId': 26655,
          'id': 'suite_26655',
          'type': 'suite',
          'order': 5,
          'prefix': 'TBB',
          'name': 'Additional SP/Free DL',
          'children': [{
            'itemId': 35278,
            'id': 'case_35278',
            'type': 'case',
            'order': 1,
            'prefix': 'TBB',
            'externalId': 30005,
            'name': 'TBB-30005: Check that FreeDL feature is switched ON for new accounts on eligible tiers',
            'children': [],
            'count': 1
          }, {
            'itemId': 35279,
            'id': 'suite_35279',
            'type': 'suite',
            'order': 2,
            'prefix': 'TBB',
            'name': 'Allow outbound calling over Free SP DL without e911',
            'children': [{
              'itemId': 41608,
              'id': 'case_41608',
              'type': 'case',
              'order': 1,
              'prefix': 'TBB',
              'externalId': 31427,
              'name': 'TBB-31427: Call from  Free SP DL to DL in the same POD',
              'children': [],
              'count': 1
            }, {
              'itemId': 41607,
              'id': 'case_41607',
              'type': 'case',
              'order': 2,
              'prefix': 'TBB',
              'externalId': 32867,
              'name': 'TBB-32867: Call from Free SP DL to PSTN',
              'children': [],
              'count': 1
            }],
            'count': 2
          }],
          'count': 3
        }],
        'count': 7
      }, {
        'itemId': 21431,
        'id': 'suite_21431',
        'type': 'suite',
        'order': 3,
        'prefix': 'TBB',
        'name': 'PSTN ringback tone hot-fix (6.6->7.0)',
        'children': [{
          'itemId': 26640,
          'id': 'case_26640',
          'type': 'case',
          'order': 1,
          'prefix': 'TBB',
          'externalId': 35243,
          'name': 'TBB-35243: DB: New parameter 629 to switch audio tone',
          'children': [],
          'count': 1
        }, {
          'itemId': 26644,
          'id': 'case_26644',
          'type': 'case',
          'order': 2,
          'prefix': 'TBB',
          'externalId': 35244,
          'name': 'TBB-35244: US: Parameter 629 = \'natone_silence.wav\'',
          'children': [],
          'count': 1
        }, {
          'itemId': 26642,
          'id': 'case_26642',
          'type': 'case',
          'order': 3,
          'prefix': 'TBB',
          'externalId': 35245,
          'name': 'TBB-35245: UK: Parameter 629 = \'natone_silence.wav\'',
          'children': [],
          'count': 1
        }, {
          'itemId': 26643,
          'id': 'case_26643',
          'type': 'case',
          'order': 4,
          'prefix': 'TBB',
          'externalId': 35250,
          'name': 'TBB-35250: FR: Parameter 629 = \'natone_silence.wav\'',
          'children': [],
          'count': 1
        }, {
          'itemId': 26641,
          'id': 'case_26641',
          'type': 'case',
          'order': 5,
          'prefix': 'TBB',
          'externalId': 35326,
          'name': 'TBB-35326: Remove parameter 629 from userservices tb',
          'children': [],
          'count': 1
        }],
        'count': 5
      }],
      'count': 15
    }, {
      'itemId': 19968,
      'id': 'suite_19968',
      'type': 'suite',
      'order': 2,
      'prefix': 'TBB',
      'name': 'Outbound Calls from Mobile Devices',
      'children': [{
        'itemId': 21384,
        'id': 'suite_21384',
        'type': 'suite',
        'order': 1,
        'prefix': 'TBB',
        'name': 'Android: VOIP, WiFi, PCMU (G.711u)',
        'children': [{
          'itemId': 26509,
          'id': 'case_26509',
          'type': 'case',
          'order': 1,
          'prefix': 'TBB',
          'externalId': 45887,
          'name': 'TBB-45887: Call from Android (SECURE/TLS) to PSTN (G.711u)',
          'children': [],
          'count': 1
        }, {
          'itemId': 26510,
          'id': 'case_26510',
          'type': 'case',
          'order': 2,
          'prefix': 'TBB',
          'externalId': 8491,
          'name': 'TBB-8491: Call from Android (NON-SECURE) to PSTN (G.711u)',
          'children': [],
          'count': 1
        }, {
          'itemId': 26508,
          'id': 'case_26508',
          'type': 'case',
          'order': 3,
          'prefix': 'TBB',
          'externalId': 8492,
          'name': 'TBB-8492: Call to HP (G.711u)',
          'children': [],
          'count': 1
        }, {
          'itemId': 26512,
          'id': 'case_26512',
          'type': 'case',
          'order': 4,
          'prefix': 'TBB',
          'externalId': 8494,
          'name': 'TBB-8494: Call to PSTN and put callee on hold',
          'children': [],
          'count': 1
        }, {
          'itemId': 26511,
          'id': 'case_26511',
          'type': 'case',
          'order': 5,
          'prefix': 'TBB',
          'externalId': 8495,
          'name': 'TBB-8495: Call to HP and put caller on hold',
          'children': [],
          'count': 1
        }, {
          'itemId': 26517,
          'id': 'case_26517',
          'type': 'case',
          'order': 6,
          'prefix': 'TBB',
          'externalId': 8499,
          'name': 'TBB-8499: Call to SP (G.711u)',
          'children': [],
          'count': 1
        }, {
          'itemId': 26515,
          'id': 'case_26515',
          'type': 'case',
          'order': 7,
          'prefix': 'TBB',
          'externalId': 8500,
          'name': 'TBB-8500: Call to SP and put caller on hold',
          'children': [],
          'count': 1
        }, {
          'itemId': 26518,
          'id': 'case_26518',
          'type': 'case',
          'order': 8,
          'prefix': 'TBB',
          'externalId': 8501,
          'name': 'TBB-8501: Call to Extension PIN',
          'children': [],
          'count': 1
        }, {
          'itemId': 26516,
          'id': 'case_26516',
          'type': 'case',
          'order': 9,
          'prefix': 'TBB',
          'externalId': 8502,
          'name': 'TBB-8502: Call to RC Account number without DL (forwarding to PSTN number)',
          'children': [],
          'count': 1
        }, {
          'itemId': 26514,
          'id': 'case_26514',
          'type': 'case',
          'order': 10,
          'prefix': 'TBB',
          'externalId': 8503,
          'name': 'TBB-8503: Call to Extension using DTMF',
          'children': [],
          'count': 1
        }, {
          'itemId': 26519,
          'id': 'case_26519',
          'type': 'case',
          'order': 11,
          'prefix': 'TBB',
          'externalId': 8505,
          'name': 'TBB-8505: Mute a call from callee side',
          'children': [],
          'count': 1
        }, {
          'itemId': 26520,
          'id': 'case_26520',
          'type': 'case',
          'order': 12,
          'prefix': 'TBB',
          'externalId': 8506,
          'name': 'TBB-8506: Mute a call from caller side',
          'children': [],
          'count': 1
        }],
        'count': 12
      }, {
        'itemId': 21382,
        'id': 'suite_21382',
        'type': 'suite',
        'order': 2,
        'prefix': 'TBB',
        'name': 'iPhone: VOIP, WiFi, PCMU (G.711u)',
        'children': [{
          'itemId': 26522,
          'id': 'case_26522',
          'type': 'case',
          'order': 1,
          'prefix': 'TBB',
          'externalId': 45889,
          'name': 'TBB-45889: Call from iPhone (SECURE, TLS) to PSTN (G.711u)',
          'children': [],
          'count': 1
        }, {
          'itemId': 26521,
          'id': 'case_26521',
          'type': 'case',
          'order': 2,
          'prefix': 'TBB',
          'externalId': 18495,
          'name': 'TBB-18495: Call from iPhone (NON-SECURE) to PSTN (G.711u)',
          'children': [],
          'count': 1
        }, {
          'itemId': 26524,
          'id': 'case_26524',
          'type': 'case',
          'order': 3,
          'prefix': 'TBB',
          'externalId': 18496,
          'name': 'TBB-18496: Call to HP (G.711u)',
          'children': [],
          'count': 1
        }, {
          'itemId': 26523,
          'id': 'case_26523',
          'type': 'case',
          'order': 4,
          'prefix': 'TBB',
          'externalId': 18497,
          'name': 'TBB-18497: Call to PSTN and put callee on hold',
          'children': [],
          'count': 1
        }, {
          'itemId': 26525,
          'id': 'case_26525',
          'type': 'case',
          'order': 5,
          'prefix': 'TBB',
          'externalId': 18498,
          'name': 'TBB-18498: Call to HP and put caller on hold',
          'children': [],
          'count': 1
        }, {
          'itemId': 26526,
          'id': 'case_26526',
          'type': 'case',
          'order': 6,
          'prefix': 'TBB',
          'externalId': 18502,
          'name': 'TBB-18502: Call to SP (G.711u)',
          'children': [],
          'count': 1
        }, {
          'itemId': 26529,
          'id': 'case_26529',
          'type': 'case',
          'order': 7,
          'prefix': 'TBB',
          'externalId': 18503,
          'name': 'TBB-18503: Call to SP and put caller on hold',
          'children': [],
          'count': 1
        }, {
          'itemId': 26530,
          'id': 'case_26530',
          'type': 'case',
          'order': 8,
          'prefix': 'TBB',
          'externalId': 18504,
          'name': 'TBB-18504: Call to Extension PIN',
          'children': [],
          'count': 1
        }, {
          'itemId': 26528,
          'id': 'case_26528',
          'type': 'case',
          'order': 9,
          'prefix': 'TBB',
          'externalId': 18505,
          'name': 'TBB-18505: Call to RC Account number without DL',
          'children': [],
          'count': 1
        }, {
          'itemId': 26527,
          'id': 'case_26527',
          'type': 'case',
          'order': 10,
          'prefix': 'TBB',
          'externalId': 18506,
          'name': 'TBB-18506: Call to Extension using DTMF',
          'children': [],
          'count': 1
        }, {
          'itemId': 26531,
          'id': 'case_26531',
          'type': 'case',
          'order': 11,
          'prefix': 'TBB',
          'externalId': 18509,
          'name': 'TBB-18509: Mute a call from callee side',
          'children': [],
          'count': 1
        }, {
          'itemId': 26532,
          'id': 'case_26532',
          'type': 'case',
          'order': 12,
          'prefix': 'TBB',
          'externalId': 18510,
          'name': 'TBB-18510: Mute a call from caller side',
          'children': [],
          'count': 1
        }],
        'count': 12
      }, {
        'itemId': 21383,
        'id': 'case_21383',
        'type': 'case',
        'order': 3,
        'prefix': 'TBB',
        'externalId': 35573,
        'name': 'TBB-35573: Backward compatibility (old mobile app with new servers)',
        'children': [],
        'count': 1
      }],
      'count': 25
    }, {
      'itemId': 19971,
      'id': 'suite_19971',
      'type': 'suite',
      'order': 3,
      'prefix': 'TBB',
      'name': 'Call to special numbers (911, 933, 611, 411, 311)',
      'children': [{
        'itemId': 21413,
        'id': 'suite_21413',
        'type': 'suite',
        'order': 1,
        'prefix': 'TBB',
        'name': 'US emergency calls (911, 933)',
        'children': [{
          'itemId': 26602,
          'id': 'suite_26602',
          'type': 'suite',
          'order': 1,
          'prefix': 'TBB',
          'name': 'US emergency call (911) routing from HP',
          'children': [{
            'itemId': 35254,
            'id': 'case_35254',
            'type': 'case',
            'order': 1,
            'prefix': 'TBB',
            'externalId': 23598,
            'name': 'TBB-23598: 911 call',
            'children': [],
            'count': 1
          }, {
            'itemId': 35255,
            'id': 'case_35255',
            'type': 'case',
            'order': 2,
            'prefix': 'TBB',
            'externalId': 23757,
            'name': 'TBB-23757: 911 emergency call back routed directly to the phone',
            'children': [],
            'count': 1
          }],
          'count': 2
        }, {
          'itemId': 26601,
          'id': 'case_26601',
          'type': 'case',
          'order': 2,
          'prefix': 'TBB',
          'externalId': 23996,
          'name': 'TBB-23996: 911 call from iOS',
          'children': [],
          'count': 1
        }, {
          'itemId': 26603,
          'id': 'case_26603',
          'type': 'case',
          'order': 3,
          'prefix': 'TBB',
          'externalId': 23997,
          'name': 'TBB-23997: 911 call from Android',
          'children': [],
          'count': 1
        }, {
          'itemId': 26600,
          'id': 'case_26600',
          'type': 'case',
          'order': 4,
          'prefix': 'TBB',
          'externalId': 8450,
          'name': 'TBB-8450: 911 call from Spartan',
          'children': [],
          'count': 1
        }, {
          'itemId': 26605,
          'id': 'case_26605',
          'type': 'case',
          'order': 5,
          'prefix': 'TBB',
          'externalId': 23767,
          'name': 'TBB-23767: 911 RO from SP',
          'children': [],
          'count': 1
        }, {
          'itemId': 26604,
          'id': 'case_26604',
          'type': 'case',
          'order': 6,
          'prefix': 'TBB',
          'externalId': 24348,
          'name': 'TBB-24348: Emergency call w/o E911 information',
          'children': [],
          'count': 1
        }, {
          'itemId': 26607,
          'id': 'case_26607',
          'type': 'case',
          'order': 7,
          'prefix': 'TBB',
          'externalId': 24349,
          'name': 'TBB-24349: Regular call w/o E911 information',
          'children': [],
          'count': 1
        }, {
          'itemId': 26606,
          'id': 'case_26606',
          'type': 'case',
          'order': 8,
          'prefix': 'TBB',
          'externalId': 23760,
          'name': 'TBB-23760: Call to 933 (from HP)',
          'children': [],
          'count': 1
        }, {
          'itemId': 26608,
          'id': 'case_26608',
          'type': 'case',
          'order': 9,
          'prefix': 'TBB',
          'externalId': 8457,
          'name': 'TBB-8457: Call to 933 (from Spartan)',
          'children': [],
          'count': 1
        }, {
          'itemId': 26599,
          'id': 'suite_26599',
          'type': 'suite',
          'order': 10,
          'prefix': 'TBB',
          'name': 'Support 911 VoIP calling from TELUS mobile Apps',
          'children': [{
            'itemId': 35256,
            'id': 'suite_35256',
            'type': 'suite',
            'order': 1,
            'prefix': 'TBB',
            'name': 'iOS RCM',
            'children': [{
              'itemId': 41610,
              'id': 'suite_41610',
              'type': 'suite',
              'order': 1,
              'prefix': 'TBB',
              'name': 'iPhone',
              'children': [{
                'itemId': 44833,
                'id': 'suite_44833',
                'type': 'suite',
                'order': 1,
                'prefix': 'TBB',
                'name': 'No SIM card',
                'children': [{
                  'itemId': 46245,
                  'id': 'case_46245',
                  'type': 'case',
                  'order': 1,
                  'prefix': 'TBB',
                  'externalId': 35014,
                  'name': 'TBB-35014: Call 911 - Main number CLID - Ringback to main number',
                  'children': [],
                  'count': 1
                }, {
                  'itemId': 46246,
                  'id': 'case_46246',
                  'type': 'case',
                  'order': 2,
                  'prefix': 'TBB',
                  'externalId': 35015,
                  'name': 'TBB-35015: Call 911 - Direct number CLID - Ringback to direct number',
                  'children': [],
                  'count': 1
                }],
                'count': 2
              }, {
                'itemId': 44834,
                'id': 'suite_44834',
                'type': 'suite',
                'order': 2,
                'prefix': 'TBB',
                'name': 'Network awailable (SIM card inserted)',
                'children': [{
                  'itemId': 46342,
                  'id': 'case_46342',
                  'type': 'case',
                  'order': 1,
                  'prefix': 'TBB',
                  'externalId': 34920,
                  'name': 'TBB-34920: Using native phone dialer to reach 911',
                  'children': [],
                  'count': 1
                }],
                'count': 1
              }],
              'count': 3
            }, {
              'itemId': 41609,
              'id': 'suite_41609',
              'type': 'suite',
              'order': 2,
              'prefix': 'TBB',
              'name': 'iPad / iPod',
              'children': [{
                'itemId': 44775,
                'id': 'case_44775',
                'type': 'case',
                'order': 1,
                'prefix': 'TBB',
                'externalId': 35019,
                'name': 'TBB-35019: Call 911 - Main number CLID - Ringback to main number',
                'children': [],
                'count': 1
              }, {
                'itemId': 44776,
                'id': 'case_44776',
                'type': 'case',
                'order': 2,
                'prefix': 'TBB',
                'externalId': 35020,
                'name': 'TBB-35020: Call 911 - Direct number CLID - Ringback to direct number',
                'children': [],
                'count': 1
              }],
              'count': 2
            }],
            'count': 5
          }, {
            'itemId': 35257, 'id': 'suite_35257', 'type': 'suite', 'order': 2, 'prefix': 'TBB', 'name': 'Android RCM', 'children': [{
              'itemId': 41605,
              'id': 'suite_41605',
              'type': 'suite',
              'order': 1,
              'prefix': 'TBB',
              'name': 'Smartphone',
              'children': [{
                'itemId': 44873,
                'id': 'suite_44873',
                'type': 'suite',
                'order': 1,
                'prefix': 'TBB',
                'name': 'No network (or Radio Module DISABLED)',
                'children': [{
                  'itemId': 46255,
                  'id': 'case_46255',
                  'type': 'case',
                  'order': 1,
                  'prefix': 'TBB',
                  'externalId': 35021,
                  'name': 'TBB-35021: Call 911 - Main number CLID - Ringback to main number',
                  'children': [],
                  'count': 1
                }, {
                  'itemId': 46256,
                  'id': 'case_46256',
                  'type': 'case',
                  'order': 2,
                  'prefix': 'TBB',
                  'externalId': 35022,
                  'name': 'TBB-35022: Call 911 - Direct number CLID - Ringback to direct number',
                  'children': [],
                  'count': 1
                }],
                'count': 2
              }, {
                'itemId': 44874,
                'id': 'suite_44874',
                'type': 'suite',
                'order': 2,
                'prefix': 'TBB',
                'name': 'Network is available',
                'children': [{
                  'itemId': 46352,
                  'id': 'case_46352',
                  'type': 'case',
                  'order': 1,
                  'prefix': 'TBB',
                  'externalId': 35023,
                  'name': 'TBB-35023: Using native phone dialer to reach 911',
                  'children': [],
                  'count': 1
                }],
                'count': 1
              }],
              'count': 3
            }, {
              'itemId': 41606,
              'id': 'suite_41606',
              'type': 'suite',
              'order': 2,
              'prefix': 'TBB',
              'name': 'Tablet PC',
              'children': [{
                'itemId': 44762,
                'id': 'case_44762',
                'type': 'case',
                'order': 1,
                'prefix': 'TBB',
                'externalId': 35024,
                'name': 'TBB-35024: Call 911 - Main number CLID - Ringback to main number',
                'children': [],
                'count': 1
              }, {
                'itemId': 44760,
                'id': 'case_44760',
                'type': 'case',
                'order': 2,
                'prefix': 'TBB',
                'externalId': 35025,
                'name': 'TBB-35025: Call 911 - Direct number CLID - Ringback to direct number',
                'children': [],
                'count': 1
              }],
              'count': 2
            }], 'count': 5
          }],
          'count': 10
        }],
        'count': 20
      }, {
        'itemId': 21410,
        'id': 'suite_21410',
        'type': 'suite',
        'order': 2,
        'prefix': 'TBB',
        'name': 'Calls from US to UK emergency (112, 999)',
        'children': [{
          'itemId': 26609,
          'id': 'case_26609',
          'type': 'case',
          'order': 1,
          'prefix': 'TBB',
          'externalId': 23965,
          'name': 'TBB-23965: US call to 999 from HP',
          'children': [],
          'count': 1
        }, {
          'itemId': 26613,
          'id': 'case_26613',
          'type': 'case',
          'order': 2,
          'prefix': 'TBB',
          'externalId': 23775,
          'name': 'TBB-23775: US call to 112 from HP',
          'children': [],
          'count': 1
        }, {
          'itemId': 26610,
          'id': 'case_26610',
          'type': 'case',
          'order': 3,
          'prefix': 'TBB',
          'externalId': 23853,
          'name': 'TBB-23853: 999 RO from SP via US',
          'children': [],
          'count': 1
        }, {
          'itemId': 26612,
          'id': 'case_26612',
          'type': 'case',
          'order': 4,
          'prefix': 'TBB',
          'externalId': 23855,
          'name': 'TBB-23855: 112 RO from SP via US',
          'children': [],
          'count': 1
        }, {
          'itemId': 26611,
          'id': 'case_26611',
          'type': 'case',
          'order': 5,
          'prefix': 'TBB',
          'externalId': 23772,
          'name': 'TBB-23772: 999 RO from SW via US',
          'children': [],
          'count': 1
        }, {
          'itemId': 26614,
          'id': 'case_26614',
          'type': 'case',
          'order': 6,
          'prefix': 'TBB',
          'externalId': 23774,
          'name': 'TBB-23774: 112 RO from SW via US',
          'children': [],
          'count': 1
        }],
        'count': 6
      }, {
        'itemId': 21415,
        'id': 'suite_21415',
        'type': 'suite',
        'order': 3,
        'prefix': 'TBB',
        'name': 'Unified Glip: support emergency calling (9.0)',
        'children': [{
          'itemId': 26597,
          'id': 'suite_26597',
          'type': 'suite',
          'order': 1,
          'prefix': 'TBB',
          'name': 'US emergency call (911) routing from Unified Glip',
          'children': [{
            'itemId': 35181,
            'id': 'case_35181',
            'type': 'case',
            'order': 1,
            'prefix': 'TBB',
            'externalId': 44045,
            'name': 'TBB-44045: 911 call',
            'children': [],
            'count': 1
          }, {
            'itemId': 35182,
            'id': 'case_35182',
            'type': 'case',
            'order': 2,
            'prefix': 'TBB',
            'externalId': 44046,
            'name': 'TBB-44046: AN1 busy -> AN2',
            'children': [],
            'count': 1
          }, {
            'itemId': 35185,
            'id': 'case_35185',
            'type': 'case',
            'order': 3,
            'prefix': 'TBB',
            'externalId': 44047,
            'name': 'TBB-44047: AN1 timepout -> ECRC',
            'children': [],
            'count': 1
          }, {
            'itemId': 35184,
            'id': 'case_35184',
            'type': 'case',
            'order': 4,
            'prefix': 'TBB',
            'externalId': 44048,
            'name': 'TBB-44048: AN1, AN2 busy -> ECRC',
            'children': [],
            'count': 1
          }, {
            'itemId': 35183,
            'id': 'case_35183',
            'type': 'case',
            'order': 5,
            'prefix': 'TBB',
            'externalId': 44049,
            'name': 'TBB-44049: AN1 busy, AN2 timeout -> ECRC',
            'children': [],
            'count': 1
          }, {
            'itemId': 35186,
            'id': 'case_35186',
            'type': 'case',
            'order': 6,
            'prefix': 'TBB',
            'externalId': 44050,
            'name': 'TBB-44050: AN1, ECRC timeout',
            'children': [],
            'count': 1
          }, {
            'itemId': 35187,
            'id': 'case_35187',
            'type': 'case',
            'order': 7,
            'prefix': 'TBB',
            'externalId': 44051,
            'name': 'TBB-44051: AN1, AN2, ECRC busy',
            'children': [],
            'count': 1
          }],
          'count': 7
        }, {
          'itemId': 26594,
          'id': 'suite_26594',
          'type': 'suite',
          'order': 2,
          'prefix': 'TBB',
          'name': 'RC US emergency call and callback (911) Unified Glip specific',
          'children': [{
            'itemId': 35191,
            'id': 'case_35191',
            'type': 'case',
            'order': 1,
            'prefix': 'TBB',
            'externalId': 44029,
            'name': 'TBB-44029: Glip not linked with DL',
            'children': [],
            'count': 1
          }, {
            'itemId': 35189,
            'id': 'case_35189',
            'type': 'case',
            'order': 2,
            'prefix': 'TBB',
            'externalId': 44027,
            'name': 'TBB-44027: DL with registered emergency address (CLID)',
            'children': [],
            'count': 1
          }, {
            'itemId': 35192,
            'id': 'case_35192',
            'type': 'case',
            'order': 3,
            'prefix': 'TBB',
            'externalId': 44028,
            'name': 'TBB-44028: DL without registered emergency address (CLID)',
            'children': [],
            'count': 1
          }, {
            'itemId': 35188,
            'id': 'case_35188',
            'type': 'case',
            'order': 4,
            'prefix': 'TBB',
            'externalId': 44166,
            'name': 'TBB-44166: Call back for not answered call, taken on Unified Glip - Forward Calls',
            'children': [],
            'count': 1
          }, {
            'itemId': 35190,
            'id': 'case_35190',
            'type': 'case',
            'order': 5,
            'prefix': 'TBB',
            'externalId': 44167,
            'name': 'TBB-44167: Call back for not answered call, taken on Unified Glip - Take Messages Only',
            'children': [],
            'count': 1
          }, {
            'itemId': 35197,
            'id': 'case_35197',
            'type': 'case',
            'order': 6,
            'prefix': 'TBB',
            'externalId': 44168,
            'name': 'TBB-44168: Call back for not answered call, taken on Unified Glip - Play Announcement Only',
            'children': [],
            'count': 1
          }, {
            'itemId': 35193,
            'id': 'case_35193',
            'type': 'case',
            'order': 7,
            'prefix': 'TBB',
            'externalId': 44148,
            'name': 'TBB-44148: Call back for not answered call, taken on Unified Glip - AH, Forward Calls',
            'children': [],
            'count': 1
          }, {
            'itemId': 35194,
            'id': 'case_35194',
            'type': 'case',
            'order': 8,
            'prefix': 'TBB',
            'externalId': 44172,
            'name': 'TBB-44172: Call back for not answered call, taken on Unified Glip - AH, Take Messages Only',
            'children': [],
            'count': 1
          }, {
            'itemId': 35196,
            'id': 'case_35196',
            'type': 'case',
            'order': 9,
            'prefix': 'TBB',
            'externalId': 44173,
            'name': 'TBB-44173: Call back for not answered call, taken on Unified Glip - AH, Play Announcement Only',
            'children': [],
            'count': 1
          }, {
            'itemId': 35195,
            'id': 'case_35195',
            'type': 'case',
            'order': 10,
            'prefix': 'TBB',
            'externalId': 44174,
            'name': 'TBB-44174: Call back for not answered call, taken on Unified Glip - AH, Unconditional Forwarding',
            'children': [],
            'count': 1
          }, {
            'itemId': 35202,
            'id': 'case_35202',
            'type': 'case',
            'order': 11,
            'prefix': 'TBB',
            'externalId': 44175,
            'name': 'TBB-44175: Call back for not answered call, taken on Unified Glip - AR, time based, Forward Calls',
            'children': [],
            'count': 1
          }, {
            'itemId': 35199,
            'id': 'case_35199',
            'type': 'case',
            'order': 12,
            'prefix': 'TBB',
            'externalId': 44176,
            'name': 'TBB-44176: Call back for not answered call, taken on Unified Glip - AR, CLID based, Take Messages Only',
            'children': [],
            'count': 1
          }, {
            'itemId': 35200,
            'id': 'case_35200',
            'type': 'case',
            'order': 13,
            'prefix': 'TBB',
            'externalId': 44177,
            'name': 'TBB-44177: Call back for not answered call, taken on Unified Glip - AR, called number based, Play Announcement Only',
            'children': [],
            'count': 1
          }, {
            'itemId': 35201,
            'id': 'case_35201',
            'type': 'case',
            'order': 14,
            'prefix': 'TBB',
            'externalId': 44178,
            'name': 'TBB-44178: Call back for not answered call, taken on Unified Glip - AR, time based, Unconditional Forwarding',
            'children': [],
            'count': 1
          }, {
            'itemId': 35198,
            'id': 'case_35198',
            'type': 'case',
            'order': 15,
            'prefix': 'TBB',
            'externalId': 44149,
            'name': 'TBB-44149: Call back for not answered call, taken on HP',
            'children': [],
            'count': 1
          }, {
            'itemId': 35209,
            'id': 'case_35209',
            'type': 'case',
            'order': 16,
            'prefix': 'TBB',
            'externalId': 44150,
            'name': 'TBB-44150: Call back for not answered call, taken on Spartan',
            'children': [],
            'count': 1
          }, {
            'itemId': 35205,
            'id': 'case_35205',
            'type': 'case',
            'order': 17,
            'prefix': 'TBB',
            'externalId': 44171,
            'name': 'TBB-44171: Call back for not answered call from HP, taken on Unified Glip',
            'children': [],
            'count': 1
          }, {
            'itemId': 35204,
            'id': 'case_35204',
            'type': 'case',
            'order': 18,
            'prefix': 'TBB',
            'externalId': 44179,
            'name': 'TBB-44179: Call back for not answered call from Spartan, taken on Unified Glip',
            'children': [],
            'count': 1
          }, {
            'itemId': 35206,
            'id': 'case_35206',
            'type': 'case',
            'order': 19,
            'prefix': 'TBB',
            'externalId': 44151,
            'name': 'TBB-44151: Call back from blocked CLID number for not answered call, taken on Unified Glip',
            'children': [],
            'count': 1
          }, {
            'itemId': 35203,
            'id': 'case_35203',
            'type': 'case',
            'order': 20,
            'prefix': 'TBB',
            'externalId': 44152,
            'name': 'TBB-44152: Call back for not answered call, taken on Unified Glip, simultaneous forwarding',
            'children': [],
            'count': 1
          }, {
            'itemId': 35213,
            'id': 'case_35213',
            'type': 'case',
            'order': 21,
            'prefix': 'TBB',
            'externalId': 44153,
            'name': 'TBB-44153: Call back for answered call, taken on Unified Glip',
            'children': [],
            'count': 1
          }, {
            'itemId': 35210,
            'id': 'case_35210',
            'type': 'case',
            'order': 22,
            'prefix': 'TBB',
            'externalId': 44154,
            'name': 'TBB-44154: Call back for answered call, taken on HP',
            'children': [],
            'count': 1
          }, {
            'itemId': 35208,
            'id': 'case_35208',
            'type': 'case',
            'order': 23,
            'prefix': 'TBB',
            'externalId': 44155,
            'name': 'TBB-44155: Call back for answered call, taken on Spartan',
            'children': [],
            'count': 1
          }, {
            'itemId': 35211,
            'id': 'case_35211',
            'type': 'case',
            'order': 24,
            'prefix': 'TBB',
            'externalId': 44279,
            'name': 'TBB-44279: Call back for not answered call, taken on Mobile App',
            'children': [],
            'count': 1
          }, {
            'itemId': 35207,
            'id': 'case_35207',
            'type': 'case',
            'order': 25,
            'prefix': 'TBB',
            'externalId': 44156,
            'name': 'TBB-44156: Answered emergency call, call to another DL during 15 min, emergency call back after 15 min',
            'children': [],
            'count': 1
          }, {
            'itemId': 35217,
            'id': 'case_35217',
            'type': 'case',
            'order': 26,
            'prefix': 'TBB',
            'externalId': 44157,
            'name': 'TBB-44157: Answered emergency call, call back after 15 min, softphone notification is ON',
            'children': [],
            'count': 1
          }, {
            'itemId': 35216,
            'id': 'case_35216',
            'type': 'case',
            'order': 27,
            'prefix': 'TBB',
            'externalId': 44180,
            'name': 'TBB-44180: Call back for answered call, taken on Unified Glip - no announcement before connecting',
            'children': [],
            'count': 1
          }, {
            'itemId': 35215,
            'id': 'case_35215',
            'type': 'case',
            'order': 28,
            'prefix': 'TBB',
            'externalId': 44181,
            'name': 'TBB-44181: Call back for answered call from DL2',
            'children': [],
            'count': 1
          }, {
            'itemId': 35212,
            'id': 'case_35212',
            'type': 'case',
            'order': 29,
            'prefix': 'TBB',
            'externalId': 44442,
            'name': 'TBB-44442: DL with registered emergency address, softphones registration expired',
            'children': [],
            'count': 1
          }, {
            'itemId': 35214,
            'id': 'case_35214',
            'type': 'case',
            'order': 30,
            'prefix': 'TBB',
            'externalId': 45392,
            'name': 'TBB-45392: Glip linked with Spartan DL, call back for not answered call, taken on Spartan',
            'children': [],
            'count': 1
          }],
          'count': 30
        }, {
          'itemId': 26595,
          'id': 'suite_26595',
          'type': 'suite',
          'order': 3,
          'prefix': 'TBB',
          'name': 'RC UK/CA emergency callback Unified Glip specific',
          'children': [{
            'itemId': 35218,
            'id': 'case_35218',
            'type': 'case',
            'order': 1,
            'prefix': 'TBB',
            'externalId': 44169,
            'name': 'TBB-44169: Call back for not answered call, taken on Unified Glip - Forward Calls, RC UK',
            'children': [],
            'count': 1
          }, {
            'itemId': 35219,
            'id': 'case_35219',
            'type': 'case',
            'order': 2,
            'prefix': 'TBB',
            'externalId': 44170,
            'name': 'TBB-44170: Call back for not answered call, taken on Unified Glip - Forward Calls, RC CA',
            'children': [],
            'count': 1
          }],
          'count': 2
        }, {
          'itemId': 26598,
          'id': 'suite_26598',
          'type': 'suite',
          'order': 4,
          'prefix': 'TBB',
          'name': 'Unified Glip ATT/Telus/BT emergency call and callback, basic scenario',
          'children': [{
            'itemId': 35221,
            'id': 'case_35221',
            'type': 'case',
            'order': 1,
            'prefix': 'TBB',
            'externalId': 44294,
            'name': 'TBB-44294: Glip not linked with DL - ATT',
            'children': [],
            'count': 1
          }, {
            'itemId': 35222,
            'id': 'case_35222',
            'type': 'case',
            'order': 2,
            'prefix': 'TBB',
            'externalId': 44295,
            'name': 'TBB-44295: Glip not linked with DL - Telus',
            'children': [],
            'count': 1
          }, {
            'itemId': 35220,
            'id': 'case_35220',
            'type': 'case',
            'order': 3,
            'prefix': 'TBB',
            'externalId': 44296,
            'name': 'TBB-44296: Glip not linked with DL - BT',
            'children': [],
            'count': 1
          }, {
            'itemId': 35224,
            'id': 'case_35224',
            'type': 'case',
            'order': 4,
            'prefix': 'TBB',
            'externalId': 44297,
            'name': 'TBB-44297: DL with registered emergency address (CLID) - ATT',
            'children': [],
            'count': 1
          }, {
            'itemId': 35223,
            'id': 'case_35223',
            'type': 'case',
            'order': 5,
            'prefix': 'TBB',
            'externalId': 44298,
            'name': 'TBB-44298: DL without registered emergency address (CLID) - ATT',
            'children': [],
            'count': 1
          }, {
            'itemId': 35225,
            'id': 'case_35225',
            'type': 'case',
            'order': 6,
            'prefix': 'TBB',
            'externalId': 44299,
            'name': 'TBB-44299: DL with registered emergency address (CLID) - Telus',
            'children': [],
            'count': 1
          }, {
            'itemId': 35228,
            'id': 'case_35228',
            'type': 'case',
            'order': 7,
            'prefix': 'TBB',
            'externalId': 44300,
            'name': 'TBB-44300: DL without registered emergency address (CLID) - Telus',
            'children': [],
            'count': 1
          }, {
            'itemId': 35226,
            'id': 'case_35226',
            'type': 'case',
            'order': 8,
            'prefix': 'TBB',
            'externalId': 44301,
            'name': 'TBB-44301: DL with registered emergency address (CLID) - BT',
            'children': [],
            'count': 1
          }, {
            'itemId': 35227,
            'id': 'case_35227',
            'type': 'case',
            'order': 9,
            'prefix': 'TBB',
            'externalId': 44302,
            'name': 'TBB-44302: DL without registered emergency address (CLID) - BT',
            'children': [],
            'count': 1
          }],
          'count': 9
        }, {
          'itemId': 26596,
          'id': 'suite_26596',
          'type': 'suite',
          'order': 5,
          'prefix': 'TBB',
          'name': 'ATT/Telus/BT emergency call and callback (911) Unified Glip specific',
          'children': [{
            'itemId': 35231,
            'id': 'case_35231',
            'type': 'case',
            'order': 1,
            'prefix': 'TBB',
            'externalId': 44303,
            'name': 'TBB-44303: Call back for not answered call, taken on Unified Glip - Forward Calls',
            'children': [],
            'count': 1
          }, {
            'itemId': 35233,
            'id': 'case_35233',
            'type': 'case',
            'order': 2,
            'prefix': 'TBB',
            'externalId': 44304,
            'name': 'TBB-44304: Call back for not answered call, taken on Unified Glip - Take Messages Only',
            'children': [],
            'count': 1
          }, {
            'itemId': 35232,
            'id': 'case_35232',
            'type': 'case',
            'order': 3,
            'prefix': 'TBB',
            'externalId': 44305,
            'name': 'TBB-44305: Call back for not answered call, taken on Unified Glip - Play Announcement Only',
            'children': [],
            'count': 1
          }, {
            'itemId': 35230,
            'id': 'case_35230',
            'type': 'case',
            'order': 4,
            'prefix': 'TBB',
            'externalId': 44306,
            'name': 'TBB-44306: Call back for not answered call, taken on Unified Glip - AH, Forward Calls',
            'children': [],
            'count': 1
          }, {
            'itemId': 35229,
            'id': 'case_35229',
            'type': 'case',
            'order': 5,
            'prefix': 'TBB',
            'externalId': 44307,
            'name': 'TBB-44307: Call back for not answered call, taken on Unified Glip - AH, Take Messages Only',
            'children': [],
            'count': 1
          }, {
            'itemId': 35238,
            'id': 'case_35238',
            'type': 'case',
            'order': 6,
            'prefix': 'TBB',
            'externalId': 44308,
            'name': 'TBB-44308: Call back for not answered call, taken on Unified Glip - AH, Play Announcement Only',
            'children': [],
            'count': 1
          }, {
            'itemId': 35236,
            'id': 'case_35236',
            'type': 'case',
            'order': 7,
            'prefix': 'TBB',
            'externalId': 44309,
            'name': 'TBB-44309: Call back for not answered call, taken on Unified Glip - AH, Unconditional Forwarding',
            'children': [],
            'count': 1
          }, {
            'itemId': 35235,
            'id': 'case_35235',
            'type': 'case',
            'order': 8,
            'prefix': 'TBB',
            'externalId': 44310,
            'name': 'TBB-44310: Call back for not answered call, taken on Unified Glip - AR, time based, Forward Calls',
            'children': [],
            'count': 1
          }, {
            'itemId': 35237,
            'id': 'case_35237',
            'type': 'case',
            'order': 9,
            'prefix': 'TBB',
            'externalId': 44311,
            'name': 'TBB-44311: Call back for not answered call, taken on Unified Glip - AR, CLID based, Take Messages Only',
            'children': [],
            'count': 1
          }, {
            'itemId': 35234,
            'id': 'case_35234',
            'type': 'case',
            'order': 10,
            'prefix': 'TBB',
            'externalId': 44312,
            'name': 'TBB-44312: Call back for not answered call, taken on Unified Glip - AR, called number based, Play Announcement Only',
            'children': [],
            'count': 1
          }, {
            'itemId': 35241,
            'id': 'case_35241',
            'type': 'case',
            'order': 11,
            'prefix': 'TBB',
            'externalId': 44313,
            'name': 'TBB-44313: Call back for not answered call, taken on Unified Glip - AR, time based, Unconditional Forwarding',
            'children': [],
            'count': 1
          }, {
            'itemId': 35242,
            'id': 'case_35242',
            'type': 'case',
            'order': 12,
            'prefix': 'TBB',
            'externalId': 44314,
            'name': 'TBB-44314: Call back for not answered call, taken on HP',
            'children': [],
            'count': 1
          }, {
            'itemId': 35239,
            'id': 'case_35239',
            'type': 'case',
            'order': 13,
            'prefix': 'TBB',
            'externalId': 44315,
            'name': 'TBB-44315: Call back for not answered call, taken on Spartan',
            'children': [],
            'count': 1
          }, {
            'itemId': 35243,
            'id': 'case_35243',
            'type': 'case',
            'order': 14,
            'prefix': 'TBB',
            'externalId': 44316,
            'name': 'TBB-44316: Call back for not answered call from HP, taken on Unified Glip',
            'children': [],
            'count': 1
          }, {
            'itemId': 35240,
            'id': 'case_35240',
            'type': 'case',
            'order': 15,
            'prefix': 'TBB',
            'externalId': 44317,
            'name': 'TBB-44317: Call back for not answered call from Spartan, taken on Unified Glip',
            'children': [],
            'count': 1
          }, {
            'itemId': 35245,
            'id': 'case_35245',
            'type': 'case',
            'order': 16,
            'prefix': 'TBB',
            'externalId': 44318,
            'name': 'TBB-44318: Call back from blocked CLID number for not answered call, taken on Unified Glip',
            'children': [],
            'count': 1
          }, {
            'itemId': 35247,
            'id': 'case_35247',
            'type': 'case',
            'order': 17,
            'prefix': 'TBB',
            'externalId': 44319,
            'name': 'TBB-44319: Call back for not answered call, taken on Unified Glip, simultaneous forwarding',
            'children': [],
            'count': 1
          }, {
            'itemId': 35244,
            'id': 'case_35244',
            'type': 'case',
            'order': 18,
            'prefix': 'TBB',
            'externalId': 44320,
            'name': 'TBB-44320: Call back for answered call, taken on Unified Glip',
            'children': [],
            'count': 1
          }, {
            'itemId': 35249,
            'id': 'case_35249',
            'type': 'case',
            'order': 19,
            'prefix': 'TBB',
            'externalId': 44321,
            'name': 'TBB-44321: Call back for answered call, taken on HP',
            'children': [],
            'count': 1
          }, {
            'itemId': 35246,
            'id': 'case_35246',
            'type': 'case',
            'order': 20,
            'prefix': 'TBB',
            'externalId': 44322,
            'name': 'TBB-44322: Call back for answered call, taken on Spartan',
            'children': [],
            'count': 1
          }, {
            'itemId': 35250,
            'id': 'case_35250',
            'type': 'case',
            'order': 21,
            'prefix': 'TBB',
            'externalId': 44323,
            'name': 'TBB-44323: Call back for not answered call, taken on Mobile App',
            'children': [],
            'count': 1
          }, {
            'itemId': 35252,
            'id': 'case_35252',
            'type': 'case',
            'order': 22,
            'prefix': 'TBB',
            'externalId': 44324,
            'name': 'TBB-44324: Answered emergency call, call to another DL during 15 min, emergency call back after 15 min',
            'children': [],
            'count': 1
          }, {
            'itemId': 35248,
            'id': 'case_35248',
            'type': 'case',
            'order': 23,
            'prefix': 'TBB',
            'externalId': 44325,
            'name': 'TBB-44325: Answered emergency call, call back after 15 min, softphone notification is ON',
            'children': [],
            'count': 1
          }, {
            'itemId': 35253,
            'id': 'case_35253',
            'type': 'case',
            'order': 24,
            'prefix': 'TBB',
            'externalId': 44326,
            'name': 'TBB-44326: Call back for answered call, taken on Unified Glip - no announcement before connecting',
            'children': [],
            'count': 1
          }, {
            'itemId': 35251,
            'id': 'case_35251',
            'type': 'case',
            'order': 25,
            'prefix': 'TBB',
            'externalId': 44327,
            'name': 'TBB-44327: Call back for answered call from DL2',
            'children': [],
            'count': 1
          }],
          'count': 25
        }],
        'count': 73
      }, {
        'itemId': 21411,
        'id': 'suite_21411',
        'type': 'suite',
        'order': 4,
        'prefix': 'TBB',
        'name': 'Update TAS config to exclude 311 from special numbers list',
        'children': [{
          'itemId': 26637,
          'id': 'case_26637',
          'type': 'case',
          'order': 1,
          'prefix': 'TBB',
          'externalId': 43229,
          'name': 'TBB-43229: RLZ-18485 Update TAS config to exclude 311 from special numbers list (for Teachers College) - RC US',
          'children': [],
          'count': 1
        }, {
          'itemId': 26639,
          'id': 'case_26639',
          'type': 'case',
          'order': 2,
          'prefix': 'TBB',
          'externalId': 43230,
          'name': 'TBB-43230: RLZ-18485 Update TAS config to exclude 311 from special numbers list (for Teachers College) - TELUS',
          'children': [],
          'count': 1
        }, {
          'itemId': 26638,
          'id': 'case_26638',
          'type': 'case',
          'order': 3,
          'prefix': 'TBB',
          'externalId': 43231,
          'name': 'TBB-43231: RLZ-18485 Update TAS config to exclude 311 from special numbers list (for Teachers College) - call to 311 forwarded to PSTN',
          'children': [],
          'count': 1
        }],
        'count': 3
      }, {
        'itemId': 21414,
        'id': 'suite_21414',
        'type': 'suite',
        'order': 5,
        'prefix': 'TBB',
        'name': 'US directory assistance calls 411',
        'children': [{
          'itemId': 26620,
          'id': 'case_26620',
          'type': 'case',
          'order': 1,
          'prefix': 'TBB',
          'externalId': 23749,
          'name': 'TBB-23749: Call to 411 from DL',
          'children': [],
          'count': 1
        }, {
          'itemId': 26621,
          'id': 'case_26621',
          'type': 'case',
          'order': 2,
          'prefix': 'TBB',
          'externalId': 8458,
          'name': 'TBB-8458: Call to 411 from SP',
          'children': [],
          'count': 1
        }, {
          'itemId': 26622,
          'id': 'case_26622',
          'type': 'case',
          'order': 3,
          'prefix': 'TBB',
          'externalId': 24129,
          'name': 'TBB-24129: Call to 411 long numer from DL',
          'children': [],
          'count': 1
        }, {
          'itemId': 26623,
          'id': 'case_26623',
          'type': 'case',
          'order': 4,
          'prefix': 'TBB',
          'externalId': 23751,
          'name': 'TBB-23751: 411 calls SP RO',
          'children': [],
          'count': 1
        }, {
          'itemId': 26619,
          'id': 'case_26619',
          'type': 'case',
          'order': 5,
          'prefix': 'TBB',
          'externalId': 23752,
          'name': 'TBB-23752: 411 calls iOS RO',
          'children': [],
          'count': 1
        }, {
          'itemId': 26626,
          'id': 'case_26626',
          'type': 'case',
          'order': 6,
          'prefix': 'TBB',
          'externalId': 23753,
          'name': 'TBB-23753: 411 calls Android RO',
          'children': [],
          'count': 1
        }, {
          'itemId': 26625,
          'id': 'case_26625',
          'type': 'case',
          'order': 7,
          'prefix': 'TBB',
          'externalId': 24127,
          'name': 'TBB-24127: 411 call to long number Android RO',
          'children': [],
          'count': 1
        }, {
          'itemId': 26624,
          'id': 'case_26624',
          'type': 'case',
          'order': 8,
          'prefix': 'TBB',
          'externalId': 23754,
          'name': 'TBB-23754: 411 calls Service Web RO',
          'children': [],
          'count': 1
        }, {
          'itemId': 26627,
          'id': 'case_26627',
          'type': 'case',
          'order': 9,
          'prefix': 'TBB',
          'externalId': 33000,
          'name': 'TBB-33000: Per call billing transaction. 411 RC US  brand',
          'children': [],
          'count': 1
        }],
        'count': 9
      }, {
        'itemId': 21416,
        'id': 'suite_21416',
        'type': 'suite',
        'order': 6,
        'prefix': 'TBB',
        'name': 'Call to 611',
        'children': [{
          'itemId': 26631,
          'id': 'case_26631',
          'type': 'case',
          'order': 1,
          'prefix': 'TBB',
          'externalId': 24275,
          'name': 'TBB-24275: Call to 611 from HP',
          'children': [],
          'count': 1
        }, {
          'itemId': 26632,
          'id': 'case_26632',
          'type': 'case',
          'order': 2,
          'prefix': 'TBB',
          'externalId': 8455,
          'name': 'TBB-8455: Call to 611 (from DL in US location) from SP',
          'children': [],
          'count': 1
        }],
        'count': 2
      }, {
        'itemId': 21412,
        'id': 'case_21412',
        'type': 'case',
        'order': 7,
        'prefix': 'TBB',
        'externalId': 36768,
        'name': 'TBB-36768: RC US. Call to extension 1911',
        'children': [],
        'count': 1
      }],
      'count': 114
    }, {
      'itemId': 19969, 'id': 'suite_19969', 'type': 'suite', 'order': 4, 'prefix': 'TBB', 'name': 'CRS / Call Routing', 'children': [{
        'itemId': 21417, 'id': 'suite_21417', 'type': 'suite', 'order': 1, 'prefix': 'TBB', 'name': 'HTTP CRS Mode', 'children': [{
          'itemId': 26566,
          'id': 'suite_26566',
          'type': 'suite',
          'order': 1,
          'prefix': 'TBB',
          'name': 'TAS request creating',
          'children': [{
            'itemId': 35174,
            'id': 'suite_35174',
            'type': 'suite',
            'order': 1,
            'prefix': 'TBB',
            'name': 'P-Asserted-Identity (PAI)',
            'children': [{
              'itemId': 41622,
              'id': 'case_41622',
              'type': 'case',
              'order': 1,
              'prefix': 'TBB',
              'externalId': 38451,
              'name': 'TBB-38451: HTTP request from TAS to CRS: RingOut  to HP and to PSTN: PAI',
              'children': [],
              'count': 1
            }, {
              'itemId': 41621,
              'id': 'case_41621',
              'type': 'case',
              'order': 2,
              'prefix': 'TBB',
              'externalId': 38453,
              'name': 'TBB-38453: HTTP request from TAS to CRS: Voice Call HP -> 911: PAI',
              'children': [],
              'count': 1
            }, {
              'itemId': 41623,
              'id': 'case_41623',
              'type': 'case',
              'order': 3,
              'prefix': 'TBB',
              'externalId': 38448,
              'name': 'TBB-38448: HTTP request from TAS to CRS: Voice Call HP -> PSTN: PAI',
              'children': [],
              'count': 1
            }],
            'count': 3
          }, {
            'itemId': 35177,
            'id': 'case_35177',
            'type': 'case',
            'order': 2,
            'prefix': 'TBB',
            'externalId': 38439,
            'name': 'TBB-38439: HTTP request from TAS to CRS: Voice Call HP -> PSTN: inbound_carrier field',
            'children': [],
            'count': 1
          }, {
            'itemId': 35172,
            'id': 'case_35172',
            'type': 'case',
            'order': 3,
            'prefix': 'TBB',
            'externalId': 38418,
            'name': 'TBB-38418: HTTP request from TAS to CRS: Voice Call HP -> 999',
            'children': [],
            'count': 1
          }, {
            'itemId': 35173,
            'id': 'case_35173',
            'type': 'case',
            'order': 4,
            'prefix': 'TBB',
            'externalId': 38383,
            'name': 'TBB-38383: HTTP request from TAS to CRS: Voice Call Spartan -> PSTN',
            'children': [],
            'count': 1
          }, {
            'itemId': 35175,
            'id': 'case_35175',
            'type': 'case',
            'order': 5,
            'prefix': 'TBB',
            'externalId': 38382,
            'name': 'TBB-38382: HTTP request from TAS to CRS: Fax Call HP -> PSTN',
            'children': [],
            'count': 1
          }, {
            'itemId': 35176,
            'id': 'case_35176',
            'type': 'case',
            'order': 6,
            'prefix': 'TBB',
            'externalId': 38381,
            'name': 'TBB-38381: HTTP request from TAS to CRS: Voice Call HP -> 411',
            'children': [],
            'count': 1
          }, {
            'itemId': 35180,
            'id': 'case_35180',
            'type': 'case',
            'order': 7,
            'prefix': 'TBB',
            'externalId': 38380,
            'name': 'TBB-38380: HTTP request from TAS to CRS: Voice Call HP -> 911',
            'children': [],
            'count': 1
          }, {
            'itemId': 35179,
            'id': 'case_35179',
            'type': 'case',
            'order': 8,
            'prefix': 'TBB',
            'externalId': 38379,
            'name': 'TBB-38379: HTTP request from TAS to CRS: Ringout to HP and  to PSTN',
            'children': [],
            'count': 1
          }, {
            'itemId': 35178,
            'id': 'case_35178',
            'type': 'case',
            'order': 9,
            'prefix': 'TBB',
            'externalId': 38368,
            'name': 'TBB-38368: HTTP request from TAS to CRS: Voice Call HP -> PSTN',
            'children': [],
            'count': 1
          }],
          'count': 11
        }, {
          'itemId': 26565,
          'id': 'case_26565',
          'type': 'case',
          'order': 2,
          'prefix': 'TBB',
          'externalId': 39461,
          'name': 'TBB-39461: TAS starts using callrouting.xml if all CRS servers got blacklisted',
          'children': [],
          'count': 1
        }], 'count': 12
      }, {
        'itemId': 21418,
        'id': 'suite_21418',
        'type': 'suite',
        'order': 2,
        'prefix': 'TBB',
        'name': 'Inbound Carrier detection for Japan, Singapore and Hong Kong (10.2)',
        'children': [{
          'itemId': 26570,
          'id': 'case_26570',
          'type': 'case',
          'order': 1,
          'prefix': 'TBB',
          'externalId': 52031,
          'name': 'TBB-52031: Call to PSTN number',
          'children': [],
          'count': 1
        }, {
          'itemId': 26568,
          'id': 'case_26568',
          'type': 'case',
          'order': 2,
          'prefix': 'TBB',
          'externalId': 52042,
          'name': 'TBB-52042: Call to TF PSTN number',
          'children': [],
          'count': 1
        }, {
          'itemId': 26567,
          'id': 'case_26567',
          'type': 'case',
          'order': 3,
          'prefix': 'TBB',
          'externalId': 52043,
          'name': 'TBB-52043: Call to short code number',
          'children': [],
          'count': 1
        }, {
          'itemId': 26569,
          'id': 'case_26569',
          'type': 'case',
          'order': 4,
          'prefix': 'TBB',
          'externalId': 52044,
          'name': 'TBB-52044: Call to RC support 611 number',
          'children': [],
          'count': 1
        }],
        'count': 4
      }], 'count': 16
    }, {
      'itemId': 19972,
      'id': 'suite_19972',
      'type': 'suite',
      'order': 5,
      'prefix': 'TBB',
      'name': 'Dial service codes (*86, *67, *69)',
      'children': [{
        'itemId': 21396,
        'id': 'case_21396',
        'type': 'case',
        'order': 1,
        'prefix': 'TBB',
        'externalId': 12741,
        'name': 'TBB-12741: Login to main IVR menu (*86) from HP',
        'children': [],
        'count': 1
      }, {
        'itemId': 21394,
        'id': 'case_21394',
        'type': 'case',
        'order': 2,
        'prefix': 'TBB',
        'externalId': 12819,
        'name': 'TBB-12819: Non-system ext.: Login to main menu (*86)',
        'children': [],
        'count': 1
      }, {
        'itemId': 21397,
        'id': 'case_21397',
        'type': 'case',
        'order': 3,
        'prefix': 'TBB',
        'externalId': 15032,
        'name': 'TBB-15032: Login to main menu (*86) from SP',
        'children': [],
        'count': 1
      }, {
        'itemId': 21393,
        'id': 'case_21393',
        'type': 'case',
        'order': 4,
        'prefix': 'TBB',
        'externalId': 8448,
        'name': 'TBB-8448: Call to *67 (anonymous call) from HP',
        'children': [],
        'count': 1
      }, {
        'itemId': 21395,
        'id': 'case_21395',
        'type': 'case',
        'order': 5,
        'prefix': 'TBB',
        'externalId': 12745,
        'name': 'TBB-12745: Call to *67 (anonymous call)  from SP',
        'children': [],
        'count': 1
      }, {
        'itemId': 21401,
        'id': 'case_21401',
        'type': 'case',
        'order': 6,
        'prefix': 'TBB',
        'externalId': 44025,
        'name': 'TBB-44025: Call from HP to PSTN via *67 (anonymous call)',
        'children': [],
        'count': 1
      }, {
        'itemId': 21400,
        'id': 'case_21400',
        'type': 'case',
        'order': 7,
        'prefix': 'TBB',
        'externalId': 12744,
        'name': 'TBB-12744: Call to *67 (anonymous call) from HP as your CallerID is Blocked',
        'children': [],
        'count': 1
      }, {
        'itemId': 21399,
        'id': 'case_21399',
        'type': 'case',
        'order': 8,
        'prefix': 'TBB',
        'externalId': 12821,
        'name': 'TBB-12821: Non-system ext.: Blocked Caller ID (*67)',
        'children': [],
        'count': 1
      }, {
        'itemId': 21398,
        'id': 'suite_21398',
        'type': 'suite',
        'order': 9,
        'prefix': 'TBB',
        'name': 'Call to *69 (Missed Call)',
        'children': [{
          'itemId': 26555,
          'id': 'suite_26555',
          'type': 'suite',
          'order': 1,
          'prefix': 'TBB',
          'name': 'Call to *69 on different conditions: System Extension',
          'children': [{
            'itemId': 35156,
            'id': 'suite_35156',
            'type': 'suite',
            'order': 1,
            'prefix': 'TBB',
            'name': 'Extension override is On',
            'children': [{
              'itemId': 41581,
              'id': 'case_41581',
              'type': 'case',
              'order': 1,
              'prefix': 'TBB',
              'externalId': 19374,
              'name': 'TBB-19374: Call from DL (Phone Line)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41580,
              'id': 'case_41580',
              'type': 'case',
              'order': 2,
              'prefix': 'TBB',
              'externalId': 19375,
              'name': 'TBB-19375: Call from DL (Additional)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41583,
              'id': 'case_41583',
              'type': 'case',
              'order': 3,
              'prefix': 'TBB',
              'externalId': 19376,
              'name': 'TBB-19376: Call from DL (Blocked)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41582,
              'id': 'case_41582',
              'type': 'case',
              'order': 4,
              'prefix': 'TBB',
              'externalId': 19379,
              'name': 'TBB-19379: Call from SP',
              'children': [],
              'count': 1
            }, {
              'itemId': 41587,
              'id': 'case_41587',
              'type': 'case',
              'order': 5,
              'prefix': 'TBB',
              'externalId': 19380,
              'name': 'TBB-19380: Call from Mobile',
              'children': [],
              'count': 1
            }, {
              'itemId': 41585,
              'id': 'case_41585',
              'type': 'case',
              'order': 6,
              'prefix': 'TBB',
              'externalId': 19381,
              'name': 'TBB-19381: Call from Web RingOut',
              'children': [],
              'count': 1
            }, {
              'itemId': 41586,
              'id': 'case_41586',
              'type': 'case',
              'order': 7,
              'prefix': 'TBB',
              'externalId': 19383,
              'name': 'TBB-19383: Call from RingMe (DL)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41589,
              'id': 'case_41589',
              'type': 'case',
              'order': 8,
              'prefix': 'TBB',
              'externalId': 19384,
              'name': 'TBB-19384: Call from DL (Called Number - PIN)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41588,
              'id': 'case_41588',
              'type': 'case',
              'order': 9,
              'prefix': 'TBB',
              'externalId': 19385,
              'name': 'TBB-19385: Call from DL (Called Number - DL)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41591,
              'id': 'case_41591',
              'type': 'case',
              'order': 10,
              'prefix': 'TBB',
              'externalId': 19386,
              'name': 'TBB-19386: Call from DL (Called Number - DID)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41590,
              'id': 'case_41590',
              'type': 'case',
              'order': 11,
              'prefix': 'TBB',
              'externalId': 19387,
              'name': 'TBB-19387: Call from DL (Additional Digits)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41592,
              'id': 'case_41592',
              'type': 'case',
              'order': 12,
              'prefix': 'TBB',
              'externalId': 19388,
              'name': 'TBB-19388: Call from DL (Blocked, display Called Number instead)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41594,
              'id': 'case_41594',
              'type': 'case',
              'order': 13,
              'prefix': 'TBB',
              'externalId': 19389,
              'name': 'TBB-19389: Callback from DL',
              'children': [],
              'count': 1
            }, {
              'itemId': 41593,
              'id': 'case_41593',
              'type': 'case',
              'order': 14,
              'prefix': 'TBB',
              'externalId': 19390,
              'name': 'TBB-19390: Callback from SP',
              'children': [],
              'count': 1
            }, {
              'itemId': 41596,
              'id': 'case_41596',
              'type': 'case',
              'order': 15,
              'prefix': 'TBB',
              'externalId': 19394,
              'name': 'TBB-19394: Call from DL to Main number',
              'children': [],
              'count': 1
            }, {
              'itemId': 41595,
              'id': 'case_41595',
              'type': 'case',
              'order': 16,
              'prefix': 'TBB',
              'externalId': 19395,
              'name': 'TBB-19395: Call from DL to Additional number',
              'children': [],
              'count': 1
            }, {
              'itemId': 41597,
              'id': 'case_41597',
              'type': 'case',
              'order': 17,
              'prefix': 'TBB',
              'externalId': 19396,
              'name': 'TBB-19396: Call from DL to Extension PIN',
              'children': [],
              'count': 1
            }],
            'count': 17
          }, {
            'itemId': 35157,
            'id': 'suite_35157',
            'type': 'suite',
            'order': 2,
            'prefix': 'TBB',
            'name': 'Extension override is Off',
            'children': [{
              'itemId': 41542,
              'id': 'case_41542',
              'type': 'case',
              'order': 1,
              'prefix': 'TBB',
              'externalId': 19356,
              'name': 'TBB-19356: Call from DL (Phone Line)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41540,
              'id': 'case_41540',
              'type': 'case',
              'order': 2,
              'prefix': 'TBB',
              'externalId': 19358,
              'name': 'TBB-19358: Call from DL (Additional)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41544,
              'id': 'case_41544',
              'type': 'case',
              'order': 3,
              'prefix': 'TBB',
              'externalId': 19357,
              'name': 'TBB-19357: Call from DL (Blocked)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41541,
              'id': 'case_41541',
              'type': 'case',
              'order': 4,
              'prefix': 'TBB',
              'externalId': 19359,
              'name': 'TBB-19359: Call from PSTN to DL',
              'children': [],
              'count': 1
            }, {
              'itemId': 41543,
              'id': 'case_41543',
              'type': 'case',
              'order': 5,
              'prefix': 'TBB',
              'externalId': 19371,
              'name': 'TBB-19371: Call from PSTN to Auto-Receptionist',
              'children': [],
              'count': 1
            }, {
              'itemId': 41547,
              'id': 'case_41547',
              'type': 'case',
              'order': 6,
              'prefix': 'TBB',
              'externalId': 19360,
              'name': 'TBB-19360: Call from SP',
              'children': [],
              'count': 1
            }, {
              'itemId': 41548,
              'id': 'case_41548',
              'type': 'case',
              'order': 7,
              'prefix': 'TBB',
              'externalId': 19361,
              'name': 'TBB-19361: Call from Mobile',
              'children': [],
              'count': 1
            }, {
              'itemId': 41546,
              'id': 'case_41546',
              'type': 'case',
              'order': 8,
              'prefix': 'TBB',
              'externalId': 19362,
              'name': 'TBB-19362: Call from Web RingOut',
              'children': [],
              'count': 1
            }, {
              'itemId': 41545,
              'id': 'case_41545',
              'type': 'case',
              'order': 9,
              'prefix': 'TBB',
              'externalId': 19363,
              'name': 'TBB-19363: Call from RingMe (PSTN)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41549,
              'id': 'case_41549',
              'type': 'case',
              'order': 10,
              'prefix': 'TBB',
              'externalId': 19372,
              'name': 'TBB-19372: Call from RingMe (DL)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41550,
              'id': 'case_41550',
              'type': 'case',
              'order': 11,
              'prefix': 'TBB',
              'externalId': 19364,
              'name': 'TBB-19364: Call from DL (Called Number - PIN)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41551,
              'id': 'case_41551',
              'type': 'case',
              'order': 12,
              'prefix': 'TBB',
              'externalId': 19369,
              'name': 'TBB-19369: Call from DL (Called Number - DL)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41554,
              'id': 'case_41554',
              'type': 'case',
              'order': 13,
              'prefix': 'TBB',
              'externalId': 19370,
              'name': 'TBB-19370: Call from DL (Called Number - DID)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41552,
              'id': 'case_41552',
              'type': 'case',
              'order': 14,
              'prefix': 'TBB',
              'externalId': 19365,
              'name': 'TBB-19365: Call from DL (Additional Digits)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41553,
              'id': 'case_41553',
              'type': 'case',
              'order': 15,
              'prefix': 'TBB',
              'externalId': 19366,
              'name': 'TBB-19366: Call from DL (Blocked, display Called Number instead)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41555,
              'id': 'case_41555',
              'type': 'case',
              'order': 16,
              'prefix': 'TBB',
              'externalId': 19367,
              'name': 'TBB-19367: Callback from DL',
              'children': [],
              'count': 1
            }, {
              'itemId': 41557,
              'id': 'case_41557',
              'type': 'case',
              'order': 17,
              'prefix': 'TBB',
              'externalId': 19368,
              'name': 'TBB-19368: Callback from SP',
              'children': [],
              'count': 1
            }, {
              'itemId': 41559,
              'id': 'case_41559',
              'type': 'case',
              'order': 18,
              'prefix': 'TBB',
              'externalId': 19391,
              'name': 'TBB-19391: Call from DL to Main number',
              'children': [],
              'count': 1
            }, {
              'itemId': 41556,
              'id': 'case_41556',
              'type': 'case',
              'order': 19,
              'prefix': 'TBB',
              'externalId': 19392,
              'name': 'TBB-19392: Call from DL to Additional number',
              'children': [],
              'count': 1
            }, {
              'itemId': 41558,
              'id': 'case_41558',
              'type': 'case',
              'order': 20,
              'prefix': 'TBB',
              'externalId': 19393,
              'name': 'TBB-19393: Call from DL to Extension PIN',
              'children': [],
              'count': 1
            }],
            'count': 20
          }],
          'count': 37
        }, {
          'itemId': 26556,
          'id': 'suite_26556',
          'type': 'suite',
          'order': 2,
          'prefix': 'TBB',
          'name': 'Call to *69 on different conditions: Non-System Extension',
          'children': [{
            'itemId': 35159,
            'id': 'suite_35159',
            'type': 'suite',
            'order': 1,
            'prefix': 'TBB',
            'name': 'Extension override is On',
            'children': [{
              'itemId': 41649,
              'id': 'case_41649',
              'type': 'case',
              'order': 1,
              'prefix': 'TBB',
              'externalId': 20077,
              'name': 'TBB-20077: Call from DL (Main)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41646,
              'id': 'case_41646',
              'type': 'case',
              'order': 2,
              'prefix': 'TBB',
              'externalId': 20040,
              'name': 'TBB-20040: Call from DL (Phone Line)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41648,
              'id': 'case_41648',
              'type': 'case',
              'order': 3,
              'prefix': 'TBB',
              'externalId': 20041,
              'name': 'TBB-20041: Call from DL (Additional)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41645,
              'id': 'case_41645',
              'type': 'case',
              'order': 4,
              'prefix': 'TBB',
              'externalId': 20042,
              'name': 'TBB-20042: Call from DL (Blocked)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41647,
              'id': 'case_41647',
              'type': 'case',
              'order': 5,
              'prefix': 'TBB',
              'externalId': 20043,
              'name': 'TBB-20043: Call from SP',
              'children': [],
              'count': 1
            }, {
              'itemId': 41651,
              'id': 'case_41651',
              'type': 'case',
              'order': 6,
              'prefix': 'TBB',
              'externalId': 20044,
              'name': 'TBB-20044: Call from Mobile',
              'children': [],
              'count': 1
            }, {
              'itemId': 41654,
              'id': 'case_41654',
              'type': 'case',
              'order': 7,
              'prefix': 'TBB',
              'externalId': 20045,
              'name': 'TBB-20045: Call from Web RingOut',
              'children': [],
              'count': 1
            }, {
              'itemId': 41653,
              'id': 'case_41653',
              'type': 'case',
              'order': 8,
              'prefix': 'TBB',
              'externalId': 20046,
              'name': 'TBB-20046: Call from RingMe (DL)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41650,
              'id': 'case_41650',
              'type': 'case',
              'order': 9,
              'prefix': 'TBB',
              'externalId': 20047,
              'name': 'TBB-20047: Call from DL (Called Number - PIN)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41652,
              'id': 'case_41652',
              'type': 'case',
              'order': 10,
              'prefix': 'TBB',
              'externalId': 20048,
              'name': 'TBB-20048: Call from DL (Called Number - DL)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41656,
              'id': 'case_41656',
              'type': 'case',
              'order': 11,
              'prefix': 'TBB',
              'externalId': 20049,
              'name': 'TBB-20049: Call from DL (Called Number - DID)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41658,
              'id': 'case_41658',
              'type': 'case',
              'order': 12,
              'prefix': 'TBB',
              'externalId': 20050,
              'name': 'TBB-20050: Call from DL (Additional Digits)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41659,
              'id': 'case_41659',
              'type': 'case',
              'order': 13,
              'prefix': 'TBB',
              'externalId': 20051,
              'name': 'TBB-20051: Call from DL (Blocked, display Called Number instead)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41655,
              'id': 'case_41655',
              'type': 'case',
              'order': 14,
              'prefix': 'TBB',
              'externalId': 20052,
              'name': 'TBB-20052: Callback from DL',
              'children': [],
              'count': 1
            }, {
              'itemId': 41657,
              'id': 'case_41657',
              'type': 'case',
              'order': 15,
              'prefix': 'TBB',
              'externalId': 20053,
              'name': 'TBB-20053: Callback from SP',
              'children': [],
              'count': 1
            }, {
              'itemId': 41660,
              'id': 'case_41660',
              'type': 'case',
              'order': 16,
              'prefix': 'TBB',
              'externalId': 20054,
              'name': 'TBB-20054: Call from DL to Main number',
              'children': [],
              'count': 1
            }, {
              'itemId': 41662,
              'id': 'case_41662',
              'type': 'case',
              'order': 17,
              'prefix': 'TBB',
              'externalId': 20055,
              'name': 'TBB-20055: Call from DL to Additional number',
              'children': [],
              'count': 1
            }, {
              'itemId': 41661,
              'id': 'case_41661',
              'type': 'case',
              'order': 18,
              'prefix': 'TBB',
              'externalId': 20056,
              'name': 'TBB-20056: Call from DL to Extension PIN',
              'children': [],
              'count': 1
            }],
            'count': 18
          }, {
            'itemId': 35158,
            'id': 'suite_35158',
            'type': 'suite',
            'order': 2,
            'prefix': 'TBB',
            'name': 'Extension override is Off',
            'children': [{
              'itemId': 41561,
              'id': 'case_41561',
              'type': 'case',
              'order': 1,
              'prefix': 'TBB',
              'externalId': 20078,
              'name': 'TBB-20078: Call from DL (Main)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41564,
              'id': 'case_41564',
              'type': 'case',
              'order': 2,
              'prefix': 'TBB',
              'externalId': 20057,
              'name': 'TBB-20057: Call from DL (Phone Line)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41562,
              'id': 'case_41562',
              'type': 'case',
              'order': 3,
              'prefix': 'TBB',
              'externalId': 20058,
              'name': 'TBB-20058: Call from DL (Additional)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41563,
              'id': 'case_41563',
              'type': 'case',
              'order': 4,
              'prefix': 'TBB',
              'externalId': 20059,
              'name': 'TBB-20059: Call from DL (Blocked)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41560,
              'id': 'case_41560',
              'type': 'case',
              'order': 5,
              'prefix': 'TBB',
              'externalId': 20060,
              'name': 'TBB-20060: Call from PSTN to DL',
              'children': [],
              'count': 1
            }, {
              'itemId': 41565,
              'id': 'case_41565',
              'type': 'case',
              'order': 6,
              'prefix': 'TBB',
              'externalId': 20061,
              'name': 'TBB-20061: Call from PSTN to Auto-Receptionist',
              'children': [],
              'count': 1
            }, {
              'itemId': 41569,
              'id': 'case_41569',
              'type': 'case',
              'order': 7,
              'prefix': 'TBB',
              'externalId': 20062,
              'name': 'TBB-20062: Call from SP',
              'children': [],
              'count': 1
            }, {
              'itemId': 41567,
              'id': 'case_41567',
              'type': 'case',
              'order': 8,
              'prefix': 'TBB',
              'externalId': 20063,
              'name': 'TBB-20063: Call from Mobile',
              'children': [],
              'count': 1
            }, {
              'itemId': 41568,
              'id': 'case_41568',
              'type': 'case',
              'order': 9,
              'prefix': 'TBB',
              'externalId': 20064,
              'name': 'TBB-20064: Call from Web RingOut',
              'children': [],
              'count': 1
            }, {
              'itemId': 41566,
              'id': 'case_41566',
              'type': 'case',
              'order': 10,
              'prefix': 'TBB',
              'externalId': 20065,
              'name': 'TBB-20065: Call from RingMe (PSTN)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41570,
              'id': 'case_41570',
              'type': 'case',
              'order': 11,
              'prefix': 'TBB',
              'externalId': 20066,
              'name': 'TBB-20066: Call from RingMe (DL)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41572,
              'id': 'case_41572',
              'type': 'case',
              'order': 12,
              'prefix': 'TBB',
              'externalId': 20067,
              'name': 'TBB-20067: Call from DL (Called Number - PIN)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41571,
              'id': 'case_41571',
              'type': 'case',
              'order': 13,
              'prefix': 'TBB',
              'externalId': 20068,
              'name': 'TBB-20068: Call from DL (Called Number - DL)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41573,
              'id': 'case_41573',
              'type': 'case',
              'order': 14,
              'prefix': 'TBB',
              'externalId': 20069,
              'name': 'TBB-20069: Call from DL (Called Number - DID)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41574,
              'id': 'case_41574',
              'type': 'case',
              'order': 15,
              'prefix': 'TBB',
              'externalId': 20070,
              'name': 'TBB-20070: Call from DL (Additional Digits)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41579,
              'id': 'case_41579',
              'type': 'case',
              'order': 16,
              'prefix': 'TBB',
              'externalId': 20071,
              'name': 'TBB-20071: Call from DL (Blocked, display Called Number instead)',
              'children': [],
              'count': 1
            }, {
              'itemId': 41576,
              'id': 'case_41576',
              'type': 'case',
              'order': 17,
              'prefix': 'TBB',
              'externalId': 20072,
              'name': 'TBB-20072: Callback from DL',
              'children': [],
              'count': 1
            }, {
              'itemId': 41575,
              'id': 'case_41575',
              'type': 'case',
              'order': 18,
              'prefix': 'TBB',
              'externalId': 20073,
              'name': 'TBB-20073: Callback from SP',
              'children': [],
              'count': 1
            }, {
              'itemId': 41578,
              'id': 'case_41578',
              'type': 'case',
              'order': 19,
              'prefix': 'TBB',
              'externalId': 20074,
              'name': 'TBB-20074: Call from DL to Main number',
              'children': [],
              'count': 1
            }, {
              'itemId': 41577,
              'id': 'case_41577',
              'type': 'case',
              'order': 20,
              'prefix': 'TBB',
              'externalId': 20075,
              'name': 'TBB-20075: Call from DL to Additional number',
              'children': [],
              'count': 1
            }, {
              'itemId': 41584,
              'id': 'case_41584',
              'type': 'case',
              'order': 21,
              'prefix': 'TBB',
              'externalId': 20076,
              'name': 'TBB-20076: Call from DL to Extension PIN',
              'children': [],
              'count': 1
            }],
            'count': 21
          }],
          'count': 39
        }, {
          'itemId': 26557,
          'id': 'case_26557',
          'type': 'case',
          'order': 3,
          'prefix': 'TBB',
          'externalId': 23356,
          'name': 'TBB-23356: Call to *69 from SP (login as Direct Number of system ext.)',
          'children': [],
          'count': 1
        }, {
          'itemId': 26554,
          'id': 'case_26554',
          'type': 'case',
          'order': 4,
          'prefix': 'TBB',
          'externalId': 23357,
          'name': 'TBB-23357: Call to *69 from SP (login as Direct Number of non-system ext.)',
          'children': [],
          'count': 1
        }, {
          'itemId': 26558,
          'id': 'case_26558',
          'type': 'case',
          'order': 5,
          'prefix': 'TBB',
          'externalId': 23358,
          'name': 'TBB-23358: Call to *69 from SP (login as Main Company Number)',
          'children': [],
          'count': 1
        }, {
          'itemId': 26560,
          'id': 'case_26560',
          'type': 'case',
          'order': 6,
          'prefix': 'TBB',
          'externalId': 20207,
          'name': 'TBB-20207: Call from DL to DL which does not accept the call (*69)',
          'children': [],
          'count': 1
        }, {
          'itemId': 26559,
          'id': 'case_26559',
          'type': 'case',
          'order': 7,
          'prefix': 'TBB',
          'externalId': 35858,
          'name': 'TBB-35858: Call to *69: Call back to international number',
          'children': [],
          'count': 1
        }],
        'count': 81
      }],
      'count': 89
    }, {
      'itemId': 19975, 'id': 'suite_19975', 'type': 'suite', 'order': 6, 'prefix': 'TBB', 'name': 'Verification call', 'children': [{
        'itemId': 21453,
        'id': 'suite_21453',
        'type': 'suite',
        'order': 1,
        'prefix': 'TBB',
        'name': 'Verification call during SignUp',
        'children': [{
          'itemId': 26675,
          'id': 'case_26675',
          'type': 'case',
          'order': 1,
          'prefix': 'TBB',
          'externalId': 9289,
          'name': 'TBB-9289: Verification call to the same Contact number that was submitted on Contact info page',
          'children': [],
          'count': 1
        }, {
          'itemId': 26672,
          'id': 'case_26672',
          'type': 'case',
          'order': 2,
          'prefix': 'TBB',
          'externalId': 9290,
          'name': 'TBB-9290: Verification call to another Contact number rather than that that was submitted on Contact info page',
          'children': [],
          'count': 1
        }, {
          'itemId': 26676,
          'id': 'case_26676',
          'type': 'case',
          'order': 3,
          'prefix': 'TBB',
          'externalId': 9291,
          'name': 'TBB-9291: Verification call for International number is disabled',
          'children': [],
          'count': 1
        }, {
          'itemId': 26673,
          'id': 'case_26673',
          'type': 'case',
          'order': 4,
          'prefix': 'TBB',
          'externalId': 9292,
          'name': 'TBB-9292: Verification call to number that does not answer a call',
          'children': [],
          'count': 1
        }, {
          'itemId': 26674,
          'id': 'case_26674',
          'type': 'case',
          'order': 5,
          'prefix': 'TBB',
          'externalId': 9293,
          'name': 'TBB-9293: Verification call to a number that rejects a call',
          'children': [],
          'count': 1
        }, {
          'itemId': 26677,
          'id': 'case_26677',
          'type': 'case',
          'order': 6,
          'prefix': 'TBB',
          'externalId': 9294,
          'name': 'TBB-9294: Verification code said in verification call is correct',
          'children': [],
          'count': 1
        }, {
          'itemId': 26678,
          'id': 'case_26678',
          'type': 'case',
          'order': 7,
          'prefix': 'TBB',
          'externalId': 9295,
          'name': 'TBB-9295: Verification call for RingCentral number is disabled',
          'children': [],
          'count': 1
        }],
        'count': 7
      }], 'count': 7
    }, {
      'itemId': 19974,
      'id': 'suite_19974',
      'type': 'suite',
      'order': 7,
      'prefix': 'TBB',
      'name': 'International calling',
      'children': [{
        'itemId': 21403,
        'id': 'case_21403',
        'type': 'case',
        'order': 1,
        'prefix': 'TBB',
        'externalId': 14879,
        'name': 'TBB-14879: Call to International number if international calling is disabled',
        'children': [],
        'count': 1
      }, {
        'itemId': 21406,
        'id': 'suite_21406',
        'type': 'suite',
        'order': 2,
        'prefix': 'TBB',
        'name': 'International call limit (100$)',
        'children': [{
          'itemId': 26561,
          'id': 'suite_26561',
          'type': 'suite',
          'order': 1,
          'prefix': 'TBB',
          'name': 'US',
          'children': [{
            'itemId': 35160,
            'id': 'case_35160',
            'type': 'case',
            'order': 1,
            'prefix': 'TBB',
            'externalId': 24580,
            'name': 'TBB-24580: Included time ended',
            'children': [],
            'count': 1
          }, {
            'itemId': 35162,
            'id': 'case_35162',
            'type': 'case',
            'order': 2,
            'prefix': 'TBB',
            'externalId': 24859,
            'name': 'TBB-24859: Daily limit reached',
            'children': [],
            'count': 1
          }, {
            'itemId': 35161,
            'id': 'case_35161',
            'type': 'case',
            'order': 3,
            'prefix': 'TBB',
            'externalId': 24860,
            'name': 'TBB-24860: Monthly limit reached',
            'children': [],
            'count': 1
          }],
          'count': 3
        }, {
          'itemId': 26563,
          'id': 'suite_26563',
          'type': 'suite',
          'order': 2,
          'prefix': 'TBB',
          'name': 'CA',
          'children': [{
            'itemId': 35163,
            'id': 'case_35163',
            'type': 'case',
            'order': 1,
            'prefix': 'TBB',
            'externalId': 24876,
            'name': 'TBB-24876: Included time ended',
            'children': [],
            'count': 1
          }, {
            'itemId': 35164,
            'id': 'case_35164',
            'type': 'case',
            'order': 2,
            'prefix': 'TBB',
            'externalId': 24877,
            'name': 'TBB-24877: Daily limit reached',
            'children': [],
            'count': 1
          }, {
            'itemId': 35165,
            'id': 'case_35165',
            'type': 'case',
            'order': 3,
            'prefix': 'TBB',
            'externalId': 24878,
            'name': 'TBB-24878: Monthly limit reached',
            'children': [],
            'count': 1
          }],
          'count': 3
        }, {
          'itemId': 26562,
          'id': 'suite_26562',
          'type': 'suite',
          'order': 3,
          'prefix': 'TBB',
          'name': 'ATT',
          'children': [{
            'itemId': 35166,
            'id': 'case_35166',
            'type': 'case',
            'order': 1,
            'prefix': 'TBB',
            'externalId': 24880,
            'name': 'TBB-24880: Included time ended',
            'children': [],
            'count': 1
          }, {
            'itemId': 35167,
            'id': 'case_35167',
            'type': 'case',
            'order': 2,
            'prefix': 'TBB',
            'externalId': 24881,
            'name': 'TBB-24881: Daily limit reached',
            'children': [],
            'count': 1
          }, {
            'itemId': 35168,
            'id': 'case_35168',
            'type': 'case',
            'order': 3,
            'prefix': 'TBB',
            'externalId': 24882,
            'name': 'TBB-24882: Monthly limit reached',
            'children': [],
            'count': 1
          }],
          'count': 3
        }, {
          'itemId': 26564,
          'id': 'suite_26564',
          'type': 'suite',
          'order': 4,
          'prefix': 'TBB',
          'name': 'UK',
          'children': [{
            'itemId': 35170,
            'id': 'case_35170',
            'type': 'case',
            'order': 1,
            'prefix': 'TBB',
            'externalId': 24883,
            'name': 'TBB-24883: Included time ended',
            'children': [],
            'count': 1
          }, {
            'itemId': 35171,
            'id': 'case_35171',
            'type': 'case',
            'order': 2,
            'prefix': 'TBB',
            'externalId': 24884,
            'name': 'TBB-24884: Daily limit reached',
            'children': [],
            'count': 1
          }, {
            'itemId': 35169,
            'id': 'case_35169',
            'type': 'case',
            'order': 3,
            'prefix': 'TBB',
            'externalId': 24885,
            'name': 'TBB-24885: Monthly limit reached',
            'children': [],
            'count': 1
          }],
          'count': 3
        }],
        'count': 12
      }, {
        'itemId': 21402,
        'id': 'suite_21402',
        'type': 'suite',
        'order': 3,
        'prefix': 'TBB',
        'name': 'Blocked destination for international call',
        'children': [{
          'itemId': 26616,
          'id': 'case_26616',
          'type': 'case',
          'order': 1,
          'prefix': 'TBB',
          'externalId': 24888,
          'name': 'TBB-24888: Blocked destination (US account)',
          'children': [],
          'count': 1
        }, {
          'itemId': 26617,
          'id': 'case_26617',
          'type': 'case',
          'order': 2,
          'prefix': 'TBB',
          'externalId': 24889,
          'name': 'TBB-24889: Blocked destination (UK account)',
          'children': [],
          'count': 1
        }, {
          'itemId': 26618,
          'id': 'case_26618',
          'type': 'case',
          'order': 3,
          'prefix': 'TBB',
          'externalId': 24890,
          'name': 'TBB-24890: Blocked destination (CA account)',
          'children': [],
          'count': 1
        }, {
          'itemId': 26615,
          'id': 'case_26615',
          'type': 'case',
          'order': 4,
          'prefix': 'TBB',
          'externalId': 24891,
          'name': 'TBB-24891: Blocked destination (ATT account)',
          'children': [],
          'count': 1
        }],
        'count': 4
      }, {
        'itemId': 21407,
        'id': 'case_21407',
        'type': 'case',
        'order': 4,
        'prefix': 'TBB',
        'externalId': 14880,
        'name': 'TBB-14880: Call to International number without 011 prefix if international calling is enabled',
        'children': [],
        'count': 1
      }, {
        'itemId': 21405,
        'id': 'case_21405',
        'type': 'case',
        'order': 5,
        'prefix': 'TBB',
        'externalId': 14881,
        'name': 'TBB-14881: Call to International number with 011 prefix if international calling is enabled',
        'children': [],
        'count': 1
      }, {
        'itemId': 21404,
        'id': 'suite_21404',
        'type': 'suite',
        'order': 6,
        'prefix': 'TBB',
        'name': 'IVN',
        'children': [{
          'itemId': 26592,
          'id': 'case_26592',
          'type': 'case',
          'order': 1,
          'prefix': 'TBB',
          'externalId': 35815,
          'name': 'TBB-35815: Call to IVN',
          'children': [],
          'count': 1
        }, {
          'itemId': 26593,
          'id': 'case_26593',
          'type': 'case',
          'order': 2,
          'prefix': 'TBB',
          'externalId': 35816,
          'name': 'TBB-35816: Call from DL with IVN to PSTN',
          'children': [],
          'count': 1
        }],
        'count': 2
      }],
      'count': 21
    }, {
      'itemId': 19973, 'id': 'suite_19973', 'type': 'suite', 'order': 8, 'prefix': 'TBB', 'name': 'Early relaying media', 'children': [{
        'itemId': 21445, 'id': 'suite_21445', 'type': 'suite', 'order': 1, 'prefix': 'TBB', 'name': 'Normal Flow', 'children': [{
          'itemId': 26650,
          'id': 'suite_26650',
          'type': 'suite',
          'order': 1,
          'prefix': 'TBB',
          'name': 'RingOut',
          'children': [{
            'itemId': 35261,
            'id': 'case_35261',
            'type': 'case',
            'order': 1,
            'prefix': 'TBB',
            'externalId': 15731,
            'name': 'TBB-15731: Mobile 2leg RO: 1st leg RC(DL) - 2nd leg External',
            'children': [],
            'count': 1
          }, {
            'itemId': 35265,
            'id': 'case_35265',
            'type': 'case',
            'order': 2,
            'prefix': 'TBB',
            'externalId': 15732,
            'name': 'TBB-15732: Mobile 2leg RO: 1st leg External - 2nd leg External',
            'children': [],
            'count': 1
          }, {
            'itemId': 35264,
            'id': 'case_35264',
            'type': 'case',
            'order': 3,
            'prefix': 'TBB',
            'externalId': 15729,
            'name': 'TBB-15729: Web RO:1st leg RC(DL) - 2nd leg External',
            'children': [],
            'count': 1
          }, {
            'itemId': 35263,
            'id': 'case_35263',
            'type': 'case',
            'order': 4,
            'prefix': 'TBB',
            'externalId': 15730,
            'name': 'TBB-15730: Web RO: 1st leg External - 2nd leg External',
            'children': [],
            'count': 1
          }, {
            'itemId': 35262,
            'id': 'case_35262',
            'type': 'case',
            'order': 5,
            'prefix': 'TBB',
            'externalId': 15733,
            'name': 'TBB-15733: Mobile Direct RingOut to PSTN',
            'children': [],
            'count': 1
          }],
          'count': 5
        }, {
          'itemId': 26651,
          'id': 'case_26651',
          'type': 'case',
          'order': 2,
          'prefix': 'TBB',
          'externalId': 35241,
          'name': 'TBB-35241: Call from HP to ext with unconditional forwrding  to: local number - 2nd sipp (without SDP)',
          'children': [],
          'count': 1
        }, {
          'itemId': 26649,
          'id': 'case_26649',
          'type': 'case',
          'order': 3,
          'prefix': 'TBB',
          'externalId': 35242,
          'name': 'TBB-35242: Call from HP to ext with unconditional forwrding  to: local number - 2nd sipp (with SDP)',
          'children': [],
          'count': 1
        }, {
          'itemId': 26647,
          'id': 'suite_26647',
          'type': 'suite',
          'order': 4,
          'prefix': 'TBB',
          'name': 'DL > PSTN',
          'children': [{
            'itemId': 35266,
            'id': 'case_35266',
            'type': 'case',
            'order': 1,
            'prefix': 'TBB',
            'externalId': 18220,
            'name': 'TBB-18220: Call from Other Phone (711u) to PSTN (711u)',
            'children': [],
            'count': 1
          }, {
            'itemId': 35267,
            'id': 'case_35267',
            'type': 'case',
            'order': 2,
            'prefix': 'TBB',
            'externalId': 34237,
            'name': 'TBB-34237: Call from HP (711) to PSTN (711) with early relaying media from provider',
            'children': [],
            'count': 1
          }],
          'count': 2
        }, {
          'itemId': 26648,
          'id': 'suite_26648',
          'type': 'suite',
          'order': 5,
          'prefix': 'TBB',
          'name': 'Calling card',
          'children': [{
            'itemId': 35268,
            'id': 'case_35268',
            'type': 'case',
            'order': 1,
            'prefix': 'TBB',
            'externalId': 15728,
            'name': 'TBB-15728: Place a call',
            'children': [],
            'count': 1
          }],
          'count': 1
        }], 'count': 10
      }, {
        'itemId': 21446,
        'id': 'case_21446',
        'type': 'case',
        'order': 2,
        'prefix': 'TBB',
        'externalId': 28945,
        'name': 'TBB-28945: DTMFs ignore for the unconditionally forwarded calls',
        'children': [],
        'count': 1
      }], 'count': 11
    }, {
      'itemId': 19976,
      'id': 'suite_19976',
      'type': 'suite',
      'order': 9,
      'prefix': 'TBB',
      'name': 'Forwarding to <main_number>*Ext',
      'children': [{
        'itemId': 21439,
        'id': 'case_21439',
        'type': 'case',
        'order': 1,
        'prefix': 'TBB',
        'externalId': 37853,
        'name': 'TBB-37853: Forwarding to <main_number>. With announcement',
        'children': [],
        'count': 1
      }, {
        'itemId': 21435,
        'id': 'case_21435',
        'type': 'case',
        'order': 2,
        'prefix': 'TBB',
        'externalId': 37854,
        'name': 'TBB-37854: Forwarding to <main_number>. Without announcement',
        'children': [],
        'count': 1
      }, {
        'itemId': 21438,
        'id': 'case_21438',
        'type': 'case',
        'order': 3,
        'prefix': 'TBB',
        'externalId': 37818,
        'name': 'TBB-37818: Forwarding to <main_number>*3-digits Ext. With announcement',
        'children': [],
        'count': 1
      }, {
        'itemId': 21436,
        'id': 'case_21436',
        'type': 'case',
        'order': 4,
        'prefix': 'TBB',
        'externalId': 37862,
        'name': 'TBB-37862: Forwarding to <main_number>* 4-digits Ext. Without announcement',
        'children': [],
        'count': 1
      }, {
        'itemId': 21437,
        'id': 'case_21437',
        'type': 'case',
        'order': 5,
        'prefix': 'TBB',
        'externalId': 37825,
        'name': 'TBB-37825: Unconditional forwarding to <main_number>* 5-digits Ext',
        'children': [],
        'count': 1
      }, {
        'itemId': 21441,
        'id': 'case_21441',
        'type': 'case',
        'order': 6,
        'prefix': 'TBB',
        'externalId': 37819,
        'name': 'TBB-37819: Several forwardings to <main_number>*Ext. Sequentially',
        'children': [],
        'count': 1
      }, {
        'itemId': 21442,
        'id': 'case_21442',
        'type': 'case',
        'order': 7,
        'prefix': 'TBB',
        'externalId': 37824,
        'name': 'TBB-37824: Several forwardings to <main_number>*Ext. Simulteneously',
        'children': [],
        'count': 1
      }, {
        'itemId': 21444,
        'id': 'case_21444',
        'type': 'case',
        'order': 8,
        'prefix': 'TBB',
        'externalId': 37820,
        'name': 'TBB-37820: Call to CQ to agent with forwarding to <main_number>*Ext',
        'children': [],
        'count': 1
      }, {
        'itemId': 21443,
        'id': 'case_21443',
        'type': 'case',
        'order': 9,
        'prefix': 'TBB',
        'externalId': 37822,
        'name': 'TBB-37822: Call to CQ to agents with forwarding to <main_number>*Ext. Simulteneously',
        'children': [],
        'count': 1
      }, {
        'itemId': 21440,
        'id': 'case_21440',
        'type': 'case',
        'order': 10,
        'prefix': 'TBB',
        'externalId': 37826,
        'name': 'TBB-37826: Call to CQ with unconditional forwarding to <main_number>*Ext',
        'children': [],
        'count': 1
      }, {
        'itemId': 21448,
        'id': 'case_21448',
        'type': 'case',
        'order': 11,
        'prefix': 'TBB',
        'externalId': 37855,
        'name': 'TBB-37855: RingMe to PSTN and DL# with forwarding rules to <main_number>*Ext',
        'children': [],
        'count': 1
      }, {
        'itemId': 21447,
        'id': 'case_21447',
        'type': 'case',
        'order': 12,
        'prefix': 'TBB',
        'externalId': 37859,
        'name': 'TBB-37859: Call from Spartan to Ext(with Forwarding to main_num* 2 digits Ext)  + transfer to main_number* 1-digit ext',
        'children': [],
        'count': 1
      }, {
        'itemId': 21450,
        'id': 'case_21450',
        'type': 'case',
        'order': 13,
        'prefix': 'TBB',
        'externalId': 37860,
        'name': 'TBB-37860: RO from SWS custom_number*ext',
        'children': [],
        'count': 1
      }, {
        'itemId': 21449,
        'id': 'case_21449',
        'type': 'case',
        'order': 14,
        'prefix': 'TBB',
        'externalId': 37861,
        'name': 'TBB-37861: RO from SWS NON custom*ext',
        'children': [],
        'count': 1
      }],
      'count': 14
    }, {
      'itemId': 19977,
      'id': 'suite_19977',
      'type': 'suite',
      'order': 10,
      'prefix': 'TBB',
      'name': 'Outbound Calls (Specific/Negative cases)',
      'children': [{
        'itemId': 21419,
        'id': 'case_21419',
        'type': 'case',
        'order': 1,
        'prefix': 'TBB',
        'externalId': 37989,
        'name': 'TBB-37989: Disable/Enable User ext.: Call from HP to Another ext./PSTN/Emergency',
        'children': [],
        'count': 1
      }, {
        'itemId': 21421,
        'id': 'case_21421',
        'type': 'case',
        'order': 2,
        'prefix': 'TBB',
        'externalId': 15929,
        'name': 'TBB-15929: Calls from unregistered device',
        'children': [],
        'count': 1
      }, {
        'itemId': 21422,
        'id': 'case_21422',
        'type': 'case',
        'order': 3,
        'prefix': 'TBB',
        'externalId': 26239,
        'name': 'TBB-26239: Call in progress: place one more',
        'children': [],
        'count': 1
      }, {
        'itemId': 21423,
        'id': 'case_21423',
        'type': 'case',
        'order': 4,
        'prefix': 'TBB',
        'externalId': 24204,
        'name': 'TBB-24204: Check device behavior when you have maximum amount of simultaneous calls',
        'children': [],
        'count': 1
      }, {
        'itemId': 21424,
        'id': 'case_21424',
        'type': 'case',
        'order': 5,
        'prefix': 'TBB',
        'externalId': 28556,
        'name': 'TBB-28556: Call from DL w/o registration',
        'children': [],
        'count': 1
      }, {
        'itemId': 21425,
        'id': 'case_21425',
        'type': 'case',
        'order': 6,
        'prefix': 'TBB',
        'externalId': 36096,
        'name': 'TBB-36096: Call to phone number that doesn\'t exist (not in RC, not in external providers pool)',
        'children': [],
        'count': 1
      }, {
        'itemId': 21428,
        'id': 'case_21428',
        'type': 'case',
        'order': 7,
        'prefix': 'TBB',
        'externalId': 36013,
        'name': 'TBB-36013: DL->PSTN: fast answer -> drop',
        'children': [],
        'count': 1
      }, {
        'itemId': 21426,
        'id': 'case_21426',
        'type': 'case',
        'order': 8,
        'prefix': 'TBB',
        'externalId': 41481,
        'name': 'TBB-41481: Bug RLZ-15542 Call to long number (>15 digits)',
        'children': [],
        'count': 1
      }, {
        'itemId': 21427,
        'id': 'case_21427',
        'type': 'case',
        'order': 9,
        'prefix': 'TBB',
        'externalId': 40190,
        'name': 'TBB-40190: TAS restart. DLOutboundProxies re-reading after TAS restart',
        'children': [],
        'count': 1
      }, {
        'itemId': 21429,
        'id': 'case_21429',
        'type': 'case',
        'order': 10,
        'prefix': 'TBB',
        'externalId': 46272,
        'name': 'TBB-46272: Several calls to Main_number*Ext',
        'children': [],
        'count': 1
      }, {
        'itemId': 21420,
        'id': 'suite_21420',
        'type': 'suite',
        'order': 11,
        'prefix': 'TBB',
        'name': 'Call duration limit setting',
        'children': [{
          'itemId': 26636,
          'id': 'case_26636',
          'type': 'case',
          'order': 1,
          'prefix': 'TBB',
          'externalId': 26371,
          'name': 'TBB-26371: Call duration limit setting',
          'children': [],
          'count': 1
        }, {
          'itemId': 26634,
          'id': 'case_26634',
          'type': 'case',
          'order': 2,
          'prefix': 'TBB',
          'externalId': 26432,
          'name': 'TBB-26432: Long call monitored by BLF with ACR enabled',
          'children': [],
          'count': 1
        }, {
          'itemId': 26635,
          'id': 'case_26635',
          'type': 'case',
          'order': 3,
          'prefix': 'TBB',
          'externalId': 26843,
          'name': 'TBB-26843: Long-run RingMe call',
          'children': [],
          'count': 1
        }, {
          'itemId': 26633,
          'id': 'case_26633',
          'type': 'case',
          'order': 4,
          'prefix': 'TBB',
          'externalId': 35146,
          'name': 'TBB-35146: Long call - duration more than 3 hours',
          'children': [],
          'count': 1
        }],
        'count': 4
      }],
      'count': 14
    }, {
      'itemId': 19980,
      'id': 'suite_19980',
      'type': 'suite',
      'order': 11,
      'prefix': 'TBB',
      'name': 'Cross-pod calls (applicable with CRS)',
      'children': [{
        'itemId': 21481,
        'id': 'case_21481',
        'type': 'case',
        'order': 1,
        'prefix': 'TBB',
        'externalId': 28889,
        'name': 'TBB-28889: Call from DL to PSTN with CRS-GUD routing',
        'children': [],
        'count': 1
      }, {
        'itemId': 21479,
        'id': 'case_21479',
        'type': 'case',
        'order': 2,
        'prefix': 'TBB',
        'externalId': 32045,
        'name': 'TBB-32045: Make a call to another POD to DID',
        'children': [],
        'count': 1
      }, {
        'itemId': 21482,
        'id': 'case_21482',
        'type': 'case',
        'order': 3,
        'prefix': 'TBB',
        'externalId': 32046,
        'name': 'TBB-32046: Make a call to another POD to Main Number',
        'children': [],
        'count': 1
      }, {
        'itemId': 21478,
        'id': 'case_21478',
        'type': 'case',
        'order': 4,
        'prefix': 'TBB',
        'externalId': 32047,
        'name': 'TBB-32047: Make a call to another POD to DL',
        'children': [],
        'count': 1
      }, {
        'itemId': 21480,
        'id': 'case_21480',
        'type': 'case',
        'order': 5,
        'prefix': 'TBB',
        'externalId': 32403,
        'name': 'TBB-32403: Make a call to another POD to Free DL',
        'children': [],
        'count': 1
      }, {
        'itemId': 21483,
        'id': 'case_21483',
        'type': 'case',
        'order': 6,
        'prefix': 'TBB',
        'externalId': 32049,
        'name': 'TBB-32049: Make a call to another POD to DL with Forwarding Number assigned.',
        'children': [],
        'count': 1
      }, {
        'itemId': 21489,
        'id': 'case_21489',
        'type': 'case',
        'order': 7,
        'prefix': 'TBB',
        'externalId': 32048,
        'name': 'TBB-32048: Make a call to another POD: UK',
        'children': [],
        'count': 1
      }, {
        'itemId': 21484,
        'id': 'case_21484',
        'type': 'case',
        'order': 8,
        'prefix': 'TBB',
        'externalId': 32050,
        'name': 'TBB-32050: Make a call to another POD to AT&T',
        'children': [],
        'count': 1
      }, {
        'itemId': 21485,
        'id': 'case_21485',
        'type': 'case',
        'order': 9,
        'prefix': 'TBB',
        'externalId': 32399,
        'name': 'TBB-32399: Make a call to another POD from SP(DL)',
        'children': [],
        'count': 1
      }, {
        'itemId': 21487,
        'id': 'case_21487',
        'type': 'case',
        'order': 10,
        'prefix': 'TBB',
        'externalId': 32400,
        'name': 'TBB-32400: Make a call to another POD from Mobile App (iPhone)',
        'children': [],
        'count': 1
      }, {
        'itemId': 21486,
        'id': 'case_21486',
        'type': 'case',
        'order': 11,
        'prefix': 'TBB',
        'externalId': 32402,
        'name': 'TBB-32402: Make a call to another POD from Mobile App (Android)',
        'children': [],
        'count': 1
      }, {
        'itemId': 21494,
        'id': 'case_21494',
        'type': 'case',
        'order': 12,
        'prefix': 'TBB',
        'externalId': 32408,
        'name': 'TBB-32408: Make a call to another POD from BLA (DL)',
        'children': [],
        'count': 1
      }, {
        'itemId': 21490,
        'id': 'case_21490',
        'type': 'case',
        'order': 13,
        'prefix': 'TBB',
        'externalId': 32401,
        'name': 'TBB-32401: Make a call to another POD: Web RingOut',
        'children': [],
        'count': 1
      }, {
        'itemId': 21488,
        'id': 'case_21488',
        'type': 'case',
        'order': 14,
        'prefix': 'TBB',
        'externalId': 32387,
        'name': 'TBB-32387: Call to another POD to not provisioned Existing Phone number',
        'children': [],
        'count': 1
      }, {
        'itemId': 21492,
        'id': 'case_21492',
        'type': 'case',
        'order': 15,
        'prefix': 'TBB',
        'externalId': 32388,
        'name': 'TBB-32388: Call to another POD to recently deleted DID',
        'children': [],
        'count': 1
      }, {
        'itemId': 21491,
        'id': 'case_21491',
        'type': 'case',
        'order': 16,
        'prefix': 'TBB',
        'externalId': 32405,
        'name': 'TBB-32405: Call to another POD to suspended account (Main Number)',
        'children': [],
        'count': 1
      }, {
        'itemId': 21500,
        'id': 'case_21500',
        'type': 'case',
        'order': 17,
        'prefix': 'TBB',
        'externalId': 32407,
        'name': 'TBB-32407: Call to another POD to not sold number from free numbers pool',
        'children': [],
        'count': 1
      }, {
        'itemId': 21495,
        'id': 'case_21495',
        'type': 'case',
        'order': 18,
        'prefix': 'TBB',
        'externalId': 32409,
        'name': 'TBB-32409: Call to another POD to deleted number (within 10 days)',
        'children': [],
        'count': 1
      }, {
        'itemId': 21493,
        'id': 'case_21493',
        'type': 'case',
        'order': 19,
        'prefix': 'TBB',
        'externalId': 45200,
        'name': 'TBB-45200: Call to another POD to not purchased number',
        'children': [],
        'count': 1
      }, {
        'itemId': 21496,
        'id': 'case_21496',
        'type': 'case',
        'order': 20,
        'prefix': 'TBB',
        'externalId': 32465,
        'name': 'TBB-32465: Call to another POD getting 404 Not Found (no failover to ISR2/PSTN)',
        'children': [],
        'count': 1
      }, {
        'itemId': 21497,
        'id': 'case_21497',
        'type': 'case',
        'order': 21,
        'prefix': 'TBB',
        'externalId': 32412,
        'name': 'TBB-32412: Send fax to another POD (for version <=6.3)',
        'children': [],
        'count': 1
      }, {
        'itemId': 21502,
        'id': 'case_21502',
        'type': 'case',
        'order': 22,
        'prefix': 'TBB',
        'externalId': 32420,
        'name': 'TBB-32420: Make a call to another POD from HP registered in passive unit',
        'children': [],
        'count': 1
      }, {
        'itemId': 21499,
        'id': 'case_21499',
        'type': 'case',
        'order': 23,
        'prefix': 'TBB',
        'externalId': 36977,
        'name': 'TBB-36977: Make a call to another POD: ACR enabled on caller, ODCR by DTMF *9 on callee',
        'children': [],
        'count': 1
      }],
      'count': 23
    }, {
      'itemId': 19978,
      'id': 'suite_19978',
      'type': 'suite',
      'order': 12,
      'prefix': 'TBB',
      'name': 'Use My Existing Number (Forwarded numbers)',
      'children': [{
        'itemId': 21434,
        'id': 'case_21434',
        'type': 'case',
        'order': 1,
        'prefix': 'TBB',
        'externalId': 45352,
        'name': 'TBB-45352: Use my existing number: Call from HP to PSTN number added as forwarded to another',
        'children': [],
        'count': 1
      }, {
        'itemId': 21433,
        'id': 'case_21433',
        'type': 'case',
        'order': 2,
        'prefix': 'TBB',
        'externalId': 33914,
        'name': 'TBB-33914: Use my existing number: Use Forwarded Number as Outbound CallerID',
        'children': [],
        'count': 1
      }],
      'count': 2
    }, {
      'itemId': 19979,
      'id': 'suite_19979',
      'type': 'suite',
      'order': 13,
      'prefix': 'TBB',
      'name': 'Risk destinations/numbers',
      'children': [{
        'itemId': 21464,
        'id': 'case_21464',
        'type': 'case',
        'order': 1,
        'prefix': 'TBB',
        'externalId': 40403,
        'name': 'TBB-40403: Risk destinations - HP',
        'children': [],
        'count': 1
      }, {
        'itemId': 21463,
        'id': 'case_21463',
        'type': 'case',
        'order': 2,
        'prefix': 'TBB',
        'externalId': 40404,
        'name': 'TBB-40404: Risk destinations - Spartan',
        'children': [],
        'count': 1
      }, {
        'itemId': 21465,
        'id': 'case_21465',
        'type': 'case',
        'order': 3,
        'prefix': 'TBB',
        'externalId': 40405,
        'name': 'TBB-40405: Risk destinations - web RingOut',
        'children': [],
        'count': 1
      }, {
        'itemId': 21462,
        'id': 'case_21462',
        'type': 'case',
        'order': 4,
        'prefix': 'TBB',
        'externalId': 40406,
        'name': 'TBB-40406: Risk destinations - mobile RingOut',
        'children': [],
        'count': 1
      }, {
        'itemId': 21461,
        'id': 'case_21461',
        'type': 'case',
        'order': 5,
        'prefix': 'TBB',
        'externalId': 40407,
        'name': 'TBB-40407: Risk destinations - mobile direct RingOut',
        'children': [],
        'count': 1
      }, {
        'itemId': 21470,
        'id': 'case_21470',
        'type': 'case',
        'order': 6,
        'prefix': 'TBB',
        'externalId': 40408,
        'name': 'TBB-40408: Risk destinations - RingMe',
        'children': [],
        'count': 1
      }, {
        'itemId': 21469,
        'id': 'case_21469',
        'type': 'case',
        'order': 7,
        'prefix': 'TBB',
        'externalId': 40409,
        'name': 'TBB-40409: Risk destinations - warm transfer',
        'children': [],
        'count': 1
      }, {
        'itemId': 21468,
        'id': 'case_21468',
        'type': 'case',
        'order': 8,
        'prefix': 'TBB',
        'externalId': 40410,
        'name': 'TBB-40410: Risk destinations - blind transfer',
        'children': [],
        'count': 1
      }, {
        'itemId': 21466,
        'id': 'case_21466',
        'type': 'case',
        'order': 9,
        'prefix': 'TBB',
        'externalId': 40411,
        'name': 'TBB-40411: Risk destinations - forwarding',
        'children': [],
        'count': 1
      }, {
        'itemId': 21467,
        'id': 'case_21467',
        'type': 'case',
        'order': 10,
        'prefix': 'TBB',
        'externalId': 23953,
        'name': 'TBB-23953: UK Premium Rate numbers: Call to 0906 302 1222',
        'children': [],
        'count': 1
      }, {
        'itemId': 21460,
        'id': 'suite_21460',
        'type': 'suite',
        'order': 11,
        'prefix': 'TBB',
        'name': 'Risk destination - Verification Call / Record Greeting from SWS',
        'children': [{
          'itemId': 26720,
          'id': 'case_26720',
          'type': 'case',
          'order': 1,
          'prefix': 'TBB',
          'externalId': 42897,
          'name': 'TBB-42897: Verification call to the graylisted destination',
          'children': [],
          'count': 1
        }, {
          'itemId': 26719,
          'id': 'case_26719',
          'type': 'case',
          'order': 2,
          'prefix': 'TBB',
          'externalId': 42898,
          'name': 'TBB-42898: Verification call to the blacklisted destination',
          'children': [],
          'count': 1
        }, {
          'itemId': 26723,
          'id': 'case_26723',
          'type': 'case',
          'order': 3,
          'prefix': 'TBB',
          'externalId': 42901,
          'name': 'TBB-42901: Record Greeting from SWS - call to blacklisted destination',
          'children': [],
          'count': 1
        }, {
          'itemId': 26721,
          'id': 'case_26721',
          'type': 'case',
          'order': 4,
          'prefix': 'TBB',
          'externalId': 42902,
          'name': 'TBB-42902: Record Greeting from SWS - call to graylisted destination',
          'children': [],
          'count': 1
        }, {
          'itemId': 26722,
          'id': 'case_26722',
          'type': 'case',
          'order': 5,
          'prefix': 'TBB',
          'externalId': 42903,
          'name': 'TBB-42903: Record Greeting from SWS - call to whitelisted destination',
          'children': [],
          'count': 1
        }],
        'count': 5
      }, {
        'itemId': 21471,
        'id': 'case_21471',
        'type': 'case',
        'order': 12,
        'prefix': 'TBB',
        'externalId': 42700,
        'name': 'TBB-42700: CNV-17881 TAM::Pass tag attribute for a destination number to CRS',
        'children': [],
        'count': 1
      }, {
        'itemId': 21472,
        'id': 'case_21472',
        'type': 'case',
        'order': 13,
        'prefix': 'TBB',
        'externalId': 20253,
        'name': 'TBB-20253: CNV-5963: Fraud protection logic: call to blocked destination',
        'children': [],
        'count': 1
      }],
      'count': 17
    }];
}
