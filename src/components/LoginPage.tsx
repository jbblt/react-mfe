import { state$ } from "@jbblt/utility";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const LoginPage = () => {
  const [user, setUser] = useState("");
  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
    const subscription = state$.subscribe((data) => {
      setUser(data.data);
    });
    return () => {
      return subscription;
    };
  });
  // state$.next({ data: "React data" });

  const onSubmitInput = (form: any) => {
    state$.next({ data: form.username });
    const subscription = state$.subscribe((data) => {
      setUser(data.data);
    });
    reset();
    return () => {
      return subscription;
    };
  };
  return (
    <div>
      <h1>Login</h1>
      <br />
      {user ? (
        <h2>{user} is logged</h2>
      ) : (
        <form onSubmit={handleSubmit(onSubmitInput)}>
          <label htmlFor="">Enter name : </label>
          <input
            type="text"
            {...register("username")}
            placeholder={"Username"}
          />
        </form>
      )}
    </div>
  );
};
