import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { InfoComponent } from 'src/app/Components/info/info.component';
import { SharedModule } from 'src/app/Components/shared/shared.module';
import { StoryComponent } from 'src/app/Components/story/story.component';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent, InfoComponent, StoryComponent],
  imports: [SharedModule, AppRoutingModule, HttpClientModule],
  exports: [AboutComponent, InfoComponent, StoryComponent],
})
export class AboutModule {}
