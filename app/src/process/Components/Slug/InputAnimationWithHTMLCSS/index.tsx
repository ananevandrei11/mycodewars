import Head from "next/head";
import { Container } from "@chakra-ui/react";
import { DetailedHTMLProps, InputHTMLAttributes, useId } from "react";
import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import s from "./style.module.css";
import { PageProps } from "../../types";

const schema = z.object({
  email: z
    .string()
    .nonempty({ message: "The email is required" })
    .email({ message: "The email has invalid format" }),
  password: z
    .string()
    .nonempty({ message: "The password is required" })
    .min(6, { message: "The password cannot be less than 6 characters" }),
});

type FormData = z.infer<typeof schema>;

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputCustomProps<T extends FieldValues> = Omit<InputProps, "name"> & {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors?: Partial<DeepMap<T, FieldError>>;
  rules?: RegisterOptions;
};

const Input = <T extends Record<string, unknown>>({
  id,
  label,
  name,
  register,
  rules,
  errors,
  ...props
}: InputCustomProps<T>) => (
  <div className={s.rootInput}>
    <div className={s.field}>
      <input
        id={id}
        className={s.input}
        aria-describedby={`${id}-error-message`}
        {...props}
        {...register(name, rules)}
      />
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
    </div>
    {errors && errors[name] && (
      <p role="alert" id={`${id}-error-message`} className={s.error}>
        {errors[name]?.message}
      </p>
    )}
  </div>
);

const InputAnimationWithHTMLCSS = ({ page }: PageProps) => {
  const idForm = useId();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onSubmit",
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Submit", data);
  };

  return (
    <>
      <Head>
        <title>{page.name}</title>
      </Head>
      <Container>
        <div className={s.root}>
          <div className={s.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
              <h1 className={s.title}>Sign In</h1>

              <Input<FormData>
                id={`${idForm}-email`}
                label="Email"
                type="email"
                name="email"
                placeholder=" "
                register={register}
                errors={errors}
                aria-invalid={errors.email ? "true" : "false"}
                autoComplete="email"
              />

              <Input<FormData>
                id={`${idForm}-password`}
                label="Password"
                type="password"
                placeholder=" "
                name="password"
                errors={errors}
                register={register}
                aria-invalid={errors.password ? "true" : "false"}
                autoComplete="current-password"
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
