import { css, html, shadow } from "@calpoly/mustang";
import reset from "./styles/reset.css.js";


export class LoginForm extends HTMLElement {
  static template = html`
    <template>
      <form>
        <slot name="title">
          <h3>Sign in with Username and Password</h3>
        </slot>
        <label>
          <span>
            <slot name="username">Username</slot>
          </span>
          <input name="username" autocomplete="off" />
        </label>
        <label>
          <span>
            <slot name="password">Password</slot>
          </span>
          <input type="password" name="password" />
        </label>
        <slot name="submit">
          <button type="submit">Sign In</button>
        </slot>
      </form>
    </template>
  `;

  static styles = css`
              
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f5f5f5;
          color: #333;
        }
        .page {
          max-width: 400px;
          margin: 50px auto;
          padding: 20px;
          background-color: #fff;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
        }

        .page h3 {
          font-size: 24px;
          margin-bottom: 20px;
          text-align: center;
          color: #444;
        }
        login-form {
          display: block;
        }

        login-form h3 {
          font-size: 20px;
          margin-bottom: 15px;
        }

        login-form input {
          width: calc(100% - 20px);
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }

        login-form button {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          background-color: #0078d4;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        login-form button:hover {
          background-color: #005bb5;
        }
        .register {
          margin-top: 20px;
          text-align: center;
          font-size: 14px;
          color: #555;
        }
        .register a {
          color: #0078d4;
          text-decoration: none;
        }

        .register a:hover {
          text-decoration: underline;
        }

  `;

  constructor() {
    super();

    shadow(this)
      .template(LoginForm.template)
      .styles(reset.styles, LoginForm.styles);
  }

  
  this.form.addEventListener("submit", (event) =>
    submitLoginForm(
      event,
      this.getAttribute("api"),
      this.getAttribute("redirect") || "/"
    )
  );
  get form() {
    return this.shadowRoot.querySelector("form");
  }
}


function submitLoginForm(event, endpoint, redirect) {
  event.preventDefault();
  const form = event.target.closest("form");
  const data = new FormData(form);
  const method = "POST";
  const headers = {
    "Content-Type": "application/json"
  };
  const body = JSON.stringify(Object.fromEntries(data));

  fetch(endpoint, { method, headers, body })
    .then((res) => {
      if (res.status !== 200)
        throw `Form submission failed: Status ${res.status}`;
      return res.json();
    })
    .then((payload) => {
      const { token } = payload;

      form.dispatchEvent(
        new CustomEvent("auth:message", {
          bubbles: true,
          composed: true,
          detail: ["auth/signin", { token, redirect }]
        })
      );
    })
    .catch((err) => console.log("Error submitting form:", err));
}

