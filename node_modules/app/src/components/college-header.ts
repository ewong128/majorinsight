import { LitElement, css, html } from "lit";

export class CollegeHeaderElement extends LitElement {
  render() {
    return html`
      <header>
        <title>Home Page</title>
        <link rel="stylesheet" href="styles/reset.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
            href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&family=Dosis:wght@400;700&display=swap"
            rel="stylesheet" />
        
        <link rel="stylesheet" href="styles/page.css" />
        <link rel="stylesheet" href="styles/token.css" />
        
        <label>
            <input type="checkbox" id="dark-mode-toggle" />
            Dark mode
          </label>
          <script type="module">
            import { define, Auth } from "@calpoly/mustang";
          
            define({ "mu-auth": Auth.Provider });
          </script>
      </header>
    `;
  }

  static styles = css`
   body {
    background-color: var(--color-background-body);
    font-family: var(--font-family-body);
    margin: var(--margin-body);
    padding: var(--padding-body);
    line-height: var(--line-height-body);
    font-size: var(--font-size-body);
    color: var(--color-text);
}

h1, h2 {
    font-family: var(--font-family-header);
    color: var(--color-text-body);
}

h3 {
    font-family: var(--font-family-body);
    color: var(--color-text-header);
}
  `;
}