import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, phone, service, message } = await req.json()

    // Create email content
    const emailContent = `
      New Quote Request from Maple Leaf Exterior Services Website
      
      Customer Information:
      - Name: ${name}
      - Email: ${email}
      - Phone: ${phone || 'Not provided'}
      - Service Requested: ${service || 'Not specified'}
      
      Message:
      ${message}
      
      ---
      This email was sent from the Maple Leaf Exterior Services contact form.
    `

    // In a real implementation, you would use a service like Resend, SendGrid, or similar
    // For now, we'll simulate successful sending
    console.log('Email would be sent to: mapleleafexteriorservices@gmail.com')
    console.log('Content:', emailContent)

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Quote request sent successfully!' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Failed to send quote request. Please try again.' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})