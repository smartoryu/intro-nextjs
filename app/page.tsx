const getData = async () => {
  await new Promise((res) => setTimeout(() => res(0), 2000))
  return { data: [1, 2, 3] }
}

export default async function Home() {
  console.log('start component')
  const data = await getData()
  console.log('data:')
  console.log(data)
  return <div>Home</div>
}
