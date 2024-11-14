import { css, html, shadow } from "@calpoly/mustang";
import reset from "./styles/reset.css.js";

export class collegeElement extends HTMLElement {
  // static template and styles (see above)
  constructor() {
    super();
    shadow(this)
      .template(collegeElement.template)
      .styles(reset.styles, collegeElement.styles);
  }
}

// import { css } from "@calpoly/mustang";

// const styles = css`
//   * {
//     margin: 0;
//     box-sizing: border-box;
//   }
//   img {
//     max-width: 100%;
//   }
//   ul,
//   menu {
//     display: flex;
//     flex-direction: column;
//     list-style: none;
//     padding: 0;
//   }
// `;
// export default { styles };
