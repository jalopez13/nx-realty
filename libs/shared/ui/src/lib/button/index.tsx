/* eslint-disable-next-line */
export interface ButtonProps {}

export const Button = (props: ButtonProps) => {
  return (
    <div>
      <button className="bg-teal-400 text-teal-900 px-8 py-4 rounded-full hover:bg-teal-300 hover:text-teal-800 transition-colors duration-300">
        Button
      </button>
    </div>
  );
};

export default Button;
