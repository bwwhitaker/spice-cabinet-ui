import React, { useEffect, useState } from 'react';
import MultiSelect from 'react-multi-select-component';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ReactTimeout from 'react-timeout';
import { Link } from 'react-router-dom';

function SpiceSearch(props) {
  const spice_search_options = [
    {
      ID: 'A',
      label: 'Water',
      value: 'Water',
    },
    {
      ID: 'B',
      label: 'Ice',
      value: 'Ice',
    },
    {
      ID: '1',
      label: 'Abelmosk',
      value: 'Abelmosk',
    },
    {
      ID: '2',
      label: 'Absinthe',
      value: 'Absinthe',
    },
    {
      ID: '3',
      label: 'Acuyo',
      value: 'Acuyo',
    },
    {
      ID: '4',
      label: 'Ajwain',
      value: 'Ajwain',
    },
    {
      ID: '5',
      label: 'Akudjura',
      value: 'Akudjura',
    },
    {
      ID: '6',
      label: 'Alexanders',
      value: 'Alexanders',
    },
    {
      ID: '7',
      label: 'Alkanet',
      value: 'Alkanet',
    },
    {
      ID: '8',
      label: 'Allspice',
      value: 'Allspice',
    },
    {
      ID: '9',
      label: 'Angelica',
      value: 'Angelica',
    },
    {
      ID: '10',
      label: 'Anise',
      value: 'Anise',
    },
    {
      ID: '11',
      label: 'Aniseed myrtle',
      value: 'Aniseed myrtle',
    },
    {
      ID: '12',
      label: 'Annatto',
      value: 'Annatto',
    },
    {
      ID: '13',
      label: 'Artemisia',
      value: 'Artemisia',
    },
    {
      ID: '14',
      label: 'Asafoetida',
      value: 'Asafoetida',
    },
    {
      ID: '15',
      label: 'Avens',
      value: 'Avens',
    },
    {
      ID: '16',
      label: 'Avocado leaf',
      value: 'Avocado leaf',
    },
    {
      ID: '17',
      label: 'Badi ilaichi',
      value: 'Badi ilaichi',
    },
    {
      ID: '18',
      label: 'Barberry',
      value: 'Barberry',
    },
    {
      ID: '19',
      label: 'Basil, Holy',
      value: 'Basil, Holy',
    },
    {
      ID: '20',
      label: 'Basil, lemon',
      value: 'Basil, lemon',
    },
    {
      ID: '21',
      label: 'Basil, sweet',
      value: 'Basil, sweet',
    },
    {
      ID: '22',
      label: 'Basil, Thai',
      value: 'Basil, Thai',
    },
    {
      ID: '23',
      label: 'Bay leaf',
      value: 'Bay leaf',
    },
    {
      ID: '24',
      label: 'Black Sesame Seed',
      value: 'Black Sesame Seed',
    },
    {
      ID: '25',
      label: 'Blue fenugreek',
      value: 'Blue fenugreek',
    },
    {
      ID: '26',
      label: 'Blue melilot',
      value: 'Blue melilot',
    },
    {
      ID: '27',
      label: 'Boldo',
      value: 'Boldo',
    },
    {
      ID: '28',
      label: 'Borage',
      value: 'Borage',
    },
    {
      ID: '29',
      label: 'Bunga siantan',
      value: 'Bunga siantan',
    },
    {
      ID: '30',
      label: 'California bay laurel',
      value: 'California bay laurel',
    },
    {
      ID: '31',
      label: 'Cao guo',
      value: 'Cao guo',
    },
    {
      ID: '32',
      label: 'Caper',
      value: 'Caper',
    },
    {
      ID: '33',
      label: 'Caraway',
      value: 'Caraway',
    },
    {
      ID: '34',
      label: 'Caraway, black',
      value: 'Caraway, black',
    },
    {
      ID: '35',
      label: 'Cardamom',
      value: 'Cardamom',
    },
    {
      ID: '36',
      label: 'Cardamom, black',
      value: 'Cardamom, black',
    },
    {
      ID: '37',
      label: 'carom seeds',
      value: 'carom seeds',
    },
    {
      ID: '38',
      label: 'Cassia',
      value: 'Cassia',
    },
    {
      ID: '39',
      label: 'Catnip',
      value: 'Catnip',
    },
    {
      ID: '40',
      label: 'Celery leaf',
      value: 'Celery leaf',
    },
    {
      ID: '41',
      label: 'Celery seed',
      value: 'Celery seed',
    },
    {
      ID: '42',
      label: 'Chervil',
      value: 'Chervil',
    },
    {
      ID: '43',
      label: 'Chicory',
      value: 'Chicory',
    },
    {
      ID: '44',
      label: 'Chile, Anaheim',
      value: 'Chile, Anaheim',
    },
    {
      ID: '45',
      label: 'Chile, Big Jim',
      value: 'Chile, Big Jim',
    },
    {
      ID: '46',
      label: 'Chile, Chimayó',
      value: 'Chile, Chimayó',
    },
    {
      ID: '47',
      label: 'Chile, Hatch',
      value: 'Chile, Hatch',
    },
    {
      ID: '48',
      label: 'Chile, New Mexico',
      value: 'Chile, New Mexico',
    },
    {
      ID: '49',
      label: 'Chile, Sandia',
      value: 'Chile, Sandia',
    },
    {
      ID: '50',
      label: 'Chinese black cardamom',
      value: 'Chinese black cardamom',
    },
    {
      ID: '51',
      label: 'Chinese parsley',
      value: 'Chinese parsley',
    },
    {
      ID: '52',
      label: 'Chives',
      value: 'Chives',
    },
    {
      ID: '53',
      label: 'Cicely',
      value: 'Cicely',
    },
    {
      ID: '54',
      label: 'Cichοrium spinosum',
      value: 'Cichοrium spinosum',
    },
    {
      ID: '55',
      label: 'Cilantro',
      value: 'Cilantro',
    },
    {
      ID: '56',
      label: 'Cinnamon',
      value: 'Cinnamon',
    },
    {
      ID: '57',
      label: 'Cinnamon myrtle',
      value: 'Cinnamon myrtle',
    },
    {
      ID: '58',
      label: 'Cinnamon, Ceylon',
      value: 'Cinnamon, Ceylon',
    },
    {
      ID: '59',
      label: 'Cinnamon, Indonesian',
      value: 'Cinnamon, Indonesian',
    },
    {
      ID: '60',
      label: 'Cinnamon, Saigon or Vietnamese',
      value: 'Cinnamon, Saigon or Vietnamese',
    },
    {
      ID: '61',
      label: 'Cinnamon, white',
      value: 'Cinnamon, white',
    },
    {
      ID: '62',
      label: 'Clary',
      value: 'Clary',
    },
    {
      ID: '63',
      label: 'Clary sage',
      value: 'Clary sage',
    },
    {
      ID: '64',
      label: 'Clove',
      value: 'Clove',
    },
    {
      ID: '65',
      label: 'Coriander greens',
      value: 'Coriander greens',
    },
    {
      ID: '66',
      label: 'Coriander herb',
      value: 'Coriander herb',
    },
    {
      ID: '67',
      label: 'Coriander seed',
      value: 'Coriander seed',
    },
    {
      ID: '68',
      label: 'Coriander, Vietnamese',
      value: 'Coriander, Vietnamese',
    },
    {
      ID: '69',
      label: 'Cornish pepper leaf',
      value: 'Cornish pepper leaf',
    },
    {
      ID: '70',
      label: 'Costmary',
      value: 'Costmary',
    },
    {
      ID: '71',
      label: 'Cudweed',
      value: 'Cudweed',
    },
    {
      ID: '72',
      label: 'Culangot',
      value: 'Culangot',
    },
    {
      ID: '73',
      label: 'Culantro',
      value: 'Culantro',
    },
    {
      ID: '74',
      label: 'Cumin',
      value: 'Cumin',
    },
    {
      ID: '75',
      label: 'Cumin, black',
      value: 'Cumin, black',
    },
    {
      ID: '76',
      label: 'Curry leaf',
      value: 'Curry leaf',
    },
    {
      ID: '77',
      label: 'Curry plant',
      value: 'Curry plant',
    },
    {
      ID: '78',
      label: 'Daun salam',
      value: 'Daun salam',
    },
    {
      ID: '79',
      label: 'Deulkkae',
      value: 'Deulkkae',
    },
    {
      ID: '80',
      label: 'Dill seed',
      value: 'Dill seed',
    },
    {
      ID: '81',
      label: 'Dill herb or weed',
      value: 'Dill herb or weed',
    },
    {
      ID: '82',
      label: 'Djansang',
      value: 'Djansang',
    },
    {
      ID: '83',
      label: 'Elderflower',
      value: 'Elderflower',
    },
    {
      ID: '84',
      label: 'Epazote',
      value: 'Epazote',
    },
    {
      ID: '85',
      label: 'Ethiopian cardamom',
      value: 'Ethiopian cardamom',
    },
    {
      ID: '86',
      label: 'False cardamom',
      value: 'False cardamom',
    },
    {
      ID: '87',
      label: 'Fennel',
      value: 'Fennel',
    },
    {
      ID: '88',
      label: 'Fenugreek',
      value: 'Fenugreek',
    },
    {
      ID: '89',
      label: 'Filé powder',
      value: 'Filé powder',
    },
    {
      ID: '90',
      label: 'Fingerroot',
      value: 'Fingerroot',
    },
    {
      ID: '91',
      label: 'Galangal',
      value: 'Galangal',
    },
    {
      ID: '92',
      label: 'Galangal, greater',
      value: 'Galangal, greater',
    },
    {
      ID: '93',
      label: 'Galangal, lesser',
      value: 'Galangal, lesser',
    },
    {
      ID: '94',
      label: 'Galingale',
      value: 'Galingale',
    },
    {
      ID: '95',
      label: 'Garlic chives',
      value: 'Garlic chives',
    },
    {
      ID: '96',
      label: 'Garlic',
      value: 'Garlic',
    },
    {
      ID: '97',
      label: 'Ginger',
      value: 'Ginger',
    },
    {
      ID: '98',
      label: 'Golpar',
      value: 'Golpar',
    },
    {
      ID: '99',
      label: 'Grains of paradise',
      value: 'Grains of paradise',
    },
    {
      ID: '100',
      label: 'Grains of Selim',
      value: 'Grains of Selim',
    },
    {
      ID: '101',
      label: 'Gumbo filé',
      value: 'Gumbo filé',
    },
    {
      ID: '102',
      label: 'Herb bennet',
      value: 'Herb bennet',
    },
    {
      ID: '103',
      label: 'Hierba santa',
      value: 'Hierba santa',
    },
    {
      ID: '104',
      label: 'Hoja santa',
      value: 'Hoja santa',
    },
    {
      ID: '105',
      label: 'Horseradish',
      value: 'Horseradish',
    },
    {
      ID: '106',
      label: 'Houttuynia cordata',
      value: 'Houttuynia cordata',
    },
    {
      ID: '107',
      label: 'Huacatay',
      value: 'Huacatay',
    },
    {
      ID: '108',
      label: 'Hyssop',
      value: 'Hyssop',
    },
    {
      ID: '109',
      label: 'Indian Bay leaf',
      value: 'Indian Bay leaf',
    },
    {
      ID: '110',
      label: 'Indonesian bay leaf',
      value: 'Indonesian bay leaf',
    },
    {
      ID: '111',
      label: 'Jakhya',
      value: 'Jakhya',
    },
    {
      ID: '112',
      label: 'Jalapeño',
      value: 'Jalapeño',
    },
    {
      ID: '113',
      label: 'Jasmine flowers',
      value: 'Jasmine flowers',
    },
    {
      ID: '114',
      label: 'Jiaogulan',
      value: 'Jiaogulan',
    },
    {
      ID: '115',
      label: 'Jimbu',
      value: 'Jimbu',
    },
    {
      ID: '116',
      label: 'Juniper berry',
      value: 'Juniper berry',
    },
    {
      ID: '117',
      label: 'Kaffir lime leaves',
      value: 'Kaffir lime leaves',
    },
    {
      ID: '118',
      label: 'Kala zeera',
      value: 'Kala zeera',
    },
    {
      ID: '119',
      label: 'Kalonji',
      value: 'Kalonji',
    },
    {
      ID: '120',
      label: 'Kawakawa seeds',
      value: 'Kawakawa seeds',
    },
    {
      ID: '121',
      label: "K'cheay",
      Value: "K'cheay",
    },
    {
      ID: '122',
      label: 'Keluak',
      value: 'Keluak',
    },
    {
      ID: '123',
      label: 'Kencur',
      value: 'Kencur',
    },
    {
      ID: '124',
      label: 'Kentjur',
      value: 'Kentjur',
    },
    {
      ID: '125',
      label: 'Kepayang',
      value: 'Kepayang',
    },
    {
      ID: '126',
      label: 'Kewra',
      value: 'Kewra',
    },
    {
      ID: '127',
      label: 'Kinh gioi',
      value: 'Kinh gioi',
    },
    {
      ID: '128',
      label: 'Kkaennip',
      value: 'Kkaennip',
    },
    {
      ID: '129',
      label: 'Kluwak',
      value: 'Kluwak',
    },
    {
      ID: '130',
      label: 'Kokam seed',
      value: 'Kokam seed',
    },
    {
      ID: '131',
      label: 'Korarima',
      value: 'Korarima',
    },
    {
      ID: '132',
      label: 'Koseret leaves',
      value: 'Koseret leaves',
    },
    {
      ID: '133',
      label: 'Krachai',
      value: 'Krachai',
    },
    {
      ID: '134',
      label: 'Kudum Puli',
      value: 'Kudum Puli',
    },
    {
      ID: '135',
      label: 'Laser',
      value: 'Laser',
    },
    {
      ID: '136',
      label: 'Laserpicium',
      value: 'Laserpicium',
    },
    {
      ID: '137',
      label: 'Lavender',
      value: 'Lavender',
    },
    {
      ID: '138',
      label: 'Lemon balm',
      value: 'Lemon balm',
    },
    {
      ID: '139',
      label: 'Lemon ironbark',
      value: 'Lemon ironbark',
    },
    {
      ID: '140',
      label: 'Lemon myrtle',
      value: 'Lemon myrtle',
    },
    {
      ID: '141',
      label: 'Lemon verbena',
      value: 'Lemon verbena',
    },
    {
      ID: '142',
      label: 'Lemongrass',
      value: 'Lemongrass',
    },
    {
      ID: '143',
      label: 'Leptotes bicolor',
      value: 'Leptotes bicolor',
    },
    {
      ID: '144',
      label: 'Lesser calamint',
      value: 'Lesser calamint',
    },
    {
      ID: '145',
      label: 'Licorice',
      value: 'Licorice',
    },
    {
      ID: '146',
      label: 'Lime flower',
      value: 'Lime flower',
    },
    {
      ID: '147',
      label: 'Linden flower',
      value: 'Linden flower',
    },
    {
      ID: '148',
      label: 'Liquorice',
      value: 'Liquorice',
    },
    {
      ID: '149',
      label: 'Locust beans',
      value: 'Locust beans',
    },
    {
      ID: '150',
      label: 'Long coriander',
      value: 'Long coriander',
    },
    {
      ID: '151',
      label: 'Lovage',
      value: 'Lovage',
    },
    {
      ID: '152',
      label: 'Mace',
      value: 'Mace',
    },
    {
      ID: '153',
      label: 'Mahalepi',
      value: 'Mahalepi',
    },
    {
      ID: '154',
      label: 'Mahleb',
      value: 'Mahleb',
    },
    {
      ID: '155',
      label: 'Makrud lime leaves',
      value: 'Makrud lime leaves',
    },
    {
      ID: '156',
      label: 'Malabathrum',
      value: 'Malabathrum',
    },
    {
      ID: '157',
      label: 'Marjoram',
      value: 'Marjoram',
    },
    {
      ID: '158',
      label: 'Mastic',
      value: 'Mastic',
    },
    {
      ID: '159',
      label: 'Mbongo spice',
      value: 'Mbongo spice',
    },
    {
      ID: '160',
      label: 'Mexican marigold',
      value: 'Mexican marigold',
    },
    {
      ID: '161',
      label: 'Mint',
      value: 'Mint',
    },
    {
      ID: '162',
      label: 'Mint marigold',
      value: 'Mint marigold',
    },
    {
      ID: '163',
      label: 'Mountain horopito',
      value: 'Mountain horopito',
    },
    {
      ID: '164',
      label: 'Musk mallow',
      value: 'Musk mallow',
    },
    {
      ID: '165',
      label: 'Mustard plant, black',
      value: 'Mustard plant, black',
    },
    {
      ID: '166',
      label: 'Mustard plant, brown',
      value: 'Mustard plant, brown',
    },
    {
      ID: '167',
      label: 'Mustard plant, white',
      value: 'Mustard plant, white',
    },
    {
      ID: '168',
      label: 'Mustard seed, black',
      value: 'Mustard seed, black',
    },
    {
      ID: '169',
      label: 'Mustard seed, brown',
      value: 'Mustard seed, brown',
    },
    {
      ID: '170',
      label: 'Mustard seed, white',
      value: 'Mustard seed, white',
    },
    {
      ID: '171',
      label: 'Mustard,  black',
      value: 'Mustard,  black',
    },
    {
      ID: '172',
      label: 'Mustard,  brown',
      value: 'Mustard,  brown',
    },
    {
      ID: '173',
      label: 'Mustard,  white',
      value: 'Mustard,  white',
    },
    {
      ID: '174',
      label: 'Mustard,  yellow',
      value: 'Mustard,  yellow',
    },
    {
      ID: '175',
      label: 'Nigella',
      value: 'Nigella',
    },
    {
      ID: '176',
      label: 'Njangsa',
      value: 'Njangsa',
    },
    {
      ID: '177',
      label: 'Nutmeg',
      value: 'Nutmeg',
    },
    {
      ID: '178',
      label: 'Olida',
      value: 'Olida',
    },
    {
      ID: '179',
      label: 'Onion seed, black',
      value: 'Onion seed, black',
    },
    {
      ID: '180',
      label: 'Oregano',
      value: 'Oregano',
    },
    {
      ID: '181',
      label: 'Oregano, Cuban',
      value: 'Oregano, Cuban',
    },
    {
      ID: '182',
      label: 'Oregano, Mexican',
      value: 'Oregano, Mexican',
    },
    {
      ID: '183',
      label: 'Orris root',
      value: 'Orris root',
    },
    {
      ID: '184',
      label: 'Pandan flower',
      value: 'Pandan flower',
    },
    {
      ID: '185',
      label: 'Pandan leaf',
      value: 'Pandan leaf',
    },
    {
      ID: '186',
      label: 'Pápalo',
      value: 'Pápalo',
    },
    {
      ID: '187',
      label: 'Paprika',
      value: 'Paprika',
    },
    {
      ID: '188',
      label: 'Paracress',
      value: 'Paracress',
    },
    {
      ID: '189',
      label: 'Parsley',
      value: 'Parsley',
    },
    {
      ID: '190',
      label: 'Pennyroyal',
      value: 'Pennyroyal',
    },
    {
      ID: '191',
      label: 'Pepper, Alligator',
      value: 'Pepper, Alligator',
    },
    {
      ID: '192',
      label: 'Pepper, black',
      value: 'Pepper, black',
    },
    {
      ID: '193',
      label: 'Pepper, Brazilian',
      value: 'Pepper, Brazilian',
    },
    {
      ID: '194',
      label: 'Pepper, Cayenne',
      value: 'Pepper, Cayenne',
    },
    {
      ID: '195',
      label: 'Pepper, Chili',
      value: 'Pepper, Chili',
    },
    {
      ID: '196',
      label: 'Pepper, Cubeb',
      value: 'Pepper, Cubeb',
    },
    {
      ID: '197',
      label: 'Pepper, Dorrigo',
      value: 'Pepper, Dorrigo',
    },
    {
      ID: '198',
      label: 'Pepper, green',
      value: 'Pepper, green',
    },
    {
      ID: '199',
      label: 'Pepper, Hepper',
      value: 'Pepper, Hepper',
    },
    {
      ID: '200',
      label: 'Pepper, Kani',
      value: 'Pepper, Kani',
    },
    {
      ID: '201',
      label: 'Pepper, long',
      value: 'Pepper, long',
    },
    {
      ID: '202',
      label: 'Pepper, mountain',
      value: 'Pepper, mountain',
    },
    {
      ID: '203',
      label: 'Pepper, Peruvian',
      value: 'Pepper, Peruvian',
    },
    {
      ID: '204',
      label: 'Pepper, pink',
      value: 'Pepper, pink',
    },
    {
      ID: '205',
      label: 'Pepper, Sichuan ',
      value: 'Pepper, Sichuan ',
    },
    {
      ID: '206',
      label: 'Pepper, Szechuan',
      value: 'Pepper, Szechuan',
    },
    {
      ID: '207',
      label: 'Pepper, Tasmanian',
      value: 'Pepper, Tasmanian',
    },
    {
      ID: '208',
      label: 'Pepper, white',
      value: 'Pepper, white',
    },
    {
      ID: '209',
      label: 'Peppermint gum leaf',
      value: 'Peppermint gum leaf',
    },
    {
      ID: '210',
      label: 'Peppermint',
      value: 'Peppermint',
    },
    {
      ID: '211',
      label: 'Perilla',
      value: 'Perilla',
    },
    {
      ID: '212',
      label: 'Persian hogweed',
      value: 'Persian hogweed',
    },
    {
      ID: '213',
      label: 'Pipicha',
      value: 'Pipicha',
    },
    {
      ID: '214',
      label: 'Poppy seed',
      value: 'Poppy seed',
    },
    {
      ID: '215',
      label: 'Purslane',
      value: 'Purslane',
    },
    {
      ID: '216',
      label: 'Quassia',
      value: 'Quassia',
    },
    {
      ID: '217',
      label: 'Recao',
      value: 'Recao',
    },
    {
      ID: '218',
      label: 'Red rice powder',
      value: 'Red rice powder',
    },
    {
      ID: '219',
      label: 'Rice paddy herb',
      value: 'Rice paddy herb',
    },
    {
      ID: '220',
      label: 'Rosemary',
      value: 'Rosemary',
    },
    {
      ID: '221',
      label: 'Rue',
      value: 'Rue',
    },
    {
      ID: '222',
      label: 'Safflower',
      value: 'Safflower',
    },
    {
      ID: '223',
      label: 'Saffron',
      value: 'Saffron',
    },
    {
      ID: '224',
      label: 'Sage',
      value: 'Sage',
    },
    {
      ID: '225',
      label: 'Salad burnet',
      value: 'Salad burnet',
    },
    {
      ID: '226',
      label: 'Salep',
      value: 'Salep',
    },
    {
      ID: '227',
      label: 'Sassafras',
      value: 'Sassafras',
    },
    {
      ID: '228',
      label: 'Savory, summer',
      value: 'Savory, summer',
    },
    {
      ID: '229',
      label: 'Savory, winter',
      value: 'Savory, winter',
    },
    {
      ID: '230',
      label: 'Screwpine',
      value: 'Screwpine',
    },
    {
      ID: '231',
      label: 'Sesame Seed',
      value: 'Sesame Seed',
    },
    {
      ID: '232',
      label: 'Shiso',
      value: 'Shiso',
    },
    {
      ID: '233',
      label: 'Silphion',
      value: 'Silphion',
    },
    {
      ID: '234',
      label: 'Silphium',
      value: 'Silphium',
    },
    {
      ID: '235',
      label: 'Smartweed',
      value: 'Smartweed',
    },
    {
      ID: '236',
      label: 'Sorado',
      value: 'Sorado',
    },
    {
      ID: '237',
      label: 'Sorrel',
      value: 'Sorrel',
    },
    {
      ID: '238',
      label: 'Sorrel, sheep',
      value: 'Sorrel, sheep',
    },
    {
      ID: '239',
      label: 'Spearmint',
      value: 'Spearmint',
    },
    {
      ID: '240',
      label: 'Spikenard',
      value: 'Spikenard',
    },
    {
      ID: '241',
      label: 'St. Lucie cherry',
      value: 'St. Lucie cherry',
    },
    {
      ID: '242',
      label: 'Star anise',
      value: 'Star anise',
    },
    {
      ID: '243',
      label: 'Straight-leaf pápalo',
      value: 'Straight-leaf pápalo',
    },
    {
      ID: '244',
      label: 'Sumac',
      value: 'Sumac',
    },
    {
      ID: '245',
      label: 'Sweet cicely',
      value: 'Sweet cicely',
    },
    {
      ID: '246',
      label: 'Sweet woodruff',
      value: 'Sweet woodruff',
    },
    {
      ID: '247',
      label: 'Tarragon',
      value: 'Tarragon',
    },
    {
      ID: '248',
      label: 'Tejpat',
      value: 'Tejpat',
    },
    {
      ID: '249',
      label: 'Temu kuntji',
      value: 'Temu kuntji',
    },
    {
      ID: '250',
      label: 'Thyme',
      value: 'Thyme',
    },
    {
      ID: '251',
      label: 'Thyme, lemon',
      value: 'Thyme, lemon',
    },
    {
      ID: '252',
      label: 'Torch',
      value: 'Torch',
    },
    {
      ID: '253',
      label: 'Turmeric',
      value: 'Turmeric',
    },
    {
      ID: '254',
      label: 'Vanilla',
      value: 'Vanilla',
    },
    {
      ID: '255',
      label: 'Vietnamese balm',
      value: 'Vietnamese balm',
    },
    {
      ID: '256',
      label: 'Voatsiperifery',
      value: 'Voatsiperifery',
    },
    {
      ID: '257',
      label: 'Wasabi',
      value: 'Wasabi',
    },
    {
      ID: '258',
      label: 'Watercress',
      value: 'Watercress',
    },
    {
      ID: '259',
      label: 'Water-pepper',
      value: 'Water-pepper',
    },
    {
      ID: '260',
      label: 'Wattleseed',
      value: 'Wattleseed',
    },
    {
      ID: '261',
      label: 'Wild thyme',
      value: 'Wild thyme',
    },
    {
      ID: '262',
      label: 'Willow herb',
      value: 'Willow herb',
    },
    {
      ID: '263',
      label: 'Wintergreen',
      value: 'Wintergreen',
    },
    {
      ID: '264',
      label: 'Wood avens',
      value: 'Wood avens',
    },
    {
      ID: '265',
      label: 'Woodruff',
      value: 'Woodruff',
    },
    {
      ID: '266',
      label: 'Wormwood',
      value: 'Wormwood',
    },
    {
      ID: '267',
      label: 'Yarrow',
      value: 'Yarrow',
    },
    {
      ID: '268',
      label: 'Yerba buena',
      value: 'Yerba buena',
    },
    {
      ID: '269',
      label: "Za'atar",
      Value: "Za'atar",
    },
    {
      ID: '270',
      label: 'Zedoary',
      value: 'Zedoary',
    },
  ];

  const [selected, setSelected] = useState([]);
  const [selectedNames, setSelectedNames] = useState([]);

  return (
    <Container>
      <Row>
        <Col xs={11}>
          <MultiSelect
            options={spice_search_options}
            value={selected}
            onChange={setSelected}
            labelledBy={'Select'}
            hasSelectAll={false}
          />
        </Col>
        <Col xs={1}>
          <Link to="/Results">
            <Button
              onClick={() => {
                const search_list = JSON.stringify(selected);
                console.log(search_list);
                JSON.parse(search_list).forEach((element, index, array) => {
                  var elemental = element.value;
                  console.log(elemental);
                  setSelectedNames(selectedNames.push(elemental));
                });
                console.log(selectedNames);
                localStorage.setItem('searchOptions', selectedNames);
              }}
            >
              Go
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default ReactTimeout(SpiceSearch);
