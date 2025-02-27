/**
 * GedcomPlaceKeys maps arbitrary GEDCOM 'PLAC' record text to the GeoLocationsDb
 * database of known geo-locations.
 * 
 * GedcomPlaces is an array of all extant 'PLAC' records from my GEDCOM files.
 * 'PLAC' record text may be blank, brief and abstract, long and detailed, or contain
 * arbitrary content from the info provider that we want to preserve and display
 * as needed.
 * 
 * However, we also need a way to assign geolocations to each place as accurately
 * as may be inferred from the PLAC text, and the keys to those geolocations are
 * specified here.
 */
export const GedcomPlaceKeys = new Map([
    ["", ""],
    ["?", ""],
    ["  Brethren, Manistee, Michigan, USA", "USA,MI,Manistee,Brethen"],
    [" Floyd, Kentucky, USA", "USA,KY,Floyd"],  // 1
    [" Beacon, Mahaska, Iowa, USA", "USA,IA,Mahaska,Beacon"], // 1
    [" Somerset, Pennsylvania, USA", "USA,PA,Somerset"], // 1
    [" Wayne Co, Virginia, USA", "USA,WV,Wayne"], // 1
    [", Jefferson, Iowa, USA", "USA,IA,Jefferson,"], // 1
    [", Minneapolis, Hennepin, Minnesota, USA", "USA,MN,Hennepin,Minneapolis,"], // 14
    [", Thurston, Washington, USA", "USA,WA,Thurston,"], // 1
    [", , , Germany", "DEU"],
    [", , , Ireland", "IRL"],
    [", , Ontario, Canada", "CAN,ON"],
    [", Devon, , England", "ENG,DEV"],
    [", Floyd, Kentucky, USA", "USA,KY,Floyd"],
    [" St Thomas the Apostle, Stanhope, Durham, England", "ENG,DUR,Stanhope,St Thomas the Apostle"],  // 1
    [", Washington, Virginia, USA", "USA,VA,Washington"],
    ["'s-Gravendeel, South Holland, Netherlands", "NLD,ZUI,'s-Gravendeel"],
    ["'s-Gravendeel,Zuid Holland,Nederland", "NLD,ZUI,'s-Gravendeel"],
    ["131 Northampton Rd, Leicester, Leicestershire, England", "ENG,LEI,Leicester,131 Northampton Rd"], // 1
    ["1365 Spruce Pi", "USA,MN,Hennepin"], // 1 Ray Heddens - Louise Petruskas wedding
    ["1595-1600 Streefkerk", "NLD,ZUI,Liesveld,Streefkerk,1595 1600 Streefkerk"], // 1
    ["1604 Park Av.", "USA,MN,Hennepin,Minneapolis,1604 Park Av"], // 1 Ray Vernon Heddens undated newspaper marriage index
    ["1815 Forty-Sixth Avenue N., Minneapolis, Hennepin, MN, USA", "USA,MN,Hennepin,Minneapolis,1815 Forty Sixth Avenue N "], // 1
    ["37 Allen St Co Durham", "ENG,DUR,37 Allen St,Co Durham"], // Thomas Nattrass microfilm, could be ENG or CAN
    ["3813 N. Janet lane, Brooklyn Center", "USA,MN,Hennepin,Brooklyn Center,3813 N Janet lane"], // 1
    ["3839 Lyndale Avenue N., Minneapolis, Hennepin, MN, USA", "USA,MN,Hennepin,Minneapolis,3839 Lyndale Avenue N "], // 1
    ["4 Newton Street, Kingston upon Hull, Yorkshire, England", "ENG,YKS,Kingston upon Hull,4 Newton Street"], // 1
    ["4:05 p.m., Sacramento, Sacramento County, California, USA", "USA,CA,Sacramento,Sacramento"], // 1
    ["523 18th Ave. , Moline", "USA,IL,Rock Island,Moline,523 18th Ave "], // 1 Kenneth A Bevins residence 1967
    ["5720 E. River Rd. , Fridley", "USA,MN,Anoka,Fridley,5720 E River Rd "], // 1
    ["Aachen, North Rhine-Westphalia, Germany", "DEU,NW,Aachen"],
    ["Aalten, Netherlands", "NLD,GEL,Aalten"],
    ["Aalsmeer, North Holland, Netherlands", "NLD,NOR,Aalsmeer"],
    ["Aalst, Waalre, Noord-Brabant, Netherlands", "NLD,NBR,Waalre,Aalst"],
    ["Acadia (Nova Scotia & New Brunswick), Canada", "CAN,NB,Acadia"],
    ["Accomack, Virginia, USA", "USA,VA,Accomack"],
    ["Abelmarle, Virginia, United States", "USA,VA,Albemarle"],
    ["Abilene, Dickinson, Kansas, USA", "USA,KS,Dickinson,Abilene"], // 1
    ["Achurch, East Northamptonshire Borough, Northamptonshire, England", "ENG,NOR,East Northamptonshire Borough,Achurch"], // 1
    ["Adelanto, San Bernardino, California, USA", "USA,CA,San Bernardino,Adelanto"], // 1
    ["Age -- Grafton, Rensselaer County, NY", "USA,NY,Rensselaer,Grafton"], // 1
    ["Adams Township, Cass County, Indiana", "USA,IN,Cass,Adams,Adams Township"],  // 1
    ["Adams, Cass, Indiana, USA", "USA,IN,Cass,Adams"],  // 2
    ["Albany, Clinton County, Kentucky, USA", "USA,KY,Clinton,Albany"], // 1
    ["Albert Lea, Minnesota, USA", "USA,MN,Freeborn,Albert Lea"], // 1
    ["Albemarle County, Virginia, United States of America", "USA,VA,Albemarle"],
    ["Albemarle, Virginia, USA", "USA,VA,Albemarle"],
    ["Albemarle, Virginia, United States", "USA,VA,Albemarle"],
    ["Albermarle, King William, Virginia, USA", "USA,VA,Albemarle"],
    ["Albermarle, Virginia, USA", "USA,VA,Albemarle"],
    ["Allegheny, Pennsylvania, United States", "USA,PA,Allegheny"], // 1
    ["Alliance, Stark, Ohio, USA", "USA,OH,Stark,Alliance"], // 1
    ["Alphen, Zuid-Holland, Pays-Bas", "NLD,ZUI,Alphen"],
    ["Alveley, Shropshire, England", "ENG,SAL,Alvely"],
    ["Am, Zweibrucken, Rheinland Pfalz, Allemagne", "DEU,RP,Zweibrucken,Am"],
    ["Amador Co, California, USA", "USA,CA,Amador"], // 1
    ["America", "USA"],  // 1
    ["An Glan, Zweibrucken, Rheinland Pfalz, Allemagne", "DEU,RP,Zweibrucken,An Glan"],
    ["An Glan, Zweibrucken, Rhineland-Palatinate, Allemagne", "DEU,RP,Zweibrucken,An Glan"],
    ["Andover, Essex, Massachusetts, USA", "USA,MA,Essex,Andover"], // 1
    ["Anna River, St. Paul'S Parish, Hanover, Virginia, USA", "USA,VA,Hanover,Anna River,St. Pauls Parish"],
    ["Annawan Township, Henry County, Illinois", "USA,IL,Henry,Annawan"],
    ["Annawan Twsp, Henry County, Illinois", "USA,IL,Henry,Annawan"],
    ["Annawan, , Henry, Illinois, USA", "USA,IL,Henry,Annawan"],
    ["Annawan, Annawan, Henry, Illinois, USA", "USA,IL,Henry,Annawan"],
    ["Annawan, Henry County, Illinois, United States of America", "USA,IL,Henry,Annawan"],
    ["Annawan, Henry, IL, USA", "USA,IL,Henry,Annawan"],
    ["Annawan, Henry, Illinois, USA", "USA,IL,Henry,Annawan"],
    ["Anne Arundel County, Maryland, United States of America", "USA,MD,Anne Arundel"],
    ["Anne Arundel County, Maryland, USA", "USA,MD,Anne Arundel"],
    ["Anne Arundel, Baltimore, Maryland, USA", "USA,MD,Anne Arundel,Baltimore"],
    ["Anne Arundel, British Colonial America, Maryland, USA", "USA,MD,Anne Arundel"],
    ["Anne Arundel, Maryland, United States", "USA,MD,Anne Arundel"],
    ["Anne Arundel, Maryland, British America", "USA,MD,Anne Arundel"],
    ["Anne Arundel, Maryland, USA", "USA,MD,Anne Arundel"],
    ["Anne Arundell County, Maryland, USA", "USA,MD,Anne Arundel"],
    ["Anoka, Anoka, Minnesota, USA", "USA,MN,Anoka,Anoka"], // 2
    ["Anoka, Minnesota, USA", "USA,MN,Anoka"], // 1
    ["Anoka County, Minnesota, USA", "USA,MN,Anoka"],  // 1
    ["Apple Valley, Minnesota, USA", "USA,MN,Dakota,Apple Valley"], // 1
    ["Appeltern, Gelderland, Pays-Bas", "NLD,GEL,Appeltern"],
    ["Argyle, Marshall, Minnesota, USA", "USA,MN,Marshall,Argyle"],
    ["Argyle, Washington, New York, United States", "USA,NY,Washington,Argyle"],
    ["Arheilgen, Darmstadt, Hesse, Germany", "DEU,HE,Darmstadt,Arheilgen"],  // 1
    ["Arizona, United States of America", "USA,AZ"], // 1
    ["Arlington, Snohomish, Washington, USA", "USA,WA,Snohomish,Arlington"], // 1
    ["Armagh, Northern Ireland", "NIR,ARM"],
    ["Armstrong, Pennsylvania, USA", "USA,PA,Armstrong"], // 1
    ["Ashby de la Zouch, Leicestershire", "ENG,LEI,Ashby de la Zouch"],
    ["Ashby de la Zouch, Leicestershire, England", "ENG,LEI,Ashby de la Zouch"], // 1
    ["Ashford, Windham, Connecticut, USA", "USA,CT,Windham,Ashford"],
    ["Ashland, Boyd, Kentucky, USA", "USA,KY,Boyd,Ashland"], // 1
    ["Ashland, Boyd County, Kentucky, United States of America", "USA,KY,Boyd,Ashland"],
    ["Asprington, Devon, England", "ENG,DEV,Asprington"], // 1
    ["Aston Flamville, Leicestershire, England", "ENG,LEI,Aston Flamville"],
    ["Aston Flamville,Leicester,England", "ENG,LEI,Aston Flamville"],  // 1
    ["Athens, Ohio, USA", "USA,OH,Athens"],  // 1
    ["Athens Twp, Harrison Cty., Ohio, USA", "USA,OH,Harrison,Athens Township"], // 1
    ["Atlanta, GA", "USA,GA,Fulton,Atlanta"], // 2
    ["Atlanta, Georgia, USA", "USA,GA,Fulton,Atlanta"], // 1
    ["Atwood, Kosciusko, Indiana, USA", "USA,IN,Kosciusko,Atwood"],
    ["Atwood, Kosciusko, Indiana, United States", "USA,IN,Kosciusko,Atwood"],
    ["Augusta, Virginia", "USA,VA,Augusta"], // 1
    ["Augusta County, Virginia, USA", "USA,VA,Augusta"],
    ["Avon, Livingston County, New York, USA", "USA,NY,Livingston,Avon"], // 1
    ["Aycliffe, Durham, England", "ENG,DUR,Avcliffe"],
    ["Ayr, Ayrshire, Scotland", "SCO,AYR,Ayr"],
    ["Backstugan Nyalund, Gubbsmåla, Södra Sandsjö, Kronoberg, Sverige", "SWE,KRO,Södra Sandsjö,Gubbsmåla,Backstugan Nyalund"], // 2
    ["Badoura, Hubbard, Minnesota, United States", "USA,MN,Hubbard,Badoura"], // 1
    ["Bagworth, Leicestershire, England", "ENG,LEI,Bagworth"],
    ["Baie-St-Paul, Charlevoix, Quebec, Canada", "CAN,QC,Charlevoix,Baie-St-Paul"],
    ["Ball Club, Itasca, Minnesota, USA", "USA,MN,Itasca,Ball Club"],
    ["Ballieston, Old Monkland, Lanarkshire, Scotland", "SCO,LKS,Old Monkland,Ballieston"],
    ["Bally Shannon, Donegal, Ulster, Ireland", "IRL,DON,Bally Shannon"],
    ["Bakke farm, Sør-Aurdal, Oppland, Norvège", "NOR,OPP,Sør-Aurdal,Bakke farm"],
    ["Baltimore County, Maryland, United States of America", "USA,MD,Baltimore"], // 1
    ["Baltimore City, Maryland, USA", "USA,MD,Baltimore"],
    ["Baltimore, Anne Arundel, Maryland, United States", "USA,MD,Baltimore,Baltimore"],  // 1
    ["Baltimore, Baltimore, Maryland, USA", "USA,MD,Baltimore,Baltimore"],
    ["Baltimore, Baltimore, Maryland, United States", "USA,MD,Baltimore,Baltimore"],
    ["Baltimore, Maryland, USA", "USA,MD,Baltimore,Baltimore"],
    ["Bammental, Rhein-Neckar-Kreis, Baden-Wuerttemberg, Germany", "DEU,BW,Rhein-Neckar-Kreis,Bammental"],
    ["Bammenthal, Rhein-Neckar-Kreis, Baden-Wuerttemberg, Germany", "DEU,BW,Rhein-Neckar-Kreis,Bammental"],  // 1
    ["Bänkeboda, Älmeboda, Kronoberg, Sverige", "SWE,KRO, Älmeboda,Bänkeboda"],
    ["Baptist Churchyard, Bristol, Perry, Ohio, USA", "USA,OH,Perry,Bristol,Baptist Churchyard"], // 1
    ["Barrett, Grant County, Minnesota, United States of America", "USA,MN,Grant,Barrett"], // 1
    ["Barrington, Bristol County, Rhode Island, USA", "USA,RI,Bristol,Barrington"],
    ["Barendrecht, Zuid-Holland, Pays-Bas", "NLD,ZUI,Barendrecht"],
    ["Barnstable County, Massachusetts, USA", "USA,MA,Barnstable"],  // 1
    ["Barnstable, Barnstable, Massachusetts, United States", "USA,MA,Barnstable"],  // 1
    ["Barnstable, Massachusetts, USA", "USA,MA,Barnstable"],  // 1
    ["Barnstable, Massachusetts", "USA,MA,Barnstable"],  // 1
    ["Barwell Leicestershire", "ENG,LEI,Barwell"],  // 1
    ["Bath County, Virginia", "USA,VA,Bath"],  // 1
    ["Barwell, Leicestershire, England", "ENG,LEI,Barwell"],
    ["Bass Lake, Itasca, Minnesota, USA", "USA,MN,Itasca,Bass Lake"], // 2
    ["Bath, Augusta County, Virginia, USA", "USA,VA,Augusta,Bath"],
    ["Bavaria, Germany", "DEU,BY"],
    ["Beacon, Mahaska County, Iowa, United States of America", "USA,IA,Mahaska,Beacon"],
    ["Beacon, Mahaska, Iowa", "USA,IA,Mahaska,Beacon"],  // 1
    ["Beatrice, Gage, Nebraska, USA", "USA,NE,Gage,Beatrice"], // 1
    ["Beaver, Pike, Ohio, USA", "USA,OH,Pike,Beaver"], // 2
    ["Beaverton, Oregon, USA", "USA,OR,Washington,Beaverton"], // 1
    ["Becker County, Minnesota, United States of America", "USA,MN,Becker"],
    ["Becker, Minnesota, USA", "USA,MN,Becker"],
    ["Bedford, Pennsylvania", "USA,PA,Bedford"],  // 1
    ["Bedford, Tennessee", "USA,TN,Bedford"],  // 1
    ["Bedford, Meigs, Ohio, USA", "USA,OH,Meigs,Bedford"], // 1
    ["Belleville, Republic, Kansas, USA", "USA,KS,Republic,Belleville"], // 1
    ["Bellevue, Nebraska, USA", "USA,NE,Sarpy,Bellevue"], // 4
    ["Bellingham, Whatcom, Washington, USA", "USA,WA,Whatcom,Bellingham"], // 1
    ["Belgrave, Leicestershire, England", "ENG,LEI,Belgrave"], // 1
    ["Bellmont, Franklin, New York, United States", "USA,NY,Franklin,Bellmont"], // 2
    ["Beltrami, Minnesota, USA", "USA,MN,Beltrami"],
    ["Beltrami County, Minnesota, United States of America", "USA,MN,Beltrami"],  // 1
    ["Bemidji, Beltrami County, Minnesota, United States of America", "USA,MN,Beltrami,Bemidji"],  // 4
    ["Bemidji, Beltrami, Minnesota, USA", "USA,MN,Beltrami,Bemidji"],  // 5
    ["Bemidji, Minnesota, USA", "USA,MN,Beltrami,Bemidji"],  // 2
    ["Bethlehem, Cass, Indiana, USA", "USA,IN,Clark,Bethlehem Township"],  // 10
    ["Bethlehem, Cass, Indiana, United States", "USA,IN,Clark,Bethlehem Township"],  // 1
    ["Bethlehem Township, Cass County, Indiana", "USA,IN,Clark,Bethlehem Township"],
    ["Bethelem, Cass County, Indiana, USA", "USA,IN,Clark,Bethlehem Township"],  // 1
    ["Berthier, (Sainte-Geneviève), (Berthier), Québec, Canada", "CAN,QC,Lanaudiere,Berthier,Sainte-Geneviève"],
    ["Berthierville, D'Autray, Quebec, Canada", "CAN,QC,Berthier,Lanaudiere,D'Autray,Berthierville"], // 1
    ["Berthierville, [Berthier], Québec, Canada", "CAN,QC,Lanaudiere,Berthier,Berthierville"], // 1
    ["Berwick, York, ME, Maine, USA", "USA,ME,York,Berwick"],  // 1
    ["Bjørnebyqvern, Åsnes, Hedmark, Norvège", "NOR,HED,Åsnes,Bjørnebyqvern"],
    ["Bisbee, Towner, North Dakota, United States", "USA,ND,Towner,Bisbee"], // 1
    ["Black Hawk War, Bartholomew, Indiana, United States", "USA,IN,Bartholomew,Black Hawk War"], // 1
    ["Blackclough, Stanhope, Durham, England", "ENG,DUR,Stanhope,Blackclough"],
    ["Blair, Blair, Pennsylvania, United States", "USA,PA,Blair"],
    ["Blacksburg, Montgomery, Virginia, United States", "USA,VA,Montgomery,Blacksburg"], // 1
    ["Bland, Bland, Virginia, USA", "USA,VA,Bland,Bland"],
    ["Blandford, Blandford, Hampden, Massachusetts, USA", "USA,MA,Hampden,Blandford,Blandford"],  // 8
    ["Bloomfield, Nebraska", "USA,NE,Knox,Bloomfield"],
    ["Bloomington, Minnesota", "USA,MN,Hennepin,Bloomington"], // 1
    ["Blount Township, Vermilion County, Illinois, USA", "USA,IL,Vermilion,Blount Township"],
    ["Blowers, Otter Tail, Minnesota, USA", "USA,MN,Otter Tail,Blowers"], // 5
    ["Board Camp, Polk, Arkansas, United States", "USA,AR,Polk,Board Camp"], // 1
    ["Boone, Kentucky, United States", "USA,KY,Boone"], // 1
    ["Boons Camp, Johnson County, Kentucky, USA", "USA,KY,Johnson,Boons Camp"], // 1
    ["Boston, Massachusetts, USA", "USA,MA,Suffolk,Boston"],  // 1
    ["Boston, Suffolk, Massachusetts, USA", "USA,MA,Suffolk,Boston"], // 2
    ["Botamåla, Älmeboda, Kronoberg, Sverige", "SWE,KRO,Älmeboda,Botamåla"],
    ["Botetourt, Virginia, United States", "USA,VA,Botetourt"],
    ["Bourbon, Marshall, Indiana, USA", "USA,IN,Marshall,Bourbon"],
    ["Bourbon, Bourbon, Marshall, Indiana, USA", "USA,IN,Marshall,Bourbon Township,Bourbon"], // 8
    ["Bourbon, Indiana", "USA,IN,Marshall,Bourbon Township,Bourbon"], // 1
    ["Bourbon, Kentucky, USA", "USA,KY,Bourbon"], // 1
    ["Bourbon, Marshall, Indiana, United States", "USA,IN,Marshall,Bourbon Township,Bourbon"], // 3
    ["Brainerd, Crow Wing Co, MN", "USA,MN,Crow Wing,Brainerd"], // 1
    ["Breckenridge, Wilkin County, Minnesota, United States of America", "USA,MN,Wilkin,Breckenridge"], // 1
    ["Brethren, Manistee, Michigan, USA", "USA,MI,Manistee,Brethern"],  // 1
    ["Brethren, Michigan", "USA,MI,Manistee,Brethren"], // 2
    ["Bridgewater, Somerset, England", "ENG,SOM,Bridgewater"], // 1
    ["Bridgwater, Somerset, England", "ENG,SOM,Bridgewater"], // 1
    ["Brielle, Zuid-Holland, Pays-Bas", "NLD,ZUI,Brielle"], // 1
    ["Bristol, Bristol, RI, USA", "USA,RI,Bristol,Bristol"],
    ["Bristol, Bristol, Rhode Island, USA", "USA,RI,Bristol,Bristol"],
    ["Bristol, Rhode Island, USA", "USA,RI,Bristol"],
    ["Bristol, Somerset, England", "ENG,SOM,Bristol"],
    ["Bristol County, Rhode Island, USA", "USA,RI,Bristol"],  // 1
    ["Brixham", "ENG,DEV,Brixham"], // 1
    ["Brixham, Devon, England", "ENG,DEV,Brixham"],
    ["Brixham, Devon,  England", "ENG,DEV,Brixham"],
    ["Brixham, Devon, England, United Kingdom", "ENG,DEV,Brixham"],
    ["Brixham, Devonshire, England", "ENG,DEV,Brixham"],
    ["Brixham,Devon,England", "ENG,DEV,Brixham"],
    ["Brixham ,Devon, England", "ENG,DEV,Brixham"],
    ["Brixham Devon, England", "ENG,DEV,Brixham"],
    ["Broadlowns General, Polk, Iowa", "USA,IA,Polk,Broadlowns General Hospital"], // 1
    ["Broadwood, Stanhope, Durham, England", "ENG,DUR,Stanhope,Broadwood"],
    ["Brock", "CAN,ON,Durham,Brock"], // 1
    ["Brooklyn Park, Minnesota, USA", "USA,MN,Hennepin,Brooklyn Park"], // 1
    ["Brookville, Montgomery County, Ohio, United States of America", "USA,OH,Montgomery,Brookville"],
    ["Brown, Illinios, USA", "USA,IL,Brown"], // 1
    ["Brown, Indiana, USA", "USA,IN,Brown"], // 1
    ["Browns Cove, Albemarle, Virginia, USA", "USA,VA,Albemarle,Browns Cove"], // 1
    ["Buckingham, Buckingham, Virginia, USA", "USA,VA,Buckingham,Buckingham"],
    ["Buckingham, Virginia, United States", "USA,VA,Buckingham"],  // 1
    ["Buckinghamshire, England", "ENG,BKM"],
    ["Buckinghamshire, England ", "ENG,BKM"],
    ["Burke County, North Carolina, USA", "USA,NC,Burke"],
    ["Burlington, Coffey County, Kansas, United States of America", "USA,KS,Coffey,Burlington"], // 2
    ["Burton Upon Trent, Staffordshire, England", "ENG,STS,Burton Upon Trent"],  // 1
    ["Buse, Floyd, Kentucky, USA", "USA,KY,Floyd,Buse"], // 1
    ["Byron, Thayer County, Nebraska, United States of America", "USA,NE,Thayer,Byron"], // 1
    ["Byron, Thayer, Nebraska, USA", "USA,NE,Thayer,Byron"], // 2
    ["Cabell County, West Virginia, United States of America", "USA,WV,Cabell"],
    ["Cabell, West Virginia, United States", "USA,WV,Cabell"], // 1
    ["Cabell, Virginia, United States", "USA,WV,Cabell"],
    ["Cacouna, Riviere-du-Loup, Québec, Canada", "CAN,QC,Bas-Saint-Laurent,Riviere-du-Loup,Cacouna"],  // 1
    ["Cadeby, Leicestershire, England", "ENG,LEI,Cadeby"],  // 1
    ["Cadiz, Harrison County, Ohio, USA", "USA,OH,Harrison,Cadiz"], // 2
    ["Cadiz, Harrison, Ohio, United States", "USA,OH,Harrison,Cadiz"], // 1
    ["Cadiz, Jefferson, Ohio, USA", "USA,OH,Harrison,Cadiz"], // 1
    ["Cadiz Twp, Jefferson/Harrison Cty, Ohio, USA", "USA,OH,Harrison,Cadiz Township"],
    ["Cadiz, Harrison, Ohio, USA", "USA,OH,Harrison,Cadiz"],  // 1
    ["California, United States", "USA,CA"], // 1
    ["Callaway, Franklin, Virginia, USA", "USA,VA,Franklin,Callaway"],
    ["Calvert Cliffs, Calvert, Maryland, USA", "USA,MD,Calvert,Calvert Cliffs"],
    ["Camanche, Clinton, Iowa, United States of America", "USA,IA,Clinton,Camanche"], // 1
    ["Camanche, Iowa", "USA,IA,Clinton,Camanche"], // 1
    ["Cambridge, Cambridgeshire, England", "ENG,CAM,Cambridge"],
    ["Cambusnethan, Lanark", "SCO,LKS,Cambusnethan"],
    ["Cambusnethan, Lanarkshire, Scotland", "SCO,LKS,Cambusnethan"],
    ["Cambusnethan,Lanark,Scotland", "SCO,LKS,Cambusnethan"],
    ["Canada", "CAN"],
    ["Cannon City, Rice, Minnesota, USA", "USA,MN,Rice,Cannon City"], // 1
    ["Canton, Michigan, USA", "USA,MI,Wayne,Canton"], // 2
    ["Capt John G Poindexters District, Surry, North Carolina, USA", "USA,NC,Surry,Capt John G Poindexters District"], // 1
    ["Carmangay, Strathmore Census Division, Alberta, Canada", "CAN,AB,Strathmore Census Division,Carmangay"], // 1
    ["Carrickmacross, Monaghan, Ireland", "IRL,MOG,Carrickmacross"],
    ["Carroll County, IN", "USA,IN,Carroll"], // 1
    ["Carroll, Indiana, United States", "USA,IN,Carroll"], // 1
    ["Carroll, Indiana", "USA,IN,Carroll"],
    ["Carrol County, Indiana, USA", "USA,IN,Carroll"],
    ["Carroll County, Indiana", "USA,IN,Carroll"],
    ["Carroll County, Maryland, United States of America", "USA,MD,Carroll"],
    ["Carson City, Nevada, USA", "USA,NV,Carson City,Carson City"],  // 1
    ["Carson City, Nevada", "USA,NV,Carson City,Carson City"],  // 1
    ["Carstairs, Lanarkshire, Scotland", "SCO,LKS,Carstairs"], // 1
    ["Cartwright, Ontario, Canada", "CAN,ON,Cartwright"],
    ["Cass, Indiana, United States", "USA,IN,Cass"], // 1
    ["Cass County, Indiana, United States of America", "USA,IN,Cass"],
    ["Cass, Indiana, USA", "USA,IN,Cass"],
    ["Cass Township, White County, Indiana, USA", "USA,IN,White,Cass Township"],
    ["Cass, Minnesota, USA", "USA,MN,Cass"],
    ["Cass Cty, Indiana, USA", "USA,IN,Cass"],
    ["Castor, Northamptonshire, England", "ENG,NOR,Castor"],  // 1
    ["Cattle Marks, Somerset, Maryland", "USA,MD,Somerset,Cattle Marks"], // 3
    ["Cavan, Northumberland, Ontario, Canada", "CAN,ON,Peterborough,Cavan"], // 1
    ["Cavan, Peterborough County, Ontario, Canada", "CAN,ON,Peterborough,Cavan"],
    ["Cavan, Peterborough, Ontario, Canada", "CAN,ON,Peterborough,Cavan"],
    ["Cayuga, New York, USA", "USA,NY,Cayuga"],
    ["Cayuga County, New York, United States of America", "USA,NY,Cayuga"],
    ["Center, Hancock, Indiana, USA", "USA,IN,Hancock,Center"], // 1
    ["Center, O Brien, Iowa, USA", "USA,IA,O'Brien,Center"], // 11
    ["Cerro Gordo, Iowa", "USA,IA,Cerro Gordo"], // 1
    ["Champlin Township, Champlin, Hennepin, Minnesota, USA", "USA,MN,Hennepin,Champlin"], // 3
    ["Champlin, Champlin, Hennepin, Minnesota, USA", "USA,MN,Hennepin,Champlin,Champlin"], // 3
    ["Champlin, Hennepin, Minnesota, USA", "USA,MN,Hennepin,Champlin"], // 8
    ["Champlin, Hennepin, Minnesota", "USA,MN,Hennepin,Champlin"], // 4
    ["Champlin, Minnesota, USA", "USA,MN,Hennepin,Champlin"], // 1
    ["Channelview, TX", "USA,TX,Harris,Channelview"], // 1
    ["Channelview, Texas, USA", "USA,TX,Harris,Channelview"], // 2
    ["Charles County, Maryland, USA", "USA,MD,Charles"],
    ["Charles, Maryland, United States", "USA,MD,Charles"], // 1
    ["Charlois, Rotterdam, Zuid-Holland, Netherlands", "NLD,ZUI,Rotterdam,Charlois"],
    ["Charlois, South Holland, Netherlands", "NLD,ZUI,Rotterdam,Charlois"], // 1
    ["Chatanooga, TN, USA", "USA,TN,Hamilton,Chatanooga"], // 1
    ["Châteauguay, Quebec, Canada", "CAN,QC,Châteauguay"],
    ["Chauncey, Athens, Ohio, USA", "USA,OH,Athens,Chauncey"], // 1
    ["Chealiston, Devon, England", "ENG,DEV,Chealiston"],
    ["Cherokee County, Iowa, USA", "USA,IA,Cherokee"], // 1
    ["Cherokee, Iowa, United States", "USA,IA,Cherokee"], // 3
    ["Cheshire, England", "ENG,CHS"], // 2
    ["Cheshire, Cheshire, England", "ENG,CHS,Cheshire"],
    ["Chester, Clinton, Ohio, USA", "USA,OH,Clinton,Chester Township"], // 1
    ["Chester, Pennsylvania", "USA,PA,Chester"], // 1
    ["Chester County, Pennsylvania, USA", "USA,PA,Chester"],
    ["Chester County, Pennsylvania, United States of America", "USA,PA,Chester"],
    ["Chester, Pennsylvania, USA", "USA,PA,Chester"],
    ["Chesterfield, Chesterfield, Virginia, USA", "USA,VA,Chesterfield"],
    ["Chesterfield, Virginia, USA", "USA,VA,Chesterfield"],
    ["Chesterfield County, Virginia, USA", "USA,VA,Chesterfield"],
    ["Chesterfield, Chesterfield, Virginia, United States", "USA,VA,Chesterfield,Chesterfield"],
    ["Chesterfield, Henrico, Virginia, USA", "USA,VA,Chesterfield,Chesterfield"],
    ["Christian, Kentucky, United States", "USA,KY,Christian"], // 1
    ["Christiana, Norway", "NOR,OSL,Oslo"],  // 1   former name of Oslo
    ["Churston Ferrers, Devon, England", "ENG,DEV,Churston Ferrers"],
    ["Churston Ferrers, Devonshire, England", "ENG,DEV,Churston Ferrers"],  // 1
    ["Churubusco, Clinton, New York, USA", "USA,NY,Clinton,Churubusco"],
    ["Churubusco, Clinton, New York, United States", "USA,NY,Clinton,Churubusco"],
    ["Cillaarshoek (Strijen), Zuid-Holland, Pays-Bas", "NLD,ZUI,Cillaarshoek"],
    ["Cillaarshoek, Nederland", "NLD,ZUI,Cillaarshoek"],
    ["Cillaarshoek, Strijen, Zuid-Holland, Netherlands", "NLD,ZUI,Cillaarshoek"],
    ["Cillaarshoek, Zuid-Holland, Pays-Bas", "NLD,ZUI,Cillaarshoek"],
    ["Cillaarshoek", "NLD,ZUI,Cillaarshoek"],
    ["Clackamas County, Oregon, USA", "USA,OR,Clackamas"], // 1
    ["Clackamas, Oregon, United States", "USA,OR,Clackamas"], // 1
    ["Claremont, , Western Australia, Australia", "AUS,WA,Claremont"], // 1
    ["Clermont County, Ohio, USA", "USA,OH,Clermont"], // 1
    ["Clark, Ohio, USA", "USA,OH,Clark"],  // 1
    ["Clay, Cass, Indiana, USA", "USA,IN,Cass,Clay"], // 1
    ["Clay, La Grange, Indiana, USA", "USA,IN,LaGrange,Clay"], // 2
    ["Clearfield, Taylor County, Iowa, United States of America", "USA,IA,Taylor,Clearfield"], // 1
    ["Cleveland, Whitley, Indiana, USA", "USA,IN,Whitley,Cleveland"], // 1
    ["Cleveland, Illinois", "USA,IL,Henry,Cleveland"],
    ["Cliffs, Calvert, Maryland, USA", "USA,MD,Calvert,Cliffs"], // 1
    ["Clinton, Clinton, New York, USA", "USA,NY,Clinton,Clinton"],
    ["Clinton, Clinton, New York, United States", "USA,NY,Clinton,Clinton"],
    ["Clinton, Clinton, New York", "USA,NY,Clinton,Clinton"],
    ["Clinton County, New York, USA", "USA,NY,Clinton"], // 1
    ["Clinton Township, Elkhart County, Indiana, USA", "USA,IN,Elkhart,Clinton Township"], // 2
    ["Clinton, Indiana, USA", "USA,IN,Clinton"], // 1
    ["Clinton, Kentucky, USA", "USA,KY,Clinton"], // 1
    ["Clinton, Mooers Forks, Clinton, New York, USA", "USA,NY,Clinton,Mooers Forks,Clinton"], // 4
    ["Clinton, New York, United States", "USA,NY,Clinton"], // 1
    ["Clinton, Standish, New York, United States", "USA,NY,Clinton,Standish"], // 1
    ["Clotts Farm, Stanton under Bardon, Leicestershire, England", "ENG,LEI,Stanton under Bardon,Clotts Farm"],
    ["Clunette, Kosciusko County, Indiana, United States of America", "USA,IN,Kosciusko,Clunette"], // 1
    ["Coal Valley, Rock Island, Illinois, USA", "USA,IL,Rock Island,Coal Valley"],
    ["Coffey County, Kansas, United States of America", "USA,KS,Coffey"], // 1
    ["Coffey, Kansas, USA", "USA,KS,Coffey"],
    ["Cohasset, Itasca, Minnesota, USA", "USA,MN,Itasca,Cohasset"], // 1
    ["Cohasset, Itasca, Minnesota, United States", "USA,MN,Itasca,Cohasset"], // 1
    ["Coleraine, Minnesota, USA", "USA,MN,Itasca,Coleraine"], // 1
    ["Colfax, Jasper County (US/IA)", "USA,IA,Jasper,Colfax"],
    ["Colfax, Jasper County, Iowa, USA", "USA,IA,Jasper,Colfax"],
    ["Colfax, Jasper County, Iowa, United States of America", "USA,IA,Jasper,Colfax"],
    ["Colfax, Jasper, Iowa, USA", "USA,IA,Jasper,Colfax"],
    ["Colfax Ward 2, Jasper, Iowa, USA", "USA,IA,Jasper,Colfax,Ward 2"], // 9
    ["Colfax Ward 3, Jasper, Iowa, USA", "USA,IA,Jasper,Colfax,Ward 3"], // 5
    ["Colfax, IA", "USA,IA,Jasper,Colfax"], // 1
    ["Colorado, United States", "USA,CO"], // 1
    ["Columbus City, Louisa County, Iowa, United States of America", "USA,IA,Louisa,Columbus City"], // 1
    ["Co. Cavan, Ireland", "IRL,CAV"],
    ["Comanche, Comanche County, Texas, USA", "USA,TX,Comanche,Comanche"], // 1
    ["Comber, Down County, Ulster, Ireland", "NIR,DOW,Comber"],
    ["Comber, County Down, Ulster, Ireland", "NIR,DOW,Comber"],
    ["Comber, County Down, Ulster,Ireland", "NIR,DOW,Comber"],
    ["Comber, Down, Ulster, Ireland", "NIR,DOW,Comber"],
    ["Comer, McLean County, Kentucky, United States of America", "USA,KY,McLean,Comer"],
    ["Connecticut, United States of America", "USA,CT"], // 1
    ["Connecticut", "USA,CT"],  // 2
    ["Connecticut, USA", "USA,CT"],
    ["Consort, Hanna Census Division, Alberta, Canada", "CAN,AB,Consort,Hanna Census Division"], // 1
    ["Contra Costa, California, USA", "USA,CA,Contra Costa"], // 1
    ["Conway County, Arkansas, USA", "USA,AR,Conway"], // 1
    ["Cook County, Illinois, USA", "USA,IL,Cook"], // 1
    ["Coon Rapids, Anoka, Minnesota, USA", "USA,MN,Anoka,Coon Rapids"],
    ["Copper Hill, Floyd, Virginia, USA", "USA,VA,Floyd,Copper Hill"], // 2
    ["Copper Hill, Floyd, Virginia, United States", "USA,VA,Floyd,Copper Hill"], // 1
    ["Cork, Cork, Ireland", "IRL,COR,Cork"],
    ["Cork, Ireland", "IRL,COR"],
    ["Cornwall, England", "ENG,COR"],
    ["Coshocton, Coshocton, Ohio, United States", "USA,OH,Coshocton,Coshocton"],
    ["County Down, Ulster Province, Ireland", "NIR,DOW"], // 1
    ["County Down, Ulster, Ireland", "NIR,DOW"],
    ["County Durham, England", "ENG,DUR"],
    ["Courtland, Republic, Kansas, USA", "USA,KS,Republic,Courtland"], // 1
    ["Cowpasture, Augusta County, Virginia, USA", "USA,VA,Augusta,Cowpasture"], // 3
    ["Coventry, Warwickshire, England", "ENG,WAR,Coventry"],
    ["Crab Orchard, Lincoln, Kentucky, United States", "USA,KY,Lincoln,Crab Orchard"], // 1
    ["Crawford, Ohio, USA", "USA,OH,Crawford"],
    ["Crawford, Washignton County,Iowa, USA", "USA,IA,Washington,Crawfordsville"],
    ["Crawford Township, Washington County, IA", "USA,IA,Washington,Crawford Township"], // 1
    ["Crawford, Washington, Iowa, USA", "USA,IA,Washington,Crawford"], // 7
    ["Crawfordsville, Iowa", "USA,IA,Washington,Crawfordsville"], // 1
    ["Crawfordsville, Washington, Iowa, USA", "USA,IA,Washington,Crawfordsville"], // 1
    ["Crawfordsville,Washington County, Iowa, USA", "USA,IA,Washington,Crawfordsville"],
    ["Crowell, Foard, Texas, United States", "USA,TX,Foard,Crowell"], // 1
    ["Culpeper, VA.", "USA,VA,Culpeper"], // 1
    ["Culpeper County, Virginia, USA", "USA,VA,Culpeper"],
    ["Daniel's Creek, Johnson County, Kentucky, USA", "USA,KY,Johnson,Daniels Creek"], // 1
    ["Daniels Creek, Floyd, Kentucky, USA", "USA,KY,Floyd,Daniels Creek"],
    ["Daniels Creek, Johnson, Kentucky, USA,", "USA,KY,Johnson,Daniels Creek"],
    ["Daniels Creek, Johnson, Kentucky, USA", "USA,KY,Johnson,Daniels Creek"],
    ["Danville, Vermilion County, Illinois, United States of America", "USA,IL,Vermilion,Danville"], // 1
    ["Danville, Vermilion, Illinois, USA", "USA,IL,Vermilion,Danville"], // 1
    ["Danville, Vermilion, Illinois, United States", "USA,IL,Vermilion,Danville"],
    ["Darke, Ohio, United States", "USA,OH,Darke"], // 1
    ["Darke County, Ohio, United States", "USA,OH,Darke"],
    ["Dartmouth, Bristol, Massachusetts, USA", "USA,MA,Bristol,Dartmouth"], // 1
    ["Dartmouth, Bristol, Massachusetts, United States", "USA,MA,Bristol,Dartmouth"], // 1
    ["Dartmouth, Devon, England", "ENG,DEV,Dartmouth"],
    ["Dassel, Meeker, Minnesota, United States", "USA,MN,Meeker,Dassel"], // 1
    ["Decatur, GA", "USA,GA,DeKalb,Decatur"], // 2
    ["Decatur, Georgia, USA", "USA,GA,DeKalb,Decatur"], // 3
    ["Decatur, Macon, Illinois, USA", "USA,IL,Macon,Decatur"], // 2
    ["Decatur, Macon, Illinois, United States", "USA,IL,Macon,Decatur"], // 1
    ["Decatur, Morgan, Alabama, USA", "USA,AL,Morgan,Decatur"], // 1
    ["Deer River, Itasca, Minnesota, USA", "USA,MN,Itasca,Deer River"],
    ["Deer River, Minnesota, USA", "USA,MN,Itasca,Deer River"],
    ["Deer River , Minn.", "USA,MN,Itasca,Deer River"], // 1
    ["Deer River, Deer River, Itasca, Minnesota, USA", "USA,MN,Itasca,Deer River"], // 1
    ["Deer River, Itasca, Minnesota", "USA,MN,Itasca,Deer River"], // 9
    ["Deer River, MN", "USA,MN,Itasca,Deer River"], // 1
    ["Deer River, Minn", "USA,MN,Itasca,Deer River"], // 1
    ["Deer River, Minnesota", "USA,MN,Itasca,Deer River"], // 1
    ["Deer River", "USA,MN,Itasca,Deer River"], // 1
    ["Defiance, Defiance, Ohio, United States", "USA,OH,Defiance,Defiance"], // 1
    ["Delft, Zuid-Holland, Pays-Bas", "NLD,ZUI,Delft"],  // 1
    ["Denver, Denver, Colorado, United States of America", "USA,CO,Denver,Denver"], // 1
    ["Des Moines, Polk, Iowa", "USA,IA,Polk,Des Moines"], // 1
    ["Des Moines, Iowa, USA", "USA,IA,Polk,Des Moines"],  // 1
    ["Detroit Lakes, Becker County, Minnesota, United States of America", "USA,MN,Becker,Detroit Lakes"], // 1
    ["Detroit Lakes, Becker, Minnesota, USA", "USA,MN,Becker,Detroit Lakes"], // 1
    ["Detroit, Wayne, Michigan, USA", "USA,MI,Wayne,Detroit"], // 1
    ["Dickson, Manistee, Michigan, USA", "USA,MI,Manistee,Dickson"], // 2
    ["Devils Lake, North Dakota", "USA,ND,Ramsey,Devils Lake"],
    ["Devils Lake, Ramsey Co, North Dakota, USA", "USA,ND,Ramsey,Devils Lake"],
    ["Devils Lake, Ramsey, North Dakota, USA", "USA,ND,Ramsey,Devils Lake"],
    ["Devon, England", "ENG,DEV"],
    ["Dingle, Kerry, , Ireland", "IRL,KER,Dingle"],
    ["District 10, Cabell, Virginia, USA", "USA,WV,Cabell,District 10"], // 2
    ["District 13, Wapello, Iowa, USA", "USA,IA,Wapello,District 13"], // 3
    ["District 21, Vermilion, Illinois, USA", "USA,IL,Vermilion,District 21"], // 2
    ["District 31, Lee, Virginia, USA", "USA,VA,Lee,District 31"], // 1
    ["Division 20, Washington, Iowa, USA", "USA,IA,Washington,Division 20"], // 11
    ["Dixon, Lee, Illinois, USA", "USA,IL,Lee,Dixon"], // 1
    ["Dongen, Dongen, Noord-Brabant, Netherlands", "NLD,NBR,Dongen,Dongen"],
    ["Donegal, Donegal, Ulster, Ireland", "IRL,DON,Donegal"],
    ["Dorchester, New England", "USA,MA,Suffolk,Dorchester"], // 1
    ["Dorchester, Suffolk, Massachusetts, USA", "USA,MA,Suffolk,Dorchester"], // 1
    ["Douglas, Nevada, USA", "USA,NV,Douglas"],  // 1
    ["Donnahlong, Down, Ulster, Ireland", "NIR,DOW,Donnahlong"],
    ["Donisthorpe, Derbyshire, England", "ENG,DBY"],
    ["Dover Township, Athens, OH", "USA,OH,Athens,Dover Township"], // 1
    ["Dover, Athens, Ohio, USA", "USA,OH,Athens,Dover Township"], // 1
    ["Dover, Athens, Ohio, United States", "USA,OH,Athens,Dover Township"], // 1
    ["Dry Fork, Williams, North Dakota, USA", "USA,ND,Williams,Dry Fork"], // 2
    ["Duluth, St Louis, Minnesota, United States", "USA,MN,St. Louis,Duluth"], // 1
    ["Dundee, Walsh, North Dakota, USA", "USA,ND,Walsh,Dundee"], // 1
    ["Dunfermline, Fife, Scotland", "SCO,FIF,Dunfermline"],
    ["Durham, United Kingdom", "ENG,DUR"], // 1
    ["Dunmanway, Cork, Ireland", "IRL,COR,Dunmanway"],
    ["Durham, Marion County, Iowa, United States of America", "USA,IA,Marion,Durham"],
    ["Durham, Ontario, Canada", "CAN,ON,Grey,Durham"],
    ["Durham County, England", "ENG,DUR"],
    ["Duxbury, Massachusetts", "USA,MA,Plymouth,Duxbury"], // 1
    ["Earl Shilton, Leicestershire, England", "ENG,LEI,Earl Shilton"],
    ["Earsdon,Tynemouth, Northumberland, England", "ENG,NBL,Tynemouth,Earsdon"],
    ["Easington, Yorkshire, England, United Kingdom", "ENG,ERY,Easington"],  // 1
    ["Easington Parish, Yorkshire, England", "ENG,ERY,Easington"],
    ["Easington, Yorkshire, England", "ENG,ERY,Easington"],
    ["Easington, Yorkshire, England,", "ENG,ERY,Easington"],
    ["East Hempfield, Lancaster, Pennsylvania, USA", "USA,PA,Lancaster,East Hempfield"], // 1
    ["East Peoria, Tazewell County, Illinois, United States of America", "USA,IL,Tazewell,East Peoria"], // 1
    ["Eastcott, North, Hamptonshire, England", "ENG,NOR,Eastcott"],
    ["Eastern Subdivision, Anderson, South Carolina, USA", "USA,SC,Anderson,Eastern Subdivision"], // 1
    ["Eaton Rapids, Michigan, USA", "USA,MI,Eaton,Eaton Rapids"], // 1
    ["East Point, Floyd, Kentucky, USA", "USA,KY,Floyd,East Point"],
    ["Eau Claire, Eau Claire, Wisconsin, USA", "USA,WI,Eau Claire,Eau Claire"], // 4
    ["Eau Claire, WI", "USA,WI,Eau Claire,Eau Claire"], // 4
    ["Eau Claire, Wisconsin, USA", "USA,WI,Eau Claire"],  // 3
    ["Eden Valley, Meeker, Minnesota, USA", "USA,MN,Meeker,Eden Valley"], // 1
    ["Ekoupag Meductic, Saint John River, New Brunswick, Canada", "CAN,NB,Acadia,Saint John River,Meductic"],
    ["Elkhart co., IN.", "USA,IN,Elkhart"], // 1
    ["Elkhart, Elkhart, Indiana, USA", "USA,IN,Elkhart,Elkhart"], // 2
    ["Elkhart, Elkhart, Indiana, United States", "USA,IN,Elkhart,Elkhart"], // 1
    ["Elkhart, Indiana", "USA,IN,Elkhart,Elkhart"], // 1
    ["El Paso, Texas, USA", "USA,TX,El Paso,El Paso"], // 2
    ["Elizabeth, Miami, Ohio, United States", "USA,OH,Miami,Elizabeth"], // 1
    ["Ellenburg, Clinton, New York, USA", "USA,NY,Clinton,Ellenburg"], // 1
    ["Ellsworth, Rolette, North Dakota, USA", "USA,ND,Rolette,Ellsworth"], // 23
    ["Erin, Macomb, Michigan, USA", "USA,MI,Macomb,Erin"], // 1
    ["England", "ENG"],
    ["Eugene, Lane, Oregon, USA", "USA,OR,Lane,Eugene"],
    ["Eugene, Oregon, USA", "USA,OR,Lane,Eugene"], // 1
    ["Evangelisch, Kriegsfeld, Pfalz, Bavaria", "DEU,BY,Pfalz,Kriegsfeld,Evangelisch"],  // 1
    ["Evangelisch, Sprendlingen, Starkenburg, Bernkastel-Wittlich, Rhineland-Palatinate, Germany", "DEU,RP,Bernkastel-Wittlich,Starkenburg,Evangelisch"],  // 1
    ["Everett, Middlesex, Massachusetts, USA", "USA,MA,Middlesex,Everett"], // 1
    ["Excelsior, MN", "USA,MN,Hennepin,Excelsior"], // 1
    ["Excelsior, Minnesota, USA", "USA,MN,Hennepin,Excelsior"], // 1
    ["Exeter, Devon, England", "ENG,DEV,Exeter"],
    ["Exeter, Washington, Rhode Island, USA", "USA,RI,Washington,Exeter"], // 1
    ["Fairbault, Minnesota, USA", "USA,MN,Rice,Fairbault"], // 1
    ["Falls Mills P.o., Cabell, West Virginia", "USA,WV,Cabell,Falls Mills PO"], // 2
    ["Falmouth, Barnstable, Massachusetts, United States", "USA,MA,Barnstable,Falmouth"], // 2
    ["Fargo, Cass County, North Dakota, USA", "USA,ND,Cass,Fargo"], // 1
    ["Fargo, Cass, North Dakota, USA", "USA,ND,Cass,Fargo"], // 1
    ["Fauquier County, Virginia, USA", "USA,VA,Fauquier"],
    ["Fauquier, Virginia, USA", "USA,VA,Fauquier"],
    ["Fauquier, Virginia", "USA,VA,Fauquier"],  // 1
    ["Fayette, Pennsylvania, USA", "USA,PA,Fayette"], // 1
    ["Felling, Heworth, Durham, England", "ENG,DUR,Heworth,Felling"], // 1
    ["Fergus Falls, Otter Tail County, Minnesota, United States of America", "USA,MN,Otter Tail,Fergus Falls"], // 1
    ["Fertile;  Glenwood, Grand Forks, Walsh and Pembina, North Dakota", "USA,ND,Walsh"], // 1 Map of Fertile and Glenwood Townships in ND
    ["Fitchburg, Worcester, Massachusetts", "USA,MA,Worcester,Fitchburg"], // 1
    ["Floyd County, Kentucky, USA", "USA,KY,Floyd"],
    ["Floyd County, Virginia, United States of America", "USA,VA,Floyd"],
    ["Floyd, Kentucky, USA", "USA,KY,Floyd"],
    ["Floyd, Kentucky, United States", "USA,KY,Floyd"],
    ["Floyd, Kentucky", "USA,KY,Floyd"],
    ["Floyd", "USA,KY,Floyd"],
    ["Floyd County, Kentucky, United States of America", "USA,KY,Floyd"], // 1
    ["Floyd County, Kentucky", "USA,KY,Floyd"], // 2
    ["Floyd, Floyd, Kentucky, USA", "USA,KY,Floyd,Floyd"], // 4
    ["Floyd, Floyd, Virginia, USA", "USA,VA,Floyd,Floyd"], // 1
    ["Floyd, Virginia, USA", "USA,VA,Floyd"], // 1
    ["Floydsburg, Oldham County, Kentucky, United States of America", "USA,KY,Oldham,Floydsburg"], // 1
    ["Forks, Hanover, Virginia, USA", "USA,VA,Hanover,Forks"],
    ["Forks, New Kent, Virginia, USA", "USA,VA,New Kent,Forks"],
    ["Foster, Providence, Rhode Island, USA", "USA,RI,Providence,Foster"],
    ["Frankfort Ward 2, Clinton, Indiana, USA", "USA,IN,Clinton,Frankfort,Ward 2"], // 3
    ["Frankfort, Clinton, Indiana, USA", "USA,IN,Clinton,Frankfort"], // 2
    ["Frankfort, Indiana, USA", "USA,IN,Clinton,Frankfort"], // 1
    ["Franklin, Pennsylvania, USA", "USA,PA,Franklin"], // 1
    ["Franklin, Harrison, Ohio, USA", "USA,OH,Harrison,Franklin"], // 1
    ["Franklin County, Indiana, USA", "USA,IN,Franklin"],  // 1
    ["Franklin Cty, Virginia, USA", "USA,VA,Accomack,Franklin City"],  // 1
    ["Frederick, MD", "USA,MD,Frederick"],  // 1
    ["Frederick, Maryland, USA", "USA,MD,Frederick"],  // 1
    ["Frederick, Virginia, USA", "USA,VA,Frederick"], // 2
    ["Frederick County, Maryland", "USA,MD,Frederick"],
    ["Frederick, Frederick, Maryland, United States", "USA,MD,Frederick,Frederick"],
    ["Franklin Co, IN, USA", "USA,IN,Franklin"],
    ["Franklin Co., IN, USA", "USA,IN,Franklin"],
    ["Franklin County, Pennsylvania, United States of America", "USA,PA,Franklin"],
    ["Franklin, Virginia, USA", "USA,VA,Franklin"],
    ["Franklin County, Virginia, USA", "USA,VA,Franklin"],
    ["Franklin County, Virginia, United States of America", "USA,VA,Franklin"],
    ["Franklin, Virginia, United States", "USA,VA,Franklin"],
    ["Frederick City, MD, Maryland, USA", "USA,MD,Frederick,Frederick"],
    ["Frederick Co., Maryland", "USA,MD,Frederick"],  // 1
    ["Frederick County, Maryland, USA", "USA,MD,Frederick"],
    ["Frederick, Baltimore County, Colonial America, Maryland, USA", "USA,MD,Frederick,Frederick"],
    ["Frederick, Frederick, Maryland, USA", "USA,MD,Frederick,Frederick"],
    ["Frederick, Maryland, United States", "USA,MD,Frederick"],
    ["Fredericksburg, Spotsylvania, Virginia, United States", "USA,VA,Spotsylvania,Fredericksburg"],
    ["Fredericksburg, Virginia, USA", "USA,VA,Spotsylvania,Fredericksburg"],
    ["Fredricksville Parish, Albemarle County, Virginia, United States", "USA,VA,Albemarle,Fredricksville Parish"], // 1
    ["Friends Burying, Kennett, Chester, Pennsylvania, USA", "USA,PA,Chester,Kennett,Friends Burying"], // 1
    ["Friendsville, Blount, Tennessee, United States", "USA,TN,Blount,Friendsville"], // 1
    ["Frosterley, Durham, England", "ENG,DUR,Frosterley"], // 1
    ["Fulton County, Indiana, USA", "USA,IN,Fulton"],
    ["Fulton, Indiana, USA", "USA,IN,Fulton"],
    ["Fulton Co, Indiana, USA", "USA,IN,Fulton"],  // 1
    ["Fulton Co, IN, USA", "USA,IN,Fulton"], // 1
    ["Fulton Co., Indiana, USA", "USA,IN,Fulton"], // 1
    ["Fulton Cty, Indiana, USA", "USA,IN,Fulton"], // 1
    ["Fulton, Fulton, IN USA", "USA,IN,Fulton,Fulton"], // 1
    ["Fulton, Fulton, Ohio, United States", "USA,OH,Fulton,Fulton"], // 1
    ["Futham, Somerset, England", "ENG,SOM,Futham"],
    ["Gameren, Gelderland, Pays-Bas", "NLD,GEL,Gameren"],
    ["Gateshead, Durham,England", "ENG,DUR,Gateshead"],
    ["Genesee, New York, USA", "USA,NY,Genesee"],  // 1
    ["Genoa, Wayne County, West Virginia, United States of America", "USA,WV,Wayne,Genoa"], // 1
    ["Georgetown, Polk, Wisconsin, USA", "USA,WI,Polk,Georgetown"], // 1
    ["Germantown, Montgomery County, Ohio, United States of America", "USA,OH,Montgomery,Germantown"], // 1
    ["Germany", "DEU"],
    ["Germany, Allemagne", "DEU"],
    ["Germany, Baden-Wuerttemberg, Germany", "DEU,BW"],
    ["Glasgow, Lanarkshire, Scotland", "SCO,LKS,Glasgow"],
    ["Glen Cairn, Doswell, VA, British Colonies, Virginia, USA", "USA,VA,Hanover,Doswell,Glen Cairn Cemetery"], // 1
    ["Glenfield, Leicestershire, England", "ENG,LEI,Glenfield"], // 1
    ["Glenwood, Walsh, North Dakota, USA", "USA,ND,Walsh,Glenwood"], // 2
    ["Glenwood Twp, Walsh, North Dakota, USA", "USA,ND,Walsh,Glenwood Township"], // 1
    ["Gloucester, Essex, Massachusetts, United States", "USA,MA,Essex,Gloucester"],
    ["Goblintown Creek, Patrick, Virginia, USA", "USA,VA,Patrick,Goblintown Creek"], // 1
    ["Goochland, Goochland, Virginia, USA", "USA,VA,Goochland,Goochland"],
    ["Goudswaard, Korendijk, Zuid-Holland, Netherlands", "NLD,ZUI,Korendijk,Goudswaard"],
    ["Gra Forks, Grand Forks, North Dakota, USA", "USA,ND,Grand Forks,Grand Forks"], // 1
    ["Grand Falls, Victoria, New Brunswick, Canada", "CAN,NB,Victoria,Grand Falls"], // 1
    ["Grand Forks, N.D.", "USA,ND,Grand Forks"], // 1
    ["Grafton, Walsh, North Dakota, USA", "USA,ND,Walsh,Grafton"], // 1
    ["Grand Isle, Aroostook, Maine, USA", "USA,ME,Aroostook,Grand Isla"],
    ["Grand Rapids, Itasca, Minnesota, United States", "USA,MN,Itasca,Grand Rapids"], // 2
    ["Grand Rapids, Itasca County, Minnesota, United States of America", "USA,MN,Itasca,Grand Rapids"],
    ["Grand Rapids, Itasca, Minnesota USA", "USA,MN,Itasca,Grand Rapids"],
    ["Grand Rapids, Itasca, Minnesota, USA", "USA,MN,Itasca,Grand Rapids"],
    ["Grand Rapids, Minnesota", "USA,MN,Itasca,Grand Rapids"],
    ["Grand Rapids, Itasca, MN, USA", "USA,MN,Itasca,Grand Rapids"],
    ["Grand Rapids, Grand Rapids, Itasca, Minnesota, USA", "USA,MN,Itasca,Grand Rapids"], // 3
    ["Grand Rapids, Itasca, Minnesota", "USA,MN,Itasca,Grand Rapids"], // 6
    ["Grand Rapids, MN", "USA,MN,Itasca,Grand Rapids"], // 5
    ["Grand Rapids, Minnesota, USA", "USA,MN,Itasca,Grand Rapids"], // 9
    ["Grand Rapids", "USA,MN,Itasca,Grand Rapids"], // 2
    ["Grange, Leicestershire, England", "ENG,LEI,Grange"], // 1
    ["Grayland, Washington, USA", "USA,WA,Grays Harbor,Grayland"], // 1
    ["Gray Eagle, Todd Co., MN, Minnesota, USA", "USA,MN,Todd,Gray Eagle"],
    ["Greeley, Weld County, Colorado, United States of America", "USA,CO,Weld,Greeley"], // 1
    ["Greenbrier County, West Virginia, USA", "USA,WV,Greenbrier"], // 1
    ["Greenfield, Adair County, Iowa, United States of America", "USA,IA,Adair,Greenfield"], // 1
    ["Greenfield, Hancock, Indiana, USA", "USA,IN,Hancock,Greenfield"], // 2
    ["Greenup, Greenup, Kentucky, United States", "USA,KY,Greenup,Greenup"], // 1
    ["Green, Pennsylvania, USA", "USA,PA,Greene"],
    ["Green Valley, Becker, Minnesota, USA", "USA,MN,Becker,Green Valley"], // 1
    ["Greene, Greene, Pennsylvania, United States", "USA,PA,Greene,Greene"], // 1
    ["Greene, Pennsylvania, USA", "USA,PA,Greene"],
    ["Greene, Greene, Pennsylvania, USA", "USA,PA,Greene"],
    ["Greene, Tennessee, United States", "USA,TN,Greene"],  // 1
    ["Greenfield, Greenfield, Hancock, Indiana, USA", "USA,IN,Hancock,Greenfield,Greenfield"], // 5
    ["Greup, Zuid-Holland, Pays-Bas", "NLD,ZUI,Greup"], // 1
    ["Guilford, New Haven, Connecticut, United States", "USA,CT,New Haven,Guilford"], // 1
    ["Grönadal Södergård, Älmeboda, Kronoberg, Sverige", "SWE,KRO,Älmeboda,Grönadal Södergård"],
    ["Halifax, Virginia, USA", "USA,VA,Halifax"],
    ["Halifax, Halifax, Virginia, United States", "USA,VA,Halifax"],
    ["Halifax, Virginia", "USA,VA,Halifax"],  // 1
    ["Halls End, Warwickshire, England", "ENG,WAR,Halls End"],
    ["Hammersmith, London, England", "ENG,LND,Hammersmith"], // 2
    ["Hamilton, Butler, Ohio, USA", "USA,OH,Butler,Hamilton"], // 5
    ["Hanover, Harrison Co., Ohio", "USA,OH,Harrison,Hanover"], // 1
    ["Hanover, Virginia", "USA,VA,Hanover"], // 1
    ["Hancock, Indiana, USA", "USA,WV,Hancock"],
    ["Hanover County, Virginia, United States of America", "USA,VA,Hanover"],
    ["Hanover, Virginia, United States", "USA,VA,Hanover"],
    ["Hanover, Hanover, Virginia, USA", "USA,VA,Hanover,Hanover"],  // 1
    ["Hanover, Virginia, USA", "USA,VA,Hanover"],
    ["Harford County, Maryland, USA", "USA,MD,Harford"],
    ["Harris, Texas, USA", "USA,TX,Harris"],  // 1
    ["Harrison Co, Ohio, USA", "USA,OH,Harrison"],
    ["Harrison County, Ohio, United States of America", "USA,OH,Harrison"],
    ["Harrison County, Ohio,USA", "USA,OH,Harrison"],
    ["Harrison Cty, Ohio, USA", "USA,OH,Hamilton,Harrison City"],
    ["Harrison, Ohio, USA", "USA,OH,Harrison"],
    ["Harrison County, Ohio, USA", "USA,OH,Harrison"],
    ["Harrison, Ohio, United States", "USA,OH,Harrison"],
    ["Harrison Co, Ohio", "USA,OH,Harrison"],  // 1
    ["Hedalen, Sor Aurdal, Oppland, Norway", "NOR,OPP,Sør-Aurdal,Hedalen"],
    ["Hedalen kirke, Sør-Aurdal, Oppland, Norvège", "NOR,OPP,Sør-Aurdal,Hedalen,Hedalen kirke"],  // 1
    ["Henry, Illinois, USA", "USA,IL,Henry"],
    ["Henry, Franklin, Virginia, United States", "USA,VA,Franklin,Henry"],
    ["Henry, Indiana, USA", "USA,IN,Henry"],
    ["Henry, Virginia, United States", "USA,VA,Henry"],
    ["Hennepin County, Minnesota, USA", "USA,MN,Hennepin"],  // 1
    ["Hennepin, Minnesota, USA", "USA,MN,Hennepin"],
    ["Hennepin County, Minnesota, United States of America", "USA,MN,Hennepin"], // 1
    ["Hennepin, Minnesota", "USA,MN,Hennepin"], // 1
    ["Henrico, Virginia, United States", "USA,VA,Henrico"],
    ["Henrico, Virginia, USA", "USA,VA,Henrico"], // 1
    ["Heyworth, Durham, England", "ENG,DUR,Heyworth"],
    ["Heworth, Duram,  England", "ENG,DUR,Heyworth"],
    ["Heworth, Durham, England", "ENG,DUR,Heyworth"],
    ["Hicksford, Greensville, Virginia, USA", "USA,VA,Greensville,Hicksford"],
    ["Hire, McDonough, Illinois, USA", "USA,IL,McDonough,Hire"],
    ["Holden, Logan, West Virginia, United States", "USA,WV,Logan,Holden"], // 1
    ["Hoquiam, Grays Harbor, Washington, USA", "USA,WA,Grays Harbor,Hoquiam"], // 1
    ["Holland, Reusel-de Mierden, Noord-Brabant, Netherlands", "NLD,NBR,Reusel de Mierden"],  // 1
    ["Holyoke, Hampden, Massachusetts, USA", "USA,MA,Hampden,Holyoke"],
    ["Holyoke, Massachusetts, USA", "USA,MA,Hampden,Holyoke"],
    ["Hoosick Falls, Rensselaer County, New York, United States of America", "USA,NY,Rensselaer,Hoosick Falls"],
    ["Hoosick, Rensselaer, New York, USA", "USA,NY,Rensselaer,Hoosick"],
    ["Hoosick Falls, New York", "USA,NY,Rensselaer,Hoosick"],
    ["Hoosick Falls, Rensselaer, New York, USA", "USA,NY,Rensselaer,Hoosick"],  // 1
    ["Hoosick, Rensselaer, New York", "USA,NY,Rensselaer,Hoosick"], // 1
    ["Hopkins, Hennepin, Minnesota, USA", "USA,MN,Hennepin,Hopkins"], // 1
    ["Hopkins, Minnesota, USA", "USA,MN,Hennepin,Hopkins"], // 1
    ["Houston, Texas, USA", "USA,TX,Harris,Houston"], // 2
    ["Howard Lake, Wright County, Minnesota, USA", "USA,MN,Wright,Howard Lake"], // 1
    ["Howard Lake, Wright, Minnesota, USA", "USA,MN,Wright,Howard Lake"], // 2
    ["Hubbard, Minnesota, USA", "USA,MN,Hubbard"], // 1
    ["Hull, Humberside, England", "ENG,ERY,Hull"], // 1 Humberside is now East Riding of Yorkshire
    ["Hull, Yorkshire, England", "ENG,YKS,Hull"], // 2
    ["Humboldt, Allen, Kansas, USA", "USA,KS,Allen,Humboldt"], // 1
    ["Huntingdon, Bedford, Pennsylvania, USA", "USA,PA,Bedford,Huntingdon"], // 1
    ["IA", "USA,IA"],
    ["Ibstock, Leicestershire, England", "ENG,LEI,Ibstock"],
    ["Ibstock Grange, Leicester", "ENG,LEI,Ibstock Grange"],
    ["IJsselmonde, South Holland, Zuid-Holland, Pays-Bas", "NLD,ZUI,IJsselmonde"], // 1
    ["IJsselmonde, Rotterdam, Zuid-Holland, Pays-Bas", "NLD,ZUI,IJsselmonde"],
    ["IJsselmonde, Zuid-Holland, Netherlands", "NLD,ZUI,IJsselmonde"],
    ["IJsselmonde, Zuid-Holland, Pays-Bas", "NLD,ZUI,IJsselmonde"],
    ["Illinois, United States of America", "USA,IL"],
    ["Illinois, United States", "USA,IL"],
    ["Illinois, USA", "USA,IL"], // 1
    ["Illinois", "USA,IL"],
    ["Indian Territory, Coffey County, Kansas, USA", "USA,KS,Coffey"],
    ["Indiana", "USA,IN"],
    ["Indiana, United States", "USA,IN"],
    ["Indiana, USA", "USA,IN"],
    ["Indiana, United States of America", "USA,IN"], // 1
    ["Indianapolis, Marion, Indiana, USA", "USA,IN,Marion,Indianapolis"], // 1
    ["Iowa, USA", "USA,IA"],
    ["Iowa", "USA,IA"],
    ["Ireland", "IRL"],  // 1
    ["Island Lake, Rolette, North Dakota, USA", "USA,ND,Rolette,Island Lake"],
    ["Island Lake, Rolette, North Dakota", "USA,ND,Rolette,Island Lake"],
    ["Itasca, Minnesota", "USA,MN,Itasca"], // 3
    ["Itasca, Minnesota, USA", "USA,MN,Itasca"],
    ["Jacks Creek, Floyd County, Kentucky, USA", "USA,KY,Floyd,Jacks Creek"],
    ["Jacks Creek, Floyd, Kentucky, USA", "USA,KY,Floyd,Jacks Creek"], // 1
    ["Jacks Creek, Floyd, Kentucky, United States", "USA,KY,Floyd,Jacks Creek"], // 1
    ["Jackson County, Ohio, USA", "USA,OH,Jackson"], // 1
    ["Jackson, Hancock, Indiana, United States", "USA,IN,Hancock,Jackson"], // 2
    ["Jackson, Warren, Iowa, USA", "USA,IA,Warren,Jackson"], // 1
    ["Jackson, Dakota County, Nebraska, United States of America", "USA,NE,Dakota,Jackson"],  // 1
    ["Jackson, Cleaveland, Hancock, Indiana, USA", "USA,IN,Hancock,Jackson Township,Cleveland"], // 5
    ["Jackson, Jay, Indiana, USA", "USA,IN,Jay,Jackson"], // 4
    ["Jackson, Washington, New York, USA", "USA,NY,Washington,Jackson"], // 1
    ["Jarrow, Durham, England", "ENG,DUR,Jarrow"],
    ["Jasper, Iowa, United States", "USA,IA,Jasper"], // 5
    ["Jasper, Iowa, USA", "USA,IA,Jasper"],
    ["Jasper County, Iowa, USA", "USA,IA,Jasper"], // 2
    ["Jasper County, Iowa, United States of America", "USA,IA,Jasper"], // 1
    ["Jay County, Indiana, United States of America", "USA,IN,Jay"],  // 1
    ["Jefferson City, Ohio, USA", "USA,OH,Ashtabula,Jefferson"],
    ["Jefferson County, Ohio, USA", "USA,OH,Jefferson"],  // 1
    ["Jefferson, Ohio, USA", "USA,OH,Jefferson"],  // 1
    ["Jefferson, Jefferson, Miami, Indiana, USA", "USA,IN,Miami,Jefferson Township,Jefferson"], // 1
    ["Jefferson, Miami, Indiana, USA", "USA,IN,Miami,Jefferson Township"], // 2
    ["Jefferson Co., Kentucky, USA", "USA,KY,Jefferson"], // 1
    ["Jefferson Township, Kosciusko County, Indiana, USA", "USA,IN,Kosciusko,Jefferson Township"], // 1
    ["John's Creek, Floyd County, Kentucky, USA", "USA,KY,Floyd,John's Creek"],
    ["Johns Creek, Floyd, Kentucky, USA", "USA,KY,Floyd,John's Creek"],
    ["Johns Creek, Johnson, Kentucky, USA", "USA,KY,Johnson,Johns Creek"], // 1
    ["Johns Creek, Paintsville, Johnson, Kentucky, USA", "USA,KY,Johnson,Paintsville,Johns Creek"], // 1
    ["Johnson, Kentucky, United States", "USA,KY,Johnson"], // 1
    ["Johnson, Kentucky, USA", "USA,KY,Johnson"],
    ["Johnson County, Kentucky, USA", "USA,KY,Johnson"],
    ["Johnson County, Kentucky, United States of America", "USA,KY,Johnson"],
    ["Joranbyhuset, Hedalen, Sor Aurdal, Oppland, Norway", "NOR,OPP,Sør-Aurdal,Hedalen,Joranbyhuset"],
    ["Jøranbyhuset, Hedalen, Sør-Aurdal, Oppland, Norvège", "NOR,OPP,Sør-Aurdal,Hedalen,Joranbyhuset"],
    ["Kalispell, Flathead, Montana, USA", "USA,MT,Flathead,Kalispell"], // 2
    ["Kalispell, Montana, USA", "USA,MT,Flathead,Kalispell"], // 2
    ["Kamouraska, Kamouraska, Quebec, Canada", "CAN,QC,Kamouraska,Kamouraska"],
    ["Kansas, United States of America", "USA,KS"],
    ["Kellerton, Ringgold, Iowa, USA", "USA,IA,Ringgold,Kellerton"], // 1
    ["Kennet Township, Chester, Pennsylvania, USA", "USA,PA,Chester,Kennet Township"], // 1
    ["Kennett Square, Chester County, Pennsylvania", "USA,PA,Chester,Kennett Square"], // 1
    ["Kensington, London, England", "ENG,LND,Kensington"], // 1
    ["Kensington, Middlesex, England", "ENG,MDL,Kensington"],
    ["Kentucky, USA", "USA,KY"], // 1
    ["Kentucky, United States", "USA,KY"], // 1
    ["Kentucky;Kentucky", "USA,KY"], // 1
    ["Kentucky", "USA,KY"],
    ["Kennett Square, Chester, Pennsylvania, USA", "USA,PA,Chester,Kennett Square"],
    ["Kennett Square, Chester, Pennsylvania, United States of America", "USA,PA,Chester,Kennett Square"],
    ["Kennett, Chester, Pennsylvania, United States", "USA,PA,Chester,Kennett"],
    ["Kennett, Chester, Pennsylvania", "USA,PA,Chester,Kennett"],
    ["Kent, England", "ENG,KEN"],
    ["Keokuk County, Iowa, USA", "USA,IA,Keokuk"], // 1
    ["Kewanee, Henry, Illinois, USA", "USA,IL,Henry,Kewanee"], // 1
    ["Kewanee, Henry County, Illinois, United States of America", "USA,IL,Henry,Kewanee"],
    ["King William, King William, VA, Virginia, USA", "USA,VA,King William,King William"],
    ["King William, King William, Virginia, United States", "USA,VA,King William,King William"],
    ["King William, King William, Virginia, USA", "USA,VA,King William,King William"], // 1
    ["Kingsland, Llano, Texas, USA", "USA,TX,Llano,Kingsland"], // 1
    ["Kingston Township, Meeker County, Minnesota, USA", "USA,MN,Meeker,Kingston Township"], // 3
    ["Kingston, Meeker, Minnesota, USA", "USA,MN,Meeker,Kingston"],
    ["Kingston, Kingston, Meeker, Minnesota, USA", "USA,MN,Meeker,Kingston"], // 6
    ["Kingston, Wright, Minnesota, USA", "USA,MN,Meeker,Kingston"],
    ["Kingston, Meeker, Minnesota, United States", "USA,MN,Meeker,Kingston"],
    ["Kinnanäs, Älmeboda, Kronoberg, Sverige", "SWE,KRO,Älmeboda,Kinnanäs"], // 1
    ["Kirk Michael, Michael, Isle of Man", "ENG,IOM,Michael,Kirk Michael"],  // 1
    ["Kirkby Mallory, Leicestershire, England", "ENG,LEI,Kirkby Mallory"],  // 1
    ["Kirkville, Wapello, Iowa, USA", "USA,IA,Wapello,Kirkville"], // 2
    ["Kissel Hill, Lancaster, Pennsylvania, USA", "USA,PA,Lancaster,Kissel Hill"], // 1
    ["Kit Carson, Cheyenne, Colorado, USA", "USA,CO,Cheyenne,Kit Carson"], // 1
    ["Klaaswaal, Zuid-Holland, Pays-Bas", "NLD,ZUI,Klaaswaal"],
    ["Kirkcudbrightshire, Scotland", "SCO,KKD"],
    ["Kirkwood", "USA,MN,Wadena,Sebeka,Kirkwood"], // 1 Geo W Collins residence in 1907
    ["Kittson, Minnesota, USA", "USA,MN,Kittson"],  // 1
    ["Knox, Nebraska, USA", "USA,NE,Knox"],  // 1
    ["Kokomo, Howard, Indiana, United States", "USA,IN,Howard,Kokomo"], // 1
    ["Kriegsfeld, Donnersberg, Rhineland-Palatinate, Germany", "DEU,RP,Donnersberg,Kriegsfeld"],
    ["Kromstrijen, Zuid-Holland, Netherlands", "NLD,ZUI,Kromstrijen"],
    ["Kronoberg, Orebro, Sweden", "SWE,KRO,Orebro"],
    ["Kosciusko, Indiana, USA", "USA,IN,Kosciusko"],  // 2
    ["L'Assomption, (Saint-Pierre-du-Portage), (l'Assomption), Québec, Canada", "CAN,QC,L'Assomption,St Pierre du Portage"],  // 1
    ["L'Assomption, (l'Assomption), Québec, Canada", "CAN,QC,L'Assomption"],
    ["L'Assomption, Québec, Canada", "CAN,QC,L'Assomption"], // 1
    ["L'Isle-Verte (Église Saint-Jean-Baptiste), 150, rue Saint-Jean-Baptiste, Québec, Canada", "CAN,QC,Bas-Saint-Laurent,L'Isle-Verte"],
    ["L'Isle-Verte, Riviere-du-Loup, Quebec, Canada", "CAN,QC,Bas-Saint-Laurent,Riviere-du-Loup,L'Isle Verte"],
    ["L'Isle Verte, Que, Canada", "CAN,QC,Bas-Saint-Laurent,Riviere-du-Loup,L'Isle Verte"],
    ["L'Isle Verte, Riviere du Loup, Que, Canada", "CAN,QC,Bas-Saint-Laurent,Riviere-du-Loup,L'Isle Verte"],
    ["L'Isle Verte, Riviere du loup,  Que, Canada", "CAN,QC,Bas-Saint-Laurent,Riviere-du-Loup,L'Isle Verte"],
    ["L'Isle Verte, Riviere du loup, Que, Canada", "CAN,QC,Bas-Saint-Laurent,Riviere-du-Loup,L'Isle Verte"],
    ["L'Isle Verte, Rviere du Loup, Que, Canada", "CAN,QC,Bas-Saint-Laurent,Riviere-du-Loup,L'Isle Verte"],
    ["L'Isle Verte, Riviere du Loup, Que., Canada", "CAN,QC,Bas-Saint-Laurent,Riviere-du-Loup,L'Isle Verte"], // 1
    ["L'Isle-Verte, Riviere-du-Loup, Québec, Canada", "CAN,QC,Bas-Saint-Laurent,Riviere-du-LoupL'Isle Verte"], // 3
    ["La Côte-de-Gaspé, Gaspesie-Iles-de-la-Madeleine Region, Quebec, Canada", "CAN,QC,Gaspesie-Iles-de-la-Madeleine,La C├┤te-de-Gasp├⌐,"],
    ["Lagrange, Lagrange, Indiana, USA", "USA,IN,LaGrange"],
    ["La Grange, Indiana, United States", "USA,IN,LaGrange"],
    ["Lagrance County, Indiana, United States", "USA,IN,LaGrange"],
    ["Lagrange County, Indiana, USA", "USA,IN,LaGrange"],
    ["Lagrange, Lagrange, Indiana, United States", "USA,IN,LaGrange,LaGrange"],
    ["LaGrange, Indiana, USA", "USA,IN,LaGrange"], // 1
    ["Lagrange, Indiana, USA", "USA,IN,LaGrange"], // 2
    ["Lagrange, Indiana, United States", "USA,IN,LaGrange"], // 1
    ["Lake Grove, Mahnomen, Minnesota, USA", "USA,MN,Mahnomen,Lake Grove"], // 4
    ["Lake Prairie, Marion, Iowa, USA", "USA,IA,Marion,Lake Prairie Township"],
    ["Lake Prairie, Marion, Iowa", "USA,IA,Marion,Lake Prairie Township"],
    ["Lake Prairie, Pella, Marion, Iowa", "USA,IA,Marion,Pella,Lake Prairie"],
    ["Lake Prairie, Pella Marion County, Marion, Iowa, USA", "USA,IA,Marion,Pella,Lake Prairie"], // 2
    ["Lake Prairie, Pella, Marion, Iowa, USA", "USA,IA,Marion,Pella,Lake Prairie"], // 7
    ["Lake Warren, Monmouth", "USA,IL,Warren,Monmouth,Lake Warren"], // 1
    ["Lake of the Woods County, Minnesota, United States of America", "USA,MN,Lake of the Woods"], // 1
    ["Lane County, Oregon, United States of America", "USA,OR,Lane"], // 1
    ["Lancaster, Pennsylvania, USA", "USA,PA,Lancaster"],
    ["Lancaster, Lancaster, Pennsylvania, United States", "USA,PA,Lancaster"],
    ["Lancaster, Pennsylvania", "USA,PA,Lancaster"],
    ["Larue, Kentucky, United States", "USA,KY,Larue"], // 1
    ["Las Vegas, Clark, Nevada, USA", "USA,NV,Clark,Las Vegas"],  // 1
    ["Las Vegas, Clark Co, Nevada, USA", "USA,NV,Clark,Las Vegas"], // 1
    ["Lawrence, KY, USA", "USA,KY,Lawrence"],  // 1
    ["Lawrence, Kentucky, USA", "USA,KY,Lawrence"], // 1
    ["Lawton, Comanche County, Oklahoma, United States of America", "USA,OK,Comanche,Lawton"], // 1
    ["Lee, Lee, Illinois, United States", "USA,IL,Lee,Lee"], // 1
    ["Lehigh County, Pennsylvania, USA", "USA,PA,Lehigh"], // 1
    ["Lehigh County, Pennsylvania, United States of America", "USA,PA,Lehigh"], // 1
    ["Leicester, Leicester Unitary Authority, Leicestershire, England", "ENG,LEI,Leicester"],
    ["Leichestershire, England", "ENG,LEI"], // 1
    ["Leicestershire, England", "ENG,LEI"],
    ["Leicestershire, Leicestershire, England, United Kingdom", "ENG,LEI"],
    ["Leichester, Leicestershire, England", "ENG,LEI,Leicester"],
    ["Lee County, Virginia, USA", "USA,VA,Lee"],
    ["Lewis", "USA,KY,Lewis"], // 1 Barbara L Bevins residence 
    ["Liberty, Frederick, Maryland", "USA,MD,Frederick,Liberty"], // 3
    ["Liberty, Fulton, Indiana, USA", "USA,IN,Fulton,Liberty"], // 8
    ["Liberty, Woodbury, Iowa, USA", "USA,IA,Woodbury,Liberty"], // 5
    ["Liberty Twp, St Joseph Co., Indiana, USA", "USA,IN,St. Joseph,Liberty Township"], // 1
    ["Liberty, St Joseph, Indiana, USA", "USA,IN,St. Joseph,Liberty"], // 1
    ["Liberty, St Joseph, Indiana, United States", "USA,IN,St. Joseph,Liberty"], // 1
    ["Liberty, Montgomery, OH, USA", "USA,OH,Montgomery,Liberty"],  // 1
    ["Liberty Twp, Indiana", "USA,IN,Fulton,Liberty Township"], // 1  Fredrick Lee Heddens marriage record
    ["Libertytown, Frederick, Maryland, USA", "USA,MD,Frederick,Libertytown"],  // 1
    ["Lincoln, Lancaster, Nebraska, USA", "USA,NE,Lancaster,Lincoln"],  // 1
    ["Lincoln, West Virginia, United States", "USA,WV,Lincoln"],  // 1
    ["Leicester, Leicestershire, England", "ENG,LEI,Leicester"],
    ["Lincoln, West Virginia, USA", "USA,WV,Lincoln"], // 1
    ["Lindstrom, Chisago, Minnesota, USA", "USA,MN,Chisago,Lindstrom"], // 1
    ["Linlithgow, West Lothian, Linlithgowshire, Scotland", "SCO,WLN,Linlithgow"],
    ["Linlithgow, West Lothian, Linlithgowshire,, Scotland", "SCO,WLN,Linlithgow"],  // 1
    ["Linneryd fg, Tokamåla, Kronoberg, Suède", "SWE,KRO,Tokamåla,Linneryd fg"],
    ["Linneryd, Kronoberg, Sverige", "SWE,KRO,Linneryd"],
    ["linvill creel, Rockingham County, Virginia, USA", "USA,VA,Rockingham,Linville Creek"],  // 1
    ["Linton Hundred, Washington, Maryland, United States", "USA,MD,Washington,Linton Hundred"],
    ["Liverpool, England", "ENG,MSY,Liverpool"],  // 3
    ["Liverpool, England and Queenstown, Ireland", "ENG,MSY,Liverpool"], // 1
    ["Liverpool, Lancashire, England", "ENG,MSY,Liverpool"], // 1
    ["Locke, Elkhart, Indiana, USA", "USA,IN,Elkhart,Locke"], // 7
    ["Lochgelly, Fife, Scotland", "SCO,FIF,Lochgelly"], // 1
    ["Logan, Calhoun, Iowa", "USA,IA,Calhoun,Logan"],  // 1
    ["Logan, Virginia, USA", "USA,WV,Calhoun"],  // 1, was in VA. now in WV
    ["Logan, West Virginia, USA", "USA,WV,Logan"],  // 1
    ["Logan, Logan, West Virginia, United States", "USA,WV,Logan,Logan"], // 1
    ["Logansport", "USA,IN,Cass,Logansport"], // 1
    ["Logansport, Cass Co, Indiana, USA", "USA,IN,Cass,Logansport"],
    ["Logansport, Cass County, Indiana, United States of America", "USA,IN,Cass,Logansport"],
    ["Logansport, Cass, IN, USA", "USA,IN,Cass,Logansport"],
    ["Logansport, Cass, Indiana, USA", "USA,IN,Cass,Logansport"],
    ["Logansport, Cass, Indiana, United States", "USA,IN,Cass,Logansport"],
    ["London", "ENG,LND"],  // 1
    ["London, England", "ENG,LND"],
    ["London, London, England, United Kingdom", "ENG,LND"],
    ["London, London, England", "ENG,LND"],
    ["London, Middlesex, , England", "ENG,LND"],
    ["London, Middlesex, England", "ENG,LND"],
    ["Longbenton, Northumberland, England", "ENG,NBL,Longbenton"], // 1
    ["Loughborough, Leicestershire, England", "ENG,LEI,Longborough"],
    ["Longueuil, Quebec, Canada", "CAN,QC,Monteregie,Longueuil"],
    ["Lonqueuil (Co-Cathedrale St Antoine-de-pade), Quebec, Canada", "CAN,QC,Monteregie,Longueuil,St Antoine de pade"],  // 1
    ["Longueuil, Chambly, Quebec, Canada", "CAN,QC,Monteregie,Longueuil,Chambly"],  // 3
    ["Los Angeles, Los Angeles, California, USA", "USA,CA,Los Angeles,Los Angeles"], // 1
    ["Louisville Ward 5, Jefferson, Kentucky, USA", "USA,KY,Jefferson,Louisville,Ward 5"], // 1
    ["Lunenburg, Virginia, USA", "USA,VA,Lunenburg"], // 1
    ["Lunenburg, Lunenburg, Colony of Virginia, British Colonial A, Virginia, USA", "USA,VA,Lunenburg"],  // 1
    ["Lunenburg, Lunenburg, Virginia, USA", "USA,VA,Lunenburg"],  // 1
    ["Lurgan, Shankill, Armagh, Northern Ireland", "NIR,ARM,Skankill,Lurgan"],
    ["Lynn, Essex, Massachusetts, USA", "USA,MA,Essex,Lynn"],  // 1
    ["Lynn, Massachusetts", "USA,MA,Essex,Lynn"],  // 1
    ["MA, USA", "USA,MA"],  // 1
    ["MA", "USA,MA"],  // 2
    ["Maasdam, Binnenmaas, South Holland, Zuid-Holland, Pays-Bas", "NLD,ZUI,Maasdam"],
    ["Maasdam, Binnenmaas, Zuid-Holland, Netherlands", "NLD,ZUI,Maasdam"],
    ["Maasdam, Zuid Holland, Netherlands", "NLD,ZUI,Maasdam"],
    ["Maasdam, Zuid-Holland, Nl", "NLD,ZUI,Maasdam"],
    ["Maasdam, Zuid-Holland, Pays-Bas", "NLD,ZUI,Maasdam"],
    ["Maasdam, Binnenmaas, Zuid-Holland, Pays-Bas", "NLD,ZUI,Maasdam"],
    ["Maasdam, Gem Binnenmaas, Zuid-Holland, Pays-Bas", "NLD,ZUI,Maasdam"],
    ["Maasdam, Zuid Holland, Nederland", "NLD,ZUI,Maasdam"],
    ["Maasdam, Zuid-Holland, Nederland", "NLD,ZUI,Maasdam"],
    ["Macroom, Cork, Munster, Ireland", "IRL,COR,Macroom"],
    ["Machias, Washington, Maine, United States", "USA,ME,Washington,Machias"], // 1
    ["Mad River, Clark, Ohio, USA", "USA,OH,Clark,Mad River"],  // 1
    ["Madison County, Kentucky, United States of America", "USA,KY,Madison"], // 1
    ["Madison, Kentucky, USA", "USA,KY,Madison"], // 1
    ["Madison, Ohio, United States", "USA,OH,Lake,Madison"], // 1
    ["Magheracloone, Monaghan, Ireland", "IRL,MOG,Magheracloone"],  // 3
    ["Mahnomen County, Minnesota, United States of America", "USA,MN,Mahnomen"], // 1
    ["Malbaie, Saguenay County, Canada East (Quebec), Canada", "CAN,QC,Saguenay,La Malbaie"],
    ["Manoakin, Somerset, Maryland", "USA,MD,Somerset,Manokin"],
    ["Manokin, Somerset County, Maryland", "USA,MD,Somerset,Manokin"],
    ["Manokin, Somerset, Maryland ", "USA,MD,Somerset,Manokin"],
    ["Mansfield, Tolland, Conn", "USA,CT,Tolland,Mansfield"],  // 1
    ["Marion, Grant, Indiana, USA", "USA,IN,Grant,Marion"], // 1
    ["Marion, Ohio, USA", "USA,OH,Marion"], // 1
    ["Market Bosworth district, Leicestershire, England", "ENG,LEI,Market Bosworth"], // 7
    ["Markfield, Leicestershire, England", "ENG,LEI,Markfield"], // 1
    ["Marshall County, Indiana, USA", "USA,IN,Marshall"],  // 2
    ["Market Bosworth, Leicestershire, England", "ENG,LEI,Market Bosworth"],  // 2
    ["Market Harborough, Leicestershire, England", "ENG,LEI,Market Harborough"],  // 1
    ["Marion County, Iowa, USA", "USA,IA,Marion"],  // 1
    ["Marshall, Indiana", "USA,IN,Marshall"],  // 1
    ["Marshall, Minnesota, USA", "USA,MN,Lyon,Marshall"],  // 1
    ["Marshall, Indiana, USA", "USA,IN,Marshall"], // 1
    ["Marshall, Indiana, United States", "USA,IN,Marshall"], // 4
    ["Marshalltown, Marshall, Iowa, USA", "USA,IA,Marshall,Marshalltown"], // 1
    ["Martin, Kentucky, USA", "USA,KY,Martin"],  // 1
    ["Maryland, Maryland, USA", "USA,MD"],
    ["Maryland", "USA,MD"],
    ["Maryland, USA", "USA,MD"],
    ["Maryland, United States", "USA,MD"],  // 1
    ["Marylebone, London, England", "ENG,LND,Marylebone"], // 1
    ["Marylebone, Middlesex, , England", "ENG,MDL,Marylebone"],
    ["Masontown, Fayette, Pennsylvania, United States", "USA,PA,Fayette,Masontown"],  // 1
    ["Massachuettes, USA", "USA,MA"], // 1
    ["Massachusettes, USA", "USA,MA"], // 2
    ["Massachusetts", "USA,MA"],
    ["Massachusetts, USA", "USA,MA"], // 1
    ["Massachusetts, United States of America", "USA,MA"],
    ["McLeod Co, Minnesota, USA", "USA,MN,McLeod"], // 1
    ["Medina, Ohio, United States", "USA,OH,Medina"], // 2
    ["Meeker, Minnesota, USA", "USA,MN,Meeker"],
    ["Meigs Co, Ohio, USA", "USA,OH,Meigs"], // 2
    ["Megavissey, Cornwall, England", "ENG,COR,Megavissey"],  // 1
    ["Meigs County, Ohio, USA", "USA,OH,Meigs"],  // 1
    ["Meigs, Ohio, USA", "USA,OH,Meigs"],  // 1
    ["Meigs, Meigs, Ohio, United States", "USA,OH,Meigs,Meigs"], // 1
    ["Melrose, Roxburghshire, Scotland", "SCO,ROX,Melrose"],
    ["Melvin, Ford, Illinois, USA", "USA,IL,Ford,Melvin"], // 1
    ["Melvin, Osceola County, Iowa, United States of America", "USA,IA,Osceola,Melvin"], // 1
    ["Melsele, Oost-Vlaanderen, Belgium", "BEL,EFL,Melsele"],
    ["Mercer, WI", "USA,WI,Iron,Mercer"],  // 1
    ["Meriden, Cherokee, Iowa, USA", "USA,IA,Cherokee,Meriden"], // 1
    ["Meriden, Cherokee, Iowa", "USA,IA,Cherokee,Meriden"], // 1
    ["Meriden, Meriden, Cherokee, Iowa, USA", "USA,IA,Cherokee,Meriden,Meriden"], // 1
    ["Mevagissey, Cornwall, England", "ENG,COR,Mevagissey"],
    ["Megavissey Cornwall, England", "ENG,COR,Mevagissey"],
    ["Mesa, Maricopa, Arizona, USA", "USA,AZ,Maricopa,Mesa"], // 1
    ["Mesa, Maricopa, Arizona, United States of America", "USA,AZ,Maricopa,Mesa"], // 1
    ["Mesa, AZ", "USA,AZ,Maricopa,Mesa"], // 2
    ["Mexico, Indiana", "USA,IN,Miami,Mexico"], // 1
    ["Mexico, Jefferson Township, Miami County, Indiana", "USA,IN,Miami,Mexico,Jefferson Township"], // 2
    ["Mexico, Miami County, Indiana, United States of America", "USA,IN,Miami,Mexico"], // 1
    ["Mexico, Miami, Indiana, USA", "USA,IN,Miami,Mexico"], // 1
    ["Miami County, Indiana, USA", "USA,IN,Miami"], // 1
    ["Miami, Indiana, United States", "USA,IN,Miami"],  // 1
    ["Michigan City, Laporte, Indiana, USA", "USA,IN,LaPorte,Michigan City"], // 1
    ["Middlebury, Elkhart, Indiana, USA", "USA,IN,Elkhart,Middlebury"], // 1
    ["Middle Creek, Kentucky, USA", "USA,KY,Floyd,Middle Creek"],  // 1
    ["Middlesex, England", "ENG,MDL"],
    ["Middlesex, London, England", "ENG,MDL"],
    ["Mijnsheerenland", "NLD,ZUI,Mijnsheerenland"],
    ["Mijnsheerenland, Binnenmaas, Zuid-Holland, Netherlands", "NLD,ZUI,Mijnsheerenland"],
    ["Mijnsheerenland, Zuid-Holland, Netherlands", "NLD,ZUI,Mijnsheerenland"],
    ["Mijnsheerenland, Zuid Holland, Netherlands", "NLD,ZUI,Mijnsheerenland"],
    ["Mijnsheerenland, Zuid-Holland, Pays-Bas", "NLD,ZUI,Mijnsheerenland"],
    ["Mijnsheerenland,Zuid-Holland, Netherlands", "NLD,ZUI,Mijnsheerenland"],
    ["Mijnsheerenland, 6141, Zuid-Holland, Pays-Bas", "NLD,ZUI,Mijnsheerenland"],
    ["Mijnsheerenland, Binnenmaas Municipality, Zuid-Holland, Netherlands", "NLD,ZUI,Mijnsheerenland"],
    ["Mijnsheerenland, Nl", "NLD,ZUI,Mijnsheerenland"],
    ["Mill Creek, PA, USA", "USA,PA,Huntingdon,Mill Creek"], // 1
    ["Milford, Jefferson Township, Kosciuski County, Indiana, USA", "USA,IN,Kosciusko,Milford,Jefferson Township"], // 1
    ["Milford, Bucks, Pennsylvania, Colonial America", "USA,PA,Pike,Milford"],
    ["Milford, Pike, Pennsylvania, United States", "USA,PA,Pike,Milford"],
    ["Millbrook, Peterborough County, Ontario, Canada", "CAN,ON,Peterborough,Millbrook"],
    ["Millbrook, Peterborough, Ontario, Canada", "CAN,ON,Peterborough,Millbrook"],  // 1
    ["Millbrook, 1654329, Ontario, Canada", "CAN,ON,Peterborough,Millbrook,1654329"], // 2
    ["Millbrook, Ontario, Canada", "CAN,ON,Peterborough,Millbrook"], // 1
    ["Milwaukee, Milwaukee, Wisconsin, USA", "USA,WI,Milwaukee,Milwaukee"], // 3
    ["Mingo, Jasper County, Iowa, USA", "USA,IA,Jasper,Mingo"], // 1
    ["Mingo, Jasper County, Iowa, United States of America", "USA,IA,Jasper,Mingo"], // 1
    ["Minesota, USA", "USA,MN"],
    ["Minneapolis, Hennepin Co., Minnesota, USA", "USA,MN,Hennepin,Minneapolis"],
    ["Minneapolis, Hennepin, Minnesota, USA", "USA,MN,Hennepin,Minneapolis"],
    ["Minneapolis, Hennepin County, Minnesota, USA", "USA,MN,Hennepin,Minneapolis"],
    ["Minneapolis, Hennepin County, Minnesota, United States of America", "USA,MN,Hennepin,Minneapolis"],
    ["Minneapolis, Hennepin, MN, USA", "USA,MN,Hennepin,Minneapolis"],
    ["Minneapolis, Hennepin, Minnesota, United States", "USA,MN,Hennepin,Minneapolis"],
    ["Minneapolis, Hennepin, Minnesota", "USA,MN,Hennepin,Minneapolis"],
    ["Minneapolis (Districts 1-250), Minneapolis, Hennepin, Minnesota, USA", "USA,MN,Hennepin,Minneapolis"],  // 8
    ["Minneapolis Ward 1, Hennepin, Minnesota, USA", "USA,MN,Hennepin,Minneapolis,Ward 1"],  // 4
    ["Minneapolis Ward 10, Hennepin, Minnesota, USA", "USA,MN,Hennepin,Minneapolis,Ward 10"],  // 30
    ["Minneapolis Ward 11, Hennepin, Minnesota, USA", "USA,MN,Hennepin,Minneapolis,Ward 11"],  // 1
    ["Minneapolis Ward 4, Hennepin, Minnesota, USA", "USA,MN,Hennepin,Minneapolis,Ward 4"],  // 1
    ["Minneapolis Ward 9, Hennepin, Minnesota, USA", "USA,MN,Hennepin,Minneapolis,Ward 9"],  // 14
    ["Minneapolis, Anoka, Minnesota, United States", "USA,MN,Hennepin,Minneapolis"],  // 1
    ["Minneapolis, Hennepin Co., Minnesota", "USA,MN,Hennepin,Minneapolis"],  // 1
    ["Minneapolis, MN", "USA,MN,Hennepin,Minneapolis"],  // 12
    ["Minneapolis, Minnesota, USA", "USA,MN,Hennepin,Minneapolis"],  // 27
    ["Minneapolis", "USA,MN,Hennepin,Minneapolis"],  // 2
    ["Minneapolis,Hennepin,Minnesota,USA", "USA,MN,Hennepin,Minneapolis"],  // 1
    ["Minnesota, USA", "USA,MN"],
    ["Minnesota, United States of America", "USA,MN"],
    ["Minnesota", "USA,MN"],
    ["Minnesota, United States", "USA,MN"], // 1
    ["Minnesota City, Winona, Minnesota, United States", "USA,MN,Winona,Minnesota City"], // 1
    ["Mishawaka, St Joseph, Indiana, USA", "USA,IN,St. Joseph,Mishawaka"], // 1
    ["Missoula, Missoula, Montana, USA", "USA,MT,Missoula,Missoula"],
    ["Missoula, Missoula, MT, USA", "USA,MT,Missoula,Missoula"],
    ["Missoula, Montana, USA", "USA,MT,Missoula,Missoula"],  // 8
    ["Missoula, Missoula, Montana, United States", "USA,MT,Missoula,Missoula"], // 1
    ["Mobberly, Cheshire, England", "ENG,CHS,Mobberly"],
    ["Moline, Rock Island, Illinois, USA", "USA,IL,Rock Island,Moline"], // 3
    ["Moline", "USA,IL,Rock Island,Moline"], // 2
    ["Moline, Rock Island County, Illinois, United States of America", "USA,IL,Rock Island,Moline"], // 1
    ["Monmouth, Warren County, Illinois, USA", "USA,IL,Warren,Monmouth"], // 1
    ["Monroe County, Virginia, United States", "USA,WV,Monroe"], // 1
    ["Monroe, Harrison, Ohio, United States, ", "USA,OH,Harrison,Monroe"], // 1
    ["Monk Wearmouth, Durham, England", "ENG,DUR,Monkwearmouth"],
    ["Monkwearmouth, Durham, England", "ENG,DUR,Monkwearmouth"],
    ["Montana", "USA,MT"],
    ["Monroe Twp, Harrison, Ohio, USA", "USA,OH,Harrison,Monroe Tonwship"],  // 1
    ["Montgomery, Hamilton, Ohio, USA", "USA,OH,Hamilton,Montgomery"],
    ["Montgomery County, Ohio, USA", "USA,OH,Montgomery"],
    ["Montgomery County, Ohio, United States of America", "USA,OH,Montgomery"],
    ["Montgomery County, Virginia, USA", "USA,OH,Montgomery"],
    ["Montgomery, Virginia, USA", "USA,VA,Montgomery"],
    ["Montgomery County, Virginia, United States of America", "USA,VA,Montgomery"], // 1
    ["Monticello, Wright, Minnesota, USA", "USA,MN,Wright,Monticello"],
    ["Montpelier, Blackford County, Indiana, United States of America", "USA,IN,Blackford,Montpelier"], // 1
    ["Moorhead, Minnesota, USA", "USA,MN,Clay,Moorehead"],  // 1
    ["Morsfeld, Donnersberg, Rhineland-Palatinate, Germany", "DEU,RP,Donnersberg,Morsfeld"], // 1
    ["Mouth Beaver, Floyd, Kentucky, USA", "USA,KY,Floyd,Mouth Beaver"], // 1
    ["Moville, Woodbury, Iowa, USA", "USA,IA,Woodbury,Moville"], // 1
    ["Mpls", "USA,MN,Hennepin,Minneapolis"], // 1
    ["Mound , Lake Mlnnetonka", "USA,MN,Hennepin,Mound,Lake Minnetonka"], // 2
    ["Multnomah, Oregon, USA", "USA,OR,Multnomah"], // 1
    ["Murton, Northumberland, England", "ENG,NBL,Murton"],
    ["Muscatine County, Iowa, USA", "USA,IA,Muscatine"], // 1
    ["Mörsfeld , Donnersbergkreis, Rhineland-Palatinate, Germany", "DEU,RP,Donnersbergkreis,Morsfeld"],
    ["My District, Floyd, Kentucky, USA", "USA,KY,Floyd,My District"], // 7
    ["Mylo Rollett, North Dakota, USA", "USA,ND,Rolette,Mylo"],
    ["Mylo, Rolette County, North Dakota, United States of America", "USA,ND,Rolette,Mylo"],
    ["Mylo, Rolette, North Dakota, USA", "USA,ND,Rolette,Mylo"],
    ["Naaldwijk, Naaldwijk, Zuid-Holland, Pays-Bas", "NLD,ZUI,Naalswijk"],
    ["Naaldwijk, Zuid-Holland, Pays-Bas", "NLD,ZUI,Naalswijk"],
    ["Nappanee, Elkhart, Indiana, USA", "USA,IN,Elkhart"],  // 1
    ["Nappanee, Indiana", "USA,IN,Elkhart,Nappanee"], // 1
    ["Nailstone, Leicestershire, England", "ENG,LEI,Nailstone"],
    ["Nailstone, Leicestershire", "ENG,LEI,Nailstone"],
    ["Nebraska, USA", "USA,NE"],
    ["Nelsonville, Athens, Ohio, USA", "USA,OH,Athens,Nelsonville"],
    ["Neosho, Coffey, Kansas Territory, USA", "USA,KS,Coffey,Neosho"], // 4
    ["Neosho, Coffey, Kansas, USA", "USA,KS,Coffey,Neosho"], // 1
    ["Nether Stowey, Somerset, England", "ENG,SOM,Nether Stowey"],
    ["Netherlands", "NLD"],
    ["Netherlands ", "NLD"],
    ["New Athens, Harrison County, Ohio, United States of America", "USA,OH,Harrison,New Athens"],  // 2
    ["New Brunswick, Canada", "CAN,NB"],
    ["New Brunswick, New Brunswick, Canada", "CAN,NB"],
    ["New Castle, New Castle, Delaware, USA", "USA,DE,New Castle,New Castle"],
    ["New Castle, New Castle, Delaware, United States", "USA,DE,New Castle,New Castle"],
    ["New England, USA", "USA,MA"],  // 3
    ["New Kent, New Kent County, Virginia, English Colony", "USA,VA,New Kent,New Kent"],  // 1
    ["New Kent, New Kent, Virginia, United States", "USA,VA,New Kent,New Kent"],  // 1
    ["New Kent, British Colonial America, Virginia, USA", "USA,VA,New Kent"],
    ["New Kent, New Kent, Virginia, USA", "USA,VA,New Kent"],
    ["New Kent, VA, Virginia, USA", "USA,VA,New Kent"],
    ["New Kent, Virginia, USA", "USA,VA,New Kent"],
    ["New York, New York, USA", "USA,NY,New York"],
    ["New York, USA", "USA,NY"],
    ["Newark, NJ", "USA,NJ,Essex,Newark"],
    ["Newbold Verdon, Leicester, England", "ENG,LEI,Newbold Verdon"],
    ["Newbold Verdon, Leicestershire, , England", "ENG,LEI,Newbold Verdon"],
    ["Newbold Vernon, Leicestershire, England", "ENG,LEI,Newbold Verdon"],
    ["Newbold Verdon, Leicestershire, England", "ENG,LEI,Newbold Verdon"],
    ["Newcastle, Northumberland, England", "ENG,NBL,Newcastle"],
    ["Newcastle upon Tyne, Northumberland", "ENG,NBL,Newcastle"],  // 1
    ["Nevada", "USA,NV"], // 3
    ["Newberry, LaGrange, Indiana, USA", "USA,IN,LaGrange,Newberry"], // 1
    ["Newry, Down, Ulster, Ireland", "NIR,DOW,Newry"],  // 1
    ["Newton, Jasper, Iowa, USA", "USA,IA,Jasper,Newton"],
    ["Newton, IA, Iowa, USA", "USA,IA,Jasper,Newton"],
    ["Newton, Iowa, USA", "USA,IA,Jasper,Newton"],
    ["Newton, Jasper County, Iowa, United States of America", "USA,IA,Jasper,Newton"],
    ["Newton, Jasper, Iowa, United States", "USA,IA,Jasper,Newton"],
    ["Newton Township, Newton, Jasper, Iowa, USA", "USA,IA,Jasper,Newton"], // 7
    ["Newton Ward 1, Jasper, Iowa, USA", "USA,IA,Jasper,Newton, Ward 1"], // 9
    ["Newton, Newton, Jasper, Iowa, USA", "USA,IA,Jasper,Newton"], // 3
    ["Newton, Otter Tail, Minnesota, USA", "USA,MN,Otter Tail,Newton"], // 1
    ["New York", "USA,NY"],
    ["Nieuw-Beijerland", "NLD,ZUI,Nieuw Beijerland"],
    ["No Two Listed, Fauquier, Virginia", "USA,VA,Fauquier,No Two Listed"], // 1
    ["Nobles County, Minnesota, USA", "USA,MN,Nobles"], // 1
    ["North Dakota, USA", "USA,ND"], // 2
    ["Noord-Holland, Noord-Holland, Pays-Bas", "NLD,NOR"],
    ["Nordmyren farm, Hovin sokn, Ullensaker prestegjeld, Akershus, Norvège", "NOR,AKR,Ullensaker prestegjeld,Hovin sokn,Nordmyren farm"],
    ["Nordmyren farm, Hovin, Ullensaker prestegjeld, Akershus, Norway", "NOR,AKR,Ullensaker prestegjeld,Hovin sokn,Nordmyren farm"],
    ["North Carolina, USA", "USA,NC"],
    ["North Carolina", "USA,NC"],
    ["North Dakota", "USA,ND"],
    ["North Petherton, Somerset, England", "ENG,SOM,North Petherton"],
    ["Northern District, Buckingham, Virginia, USA", "USA,VA,Buckingham,Northern District"], // 1
    ["Northfield, Minnesota, USA", "USA,MN,Rice,Northfield"], // 1
    ["Northumberland Unitary Authority, Northumberland, England", "ENG,NBL,Northumberland Unitary Authority"],
    ["Northumberland and Durham, Ontario, Canada", "CAN,ON,Northumberland and Durham"],  // 1
    ["Norway", "NOR"],
    ["Norway to Quebec to Wisconsin", "CAN,QC"], // 1
    ["Norway to Wisconsin", "USA,WI"], // 2
    ["Not Stated, Washington, Virginia, USA", "USA,VA,Washington"],
    ["Nottingham, Harrison, Ohio, USA", "USA,OH,Harrison,Nottingham"], // 2
    ["Nottingham, Nottinghamshire, England", "ENG,NTT,Nottingham"],
    ["Nottingham Twp, Harrison Cty, Ohio, USA", "USA,OH,Harrison,Nottingham Township"],  // 1
    ["Numansdorp, Zuid-Holland, Netherlands", "NLD,ZUI,Numansdorp"],
    ["Numansdorp, Zuid-Holland, Pays-Bas", "NLD,ZUI,Numansdorp"],
    ["Nygården farm, Åsnes, Hedmark, Norvège", "NOR,HED,├àsnes,Nyg├Ñrden farm"],
    ["Näsby, Jönköping, Småland, Sverige", "SWE,JON,Nasby"],
    ["of MD", "USA,MD"],  // 2
    ["of PA", "USA,PA"],  // 2
    ["Odessa, Ramsey, North Dakota, USA", "USA,ND,Ramsey,Odessa"],  // 1
    ["Ogema, Becker County, Minnesota, United States of America", "USA,MN,Becker,Omega"],
    ["Ohio", "USA,OH"],
    ["Ohio, United States of America", "USA,OH"],
    ["Ohio, United States", "USA,OH"],
    ["Ohio, USA", "USA,OH"],
    ["Old Goshenhoppen Church, Pennsylvania, USA", "USA,PA,Montgomery,Harleysville,Old Goshenhoppen Church"],  // 1
    ["Ontario, Canada", "CAN,ON"],
    ["Ontario North", "CAN,ON,Durham,Ontario North"], // 1
    ["Oost Ijsselmonde, Zind Holland, Zeeland, Pays-Bas", "NLD,ZUI,Oost IJsselmonde"],
    ["Oost-IJselmonde, Netherlands", "NLD,ZUI,Oost IJsselmonde"],
    ["Oskaloosa, Mahaska, Iowa, USA", "USA,IA,Mahaska,Oskaloosa"],  // 1
    ["Oslo to America", "NOR,OSL"], // 1
    ["Osseo, Minnesota, USA", "USA,MN,Hennepin,Osseo"], // 1
    ["Otsego, Wright, Minnesota, USA", "USA,MN,Wright,Otsego"], // 1
    ["Oud Beierland, Zuid-Holland, Netherlands", "NLD,ZUI,Oud Beijerland"],
    ["Oud Beijerland", "NLD,ZUI,Oud Beijerland"],
    ["Oud-Beijerland, 6192, Zuid-Holland, Pays-Bas", "NLD,ZUI,Oud Beijerland"],
    ["Oud-Beijerland, Beijerland, Zuid Holland, Netherlands", "NLD,ZUI,Oud Beijerland"],
    ["Oud-Beijerland, Zuid-Holland, Netherlands", "NLD,ZUI,Oud Beijerland"],
    ["Oud-Beijerland, Zuid-Holland, Pays-Bas", "NLD,ZUI,Oud Beijerland"],
    ["Oud-Beijerland", "NLD,ZUI,Oud Beijerland"],
    ["Oud Reijenerwaard, Zind Holland, Netherlands", "NLD,ZUI,Oud Reijenerwaard"],  // 1
    ["Ouddorp", "NLD,ZUI,Goedereede,Ouddorp"],
    ["Ouddorp, Goedereede, Zuid-Holland, Netherlands", "NLD,ZUI,Goedereede,Ouddorp"],
    ["Ouddorp, Goedereede, Zuid-Holland, Pays-Bas", "NLD,ZUI,Goedereede,Ouddorp"],
    ["Oxfordshire, England", "ENG,OXF"],
    ["PA", "USA,PA"],  // 1
    ["Paintsville, Johnson, Kentucky, USA", "USA,KY,Johnson,Paintsville"],
    ["Paintsville, Johnson, Kentucky, United States", "USA,KY,Johnson,Paintsville"],
    ["Pamunkey River, New Kent, Virginia, USA", "USA,VA,New Kent,Pamunkey River"],
    ["Paris, Stark, Ohio, USA", "USA,OH,Stark,Paris"], // 1
    ["Parish Church Longbenton,Longbenton,Northumberland,England", "ENG,NBL,Longbenton"],  // 1
    ["Patrick County, Virginia", "USA,VA,Patrick"],
    ["Patrick, Halifax Co., Virginia", "USA,VA,Patrick"],
    ["Patrick, Virginia, United States", "USA,VA,Patrick"],
    ["Peckleton, Leicestershire, England", "ENG,LEI,Peckleton"],
    ["Pedmore, Worcester, Worcestershire, England", "ENG,WOR,Worcester,Pedmore"],
    ["Pella, Marion, Iowa, USA", "USA,IA,Marion,Pella"],
    ["Pella Marion County, Marion, Iowa", "USA,IA,Marion,Pella"],
    ["Pella, Marion County, Iowa, USA", "USA,IA,Marion,Pella"],
    ["Pella, Marion County, Iowa, United States of America", "USA,IA,Marion,Pella"],
    ["Pella, Marion, Iowa", "USA,IA,Marion,Pella"],  // 2
    ["Pella Ward 4, Marion, Iowa, USA", "USA,IA,Marion,Pella,Ward 4"], // 1
    ["Pembina, North Dakota, USA", "USA,ND,Pembina"],  // 1
    ["Pennsylvania, Pennsylvania, USA", "USA,PA"],  // 2
    ["Pennsylvania, Somerset, Pennsylvania, United States", "USA,PA,Somerset"],
    ["Pennsylvania, USA, Ohio, United States", "USA,PA"],
    ["Pennsylvania, United States", "USA,PA"],
    ["Pennsylvania", "USA,PA"],
    ["Pennsylvania, Somerset, Pennsylvania, USA", "USA,PA,Somerset"],
    ["Pennsylvania, USA", "USA,PA"],
    ["Pennsylvania, United States of America", "USA,PA"],
    ["Perry, Ohio, USA", "USA,OH,Lake,Perry"],  // 3
    ["Perry Township, Brown, Ohio, USA", "USA,OH,Brown,Perry Township"],  // 1
    ["Perrysburg, Miami, Indiana, USA", "USA,IN,Miami,Perrysburg"],
    ["Perth, Towner, North Dakota, USA", "USA,ND,Towner,Perth"],
    ["Perth, Island Lake Church, Bridegroom's farm, Island Lake, Rolette, North Dakota, USA", "USA,ND,Towner,Perth"],  // 1
    ["Peru Ward 3, Miami, Indiana, USA", "USA,IN,Miami,Peru,Ward 3"], // 3
    ["Peru, Indiana, USA", "USA,IN,Miami,Peru"], // 3
    ["Peru, Miami, Indiana, USA", "USA,IN,Miami,Peru"], // 1
    ["Peterborough, 1654329, Ontario, Canada", "CAN,ON,Peterborough"],
    ["Petitioners, Windham County, Vermont, USA", "USA,VT,Windham,Petitioners"], // 1
    ["Philadelphia, Philadelphia County, PA", "USA,PA,Philadelphia,Philadelphia"], // 1
    ["Philadelphia, Pennsylvania", "USA,PA,Philadelphia"],  // 2
    ["Pickering Grange, Leicestershire,  England", "ENG,LEI,Pickering Grange"],
    ["Piershil, Westmaas, Binnenmaas, Zuid-Holland, Pays-Bas", "NLD,ZUI,Piershil"],
    ["Pike County, Kentucky, USA", "USA,KY,Pike"],
    ["Pike County, Ohio, United States of America", "USA,OH,Pike"],
    ["Pike County, Ohio, USA", "USA,OH,Pike"],
    ["Pike Township, Perry Co, Ohio, USA", "USA,OH,Pike,Pike Township"],
    ["Pike, Kentucky, USA", "USA,KY,Pike"],
    ["Pike, Kentucky, United States", "USA,KY,Pike"],
    ["Pleasant, Clay, West Virginia, USA", "USA,WV,Clay,Pleasant"], // 1
    ["Plainfield, Windham County, Connecticut, United States of America", "USA,CT,Windham,Plainfield"],  // 1
    ["Plymouth, Iowa, United States", "USA,IA,Cerro Gordo,Plymouth"], // 1
    ["Plymouth, Devon, , England", "ENG,DEV,Plymouth"],
    ["Plymouth, Devon, England", "ENG,DEV,Plymouth"],
    ["Plymouth, Michigan", "USA,MI,Wayne,Plymouth"], // 1
    ["Port Hope, Ontario, Canada", "CAN,ON,Northumberland,Port Hope"],
    ["Port of New York, New York, United States", "USA,NY,New York,Port of New York"],  // 1
    ["Portland, Multnomah, OR, USA", "USA,OR,Multnomah,Portland"],
    ["Portland, Multnomah, Oregon, USA", "USA,OR,Multnomah,Portland"],  // 1
    ["Portland, Oregon, USA", "USA,OR,Multnomah,Portland"], // 7
    ["Portsmouth,Rhode Island", "USA,RI,Newport,Portsmouth"],  // 1
    ["Portsmouth, Newport, Rhode Island, USA", "USA,RI,Newport,Portsmouth"],
    ["Portsmouth, R I", "USA,RI,Newport,Portsmouth"],
    ["Powhatan, Powhatan, Virginia, USA", "USA,VA,Powhatan,Powhatan"],
    ["Poweshiek Township, Jasper County, IA", "USA,IA,Jasper,Poweshiek Township"], // 1
    ["Poweshiek, Greencastle, Jasper, Iowa, USA", "USA,IA,Jasper,Greencastle,Poweshiek"], // 2
    ["Poweshiek, Jasper, Iowa, USA", "USA,IA,Jasper,Poweshiek"], // 43
    ["Poweshiek, Jasper, Iowa, United States", "USA,IA,Jasper,Poweshiek"], // 1
    ["Poweshiek, Jasper, Iowa", "USA,IA,Jasper,Poweshiek"], // 1
    ["Prairie, Harlan, Nebraska", "USA,NE,Harlan,Prairie"], // 1
    ["Precinct 6, Prestonsburg, Floyd, Kentucky, USA", "USA,KY,Floyd,Prestonsburg,Precinct 6"], // 1
    ["Precinct 7, Prestonsburg, Floyd, Kentucky, USA", "USA,KY,Floyd,Prestonsburg,Precinct 7"], // 1
    ["Preble County, Ohio, USA", "USA,OH,Preble"],
    ["Preble County, Ohio, United States of America", "USA,OH,Preble"],
    ["Preble Cty, Ohio, USA", "USA,OH,Preble,Preble"],
    ["Preble, Ohio", "USA,OH,Preble"],
    ["Preble, Ohio, USA", "USA,OH,Preble"],  // 1
    ["Prestonsburg, Floyd, Kentucky, United States", "USA,KY,Floyd,Prestonburg"],
    ["Prestonsburg, Floyd, Kentucky, USA", "USA,KY,Floyd,Prestonburg"],
    ["Primghar, O'Brien County, Iowa, United States of America", "USA,IA,O'Brien,Primghar"],  // 1
    ["Prince George's, Maryland", "USA,MD,Prince George's"], // 1
    ["Prince William County, Virginia, USA", "USA,VA,Prince William"],  // 1
    ["Putnam County, Illinois, USA", "USA,IL,Putnam"],  // 1
    ["Québec, Canada", "CAN,QC"],
    ["Quebec, Canada", "CAN,QC"],
    ["Ramsgate, Kent, England", "ENG,KEN,Ramsgate"],
    ["Rapids City, Whiteside, Illinois, United States", "USA,IL,Whiteside,Rapids City"],  // 1
    ["Rapids City, Rock Island, Illinois, USA", "USA,IL,Rock Island,Rapids City"], // 7
    ["Red Eye Township, Red Eye, Wadena, Minnesota, USA", "USA,MN,Wadena,Red Eye"], // 1
    ["Reilsheim, Baden, Baden Wurttemberg, Allemagne", "DEU,BW,Baden,Reilsheim"],
    ["Reilsheim, Rhein-Neckar-Kreis, Baden-Wuerttemberg, Germany", "DEU,BW,Baden,Reilsheim"],
    ["Remer, Cass, Minnesota, USA", "USA,MN,Cass,Remer"],
    ["Remer Township, Remer, Cass, Minnesota, USA", "USA,MN,Cass,Remer Township,Remer"], // 1
    ["Remer, Cass, Minnesota", "USA,MN,Cass,Remer"], // 3
    ["Reno, NV", "USA,NV,Washoe,Reno"], // 1
    ["Reno, Nevada, USA", "USA,NV,Washoe,Reno"], // 1
    ["Renfrewshire, Scotland", "SCO,RFW"],
    ["Resolis A Cree Wisconsin, USA", "USA,WI,Adams,Roche a Cri"],  // 1
    ["Roche a Cree n.e.l. Menighed, Strongs Prairie Twp, Adams, Wisconsin, USA", "USA,WI,Adams,Roche a Cri"],  // 1
    ["Rhineland-Palatinate, Frankenthal, Rheinland Pfalz, Allemagne", "DEU,RP,Frankenthal"],
    ["Rhodes, Marshall, Iowa, USA", "USA,IA,Marshall,Rhodes"],  // 1
    ["RI, Rhode Island, USA", "USA,RI"],  // 1
    ["Rice, North Dakota, USA", "USA,ND,Rolette,Rice Township"], // 1
    ["Rice, Rolette, North Dakota, USA", "USA,ND,Rolette,Rice Township"], // 1
    ["Rice, Township 159 Range 71, Rolette, North Dakota, USA", "USA,ND,Rolette,Rice Township,159 Range 71,Rice"], // 1
    ["Richfield, Hennepin, Minnesota, USA", "USA,MN,Hennepin,Richfield"], // 1
    ["Richland, Wapello, Iowa, USA", "USA,IA,Wapello,Richland"], // 4
    ["Richland, Whitley, Indiana, USA", "USA,IN,Whitley,Richland"], // 6
    ["Ridderkerk, Zuid Holland, Netherlands", "NLD,ZUI,Ridderkerk"],
    ["Ridderkerk, Ridderkerk, Zuid-Holland, Netherlands", "NLD,ZUI,Ridderkerk"],
    ["Ridderkerk, Zuid-Holland, Netherlands", "NLD,ZUI,Ridderkerk"],
    ["Ridderkerk, Zuid-Holland, Pays-Bas", "NLD,ZUI,Ridderkerk"],
    ["Ridderkerk, Zuid-Hollland, Zuid-Holland, Pays-Bas", "NLD,ZUI,Ridderkerk"],
    ["Rijsoord, Ridderkerk, Zuid-Holland, Netherlands", "NLD,ZUI,Ridderkerk,Rijsoord"],
    ["Rimouski, Quebec, Canada", "CAN,QC,Bas-Saint-Laurent,Rimouski"],
    ["Rimouski, Rimouski-Neigette, Quebec, Canada", "CAN,QC,Bas-Saint-Laurent,Rimouski"],
    ["Riviere-du-Loup, Québec, Canada", "CAN,QC,Bas-Saint-Laurent,Riviere-du-Loup"],
    ["Rochester, Plymouth County, Massachusetts, United States of America", "USA,MA,Plymouth,Rochester"],
    ["Rochester, Plymouth, Massachusetts, USA", "USA,MA,Plymouth,Rochester"],
    ["Rochester, Plymouth, Massachusetts, United States", "USA,MA,Plymouth,Rochester"],
    ["Rochester, Monroe County, New York, United States of America", "USA,NY,Monroe,Rochester"],  // 1
    ["Rock Hill, Bucks County, Pennsylvania, United States of America", "USA,PA,Bucks,Rock Hill"],
    ["Rock Island Ill.", "USA,IL,Rock Island"],  // 1
    ["Rock Island, Illinois, USA", "USA,IL,Rock Island"],  // 1
    ["Rock Island", "USA,IL,Rock Island"],  // 1
    ["Rockingham County, Virginia, USA", "USA,VA,Rockingham"],  // 1
    ["Rockingham, North Carolina", "USA,VA,Rockingham"],  // 1
    ["Rockwood, Wadena, Minnesota, USA", "USA,MN,Wadena,Rockwood"], // 2
    ["Rolde, Drenthe, Pays-Bas", "NLD,DRE,Rolde"],
    ["Rolette County, North Dakota, USA", "USA,ND,Rolette"], // 2
    ["Rollete, North Dakota, USA", "USA,ND,Rolette"],
    ["Rolette Role, North Dakota", "USA,ND,Rolette"],
    ["Rolette, North Dakota, USA", "USA,ND,Rolette"],
    ["Rolette, North Dakota", "USA,ND,Rolette"],
    ["Rolla, Rolette County, North Dakota, United States of America", "USA,ND,Rolette,Rolla"],
    ["Rollette, North Dakota, USA", "USA,ND,Rolette"],
    ["Ross, Ohio, United States", "USA,OH,Ross"],  // 1
    ["Rotterdam", "NLD,ZUI,Rotterdam"],
    ["Rotterdam, 6240, Zuid-Holland, Pays-Bas", "NLD,ZUI,Rotterdam"],
    ["Rotterdam, Zuid-Holland, Pays-Bas", "NLD,ZUI,Rotterdam"],
    ["Rowan County, North Carolina, USA", "USA,NC,Rowan"],  // 1
    ["Roxbury, Massachusetts", "USA,MA,Suffolk,Roxbury"],  // 1
    ["Royalton, Windsor County, Vermont, United States of America", "USA,VT,Windsor,Royalton"],
    ["Royalton, Windsor, Vermont, USA", "USA,VT,Windsor,Royalton"],  // 1
    ["Rural", "USA,MN,Wadena,Red Eye,Rural"], // 1 Elizabeth Ann Bevinbs redidence in 1935
    ["Rural, Becker, Minnesota", "USA,MN,Becker,Rural"], // 6
    ["Rural, Cass, Minnesota, USA", "USA,MN,Cass,Rural"], // 1
    ["Rural, Itasca, Minnesota", "USA,MN,Itasca,Rural"], // 5
    ["Rural, Jasper, Iowa, USA", "USA,IA,Jasper,Rural"], // 3
    ["Rural, Jasper, Iowa", "USA,IA,Jasper,Rural"], // 3
    ["Rural, Rolette, North Dakota, USA", "USA,ND,Rolette,Rural"], // 1
    ["Ruste 92, Hedalen, Sør-Aurdal, Oppland, Norvège", "NOR,OPP,Sør-Aurdal,Hedalen,Ruste 92"],
    ["Ruste, Hedal, Oppland, Norway", "NOR,OPP,Hedal,Ruste"],
    ["Rye, East Sussex, England", "ENG,SXE,Rye"],
    ["Saint Paul, Ramsey County, Minnesota, United States of America", "USA,MN,Ramsey,St Paul"],
    ["Saint Vincent, Kittson County, Minnesota, United States of America", "USA,MN,Kittson,St Vincent"],
    ["Saint Brunos Par.,Van Buren,Aroostook,Maine, USA", "USA,ME,Aroostook,Van Buren,St Brunos Parish"],
    ["Saint Brunos Parish, Van Buren, Aroostook, Maine, USA", "USA,ME,Aroostook,Van Buren,St Brunos Parish"],
    ["Saint John The Baptist,Chester,Cheshire,England", "ENG,CHS,Chester,St John the Baptist"],
    ["Saint Leonard, Madawaska, New Brunswick, Canada", "CAN,NB,Madawaska,St Leonard"],  // 1
    ["Saint Margarets, Anne Arundel County, Maryland, USA", "USA,MD,Anne Arundel,St Margarets"],
    ["Sainte-Élisabeth, D'Autray, Quebec, Canada", "CAN,QC,Lanaudiere,D'Autray,St Élisabeth"],
    ["Saint-Leonard-Parent, Madawaska, New Brunswick, Canada", "CAN,NB,Madawaska,St Leonard Parent"],  // 1
    ["Saint Savior,Dartmouth,Devon,England", "ENG,DEV,Dartmouth,St Savior"],  // 1
    ["Sainte-Élisabeth, D'Autray, Lanaudière, Québec, Canada", "CAN,QC,Joliette,St Elisabeth"],  // 1
    ["Salem, Washington County, New York, United States of America", "USA,NY,Washington,Salem"],  // 1
    ["Salisbury, Rockingham, North Carolina", "USA,NC,Rockingham,Salisbury"], // 1
    ["Sandgate, Bennington County, Vermont, USA", "USA,VT,Bennington,Sandgate"],  // 2
    ["Sandwich, Barnstable, Massachusetts,   USA", "USA,MA,Barnstable,Sandwich"],  // 1
    ["Sandwich, Massachusetts, USA", "USA,MA,Barnstable,Sandwich"],  // 1
    ["Sandwich, Barnstable County, Massachusetts, USA", "USA,MA,Barnstable,Sandwich"],
    ["Sandwich, Barnstable County, Massachusetts, United States of America", "USA,MA,Barnstable,Sandwich"],
    ["Sandwich, Barnstable, MA, Massachusetts, USA", "USA,MA,Barnstable,Sandwich"],
    ["Sandwich, Barnstable, MA, USA", "USA,MA,Barnstable,Sandwich"],
    ["Sandwich, Barnstable, Massachusetts, USA", "USA,MA,Barnstable,Sandwich"],
    ["Sandwich, Barnstable, Massachusetts, United States", "USA,MA,Barnstable,Sandwich"],
    ["Sandwich, Barnstable County, New England", "USA,MA,Barnstable,Sandwich"], // 1
    ["Sandwich", "USA,MA,Barnstable,Sandwich"], // 1
    ["Sandwidg, New Plymouth", "USA,MA,Barnstable,Sandwich"], // 1
    ["Sandwitch, Plymouth, Massachusetts", "USA,MA,Barnstable,Sandwich"], // 1
    ["Saratoga, Wood, Wisconsin, USA", "USA,WI,Wood,Saratoga"],  // 1
    ["Schenectady, Schenectady, New York, United States", "USA,NY,Schenectady,Schenectady"],  // 1
    ["Scituate, Massachusetts", "USA,MA,Plymouth,Scituate"],  // 1
    ["Scituate, Plymouth, Massachusetts, USA", "USA,MA,Plymouth,Scituate"],  // 2
    ["Scituate, Plymouth, Mass, Massachusetts, USA", "USA,MA,Plymouth,Scituate"],
    ["Scituate, Plymouth, Massachusetts, United States", "USA,MA,Plymouth,Scituate"],
    ["Scituate, Plymouth County, Massachusetts, colony", "USA,MA,Plymouth,Scituate"],
    ["Scotch Block, Rolette, North Dakota, USA", "USA,ND,Rolette,Scotch Block"],
    ["Scotland", "SCO"],
    ["Scott County, Virginia", "USA,VA,Scott"], // 1
    ["Scott, Virginia, United States", "USA,VA,Scott"],
    ["Seattle, Seattle, King, Washington, USA", "USA,WA,King,Seattle"], // 1
    ["Sebeka, Wadena Co., MN, Minnesota, USA", "USA,MN,Wadena,Sebeka"],
    ["Sebeka, Wadena, Minnesota, USA", "USA,MN,Wadena,Sebeka"],
    ["Sebeka, Wadena, Minnesota, United States", "USA,MN,Wadena,Sebeka"],
    ["Sharon, Vermont, USA", "USA,VT,Windsor,Sharon"],  // 1
    ["Sharon, Windsor, Vermont, USA", "USA,VT,Windsor,Sharon"],  // 1
    ["Sheffield, Bureau, Illinois, United States", "USA,IL,Bureau,Sheffield"],  // 1
    ["Shenton, Leicestershire, England", "ENG,LEI,Shenton"],
    ["Shepshed, Leicestershire, England", "ENG,LEI,Shepshed"],
    ["Shereden, Cherokee, Iowa", "USA,IA,Cherokee,Shereden Township"], // 1
    ["Sheridan, Cherokee, Iowa, USA", "USA,IA,Cherokee,Sheridan Township"], // 2
    ["Sheridan, Griffithsville, Lincoln, West Virginia, USA", "USA,WV,Lincoln,Griffithsville"], // 1
    ["Sheridan, Meriden, Cherokee, Iowa, USA", "USA,IA,Cherokee,Meriden,Sheridan"], // 1
    ["Sherman, Jasper, Iowa, USA", "USA,IA,Jasper,Sherman"],  // 1
    ["Shingobee, Cass, Minnesota, USA", "USA,MN,Cass,Shingobee"], // 3
    ["Shingobee, Shingobee, Cass, Minnesota, USA", "USA,MN,Cass,Shingobee"], // 2
    ["Sibley, Osceola, Iowa, USA", "USA,IA,Osceola,Sibley"], // 2
    ["Sint Anthoniepolder", "NLD,ZUI,Sint Anthoniepolder"],
    ["Sint Antonie Polder, South Holland, Netherlands", "NLD,ZUI,Sint Anthoniepolder"],
    ["Sint Antoniepolder, Zuid-Holland, Netherlands", "NLD,ZUI,Sint Anthoniepolder"],
    ["Sint Anthonie-Polder, Nederland", "NLD,ZUI,Sint Anthoniepolder"],
    ["Sint Anthonie-Polder, Zuid-Holland, Pays-Bas", "NLD,ZUI,Sint Anthoniepolder"],
    ["Sint Anthoniepolder, Binnenmaas, Zuid-Holland, Netherlands", "NLD,ZUI,Sint Anthoniepolder"],
    ["Sint Anthoniepolder, Gemeente Binnenmaas, Zuid-Holland, Pays-Bas", "NLD,ZUI,Sint Anthoniepolder"],
    ["Sint Anthoniepolder, Zh.nld", "NLD,ZUI,Sint Anthoniepolder"],
    ["Sint Anthoniepolder, Zuid-Holland, Pays-Bas", "NLD,ZUI,Sint Anthoniepolder"],
    ["Sint-Anthoniepolder, Zuid-Holland, Pays-Bas", "NLD,ZUI,Sint Anthoniepolder"],
    ["Siren, WI", "USA,WI,Burnett,Siren"], // 2
    ["Siren, Wisconsin, USA", "USA,WI,Burnett,Siren"], // 2
    ["Somerset County, Maryland, USA", "USA,MD,Somerset"],
    ["Somerset County, Maryland, United States of America", "USA,MD,Somerset"],
    ["Somerset, Maryland, USA", "USA,MD,Somerset"],
    ["Somerset, Montgomery, Maryland, USA", "USA,MD,Montgomery,Somerset"],
    ["Somerset, Pennsylvania, USA", "USA,PA,Somerset"],
    ["Somerset, Maryland, British America", "USA,MD,Somerset"],  // 1
    ["Somerset, Maryland, United States", "USA,MD,Somerset"],  // 1
    ["Somerset County, Pennsylvania, USA", "USA,PA,Somerset"],
    ["Somerset County, Pennsylvania, United States of America", "USA,PA,Somerset"],
    ["Somerset, Pennsylvania, United States", "USA,PA,Somerset"],
    ["Somerset, Somerset, Pennsylvania, United States", "USA,PA,Somerset,Somerset"],
    ["Sør-Aurdal, Oppland, Norvège", "NOR,OPP,Sør-Aurdal"],  // 1
    ["Sub District, Kentucky, United States", "USA,KY,Johnson,Sub District"], // 1 Spencer Perry Collins draft registration
    ["South Bay, South Bay, Thurston, Washington, USA", "USA,WA,Thurston,South Bay,South Bay"], // 1
    ["South Bay, Thurston, Washington, USA", "USA,WA,Thurston,South Bay"], // 1
    ["South Haven, Wright County, Minnesota, United States of America", "USA,MN,Wright,South Haven"],
    ["South Haven, Wright, Minnesota, USA", "USA,MN,Wright,South Haven"],
    ["South Pembina, Pembina, Dakota Territory, USA", "USA,ND,Pembina,South Pembina"], // 2
    ["South Red River Township, Kittson County, Minnesota, United States of America", "USA,MN,Kittson,South Red River Township"],  // 1    ["South Red River, Kittson, Minnesota, USA", "USA,MN,Kittson,South Red River"], // 3
    ["South Red River, Kittson, Minnesota, USA", "USA,MN,Kittson,South Red River Township"], // 3
    ["South Red Rliver, Kittson, Minnesota", "USA,MN,Kittson,South Red River Township"], // 1
    ["South Side, Wright, Minnesota, USA", "USA,MN,Wright,Southside Township"], // 9
    ["Southside, Wright, Minnesota, USA", "USA,MN,Wright,Southside Township"],
    ["Sprendlingen, Offenbach, Hesse, Germany", "DEU,HE"],  // 1
    ["Spring Green, Wisconsin, USA", "USA,WI,Sauk,Spring Green"], // 1
    ["Springfield", "USA,IL,Sangamon,Springfield"],  // 1
    ["Springfield, Oregon, USA", "USA,OR,Lane,Springfield"], // 1
    ["St Ann's, Dublin, Leinster, Ireland", "IRL,DUB,St Ann's"],
    ["St Basile, Madawaska, New Brunswick, Canada", "CAN,NB,Madawaska,St Basile"],
    ["St-Basile, Madawaska, New Brunswick, Canada", "CAN,NB,Madawaska,St Basile"],
    ["St-Basile, Madawaska, N.B. Canada, Canada", "CAN,NB,Madawaska,St Basile"],  // 1
    ["Saint Basile, Madawaska, New Brunswick, Canada", "CAN,NB,Madawaska,St Basile"],
    ["Saint-Basile, Madawaska County, New Brunswick, Canada", "CAN,NB,Madawaska,St Basile"],
    ["St Croix County, Wisconsin, USA", "USA,WI,St. Croix"],  // 1
    ["St Joachim, Chateaugay, Quebec, Canada", "CAN,QC,Chateauguay,St Joachim"],
    ["St Johns Parish, Baltimore, Maryland, USA", "USA,MD,Baltimore,St Johns Parish"],  // 3
    ["St Mary, Leicestershire, England", "ENG,LEI,St Mary"], // 1
    ["St Marys, Somerset, England", "ENG,SOM,St Marys"],
    ["St Nicholas, Leicestershire, , England", "ENG,LEI,St Nicholas"],  // 1
    ["St Paul, Joliette, Quebec, Canada", "CAN,QC,Lanaudiere,Joliette,St Paul"],
    ["St Paul Ward 10, Ramsey, Minnesota, USA", "USA,MN,Ramsey,St Paul, Ward 10"], // 1
    ["St Pauls, Chester, Delaware, Pennsylvania, USA", "USA,PA,Delaware,Chester,St Pauls"],  // 1
    ["St Pauls Parish, Baltimore, Maryland, USA", "USA,MD,Baltimore,St Pauls Parish"],  // 1
    ["St Pauls Parrish, Baltimore, Maryland, USA", "USA,MD,Baltimore,St Pauls Parish"],  // 1
    ["St Pauls Parish, Hanover, Virginia, USA", "USA,VA,Hanover,St Pauls Parish"],  // 1
    ["St Peters Parish, Hanover, Virginia, British Colonies", "USA,VA,Hanover,St Peters Parish"],  // 1
    ["St Peters Parish, Hanover, Virginia, United States", "USA,VA,Hanover,St Peters Parish"],  // 4
    ["St Peters, New Kent, Virginia, USA", "USA,VA,New Kent,St Peters"],  // 1
    ["St Sepulchre Newgate, London, England", "ENG,LND,Newgate,St Sepulchre"],
    ["St Sepulchre, Newgate, London, London, England", "ENG,LND,Newgate,St Sepulchre"],
    ["St Sepulcher, London, England", "ENG,LND,Newgate,St Sepulchre"],
    ["St Sepulchre, London, England", "ENG,LND,Newgate,St Sepulchre"],
    ["St-Ambroise-de-Kildare, Joliette, Québec, Canada", "CAN,QC,Lanaudiere,Joliette,St Ambroise de Kildare"],
    ["St-Ambroise-de-Kildare ; 2461040 ; Lanaudière ; Canada", "CAN,QC,Lanaudiere,Joliette,St Ambroise de Kildare"],
    ["St. Ambroise de Kildare, Joliette, Quebec, Canada", "CAN,QC,Lanaudiere,Joliette,St Ambroise de Kildare"],
    ["St-Ambroise-de-Kildare, (Joliette), Québec, Canada", "CAN,QC,Lanaudiere,Joliette,St Ambroise de Kildare"],  // 1
    ["St-Jacques-de-l'Achigan, (Moncalm), Québec, Canada", "CAN,QC,Lanaudiere,St. Jacques l'Achigan"],
    ["St-Louis, Kamouraska, Québec, Canada", "CAN,QC,Bas-Saint-Laurent,Kamouraska,St-Louis"],
    ["St-Roches-des-Aulnais, Quebec, Canada", "CAN,QC,Chaudiere-Appalaches,St Roches des Aulnais"],
    ["St. Anthoniepolder", "NLD,ZUI,Sint Anthoniepolder"],  // 1
    ["St. Jacques l'Achigan, Quebec, Canada", "CAN,QC,Lanaudiere,St. Jacques l'Achigan"],
    ["St Ambroise de Kildare, Quebec, Canada", "CAN,QC,Lanaudiere,St Ambroise de Kildare"],  // 7
    ["St Martine, Chateaugay, Quebec, Canada", "CAN,QC,Monteregie,Chateaugay,St Martine"],  // 1
    ["St-Alexis, (Montcalm), Québec, Canada", "CAN,QC,Lanaudiere,St Alexis"],  // 1
    ["St-Esprit, (Montcalm), Québec, Canada", "CAN,QC,Lanaudiere,St Esprit"],  // 2
    ["St. Alexis de Montcalm, Quebec, Canada", "CAN,QC,Lanaudiere,St Alexis"],  // 3
    ["St. Alphonse Rodriguez, Quebec, Canada", "CAN,QC,Lanaudiere,St Alphone Rodrigues"],  // 1
    ["St. Alphonse-Rodriguez, Quebec, Canada", "CAN,QC,Lanaudiere,St Alphone Rodrigues"],  // 1
    ["St. Germain de Rimouski, Quebec, Canada", "CAN,QC,Bas-Saint-Laurent,St Germain"],  // 2
    ["St Germain, Rimouski, Quebec, Canada", "CAN,QC,Bas-Saint-Laurent,St Germain"],  // 1
    ["Stanhope, Durham, England", "ENG,DUR,Stanhope"],
    ["Stanton Under Bardon, Leicestershire, England", "ENG,LEI,Stanton Under Bardon"],
    ["Stanton under Bardon, Leicestershire, England", "ENG,LEI,Stanton Under Bardon"],
    ["Stanton, Leicestershire, England", "ENG,LEI,Stanton Under Bardon"],
    ["Star Prairie, Saint Croix, Wisconsin, USA", "USA,WI,St. Croix,Star Prairie"], // 7
    ["Star Prairie, St Croix, Wisconsin, USA", "USA,WI,St. Croix,Star Prairie"], // 3
    ["Starke, Indiana, United States", "USA,IN,Starke"],  // 1
    ["Stark County, Ohio, USA", "USA,OH,Stark"],
    ["Ste Anne, Madawaska, New Brunswick, Canada", "CAN,NB,Madawaska,Ste Anne"],  // 5
    ["Ste Elizabeth, Comte de Joliette ,Quebec, Canada", "CAN,QC,Joliette,St Elisabeth"],
    ["Ste-Elisabeth, (Joliette), Québec, Canada", "CAN,QC,Joliette,St Elisabeth"],
    ["Ste-Élisabeth, (Joliette), Québec, Canada", "CAN,QC,Joliette,St Elisabeth"],  // 1
    ["Ste-Mélanie ; 2461050 ; Lanaudière ; Canada", "CAN,QC,Lanaudiere,St Melanie"],  // 1
    ["Ste Martine, Chateaugay, Quebec, Canada", "CAN,QC,Chateauguay,St Martine"],
    ["Ste-Martine, Chateauguay, Quebec, Canada", "CAN,QC,Chateauguay,St Martine"],
    ["Stepney Parish, Middlesex, , England", "ENG,MDL,Stepney Parish"],
    ["Stepney Parish, Somerset, Maryland, USA", "USA,MD,Somerset,Stepney Parish"],  // 3
    ["stepney parish, Somerset County, Maryland, USA", "USA,MD,Somerset,Stepney Parish"],  // 1
    ["Stepney, London, London, England, United Kingdom", "ENG,MDL,Stepney Parish"],
    ["Streefkerk, Liesveld, Zuid-Holland, Netherlands", "NLD,ZUI,Liesveld,Streefkerk"],
    ["Steefkerk, Liesveld, Zuid-Holland, 🇳🇱 Nederland ", "NLD,ZUI,Liesveld,Streefkerk"],  // 1
    ["Streefkerk, Zuid-Holland, Pays-Bas", "NLD,ZUI,Liesveld,Streefkerk"],
    ["Streefkerk", "NLD,ZUI,Liesveld,Streefkerk"],
    ["Stirlingshire, Scotland", "SCO,STI"],
    ["Stonington, New London County, Connecticut, USA", "USA,CT,New London,Stonington"],
    ["Stonington, Connecticut, USA", "USA,CT,New London,Stonington"],  // 2
    ["Strassburg,Lorraine,Bas Rhin,Alsace,France", "FRA,ALS,Strassburg"],
    ["Stratford Bow, Middlesex, England", "ENG,MDL,Stratford Bow"],
    ["Strijen, Nl", "NLD,ZUI,Strijen"],
    ["Strijen, Zuid-Holland, Netherlands", "NLD,ZUI,Strijen"],
    ["Strijen, Zuid-Holland, Pays-Bas", "NLD,ZUI,Strijen"],
    ["Strongs Prairie Twp, Adams, Wisconsin, USA", "USA,WI,Adams,Strongs Prairie Township"],
    ["Strongs Prairie, Adams, Wisconsin, USA", "USA,WI,Adams,Strongs Prairie"],
    ["Strongs Prairie, Friendship, Adams, Wisconsin, USA", "USA,WI,Adams,Friendship"], // 12
    ["Strongs Prairie, Strongs Prairie, Adams, Wisconsin, USA", "USA,WI,Adams,Strongs Prairie"], // 10
    ["Strånganäs  Västergård, Älmeboda, Kronoberg, Sverige", "SWE,KRO,Älmeboda,Västergård,Strånganäs"],
    ["Strånganäs Älmeboda, Kronoberg, Sverige", "SWE,KRO,Älmeboda,Strånganäs"],
    ["Strånganäs, Älmeboda, Kronoberg, Sverige", "SWE,KRO,Älmeboda,Strånganäs"],
    ["Sudbury, Middlesex, Massachusetts", "USA,MA,Middlesex,Sudbury"],  // 1
    ["Surry County, North Carolina", "USA,NC,Surry"], // 1
    ["Surry, North Carolina, USA", "USA,NC,Surry"],
    ["Surry County, North Carolina, USA", "USA,NC,Surry"],  // 1
    ["Sutton Cheney, Leicestershire, England", "ENG,LEI,Sutton Cheney"],
    ["Swansea, Bristol County, Massachusetts, United States of America", "USA,MA,Bristol,Swansea"],
    ["Swansea, Bristol, Massachusetts, USA", "USA,MA,Bristol,Swansea"],
    ["Swansea, Bristol, MA", "USA,MA,Bristol,Swansea"],  // 6
    ["Swansea, Bristol, Massachusetts", "USA,MA,Bristol,Swansea"],  // 1
    ["Swansea, Bristol County, Massachusetts", "USA,MA,Bristol,Swansea"], // 1
    ["Sweden", "SWE"],
    ["Symondsbury, Dorset, England", "ENG,DOR,Symondsbury"],
    ["Thames River Valley, Essex, England", "ENG,ESS,Thames River Valley"],
    ["The Forks, Hanover, Virginia, USA", "USA,VA,Hanover,The Forks"],  // 1
    ["Thornton, Leicestershire, England", "ENG,LEI,Thornton"],
    ["Thorpe Underwood, Kettering, Northamptonshire, England", "ENG,NOR,Kettering,Thorpe Underwood"],
    ["Thurlaston,Leicester,England", "ENG,LEI,Thurlaston"],  // 1
    ["Thief River Fal, Minnesota, USA", "USA,MN,Pennington,Thief River Falls"], // 1
    ["Thief River Falls, MN", "USA,MN,Pennington,Thief River Falls"], // 2
    ["Thief River Falls, Minnesota, USA", "USA,MN,Pennington,Thief River Falls"], // 3
    ["To, Oppland, Norway", "NOR,OPP,To"],
    ["Tomahawk, Wisconsin, USA", "USA,WI,Lincoln,Tomahawk"],  // 1
    ["Topeka, Kansas, USA", "USA,KS,Shawnee,Topeka"], // 1
    ["Topsham, Devon, England", "ENG,DEV,Topsham"],
    ["Toronto, 1654339, Ontario, Canada", "CAN,ON,Toronto"],  // 2
    ["Totnes, Devon, England", "ENG,DEV,Totnes"],
    ["Towner County, North Dakota, USA", "USA,ND,Towner"], // 1
    ["Townsend, Huron, Ohio, USA", "USA,OH,Huron,Townsend Township"],  // 1
    ["Tucker, Georgia, USA", "USA,GA,DeKalb,Tucker"], // 1
    ["Twin Valley, Norman, Minnesota, USA", "USA,MN,Norman,Twin Valley"], // 1
    ["Trivoli, Peoria Co, Illinois, USA", "USA,IL,Peoria,Trivoli"],  // 1
    ["Turkey Creek Township, Somerset County, Pennsylvania", "USA,PA,Somerset,Turkeyfoot Township"],
    ["Turkeyfoot Somerset, Pennsylvania, USA", "USA,PA,Somerset,Turkeyfoot Township"],
    ["Turkeyfoot Township, Somerset County, Pennsylvania, USA", "USA,PA,Somerset,Turkeyfoot Township"],
    ["Turkeyfoot, Somerset County, Pennsylvania, USA", "USA,PA,Somerset,Turkeyfoot Township"],
    ["Turkeyfoot, Somerset, Pennsylvania, United States", "USA,PA,Somerset,Turkeyfoot Township"],
    ["Turkey Creek Twp., Somerset, Pennsylvania, USA", "USA,PA,Somerset,Turkey Creek Township"],  // 1
    ["Turtle Lake, Cass, Minnesota, USA", "USA,MN,Cass,Turtle Lake"], // 1
    ["Upper, Canada", "CAN,ON"],  // 1
    ["Upper Turkeyfoot Township, Somerset, Pennsylvania, USA", "USA,PA,Somerset,Turkeyfoot"],
    ["Torquay, Devon, England", "ENG,DEV,Torquay"],
    ["Torr, Devon, England", "ENG,DEV,Torr"],
    ["Trimble Township, Athens, Ohio, USA", "USA,OH,Athens,Trimble Township"],
    ["Ullensaker, Akershus, Norway", "NOR,AKR,Ullensaker"],
    ["Ullensaker, Akershus, Norvège", "NOR,AKR,Ullensaker"],
    ["Union Creek Precinct, Madison, Nebraska", "USA,NE,Madison,Union Creek Precinct"], // 1
    ["Union, Brown, Ohio, USA", "USA,OH,Brown,Union"], // 1
    ["Union, Fulton, Indiana, USA", "USA,IN,Fulton,Union"], // 7
    ["Union, Rolette, North Dakota, USA", "USA,ND,Rolette,Union"], // 13
    ["Union, Union, Rolette, North Dakota, USA", "USA,ND,Rolette,Union,Union"], // 1
    ["Upper Marlborough, Prince George's, Maryland", "USA,MD,Prince George's,Upper Marlborough"],  // 1
    ["Upper Marlborough, Prince George's, Maryland, USA", "USA,MD,Prince George's,Upper Marlborough"], // 1
    ["United States", "USA"], // 1
    ["USA", "USA"],
    ["Ulster, Ireland", "NIR"],
    ["VA", "USA,VA"],
    ["VA, Virginia, USA", "USA,VA"],
    ["Valeria, Jasper County, Iowa, United States of America", "USA,IA,Jasper,Van Buren"],
    ["Valeria, Jasper, Iowa, USA", "USA,IA,Jasper,Valeria"], // 5
    ["Valeria, Jasper County, Iowa, USA", "USA,IA,Jasper,Valeria"],
    ["Van Buren, Aroostook , Maine, USA", "USA,ME,Aroostook,Van Buren"],
    ["Van Buren, Aroostook, Maine, USA", "USA,ME,Aroostook,Van Buren"],
    ["Van Buren, Aroostoook, Maine, USA", "USA,ME,Aroostook,Van Buren"],
    ["Van Buren, Aroostook, Maine, United States", "USA,ME,Aroostook,Van Buren"],
    ["Van Buren Plantation, Aroostook, Maine", "USA,ME,Aroostook,Van Buren,Van Buren Plantation"], // 1
    ["Van Buren, Maine, USA", "USA,ME,Aroostook,Van Buren"],
    ["Vaughan, York, Ontario, Canada", "CAN,ON,York,Vaughn"],  // 1
    ["Vermilion, Illinois, USA", "USA,IL,Vermilion"],  // 2
    ["Vermillion, LaSalle, Illinois, USA", "USA,IL,LaSalle,Vermillion"],
    ["Vermont", "USA,VT"],
    ["Vermont, Black Earth, Dane, Wisconsin, USA", "USA,WI,Dane,Black Earth,Vermont Township"], // 1
    ["Vieboda Södergård, Linneryd, Kronoberg, Sverige", "SWE,KRO,Linneryd,Vieboda Södergård"],
    ["Vienna , VA.", "USA,VA,Fairfax,Vienna"], // 1
    ["Vienna, VA", "USA,VA,Fairfax,Vienna"], // 2
    ["Vienna, Virginia, USA", "USA,VA,Fairfax,Vienna"], // 1
    ["Viking, Bemidji, Clearbrook, Deer River, Thief River Falls, Vernon, Lakehead Pipeline", "USA,MN,Itasca,Deer River"], // 1
    ["Virginia, United States of America", "USA,VA"],
    ["Virginia, United States", "USA,VA"],
    ["Virginia, Virginia, USA", "USA,VA"],
    ["Virginia", "USA,VA"],
    ["Virginia;Kentucky", "USA,VA,Washington,1833,USA,KY,Floyd,1848"], // 1 Christian B Goble's 2 Revolutionary War pension applications
    ["Virginia British Colony, Virginia, USA", "USA,VA"],
    ["Virginia, USA", "USA,VA"],
    ["Voluntown, New London County, Connecticut, United States of America", "USA,CT,New London,Voluntown"],
    ["Västra Skyberg, Värmland, Sverige", "SWE,VAR,Västra Skyberg"],
    ["Wachtebrke, Oost-Vlaanderen, Belgique", "BEL,EFL,Wachtebrke"],
    ["Wadena Waden, Minnesota", "USA,MN,Wadena,Wadena"],
    ["Wadena, Minnesota, USA", "USA,MN,Wadena"],
    ["Wadena, Minnesota, United States", "USA,MN,Wadena"],
    ["Wadena, Minnesota", "USA,MN,Wadena"],
    ["Wadena, Minn.", "USA,MN,Wadena"], // 1
    ["Wadena, Wadena, Minnesota, USA", "USA,MN,Wadena,Wadena"], // 1
    ["Walker, Cass Co., MN, Minnesota, USA", "USA,MN,Cass,Walker"],  // 1
    ["Walker, Northumberland, England", "ENG,NBL,Walker"],
    ["Wapello County, Iowa, USA", "USA,IA,Wapello"],  // 1
    ["Wapello,Iowa, USA", "USA,IA,Wapello"],  // 1
    ["Ward, Hocking, Ohio, USA", "USA,OH,Hocking,Ward"], // 3
    ["Warrentown, Fauquier, VA, Virginia, USA", "USA,VA,Fauquier,Warrentown"],
    ["Warsaw, Kosciusko, Indiana, USA", "USA,IN,Kosciusko,Warsaw"],  // 1
    ["Wartenburg, Erding, Bayern, Allemagne", "DEU,BY,Erding,Wartenburg"],  // 1
    ["Washington, Pennsylvania, USA", "USA,PA,Washington"],
    ["Washington County, Iowa, USA", "USA,IA,Washington"],
    ["Washington County, Virginia, USA", "USA,VA,Washington"],
    ["Washington Co., Virginia, USA", "USA,VA,Washington"],  // 2
    ["Washington, Rappahannock, Virginia, USA", "USA,VA,Rappahannock,Washington"],
    ["Washington, Virginia, United States", "USA,VA,Rappahannock,Washington"],
    ["Washington, Iowa, USA", "USA,IA,Washington"],
    ["Washington, Virginia, USA", "USA,VA,Washington"],
    ["Washington, Jasper, Iowa, USA", "USA,IA,Jasper,Washington"], // 2
    ["Washington, Keokuk, Iowa, USA", "USA,IA,Keokuk,Washington"], // 16
    ["Washington, Keokuk, Iowa", "USA,IA,Keokuk,Washington"], // 1
    ["Washington, San Pierre, Starke, Indiana, USA", "USA,IN,Starke,San Pierre,Washington"], // 4
    ["Washoe, Nevada", "USA,NV,Washoe"],  // 1
    ["Waukegan, Illinois, USA", "USA,IL,Lake,Waukegan"], // 2
    ["Wellsburgh, Clinton, New York, USA", "USA,NY,Clinton,Wellsburgh"], // 1
    ["West Chester, Chester, Pennsylvania", "USA,PA,Chester,West Chester"],
    ["West Palm Beach, Palm Beach, Florida, USA", "USA,FL,Palm Beach,West Palm Beach"],  // 1
    ["West Virginia, USA", "USA,WV"],  // 1
    ["Westerly, Washington, Rhode Island, USA", "USA,RI,Washington,Westerly"],
    ["Westerly, Washington, Rhode Island", "USA,RI,Washington,Westerly"],  // 1
    ["Westhorpe, Suffolk, England", "ENG,SFK,Westhorpe"],
    ["Westland, West Coast, Nouvelle-Zélande", "NZL,WL"],  // 1
    ["Westmaas, Beijerland, Zuid-Holland, Netherlands", "NLD,ZUI,Westmaas,Beijerland"],
    ["Westmaas, Binnenmaas Municipality, Zuid-Holland, Netherlands", "NLD,ZUI,Westmass,Binnenmaas"],
    ["Westmaas, Cromstrijen, Zuid-Holland, Netherlands", "NLD,ZUI,Westmaas,Cromstrijen"],
    ["Westmaas, South Holland, Netherlands", "NLD,ZUI,Westmaas"],
    ["Westmaas, Zuid-Holland, Pays-Bas", "NLD,ZUI,Westmaas"],
    ["Westmaas, South Holland, Zuid-Holland, Pays-Bas", "NLD,ZUI,Westmaas"],
    ["Westmaas", "NLD,ZUI,Westmaas"],
    ["Weymouth, Norfolk, Massachusetts, United States", "USA,MA,Norfolk,Weymouth"],  // 1
    ["greup, Westmaas, Cromstrijen, Zuid-Holland, Netherlands", "NLD,ZUI,Westmaas"],
    ["Weymouth, Dorset, England", "ENG,DOR,Weymouth"],
    ["What Cheer, Keokuk, Iowa, USA", "USA,IA,Keokuk,What Cheer"],
    ["What Cheer, Iowa", "USA,IA,Keokuk,What Cheer"],
    ["What Cheer, Keokuk County, Iowa, United States of America", "USA,IA,Keokuk,What Cheer"],
    ["What Chier, Iowa", "USA,IA,Keokuk,What Cheer"],
    ["While Carth, Becker, Minnesota", "USA,MN,Becker,White Earth"], // 1
    ["White Creek, Washington County, NY", "USA,NY,Washington,White Creek"], // 1
    ["White Earth Indian Reservation, Becker, Minnesota, USA", "USA,MN,Becker,White Earth Indian Reservation"], // 13
    ["White Earth, MN", "USA,MN,Becker,White Earth"], // 1
    ["White Earth, Minnesota, USA", "USA,MN,Becker,White Earth"], // 1
    ["White Earth", "USA,MN,Becker,White Earth"],  // 1
    ["White Earth, Becker County, Minnesota, United States of America", "USA,MN,Becker,White Earth"],
    ["White Earth, Becker, Minnesota, USA", "USA,MN,Becker,White Earth"],
    ["Whitehall, Northampton, Pennsylvania, USA", "USA,PA,Northampton,Whitehall"], // 1
    ["Whitley County, Indiana, United States of America", "USA,IN,Whitley"],  // 1
    ["Wieboda Södergård, Kronobergs län, Sverige", "SWE,KRO,Wieboda Södergård"],
    ["Willsborough, Clinton, New York, United States", "USA,NY,Clinton,Wellsburg"], // 1
    ["Wilmington, New Castle, Delaware", "USA,DE,New Castle,Wilmington"],
    ["Wilmington, New Castle, Delaware, USA", "USA,DE,New Castle,Wilmington"],  // 1
    ["Wilmington, Clinton, Ohio, USA", "USA,OH,Clinton,Wilmington"], // 1
    ["Winchester, Frederick, Maryland, USA", "USA,MD,Frederick,Winchester"],
    ["Windsor, Vermont, USA", "USA,VT,Windsor"], // 1
    ["Wisconsin, USA", "USA,WI"],
    ["Wisconsin", "USA,WI"],
    ["Wixhausen, Darmstadt, Starkenburg, Hessen, Germany", "DEU,HE,Starkenberg,Darmstadt,Wixhausen"],
    ["Wixhausen, Darmstadt, Hesse, Germany", "DEU,HE,Starkenberg,Darmstadt,Wixhausen"],  // 1
    ["Wolsingham, Durham, England", "ENG,DUR,Wolsingham"],  // 1
    ["Woodbridge Twp., Middlesex, New Jersey, USA", "USA,NJ,Middlesex,Woodbridge Township"],  // 1
    ["Woodsboro, Frederick, Maryland, USA", "USA,MD,Frederick,Woodsboro"],
    ["Worth, Hancock, Indiana, USA", "USA,IN,Hancock,Worth"], // 10
    ["Wright County, Minnesota, USA", "USA,MN,Wright"],
    ["Wright, Minnesota, USA", "USA,MN,Wright"],
    ["Wymore, Gage County, Nebraska, United States of America", "USA,NE,Gage,Wymore"],  // 1
    ["Yarmouth, Barnstable County, Massachusetts, United States of America", "USA,MA,Barnstable,Yarmouth"],
    ["Yarmouth, Barnstable County, Massachusetts, USA", "USA,MA,Barnstable,Yarmouth"],
    ["Yarmouth, Barnstable, Massachusetts, USA", "USA,MA,Barnstable,Yarmouth"],
    ["Yarmouth, Barnstable, MA, USA", "USA,MA,Barnstable,Yarmouth"],  // 1
    ["Yarmouth, Plymouth County, MA", "USA,MA,Barnstable,Yarmouth"], // 1
    ["Yarmouth", "USA,MA,Barnstable,Yarmouth"], // 2
    ["York, 1654479, Quebec, Canada", "CAN,ON,York"],  // 4 York, Upper Canada was in Toronto old city
    ["York, Quebec, Canada", "CAN,ON,York"],  // 1
    ["York Township, Athens, Ohio, USA", "USA,OH,Athens,York Township"],
    ["York, Athens, Ohio, USA", "USA,OH,Athens,York Township"],
    ["York County, 1654323, Ontario, Canada", "CAN,ON,York"],
    ["Yorkhampton, York, Virginia, USA", "USA,VA,York,Yorkhampton"],  // 3
    ["Yuma, Arizona, USA", "USA,AZ,Yuma"], // 1
    ["Zweibrucken, Rhineland-Palatinate, Allemagne", "DEU,RP,Zweibrucken"],
    ["Zuid-Holland, Pays-Bas", "NLD,ZUI"],
    ["defaulted, New York, USA", "USA,NY"],
    ["melrose, Kirkcudbrightshire, Scotland", "SCO,KKD,Melrose"],
    ["nørre Fønhus 56/2, Hølera, Sør-Aurdal, Oppland, Norvège", "NOR,OPP,Sør-Aurdal,Hølera,Nørre Fønhus 56/2"],
    ["presumed, Devon, England", "ENG,DEV"],
    ["presumed, Durham, England", "ENG,DUR"],
    ["presumed, Edinburgh, Midlothian, Scotland", "SCO,MLN,Edinburgh"],
    ["presumed, Linlithgowshire, Scotland", "SCO,WLN"],
    ["presumed, New York, USA", "USA,NY"],
    ["presumed, North Dakota, USA", "USA,ND"],  // 1
    ["presumed, Northumberland, England", "ENG,NBL"],
    ["presumed, Pennsylvania, USA", "USA,PA"],
    ["presumed, Renfrewshire, Scotland", "SCO,RFW"],
    ["presumed, Virginia, USA", "USA,VA"],
    ["presumed, Yorkshire, ENgland", "ENG,YKS"],
    ["presumed, Zuid-Holland, Netherlands", "NLD,ZUI"],
    ["presumed, Zuid-Holland, Pays-Bas", "NLD,ZUI"],
    ["presumed, Connecticut, USA",""],  // 1
    ["presumed, Cornwall, England", "ENG,COR"],  // 2
    ["presumed, Leicestershire, England", "ENG,LEI"],  // 5
    ["presumed, Mevagissey, Cornwall, England", "ENG,LEI,Mevagissey"],  // 2
    ["presumed, Middlesex, England", "ENG,MDL"],  // 1
    ["presumed, New Your, USA", "USA,NY"],  // 1
    ["presumed, Virginuia, USA", "USA,VA"],  // 1
    ["presumed, Westminster,London, England", "ENG,LND,Westminster"],  // 1
    ["colony of Pennsylvania, British, Pennsylvania, USA", "USA,PA"],
    ["stepney parish, Wicomico County, Maryland, USA", "USA,MD,Wicomico,Stepney Parish"],
    ["  Älmeboda, Kronoberg, Sverige", "SWE,KRO,Älmeboda"],  // 1
    [" Älmeboda, Kronoberg, Sverige", "SWE,KRO,Älmeboda"],  // 1
    ["Älmeboda Fg, Kronoberg, Suède", "SWE,KRO,Älmeboda Fg"],  // 1
    ["Älmeboda fg, Lekramåla, Kronoberg, Suède", "SWE,KRO,Älmeboda Fg"],
    ["Älmeboda, Kronoberg, Sweden", "SWE,KRO,Älmeboda"],
    ["Åsli farm, Sør-Aurdal, Oppland, Norvège", "NOR,OPP,Sør-Aurdal,Åsli farm"],
    ["Åsnes Østre, Åsnes, Hedmark, Norvège", "NOR,HED,Åsnes,Åsnes Østre"],
    ["Åsnes kirke, Hof prestegjeld, Hedmark, Norvège", "NOR,HED,Åsnes kirke"],  // 1
])
