"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var post_exports = {};
__export(post_exports, {
  PostPage: () => PostPage
});
module.exports = __toCommonJS(post_exports);
var import_server = require("@calpoly/mustang/server");
class PostPage {
  data;
  constructor(data) {
    this.data = data;
  }
  renderBody() {
    return import_server.html`
      ${this.renderHeader()}
      ${this.renderForm()}
      ${this.renderRules()}
    `;
  }
  renderHeader() {
    return import_server.html`
      <h1>
        <svg class="icon">
          <use href="/icons/education.svg#icon-gradcap" />
        </svg>
        <a href="index.html">Rate My Major</a>
      </h1>
    `;
  }
  renderRules() {
    return import_server.html`
      <h3>Rules</h3>
      <ul>
        <li>Please fill out every entry</li>
        <li>Do not use any foul or inappropriate language, keep it PG-13</li>
        <li>Please be honest and truthful in your post</li>
      </ul>
    `;
  }
  renderForm() {
    const { name } = this.data;
    return import_server.html`
      <form action="/submit_post" method="post">
        <label for="name">Name: (Can put "Anonymous" or your name/nickname)</label><br>
        <input type="text" id="name" name="name" value="${name}" required><br><br>
        <!-- Add other form fields here -->
      </form>
    `;
  }
  renderPost(post) {
    const { name, major, review } = post;
    return import_server.html`
      <review-post>
        <h1>Making a Post</h1>
        <p>Hello, you have arrived at the page to make a post. Just a few things to note:</p>
  
        <h3>Rules</h3>
        <ul>
          <li>Please fill out every entry</li>
          <li>Do not use any foul or inappropriate language, keep it PG-13</li>
          <li>Please be honest and truthful in your post</li>
        </ul>
  
        <h2>Let's Make A Post</h2>
  
        <form action="/submit_post" method="post">
          <label for="name">Name: (Can put "Anonymous" or your name/nickname)</label><br>
          <input type="text" id="name" name="name" value="${name}" required><br><br>
  
          <label for="major">Major:</label><br>
          <select id="major" name="major" required>
            <option value="" disabled selected>Select your major</option>
            <option value="computer-science" ${major === "computer-science" ? "selected" : ""}>Computer Science</option>
            <option value="business" ${major === "business" ? "selected" : ""}>Business</option>
            <option value="engineering" ${major === "engineering" ? "selected" : ""}>Engineering</option>
          </select><br><br>
  
          <label for="review">Review:</label><br>
          <textarea id="review" name="review" rows="4" cols="50" required>${review}</textarea><br><br>

          <button type="submit">Submit</button>
        </form>
      </review-post>
    `;
  }
  // render() {
  //   return renderPage({
  //     body: this.renderBody(),
  //     // add more parts here later
  //   });
  // }
  // render() {
  //   return renderPage({
  //     body: this.renderBody(),
  //     stylesheets: ["/styles/destination.css"],
  //     styles: [
  //       css`main.page {
  //           --page-grids: 8;
  //           @media screen and (max-width: 48rem) {
  //             --page-grids: 6;
  //         }
  //       }`
  //     ],
  //     scripts: [
  //       `import { define } from "@calpoly/mustang";
  //       import { CollegeElement } from "/scripts/college.js";
  //       define({
  //         "college-element":CollegeElement
  //       });`
  //     ]
  //   });
  // }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PostPage
});
