import { NextResponse } from 'next/server'

export interface EtsyListing {
  listing_id: number
  title: string
  price: { amount: number; divisor: number; currency_code: string }
  url: string
  images: Array<{ url_570xN: string; alt_text?: string }>
  tags: string[]
}

interface EtsyApiResponse {
  results: Array<{
    listing_id: number
    title: string
    price: { amount: number; divisor: number; currency_code: string }
    url: string
    tags: string[]
  }>
}

interface EtsyImagesResponse {
  results: Array<{ listing_id: number; url_570xN: string; alt_text?: string }>
}

export async function GET(request: Request) {
  const apiKey = process.env.ETSY_API_KEY
  const shopId = process.env.ETSY_SHOP_ID

  if (!apiKey || !shopId) {
    return NextResponse.json(
      { error: 'ETSY_API_KEY and ETSY_SHOP_ID env vars are required' },
      { status: 500 }
    )
  }

  const { searchParams } = new URL(request.url)
  const limit = searchParams.get('limit') ?? '4'

  // Fetch active listings
  const listingsRes = await fetch(
    `https://openapi.etsy.com/v3/application/shops/${shopId}/listings/active?limit=${limit}&includes=Images`,
    {
      headers: { 'x-api-key': apiKey },
      next: { revalidate: 3600 }, // cache 1 hour
    }
  )

  if (!listingsRes.ok) {
    const text = await listingsRes.text()
    return NextResponse.json(
      { error: `Etsy API error: ${listingsRes.status}`, detail: text },
      { status: listingsRes.status }
    )
  }

  const data = (await listingsRes.json()) as EtsyApiResponse & {
    results: Array<{ images?: EtsyImagesResponse['results'] }>
  }

  const listings: EtsyListing[] = data.results.map((item) => ({
    listing_id: item.listing_id,
    title: item.title,
    price: item.price,
    url: item.url,
    tags: item.tags ?? [],
    images: item.images ?? [],
  }))

  return NextResponse.json(listings)
}
