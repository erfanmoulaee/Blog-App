"use client";

import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import Spinner from "@/ui/Spinner";

const schema = yup
  .object({
    email: yup.string().email("ایمیل نا معتبر است").required("ایمیل الزامی است"),
    password: yup.string().required("رمز عبور الزامی است"),
  })
  .required();

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { signin } = useAuth();

  const onSubmit = async (values) => {
    await signin(values);
  };
  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">ورود </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <RHFTextField label="ایمیل" name="email" register={register} dir="ltr" isRequired errors={errors} />
        <RHFTextField label="رمز عبور" name="password" register={register} type="password" dir="ltr" isRequired errors={errors} />
        {isLoading ? (
          <Spinner />
        ) : (
          <Button type="submit" variant="primary" className="w-full">
            ورود
          </Button>
        )}
      </form>
      <Link href="/signup" className="text-secondary-500 mt-6 text-center">
        ثبت نام
      </Link>
    </div>
  );
}

export default Signin;
