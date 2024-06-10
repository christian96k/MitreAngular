export enum HackerType  {
  APT28= 'APT28',
  APT29= 'APT29',
  GENERIC= 'GENERIC',
};





export const HackersMock = {
  [HackerType.APT28] : {
    title: 'Mitre Attack',
    name: 'APT28',
    external_id: 'G0007',
    aliases:
    {
      header:[
        {
          label: 'Nome',
          size:'col-6 col-md-4 col-lg-1'
        },
        {
          label: 'ID Esterno',
          size:'col-6 col-md-4 col-lg-1'

        },
        {
          label: 'Alias',
          size:'col-6 col-md-4 col-lg-10'
        }
      ],
      content:[
        {
          size:'col-6 col-md-4 col-lg-1',
          chips:[
            {
              label: 'APT28',
              isDark: true,
            }
          ]
        },
        {
          size:'col-6 col-md-4 col-lg-1',
          chips:[
            {
              label: 'G0007',
              isDark: true,
            }
          ]
        },
        {
          size:'col-6 col-md-4 col-lg-10',
          class: 'd-lg-flex gap-12',
          chips:[
            {
              label: 'Iron Twilight-1',
              class: 'my-2 my-lg-0'
            },
            {
              label: 'Iron Twilight-2',
              class: 'my-2 my-lg-0'
            },
            {
              label: 'Iron Twilight-3',
              class: 'my-2 my-lg-0'
            },
            {
              label: 'Iron Twilight-4',
              class: 'my-2 my-lg-0'
            },
            {
              label: 'Iron Twilight-5',
              class: 'my-2 my-lg-0'
            }
          ]
        },

      ]
    },
    description: "<a class='text-white' href='https://attack.mitre.org/groups/G0007/'> APT28</a>  is a threat group that has been attributed to Russia's General Staff Main Intelligence Directorate (GRU) 85th Main Special Service Center (GTsSS) military unit 26165.(Citation: NSA/FBI Drovorub August 2020)(Citation: Cybersecurity Advisory GRU Brute Force Campaign July 2021) This group has been active since at least 2004.(Citation: DOJ GRU Indictment Jul 2018)(Citation: Ars Technica GRU indictment Jul 2018)(Citation: Crowdstrike DNC June 2016)(Citation: FireEye APT28)(Citation: SecureWorks TG-4127)(Citation: FireEye <a class='text-white' href='https://attack.mitre.org/groups/G0007/'> APT28</a> January 2017)(Citation: GRIZZLY STEPPE JAR)(Citation: Sofacy DealersChoice)(Citation: Palo Alto Sofacy 06-2018)(Citation: Symantec APT28 Oct 2018)(Citation: ESET Zebrocy May 2019) APT28 reportedly compromised the Hillary Clinton campaign, the Democratic National Committee, and the Democratic Congressional Campaign Committee in 2016 in an attempt to interfere with the U.S. presidential election. (Citation: Crowdstrike DNC June 2016) In 2018, the US indicted five GRU Unit 26165 officers associated with APT28 for cyber operations (including close-access operations) conducted between 2014 and 2018 against the World Anti-Doping Agency (WADA), the US Anti-Doping Agency, a US nuclear facility, the Organization for the Prohibition of Chemical Weapons (OPCW), the Spiez Swiss Chemicals Laboratory, and other organizations.(Citation: US District Court Indictment GRU Oct 2018) Some of these were conducted with the assistance of GRU Unit 74455, which is also referred to as Sandworm Team.",
    link: 'https://attack.mitre.org/groups/G0007/',
    ipAdresss: '139.5.177.205'
  },

  [HackerType.APT29]: {
    title: 'Mitre Attack',
    name: 'APT29',
    external_id: 'G0008',
    aliases:
    {
      header:[
        {
          label: 'Nome',
          size:'col-6 col-md-4 col-lg-1'
        },
        {
          label: 'ID Esterno',
          size:'col-6 col-md-4 col-lg-1'

        },
        {
          label: 'Alias',
          size:'col-6 col-md-4 col-lg-10'
        }
      ],
      content:[
        {
          size:'col-6 col-md-4 col-lg-1',
          chips:[
            {
              label: 'APT29',
              isDark: true,
            }
          ]
        },
        {
          size:'col-6 col-md-4 col-lg-1',
          chips:[
            {
              label: 'G0008',
              isDark: true,
            }
          ]
        },
        {
          size:'col-6 col-md-4 col-lg-10',
          class: 'd-lg-flex gap-12',
          chips:[
            {
              label: 'Iron Twilight-1',
              class: 'my-2 my-lg-0'
            },
            {
              label: 'Iron Twilight-2',
              class: 'my-2 my-lg-0'
            },
            {
              label: 'Iron Twilight-3',
              class: 'my-2 my-lg-0'
            },
            {
              label: 'Iron Twilight-4',
              class: 'my-2 my-lg-0'
            },
            {
              label: 'Iron Twilight-5',
              class: 'my-2 my-lg-0'
            }
          ]
        },

      ]
    },
    description: "APT29 is threat group that has been attributed to Russia's Foreign Intelligence Service (SVR).[1][2] They have operated since at least 2008, often targeting government networks in Europe and NATO member countries, research institutes, and think tanks. APT29 reportedly compromised the Democratic National Committee starting in the summer of 2015.[3][4][5][6]. In April 2021, the US and UK governments attributed the SolarWinds Compromise to the SVR; public statements included citations to APT29, Cozy Bear, and The Dukes.[7][8] Industry reporting also referred to the actors involved in this campaign as UNC2452, NOBELIUM, StellarParticle, Dark Halo, and SolarStorm.[9][10][11][12][13][14]",
    link: 'https://attack.mitre.org/groups/G0007/',
    ipAdresss: '139.5.177.205'
  },
 [HackerType.GENERIC]:{
    title: 'Mitre Attack',
    name: 'GENERIC',
    external_id: 'G0000',
    aliases:
    {
      header:[
        {
          label: 'Nome',
          size:'col-6 col-md-4 col-lg-1'
        },
        {
          label: 'ID Esterno',
          size:'col-6 col-md-4 col-lg-1'

        },
        {
          label: 'Alias',
          size:'col-6 col-md-4 col-lg-10'
        }
      ],
      content:[
        {
          size:'col-6 col-md-4 col-lg-1',
          chips:[
            {
              label: 'GENERIC',
              isDark: true,
            }
          ]
        },
        {
          size:'col-6 col-md-4 col-lg-1',
          chips:[
            {
              label: 'G0000',
              isDark: true,
            }
          ]
        },
        {
          size:'col-6 col-md-4 col-lg-10',
          class: 'd-lg-flex gap-12',
          chips:[
            {
              label: 'Generic-1',
              class: 'my-2 my-lg-0'
            },
            {
              label: 'Generic-2',
              class: 'my-2 my-lg-0'
            },
            {
              label: 'Generic-3',
              class: 'my-2 my-lg-0'
            },
            {
              label: 'Generic-4',
              class: 'my-2 my-lg-0'
            },
            {
              label: 'Generic-5',
              class: 'my-2 my-lg-0'
            }
          ]
        },

      ]
    },
    description: "<a class='text-white' href='#'> GENERIC</a>  Lorem ipsum data Lorem ipsum data  Lorem ipsum data Lorem ipsum data Lorem ipsum data Lorem ipsum data Lorem ipsum data Lorem ipsum data Lorem ipsum data Lorem ipsum data Lorem ipsum data Lorem ipsum data Lorem ipsum data Lorem ipsum data Lorem ipsum data Lorem ipsum data Lorem ipsum data Lorem ipsum data Lorem ipsum data .",
    link: '#',
    ipAdresss: '139.5.174.205'
  }
}

// mock data
