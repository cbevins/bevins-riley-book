
    /**
     * A alternate, less verbose Manifest data structure
     * 'content', <newpage>, <title>, <items[]>
     * 'content', <newpage>, <component>
     * 'figure', <newpage>, <component> <title>
     * 'table', <newpage>, <component> <title>
     */
    export const manifest2 =[
        ['section', true, 'Chapter 2: Direct Ancestors of Samuel Bevins',
            [
                ['content', false, 'BevinsIntroduction'],
                ['table', false, 'BevinsImmigrantsTable','Immigrants of the Samuel Bevins Line'],
                ['table', false, 'BevinsOriginsTable', 'Origins of the Samuel Bevins Line'],
                ['section', true, 'Generations in Newbold Verdon, Leicestershire, England',
                    [
                        ['content', false, 'BevinsOrigins'],
                        ['figure', false, 'NewboldVerdonMap', 'Newbold Verdon and Environs']
                    ]
                ],
                ['section', true, 'The Bevins Surname',
                    [
                        ['section', false, 'Is the "Bevins" Surname French or Welsh?',
                            [
                                ['content', false, 'BevinsSurnameOrigin']
                            ],
                        ],
                        ['section', true, '"Bevins" Surname Prevelance',
                            [
                                ['content', 'BevinsSurnamePrevalence']
                            ],
                        ],
                    ]
                ],
    
                ['section', true, 'The Immigrants William Longford Bevins and Mary Bolt'
                    [
                        ['section', 'Hard Times in Newbold Verdon',
                            [
                                ['content', 'BevinsBoltHardtimes']
                            ],
                        ],
                        ['section', false, 'Crossing the Atlantic',
                            [
                                ['content', 'BevinsBoltCrossingAtlantic'],
                            ],
                        ],
                        ['section', false, 'The Bevins-Bolt Household Goes West',
                            [
                                ['content', 'BevinsBoltGoWest'],
                            ],
                        ]
                    ],
                ],
    
                ['section', true, 'The Immigrants Mary Ann (and Allace) White',
                    [
                        ['section', false, 'Life in England',
                            [
                                ['content', 'MaryWhiteInEngland']
                            ]
                        ]
                    ],
                ],
                ['section', true, 'Native American Family Connections'
                    [
                        ['content', 'BevinsNativeAmericanBranch']
                    ],
                ]
            ]
        ]
    ]
    