/**
 * GedcomPlaces maps arbitrary GEDCOM 'PLAC' record text to the GeoLocationsDB
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
export const GedcomPlaces = new Map([
    ["", ""],
    ["?", ""],
    ["  Brethren, Manistee, Michigan, USA", "USA,MI,Manistee,Brethen"],
    [" Floyd, Kentucky, USA", "USA,KY,Floyd"],  // 1
    [" Beacon, Mahaska, Iowa, USA", "USA,IA,Mahaska,Beacon"], // 1
    [" Somerset, Pennsylvania, USA", "USA,PA,Somerset"], // 1
    [" Wayne Co, Virginia, USA", "USA,VA,Wayne Co"], // 1
    [", Jefferson, Iowa, USA", "USA,IA,Jefferson,"], // 1
    [", Minneapolis, Hennepin, Minnesota, USA", "USA,MN,Hennepin,Minneapolis,"], // 14
    [", Thurston, Washington, USA", "USA,WA,Thurston,"], // 1
    [", , , Germany", "GER"],
    [", , , Ireland", "IRE"],
    [", , Ontario, Canada", "CAN,ON"],
    [", Devon, , England", "ENG,DEV"],
    [", Floyd, Kentucky, USA", "USA,KY,Floyd"],
    [" St Thomas the Apostle, Stanhope, Durham, England", "ENG,DUR,Stanhope,St Thomas the Apostle"],  // 1
    [", Washington, Virginia, USA", "USA,VA,Washington"],
    ["'s-Gravendeel, South Holland, Netherlands", "NLD,ZUI,'s-Gravendeel"],
    ["'s-Gravendeel,Zuid Holland,Nederland", "NLD,ZUI,'s-Gravendeel"],
    ["131 Northampton Rd, Leicester, Leicestershire, England", "ENG,LEI,Leicester,131 Northampton Rd"], // 1
    ["1815 Forty-Sixth Avenue N., Minneapolis, Hennepin, MN, USA", "USA,MN,Hennepin,Minneapolis,1815 Forty Sixth Avenue N "], // 1
    ["3839 Lyndale Avenue N., Minneapolis, Hennepin, MN, USA", "USA,MN,Hennepin,Minneapolis,3839 Lyndale Avenue N "], // 1
    ["4 Newton Street, Kingston upon Hull, Yorkshire, England", "ENG,YKS,Kingston upon Hull,4 Newton Street"], // 1
    ["4:05 p.m., Sacramento, Sacramento County, California, USA", "USA,CA,Sacramento,Sacramento"], // 1
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
    ["Age -- Grafton, Rensselaer County, NY", "NY,Rensselaer County,Grafton"], // 1
    ["Adams Township, Cass County, Indiana", "USA,IN,Cass,Adams,Adams Township"],  // 1
    ["Adams, Cass, Indiana, USA", "USA,IN,Cass,Adams"],  // 2
    ["Albany, Clinton County, Kentucky, USA", "USA,KY,Clinton,Albany"], // 1
    ["Albert Lea, Minnesota, USA", "USA,MN,FreebornAlbert Lea"], // 1
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
    ["Atlanta, GA", "GA,Fulton,Atlanta"], // 2
    ["Atlanta, Georgia, USA", "USA,GA,FultonAtlanta"], // 1
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
    ["Beaverton, Oregon, USA", "USA,OR,WashingtonBeaverton"], // 1
    ["Becker County, Minnesota, United States of America", "USA,MN,Becker"],
    ["Becker, Minnesota, USA", "USA,MN,Becker"],
    ["Bedford, Pennsylvania", "USA,PA,Bedford"],  // 1
    ["Bedford, Tennessee", "USA,TN,Bedford"],  // 1
    ["Beltrami, Minnesota, USA", "USA,MN,Beltrami"],
    ["Beltrami County, Minnesota, United States of America", "USA,MN,Beltrami"],  // 1
    ["Bemidji, Beltrami County, Minnesota, United States of America", "USA,MN,Beltrami,Bemidji"],  // 4
    ["Bemidji, Beltrami, Minnesota, USA", "USA,MN,Beltrami,Bemidji"],  // 5
    ["Bemidji, Minnesota, USA", "USA,MN,Beltrami,Bemidji"],  // 2
    ["Bethlehem, Cass, Indiana, USA", "USA,IN,Clark,Bethlehem Township"],  // 10
    ["Bethlehem, Cass, Indiana, United States", "USA,IN,Clark,Bethlehem Township"],  // 1
    ["Bethlehem Township, Cass County, Indiana", "USA,IN,Clark,Bethlehem Township"],
    ["Bethelem, Cass County, Indiana, USA", "USA,IN,Clark,Bethlehem Township"],  // 1
    ["Berthier, (Sainte-Geneviève), (Berthier), Québec, Canada", "CAN,QC,Berthier,Sainte-Geneviève"],
    ["Berwick, York, ME, Maine, USA", "USA,ME,York,Berwick"],  // 1
    ["Bjørnebyqvern, Åsnes, Hedmark, Norvège", "NOR,HED,Åsnes,Bjørnebyqvern"],
    ["Blackclough, Stanhope, Durham, England", "ENG,DUR,Stanhope,Blackclough"],
    ["Blair, Blair, Pennsylvania, United States", "USA,PA,Blair"],
    ["Bland, Bland, Virginia, USA", "USA,VA,Bland,Bland"],
    ["Blandford, Blandford, Hampden, Massachusetts, USA", "USA,MA,Hampden,Blandford,Blandford"],  // 8
    ["Bloomfield, Nebraska", "USA,NE,Knox,Bloomfield"],
    ["Blount Township, Vermilion County, Illinois, USA", "USA,IL,Vermilion,Blount Township"],
    ["Boston, Massachusetts, USA", "USA,MA,Suffolk,Boston"],  // 1
    ["Botamåla, Älmeboda, Kronoberg, Sverige", "SWE,KRO,Älmeboda,Botamåla"],
    ["Botetourt, Virginia, United States", "USA,VA,Botetourt"],
    ["Bourbon, Marshall, Indiana, USA", "USA,IN,Marshall,Bourbon"],
    ["Brethren, Manistee, Michigan, USA", "USA,MI,Manistee,Brethern"],  // 1
    ["Bristol, Bristol, RI, USA", "USA,RI,Bristol,Bristol"],
    ["Bristol, Bristol, Rhode Island, USA", "USA,RI,Bristol,Bristol"],
    ["Bristol, Rhode Island, USA", "USA,RI,Bristol"],
    ["Bristol, Somerset, England", "ENG,SOM,Bristol"],
    ["Bristol County, Rhode Island, USA", "USA,RI,Bristol"],  // 1
    ["Brixham, Devon, England", "ENG,DEV,Brixham"],
    ["Brixham, Devon,  England", "ENG,DEV,Brixham"],
    ["Brixham, Devon, England, United Kingdom", "ENG,DEV,Brixham"],
    ["Brixham, Devonshire, England", "ENG,DEV,Brixham"],
    ["Brixham,Devon,England", "ENG,DEV,Brixham"],
    ["Brixham ,Devon, England", "ENG,DEV,Brixham"],
    ["Brixham Devon, England", "ENG,DEV,Brixham"],
    ["Broadwood, Stanhope, Durham, England", "ENG,DUR,Stanhope,Broadwood"],
    ["Brookville, Montgomery County, Ohio, United States of America", "USA,OH,Montgomery,Brookville"],
    ["Buckingham, Buckingham, Virginia, USA", "USA,VA,Buckingham,Buckingham"],
    ["Buckingham, Virginia, United States", "USA,VA,Buckingham"],  // 1
    ["Buckinghamshire, England", "ENG,BKM"],
    ["Buckinghamshire, England ", "ENG,BKM"],
    ["Burke County, North Carolina, USA", "USA,NC,Burke"],
    ["Burton Upon Trent, Staffordshire, England", "ENG,STS,Burton Upon Trent"],  // 1
    ["Cabell County, West Virginia, United States of America", "USA,WV,Cabell"],
    ["Cabell, Virginia, United States", "USA,WV,Cabell"],
    ["Cacouna, Riviere-du-Loup, Québec, Canada", "CAN,QC,Bas-Saint-Laurent,Riviere-du-Loup,Cacouna"],  // 1
    ["Cadeby, Leicestershire, England", "ENG,LEI,Cadeby"],  // 1
    ["Cadiz Twp, Jefferson/Harrison Cty, Ohio, USA", "USA,OH,Harrison,Cadiz Township"],
    ["Cadiz, Harrison, Ohio, USA", "USA,OH,Harrison,Cadiz"],  // 1
    ["Callaway, Franklin, Virginia, USA", "USA,VA,Franklin,Callaway"],
    ["Calvert Cliffs, Calvert, Maryland, USA", "USA,MD,Calvert,Calvert Cliffs"],
    ["Cambridge, Cambridgeshire, England", "ENG,CAM,Cambridge"],
    ["Cambusnethan, Lanark", "SCO,LKS,Cambusnethan"],
    ["Cambusnethan, Lanarkshire, Scotland", "SCO,LKS,Cambusnethan"],
    ["Cambusnethan,Lanark,Scotland", "SCO,LKS,Cambusnethan"],
    ["Canada", "CAN"],
    ["Carrickmacross, Monaghan, Ireland", "IRL,MOG,Carrickmacross"],
    ["Carroll, Indiana", "USA,IN,Carroll"],
    ["Carrol County, Indiana, USA", "USA,IN,Carroll"],
    ["Carroll County, Indiana", "USA,IN,Carroll"],
    ["Carroll County, Maryland, United States of America", "USA,MD,Carroll"],
    ["Carson City, Nevada, USA", "USA,NV,Ormsby,Carson City"],  // 1
    ["Carson City, Nevada", "USA,NV,Ormsby,Carson City"],  // 1
    ["Cartwright, Ontario, Canada", "CAN,ON,Cartwright"],
    ["Cass County, Indiana, United States of America", "USA,IN,Cass"],
    ["Cass, Indiana, USA", "USA,IN,Cass"],
    ["Cass Township, White County, Indiana, USA", "USA,IN,White,Cass Township"],
    ["Cass, Minnesota, USA", "USA,MN,Cass"],
    ["Cass Cty, Indiana, USA", "USA,IN,Cass"],
    ["Castor, Northamptonshire, England", "ENG,NOR,Castor"],  // 1
    ["Cavan, Peterborough County, Ontario, Canada", "CAN,ON,Peterborough,Cavan"],
    ["Cavan, Peterborough, Ontario, Canada", "CAN,ON,Peterborough,Cavan"],
    ["Cayuga, New York, USA", "USA,NY,Cayuga"],
    ["Cayuga County, New York, United States of America", "USA,NY,Cayuga"],
    ["Charles County, Maryland, USA", "USA,MD,Charles"],
    ["Charlois, Rotterdam, Zuid-Holland, Netherlands", "NLD,ZUI,Rotterdam,Charlois"],
    ["Châteauguay, Quebec, Canada", "CAN,QC,Châteauguay"],
    ["Chealiston, Devon, England", "ENG,DEV,Chealiston"],
    ["Cheshire, Cheshire, England", "ENG,CHS,Cheshire"],
    ["Chester County, Pennsylvania, USA", "USA,PA,Chester"],
    ["Chester County, Pennsylvania, United States of America", "USA,PA,Chester"],
    ["Chester, Pennsylvania, USA", "USA,PA,Chester"],
    ["Chesterfield, Chesterfield, Virginia, USA", "USA,VA,Chesterfield"],
    ["Chesterfield, Virginia, USA", "USA,VA,Chesterfield"],
    ["Chesterfield County, Virginia, USA", "USA,VA,Chesterfield"],
    ["Chesterfield, Chesterfield, Virginia, United States", "USA,VA,Chesterfield,Chesterfield"],
    ["Chesterfield, Henrico, Virginia, USA", "USA,VA,Chesterfield,Chesterfield"],
    ["Christiana, Norway", "NOR,Oslo"],  // 1   former name of Oslo
    ["Churston Ferrers, Devon, England", "ENG,DEV,Churston Ferrers"],
    ["Churston Ferrers, Devonshire, England", "ENG,DEV,Churston Ferrers"],  // 1
    ["Churubusco, Clinton, New York, USA", "USA,NY,Clinton,Churubusco"],
    ["Churubusco, Clinton, New York, United States", "USA,NY,Clinton,Churubusco"],
    ["Cillaarshoek (Strijen), Zuid-Holland, Pays-Bas", "NLD,ZUI,Cillaarshoek"],
    ["Cillaarshoek, Nederland", "NLD,ZUI,Cillaarshoek"],
    ["Cillaarshoek, Strijen, Zuid-Holland, Netherlands", "NLD,ZUI,Cillaarshoek"],
    ["Cillaarshoek, Zuid-Holland, Pays-Bas", "NLD,ZUI,Cillaarshoek"],
    ["Cillaarshoek", "NLD,ZUI,Cillaarshoek"],
    ["Clark, Ohio, USA", "USA,OH,Clark"],  // 1
    ["Cleveland, Illinois", "USA,IL,Henry,Cleveland"],
    ["Clinton, Clinton, New York, USA", "USA,NY,Clinton,Clinton"],
    ["Clinton, Clinton, New York, United States", "USA,NY,Clinton,Clinton"],
    ["Clinton, Clinton, New York", "USA,NY,Clinton,Clinton"],
    ["Clotts Farm, Stanton under Bardon, Leicestershire, England", "ENG,LEI,Stanton under Bardon,Clotts Farm"],
    ["Coal Valley, Rock Island, Illinois, USA", "USA,IL,Rock Island,Coal Valley"],
    ["Coffey, Kansas, USA", "USA,KS,Coffey"],
    ["Colfax, Jasper County (US/IA)", "USA,IA,Jasper,Colfax"],
    ["Colfax, Jasper County, Iowa, USA", "USA,IA,Jasper,Colfax"],
    ["Colfax, Jasper County, Iowa, United States of America", "USA,IA,Jasper,Colfax"],
    ["Colfax, Jasper, Iowa, USA", "USA,IA,Jasper,Colfax"],
    ["Co. Cavan, Ireland", "IRL,CAV"],
    ["Comber, Down County, Ulster, Ireland", "NIR,DOW,Comber"],
    ["Comber, County Down, Ulster, Ireland", "NIR,DOW,Comber"],
    ["Comber, County Down, Ulster,Ireland", "NIR,DOW,Comber"],
    ["Comber, Down, Ulster, Ireland", "NIR,DOW,Comber"],
    ["Comer, McLean County, Kentucky, United States of America", "USA,KY,McLean,Comer"],
    ["Connecticut", "USA,CT"],  // 2
    ["Connecticut, USA", "USA,CT"],
    ["Coon Rapids, Anoka, Minnesota, USA", "USA,MN,Anoka,Coon Rapids"],
    ["Cork, Cork, Ireland", "IRL,COR,Cork"],
    ["Cork, Ireland", "IRL,COR"],
    ["Cornwall, England", "ENG,COR"],
    ["Coshocton, Coshocton, Ohio, United States", "USA,OH,Coshocton,Coshocton"],
    ["County Down, Ulster, Ireland", "NIR,DOW"],
    ["County Durham, England", "ENG,DUR"],
    ["Coventry, Warwickshire, England", "ENG,WAR,Coventry"],
    ["Crawford, Ohio, USA", "USA,OH,Crawford"],
    ["Crawford, Washignton County,Iowa, USA", "USA,IA,Washington,Crawfordsville"],
    ["Crawfordsville,Washington County, Iowa, USA", "USA,IA,Washington,Crawfordsville"],
    ["Culpeper County, Virginia, USA", "USA,VA,Culpeper"],
    ["Daniels Creek, Floyd, Kentucky, USA", "USA,KY,Floyd,Daniels Creek"],
    ["Daniels Creek, Johnson, Kentucky, USA,", "USA,KY,Johnson,Daniels Creek"],
    ["Daniels Creek, Johnson, Kentucky, USA", "USA,KY,Johnson,Daniels Creek"],
    ["Danville, Vermilion, Illinois, United States", "USA,IL,Vermilion,Danville"],
    ["Darke County, Ohio, United States", "USA,OH,Darke"],
    ["Dartmouth, Devon, England", "ENG,DEV,Dartmouth"],
    ["Deer River, Itasca, Minnesota, USA", "USA,MN,Itasca,Deer River"],
    ["Deer River, Minnesota, USA", "USA,MN,Itasca,Deer River"],
    ["Delft, Zuid-Holland, Pays-Bas", "NLD,ZUI,Delft"],  // 1
    ["Des Moines, Iowa, USA", "USA,IA,Polk,Des Moines"],  // 1
    ["Devils Lake, North Dakota", "USA,ND,Ramsey,Devils Lake"],
    ["Devils Lake, Ramsey Co, North Dakota, USA", "USA,ND,Ramsey,Devils Lake"],
    ["Devils Lake, Ramsey, North Dakota, USA", "USA,ND,Ramsey,Devils Lake"],
    ["Devon, England", "ENG,DEV"],
    ["Dingle, Kerry, , Ireland", "IRL,KER,Dingle"],
    ["Dongen, Dongen, Noord-Brabant, Netherlands", "NLD,NBR,Dongen,Dongen"],
    ["Donegal, Donegal, Ulster, Ireland", "IRL,DON,Donegal"],
    ["Douglas, Nevada, USA", "USA,NV,DO\ouglas"],  // 1
    ["Donnahlong, Down, Ulster, Ireland", "NIR,DOW,Donnahlong"],
    ["Donisthorpe, Derbyshire, England", "ENG,DBY"],
    ["Dunfermline, Fife, Scotland", "SCO,FIF,Dunfermline"],
    ["Dunmanway, Cork, Ireland", "IRL,COR,Dunmanway"],
    ["Durham, Marion County, Iowa, United States of America", "USA,IA,Marion,Durham"],
    ["Durham, Ontario, Canada", "CAN,ON,Grey,Durham"],
    ["Durham County, England", "ENG,DUR"],
    ["Earl Shilton, Leicestershire, England", "ENG,LEI,Earl Shilton"],
    ["Earsdon,Tynemouth, Northumberland, England", "ENG,NBL,Tynemouth,Earsdon"],
    ["Easington, Yorkshire, England, United Kingdom", "ENG,ERY,Easington"],  // 1
    ["Easington Parish, Yorkshire, England", "ENG,ERY,Easington"],
    ["Easington, Yorkshire, England", "ENG,ERY,Easington"],
    ["Easington, Yorkshire, England,", "ENG,ERY,Easington"],
    ["Eastcott, North, Hamptonshire, England", "ENG,NOR,Eastcott"],
    ["East Point, Floyd, Kentucky, USA", "USA,KY,Floyd,East Point"],
    ["Eau Claire, Wisconsin, USA", "USA,WI,Eau Claire"],  // 3
    ["Ekoupag Meductic, Saint John River, New Brunswick, Canada", "CAN,NB,Acadia,Saint John River,Meductic"],
    ["England", "ENG"],
    ["Eugene, Lane, Oregon, USA", "USA,OR,Lane,Eugene"],
    ["Evangelisch, Kriegsfeld, Pfalz, Bavaria", "DEU,BY,Pfalz,Kriegsfeld,Evangelisch"],  // 1
    ["Evangelisch, Sprendlingen, Starkenburg, Bernkastel-Wittlich, Rhineland-Palatinate, Germany", "DEU,RP,Bernkastel-Wittlich,Starkenburg,Evangelisch"],  // 1
    ["Exeter, Devon, England", "ENG,DEV,Exeter"],
    ["Fauquier County, Virginia, USA", "USA,VA,Fauquier"],
    ["Fauquier, Virginia, USA", "USA,VA,Fauquier"],
    ["Fauquier, Virginia", "USA,VA,Farquier"],  // 1
    ["Floyd County, Kentucky, USA", "USA,KY,Floyd"],
    ["Floyd County, Virginia, United States of America", "USA,VA,Floyd"],
    ["Floyd, Kentucky, USA", "USA,KY,Floyd"],
    ["Floyd, Kentucky, United States", "USA,KY,Floyd"],
    ["Floyd, Kentucky", "USA,KY,Floyd"],
    ["Floyd", "USA,KY,Floyd"],
    ["Forks, Hanover, Virginia, USA", "USA,VA,Hanover,Forks"],
    ["Forks, New Kent, Virginia, USA", "USA,VA,New Kent,Forks"],
    ["Foster, Providence, Rhode Island, USA", "USA,RI,Providence,Foster"],
    ["Franklin County, Indiana, USA", "USA,IN,Franklin"],  // 1
    ["Franklin Cty, Virginia, USA", "USA,VA,Accomack,Franklin City"],  // 1
    ["Frederick, MD", "USA,MD,Frederick"],  // 1
    ["Frederick, Maryland, USA", "USA,MD,Frederick"],  // 1
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
    ["Fulton County, Indiana, USA", "USA,IN,Fulton"],
    ["Fulton, Indiana, USA", "USA,IN,Fulton"],
    ["Fulton Co, Indiana, USA", "USA,IN,Fulton"],  // 1
    ["Futham, Somerset, England", "ENG,SOM,Futham"],
    ["Gameren, Gelderland, Pays-Bas", "NLD,GEL,Gameren"],
    ["Gateshead, Durham,England", "ENG,DUR,Gateshead"],
    ["Genesee, New York, USA", "USA,NY,Genesee"],  // 1
    ["Germany", "GER"],
    ["Germany, Allemagne", "GER"],
    ["Germany, Baden-Wuerttemberg, Germany", "DEU,BW"],
    ["Glasgow, Lanarkshire, Scotland", "SCO,LKS,Glasgow"],
    ["Gloucester, Essex, Massachusetts, United States", "USA,MA,Essex,Gloucester"],
    ["Goochland, Goochland, Virginia, USA", "USA,VA,Goochland,Goochland"],
    ["Goudswaard, Korendijk, Zuid-Holland, Netherlands", "NLD,ZUI,Korendijk,Goudswaard"],
    ["Grand Isle, Aroostook, Maine, USA", "USA,ME,Aroostook,Grand Isla"],
    ["Grand Rapids, Itasca County, Minnesota, United States of America", "USA,MN,Itasca,Grand Rapids"],
    ["Grand Rapids, Itasca, Minnesota USA", "USA,MN,Itasca,Grand Rapids"],
    ["Grand Rapids, Itasca, Minnesota, USA", "USA,MN,Itasca,Grand Rapids"],
    ["Grand Rapids, Minnesota", "USA,MN,Itasca,Grand Rapids"],
    ["Grand Rapids, Itasca, MN, USA", "USA,MN,Itasca,Grand Rapids"],
    ["Greene, Pennsylvania, USA", "USA,PA,Greene"],
    ["Gray Eagle, Todd Co., MN, Minnesota, USA", "USA,MN,Todd,Gray Eagle"],
    ["Green, Pennsylvania, USA", "USA,PA,Greene"],
    ["Greene, Greene, Pennsylvania, USA", "USA,PA,Greene"],
    ["Greene, Tennessee, United States", "USA,TN,Greene"],  // 1
    ["Grönadal Södergård, Älmeboda, Kronoberg, Sverige", "SWE,KRO,Älmeboda,Grönadal Södergård"],
    ["Halifax, Virginia, USA", "USA,VA,Halifax"],
    ["Halifax, Halifax, Virginia, United States", "USA,VA,Halifax"],
    ["Halifax, Virginia", "USA,VA,Halifax"],  // 1
    ["Halls End, Warwickshire, England", "ENG,WAR,Halls End"],
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
    ["Harrison Co, Ohio", "USA,OH,Karrison"],  // 1
    ["Hedalen, Sor Aurdal, Oppland, Norway", "NOR,OPP,Sør-Aurdal,Hedalen"],
    ["Hedalen kirke, Sør-Aurdal, Oppland, Norvège", "NOR,OPP,Sør-Aurdal,Hedalen,Hedalen kirke"],  // 1
    ["Henry, Illinois, USA", "USA,IL,Henry"],
    ["Henry, Franklin, Virginia, United States", "USA,VA,Franklin,Henry"],
    ["Henry, Indiana, USA", "USA,IN,Henry"],
    ["Henry, Virginia, United States", "USA,VA,Henry"],
    ["Hennepin County, Minnesota, USA", "USA,MN,Hennepin"],  // 1
    ["Hennepin, Minnesota, USA", "USA,MN,Hennepin"],
    ["Henrico, Virginia, United States", "USA,VA,Henrico"],
    ["Heyworth, Durham, England", "ENG,DUR,Heyworth"],
    ["Heworth, Duram,  England", "ENG,DUR,Heyworth"],
    ["Heworth, Durham, England", "ENG,DUR,Heyworth"],
    ["Hicksford, Greensville, Virginia, USA", "USA,VA,Greensville,Hicksford"],
    ["Hire, McDonough, Illinois, USA", "USA,IL,McDonough,Hire"],
    ["Holland, Reusel-de Mierden, Noord-Brabant, Netherlands", "NLD,NBR,Reusel de Mierden"],  // 1
    ["Holyoke, Hampden, Massachusetts, USA", "USA,MA,Hampden,Holyoke"],
    ["Holyoke, Massachusetts, USA", "USA,MA,Hampden,Holyoke"],
    ["Hoosick Falls, Rensselaer County, New York, United States of America", "USA,NY,Rensselaer,Hoosick Falls"],
    ["Hoosick, Rensselaer, New York, USA", "USA,NY,Rensselaer,Hoosick"],
    ["Hoosick Falls, New York", "USA,NY,Rensselaer,Hoosick"],
    ["Hoosick Falls, Rensselaer, New York, USA", "USA,NY,Rensselaer,Hoosick"],  // 1
    ["IA", "USA,IA"],
    ["Ibstock, Leicestershire, England", "ENG,LEI,Ibstock"],
    ["Ibstock Grange, Leicester", "ENG,LEI,Ibstock Grange"],
    ["IJsselmonde, Rotterdam, Zuid-Holland, Pays-Bas", "NLD,ZUI,IJsselmonde"],
    ["IJsselmonde, Zuid-Holland, Netherlands", "NLD,ZUI,IJsselmonde"],
    ["IJsselmonde, Zuid-Holland, Pays-Bas", "NLD,ZUI,IJsselmonde"],
    ["Illinois, United States of America", "USA,IL"],
    ["Illinois, United States", "USA,IL"],
    ["Illinois", "USA,IL"],
    ["Indian Territory, Coffey County, Kansas, USA", "USA,KS,Coffey"],
    ["Indiana", "USA,IN"],
    ["Indiana, United States", "USA,IN"],
    ["Indiana, USA", "USA,IN"],
    ["Iowa, USA", "USA,IA"],
    ["Iowa", "USA,IA"],
    ["Ireland", "IRL"],  // 1
    ["Island Lake, Rolette, North Dakota, USA", "USA,ND,Rolette,Island Lake"],
    ["Island Lake, Rolette, North Dakota", "USA,ND,Rolette,Island Lake"],
    ["Itasca, Minnesota, USA", "USA,MN,Itasca"],
    ["Jacks Creek, Floyd County, Kentucky, USA", "USA,KY,Floyd,Jacks Creek"],
    ["Jackson, Dakota County, Nebraska, United States of America", "USA,NE,Dakota,Jackson"],  // 1
    ["Jarrow, Durham, England", "ENG,DUR,Jarrow"],
    ["Jasper, Iowa, USA", "USA,IA,Jasper"],
    ["Jay County, Indiana, United States of America", "USA,IN,Jay"],  // 1
    ["Jefferson City, Ohio, USA", "USA,OH,Ashtabula,Jefferson"],
    ["Jefferson County, Ohio, USA", "USA,OH,Jefferson"],  // 1
    ["Jefferson, Ohio, USA", "USA,OH,Jefferson"],  // 1
    ["John's Creek, Floyd County, Kentucky, USA", "USA,KY,Floyd,John's Creek"],
    ["Johns Creek, Floyd, Kentucky, USA", "USA,KY,Floyd,John's Creek"],
    ["Johnson, Kentucky, USA", "USA,KY,Johnson"],
    ["Johnson County, Kentucky, USA", "USA,KY,Johnson"],
    ["Johnson County, Kentucky, United States of America", "USA,KY,Johnson"],
    ["Joranbyhuset, Hedalen, Sor Aurdal, Oppland, Norway", "NOR,OPP,Sør-Aurdal,Hedalen,Joranbyhuset"],
    ["Jøranbyhuset, Hedalen, Sør-Aurdal, Oppland, Norvège", "NOR,OPP,Sør-Aurdal,Hedalen,Joranbyhuset"],
    ["Kamouraska, Kamouraska, Quebec, Canada", "CAN,QC,Kamouraska,Kamouraska"],
    ["Kansas, United States of America", "USA,KS"],
    ["Kensington, Middlesex, England", "ENG,MDL,Kensington"],
    ["Kentucky", "USA,KY"],
    ["Kennett Square, Chester, Pennsylvania, USA", "USA,PA,Chester,Kennett Square"],
    ["Kennett Square, Chester, Pennsylvania, United States of America", "USA,PA,Chester,Kennett Square"],
    ["Kennett, Chester, Pennsylvania, United States", "USA,PA,Chester,Kennett"],
    ["Kennett, Chester, Pennsylvania", "USA,PA,Chester,Kennett"],
    ["Kent, England", "ENG,KEN"],
    ["Kewanee, Henry County, Illinois, United States of America", "USA,IL,Henry,Kewanee"],
    ["King William, King William, VA, Virginia, USA", "USA,VA,King William,King William"],
    ["King William, King William, Virginia, United States", "USA,VA,King William,King William"],
    ["Kingston, Meeker, Minnesota, USA", "USA,MN,Meeker,Kingston"],
    ["Kingston, Wright, Minnesota, USA", "USA,MN,Meeker,Kingston"],
    ["Kingston, Meeker, Minnesota, United States", "USA,MN,Meeker,Kingston"],
    ["Kirk Michael, Michael, Isle of Man", "ENG,IOM,Michael,Kirk Michael"],  // 1
    ["Kirkby Mallory, Leicestershire, England", "ENG,LEI,Kirkby Mallory"],  // 1
    ["Klaaswaal, Zuid-Holland, Pays-Bas", "NLD,ZUI,Klaaswaal"],
    ["Kirkcudbrightshire, Scotland", "SCO,KKD"],
    ["Kittson, Minnesota, USA", "USA,MN,Kittson"],  // 1
    ["Knox, Nebraska, USA", "USA,NE,Knox"],  // 1
    ["Kriegsfeld, Donnersberg, Rhineland-Palatinate, Germany", "DEU,RP,Donnersberg,Kriegsfeld"],
    ["Kromstrijen, Zuid-Holland, Netherlands", "NLD,ZUI,Kromstrijen"],
    ["Kronoberg, Orebro, Sweden", "SWE,KRO,Orebro"],
    ["Kosciusko, Indiana, USA", "USA,IN,Kosciusko"],  // 2
    ["L'Assomption, (Saint-Pierre-du-Portage), (l'Assomption), Québec, Canada", "CAN,QC,L'Assomption,St Pierre du Portage"],  // 1
    ["L'Assomption, (l'Assomption), Québec, Canada", "CAN,QC,L'Assomption"],
    ["L'Isle-Verte (Église Saint-Jean-Baptiste), 150, rue Saint-Jean-Baptiste, Québec, Canada", "CAN,QC,Bas-Saint-Laurent,L'Isle-Verte"],
    ["L'Isle-Verte, Riviere-du-Loup, Quebec, Canada", "CAN,QC,Bas-Saint-Laurent,Riviere-du-Loup"],
    ["L'Isle Verte, Que, Canada", "CAN,QC,Bas-Saint-Laurent,Riviere-du-Loup"],
    ["L'Isle Verte, Riviere du Loup, Que, Canada", "CAN,QC,Bas-Saint-Laurent,Riviere-du-Loup"],
    ["L'Isle Verte, Riviere du loup,  Que, Canada", "CAN,QC,Bas-Saint-Laurent,Riviere-du-Loup"],
    ["L'Isle Verte, Riviere du loup, Que, Canada", "CAN,QC,Bas-Saint-Laurent,Riviere-du-Loup"],
    ["L'Isle Verte, Rviere du Loup, Que, Canada", "CAN,QC,Bas-Saint-Laurent,Riviere-du-Loup"],
    ["La Côte-de-Gaspé, Gaspesie-Iles-de-la-Madeleine Region, Quebec, Canada", "CAN,QC,Gaspesie-Iles-de-la-Madeleine,La C├┤te-de-Gasp├⌐,"],
    ["Lagrange, Lagrange, Indiana, USA", "USA,IN,LaGrange"],
    ["La Grange, Indiana, United States", "USA,IN,LaGrange"],
    ["Lagrance County, Indiana, United States", "USA,IN,LaGrange"],
    ["Lagrange County, Indiana, USA", "USA,IN,LaGrange"],
    ["Lagrange, Lagrange, Indiana, United States", "USA,IN,LaGrange"],
    ["Lake Prairie, Marion, Iowa, USA", "USA,IA,Marion,Lake Prairie"],
    ["Lake Prairie, Marion, Iowa", "USA,IA,Marion,Lake Prairie"],
    ["Lake Prairie, Pella, Marion, Iowa", "USA,IA,Marion,Lake Prairie,Pella"],
    ["Lancaster, Pennsylvania, USA", "USA,PA,Lancaster"],
    ["Lancaster, Lancaster, Pennsylvania, United States", "USA,PA,Lancaster"],
    ["Lancaster, Pennsylvania", "USA,PA,Lancaster"],
    ["Las Vegas, Clark, Nevada, USA", "USA,NV,Clark,Las Vegas"],  // 1
    ["Lawrence, KY, USA", "USA,KY,Lawrence"],  // 1
    ["Leicester, Leicester Unitary Authority, Leicestershire, England", "ENG,LEI,Leicester"],
    ["Leicestershire, England", "ENG,LEI"],
    ["Leicestershire, Leicestershire, England, United Kingdom", "ENG,LEI"],
    ["Leichester, Leicestershire, England", "ENG,LEI,Leicester"],
    ["Lee County, Virginia, USA", "USA,VA,Lee"],
    ["Liberty, Montgomery, OH, USA", "USA,OH,Montgomery,Liberty"],  // 1
    ["Libertytown, Frederick, Maryland, USA", "USA,MD,Frederick,Libertytown"],  // 1
    ["Lincoln, Lancaster, Nebraska, USA", "USA,NE,Lancaster,Lincoln"],  // 1
    ["Lincoln, West Virginia, United States", "USA,WV,Lincoln"],  // 1
    ["Leicester, Leicestershire, England", "ENG,LEI,Leicester"],
    ["Linlithgow, West Lothian, Linlithgowshire, Scotland", "SCO,WLN,Linlithgow"],
    ["Linlithgow, West Lothian, Linlithgowshire,, Scotland", "SCO,WLN,Linlithgow"],  // 1
    ["Linneryd fg, Tokamåla, Kronoberg, Suède", "SWE,KRO,Tokamåla,Linneryd fg"],
    ["Linneryd, Kronoberg, Sverige", "SWE,KRO,Linneryd"],
    ["linvill creel, Rockingham County, Virginia, USA", "USA,VA,Rockingham,Linville Creek"],  // 1
    ["Linton Hundred, Washington, Maryland, United States", "USA,MD,Washington,Linton Hundred"],
    ["Liverpool, England", "ENG,LAN,Liverpool"],  // 3
    ["Logan, Calhoun, Iowa", "USA,IA,Calhoun,Logan"],  // 1
    ["Logan, Virginia, USA", "USA,WV,Calhoun"],  // 1, was in VA. now in WV
    ["Logan, West Virginia, USA", "USA,WV,Logan"],  // 1
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
    ["Loughborough, Leicestershire, England", "ENG,LEI,Longborough"],
    ["Longueuil, Quebec, Canada", "CAN,QC,Monteregie,Longueuil"],
    ["Lonqueuil (Co-Cathedrale St Antoine-de-pade), Quebec, Canada", "CAN,QC,Monteregie,Longueuil,St Antoine de pade"],  // 1
    ["Longueuil, Chambly, Quebec, Canada", "CAN,QC,Monteregie,Longueuil,Chambly"],  // 3
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
    ["Mad River, Clark, Ohio, USA", "USA,OH,Clark,Mad River"],  // 1
    ["Magheracloone, Monaghan, Ireland", "IRL,MOG,Magheracloone"],  // 3
    ["Malbaie, Saguenay County, Canada East (Quebec), Canada", "CAN,QC,Saguenay,La Malbaie"],
    ["Manoakin, Somerset, Maryland", "USA,MD,Somerset,Manokin"],
    ["Manokin, Somerset County, Maryland", "USA,MD,Somerset,Manokin"],
    ["Manokin, Somerset, Maryland ", "USA,MD,Somerset,Manokin"],
    ["Mansfield, Tolland, Conn", "USA,CT,Tolland,Mansfield"],  // 1
    ["Marshall County, Indiana, USA", "USA,IN,Marshall"],  // 2
    ["Market Bosworth, Leicestershire, England", "ENG,LEI,Market Bosworth"],  // 2
    ["Market Harborough, Leicestershire, England", "ENG,LEI,Market Harborough"],  // 1
    ["Marion County, Iowa, USA", "USA,IA,Marion"],  // 1
    ["Marshall, Indiana", "USA,IN,Marshall"],  // 1
    ["Marshall, Minnesota, USA", "USA,MN,Lyon,Marshall"],  // 1
    ["Martin, Kentucky, USA", "USA,KY,Martin"],  // 1
    ["Maryland, Maryland, USA", "USA,MD"],
    ["Maryland", "USA,MD"],
    ["Maryland, USA", "USA,MD"],
    ["Maryland, United States", "USA,MD"],  // 1
    ["Marylebone, Middlesex, , England", "ENG,MDL,Marylebone"],
    ["Masontown, Fayette, Pennsylvania, United States", "USA,PA,Fayette,Masontown"],  // 1
    ["Massachusetts", "USA,MA"],
    ["Massachusetts, United States of America", "USA,MA"],
    ["Megavissey, Cornwall, England", "ENG,COR,Megavissey"],  // 1
    ["Meigs County, Ohio, USA", "USA,OH,Meigs"],  // 1
    ["Meigs, Ohio, USA", "USA,OH,Meigs"],  // 1
    ["Meeker, Minnesota, USA", "USA,MN,Meeker"],
    ["Melrose, Roxburghshire, Scotland", "SCO,ROX,Melrose"],
    ["Melsele, Oost-Vlaanderen, Belgium", "BEL,EFL,Melsele"],
    ["Mercer, WI", "USA,WI,Iron,Mercer"],  // 1
    ["Mevagissey, Cornwall, England", "ENG,COR,Mevagissey"],
    ["Megavissey Cornwall, England", "ENG,COR,Mevagissey"],
    ["Miami, Indiana, United States", "USA,IN,Miami,Miami"],  // 1
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
    ["Milford, Bucks, Pennsylvania, Colonial America", "USA,PA,Pike,Milford"],
    ["Milford, Pike, Pennsylvania, United States", "USA,PA,Pike,Milford"],
    ["Millbrook, Peterborough County, Ontario, Canada", "CAN,ON,Peterborough,Millbrook"],
    ["Millbrook, Peterborough, Ontario, Canada", "CAN,ON,Peterborough,Millbrook"],  // 1
    ["Minneapolis, Hennepin Co., Minnesota, USA", "USA,MN,Hennepin,Minneapolis"],
    ["Minneapolis, Hennepin, Minnesota, USA", "USA,MN,Hennepin,Minneapolis"],
    ["Minesota, USA", "USA,MN"],
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
    ["Missoula, Missoula, Montana, USA", "USA,MT,Missoula,Missoula"],
    ["Missoula, Missoula, MT, USA", "USA,MT,Missoula,Missoula"],
    ["Missoula, Montana, USA", "USA,MT,Missoula,Missoula"],  // 8
    ["Mobberly, Cheshire, England", "ENG,CHS,Mobberly"],
    ["Monk Wearmouth, Durham, England", "ENG,DUR,Monkwearmouth"],
    ["Monkwearmouth, Durham, England", "ENG,DUR,Monkwearmouth"],
    ["Montana", "USA,MT"],
    ["Monroe Twp, Harrison, Ohio, USA", "USA,OH,Harrison,Monroe Tonwship"],  // 1
    ["Montgomery, Hamilton, Ohio, USA", "USA,OH,Hamilton,Montgomery"],
    ["Montgomery County, Ohio, USA", "USA,OH,Montgomery"],
    ["Montgomery County, Ohio, United States of America", "USA,OH,Montgomery"],
    ["Montgomery County, Virginia, USA", "USA,OH,Montgomery"],
    ["Montgomery, Virginia, USA", "USA,VA,Montgomery"],
    ["Monticello, Wright, Minnesota, USA", "USA,MN,Wright,Monticello"],
    ["Moorhead, Minnesota, USA", "USA,MN,Clay,Moorehead"],  // 1
    ["Murton, Northumberland, England", "ENG,NBL,Murton"],
    ["Mörsfeld , Donnersbergkreis, Rhineland-Palatinate, Germany", "DEU,RP,Donnersbergkreis,Morsfeld"],
    ["Mylo Rollett, North Dakota, USA", "USA,ND,Rolette,Mylo"],
    ["Mylo, Rolette County, North Dakota, United States of America", "USA,ND,Rolette,Mylo"],
    ["Mylo, Rolette, North Dakota, USA", "USA,ND,Rolette,Mylo"],
    ["Naaldwijk, Naaldwijk, Zuid-Holland, Pays-Bas", "NLD,ZUI,Naalswijk"],
    ["Naaldwijk, Zuid-Holland, Pays-Bas", "NLD,ZUI,Naalswijk"],
    ["Nappanee, Elkhart, Indiana, USA", "USA,IN,Elkhart"],  // 1
    ["Nailstone, Leicestershire, England", "ENG,LEI,Nailstone"],
    ["Nailstone, Leicestershire", "ENG,LEI,Nailstone"],
    ["Nebraska, USA", "USA,NE"],
    ["Nelsonville, Athens, Ohio, USA", "USA,OH,Athens,Nelsonville"],
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
    ["Newry, Down, Ulster, Ireland", "NIR,DOW,Newry"],  // 1
    ["Newton, Jasper, Iowa, USA", "USA,IA,Jasper,Newton"],
    ["Newton, IA, Iowa, USA", "USA,IA,Jasper,Newton"],
    ["Newton, Iowa, USA", "USA,IA,Jasper,Newton"],
    ["Newton, Jasper County, Iowa, United States of America", "USA,IA,Jasper,Newton"],
    ["Newton, Jasper, Iowa, United States", "USA,IA,Jasper,Newton"],
    ["New York", "USA,NY"],
    ["Nieuw-Beijerland", "NLD,ZUI,Nieuw-Beijerland"],
    ["Noord-Holland, Noord-Holland, Pays-Bas", "NLD,NOR"],
    ["Nordmyren farm, Hovin sokn, Ullensaker prestegjeld, Akershus, Norvège", "NOR,AKR,Ullensaker prestegjeld,Hovin sokn,Nordmyren farm"],
    ["Nordmyren farm, Hovin, Ullensaker prestegjeld, Akershus, Norway", "NOR,AKR,Ullensaker prestegjeld,Hovin sokn,Nordmyren farm"],
    ["North Carolina, USA", "USA,NC"],
    ["North Carolina", "USA,NC"],
    ["North Dakota", "USA,ND"],
    ["North Petherton, Somerset, England", "ENG,SOM,North Petherton"],
    ["Northumberland Unitary Authority, Northumberland, England", "ENG,NBL,Northumberland Unitary Authority"],
    ["Northumberland and Durham, Ontario, Canada", "CAN,ON,Northumberland and Durham"],  // 1
    ["Not Stated, Washington, Virginia, USA", "USA,VA,Washington"],
    ["Norway", "NOR"],
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
    ["Oost Ijsselmonde, Zind Holland, Zeeland, Pays-Bas", "NLD,ZUI,Oost-IJsselmonde"],
    ["Oost-IJselmonde, Netherlands", "NLD,ZUI,Oost-IJsselmonde"],
    ["Oskaloosa, Mahaska, Iowa, USA", "USA,IA,Mahaska,Oskaloosa"],  // 1
    ["Oud Beierland, Zuid-Holland, Netherlands", "NLD,ZUI,Oud Beijerland"],
    ["Oud Beijerland", "NLD,ZUI,Oud-Beijerland"],
    ["Oud-Beijerland, 6192, Zuid-Holland, Pays-Bas", "NLD,ZUI,Oud Beijerland"],
    ["Oud-Beijerland, Beijerland, Zuid Holland, Netherlands", "NLD,ZUI,Oud Beijerland"],
    ["Oud-Beijerland, Zuid-Holland, Netherlands", "NLD,ZUI,Oud Beijerland"],
    ["Oud-Beijerland, Zuid-Holland, Pays-Bas", "NLD,ZUI,Oud Beijerland"],
    ["Oud-Beijerland", "NLD,ZUI,Oud-Beijerland"],
    ["Oud Reijenerwaard, Zind Holland, Netherlands", "NLD,ZUI,Oud Reijenerwaard"],  // 1
    ["Ouddorp", "NLD,ZUI,Goedereede,Ouddorp"],
    ["Ouddorp, Goedereede, Zuid-Holland, Netherlands", "NLD,ZUI,Goedereede,Ouddorp"],
    ["Ouddorp, Goedereede, Zuid-Holland, Pays-Bas", "NLD,ZUI,Goedereede,Ouddorp"],
    ["Oxfordshire, England", "ENG,OXF"],
    ["PA", "USA,PA"],  // 1
    ["Paintsville, Johnson, Kentucky, USA", "USA,KY,Johnson,Paintsville"],
    ["Paintsville, Johnson, Kentucky, United States", "USA,KY,Johnson,Paintsville"],
    ["Pamunkey River, New Kent, Virginia, USA", "USA,VA,New Kent,Pamunkey River"],
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
    ["Pella, Marion, Iowa",""],  // 2
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
    ["Peterborough, 1654329, Ontario, Canada", "CAN,ON,Peterborough"],
    ["Philadelphia, Pennsylvania", "USA,PA,Philadelphia"],  // 2
    ["Pickering Grange, Leicestershire,  England", "ENG,LEI,Pickering Grange"],
    ["Piershil, Westmaas, Binnenmaas, Zuid-Holland, Pays-Bas", "NLD,ZUI,Piershil"],
    ["Pike County, Kentucky, USA", "USA,KY,Pike"],
    ["Pike County, Ohio, United States of America", "USA,OH,Pike"],
    ["Pike County, Ohio, USA", "USA,OH,Pike"],
    ["Pike Township, Perry Co, Ohio, USA", "USA,OH,Pike,Pike Township"],
    ["Pike, Kentucky, USA", "USA,KY,Pike"],
    ["Pike, Kentucky, United States", "USA,KY,Pike"],
    ["Plainfield, Windham County, Connecticut, United States of America", "USA,CT,Windham,Plainfield"],  // 1
    ["Plymouth, Devon, , England", "ENG,DEV,Plymouth"],
    ["Plymouth, Devon, England", "ENG,DEV,Plymouth"],
    ["Port Hope, Ontario, Canada", "CAN,ON,Northumberland,Port Hope"],
    ["Port of New York, New York, United States", "USA,NY,New York,Port of New York"],  // 1
    ["Portland, Multnomah, OR, USA", "USA,OR,Multnomah,Portland"],
    ["Portland, Multnomah, Oregon, USA", "USA,OR,Multnomah,Portland"],  // 1
    ["Portsmouth,Rhode Island", "USA,RI,Newport,Portsmouth"],  // 1
    ["Portsmouth, Newport, Rhode Island, USA", "USA,RI,Newport,Portsmouth"],
    ["Portsmouth, R I", "USA,RI,Newport,Portsmouth"],
    ["Powhatan, Powhatan, Virginia, USA", "USA,VA,Powhatan,Powhatan"],
    ["Preble County, Ohio, USA", "USA,OH,Preble"],
    ["Preble County, Ohio, United States of America", "USA,OH,Preble"],
    ["Preble Cty, Ohio, USA", "USA,OH,Preble,Preble"],
    ["Preble, Ohio", "USA,OH,Preble"],
    ["Preble, Ohio, USA", "USA,OH,Preble"],  // 1
    ["Prestonsburg, Floyd, Kentucky, United States", "USA,KY,Floyd,Prestonburg"],
    ["Prestonsburg, Floyd, Kentucky, USA", "USA,KY,Floyd,Prestonburg"],
    ["Primghar, O'Brien County, Iowa, United States of America", "USA,IA,O'Brien,Primghar"],  // 1
    ["Prince William County, Virginia, USA", "USA,VA,Prince WIlliam"],  // 1
    ["Putnam County, Illinois, USA", "USA,IL,Putnam"],  // 1
    ["Québec, Canada", "CAN,QC"],
    ["Quebec, Canada", "CAN,QC"],
    ["Ramsgate, Kent, England", "ENG,KEN,Ramsgate"],
    ["Rapids City, Whiteside, Illinois, United States", "USA,IL,Whiteside,Rapids City"],  // 1
    ["Reilsheim, Baden, Baden Wurttemberg, Allemagne", "DEU,BW,Baden,Reilsheim"],
    ["Reilsheim, Rhein-Neckar-Kreis, Baden-Wuerttemberg, Germany", "DEU,BW,Baden,Reilsheim"],
    ["Remer, Cass, Minnesota, USA", "USA,MN,Cass,Remer"],
    ["Renfrewshire, Scotland", "SCO,RFW"],
    ["Resolis A Cree Wisconsin, USA", "USA,WI,Adams,Roche a Cri"],  // 1
    ["Roche a Cree n.e.l. Menighed, Strongs Prairie Twp, Adams, Wisconsin, USA", "USA,WI,Adams,Roche a Cri"],  // 1
    ["Rhineland-Palatinate, Frankenthal, Rheinland Pfalz, Allemagne", "DEU,RP,Frankenthal"],
    ["Rhodes, Marshall, Iowa, USA", "USA,IA,Marshall,Rhodes"],  // 1
    ["RI, Rhode Island, USA", "USA,RI"],  // 1
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
    ["Rolde, Drenthe, Pays-Bas", "NLD,DRE,Rolde"],
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
    ["Sandgate, Bennington County, Vermont, USA", "USA,VT,Bennington,Sandgate"],  // 2
    ["Sandwich, Barnstable, Massachusetts,   USA", "USA,MA,Barnstable,Sandwich"],  // 1
    ["Sandwich, Massachusetts, USA", "USA,MA,Barnstable,Sandwich"],  // 1
    ["Sandwich, Barnstable County, Massachusetts, USA", "USA,MA,Barnstable,Sandwich"],
    ["Sandwich, Barnstable County, Massachusetts, United States of America", "USA,MA,Barnstable,Sandwich"],
    ["Sandwich, Barnstable, MA, Massachusetts, USA", "USA,MA,Barnstable,Sandwich"],
    ["Sandwich, Barnstable, MA, USA", "USA,MA,Barnstable,Sandwich"],
    ["Sandwich, Barnstable, Massachusetts, USA", "USA,MA,Barnstable,Sandwich"],
    ["Sandwich, Barnstable, Massachusetts, United States", "USA,MA,Barnstable,Sandwich"],
    ["Saratoga, Wood, Wisconsin, USA", "USA,WI,Wood,Saratoga"],  // 1
    ["Schenectady, Schenectady, New York, United States", "USA,NY,Schenectady,Schenectady"],  // 1
    ["Scituate, Massachusetts", "USA,MA,Plymouth,Scituate"],  // 1
    ["Scituate, Plymouth, Massachusetts, USA", "USA,MA,Plymouth,Scituate"],  // 2
    ["Scituate, Plymouth, Mass, Massachusetts, USA", "USA,MA,Plymouth,Scituate"],
    ["Scituate, Plymouth, Massachusetts, United States", "USA,MA,Plymouth,Scituate"],
    ["Scituate, Plymouth County, Massachusetts, colony", "USA,MA,Plymouth,Scituate"],
    ["Scotch Block, Rolette, North Dakota, USA", "USA,ND,Rolette,Scotch Block"],
    ["Scotland", "SCO"],
    ["Scott, Virginia, United States", "USA,VA,Scott"],
    ["Sebeka, Wadena Co., MN, Minnesota, USA", "USA,MN,Wadena,Sebeka"],
    ["Sebeka, Wadena, Minnesota, USA", "USA,MN,Wadena,Sebeka"],
    ["Sebeka, Wadena, Minnesota, United States", "USA,MN,Wadena,Sebeka"],
    ["Sharon, Vermont, USA", "USA,VT,Windsor,Sharon"],  // 1
    ["Sharon, Windsor, Vermont, USA", "USA,VT,Windsor,Sharon"],  // 1
    ["Sheffield, Bureau, Illinois, United States", "USA,IL,Bureau,Sheffield"],  // 1
    ["Shenton, Leicestershire, England", "ENG,LEI,Shenton"],
    ["Shepshed, Leicestershire, England", "ENG,LEI,Shepshed"],
    ["Sherman, Jasper, Iowa, USA", "USA,IA,Jasper,Sherman"],  // 1
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
    ["South Haven, Wright County, Minnesota, United States of America", "USA,MN,Wright,South Haven"],
    ["South Haven, Wright, Minnesota, USA", "USA,MN,Wright,South Haven"],
    ["South Red River Township, Kittson County, Minnesota, United States of America", "USA,MN,Kittson,South Red River Township"],  // 1
    ["Southside, Wright, Minnesota, USA", "USA,MN,Wright,Southside"],
    ["Sprendlingen, Offenbach, Hesse, Germany", "DEU,HE"],  // 1
    ["Springfield", "USA,IL,Sangamon,Springfield"],  // 1
    ["St Ann's, Dublin, Leinster, Ireland", "IRL,DUB,St Ann's"],
    ["St Basile, Madawaska, New Brunswick, Canada", "CAN,NB,Madawaska,St Basile"],
    ["St-Basile, Madawaska, New Brunswick, Canada", "CAN,NB,Madawaska,St Basile"],
    ["St-Basile, Madawaska, N.B. Canada, Canada", "CAN,NB,Madawaska,St Basile"],  // 1
    ["Saint Basile, Madawaska, New Brunswick, Canada", "CAN,NB,Madawaska,St Basile"],
    ["Saint-Basile, Madawaska County, New Brunswick, Canada", "CAN,NB,Madawaska,St Basile"],
    ["St Croix County, Wisconsin, USA", "USA,WI,St. Croix"],  // 1
    ["St Joachim, Chateaugay, Quebec, Canada", "CAN,QC,Chateauguay,St Joachim"],
    ["St Johns Parish, Baltimore, Maryland, USA", "USA,MD,Baltimore,St Johns Parish"],  // 3
    ["St Marys, Somerset, England", "ENG,SOM,St Marys"],
    ["St Nicholas, Leicestershire, , England", "ENG<LEI,St Nicholas"],  // 1
    ["St Paul, Joliette, Quebec, Canada", "CAN,QC,Lanaudiere,Joliette,St Paul"],
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
    ["Strongs Prairie, Adams, Wisconsin, USA", "USA,WI,Adams,Strongs Prairie Township"],
    ["Strånganäs  Västergård, Älmeboda, Kronoberg, Sverige", "SWE,KRO,Älmeboda,Västergård,Strånganäs"],
    ["Strånganäs Älmeboda, Kronoberg, Sverige", "SWE,KRO,Älmeboda,Strånganäs"],
    ["Strånganäs, Älmeboda, Kronoberg, Sverige", "SWE,KRO,Älmeboda,Strånganäs"],
    ["Sudbury, Middlesex, Massachusetts", "USA,MA,Middlesex,Sudbury"],  // 1
    ["Surry, North Carolina, USA", "USA,NC,Surry"],
    ["Surry County, North Carolina, USA", "USA,NC,Surry"],  // 1
    ["Sutton Cheney, Leicestershire, England", "ENG,LEI,Sutton Cheney"],
    ["Swansea, Bristol County, Massachusetts, United States of America", "USA,MA,Bristol,Swansea"],
    ["Swansea, Bristol, Massachusetts, USA", "USA,MA,Bristol,Swansea"],
    ["Swansea, Bristol, MA", "USA,MA,Bristol,Swansea"],  // 6
    ["Swansea, Bristol, Massachusetts", "USA,MA,Bristol,Swansea"],  // 1
    ["Sweden", "SWE"],
    ["Symondsbury, Dorset, England", "ENG,DOR,Symondsbury"],
    ["Thames River Valley, Essex, England", "ENG,ESS,Thames River Valley"],
    ["The Forks, Hanover, Virginia, USA", "USA,VA,Hanover,The Forks"],  // 1
    ["Thornton, Leicestershire, England", "ENG,LEI,Thornton"],
    ["Thorpe Underwood, Kettering, Northamptonshire, England", "ENG,NOR,Kettering,Thorpe Underwood"],
    ["Thurlaston,Leicester,England", "ENG,LEI,Thurlaston"],  // 1
    ["To, Oppland, Norway", "NOR,OPP,To"],
    ["Tomahawk, Wisconsin, USA", "USA,WI,Lincoln,Tomahawk"],  // 1
    ["Topsham, Devon, England", "ENG,DEV,Topsham"],
    ["Toronto, 1654339, Ontario, Canada", "CAN,ON,Toronto"],  // 2
    ["Totnes, Devon, England", "ENG,DEV,Totnes"],
    ["Trivoli, Peoria Co, Illinois, USA", "USA,IL,Peoria,Trivoli"],  // 1
    ["Townsend, Huron, Ohio, USA", "USA,OH,Huron,Townsend Township"],  // 1
    ["Turkey Creek Township, Somerset County, Pennsylvania", "USA,PA,Somerset,Turkeyfoot Township"],
    ["Turkeyfoot Somerset, Pennsylvania, USA", "USA,PA,Somerset,Turkeyfoot Township"],
    ["Turkeyfoot Township, Somerset County, Pennsylvania, USA", "USA,PA,Somerset,Turkeyfoot Township"],
    ["Turkeyfoot, Somerset County, Pennsylvania, USA", "USA,PA,Somerset,Turkeyfoot Township"],
    ["Turkeyfoot, Somerset, Pennsylvania, United States", "USA,PA,Somerset,Turkeyfoot Township"],
    ["Turkey Creek Twp., Somerset, Pennsylvania, USA", "USA,PA,Somerset,Turkey Creek Township"],  // 1
    ["Upper, Canada", "CAN,ON"],  // 1
    ["Upper Turkeyfoot Township, Somerset, Pennsylvania, USA", "USA,PA,Somerset,Turkeyfoot"],
    ["Torquay, Devon, England", "ENG,DEV,Torquay"],
    ["Torr, Devon, England", "ENG,DEV,Torr"],
    ["Trimble Township, Athens, Ohio, USA", "USA,OH,Athens,Trimble Township"],
    ["Ullensaker, Akershus, Norway", "NOR,AKR,Ullensaker"],
    ["Ullensaker, Akershus, Norvège", "NOR,AKR,Ullensaker"],
    ["Upper Marlborough, Prince George's, Maryland", "USA,MD,Prince George's,Upper Marlborough"],  // 1
    ["USA", "USA"],
    ["Ulster, Ireland", "NIR"],
    ["VA", "USA,VA"],
    ["Valeria, Jasper County, Iowa, United States of America", "USA,IA,Jasper,Van Buren"],
    ["Van Buren, Aroostook , Maine, USA", "USA,ME,Aroostook,Van Buren"],
    ["Van Buren, Aroostook, Maine, USA", "USA,ME,Aroostook,Van Buren"],
    ["Van Buren, Aroostoook, Maine, USA", "USA,ME,Aroostook,Van Buren"],
    ["Van Buren, Maine, USA", "USA,ME,Aroostook,Van Buren"],
    ["Vermilion, Illinois, USA", "USA,IL,Vermilion"],  // 2
    ["Vermont", "USA,VT"],
    ["Virginia, United States of America", "USA,VA"],
    ["Virginia, United States", "USA,VA"],
    ["Virginia, Virginia, USA", "USA,VA"],
    ["Virginia", "USA,VA"],
    ["VA, Virginia, USA", "USA,VA"],
    ["Valeria, Jasper County, Iowa, USA", "USA,IA,Jasper,Valeria"],
    ["Van Buren, Aroostook, Maine, United States", "USA,ME,Aroostook,Van Buren"],
    ["Vaughan, York, Ontario, Canada", "CAN.ON,York,Vaughn"],  // 1
    ["Vermillion, LaSalle, Illinois, USA", "USA,IL,LaSalle,Vermillion"],
    ["Vieboda Södergård, Linneryd, Kronoberg, Sverige", "SWE,KRO,Linneryd,Vieboda Södergård"],
    ["Virginia British Colony, Virginia, USA", "USA,VA"],
    ["Virginia, USA", "USA,VA"],
    ["Voluntown, New London County, Connecticut, United States of America", "USA,CT,New London,Voluntown"],
    ["Västra Skyberg, Värmland, Sverige", "SWE,VAR,Västra Skyberg"],
    ["Wachtebrke, Oost-Vlaanderen, Belgique", "BEL,EFL,Wachtebrke"],
    ["Wadena Waden, Minnesota", "USA,MN,Wadena"],
    ["Wadena, Minnesota, USA", "USA,MN,Wadena"],
    ["Wadena, Minnesota, United States", "USA,MN,Wadena"],
    ["Wadena, Minnesota", "USA,MN,Wadena"],
    ["Walker, Cass Co., MN, Minnesota, USA", "USA,MN,Cass,Walker"],  // 1
    ["Walker, Northumberland, England", "ENG,NBL,Walker"],
    ["Wapello County, Iowa, USA", "USA,IA,Wapello"],  // 1
    ["Wapello,Iowa, USA", "USA,IA,Wapello"],  // 1
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
    ["Washoe, Nevada", "USA,NV,Washoe"],  // 1
    ["West Chester, Chester, Pennsylvania", "USA,PA,Chester,West Chester"],
    ["West Palm Beach, Palm Beach, Florida, USA", "USA,FL,Palm Beach,West Palm Beach"],  // 1
    ["West Virginia, USA", "USA,WV"],  // 1
    ["Westerly, Washington, Rhode Island, USA", "USA,RI,Washington,Westerly"],
    ["Westerly, Washington, Rhode Island", "USA,RI,Washington,Westerly"],  // 1
    ["Westhorpe, Suffolk, England", "ENG,SFK,Westhorpe"],
    ["Westland, West Coast, Nouvelle-Zélande", "NZL,Westland"],  // 1
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
    ["White Earth", "USA,MN,Becker,White Earth"],  // 1
    ["White Earth, Becker County, Minnesota, United States of America", "USA,MN,Becker,White Earth"],
    ["White Earth, Becker, Minnesota, USA", "USA,MN,Becker,White Earth"],
    ["Whitley County, Indiana, United States of America", "USA,IN,Whitley"],  // 1
    ["Wieboda Södergård, Kronobergs län, Sverige", "SWE,KRO,Wieboda Södergård"],
    ["Wilmington, New Castle, Delaware", "USA,DE,New Castle,Wilmington"],
    ["Wilmington, New Castle, Delaware, USA", "USA,DE,New Castle,Wilmington"],  // 1
    ["Winchester, Frederick, Maryland, USA", "USA,MD,Frederick,Winchester"],
    ["Wisconsin, USA", "USA,WI"],
    ["Wisconsin", "USA,WI"],
    ["Wixhausen, Darmstadt, Starkenburg, Hessen, Germany", "DEU,HE,Starkenberg,Darmstadt,Wixhausen"],
    ["Wixhausen, Darmstadt, Hesse, Germany", "DEU,HE,Starkenberg,Darmstadt,Wixhausen"],  // 1
    ["Wolsingham, Durham, England", "ENG,DUR,Wolsingham"],  // 1
    ["Woodbridge Twp., Middlesex, New Jersey, USA", "USA,NJ,Middlesex,Woodbridge Township"],  // 1
    ["Woodsboro, Frederick, Maryland, USA", "USA,MD,Frederick,Woodsboro"],
    ["Wright County, Minnesota, USA", "USA,MN,Wright"],
    ["Wright, Minnesota, USA", "USA,MN,Wright"],
    ["Wymore, Gage County, Nebraska, United States of America", "USA,NE,Gage,Wymore"],  // 1
    ["Yarmouth, Barnstable County, Massachusetts, United States of America", "USA,MA,Barnstable,Yarmouth"],
    ["Yarmouth, Barnstable County, Massachusetts, USA", "USA,MA,Barnstable,Yarmouth"],
    ["Yarmouth, Barnstable, Massachusetts, USA", "USA,MA,Barnstable,Yarmouth"],
    ["Yarmouth, Barnstable, MA, USA", "USA,MA,Barnstable,Yarmouth"],  // 1
    ["York, 1654479, Quebec, Canada", "CAN,ON,York"],  // 4 York, Upper Canada was in Toronto old city
    ["York, Quebec, Canada", "CAN,ON,York"],  // 1
    ["York Township, Athens, Ohio, USA", "USA,OH,Athens,York Township"],
    ["York, Athens, Ohio, USA", "USA,OH,Athens,York Township"],
    ["York County, 1654323, Ontario, Canada", "CAN,ON,York"],
    ["Yorkhampton, York, Virginia, USA", "USA,VA,York,Yorkhampton"],  // 3
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
    ["presumed, Westminster,London, England", "ENG,LDN,Westminster"],  // 1
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
