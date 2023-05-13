import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../../components/header'
import crypto from 'crypto'

export default function PostPage() {
  const router = useRouter()
  const id = router.query.id as string

  return (
    <>
      <Header />
      <p>Post: {crypto.randomBytes(838400).toString('hex')}</p>
      <ul>
        <li>
          <Link href={`/post/${id}/first-comment`}>First comment</Link>
        </li>
        <li>
          <Link href={`/post/${id}/second-comment`}>Second comment</Link>
        </li>
      </ul>
    </>
  )
}
