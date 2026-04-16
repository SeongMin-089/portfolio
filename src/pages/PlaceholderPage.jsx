import React from 'react'

const PlaceholderPage = () => {
  title,
  desc='이 페이지는 곧 추가될 콘텐츠를 위한 자리입니다.'
  return (
    <section>
      <h1>{title}</h1>
      <p>{desc}</p>
      <Link to="/">back to home</Link>
    </section>
  )
}

export default PlaceholderPage