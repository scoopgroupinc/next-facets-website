'use client';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/Button';

export default function Page({ params }: { params: { hash: string } }) {
  console.log('params', params);
  const router = useRouter();

  return (
    <>
      <div className="bg-gradient"></div>
      <div className="full-w pt-5">
        <div className="max-w-xs mx-auto">
          <h4 className="text-white text-lg font-medium">Go Deeper</h4>
          <label
            htmlFor="answer"
            className="block mt-5 mb-2 text-m text-white dark:text-white"
          >
            What does my profile say to you?
          </label>
          <textarea
            className="block shadow appearance-none p-2.5 w-full text-m text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:shadow-outline"
            rows={4}
            id="answer"
            placeholder="Write your thoughts here..."
          />

          <label
            htmlFor="name"
            className="block mt-10 mb-2 text-m text-white dark:text-white"
          >
            Name (optional)
          </label>
          <p className="text-sm text-white mb-2">
            let them know who’s helping them
          </p>
          <input
            className="shadow appearance-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
          />

          <label className="relative inline-flex items-center mt-20 mb-5 cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
            <span className="ml-3 text-sm text-white">
              Allow user to chat with you
            </span>
          </label>

          <div className="items-center mt-5 w-full">
            <Button
              color={'white'}
              onClick={() => router.push('/app/shareprofile/[hash]/godeeper')}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
