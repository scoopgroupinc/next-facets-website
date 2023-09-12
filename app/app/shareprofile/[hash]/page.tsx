'use client';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/Button';
import Image from 'next/image';
import FacetsLogoWithText from '@/app/components/FacetsLogoWithText';

export default function Page({ params }: { params: { hash: string } }) {
  console.log('params', params);
  const router = useRouter();

  return (
    <>
      <div className="bg-gradient"></div>
      <div
        className="flex flex-row min-h-screen"
        style={{ paddingBottom: 150 }}
      >
        <div className="max-w-screen-md mx-auto w-full">
          <div className="flex justify-center mt-10">
            <FacetsLogoWithText width={50} />
          </div>
          <div
            className="flex justify-center mt-5 mb-5 rounded-full mx-auto"
            style={{ width: 200, height: 200, backgroundColor: '#333' }}
          >
            <Image width={200} height={200} src={''} alt={'profile image'} />
          </div>
          <div className="text-white text-lg text-center">
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
        </div>
      </div>
      <div className="mx-auto w-full fixed bottom-0">
        <div className="max-w-xs mx-auto">
          <div className="mb-5 ">
            <Button
              color={'white'}
              onClick={() => router.push('/app/shareprofile/[hash]/profile')}
            >
              Accept Challenge!
            </Button>
          </div>
          <div className="mb-5">
            <Button color={'transparent'} onClick={() => router.push('/app/')}>
              Decline Challenge
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
