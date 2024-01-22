import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="container">
      <div class="gradient1"></div>
      <div class="gradient2"></div>
      <div class="gradient3"></div>
      <div class="gradient4"></div>

      <div class="circle"></div>

      <router-outlet />
    </div>
  `,
  styles: [
    `
      :host {
        padding: 50px 200px 0px 200px;
      }

      .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        // position: relative;

        > * {
          // position: absolute;
        }
      }

      .container > div {
        width: 400px;
        aspect-ratio: 1;

        &.circle {
          width: 100px;
          top: 20px;
          left: 20px;
        }
      }
    `,
  ],
})
export class AppComponent {
  title = "portfolio";
}
