import Head from "next/head";
import { PageProps } from "../../types";
import { Container } from "@chakra-ui/react";
import s from "./style.module.css";
import {
  DetailedHTMLProps,
  FormEvent,
  InputHTMLAttributes,
  useId,
} from "react";

type InputCustomProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
};

const Input = ({ id, label, ...props }: InputCustomProps) => (
  <div className={s.field}>
    <input {...props} id={id} className={s.input} />
    <label htmlFor={id} className={s.label}>
      {label}
    </label>
  </div>
);

const InputAnimationWithHTMLCSS = ({ page }: PageProps) => {
  const idForm = useId();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData);
  };
  return (
    <>
      <Head>
        <title>{page.name}</title>
      </Head>
      <Container>
        <div className={s.root}>
          <div className={s.wrapper}>
            <form onSubmit={handleSubmit} className={s.form}>
              <h1 className={s.title}>Sign In</h1>
              <Input
                id={`${idForm}-email`}
                name={`${idForm}-email`}
                label="Email"
                type="email"
                placeholder=" "
                required
              />
              <Input
                id={`${idForm}-password`}
                name={`${idForm}-password`}
                label="Password"
                type="password"
                placeholder=" "
                required
              />
              <input type="submit" className={s.submit} value="Sign In" />
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default InputAnimationWithHTMLCSS;
