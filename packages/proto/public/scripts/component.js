import { css, html, shadow } from "@calpoly/mustang";

// Lines 4-10 are from Lab 12 [there is an error below]
// get src() {
//   return this.getAttribute("src");
// }

connectedCallback() ;{
  if (this.src) this.hydrate(this.src);
}


hydrate(url) ;{
  fetch(url)
    .then((res) => {
      if (res.status !== 200) throw `Status: ${res.status}`;
      return res.json();
    })
    .then((json) => this.renderSlots(json))
    .catch((error) =>
      console.log(`Failed to render data ${url}:`, error)
    );
}

renderSlots(json) ;{
  const entries = Object.entries(json);
  const toSlot = ([key, value]) =>
    html`<span slot="${key}">${value}</span>`

  const fragment = entries.map(toSlot);
  this.replaceChildren(...fragment);
}

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