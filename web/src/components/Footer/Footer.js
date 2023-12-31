import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <Text>
        This example store is powered by{' '}
        <TextLink
          href="https://redwoodjs.com/"
          target="_blank"
          rel="noreferrer"
        >
          Redwoodjs
        </TextLink>{' '}
        and{' '}
        <TextLink href="https://stripe.com/" target="_blank" rel="noreferrer">
          Stripe
        </TextLink>{' '}
        | View the repository on{' '}
        <TextLink
          href="https://github.com/redwoodjs/example-store"
          target="_blank"
        >
          GitHub
        </TextLink>
      </Text>
    </Wrapper>
  )
}

export default Footer

// Styles

const Wrapper = styled.footer`
  /*  ul resets */
  padding: 0;

  padding-bottom: var(--font-size-1);
  margin-top: var(--font-size-1);

  border-top: solid 1px var(--gray-9);
`

const Text = styled.p`
  margin-top: var(--font-size-0);
  font-size: var(--font-size-0);
`

const TextLink = styled.a`
  color: var(--primary);
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
