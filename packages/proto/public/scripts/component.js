import { css, html, shadow } from "@calpoly/mustang";

export class collegeElement extends HTMLElement {
  static template = html`
    <template>
    <h3><slot name="link"><a href="#">Link</a></slot></h3>
    </template>
  `;
  static styles = css``;
  constructor() {
    super();
    type="module";
    shadow(this)
      .template(collegeElement.template)
      .styles(reset.styles, collegeElement.styles);
  }

}