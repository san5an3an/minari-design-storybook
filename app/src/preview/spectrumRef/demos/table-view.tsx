// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/table/TableView.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { ActionButton, Cell, Column, Content, Flex, Heading, IllustratedMessage, Row, TableBody, TableHeader, TableView, useAsyncList, useCollator } from "@adobe/react-spectrum";
import Add from '@spectrum-icons/workflow/Add';
import type {Selection} from '@adobe/react-spectrum';
import NotFound from '@spectrum-icons/illustrations/NotFound';

function Example1() {
  return (
    <>
    <TableView aria-label="Example table with static contents" selectionMode="multiple">
      <TableHeader>
        <Column>Name</Column>
        <Column>Type</Column>
        <Column align="end">Date Modified</Column>
      </TableHeader>
      <TableBody>
        <Row>
          <Cell>Games</Cell>
          <Cell>File folder</Cell>
          <Cell>6/7/2020</Cell>
        </Row>
        <Row>
          <Cell>Program Files</Cell>
          <Cell>File folder</Cell>
          <Cell>4/7/2021</Cell>
        </Row>
        <Row>
          <Cell>bootmgr</Cell>
          <Cell>System file</Cell>
          <Cell>11/20/2010</Cell>
        </Row>
        <Row>
          <Cell>log.txt</Cell>
          <Cell>Text Document</Cell>
          <Cell>1/18/2016</Cell>
        </Row>
      </TableBody>
    </TableView>
    </>
  );
}

