import Link from 'next/link'
import crypto from 'crypto'

export async function getServerSideProps(context : any) {
  const id = context.params.id as string
  context.res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate')
  return { props : { id } }
}

const Id = (id: any) => {
  return (
    <>
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

export default Id
