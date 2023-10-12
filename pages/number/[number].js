import { useRouter } from 'next/router'

export default function RootLayout() {
  const router = useRouter()
  const Number = router.query.number
  console.log('router.query', router.query)

    return (
      <div>{Number}</div>
    )
  }