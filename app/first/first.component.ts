import {Component} from 'angular2/core';

import {HeaderFirstComponent} from './header/header.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AboutComponent} from './about/about.component';
import {SimilaritiesComponent} from './similarities/similarities.component';
import {FooterComponent} from '../common/footer/footer.component';
import {LoaderComponent} from '../common/loader/loader.component';

let tpl = require('./first.template.html');
let style = require('./first.css');

@Component({
  selector: 'first-page',
  template: tpl,
  styles: [style],
  directives: [HeaderFirstComponent, WelcomeComponent, AboutComponent, SimilaritiesComponent, FooterComponent, LoaderComponent]
})

export class FirstComponent {
}
