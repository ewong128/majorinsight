import renderPage from "./renderPage";

export class LoginPage {
  render() {
    return renderPage({
      scripts: [
        `
        import { define, Auth } from "@calpoly/mustang";
        import { LoginForm } from "/scripts/login-form.js";

        define({
          "mu-auth": Auth.Provider,
          "login-form": LoginForm
        });
        `
      ],
      styles: [
        `.body {
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
        }    `
      ],
      body: `
        <body>
          <mu-auth provides="blazing:auth">
            <article>
              <blz-header></blz-header>
              <main class="page">
                <login-form api="/auth/login">
                  <h3 slot="title">Sign in and go places!</h3>
                </login-form>
                <p class="register">
                  Or did you want to
                  <a href="./register">
                    register as a new user
                  </a>
                  ?
                </p>
              </main>
            </article>
          </mu-auth>
        </body>
      `
    });
  }
}
