export interface IBaseComponent {
  title: string;
}

export const BaseComponent = ({ title = 'Base Component' }: IBaseComponent) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default BaseComponent;
