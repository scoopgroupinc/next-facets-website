export default function Page({ params }: { params: { hash: string } }) {
  console.log('params', params);
  return <div>My Post: {params.hash}</div>;
}
