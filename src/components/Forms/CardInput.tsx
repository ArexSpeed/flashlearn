import { Path, UseFormRegister } from "react-hook-form";

interface IFormValues {
  front: string;
  back: string;
  sentence1: string;
  sentence2: string;
}

type InputProps = {
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<IFormValues>;
  name: Path<IFormValues>;
  errorMsg: string | undefined;
};

export const CardInput = ({
  label,
  type,
  placeholder,
  register,
  name,
  errorMsg,
}: InputProps) => {
  return (
    <div>
      <label className="block mb-2 text-sm text-black dark:text-white">
        {label}
      </label>
      <input
        type={type}
        className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
        {...register(name)}
      />
      <span className="text-sm text-red-500">{errorMsg}</span>
    </div>
  );
};
