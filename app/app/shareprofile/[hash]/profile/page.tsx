'use client';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/Button';

export default function Page({ params }: { params: { hash: string } }) {
  console.log('params', params);
  const router = useRouter();

  return (<div>profile</div>)
};