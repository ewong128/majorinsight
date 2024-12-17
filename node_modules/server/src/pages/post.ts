import { css, html } from "@calpoly/mustang/server";
import { Post /*, etc... */ } from "../models";
import renderPage from "./renderPage";

export class PostPage {
  data: Post;

  constructor(data: Post) {
    this.data = data;
  }


  renderBody() {
    return html`
      ${this.renderHeader()}
      ${this.renderForm()}
      ${this.renderRules()}
    `;
  }
  
  renderHeader() {
    return html`
      <h1>
        <svg class="icon">
          <use href="/icons/education.svg#icon-gradcap" />
        </svg>
        <a href="index.html">Rate My Major</a>
      </h1>
    `;
  }
  
  renderRules() {
    return html`
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
    return html`
      <form action="/submit_post" method="post">
        <label for="name">Name: (Can put "Anonymous" or your name/nickname)</label><br>
        <input type="text" id="name" name="name" value="${name}" required><br><br>
        <!-- Add other form fields here -->
      </form>
    `;
  }
  
  renderPost(post: Post) {
    const { name, major, review } = post;
  
    return html`
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
            <option value="computer-science" ${major === 'computer-science' ? 'selected' : ''}>Computer Science</option>
            <option value="business" ${major === 'business' ? 'selected' : ''}>Business</option>
            <option value="engineering" ${major === 'engineering' ? 'selected' : ''}>Engineering</option>
          </select><br><br>
  
          <label for="review">Review:</label><br>
          <textarea id="review" name="review" rows="4" cols="50" required>${review}</textarea><br><br>

          <button type="submit">Submit</button>
        </form>
      </review-post>
    `;
  }

  // Lab 13, there are some issue with the following
// _authObserver = new Observer(this, "blazing:auth");

// connectedCallback(); {
//   this._authObserver.observe(({ user }) => {
//     this._user = user;
//   });
// }

// get authorization() {
//     return (
//       this._user?.authenticated && {
//         Authorization: `Bearer ${this._user.token}`
//       }
//     );
//   }
//   fetch(url, { headers: this.authorization }).then((res) => {
//     // handle the response
//   });
  
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

 