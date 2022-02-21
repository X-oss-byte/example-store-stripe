import ProductsCell from 'src/components/ProductsCell'
// import SubscriptionsCell from 'src/components/SubscriptionsCell'

const HomePage = () => {
  return (
    <>
      <article>
        <h2>Super Tokens</h2>
        <p>These are single-use tokens. Great for emergencies and gifts.</p>
        <ProductsCell />
      </article>

      <article>
        <h2>Super Subs</h2>
        <p>
          Monthly subscriptions to superpowers. Great for the career
          supervillain, hero or parent.
        </p>
        {/* <SubscriptionsCell /> */}
      </article>
    </>
  )
}

export default HomePage
