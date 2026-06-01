'use server'

export async function subscribe(email: string) {
  const apiKey = process.env.KIT_API_KEY
  const formId = process.env.NEXT_PUBLIC_KIT_FORM_ID

  if (!apiKey || !formId) {
    return { success: false, error: 'Newsletter not configured' }
  }

  const headers = {
    'Content-Type': 'application/json',
    'X-Kit-Api-Key': apiKey,
  }

  // Step 1: Create or upsert the subscriber
  const createRes = await fetch('https://api.kit.com/v4/subscribers', {
    method: 'POST',
    headers,
    body: JSON.stringify({ email_address: email }),
  })

  const createBody = await createRes.json()
  console.log('Kit create subscriber:', createRes.status, JSON.stringify(createBody))

  if (!createRes.ok) {
    return { success: false, error: 'Something went wrong. Please try again.' }
  }

  const subscriber = createBody.subscriber
  console.log('Subscriber ID:', subscriber?.id)

  // Step 2: Add subscriber to the form
  const addRes = await fetch(`https://api.kit.com/v4/forms/${formId}/subscribers`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ id: subscriber.id }),
  })

  const addBody = await addRes.json()
  console.log('Kit add to form:', addRes.status, JSON.stringify(addBody))

  if (!addRes.ok) {
    return { success: false, error: 'Something went wrong. Please try again.' }
  }

  return { success: true }
}
