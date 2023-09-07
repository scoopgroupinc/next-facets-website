export const metadata = {
  title: 'Share Profile',
  description: 'Share Profile',
};

export default function Page({ params }: { params: { hash: string } }) {
  console.log('params', params);
  return <div>My Post: {params.hash}</div>;
}
