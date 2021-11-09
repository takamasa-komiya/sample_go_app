import Button from '@material-ui/core/Button';
import Link from 'next/link'

export default function MenuButton(href: string, name: string) {
  return (
    <Link href={href} passHref>
      <Button
      id="home-button"
      variant="contained"
      color="primary"
      >
        {name}
      </Button>
    </Link>
  )
}
