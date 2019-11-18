import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {WelcomeComponent} from './welcome/welcome.component';
import {SharedModule} from '../shared/shared.module';
import {PagesComponent} from './pages.component';
import {ServicesModule} from '../services/services.module';
import {BuildingComponent} from './building/building.component';
import {SearchComponent} from './search/search.component';
import {FileManagerComponent} from './file-manager/file-manager.component';
import {TestPageComponent} from './test-page/test-page.component';
import {SegmentComponent} from './segment/segment.component';
import {FormsModule} from '@angular/forms';
import { FileInfoComponent } from './file-info/file-info.component';
import { FrequencyCharComponent } from './frequency-char/frequency-char.component';
import {NgxEchartsModule} from 'ngx-echarts';
import { FrequencyWordComponent } from './frequency-word/frequency-word.component';
import { AbstractComponent } from './abstract/abstract.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { TranslateComponent } from './translate/translate.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    PagesComponent,
    BuildingComponent,
    SearchComponent,
    FileManagerComponent,
    TestPageComponent,
    SegmentComponent,
    FileInfoComponent,
    FrequencyCharComponent,
    FrequencyWordComponent,
    AbstractComponent,
    KeywordsComponent,
    TranslateComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ServicesModule,
    FormsModule,
    NgxEchartsModule,
  ]
})
export class PagesModule {
}
