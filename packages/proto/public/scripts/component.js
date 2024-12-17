import { css, html, shadow } from "@calpoly/mustang";
import { define, Form, InputArray } from "@calpoly/mustang";
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

  // Lab 14
  get form() {
    return this.shadowRoot.querySelector("mu-form.edit");
  }

  hydrate(url) {
    fetch(url, … )
      .then( … )
      .then((json) => {
        this.renderSlots(json);
        this.form.init = json; // populate mu-form
      })
      .catch( … );
  }
}
export class CollegeProfileElement extends HTMLElement {
  static uses = define({
    "mu-form": Form.Element,
    "input-array": InputArray.Element
  });

  static template = html`<template>
  <section class="view">
    <!-- your original view with <slot>s -->
  </section>
  <mu-form class="edit">
    <label>
      <span>Username</span>
      <input name="userid" />
    </label>
    <label>
      <span>Avatar</span>
      <input type="file" name="_avatar" />
    </label>
    <label>
      <span>Name</span>
      <input name="name" />
    </label>
    <label>
      <span>Nickname</span>
      <input name="nickname" />
    </label>
    <label>
      <span>Home City</span>
      <input name="home" />
    </label>
    <label>
      <span>Airports</span>
      <input-array name="airports">
        <span slot="label-add">Add an airport</span>
      </input-array>
    </label>
    <label>
      <span>Color</span>
      <input type="color" name="color" />
    </label>
  </mu-form>
</template>`;
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

this._signout = this.shadowRoot.querySelector("#signout");

this._signout.addEventListener("click", (event) =>
  Events.relay(event, "auth:message", ["auth/signout"])
);

submit(url, json) {

  fetch(url, … )
    .then((res) => {
      // check status first here
      return res.json();
    })
    .then((json) => {
      this.renderSlots(json);
      this.form.init = json;
    })
    .catch( … );
}

get mode() {
  return this.getAttribute("mode");
}

set mode(m) {
  this.setAttribute("mode", m);
}

get editButton() {
  return this.shadowRoot.getElementById("edit");
}
this.editButton.addEventListener(
  "click",
  () => (this.mode = "edit")
);