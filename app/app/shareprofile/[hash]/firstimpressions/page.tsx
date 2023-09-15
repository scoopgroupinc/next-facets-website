'use client';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/Button';

export default function Page({ params }: { params: { hash: string } }) {
  console.log('params', params);
  const router = useRouter();

  return (
    <>
      <div className="bg-gradient"></div>
      <div className="text-white text-lg text-center">
        <h4>First Impressions</h4>
        <p>What does this profile say about me? Select 3</p>
        Name (optional) let them know who’s helping them
      </div>
      <div className="mx-auto w-full fixed bottom-0">
        <div className="max-w-xs mx-auto">
          <div className="mb-5 ">
            <Button
              color={'white'}
              className="max-w-xs"
              onClick={() => router.push('/app/shareprofile/[hash]/godeeper')}
            >
              Continue 3/3
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
