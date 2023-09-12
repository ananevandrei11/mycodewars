import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";
import { Poppins } from "@next/font/google";
import { PageProps } from "../../types";
import s from "./style.module.css";
import BGLogin from "../../../../../public/login-bg.png";
const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const LoginForm = ({ page }: PageProps) => (
  <>
    <Head>
      <title>{page.name}</title>
    </Head>
    <section className={clsx(poppins.className, s.root)}>
      <div className={s.login}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          src={BGLogin.src}
          width={BGLogin.width}
          height={BGLogin.height}
          placeholder="blur"
          blurDataURL={BGLogin.blurDataURL}
          alt="image"
          className={s.background}
        />
        <form className={s.form}>
          <h1 className={s.title}>Login</h1>
          <div className={s.inputs}>
            <div className={s.field}>
              <input
                type="email"
                placeholder="Email ID"
                required
                className={s.input}
              />
              <i className={clsx("ri-mail-fill", s.icon)}></i>
            </div>
            <div className={s.field}>
              <input
                type="password"
                placeholder="Password"
                required
                className={s.input}
              />
              <i className={clsx("ri-lock-2-fill", s.icon)}></i>
            </div>
          </div>
          <div className={s.check}>
            <div className={s.checkField}>
              <input
                type="checkbox"
                name="user-check"
                id="user-check"
                className={s.checkInput}
              />
              <label htmlFor="user-check" className={s.checkLabel}>
                Remeber Me
              </label>
            </div>

            <a href="#" className={s.checkForgot}>
              Forgot Password
            </a>
          </div>

          <button type="submit" className={s.button}>
            Login
          </button>

          <div className={s.register}>
            Don`t have an account? <a href="#">Register</a>
          </div>
        </form>
      </div>
    </section>
  </>
);

export default LoginForm;
