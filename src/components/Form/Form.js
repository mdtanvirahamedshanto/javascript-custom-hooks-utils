import { useForm } from "../../hooks/useForm";

export const Form = () => {
  const [values, handleChange] = useForm();

  return (
    <div>
      <p>{values.fullname}</p>
      <form>
        <input
          type="text"
          placeholder="Name"
          name="fullname"
          onChange={(e) => handleChange(e)}
        />

        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
};
