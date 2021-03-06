import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {PagesComponent} from './pages.component';
import {BuildingComponent} from './building/building.component';
import {FileManagerComponent} from './file-manager/file-manager.component';
import {SearchComponent} from './search/search.component';
import {TestPageComponent} from './test-page/test-page.component';
import {SegmentComponent} from './segment/segment.component';
import {FileInfoComponent} from './file-info/file-info.component';
import {FrequencyCharComponent} from './frequency-char/frequency-char.component';
import {FrequencyWordComponent} from './frequency-word/frequency-word.component';
import {AbstractComponent} from './abstract/abstract.component';
import {KeywordsComponent} from './keywords/keywords.component';
import {TranslateComponent} from './translate/translate.component';
import {ClusterComponent} from './cluster/cluster.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {EditUserInfoComponent} from './edit-user-info/edit-user-info.component';
import {CleanAutoComponent} from './clean-auto/clean-auto.component';
import {CleanStopComponent} from './clean-stop/clean-stop.component';
import {OperateLogComponent} from './operate-log/operate-log.component';


// @ts-ignore
const routes: Routes = [
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    {
      path: '',
      component: PagesComponent,
      children: [
        {path: 'welcome', component: WelcomeComponent},
        {path: 'file-manager', component: FileManagerComponent},
        {path: 'building', component: BuildingComponent},
        {path: 'search', component: SearchComponent},
        {path: 'test', component: TestPageComponent},
        {path: 'segment', component: SegmentComponent},
        {path: 'feature', component: FileInfoComponent},
        {path: 'charfreq', component: FrequencyCharComponent},
        {path: 'wordfreq', component: FrequencyWordComponent},
        {path: 'abstract', component: AbstractComponent},
        {path: 'keywords', component: KeywordsComponent},
        {path: 'translate', component: TranslateComponent},
        {path: 'cluster', component: ClusterComponent},
        {path: 'password', component: ChangePasswordComponent},
        {path: 'edituser', component: EditUserInfoComponent},
        {path: 'autoclean', component: CleanAutoComponent},
        {path: 'stopclean', component: CleanStopComponent},
        {path: 'operlog', component: OperateLogComponent},
      ]
    },
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
