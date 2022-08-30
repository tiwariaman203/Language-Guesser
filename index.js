import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import {franc, francAll} from 'franc'
const langs = require('langs');
const colors = require("colors");

const input = process.argv[2];
const langCode = franc(input);
if(langCode == 'und'){
    console.log('Sorry!!!! Try with some more text'.red);
}else{
    const language = langs.where("3", langCode);
    console.log(language.name.green);
}

