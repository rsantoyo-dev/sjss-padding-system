import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { sj, SJ_BASE_COMPONENTS_IMPORTS, SjRootApi } from "super-jss";
import { DemoPaddingComponent } from "./demo-padding.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, ...SJ_BASE_COMPONENTS_IMPORTS, DemoPaddingComponent],
  template: `
    <sj-paper [sj]="[sj.d('flex'), sj.alignItems('center')]">
      <sj-flex
        useCol
        useGap="comfortable"
        [usePadding]="2"
        [sj]="sj.maxWidth('800px')"
      >
        <app-demo-padding></app-demo-padding>
      </sj-flex>
    </sj-paper>
  `,
})
export class App {
  name = "Angular";
  readonly sj: SjRootApi = sj;
}

bootstrapApplication(App);