function Example2() {
  let columns = [
    {name: 'Name', uid: 'name'},
    {name: 'Type', uid: 'type'},
    {name: 'Date Modified', uid: 'date'}
  ];
  
  let rows = [
    {id: 1, name: 'Games', date: '6/7/2020', type: 'File folder'},
    {id: 2, name: 'Program Files', date: '4/7/2021', type: 'File folder'},
    {id: 3, name: 'bootmgr', date: '11/20/2010', type: 'System file'},
    {id: 4, name: 'log.txt', date: '1/18/2016', type: 'Text Document'}
  ];
  
  return (
    <>
    <TableView
      aria-label="Example table with dynamic content"
      maxWidth="size-6000">
      <TableHeader columns={columns}>
        {column => (
          <Column
            key={column.uid}
            align={column.uid === 'date' ? 'end' : 'start'}>
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={rows}>
        {item => (
          <Row>
            {columnKey => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
    </>
  );
}

function Example3() {
  ///- begin collapse -///
  let columns = [
    {name: 'First name', id: 'first_name'},
    {name: 'Last name', id: 'last_name'},
    {name: 'City', id: 'city'}
  ];
  
  let rows = [
  {"id":1,"first_name":"Andras","last_name":"Rodmell","city":"Tilburg"},
  {"id":2,"first_name":"Hansiain","last_name":"Muino","city":"Hollola"},
  {"id":3,"first_name":"Northrop","last_name":"Adnet","city":"Lai Cách"},
  {"id":4,"first_name":"Giana","last_name":"Phython","city":"Laspezia"},
  {"id":5,"first_name":"Maud","last_name":"Jaram","city":"Tipaz"},
  {"id":6,"first_name":"Gasparo","last_name":"Wiggin","city":"Feuknoni"},
  {"id":7,"first_name":"Phillie","last_name":"Lezemere","city":"Krajan Sidodadi"},
  {"id":8,"first_name":"Kailey","last_name":"Du Plantier","city":"Shangping"},
  {"id":9,"first_name":"Brady","last_name":"Oxtarby","city":"Bang Mun Nak"},
  {"id":10,"first_name":"Ekaterina","last_name":"Crennan","city":"Santo Antônio do Amparo"},
  {"id":11,"first_name":"Jaine","last_name":"Trembey","city":"Manūjān"},
  {"id":12,"first_name":"Emmey","last_name":"Dunguy","city":"Garhi Yāsīn"},
  {"id":13,"first_name":"Camille","last_name":"Millwall","city":"Orion"},
  {"id":14,"first_name":"Staci","last_name":"Glusby","city":"Alofi"},
  {"id":15,"first_name":"Ned","last_name":"Crumbleholme","city":"Ban Bueng"},
  {"id":16,"first_name":"Tana","last_name":"Beardsworth","city":"Puerto Aisén"},
  {"id":17,"first_name":"Dewain","last_name":"Fladgate","city":"London"},
  {"id":18,"first_name":"Thurstan","last_name":"Trembath","city":"Orléans"},
  {"id":19,"first_name":"Vaclav","last_name":"Fitzpayn","city":"Huangchen"},
  {"id":20,"first_name":"Keven","last_name":"Monkeman","city":"Medenychi"},
  {"id":21,"first_name":"Talia","last_name":"Ryman","city":"Piteå"},
  {"id":22,"first_name":"Percy","last_name":"Le Teve","city":"Terny"},
  {"id":23,"first_name":"Jackson","last_name":"Anten","city":"Beiling"},
  {"id":24,"first_name":"Jakob","last_name":"Goullee","city":"Pelym"},
  {"id":25,"first_name":"Dru","last_name":"Klainer","city":"Zavrč"},
  {"id":26,"first_name":"Lucie","last_name":"Donahue","city":"Kiryū"},
  {"id":27,"first_name":"Marc","last_name":"McPeck","city":"Nong Muang Khai"},
  {"id":28,"first_name":"Vivianna","last_name":"Allport","city":"Kajatian"},
  {"id":29,"first_name":"Drud","last_name":"Hurn","city":"Bambuí"},
  {"id":30,"first_name":"Trever","last_name":"Ambrodi","city":"Xiangtan"},
  {"id":31,"first_name":"Gwennie","last_name":"Kingswold","city":"San Benito"},
  {"id":32,"first_name":"Karlan","last_name":"Tilby","city":"Patrída"},
  {"id":33,"first_name":"Heddie","last_name":"Sneath","city":"Esperanza"},
  {"id":34,"first_name":"Harlen","last_name":"Sandells","city":"Harrismith"},
  {"id":35,"first_name":"Gavan","last_name":"Halward","city":"Al Ḩayfah"},
  {"id":36,"first_name":"Andre","last_name":"Everest","city":"Bahui"},
  {"id":37,"first_name":"Merilyn","last_name":"Rowbrey","city":"Imishli"},
  {"id":38,"first_name":"Abe","last_name":"Pecht","city":"Pangkalan Kasai"},
  {"id":39,"first_name":"Britt","last_name":"Collingridge","city":"Érd"},
  {"id":40,"first_name":"Leticia","last_name":"Thorndycraft","city":"Paita"},
  {"id":41,"first_name":"Eward","last_name":"Tigwell","city":"Aral"},
  {"id":42,"first_name":"Torrie","last_name":"Curzon","city":"Stockholm"},
  {"id":43,"first_name":"Jenifer","last_name":"Swalwel","city":"Jinniu"},
  {"id":44,"first_name":"Marianna","last_name":"Radley","city":"Hedi"},
  {"id":45,"first_name":"Antoine","last_name":"Tyers","city":"Hewa"},
  {"id":46,"first_name":"Darline","last_name":"Gallehawk","city":"København"},
  {"id":47,"first_name":"Rikki","last_name":"Rosenzveig","city":"Affery"},
  {"id":48,"first_name":"Debera","last_name":"Vedenichev","city":"Żywiec"},
  {"id":49,"first_name":"Morena","last_name":"Hewins","city":"Las Lajas"},
  {"id":50,"first_name":"Cordy","last_name":"Reimer","city":"Derbent"},
  {"id":51,"first_name":"Quint","last_name":"Thoresbie","city":"Guyang"},
  {"id":52,"first_name":"Christean","last_name":"Deere","city":"Waegwan"},
  {"id":53,"first_name":"Moyra","last_name":"Battelle","city":"Villa Presidente Frei, Ñuñoa, Santiago, Chile"},
  {"id":54,"first_name":"Fayth","last_name":"Gallafant","city":"Kedungharjo"},
  {"id":55,"first_name":"Thedrick","last_name":"Duddy","city":"Thị Trấn Mường Lát"},
  {"id":56,"first_name":"George","last_name":"Rickerd","city":"Zarqa"},
  {"id":57,"first_name":"Nikos","last_name":"Rideout","city":"Yuanqiao"},
  {"id":58,"first_name":"Alejandra","last_name":"Le Port","city":"Il’ichëvo"},
  {"id":59,"first_name":"Eleonora","last_name":"Gibberd","city":"Sua"},
  {"id":60,"first_name":"Archibaldo","last_name":"Place","city":"Sidayu"},
  {"id":61,"first_name":"Helen","last_name":"Brenton","city":"Kuressaare"},
  {"id":62,"first_name":"Leyla","last_name":"Armstead","city":"Haifa"},
  {"id":63,"first_name":"Bridget","last_name":"Strotone","city":"Karasuk"},
  {"id":64,"first_name":"Jarid","last_name":"Packer","city":"Студеничани"},
  {"id":65,"first_name":"Christos","last_name":"Natt","city":"Nova Russas"},
  {"id":66,"first_name":"Alwyn","last_name":"Mingaud","city":"Conde"},
  {"id":67,"first_name":"Archy","last_name":"Thorneywork","city":"Gulu"},
  {"id":68,"first_name":"Iolanthe","last_name":"Spurgeon","city":"Ayrihuanca"},
  {"id":69,"first_name":"Rossy","last_name":"Axford","city":"Ledeč nad Sázavou"},
  {"id":70,"first_name":"Consuela","last_name":"Lillegard","city":"Finote Selam"},
  {"id":71,"first_name":"Salomon","last_name":"Buckney","city":"Kampokpok"},
  {"id":72,"first_name":"Celene","last_name":"Espley","city":"Sinubong"},
  {"id":73,"first_name":"Kristos","last_name":"Denyukhin","city":"Las Palmas"},
  {"id":74,"first_name":"Bertha","last_name":"Mallabon","city":"Vera"},
  {"id":75,"first_name":"Jorry","last_name":"Yuryev","city":"Carletonville"},
  {"id":76,"first_name":"Holly-anne","last_name":"Wagstaffe","city":"Sukadana"},
  {"id":77,"first_name":"Lara","last_name":"Shears","city":"Gambēla"},
  {"id":78,"first_name":"Romonda","last_name":"Glanville","city":"Donglu"},
  {"id":79,"first_name":"Felice","last_name":"Pryde","city":"Sapadun"},
  {"id":80,"first_name":"Nick","last_name":"Kidney","city":"Chernigovka"},
  {"id":81,"first_name":"Hermina","last_name":"Dooley","city":"New Agutaya"},
  {"id":82,"first_name":"Ketty","last_name":"FitzGeorge","city":"Abaza"},
  {"id":83,"first_name":"Patrizio","last_name":"Bovingdon","city":"‘Ayn al ‘Arab"},
  {"id":84,"first_name":"Caitrin","last_name":"Braine","city":"Il’inskiy"},
  {"id":85,"first_name":"Ian","last_name":"De Few","city":"Jatinagara"},
  {"id":86,"first_name":"Eben","last_name":"Adan","city":"Bolong"},
  {"id":87,"first_name":"Peder","last_name":"Innott","city":"Gampaha"},
  {"id":88,"first_name":"Selie","last_name":"Cruise","city":"Mariscala"},
  {"id":89,"first_name":"Melania","last_name":"Meredyth","city":"La’ershan"},
  {"id":90,"first_name":"Antonina","last_name":"Proby","city":"Shantoudian"},
  {"id":91,"first_name":"Sabra","last_name":"Dreng","city":"Dzhankoy"},
  {"id":92,"first_name":"Sibeal","last_name":"Hall-Gough","city":"Mengxi"},
  {"id":93,"first_name":"Fidel","last_name":"Maisey","city":"Gus’-Khrustal’nyy"},
  {"id":94,"first_name":"Alejandro","last_name":"Devey","city":"Charata"},
  {"id":95,"first_name":"Norina","last_name":"Stoyle","city":"Malaya Dubna"},
  {"id":96,"first_name":"Lari","last_name":"Kiezler","city":"Guaíba"},
  {"id":97,"first_name":"Percival","last_name":"Geffinger","city":"Ngeni"},
  {"id":98,"first_name":"Jo","last_name":"Spoure","city":"Karata"},
  {"id":99,"first_name":"Karlie","last_name":"Gooddy","city":"Pelem"},
  {"id":100,"first_name":"Edmon","last_name":"Alsopp","city":"Sandu"}];
  ///- end collapse -///
  
  return (
    <>
    <Flex height="size-5000" width="100%" direction="column" gap="size-150">
      <ActionButton alignSelf="start">Add</ActionButton>
      <TableView
        flex
        aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {column => (
            <Column
              key={column.id}>
              {column.name}
            </Column>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {item => (
            <Row>
              {columnKey => <Cell>{item[columnKey]}</Cell>}
            </Row>
          )}
        </TableBody>
      </TableView>
    </Flex>
    </>
  );
}

function Example4() {
  return (
    <>
    <TableView aria-label="Example table with static contents">
      <TableHeader>
        <Column isRowHeader>First Name</Column>
        <Column isRowHeader>Last Name</Column>
        <Column align="end">Age</Column>
      </TableHeader>
      <TableBody>
        <Row>
          <Cell>John</Cell>
          <Cell>Doe</Cell>
          <Cell>45</Cell>
        </Row>
        <Row>
          <Cell>Jane</Cell>
          <Cell>Doe</Cell>
          <Cell>37</Cell>
        </Row>
        <Row>
          <Cell>Joe</Cell>
          <Cell>Schmoe</Cell>
          <Cell>67</Cell>
        </Row>
      </TableBody>
    </TableView>
    </>
  );
}

interface Character {
  name: string,
  height: number,
  mass: number,
  birth_year: number
}

function AsyncTable() {
  let columns = [
    {name: 'Name', key: 'name'},
    {name: 'Height', key: 'height'},
    {name: 'Mass', key: 'mass'},
    {name: 'Birth Year', key: 'birth_year'}
  ];

  let list = useAsyncList<Character>({
    async load({signal, cursor}) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, 'https://');
      }

      let res = await fetch(cursor || `https://swapi.py4e.com/api/people/?search=`, {signal});
      let json = await res.json();

      return {
        items: json.results,
        cursor: json.next
      };
    }
  });

  return (
    <TableView aria-label="example async loading table" height="size-3000">
      <TableHeader columns={columns}>
        {(column) => (
          <Column align={column.key !== 'name' ? 'end' : 'start'}>
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody
        items={list.items}
        loadingState={list.loadingState}
        onLoadMore={list.loadMore}>
        {(item) => (
          <Row key={item.name}>{(key) => <Cell>{item[key]}</Cell>}</Row>
        )}
      </TableBody>
    </TableView>
  );
}

function Example6() {
  return (
    <>
    <TableView aria-label="Example table with multiple selection" selectionMode="multiple" defaultSelectedKeys={['2', '4']}>
      <TableHeader>
        <Column>Name</Column>
        <Column>Type</Column>
        <Column align="end">Level</Column>
      </TableHeader>
      <TableBody>
        <Row key="1">
          <Cell>Charizard</Cell>
          <Cell>Fire, Flying</Cell>
          <Cell>67</Cell>
        </Row>
        <Row key="2">
          <Cell>Blastoise</Cell>
          <Cell>Water</Cell>
          <Cell>56</Cell>
        </Row>
        <Row key="3">
          <Cell>Venusaur</Cell>
          <Cell>Grass, Poison</Cell>
          <Cell>83</Cell>
        </Row>
        <Row key="4">
          <Cell>Pikachu</Cell>
          <Cell>Electric</Cell>
          <Cell>100</Cell>
        </Row>
      </TableBody>
    </TableView>
    </>
  );
}

function PokemonTable(props) {
  let columns = [
    {name: 'Name', uid: 'name'},
    {name: 'Type', uid: 'type'},
    {name: 'Level', uid: 'level'}
  ];

  let rows = [
    {id: 1, name: 'Charizard', type: 'Fire, Flying', level: '67'},
    {id: 2, name: 'Blastoise', type: 'Water', level: '56'},
    {id: 3, name: 'Venusaur', type: 'Grass, Poison', level: '83'},
    {id: 4, name: 'Pikachu', type: 'Electric', level: '100'}
  ];

  let [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([2]));

  return (
    <TableView aria-label="Table with controlled selection" selectionMode="multiple" selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys} {...props}>
      <TableHeader columns={columns}>
        {column => (
          <Column key={column.uid} align={column.uid === 'level' ? 'end' : 'start'}>
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={rows}>
        {item => (
          <Row>
            {columnKey => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}

function Example8() {
  // Using the same table as above
  return (
    <>
    <PokemonTable selectionMode="single" />
    </>
  );
}

function Example9() {
  // Using the same table as above
  return (
    <>
    <PokemonTable disallowEmptySelection />
    </>
  );
}

function Example10() {
  // Using the same table as above
  return (
    <>
    <PokemonTable selectionMode="multiple" disabledKeys={[3]} />
    </>
  );
}

function Example11() {
  return (
    <>
    <PokemonTable selectionMode="multiple" selectionStyle="highlight" />
    </>
  );
}

function Example12() {
  return (
    <>
    <Flex direction="column" gap="size-300">
      <PokemonTable aria-label="Pokemon table with row actions and checkbox selection" selectionMode="multiple" onAction={key => alert(`Opening item ${key}...`)} />
      <PokemonTable aria-label="Pokemon table with row actions and highlight selection" selectionMode="multiple" selectionStyle="highlight" onAction={key => alert(`Opening item ${key}...`)} />
    </Flex>
    </>
  );
}

function Example13() {
  return (
    <>
    <TableView aria-label="Bookmarks" selectionMode="multiple">
      <TableHeader>
        <Column>Name</Column>
        <Column>URL</Column>
        <Column>Date added</Column>
      </TableHeader>
      <TableBody>
        <Row href="https://adobe.com/" target="_blank">
          <Cell>Adobe</Cell>
          <Cell>https://adobe.com/</Cell>
          <Cell>January 28, 2023</Cell>
        </Row>
        <Row href="https://google.com/" target="_blank">
          <Cell>Google</Cell>
          <Cell>https://google.com/</Cell>
          <Cell>April 5, 2023</Cell>
        </Row>
        <Row href="https://nytimes.com/" target="_blank">
          <Cell>New York Times</Cell>
          <Cell>https://nytimes.com/</Cell>
          <Cell>July 12, 2023</Cell>
        </Row>
      </TableBody>
    </TableView>
    </>
  );
}

interface Character {
  name: string,
  height: number,
  mass: number,
  birth_year: number
}

function AsyncSortTable() {
  let collator = useCollator({numeric: true});

  let list = useAsyncList<Character>({
    async load({signal}) {
      let res = await fetch(`https://swapi.py4e.com/api/people/?search`, {signal});
      let json = await res.json();
      return {
        items: json.results
      };
    },
    async sort({items, sortDescriptor}) {
      return {
        items: items.sort((a, b) => {
          let first = a[sortDescriptor.column];
          let second = b[sortDescriptor.column];
          let cmp = collator.compare(first, second);
          if (sortDescriptor.direction === 'descending') {
            cmp *= -1;
          }
          return cmp;
        })
      };
    }
  });

  return (
    <TableView aria-label="Example table with client side sorting" sortDescriptor={list.sortDescriptor} onSortChange={list.sort} height="size-3000">
      <TableHeader>
        <Column key="name" allowsSorting>Name</Column>
        <Column key="height" allowsSorting>Height</Column>
        <Column key="mass" allowsSorting>Mass</Column>
        <Column key="birth_year" allowsSorting>Birth Year</Column>
      </TableHeader>
      <TableBody
        items={list.items}
        loadingState={list.loadingState}>
        {item => (
          <Row key={item.name}>
            {columnKey => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}

function Example15() {
  return (
    <>
    <TableView aria-label="Example table for column widths" maxWidth={320}>
      <TableHeader>
        <Column defaultWidth="1fr" align="start">Name</Column>
        <Column maxWidth={80}>Type</Column>
        <Column width={80}>Size</Column>
        <Column minWidth={100} align="end">Date Modified</Column>
      </TableHeader>
      <TableBody>
        <Row>
          <Cell>2021406_Proposal</Cell>
          <Cell>PDF</Cell>
          <Cell>86 KB</Cell>
          <Cell>April 12</Cell>
        </Row>
        <Row>
          <Cell>Budget Template</Cell>
          <Cell>XLS</Cell>
          <Cell>120 KB</Cell>
          <Cell>November 27</Cell>
        </Row>
        <Row>
          <Cell>Onboarding</Cell>
          <Cell>PPT</Cell>
          <Cell>472 KB</Cell>
          <Cell>January 7</Cell>
        </Row>
        <Row>
          <Cell>Welcome</Cell>
          <Cell>TXT</Cell>
          <Cell>24 KB</Cell>
          <Cell>February 11</Cell>
        </Row>
      </TableBody>
    </TableView>
    </>
  );
}

function Example16() {
  return (
    <>
    <TableView
      aria-label="TableView with resizable columns"
      maxWidth={320}
      height={210} >
      <TableHeader>
        {/*- begin highlight -*/}
        <Column key="file" allowsResizing maxWidth={500}>File Name</Column>
        <Column key="size" width={80}>Size</Column>
        <Column key="date" allowsResizing minWidth={100}>Date Modified</Column>
        {/*- end highlight -*/}
      </TableHeader>
      <TableBody>
        <Row>
          <Cell>2022-Roadmap-Proposal-Revision-012822-Copy(2)</Cell>
          <Cell>214 KB</Cell>
          <Cell>November 27, 2022 at 4:56PM</Cell>
        </Row>
        <Row>
          <Cell>62259692_p0_master1200</Cell>
          <Cell>120 KB</Cell>
          <Cell>January 27, 2021 at 1:56AM</Cell>
        </Row>
        <Row>
          <Cell colSpan={3}>Total space: 334 KB</Cell>
        </Row>
      </TableBody>
    </TableView>
    </>
  );
}

let items = [
  {id: '1', file: '2022-Roadmap-Proposal-Revision-012822-Copy(2)', size: '214 KB', date: 'November 27, 2022 at 4:56PM'},
  {id: '2', file: '62259692_p0_master1200', size: '120 KB', date: 'January 27, 2021 at 1:56AM'}
];

let columnsData = [
  {name: 'File Name', id: 'file', width: '1fr'},
  {name: 'Size', id: 'size', width: 80},
  {name: 'Date', id: 'date', width: 100}
];

function ResizableTable() {
  /*- begin highlight -*/
  let [columns, setColumns] = React.useState(() => {
    let localStorageWidths = localStorage.getItem('RSPWidths');
    if (localStorageWidths) {
      let widths = JSON.parse(localStorageWidths);
      return columnsData.map(col => ({...col, width: widths[col.id]}));
    } else {
      return columnsData;
    }
  });

  let onResize = (widths) => {
    setColumns(columns => columns.map(col => ({...col, width: widths.get(col.id)})));
  };

  let onResizeEnd = (widths) => {
    localStorage.setItem('RSPWidths', JSON.stringify(Object.fromEntries(widths)));
  };
  /*- end highlight -*/

  return (
    <TableView
      /*- begin highlight -*/
      onResize={onResize}
      onResizeEnd={onResizeEnd}
      /*- end highlight -*/
      aria-label="TableView with controlled, resizable columns saved in local storage"
      maxWidth={320}
      height={200} >
      <TableHeader columns={columns}>
        {(column) => {
          const {name, id, width} = column;
          return <Column allowsResizing key={id} width={width}>{name}</Column>;
        }}
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <Row key={item.id}>{(key) => <Cell>{item[key]}</Cell>}</Row>
        )}
      </TableBody>
    </TableView>
  );
}

<ResizableTable />

function Example18() {
  return (
    <>
    <TableView aria-label="Example table for column alignment">
      <TableHeader>
        <Column align="start">Name</Column>
        <Column align="center">Type</Column>
        <Column align="end">Size</Column>
      </TableHeader>
      <TableBody>
        <Row>
          <Cell>2021406_Proposal</Cell>
          <Cell>PDF</Cell>
          <Cell>86 KB</Cell>
        </Row>
        <Row>
          <Cell>Budget Template</Cell>
          <Cell>XLS</Cell>
          <Cell>120 KB</Cell>
        </Row>
        <Row>
          <Cell>Onboarding</Cell>
          <Cell>PPT</Cell>
          <Cell>472 KB</Cell>
        </Row>
        <Row>
          <Cell>Welcome</Cell>
          <Cell>TXT</Cell>
          <Cell>24 KB</Cell>
        </Row>
      </TableBody>
    </TableView>
    </>
  );
}

function Example19() {
  return (
    <>
    <TableView aria-label="Example table for column dividers">
      <TableHeader>
        <Column align="start" showDivider>Name</Column>
        <Column showDivider>Type</Column>
        <Column align="end" showDivider>Size</Column>
      </TableHeader>
      <TableBody>
        <Row>
          <Cell>2021406_Proposal</Cell>
          <Cell>PDF</Cell>
          <Cell>86 KB</Cell>
        </Row>
        <Row>
          <Cell>Budget Template</Cell>
          <Cell>XLS</Cell>
          <Cell>120 KB</Cell>
        </Row>
        <Row>
          <Cell>Onboarding</Cell>
          <Cell>PPT</Cell>
          <Cell>472 KB</Cell>
        </Row>
        <Row>
          <Cell>Welcome</Cell>
          <Cell>TXT</Cell>
          <Cell>24 KB</Cell>
        </Row>
      </TableBody>
    </TableView>
    </>
  );
}

function TableExample(props) {
  let columns = [
    {name: 'First Name', key: 'firstName'},
    {name: 'Last Name', key: 'lastName'},
    {name: 'Add Info', key: 'addInfo'},
    {name: 'Age', key: 'age'}
  ];

  let rows = [
    {id: '1', firstName: 'John', lastName: 'Doe', age: '45'},
    {id: '2', firstName: 'Jane', lastName: 'Doe', age: '37'},
    {id: '3', firstName: 'Joe', lastName: 'Schmoe', age: '67'},
    {id: '4', firstName: 'Joe', lastName: 'Bloggs', age: '12'},
    {id: '5', firstName: 'Taylor', lastName: 'Rodriguez Lloyd-Atkinson', age: '83'}
  ];

  return (
    <TableView aria-label="Example table with hidden headers" maxWidth="size-6000" {...props}>
      <TableHeader columns={columns}>
        {column => (
          <Column
            hideHeader={column.key === 'addInfo'}
            align={column.key === 'age' ? 'end' : 'start'}
            showDivider={column.key === 'addInfo'}>
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={rows}>
        {item =>
          (<Row key={item.id}>
            {key =>
              key === 'addInfo'
              ? <Cell><ActionButton aria-label="Add Info" isQuiet><Add /></ActionButton></Cell>
              : <Cell>{item[key]}</Cell>
            }
          </Row>)
        }
      </TableBody>
    </TableView>
  );
}

function Example21() {
  // Using same setup as hide header example
  return (
    <>
    <TableExample isQuiet />
    </>
  );
}

function Example22() {
  // Using same setup as hide header example
  return (
    <>
    <Flex direction="column" gap="size-300">
      <TableExample density="compact" />
      <TableExample density="spacious" />
    </Flex>
    </>
  );
}

function Example23() {
  // Using same setup as hide header example
  return (
    <>
    <TableExample overflowMode="wrap" />
    </>
  );
}

function renderEmptyState() {
  return (
    <IllustratedMessage>
      <NotFound />
      <Heading>No results</Heading>
      <Content>No results found</Content>
    </IllustratedMessage>
  );
}

<TableView aria-label="Example table for empty state" height="size-3000" renderEmptyState={renderEmptyState}>
  <TableHeader>
    <Column>Name</Column>
    <Column>Type</Column>
    <Column>Size</Column>
  </TableHeader>
  <TableBody>
    {[]}
  </TableBody>
</TableView>

function Example25() {
  return (
    <>
    <TableView aria-label="Example table for nested columns">
      <TableHeader>
        <Column title="Name">
          <Column isRowHeader>First Name</Column>
          <Column isRowHeader>Last Name</Column>
        </Column>
        <Column title="Information">
          <Column>Age</Column>
          <Column>Birthday</Column>
        </Column>
      </TableHeader>
      <TableBody>
        <Row>
          <Cell>Sam</Cell>
          <Cell>Smith</Cell>
          <Cell>36</Cell>
          <Cell>May 3</Cell>
        </Row>
        <Row>
          <Cell>Julia</Cell>
          <Cell>Jones</Cell>
          <Cell>24</Cell>
          <Cell>February 10</Cell>
        </Row>
        <Row>
          <Cell>Peter</Cell>
          <Cell>Parker</Cell>
          <Cell>28</Cell>
          <Cell>September 7</Cell>
        </Row>
        <Row>
          <Cell>Bruce</Cell>
          <Cell>Wayne</Cell>
          <Cell>32</Cell>
          <Cell>December 18</Cell>
        </Row>
      </TableBody>
    </TableView>
    </>
  );
}

function Example26() {
  interface ColumnDefinition {
    name: string,
    key: string,
    children?: ColumnDefinition[],
    isRowHeader?: boolean
  }
  
  let columns: ColumnDefinition[] = [
    {name: 'Name', key: 'name', children: [
      {name: 'First Name', key: 'first', isRowHeader: true},
      {name: 'Last Name', key: 'last', isRowHeader: true}
    ]},
    {name: 'Information', key: 'info', children: [
      {name: 'Age', key: 'age'},
      {name: 'Birthday', key: 'birthday'}
    ]}
  ];
  
  let rows = [
    {id: 1, first: 'Sam', last: 'Smith', age: 36, birthday: 'May 3'},
    {id: 2, first: 'Julia', last: 'Jones', age: 24, birthday: 'February 10'},
    {id: 3, first: 'Peter', last: 'Parker', age: 28, birthday: 'September 7'},
    {id: 4, first: 'Bruce', last: 'Wayne', age: 32, birthday: 'December 18'}
  ];
  
  return (
    <>
    <TableView aria-label="Example table for nested columns">
      <TableHeader columns={columns}>
        {column => (
          <Column isRowHeader={column.isRowHeader} childColumns={column.children}>
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={rows}>
        {item => (
          <Row>
            {columnKey => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
    </>
  );
}

export const demos = {
  "example-1": Example1,
  "content-1": Example2,
  "content-2": Example3,
  "labeling-1": Example4,
  "asynchronous-loading-1": AsyncTable,
  "selection-1": Example6,
  "selection-2": PokemonTable,
  "selection-3": Example8,
  "selection-4": Example9,
  "selection-5": Example10,
  "selection-6": Example11,
  "row-actions-1": Example12,
  "row-actions-2": Example13,
  "sorting-1": AsyncSortTable,
  "column-widths-1": Example15,
  "column-resizing-1": Example16,
  "column-resizing-2": ResizableTable,
  "visual-options-1": Example18,
  "visual-options-2": Example19,
  "visual-options-3": TableExample,
  "visual-options-4": Example21,
  "visual-options-5": Example22,
  "visual-options-6": Example23,
  "visual-options-7": renderEmptyState,
  "visual-options-8": Example25,
  "visual-options-9": Example26,
};
export const skipped: Record<string, { code: string; detail: string }> = {
  "drag-and-drop-1": { code: "not-an-example", detail: "공식 문서가 이 코드 조각을 그리지 않고 코드로만 보여 줘요(render=false)." },
  "drag-and-drop-2": { code: "other", detail: "\uacf5\uc2dd \ud39c\uc2a4\uac00 \ubb38\uc11c \uc0ac\uc774\ud2b8 \uc2a4\ucf54\ud504\uc5d0 \uae30\ub300\uc694 \u2014 \uc6b0\ub9ac \uc124\uce58\ubcf8\uc5d0 \uc5c6\ub294 \uc774\ub984: DragIntoTable" },
  "drag-and-drop-3": { code: "not-an-example", detail: "공식 문서가 이 코드 조각을 그리지 않고 코드로만 보여 줘요(render=false)." },
  "drag-and-drop-4": { code: "other", detail: "\uacf5\uc2dd \ud39c\uc2a4\uac00 \ubb38\uc11c \uc0ac\uc774\ud2b8 \uc2a4\ucf54\ud504\uc5d0 \uae30\ub300\uc694 \u2014 \uc6b0\ub9ac \uc124\uce58\ubcf8\uc5d0 \uc5c6\ub294 \uc774\ub984: DragIntoTableFolder" },
  "drag-and-drop-5": { code: "not-an-example", detail: "공식 문서가 이 코드 조각을 그리지 않고 코드로만 보여 줘요(render=false)." },
  "drag-and-drop-6": { code: "other", detail: "\uacf5\uc2dd \ud39c\uc2a4\uac00 \ubb38\uc11c \uc0ac\uc774\ud2b8 \uc2a4\ucf54\ud504\uc5d0 \uae30\ub300\uc694 \u2014 \uc6b0\ub9ac \uc124\uce58\ubcf8\uc5d0 \uc5c6\ub294 \uc774\ub984: ReorderableTable" },
  "drag-and-drop-7": { code: "not-an-example", detail: "공식 문서가 이 코드 조각을 그리지 않고 코드로만 보여 줘요(render=false)." },
  "drag-and-drop-8": { code: "other", detail: "\uacf5\uc2dd \ud39c\uc2a4\uac00 \ubb38\uc11c \uc0ac\uc774\ud2b8 \uc2a4\ucf54\ud504\uc5d0 \uae30\ub300\uc694 \u2014 \uc6b0\ub9ac \uc124\uce58\ubcf8\uc5d0 \uc5c6\ub294 \uc774\ub984: DragBetweenTablesExample" },
  "drag-and-drop-9": { code: "not-an-example", detail: "공식 문서가 이 코드 조각을 그리지 않고 코드로만 보여 줘요(render=false)." },
  "drag-and-drop-10": { code: "other", detail: "\uacf5\uc2dd \ud39c\uc2a4\uac00 \ubb38\uc11c \uc0ac\uc774\ud2b8 \uc2a4\ucf54\ud504\uc5d0 \uae30\ub300\uc694 \u2014 \uc6b0\ub9ac \uc124\uce58\ubcf8\uc5d0 \uc5c6\ub294 \uc774\ub984: DragIntoTablesDefaultCopy" },
  "drag-and-drop-11": { code: "not-an-example", detail: "공식 문서가 이 코드 조각을 그리지 않고 코드로만 보여 줘요(render=false)." },
  "drag-and-drop-12": { code: "other", detail: "\uacf5\uc2dd \ud39c\uc2a4\uac00 \ubb38\uc11c \uc0ac\uc774\ud2b8 \uc2a4\ucf54\ud504\uc5d0 \uae30\ub300\uc694 \u2014 \uc6b0\ub9ac \uc124\uce58\ubcf8\uc5d0 \uc5c6\ub294 \uc774\ub984: CustomDragPreviewExample" },
};
