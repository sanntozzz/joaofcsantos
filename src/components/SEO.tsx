import Head from 'next/head'

type SEOProps = {
    title?: string
    description?: string
    type?: string
    url?: string
    image?: string
}

const SITE_TITLE = 'João F. C. Santos'

function SEO({
    title,
    description = "I'm a student that's passionate about learning more about the whole world of programming.",
    type = 'website',
    url = process.env.NODE_ENV === 'production' ? 'joaofcsantos.com' : 'localhost:3000',
    image = 'https://raw.githubusercontent.com/sanntozzz/joaofcsantos/main/public/images/OpenGraphImage.jpg',
}: SEOProps) {
    const pageTitle = title ? [title, SITE_TITLE].join(' | ') : SITE_TITLE

    const metaTags = [
        { name: 'description', content: description },
        { property: 'og:type', content: type },
        { property: 'og:title', content: pageTitle },
        { property: 'og:description', content: description },
        { property: 'og:url', content: url },
        { property: 'og:image', content: image },
        { name: 'twitter:title', content: pageTitle },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:description', content: description },
        { name: 'twitter:url', content: url },
        { name: 'twitter:image', content: image },
    ].filter(Boolean)

    return (
        <Head>
            <title>{pageTitle}</title>
            {metaTags.map(({ name, property, content }) => (
                <meta key={name || property} name={name} property={property} content={content} />
            ))}
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="icon" type="image/png" href="/favicon.ico" />
            <link rel="manifest" href="/site.webmanifest" />
        </Head>
    )
}

export default SEO
