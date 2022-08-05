import NextJSImage from './nextjs.png';


/* eslint-disable-next-line */
export interface TopicButtonProps {
  topicName: string
}

export const TopicButton = ({ topicName }: TopicButtonProps) => {

  return (
    <div className="bg-white rounded-lg text-gray-800 text-6xl px-6 py-4 max-w-xs flex flex-row items-center">
      <div className='mr-4'>
        <img src={`${NextJSImage}`} alt="" className="w-16" />
      </div>
      <h1>{topicName}</h1>
    </div>
  );
};


export default TopicButton;
