'use strict';

import {Base} from 'yeoman-generator';
import intro from './modules/intro';
import prompts from './modules/prompts';
import files from './modules/files';
import install from './modules/install';

export default class Generator extends Base {
  constructor(...args) {
    super(...args);
  }
}

Generator.prototype.intro = intro;
Generator.prototype.prompts = prompts;
Generator.prototype.files = files;
Generator.prototype.install = install;
