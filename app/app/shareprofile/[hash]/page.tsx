'use client';
import Button from '@/app/components/Button';

export default function Page({ params }: { params: { hash: string } }) {
  console.log('params', params);
  return (
    <>
      <div className="bg-gradient"></div>
      <div className="text-white text-lg text-center">
        My Post: {params.hash}
        <h4>
          I need your <br />
          opinion
          <br />
          <span className="text-3xl">🥺</span>
        </h4>
        <h4>
          Please help me <br />
          grow while <br />
          dating
        </h4>
      </div>
      <div className="w-full max-w-xs flex">
        <div className="items-center justify-between">
          <Button onClick={() => console.log('clicked')}>
            Accept Challenge!
          </Button>
        </div>
      </div>
      <div>
        <Button onClick={() => console.log('decline')}>
          Decline Challenge
        </Button>
      </div>
    </>
  );
}
