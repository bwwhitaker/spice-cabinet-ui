import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Multiselect } from 'multiselect-react-dropdown';
import { InputGroup } from 'react-bootstrap';
import './Searchbar.css';

export default (class SpiceSearchBar extends Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
    this.multiselectRef = React.createRef();
    this.state = {
      spice_search: [
        {
          id: '1',
          name: 'Abelmosk',
        },
        {
          id: '2',
          name: 'Absinthe',
        },
        {
          id: '3',
          name: 'Acuyo',
        },
        {
          id: '4',
          name: 'Ajwain',
        },
        {
          id: '5',
          name: 'Akudjura',
        },
        {
          id: '6',
          name: 'Alexanders',
        },
        {
          id: '7',
          name: 'Alkanet',
        },
        {
          id: '8',
          name: 'Allspice',
        },
        {
          id: '9',
          name: 'Angelica',
        },
        {
          id: '10',
          name: 'Anise',
        },
        {
          id: '11',
          name: 'Aniseed myrtle',
        },
        {
          id: '12',
          name: 'Annatto',
        },
        {
          id: '13',
          name: 'Artemisia',
        },
        {
          id: '14',
          name: 'Asafoetida',
        },
        {
          id: '15',
          name: 'Avens',
        },
        {
          id: '16',
          name: 'Avocado leaf',
        },
        {
          id: '17',
          name: 'Badi ilaichi',
        },
        {
          id: '18',
          name: 'Barberry',
        },
        {
          id: '19',
          name: 'Basil, Holy',
        },
        {
          id: '20',
          name: 'Basil, lemon',
        },
        {
          id: '21',
          name: 'Basil, sweet',
        },
        {
          id: '22',
          name: 'Basil, Thai',
        },
        {
          id: '23',
          name: 'Bay leaf',
        },
        {
          id: '24',
          name: 'Black Sesame Seed',
        },
        {
          id: '25',
          name: 'Blue fenugreek',
        },
        {
          id: '26',
          name: 'Blue melilot',
        },
        {
          id: '27',
          name: 'Boldo',
        },
        {
          id: '28',
          name: 'Borage',
        },
        {
          id: '29',
          name: 'Bunga siantan',
        },
        {
          id: '30',
          name: 'California bay laurel',
        },
        {
          id: '31',
          name: 'Cao guo',
        },
        {
          id: '32',
          name: 'Caper',
        },
        {
          id: '33',
          name: 'Caraway',
        },
        {
          id: '34',
          name: 'Caraway, black',
        },
        {
          id: '35',
          name: 'Cardamom',
        },
        {
          id: '36',
          name: 'Cardamom, black',
        },
        {
          id: '37',
          name: 'carom seeds',
        },
        {
          id: '38',
          name: 'Cassia',
        },
        {
          id: '39',
          name: 'Catnip',
        },
        {
          id: '40',
          name: 'Celery leaf',
        },
        {
          id: '41',
          name: 'Celery seed',
        },
        {
          id: '42',
          name: 'Chervil',
        },
        {
          id: '43',
          name: 'Chicory',
        },
        {
          id: '44',
          name: 'Chile, Anaheim',
        },
        {
          id: '45',
          name: 'Chile, Big Jim',
        },
        {
          id: '46',
          name: 'Chile, Chimayó',
        },
        {
          id: '47',
          name: 'Chile, Hatch',
        },
        {
          id: '48',
          name: 'Chile, New Mexico',
        },
        {
          id: '49',
          name: 'Chile, Sandia',
        },
        {
          id: '50',
          name: 'Chinese black cardamom',
        },
        {
          id: '51',
          name: 'Chinese parsley',
        },
        {
          id: '52',
          name: 'Chives',
        },
        {
          id: '53',
          name: 'Cicely',
        },
        {
          id: '54',
          name: 'Cichοrium spinosum',
        },
        {
          id: '55',
          name: 'Cilantro',
        },
        {
          id: '56',
          name: 'Cinnamon',
        },
        {
          id: '57',
          name: 'Cinnamon myrtle',
        },
        {
          id: '58',
          name: 'Cinnamon, Ceylon',
        },
        {
          id: '59',
          name: 'Cinnamon, Indonesian',
        },
        {
          id: '60',
          name: 'Cinnamon, Saigon or Vietnamese',
        },
        {
          id: '61',
          name: 'Cinnamon, white',
        },
        {
          id: '62',
          name: 'Clary',
        },
        {
          id: '63',
          name: 'Clary sage',
        },
        {
          id: '64',
          name: 'Clove',
        },
        {
          id: '65',
          name: 'Coriander greens',
        },
        {
          id: '66',
          name: 'Coriander herb',
        },
        {
          id: '67',
          name: 'Coriander seed',
        },
        {
          id: '68',
          name: 'Coriander, Vietnamese',
        },
        {
          id: '69',
          name: 'Cornish pepper leaf',
        },
        {
          id: '70',
          name: 'Costmary',
        },
        {
          id: '71',
          name: 'Cudweed',
        },
        {
          id: '72',
          name: 'Culangot',
        },
        {
          id: '73',
          name: 'Culantro',
        },
        {
          id: '74',
          name: 'Cumin',
        },
        {
          id: '75',
          name: 'Cumin, black',
        },
        {
          id: '76',
          name: 'Curry leaf',
        },
        {
          id: '77',
          name: 'Curry plant',
        },
        {
          id: '78',
          name: 'Daun salam',
        },
        {
          id: '79',
          name: 'Deulkkae',
        },
        {
          id: '80',
          name: 'Dill seed',
        },
        {
          id: '81',
          name: 'Dill herb or weed',
        },
        {
          id: '82',
          name: 'Djansang',
        },
        {
          id: '83',
          name: 'Elderflower',
        },
        {
          id: '84',
          name: 'Epazote',
        },
        {
          id: '85',
          name: 'Ethiopian cardamom',
        },
        {
          id: '86',
          name: 'False cardamom',
        },
        {
          id: '87',
          name: 'Fennel',
        },
        {
          id: '88',
          name: 'Fenugreek',
        },
        {
          id: '89',
          name: 'Filé powder',
        },
        {
          id: '90',
          name: 'Fingerroot',
        },
        {
          id: '91',
          name: 'Galangal',
        },
        {
          id: '92',
          name: 'Galangal, greater',
        },
        {
          id: '93',
          name: 'Galangal, lesser',
        },
        {
          id: '94',
          name: 'Galingale',
        },
        {
          id: '95',
          name: 'Garlic chives',
        },
        {
          id: '96',
          name: 'Garlic',
        },
        {
          id: '97',
          name: 'Ginger',
        },
        {
          id: '98',
          name: 'Golpar',
        },
        {
          id: '99',
          name: 'Grains of paradise',
        },
        {
          id: '100',
          name: 'Grains of Selim',
        },
        {
          id: '101',
          name: 'Gumbo filé',
        },
        {
          id: '102',
          name: 'Herb bennet',
        },
        {
          id: '103',
          name: 'Hierba santa',
        },
        {
          id: '104',
          name: 'Hoja santa',
        },
        {
          id: '105',
          name: 'Horseradish',
        },
        {
          id: '106',
          name: 'Houttuynia cordata',
        },
        {
          id: '107',
          name: 'Huacatay',
        },
        {
          id: '108',
          name: 'Hyssop',
        },
        {
          id: '109',
          name: 'Indian Bay leaf',
        },
        {
          id: '110',
          name: 'Indonesian bay leaf',
        },
        {
          id: '111',
          name: 'Jakhya',
        },
        {
          id: '112',
          name: 'Jalapeño',
        },
        {
          id: '113',
          name: 'Jasmine flowers',
        },
        {
          id: '114',
          name: 'Jiaogulan',
        },
        {
          id: '115',
          name: 'Jimbu',
        },
        {
          id: '116',
          name: 'Juniper berry',
        },
        {
          id: '117',
          name: 'Kaffir lime leaves',
        },
        {
          id: '118',
          name: 'Kala zeera',
        },
        {
          id: '119',
          name: 'Kalonji',
        },
        {
          id: '120',
          name: 'Kawakawa seeds',
        },
        {
          id: '121',
          name: "K'cheay",
        },
        {
          id: '122',
          name: 'Keluak',
        },
        {
          id: '123',
          name: 'Kencur',
        },
        {
          id: '124',
          name: 'Kentjur',
        },
        {
          id: '125',
          name: 'Kepayang',
        },
        {
          id: '126',
          name: 'Kewra',
        },
        {
          id: '127',
          name: 'Kinh gioi',
        },
        {
          id: '128',
          name: 'Kkaennip',
        },
        {
          id: '129',
          name: 'Kluwak',
        },
        {
          id: '130',
          name: 'Kokam seed',
        },
        {
          id: '131',
          name: 'Korarima',
        },
        {
          id: '132',
          name: 'Koseret leaves',
        },
        {
          id: '133',
          name: 'Krachai',
        },
        {
          id: '134',
          name: 'Kudum Puli',
        },
        {
          id: '135',
          name: 'Laser',
        },
        {
          id: '136',
          name: 'Laserpicium',
        },
        {
          id: '137',
          name: 'Lavender',
        },
        {
          id: '138',
          name: 'Lemon balm',
        },
        {
          id: '139',
          name: 'Lemon ironbark',
        },
        {
          id: '140',
          name: 'Lemon myrtle',
        },
        {
          id: '141',
          name: 'Lemon verbena',
        },
        {
          id: '142',
          name: 'Lemongrass',
        },
        {
          id: '143',
          name: 'Leptotes bicolor',
        },
        {
          id: '144',
          name: 'Lesser calamint',
        },
        {
          id: '145',
          name: 'Licorice',
        },
        {
          id: '146',
          name: 'Lime flower',
        },
        {
          id: '147',
          name: 'Linden flower',
        },
        {
          id: '148',
          name: 'Liquorice',
        },
        {
          id: '149',
          name: 'Locust beans',
        },
        {
          id: '150',
          name: 'Long coriander',
        },
        {
          id: '151',
          name: 'Lovage',
        },
        {
          id: '152',
          name: 'Mace',
        },
        {
          id: '153',
          name: 'Mahalepi',
        },
        {
          id: '154',
          name: 'Mahleb',
        },
        {
          id: '155',
          name: 'Makrud lime leaves',
        },
        {
          id: '156',
          name: 'Malabathrum',
        },
        {
          id: '157',
          name: 'Marjoram',
        },
        {
          id: '158',
          name: 'Mastic',
        },
        {
          id: '159',
          name: 'Mbongo spice',
        },
        {
          id: '160',
          name: 'Mexican marigold',
        },
        {
          id: '161',
          name: 'Mint',
        },
        {
          id: '162',
          name: 'Mint marigold',
        },
        {
          id: '163',
          name: 'Mountain horopito',
        },
        {
          id: '164',
          name: 'Musk mallow',
        },
        {
          id: '165',
          name: 'Mustard plant, black',
        },
        {
          id: '166',
          name: 'Mustard plant, brown',
        },
        {
          id: '167',
          name: 'Mustard plant, white',
        },
        {
          id: '168',
          name: 'Mustard seed, black',
        },
        {
          id: '169',
          name: 'Mustard seed, brown',
        },
        {
          id: '170',
          name: 'Mustard seed, white',
        },
        {
          id: '171',
          name: 'Mustard,  black',
        },
        {
          id: '172',
          name: 'Mustard,  brown',
        },
        {
          id: '173',
          name: 'Mustard,  white',
        },
        {
          id: '174',
          name: 'Mustard,  yellow',
        },
        {
          id: '175',
          name: 'Nigella',
        },
        {
          id: '176',
          name: 'Njangsa',
        },
        {
          id: '177',
          name: 'Nutmeg',
        },
        {
          id: '178',
          name: 'Olida',
        },
        {
          id: '179',
          name: 'Onion seed, black',
        },
        {
          id: '180',
          name: 'Oregano',
        },
        {
          id: '181',
          name: 'Oregano, Cuban',
        },
        {
          id: '182',
          name: 'Oregano, Mexican',
        },
        {
          id: '183',
          name: 'Orris root',
        },
        {
          id: '184',
          name: 'Pandan flower',
        },
        {
          id: '185',
          name: 'Pandan leaf',
        },
        {
          id: '186',
          name: 'Pápalo',
        },
        {
          id: '187',
          name: 'Paprika',
        },
        {
          id: '188',
          name: 'Paracress',
        },
        {
          id: '189',
          name: 'Parsley',
        },
        {
          id: '190',
          name: 'Pennyroyal',
        },
        {
          id: '191',
          name: 'Pepper, Alligator',
        },
        {
          id: '192',
          name: 'Pepper, black',
        },
        {
          id: '193',
          name: 'Pepper, Brazilian',
        },
        {
          id: '194',
          name: 'Pepper, Cayenne',
        },
        {
          id: '195',
          name: 'Pepper, Chili',
        },
        {
          id: '196',
          name: 'Pepper, Cubeb',
        },
        {
          id: '197',
          name: 'Pepper, Dorrigo',
        },
        {
          id: '198',
          name: 'Pepper, green',
        },
        {
          id: '199',
          name: 'Pepper, Hepper',
        },
        {
          id: '200',
          name: 'Pepper, Kani',
        },
        {
          id: '201',
          name: 'Pepper, long',
        },
        {
          id: '202',
          name: 'Pepper, mountain',
        },
        {
          id: '203',
          name: 'Pepper, Peruvian',
        },
        {
          id: '204',
          name: 'Pepper, pink',
        },
        {
          id: '205',
          name: 'Pepper, Sichuan',
        },
        {
          id: '206',
          name: 'Pepper, Szechuan',
        },
        {
          id: '207',
          name: 'Pepper, Tasmanian',
        },
        {
          id: '208',
          name: 'Pepper, white',
        },
        {
          id: '209',
          name: 'Peppermint gum leaf',
        },
        {
          id: '210',
          name: 'Peppermint',
        },
        {
          id: '211',
          name: 'Perilla',
        },
        {
          id: '212',
          name: 'Persian hogweed',
        },
        {
          id: '213',
          name: 'Pipicha',
        },
        {
          id: '214',
          name: 'Poppy seed',
        },
        {
          id: '215',
          name: 'Purslane',
        },
        {
          id: '216',
          name: 'Quassia',
        },
        {
          id: '217',
          name: 'Recao',
        },
        {
          id: '218',
          name: 'Red rice powder',
        },
        {
          id: '219',
          name: 'Rice paddy herb',
        },
        {
          id: '220',
          name: 'Rosemary',
        },
        {
          id: '221',
          name: 'Rue',
        },
        {
          id: '222',
          name: 'Safflower',
        },
        {
          id: '223',
          name: 'Saffron',
        },
        {
          id: '224',
          name: 'Sage',
        },
        {
          id: '225',
          name: 'Salad burnet',
        },
        {
          id: '226',
          name: 'Salep',
        },
        {
          id: '227',
          name: 'Sassafras',
        },
        {
          id: '228',
          name: 'Savory, summer',
        },
        {
          id: '229',
          name: 'Savory, winter',
        },
        {
          id: '230',
          name: 'Screwpine',
        },
        {
          id: '231',
          name: 'Sesame Seed',
        },
        {
          id: '232',
          name: 'Shiso',
        },
        {
          id: '233',
          name: 'Silphion',
        },
        {
          id: '234',
          name: 'Silphium',
        },
        {
          id: '235',
          name: 'Smartweed',
        },
        {
          id: '236',
          name: 'Sorado',
        },
        {
          id: '237',
          name: 'Sorrel',
        },
        {
          id: '238',
          name: 'Sorrel, sheep',
        },
        {
          id: '239',
          name: 'Spearmint',
        },
        {
          id: '240',
          name: 'Spikenard',
        },
        {
          id: '241',
          name: 'St. Lucie cherry',
        },
        {
          id: '242',
          name: 'Star anise',
        },
        {
          id: '243',
          name: 'Straight-leaf pápalo',
        },
        {
          id: '244',
          name: 'Sumac',
        },
        {
          id: '245',
          name: 'Sweet cicely',
        },
        {
          id: '246',
          name: 'Sweet woodruff',
        },
        {
          id: '247',
          name: 'Tarragon',
        },
        {
          id: '248',
          name: 'Tejpat',
        },
        {
          id: '249',
          name: 'Temu kuntji',
        },
        {
          id: '250',
          name: 'Thyme',
        },
        {
          id: '251',
          name: 'Thyme, lemon',
        },
        {
          id: '252',
          name: 'Torch',
        },
        {
          id: '253',
          name: 'Turmeric',
        },
        {
          id: '254',
          name: 'Vanilla',
        },
        {
          id: '255',
          name: 'Vietnamese balm',
        },
        {
          id: '256',
          name: 'Voatsiperifery',
        },
        {
          id: '257',
          name: 'Wasabi',
        },
        {
          id: '258',
          name: 'Watercress',
        },
        {
          id: '259',
          name: 'Water-pepper',
        },
        {
          id: '260',
          name: 'Wattleseed',
        },
        {
          id: '261',
          name: 'Wild thyme',
        },
        {
          id: '262',
          name: 'Willow herb',
        },
        {
          id: '263',
          name: 'Wintergreen',
        },
        {
          id: '264',
          name: 'Wood avens',
        },
        {
          id: '265',
          name: 'Woodruff',
        },
        {
          id: '266',
          name: 'Wormwood',
        },
        {
          id: '267',
          name: 'Yarrow',
        },
        {
          id: '268',
          name: 'Yerba buena',
        },
        {
          id: '269',
          name: "Za'atar",
        },
        {
          id: '270',
          name: 'Zedoary',
        },
      ],
      selectedValues: [],
    };
  }

  onSelect() {
    var dumb = this.multiselectRef.current.state.selectedValues;
    console.log(dumb);
  }

  render() {
    return (
      <Col>
        <Form>
          <InputGroup className="SearchField">
            <InputGroup.Prepend>
              <Multiselect
                placeholder="Search by Spices"
                options={this.state.spice_search}
                displayValue="name"
                avoidHighlightFirstOption={true}
                closeOnSelect={false}
                hidePlaceholder={true}
                ref={this.multiselectRef}
                onSelect={this.onSelect}
                onRemove={this.onRemove}
                style={{
                  searchBox: {
                    width: '90vw',
                  },
                }}
              />
            </InputGroup.Prepend>
            <InputGroup.Append>
              <Button>Go!</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
        <p>{this.state.getSelectedItems}</p>
      </Col>
    );
  }
});
