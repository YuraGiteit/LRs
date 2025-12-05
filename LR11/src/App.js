import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    reset({
      login: "",
      firstName: "Пам’ятай",
      lastName: "Про курсову роботу",
    });
  };

  const latinLoginPattern = /^[A-Za-z0-9_]+$/;

  return (
    <div className="App">
      <h1>React Hook Form for IPZ</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Login:
          <input
            {...register("login", {
              required: "Логін обов'язковий для заповнення",
              pattern: {
                value: latinLoginPattern,
                message: "Логін має містити тільки латинські символи",
              },
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.login && <p>{errors?.login?.message}</p>}
        </div>

        <label>
          FirstName:
          <input
            {...register("firstName", {
              required: "Поле обов'язкове для заповнення!",
              minLength: {
                value: 5,
                message: "Мінімальна кількість символів: 5",
              },
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.firstName && <p>{errors?.firstName?.message}</p>}
        </div>

        <label>
          LastName:
          <input
            {...register("lastName", {
              required: "Поле обов'язкове для заповнення!",
              minLength: {
                value: 5,
                message: "Мінімальна кількість символів: 5",
              },
              maxLength: {
                value: 25,
                message: "Максимальна кількість символів: 25",
              },
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.lastName && <p>{errors?.lastName?.message}</p>}
        </div>

        <input type="submit" value="Відправити" />
      </form>
    </div>
  );
}

export default App;
