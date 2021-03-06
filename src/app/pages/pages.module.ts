import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {WelcomeComponent} from './welcome/welcome.component';
import {ShareModule} from '../shared/share.module';
import {PagesComponent} from './pages.component';
import {ServicesModule} from '../services/services.module';
import {BuildingComponent} from './building/building.component';
import {SearchComponent} from './search/search.component';
import {FileManagerComponent} from './file-manager/file-manager.component';
import {TestPageComponent} from './test-page/test-page.component';
import {SegmentComponent} from './segment/segment.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FileInfoComponent} from './file-info/file-info.component';
import {FrequencyCharComponent} from './frequency-char/frequency-char.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {FrequencyWordComponent} from './frequency-word/frequency-word.component';
import {AbstractComponent} from './abstract/abstract.component';
import {KeywordsComponent} from './keywords/keywords.component';
import {TranslateComponent} from './translate/translate.component';
import {ClusterComponent} from './cluster/cluster.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {EditUserInfoComponent} from './edit-user-info/edit-user-info.component';
import { CleanAutoComponent } from './clean-auto/clean-auto.component';
import { CleanStopComponent } from './clean-stop/clean-stop.component';
import { OperateLogComponent } from './operate-log/operate-log.component';


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
    TranslateComponent,
    ClusterComponent,
    ChangePasswordComponent,
    EditUserInfoComponent,
    CleanAutoComponent,
    CleanStopComponent,
    OperateLogComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ShareModule,
    ServicesModule,
    FormsModule,
    NgxEchartsModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule {
}
